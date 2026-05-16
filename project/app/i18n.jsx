// i18n — Serbian (primary) + English. Used across all three variants.
// Single dictionary keyed by `id`; useLang() returns the current locale getter.

const I18N = {
  sr: {
    nav: {
      story: 'Atelje',
      services: 'Ponuda',
      gallery: 'Galerija',
      blessing: 'Blagoslov',
      contact: 'Kontakt',
      book: 'Zakažite konsultaciju',
    },
    hero: {
      eyebrow: 'Modni atelje · Beograd',
      headline_a: 'Svaki dan je poseban,',
      headline_b: 'ali ovaj se pamti večno.',
      sub: 'Unikatni, ručno rađeni bidermajeri od svilenog cveća i dekoracije venčanja — protkani ljubavlju, tradicijom i duhovnošću.',
      cta: 'Izaberite svoj buket snova',
      cta_alt: 'Pogledajte ponudu',
      scroll: 'Listajte',
    },
    story: {
      eyebrow: 'O Ateljeu',
      title_a: 'Spoj svetskog iskustva',
      title_b: 'i beogradske duše.',
      lede:
        'Pre nego što nastane Vaš savršeni buket, u našem ateljeu se čuje tiha svetlost Isusove molitve i Himne ljubavi. Dok stvaramo, u svaku laticu utkivamo veru, snagu i duhovnost koju nosimo u sebi od samog našeg postojanja.',
      body:
        'Naš rad je inspirisan godinama stečenog iskustva u saradnji sa vodećim svetskim modnim brendovima, kao što su Ralph Lauren i Tommy Hilfiger. Vrativši se u naš Beograd — grad koji svima pruža raširene ruke — poželela sam da to svetsko prefinjeno iskustvo podelim sa vama, drage moje mlade, i prenesem ga u unikatne kreacije koje će obeležiti vaš najvažniji dan.',
      sig: '— Violeta',
      pills: ['New York', 'Milano', 'Beograd'],
      stats: [
        ['12+', 'godina iskustva'],
        ['200+', 'mlada'],
        ['1', 'unikatni buket za vas'],
      ],
    },
    services: {
      eyebrow: 'Ponuda',
      title_a: 'Tri načina',
      title_b: 'da Vam ukrasimo dan.',
      items: [
        {
          tag: '01',
          name: 'Moderni Bidermajeri',
          short: 'Buket od svilenog cveća',
          body:
            'Luksuzni bidermajeri od najkvalitetnijeg svilenog cveća, rađeni potpuno ručno i po dogovoru sa mladom. Zajedno biramo vrstu i savršenu boju cvetova kako bismo stvorili vaš lični buket ljubavi.',
          meta: 'na upit',
        },
        {
          tag: '02',
          name: 'Dekoracija Venčanja',
          short: 'Kompletna dekoracija prostora',
          body:
            'Kompletna i elegantna dekoracija venčanja na teritoriji Beograda, prilagođena vašoj viziji i stilu. Sve — od stolova do svadbenog luka.',
          meta: 'na upit',
        },
        {
          tag: '03',
          name: 'Kućni Dekor',
          short: 'Aranžmani za dom',
          body:
            'Unikatni cvetni aranžmani koji donose toplinu, eleganciju i prefinjen stil u vaš svakodnevni dom. Stvoreni da traju, kao i sećanja.',
          meta: 'na upit',
        },
      ],
    },
    config: {
      eyebrow: 'Konfigurator',
      title_a: 'Skicirajte svoj',
      title_b: 'bidermajer.',
      sub: 'Tri jednostavna izbora. Vaša lična slika nam pomaže da krenemo u istom pravcu.',
      step_flowers: 'Cvet',
      step_palette: 'Paleta',
      step_wrap: 'Vez',
      flowers: [
        ['rose', 'Ruža'],
        ['peony', 'Božur'],
        ['ranunculus', 'Ranunkul'],
        ['lily', 'Đurđevak'],
        ['eucalyptus', 'Eukaliptus'],
        ['baby', 'Šuškavac'],
      ],
      palettes: [
        ['ivory', 'Slonovača', ['#f7f0e6', '#e8d8c5', '#cdb89c']],
        ['blush', 'Pudraste ruže', ['#f5dcd6', '#e8b8b0', '#c98a86']],
        ['violet', 'Violeta', ['#e7d8e9', '#b89cc4', '#6a4a78']],
        ['sage', 'Žalfija', ['#dde2cf', '#aab69a', '#6c7a5e']],
        ['burgundy', 'Burgund', ['#d8b8b8', '#9a4a4a', '#4a1f23']],
      ],
      wraps: [
        ['silk', 'Svilena traka'],
        ['lace', 'Čipka'],
        ['velvet', 'Somot'],
        ['raw', 'Bez veza'],
      ],
      summary: 'Vaš izbor',
      send: 'Pošaljite skicu',
      none: 'Bez izbora',
    },
    gallery: {
      eyebrow: 'Naši bidermajeri',
      title_a: 'Ručno rađeni',
      title_b: 'buketi za vas.',
      sub: 'Svaki je unikatan — rađen u tišini ateljea, sa molitvom i pažnjom utkanom u svaku laticu.',
    },
    brides: {
      eyebrow: 'Naše mlade',
      title_a: 'Dan koji se',
      title_b: 'pamti večno.',
      sub: 'Trenuci iz našeg ateljea — mlade sa svojim bidermajerima.',
    },
    blessing: {
      eyebrow: 'Blagoslov',
      open: '“',
      body:
        'Drage moje mlade, želim da u vašem budućem zajedničkom životu primate uvek samo blage i lepe vesti, a da vam svaki zajednički dan bude večan i poseban kao ovaj cvetni buket.',
      close: '”',
      sig: 'Modni atelje Violeta',
    },
    hymn: {
      eyebrow: 'Himna Ljubavi · 1 Kor. 13',
      title: 'Himna Ljubavi',
      stanzas: [
        'Ako jezike čovečije i anđeoske govorim a ljubavi nemam, onda sam kao zvono koje ječi ili kimval koji zveči. I, ako imam dar proroštva i znam sve tajne i sve znanje i, ako imam svu veru da i gore premeštam, a ljubavi nemam, ništa sam. I, ako razdam sve imanje svoje i, ako predam telo svoje da se sažeže, a ljubavi nemam, ništa mi ne koristi.',
        'Ljubav dugo trpi, blagotvorna je; ljubav ne zavidi, ljubav se ne gordi, ne nadima se, ne čini što ne pristoji, ne traži svoje, ne razdražuje se, ne misli o zlu, ne raduje se nepravdi a raduje se istini, sve snosi, sve veruje, svemu se nada, sve trpi.',
        'Ljubav nikad ne prestaje, dok će proroštva nestati, jezici će zamuknuti, znanje će prestati. Jer, delimično znamo i delimično prorokujemo; a kada dođe savršeno, onda će prestati što je delimično. Kad bijah dete, kao dete govorah, kao dete mišljah, kao dete razmišljah; a kada sam postao čovek, odbacio sam što je detinjsko. Jer, sad vidimo kao u ogledalu, u zagonetki, a onda ćemo licem u lice; sad znam delimično, a onda ću poznati kao što bih poznat.',
      ],
      coda: 'A sad ostaje vera, nada, ljubav, ovo troje; ali od njih najveća je ljubav.',
      attribution: '— Apostol Pavle, 1. Korinćanima 13',
    },
    process: {
      eyebrow: 'Naš obred',
      title_a: 'Tri blagoslova',
      title_b: 'pre nego što buket ode mladi.',
      sub: 'Što ovaj atelje čini drugačijim — svaki buket prolazi kroz tri tihe ceremonije pre nego što dođe u vaše ruke.',
      steps: [
        {
          num: 'I',
          name: 'Lični blagoslov',
          body: 'Violeta sama, u tišini ateljea, izgovara molitvu i daje lični blagoslov vama, vašem partneru, i vašem zajedničkom putu.',
        },
        {
          num: 'II',
          name: 'Pevana himna',
          body: 'Dok se buket pravi, Himna ljubavi (1. Kor. 13) se peva i izgovara nad cvećem — svaka latica utkana je sa rečima ljubavi.',
        },
        {
          num: 'III',
          name: 'Sveštenički blagoslov',
          body: 'Pre nego što buket bude predat mladi, sveštenik daje krajnji blagoslov u skladu sa pravoslavnim molitvenim obredom.',
        },
      ],
    },
    testimonials: {
      eyebrow: 'Mlade o nama',
      items: [
        {
          q: 'Buket je bio toplo srce dana. Devojke i danas pamte boje.',
          who: 'Marija i Stefan',
          where: 'Beograd · 2024',
        },
        {
          q: 'Violeta je razumela ono što nisam umela da objasnim. Atelje je pravo malo svetilište.',
          who: 'Jelena',
          where: 'Zemun · 2023',
        },
        {
          q: 'Ručno rađen detalj koji se vidi na svakoj fotografiji. Hvala vam.',
          who: 'Anja i Marko',
          where: 'Dedinje · 2025',
        },
      ],
    },
    inquiry: {
      eyebrow: 'Konsultacija',
      title_a: 'Hajde da se',
      title_b: 'upoznamo.',
      sub: 'Tri kratka koraka. Javljam se lično u roku od 24h.',
      step: 'Korak',
      of: 'od',
      steps: ['Vi i vaš dragi', 'Detalji venčanja', 'Vaša vizija'],
      f: {
        name: 'Vaše ime',
        partner: 'Ime partnera',
        email: 'E-mail',
        phone: 'Telefon',
        date: 'Datum venčanja',
        guests: 'Broj zvanica',
        venue: 'Mesto / sala',
        package: 'Šta vas zanima',
        packageOpts: ['Bidermajer', 'Dekoracija venčanja', 'Oboje', 'Još nisam sigurna'],
        budget: 'Okvirni budžet',
        budgetOpts: ['do 30.000 RSD', '30 — 80.000 RSD', '80 — 200.000 RSD', 'Otvoreno'],
        note: 'Vaša priča (par redova)',
        notePh: 'Boje, cvet, mesto, atmosfera — pišite slobodno…',
      },
      back: 'Nazad',
      next: 'Dalje',
      submit: 'Pošaljite želju',
      done_a: 'Hvala vam.',
      done_b: 'Pripremamo vam odgovor sa pažnjom.',
      done_sub: 'Javljam se lično u roku od 24h. U međuvremenu — neka vam je sa srećom.',
    },
    contact: {
      eyebrow: 'Kontakt i dostava',
      title_a: 'Lična dostava',
      title_b: 'na vaša vrata.',
      delivery_l: 'Besplatna dostava',
      delivery_v: 'Karaburma · Mirijevo · Višnjica · Višnjička Banja',
      delivery_n: 'Ostali delovi Beograda — po dogovoru.',
      location_l: 'Atelje',
      location_v: 'Beograd, Srbija',
      phone_l: 'Telefon',
      phone_v: '063 807 3321',
      hours_l: 'Termini',
      hours_v: 'Po dogovoru · pon — sub',
      cta: 'Zovite, javljam se.',
    },
    foot: {
      tag: 'Modni atelje Violeta',
      copy: '© 2026 Modni atelje Violeta · Beograd',
      audio_on: 'Tiha himna',
      audio_off: 'Bez zvuka',
    },
  },

  en: {
    nav: {
      story: 'Atelier',
      services: 'Services',
      gallery: 'Gallery',
      blessing: 'Blessing',
      contact: 'Contact',
      book: 'Book a consultation',
    },
    hero: {
      eyebrow: 'Fashion atelier · Belgrade',
      headline_a: 'Every day is special,',
      headline_b: 'but this one is remembered forever.',
      sub: 'One-of-a-kind hand-made silk bouquets and wedding décor — woven with love, tradition, and quiet devotion.',
      cta: 'Choose your dream bouquet',
      cta_alt: 'See the offerings',
      scroll: 'Scroll',
    },
    story: {
      eyebrow: 'About the atelier',
      title_a: 'A meeting of world',
      title_b: 'experience and Belgrade soul.',
      lede:
        'Before your perfect bouquet comes to life, the atelier fills with the quiet light of prayer and the Hymn of Love. We weave faith, strength, and devotion into every petal — the way we have done since the beginning.',
      body:
        'Our work is shaped by years spent with leading fashion houses — Ralph Lauren, Tommy Hilfiger — before returning home to Belgrade, a city that opens its arms to everyone. I wanted to bring that world-class craft back to my dear brides, and turn it into one-of-a-kind pieces that mark your most important day.',
      sig: '— Violeta',
      pills: ['New York', 'Milan', 'Belgrade'],
      stats: [
        ['12+', 'years of craft'],
        ['200+', 'brides'],
        ['1', 'bouquet just for you'],
      ],
    },
    services: {
      eyebrow: 'Services',
      title_a: 'Three ways',
      title_b: 'to dress your day.',
      items: [
        {
          tag: '01',
          name: 'Modern Bouquets',
          short: 'Silk-flower bridal bouquets',
          body:
            'Luxurious bouquets made of the finest silk flowers, hand-built in conversation with the bride. We choose the variety and the exact tone together, until the bouquet feels yours.',
          meta: 'on request',
        },
        {
          tag: '02',
          name: 'Wedding Décor',
          short: 'Complete venue styling',
          body:
            'Complete, elegant wedding décor across Belgrade — adapted to your vision and style. Everything from table arrangements to the ceremony arch.',
          meta: 'on request',
        },
        {
          tag: '03',
          name: 'Home Florals',
          short: 'Arrangements for the home',
          body:
            'One-of-a-kind floral arrangements that bring warmth, elegance, and quiet refinement into everyday spaces. Made to last — like the memories.',
          meta: 'on request',
        },
      ],
    },
    config: {
      eyebrow: 'Configurator',
      title_a: 'Sketch your',
      title_b: 'bouquet.',
      sub: 'Three small choices. A starting picture so we begin in the same direction.',
      step_flowers: 'Flower',
      step_palette: 'Palette',
      step_wrap: 'Wrap',
      flowers: [
        ['rose', 'Rose'],
        ['peony', 'Peony'],
        ['ranunculus', 'Ranunculus'],
        ['lily', 'Lily of the valley'],
        ['eucalyptus', 'Eucalyptus'],
        ['baby', "Baby's breath"],
      ],
      palettes: [
        ['ivory', 'Ivory', ['#f7f0e6', '#e8d8c5', '#cdb89c']],
        ['blush', 'Powder rose', ['#f5dcd6', '#e8b8b0', '#c98a86']],
        ['violet', 'Violet', ['#e7d8e9', '#b89cc4', '#6a4a78']],
        ['sage', 'Sage', ['#dde2cf', '#aab69a', '#6c7a5e']],
        ['burgundy', 'Burgundy', ['#d8b8b8', '#9a4a4a', '#4a1f23']],
      ],
      wraps: [
        ['silk', 'Silk ribbon'],
        ['lace', 'Lace'],
        ['velvet', 'Velvet'],
        ['raw', 'No wrap'],
      ],
      summary: 'Your selection',
      send: 'Send the sketch',
      none: 'Not chosen',
    },
    gallery: {
      eyebrow: 'Our bouquets',
      title_a: 'Hand-made',
      title_b: 'bouquets for you.',
      sub: 'Each is one of a kind — made in the quiet of the atelier, with prayer and care woven into every petal.',
    },
    brides: {
      eyebrow: 'Our brides',
      title_a: 'A day remembered',
      title_b: 'forever.',
      sub: 'Moments from the atelier — brides with their bouquets.',
    },
    blessing: {
      eyebrow: 'A blessing',
      open: '“',
      body:
        'My dear brides — may you receive in your shared life only soft and beautiful news, and may every day together be as eternal and special as this floral bouquet.',
      close: '”',
      sig: 'Atelier Violeta',
    },
    hymn: {
      eyebrow: 'Hymn of Love · 1 Cor. 13',
      title: 'The Hymn of Love',
      stanzas: [
        'If I speak with the tongues of men and of angels, but have not love, I am become as sounding brass, or a clanging cymbal. And if I have the gift of prophecy, and know all mysteries and all knowledge; and if I have all faith, so as to remove mountains, but have not love, I am nothing. And if I bestow all my goods to feed the poor, and if I give my body to be burned, but have not love, it profiteth me nothing.',
        'Love suffereth long, and is kind; love envieth not; love vaunteth not itself, is not puffed up, doth not behave itself unseemly, seeketh not its own, is not provoked, taketh not account of evil; rejoiceth not in unrighteousness, but rejoiceth with the truth; beareth all things, believeth all things, hopeth all things, endureth all things.',
        'Love never faileth: but whether there be prophecies, they shall be done away; whether there be tongues, they shall cease; whether there be knowledge, it shall be done away. For we know in part, and we prophesy in part; but when that which is perfect is come, that which is in part shall be done away. When I was a child, I spake as a child, I felt as a child, I thought as a child: now that I am become a man, I have put away childish things. For now we see in a mirror, darkly; but then face to face: now I know in part; but then shall I know fully even as also I was fully known.',
      ],
      coda: 'But now abideth faith, hope, love, these three; and the greatest of these is love.',
      attribution: '— St. Paul, 1 Corinthians 13',
    },
    process: {
      eyebrow: 'Our rite',
      title_a: 'Three blessings',
      title_b: 'before the bouquet meets the bride.',
      sub: 'What sets this atelier apart — every bouquet passes through three quiet ceremonies before it reaches your hands.',
      steps: [
        {
          num: 'I',
          name: 'Personal blessing',
          body: 'Violeta herself, in the silence of the atelier, speaks the prayer and gives a personal blessing to you, your partner, and the path you share.',
        },
        {
          num: 'II',
          name: 'Sung hymn',
          body: 'As the bouquet is built, the Hymn of Love (1 Cor. 13) is sung and spoken over the flowers — every petal woven with words of love.',
        },
        {
          num: 'III',
          name: 'Priestly blessing',
          body: 'Before the bouquet is handed to the bride, an Orthodox priest gives the final blessing in accordance with the Orthodox Christian prayer rite.',
        },
      ],
    },
    testimonials: {
      eyebrow: 'Brides on us',
      items: [
        {
          q: 'The bouquet was the warm heart of the day. The girls still remember the colors.',
          who: 'Marija & Stefan',
          where: 'Belgrade · 2024',
        },
        {
          q: 'Violeta understood what I could not put into words. The atelier is a small sanctuary.',
          who: 'Jelena',
          where: 'Zemun · 2023',
        },
        {
          q: 'A hand-made detail you can see in every photograph. Thank you.',
          who: 'Anja & Marko',
          where: 'Dedinje · 2025',
        },
      ],
    },
    inquiry: {
      eyebrow: 'Consultation',
      title_a: "Let's get",
      title_b: 'acquainted.',
      sub: 'Three short steps. I answer personally within 24 hours.',
      step: 'Step',
      of: 'of',
      steps: ['You and your beloved', 'Wedding details', 'Your vision'],
      f: {
        name: 'Your name',
        partner: "Partner's name",
        email: 'E-mail',
        phone: 'Phone',
        date: 'Wedding date',
        guests: 'Guests',
        venue: 'Venue',
        package: 'What interests you',
        packageOpts: ['Bouquet', 'Wedding décor', 'Both', "Not sure yet"],
        budget: 'Approximate budget',
        budgetOpts: ['up to 30,000 RSD', '30 – 80,000 RSD', '80 – 200,000 RSD', 'Open'],
        note: 'Your story (a few lines)',
        notePh: 'Colors, flower, place, atmosphere — write freely…',
      },
      back: 'Back',
      next: 'Next',
      submit: 'Send the wish',
      done_a: 'Thank you.',
      done_b: 'We are preparing your answer with care.',
      done_sub: 'I reply personally within 24h. In the meantime — may it be with joy.',
    },
    contact: {
      eyebrow: 'Contact & delivery',
      title_a: 'Personal delivery',
      title_b: 'to your door.',
      delivery_l: 'Free delivery',
      delivery_v: 'Karaburma · Mirijevo · Višnjica · Višnjička Banja',
      delivery_n: 'Other parts of Belgrade — on request.',
      location_l: 'Atelier',
      location_v: 'Belgrade, Serbia',
      phone_l: 'Phone',
      phone_v: '063 807 3321',
      hours_l: 'Hours',
      hours_v: 'By appointment · Mon – Sat',
      cta: 'Call — I will answer.',
    },
    foot: {
      tag: 'Atelier Violeta',
      copy: '© 2026 Atelier Violeta · Belgrade',
      audio_on: 'Quiet hymn',
      audio_off: 'No sound',
    },
  },
};

// LangContext lives at the canvas level so all three artboards share the
// same locale toggle — switching SR/EN in one variant changes the others.
const LangCtx = React.createContext({ lang: 'sr', setLang: () => {}, t: I18N.sr });

function LangProvider({ children }) {
  const [lang, setLang] = React.useState('sr');
  const value = React.useMemo(
    () => ({ lang, setLang, t: I18N[lang], other: lang === 'sr' ? 'EN' : 'SR' }),
    [lang],
  );
  return <LangCtx.Provider value={value}>{children}</LangCtx.Provider>;
}

const useLang = () => React.useContext(LangCtx);

Object.assign(window, { I18N, LangProvider, LangCtx, useLang });
