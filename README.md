# premarital-asset-protection.github.io

Astro marketing site (not Jekyll, not Hugo). GitHub Pages today; custom domain
`pmap.pro` (and optionally `pmap.co`) later.

The canonical customer application is **https://user.pmap.pro**. `app.pmap.pro` is a
compatibility redirect, not a second application authority. The JSON API is
**https://api.pmap.pro**.

## Legal-content architecture

This site intentionally does not collapse family/property law into one global rule.
Jurisdiction-specific public snapshots live in `src/lib/jurisdictions.ts` and are
rendered by `src/pages/jurisdictions.astro`.

Every jurisdiction entry should include:

- the property-law model;
- why sole title may or may not control;
- lawful planning mechanisms recognized in that forum;
- the main danger zone for transfers near separation/divorce;
- a `YYYY-MM-DD` review date; and
- at least one primary-government source URL.

The public divorce-transfer analysis lives in `src/pages/divorce-horizon.astro`.
It should distinguish a genuine transfer of genuinely separate property from a
transfer of marital/community/social property and from a nominal transfer where
beneficial ownership or a return arrangement is concealed.

Do not turn jurisdiction-specific rules into universal claims. In particular,
`"sole title = unrestricted ownership"`, `"all pre-divorce gifts are invalid"`, and
`"all pre-divorce gifts are valid"` are all prohibited simplifications.

## Verification

```sh
npm ci
npm test
npm run build
```

`pages.yml` runs the test/build sequence on pushes to `main`; `site-ci.yml` also
runs it for pull requests that touch the site or tests.

This product is not a law firm and does not create an attorney-client relationship.
