export interface JurisdictionSource {
  label: string;
  url: string;
}

export interface JurisdictionSnapshot {
  slug: string;
  name: string;
  property_model: string;
  sole_title_warning: string;
  lawful_planning: string;
  danger_zone: string;
  reviewed: string;
  sources: JurisdictionSource[];
}

export const JURISDICTIONS: JurisdictionSnapshot[] = [
  {
    slug: "texas",
    name: "Texas",
    property_model: "Community property with statutory separate-property categories.",
    sole_title_warning:
      "Record title does not defeat the community-property presumption, and a separately owned family homestead has spouse-consent restrictions.",
    lawful_planning:
      "Prove separate-property character by tracing; use written partition or exchange agreements where appropriate; keep substitutions traceable; analyze homestead separately from ordinary assets.",
    danger_zone:
      "Fraud on the community, inability to prove separate character, or attempting a homestead disposition without required spousal consent.",
    reviewed: "2026-09-20",
    sources: [
      { label: "Texas Family Code ch. 3", url: "https://statutes.capitol.texas.gov/Docs/FA/htm/FA.3.htm" },
      { label: "Texas Family Code ch. 4", url: "https://statutes.capitol.texas.gov/Docs/FA/htm/FA.4.htm" },
      { label: "Texas Constitution art. XVI", url: "https://statutes.capitol.texas.gov/Docs/CN/htm/CN.16.htm" },
    ],
  },
  {
    slug: "california",
    name: "California",
    property_model: "Community property with statutory rules for management, transfer, and transmutation.",
    sole_title_warning:
      "Community real property generally requires both spouses to join in the conveyance even when record title is in one spouse's name.",
    lawful_planning:
      "Use valid written transmutation or marital-property agreements, preserve separate-property tracing, and check whether automatic family-law restraints are already in force before moving any asset.",
    danger_zone:
      "Unilateral conveyance of community real property, breach of interspousal fiduciary duties, or transfer after statutory restraining orders attach.",
    reviewed: "2026-09-20",
    sources: [
      { label: "California Family Code § 1102", url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=FAM&sectionNum=1102." },
      { label: "California Family Code § 2040", url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=FAM&sectionNum=2040." },
      { label: "California Family Code § 852", url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=FAM&sectionNum=852." },
    ],
  },
  {
    slug: "florida",
    name: "Florida",
    property_model: "Equitable distribution with unusually strong constitutional homestead rules.",
    sole_title_warning:
      "A married owner cannot rely on sole title to make a unilateral gift, sale, or mortgage of protected homestead real estate.",
    lawful_planning:
      "Classify the asset first, distinguish homestead from non-homestead property, document separate ownership and tracing, and use valid marital agreements where available.",
    danger_zone:
      "Treating a sole-titled homestead as freely giftable or assuming record ownership eliminates a spouse's constitutional rights.",
    reviewed: "2026-09-20",
    sources: [
      { label: "Florida Constitution art. X, § 4", url: "https://www.leg.state.fl.us/statutes/index.cfm?submenu=3#A10S04" },
      { label: "Florida Statutes ch. 61", url: "https://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=0000-0099/0061/0061.html" },
    ],
  },
  {
    slug: "new-york",
    name: "New York",
    property_model: "Equitable distribution; marital property is defined without regard to the form in which title is held.",
    sole_title_warning:
      "An asset acquired during marriage can be marital property even if only one spouse appears on the deed or account.",
    lawful_planning:
      "Preserve separate-property tracing, use properly executed marital agreements, and document exchanges or appreciation attributable solely to separate property where the statute recognizes it.",
    danger_zone:
      "Assuming sole title converts marital property into separate property or ignoring the other spouse's contribution to appreciation.",
    reviewed: "2026-09-20",
    sources: [
      { label: "New York Domestic Relations Law § 236", url: "https://www.nysenate.gov/legislation/laws/DOM/236" },
      { label: "New York Domestic Relations Law § 234", url: "https://www.nysenate.gov/legislation/laws/DOM/234" },
    ],
  },
  {
    slug: "ontario",
    name: "Ontario",
    property_model: "Net-family-property equalization with special statutory treatment for the matrimonial home.",
    sole_title_warning:
      "Ownership alone does not eliminate the other spouse's statutory possession rights or the consent requirements for disposition or encumbrance of a matrimonial home.",
    lawful_planning:
      "Identify whether a residence is a matrimonial home, distinguish ownership from possession/equalization rights, preserve excluded-property evidence, and use a valid domestic contract for matters the statute permits parties to contract about.",
    danger_zone:
      "Disposing of or encumbering a matrimonial home without the consent or court authorization required by the Family Law Act.",
    reviewed: "2026-09-20",
    sources: [
      { label: "Ontario Family Law Act", url: "https://www.ontario.ca/laws/statute/90f03" },
    ],
  },
  {
    slug: "peru",
    name: "Peru",
    property_model: "Sociedad de gananciales or separación de patrimonios, with statutory bienes propios and bienes sociales rules.",
    sole_title_warning:
      "Registry title does not by itself eliminate the statutory presumption that property is social where that presumption applies.",
    lawful_planning:
      "Prove bienes propios, preserve source-of-funds records, use the patrimonial regime available under the Civil Code, and register the change of regime where required for effectiveness against third parties.",
    danger_zone:
      "Unilateral disposition of bienes sociales where both spouses' intervention is required or relying on title alone to defeat the social-property presumption.",
    reviewed: "2026-09-20",
    sources: [
      { label: "Peruvian Civil Code (official judiciary publication)", url: "https://www.pj.gob.pe/wps/wcm/connect/59a5b5004d90ae7684d9f4db524a342a/C%C3%B3digo%2BCivil%2B1984.pdf?MOD=AJPERES" },
    ],
  },
  {
    slug: "england-wales",
    name: "England & Wales",
    property_model: "Discretionary financial-relief system rather than a title-based marital-property classification system.",
    sole_title_warning:
      "Sole legal title does not make a disposition immune from the family court's financial-relief powers.",
    lawful_planning:
      "Use properly advised nuptial agreements, transparent ownership structures, and ordinary estate or trust planning well before a dispute; document legitimate non-divorce purposes.",
    danger_zone:
      "A disposition, including a gift, intended to defeat a financial-relief claim can be restrained or set aside under Matrimonial Causes Act 1973 § 37.",
    reviewed: "2026-09-20",
    sources: [
      { label: "Matrimonial Causes Act 1973 § 37", url: "https://www.legislation.gov.uk/ukpga/1973/18/section/37" },
    ],
  },
  {
    slug: "australia",
    name: "Australia",
    property_model: "Federal discretionary property-adjustment system under the Family Law Act 1975.",
    sole_title_warning:
      "Legal title is relevant but does not prevent the court from making property orders or injunctions concerning a party's property.",
    lawful_planning:
      "Use binding financial agreements only with the statutory formalities and independent advice they require; keep ownership and contribution evidence; verify whether litigation or injunctions constrain a proposed transaction.",
    danger_zone:
      "Moving assets after proceedings begin or assuming a third-party transfer is beyond the court's reach; the Act permits property injunctions and, in defined circumstances, orders affecting third parties.",
    reviewed: "2026-09-20",
    sources: [
      { label: "Family Law Act 1975 § 114", url: "https://www.legislation.gov.au/C2004A00275/latest/text" },
    ],
  },
];
