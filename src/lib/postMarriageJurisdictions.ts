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
];
