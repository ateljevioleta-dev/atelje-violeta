// Atelje Violeta — product/bride data
// Edit this file to add new bouquets or bride photos. Each item just
// needs a src and a name. Optional `desc`, `num`, `caption`, `place`.
// Translation-aware: if you add a Serbian name, also add an English one
// (the site uses lang to pick); leaving en empty falls back to sr.

const BOUQUETS = [
  {
    id: 'bele-kale',
    src: 'assets/buket-1.png',
    num: 'I',
    sr: {
      name: 'Bele Kale',
      desc: 'Viseći buket od svilenih kala i bisera, sa belim atlas vezom.',
    },
    en: {
      name: 'White Callas',
      desc: 'A hanging arrangement of silk callas and pearls, finished with a white satin ribbon.',
    },
  },
  {
    id: 'ruze-u-svili',
    src: 'assets/buket-2.png',
    num: 'II',
    sr: {
      name: 'Ruže u Svili',
      desc: 'Klasičan stojeći buket od ruža, pearl drške i atlas vez.',
    },
    en: {
      name: 'Roses in Silk',
      desc: 'A classic standing bouquet of roses, a pearl-wrapped stem and a satin tie.',
    },
  },
  {
    id: 'orhideje-i-ruze',
    src: 'assets/buket-3.png',
    num: 'III',
    sr: {
      name: 'Orhideje i Ruže',
      desc: 'Viseći buket sa orhidejama, ružama i biserima, atlas vez.',
    },
    en: {
      name: 'Orchids & Roses',
      desc: 'A hanging arrangement with orchids, white roses and pearls, finished in satin.',
    },
  },
  {
    id: 'bele-ruze',
    src: 'assets/buket-4.png',
    num: 'IV',
    sr: {
      name: 'Bele Ruže',
      desc: 'Stojeći buket od belih ruža u staklenoj važi sa biserima i atlas vezom.',
    },
    en: {
      name: 'White Roses',
      desc: 'A standing bouquet of white roses in a pearl-filled glass vase, finished with satin ribbon.',
    },
  },
  // Add more bouquets here as your mom finishes them. Same shape.
];

const BRIDES = [
  {
    id: 'bride-lilies',
    src: 'assets/bride-1.jpg',
    sr: { caption: 'Beli ljiljani', place: 'Crkva · 2024' },
    en: { caption: 'White lilies',   place: 'Church · 2024' },
  },
  {
    id: 'bride-orchids',
    src: 'assets/bride-2.jpg',
    sr: { caption: 'Orhideje i ruže', place: 'Manastir · 2024' },
    en: { caption: 'Orchids & roses', place: 'Monastery · 2024' },
  },
  {
    id: 'bride-roses',
    src: 'assets/bride-3.jpg',
    sr: { caption: 'Ruže u svili', place: 'Vrt · 2024' },
    en: { caption: 'Roses in silk', place: 'Garden · 2024' },
  },
  {
    id: 'bride-white-roses',
    src: 'assets/bride-4.jpg',
    sr: { caption: 'Bele ruže', place: 'Atelje · 2024' },
    en: { caption: 'White roses', place: 'Atelier · 2024' },
  },
  // Add more bride portraits here as you receive them.
];

Object.assign(window, { BOUQUETS, BRIDES });
