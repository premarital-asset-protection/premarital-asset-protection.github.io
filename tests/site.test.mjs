import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import { test } from "node:test";

const page = (name) =>
  readFile(new URL(`../src/pages/${name}.astro`, import.meta.url), "utf8");

/**
 * Prose in these pages is wrapped across lines, so a phrase assertion has to
 * ignore where the line breaks fall. Without this, adding a word to a sentence
 * silently breaks a test that has nothing to do with the change.
 */
const prose = async (name) => (await page(name)).replace(/\s+/g, " ");

test("customer navigation uses the canonical user subdomain", async () => {
  const urls = await readFile(new URL("../src/lib/urls.ts", import.meta.url), "utf8");
  const layout = await readFile(new URL("../src/layouts/SiteLayout.astro", import.meta.url), "utf8");
  assert.match(urls, /USER_ORIGIN = "https:\/\/user\.pmap\.pro"/);
  assert.match(urls, /APP_ORIGIN = "https:\/\/app\.pmap\.pro"/);
  assert.match(urls, /\/quote/);
  assert.match(urls, /\/pre-interest/);
  assert.match(urls, /\/apply/);
  assert.match(layout, /QUOTE_URL/);
  assert.match(layout, /PRE_INTEREST_URL/);
  assert.match(layout, /APPLICATION_URL/);
  assert.match(layout, /Start planning/);
  assert.doesNotMatch(layout, /APP_ORIGIN/);
});

test("homepage exposes all three bounded intake choices", async () => {
  const source = await page("index");
  assert.match(source, /Not a law firm|not a law firm|Not legal advice/i);
  assert.match(source, /QUOTE_URL/);
  assert.match(source, /PRE_INTEREST_URL/);
  assert.match(source, /APPLICATION_URL/);
  assert.match(source, /user\.pmap\.pro/);
  assert.match(source, /api\.pmap\.pro/);
  assert.match(source, /compatibility redirect/);
  assert.match(source, /Do not upload or\s+paste identity numbers/i);
});

test("every page is reachable from the layout's navigation", async () => {
  const layout = await readFile(new URL("../src/layouts/SiteLayout.astro", import.meta.url), "utf8");
  const files = await readdir(new URL("../src/pages/", import.meta.url));
  for (const file of files) {
    const slug = file.replace(/\.astro$/, "");
    if (slug === "index") continue;
    assert.match(layout, new RegExp(`href="/${slug}/"`), `${slug} is not linked from the layout`);
  }
});

test("every page declares a title and a description", async () => {
  const files = await readdir(new URL("../src/pages/", import.meta.url));
  for (const file of files) {
    const source = await page(file.replace(/\.astro$/, ""));
    assert.match(source, /const title =/, `${file} has no title`);
    assert.match(source, /const description =/, `${file} has no description`);
  }
});

/**
 * The privacy page is the one most likely to go quietly stale, and the one
 * where staleness is most costly: the app stores a financial disclosure.
 * These assertions fail if it drifts back into a placeholder.
 */
test("the privacy page describes the storage the app actually has", async () => {
  const source = await page("privacy");
  assert.doesNotMatch(
    source,
    /will have its own privacy notice|when persistence ships/i,
    "privacy page still says the notice is pending — persistence has shipped",
  );
  for (const [needle, why] of [
    [/audit/i, "read/export auditing"],
    [/row-level security/i, "database-enforced ownership"],
    [/withdraw/i, "withdrawing AI provider consent"],
    [/never do/i, "the explicit never-do list"],
    [/\/24|\/48/, "address truncation"],
    [/delet/i, "deletion"],
  ]) {
    assert.match(source, needle, `privacy page does not mention ${why}`);
  }
});

test("the AI disclosure is per-provider and opt-in, everywhere it is described", async () => {
  const privacy = await prose("privacy");
  assert.match(privacy, /one provider at a time|per-provider/i);
  assert.match(privacy, /Nothing is sent<\/?[a-z]*> ?unless you allow it|Nothing is sent unless you allow it/i);
  const how = await prose("how");
  assert.match(how, /unless you allow it/i);
});

/**
 * These are the limits the product cannot engineer around, and the reason the
 * page exists is that people pay lawyers to draft around them.
 */
test("the limits page names each thing no agreement can do", async () => {
  const source = await page("limits");
  for (const [needle, topic] of [
    [/child support/i, "child support"],
    [/custody/i, "custody"],
    [/survivor annuity|survivor benefit/i, "retirement survivor benefits"],
    [/I-864|affidavit of support/i, "immigration affidavit of support"],
    [/needs/i, "needs in a discretionary system"],
    [/matrimonial home|family patrimony|homestead/i, "local property rights"],
    [/conceal|nominee|backdat/i, "concealment"],
  ]) {
    assert.match(source, needle, `limits page does not cover ${topic}`);
  }
});

test("the disclaimer page is honest about unverified jurisdictions", async () => {
  const source = await page("not-legal-advice");
  assert.match(source, /unverified/i);
  assert.match(source, /last reviewed|last review/i);
});

test("no page promises an outcome or claims to be advice", async () => {
  const files = await readdir(new URL("../src/pages/", import.meta.url));
  const banned = [
    /\bguarantee[ds]?\b/i,
    /\bwe recommend\b/i,
    /\byour lawyer will\b/i,
    /\blegally binding\b(?!.{0,40}(not|never))/i,
  ];
  for (const file of files) {
    const source = await page(file.replace(/\.astro$/, ""));
    for (const pattern of banned) {
      assert.doesNotMatch(source, pattern, `${file} contains ${pattern}`);
    }
  }
});
