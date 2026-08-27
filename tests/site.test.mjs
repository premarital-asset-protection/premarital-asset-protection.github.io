import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

test("header and footer point at the app subdomain", async () => {
  const urls = await readFile(new URL("../src/lib/urls.ts", import.meta.url), "utf8");
  const layout = await readFile(new URL("../src/layouts/SiteLayout.astro", import.meta.url), "utf8");
  assert.match(urls, /https:\/\/app\.pmap\.pro/);
  assert.match(layout, /APP_ORIGIN/);
  assert.match(layout, /Open the app/);
});

test("homepage is not a law firm", async () => {
  const source = await readFile(new URL("../src/pages/index.astro", import.meta.url), "utf8");
  assert.match(source, /Not a law firm|not a law firm|Not legal advice/i);
  assert.match(source, /app\.pmap\.pro/);
});
