import type { JurisdictionSnapshot } from "./jurisdictions";

export const POST_MARRIAGE_JURISDICTIONS: JurisdictionSnapshot[] = [
  {
    slug: "nevada",
    name: "Nevada",
    property_model:
      "Community property with broad statutory room for written spousal property agreements and separate-property documentation.",
    sole_title_warning:
      "Community property interests are present and equal; sole title does not turn community property into separate property, and gifts of community property require the other spouse's express or implied consent.",
    lawful_planning:
      "Use written property agreements; record a separate-property inventory; preserve character when appropriate through a qualifying irrevocable trust; and document separate-property ownership before a dispute arises.",
    danger_zone:
      "Unilateral gifts of community property, assuming title alone controls classification, or using an otherwise lawful agreement or trust to defeat an existing claim or court order.",
    reviewed: "2026-09-21",
    sources: [
      {
        label: "Nevada Revised Statutes ch. 123",
        url: "https://www.leg.state.nv.us/NRS/NRS-123.html",
      },
    ],
  },
  {
    slug: "south-dakota",
    name: "South Dakota",
    property_model:
      "Trust-planning jurisdiction with statutory qualified dispositions and special spousal trusts; marital-property classification can still depend on the otherwise applicable family-law regime.",
    sole_title_warning:
      "Moving titled property into a trust does not automatically erase a spouse's rights, an existing claim, disclosure duties, or another jurisdiction's family-law rules.",
    lawful_planning:
      "Where the statutory requirements and governing-law nexus are satisfied, qualified-disposition trusts and special spousal trusts can be part of legitimate post-marriage estate and asset-protection planning.",
    danger_zone:
      "Transfers made with intent to defraud, attempts to defeat existing obligations, or assuming a South Dakota trust automatically controls a divorce or creditor dispute in another forum.",
    reviewed: "2026-09-21",
    sources: [
      {
        label: "South Dakota Codified Laws ch. 55-16",
        url: "https://sdlegislature.gov/api/Statutes/55-16.html?all=true",
      },
      {
        label: "South Dakota Codified Laws ch. 55-17",
        url: "https://sdlegislature.gov/api/Statutes/55-17.html?all=true",
      },
    ],
  },
  {
    slug: "new-zealand",
    name: "New Zealand",
    property_model:
      "Relationship-property regime with a statutory contracting-out mechanism for spouses and partners.",
    sole_title_warning:
      "Legal title alone does not displace the Property (Relationships) Act's classification and division rules.",
    lawful_planning:
      "Use a contracting-out agreement under sections 21 and 21F to address the status, ownership, and division of present or future property, with independent legal advice and statutory witnessing/certification formalities.",
    danger_zone:
      "Informal side agreements, missing independent advice or certification, or assuming an agreement can be used to conceal property or defeat an existing claim.",
    reviewed: "2026-09-21",
    sources: [
      {
        label: "Property (Relationships) Act 1976",
        url: "https://www.legislation.govt.nz/act/public/1976/0166/latest/whole.html",
      },
    ],
  },
  {
    slug: "france",
    name: "France",
    property_model:
      "Civil-law matrimonial property regimes that spouses can modify or replace through the statutory notarial process.",
    sole_title_warning:
      "Registered or nominal ownership does not by itself answer the matrimonial-regime consequences of an asset or a later change of regime.",
    lawful_planning:
      "Article 1397 permits spouses, in the interest of the family, to modify or change their matrimonial regime by notarial act, subject to statutory notice and objection protections.",
    danger_zone:
      "Ignoring notice or notarial formalities, prejudicing protected third-party rights, or using a regime change in fraud of creditors.",
    reviewed: "2026-09-21",
    sources: [
      {
        label: "Code civil art. 1397",
        url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000038584427",
      },
    ],
  },
];
