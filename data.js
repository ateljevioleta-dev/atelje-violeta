// ─────────────────────────────────────────────────────────────────────────────
//  Atelje Violeta — product data
//
//  HOW TO ADD A NEW BOUQUET:
//  1. Drop the image file into the /assets folder (e.g. buket-5.jpg)
//  2. Copy one of the blocks below and paste it at the end of the BOUQUETS list
//  3. Update the id, src, num, and the sr/en name + description
//  4. Save, push to GitHub → site updates automatically
//
//  HOW TO ADD A NEW BRIDE PHOTO:
//  Same steps, but in the BRIDES list at the bottom.
// ─────────────────────────────────────────────────────────────────────────────

const BOUQUETS = [
  {
    id: "bele-kale",
    src: "assets/buket-1.png",
    num: "I",
    sr: {
      name: "Bele Kale",
      desc: "Viseći buket od svilenih kala i bisera, sa belim atlas vezom.",
    },
    en: {
      name: "White Callas",
      desc: "A hanging arrangement of silk callas and pearls, finished with a white satin ribbon.",
    },
  },
  {
    id: "ruze-u-svili",
    src: "assets/buket-2.png",
    num: "II",
    sr: {
      name: "Ruže u Svili",
      desc: "Klasičan stojeći buket od ruža, pearl drške i atlas vez.",
    },
    en: {
      name: "Roses in Silk",
      desc: "A classic standing bouquet of roses, a pearl-wrapped stem and a satin tie.",
    },
  },
  {
    id: "orhideje-i-ruze",
    src: "assets/buket-3.png",
    num: "III",
    sr: {
      name: "Orhideje i Ruže",
      desc: "Viseći buket sa orhidejama, ružama i biserima, atlas vez.",
    },
    en: {
      name: "Orchids & Roses",
      desc: "A hanging arrangement with orchids, white roses and pearls, finished in satin.",
    },
  },
  {
    id: "bele-ruze",
    src: "assets/buket-4.png",
    num: "IV",
    sr: {
      name: "Bele Ruže",
      desc: "Stojeći buket od belih ruža u staklenoj važi sa biserima i atlas vezom.",
    },
    en: {
      name: "White Roses",
      desc: "A standing bouquet of white roses in a pearl-filled glass vase, finished with satin ribbon.",
    },
  },

  // ── Add new bouquets below this line ──────────────────────────────────────
  // {
  //   id: "unique-id-here",
  //   src: "assets/buket-5.jpg",
  //   num: "V",
  //   sr: { name: "Srpski naziv", desc: "Opis buketa na srpskom." },
  //   en: { name: "English name", desc: "Bouquet description in English." },
  // },
];

const BRIDES = [
  {
    id: "bride-1",
    src: "assets/bride-1.jpg",
    sr: { caption: "Beli ljiljani", place: "Crkva · 2024" },
    en: { caption: "White lilies",  place: "Church · 2024" },
  },
  {
    id: "bride-2",
    src: "assets/bride-2.jpg",
    sr: { caption: "Orhideje i ruže", place: "Manastir · 2024" },
    en: { caption: "Orchids & roses", place: "Monastery · 2024" },
  },
  {
    id: "bride-3",
    src: "assets/bride-3.jpg",
    sr: { caption: "Ruže u svili", place: "Vrt · 2024" },
    en: { caption: "Roses in silk",  place: "Garden · 2024" },
  },
  {
    id: "bride-4",
    src: "assets/bride-4.jpg",
    sr: { caption: "Bele ruže", place: "Atelje · 2024" },
    en: { caption: "White roses",  place: "Atelier · 2024" },
  },

  // ── Add new bride photos below this line ──────────────────────────────────
  // {
  //   id: "bride-5",
  //   src: "assets/bride-5.jpg",
  //   sr: { caption: "Naziv buketa", place: "Mesto · 2025" },
  //   en: { caption: "Bouquet name", place: "Place · 2025" },
  // },
];
