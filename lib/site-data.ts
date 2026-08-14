export const site = {
  name: "Johnny Deep",
  domain: "https://iamjohnnydeep.com",
  email: "booking@iamjohnnydeep.com",
  tagline: "DJ, producer, conceptual artist, technologist.",
  description:
    "Official website for Johnny Deep: music, live dates, art projects, manifesto, EPK, booking and contact.",
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/music/", label: "Music" },
  { href: "/live/", label: "Live" },
  { href: "/art-projects/", label: "Art" },
  { href: "/about/", label: "About" },
  { href: "/manifesto/", label: "Manifesto" },
  { href: "/press-epk/", label: "EPK" },
  { href: "/booking/", label: "Booking" },
  { href: "/contact/", label: "Contact" },
  { href: "/archive/", label: "Archive" },
];

export const pages = [
  {
    slug: "music",
    label: "Music",
    title: "Music Hub",
    intro:
      "A focused entry point for mixes, original productions, radio sets and future releases. Only verified material should be published here.",
    items: [
      "TODO: Add official streaming links.",
      "TODO: Add verified discography or release notes.",
      "TODO: Add current featured mix with embed approval.",
    ],
  },
  {
    slug: "live",
    label: "Live / Events",
    title: "Live / Events",
    intro:
      "Current and past dates belong here once confirmed by real booking records, event pages or promoter materials.",
    items: [
      "TODO: Add upcoming confirmed appearances.",
      "TODO: Add selected archive dates with venue and city verification.",
      "TODO: Add technical hospitality notes when available.",
    ],
  },
  {
    slug: "art-projects",
    label: "Art / Projects",
    title: "Art / Projects",
    intro:
      "A space for conceptual work, digital systems, audiovisual experiments and future merch-ready objects.",
    items: [
      "TODO: Add project titles, media, dates and context.",
      "TODO: Add image/video assets with usage rights.",
      "TODO: Add merch capsule structure when product details are confirmed.",
    ],
  },
  {
    slug: "about",
    label: "About",
    title: "About",
    intro:
      "A concise official biography should live here after factual source material is approved.",
    items: [
      "TODO: Add approved short bio.",
      "TODO: Add approved long bio.",
      "TODO: Add official portrait or logo asset.",
    ],
  },
  {
    slug: "manifesto",
    label: "Manifesto",
    title: "Manifesto",
    intro:
      "Editorial space for the operating philosophy behind the project: sound, identity, machines, clubs and visual language.",
    items: [
      "No fake mythology.",
      "No invented press language.",
      "The unfinished parts stay visible until the real archive arrives.",
    ],
  },
  {
    slug: "press-epk",
    label: "Press / EPK",
    title: "Press / EPK",
    intro:
      "A press-safe kit for promoters, journalists and collaborators. Every claim must be verifiable before publication.",
    items: [
      "TODO: Add approved bios.",
      "TODO: Add press photos and logo files.",
      "TODO: Add verified press quotes only when sourced.",
    ],
  },
  {
    slug: "booking",
    label: "Booking",
    title: "Booking",
    intro:
      "Booking funnel for clubs, festivals, private productions, audiovisual commissions and collaboration proposals.",
    items: [
      "Use the contact link with city, date, event format, capacity and budget range.",
      "TODO: Add agent or management contact if different from direct booking.",
      "TODO: Add downloadable technical rider when approved.",
    ],
  },
  {
    slug: "contact",
    label: "Contact",
    title: "Contact",
    intro:
      "Direct contact hub for booking, press, collaborations and archive corrections.",
    items: [
      "Booking: booking@iamjohnnydeep.com",
      "TODO: Add verified social links.",
      "TODO: Add newsletter or mailing list provider after privacy review.",
    ],
  },
  {
    slug: "archive",
    label: "Archive",
    title: "Archive",
    intro:
      "A chronological index for sets, releases, posters, photos, artifacts and dated project notes.",
    items: [
      "TODO: Add verified dated entries.",
      "TODO: Add source links for public artifacts.",
      "TODO: Add private archive workflow before publishing sensitive material.",
    ],
  },
];

export const featureBlocks = [
  {
    title: "Sound",
    text: "DJ sets, productions and long-form mixes will be organized around verified links, not invented catalog entries.",
  },
  {
    title: "Body",
    text: "Live pages are built for promoters and listeners: confirmed dates, real locations, proper archive context.",
  },
  {
    title: "Signal",
    text: "Art, manifesto and EPK sections make room for conceptual work without pretending missing material already exists.",
  },
];

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.domain,
  jobTitle: "DJ, producer, conceptual artist and technologist",
  email: `mailto:${site.email}`,
  sameAs: [],
};
