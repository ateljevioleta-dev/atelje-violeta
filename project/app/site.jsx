// Site — single-page Atelje Violeta.
// Sections (top→bottom):
//   Hero → Story → Services → Collection (scrollable products) →
//   Brides (scrollable bride photos) → Blessing → Testimonials →
//   Inquiry → Contact → Footer.

function Site() {
  const { t, lang, setLang, other } = useLang();
  const { on: audioOn, toggle: toggleAudio } = useHymn();

  const heroRef   = useReveal();
  const storyRef  = useReveal();
  const svcRef    = useReveal();
  const collRef   = useReveal();
  const bridesRef = useReveal();
  const blessRef  = useReveal();
  const tstRef    = useReveal();
  const ctcRef    = useReveal();

  const [bouquetIdx, setBouquetIdx] = React.useState(null);
  const [brideIdx,   setBrideIdx]   = React.useState(null);

  // Flatten data + active locale, so cards and lightbox both read the same shape.
  const bouquetItems = BOUQUETS.map((b) => ({
    id: b.id,
    src: b.src,
    num: b.num,
    name: (b[lang] || b.sr).name,
    desc: (b[lang] || b.sr).desc,
  }));
  const brideItems = BRIDES.map((b) => ({
    id: b.id,
    src: b.src,
    caption: (b[lang] || b.sr).caption,
    place: (b[lang] || b.sr).place,
  }));

  // Lightbox needs {src, name, desc} — bridges share fields via map.
  const brideLightboxItems = brideItems.map((b) => ({
    src: b.src, name: b.caption, desc: b.place,
  }));

  const scrollTo = (anchor) => (e) => {
    e.preventDefault();
    document.querySelector(anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <PetalCursor />

      {/* ───── Topbar ───── */}
      <header className="topbar">
        <a className="brand" href="#hero" onClick={scrollTo('#hero')}>
          <span className="brand-mark">Violeta</span>
          <span className="brand-name">{lang === 'sr' ? 'Modni atelje · Beograd' : 'Atelier · Belgrade'}</span>
        </a>
        <nav className="nav">
          <a href="#story"      onClick={scrollTo('#story')}>{t.nav.story}</a>
          <a href="#services"   onClick={scrollTo('#services')}>{t.nav.services}</a>
          <a href="#collection" onClick={scrollTo('#collection')}>{t.nav.gallery}</a>
          <a href="#blessing"   onClick={scrollTo('#blessing')}>{t.nav.blessing}</a>
          <a href="#contact"    onClick={scrollTo('#contact')}>{t.nav.contact}</a>
        </nav>
        <div className="topbar-right">
          <button
            className={`icon-btn ${audioOn ? 'on' : ''}`}
            onClick={toggleAudio}
            title={audioOn ? t.foot.audio_on : t.foot.audio_off}
            aria-label={audioOn ? t.foot.audio_on : t.foot.audio_off}
          >
            <span className="pulse" />♪
          </button>
          <button className="icon-btn" onClick={() => setLang(lang === 'sr' ? 'en' : 'sr')}>
            {lang.toUpperCase()} / {other}
          </button>
          <button className="top-cta" onClick={scrollTo('#inquiry')}>{t.nav.book}</button>
        </div>
      </header>

      {/* ───── Hero — atelier studio shot ───── */}
      <section className="hero" id="hero" ref={heroRef} data-screen-label="01 Hero">
        <div className="hero-folio">{t.hero.eyebrow}</div>
        <h1 className="hero-headline">
          <em>{t.hero.headline_a}</em>
          <span className="alt">{t.hero.headline_b}</span>
        </h1>
        <p className="hero-sub">{t.hero.sub}</p>
        <div className="hero-cta-row">
          <button className="btn btn-primary" onClick={scrollTo('#collection')}>
            {t.hero.cta} →
          </button>
          <button className="btn btn-ghost" onClick={scrollTo('#services')}>
            {t.hero.cta_alt}
          </button>
        </div>

        <div className="hero-tile">
          <img src="assets/atelier-hero.jpg" alt="Modni atelje Violeta" />
        </div>

        <div className="hero-tag">— {t.blessing.sig}</div>
      </section>

      {/* ───── Story ───── */}
      <section className="story" id="story" ref={storyRef} data-screen-label="02 About">
        <header className="story-h">
          <div className="eyebrow">{t.story.eyebrow}</div>
          <h2 className="display">
            <em>{t.story.title_a}</em>
            <span className="alt">{t.story.title_b}</span>
          </h2>
          <Ornament />
        </header>
        <div className="story-grid">
          <div className="story-portrait">
            <img src="assets/violeta-portrait.jpg" alt="Violeta · Modni atelje" />
          </div>
          <div className="story-text">
            <p>
              <span className="lead-cap">{t.story.lede.charAt(0)}</span>
              {t.story.lede.slice(1)}
            </p>
            <p>{t.story.body}</p>
            <div className="story-pills">
              {t.story.pills.map((p) => <span key={p} className="story-pill">{p}</span>)}
            </div>
            <div className="story-sig">{t.story.sig}</div>
          </div>
        </div>
      </section>

      {/* ───── Services ───── */}
      <section className="svc" id="services" ref={svcRef} data-screen-label="03 Services">
        <header className="svc-h">
          <div className="eyebrow">{t.services.eyebrow}</div>
          <h2 className="display">
            <em>{t.services.title_a}</em>
            <span className="alt">{t.services.title_b}</span>
          </h2>
          <Ornament />
        </header>
        <div className="svc-grid">
          {t.services.items.map((it) => (
            <article key={it.tag} className="svc-card">
              <div className="svc-card-tag">№ {it.tag}</div>
              <h3 className="svc-card-name">{it.name}</h3>
              <div className="svc-card-short">{it.short}</div>
              <p className="svc-card-body">{it.body}</p>
              <div className="svc-card-meta">{it.meta}</div>
            </article>
          ))}
        </div>
      </section>

      {/* ───── Collection (products) — horizontally scrollable ───── */}
      <section className="coll" id="collection" ref={collRef} data-screen-label="04 Collection">
        <header className="coll-h">
          <div className="eyebrow">{t.gallery.eyebrow}</div>
          <h2 className="display">
            <em>{t.gallery.title_a}</em>
            <span className="alt">{t.gallery.title_b}</span>
          </h2>
          <Ornament />
          <p className="lede" style={{ margin: '8px auto 0' }}>{t.gallery.sub}</p>
        </header>

        <Scroller
          items={bouquetItems}
          cardWidth={360}
          gap={24}
          ariaLabel={t.gallery.eyebrow}
          onItemClick={(i) => setBouquetIdx(i)}
          renderItem={(b) => (
            <div className="product-card">
              <div className="product-card-tile">
                <img src={b.src} alt={b.name} />
              </div>
              <div className="product-card-meta">
                <div className="product-card-num">№ {b.num}</div>
                <div className="product-card-name">{b.name}</div>
                <p className="product-card-desc">{b.desc}</p>
              </div>
            </div>
          )}
        />

        <Lightbox
          items={bouquetItems}
          openIdx={bouquetIdx}
          onClose={() => setBouquetIdx(null)}
        />
      </section>

      {/* ───── Brides — horizontally scrollable portraits ───── */}
      <section className="brides" id="brides" ref={bridesRef} data-screen-label="05 Brides">
        <header className="brides-h">
          <div className="eyebrow">{t.brides.eyebrow}</div>
          <h2 className="display">
            <em>{t.brides.title_a}</em>
            <span className="alt">{t.brides.title_b}</span>
          </h2>
          <Ornament />
          <p className="lede" style={{ margin: '8px auto 0' }}>{t.brides.sub}</p>
        </header>

        <Scroller
          items={brideItems}
          cardWidth={320}
          gap={24}
          ariaLabel={t.brides.eyebrow}
          onItemClick={(i) => setBrideIdx(i)}
          renderItem={(b) => (
            <div className="bride-card">
              <div className="bride-card-frame">
                <img src={b.src} alt={b.caption} />
              </div>
              <div className="bride-card-caption">{b.caption}</div>
              <div className="bride-card-place">{b.place}</div>
            </div>
          )}
        />

        <Lightbox
          items={brideLightboxItems}
          openIdx={brideIdx}
          onClose={() => setBrideIdx(null)}
        />
      </section>

      {/* ───── Blessing — three pillars: quote · hymn · rite ───── */}
      <section className="bless" id="blessing" ref={blessRef} data-screen-label="06 Blessing">
        {/* 1 · the personal blessing message */}
        <div className="bless-inner">
          <div className="eyebrow">{t.blessing.eyebrow}</div>
          <p className="bless-quote">
            <span className="bless-open">{t.blessing.open}</span>
            {t.blessing.body}
            <span className="bless-close">{t.blessing.close}</span>
          </p>
          <div className="bless-sig">— {t.blessing.sig}</div>
        </div>

        <Ornament color="rgba(43, 21, 100, 0.45)" />

        {/* 2 · the Hymn of Love, 1 Cor. 13 */}
        <div className="hymn">
          <div className="eyebrow">{t.hymn.eyebrow}</div>
          <h3 className="hymn-title">{t.hymn.title}</h3>
          <div className="hymn-text">
            {t.hymn.stanzas.map((s, i) => (
              <p key={i} className="hymn-stanza">{s}</p>
            ))}
            <p className="hymn-coda">{t.hymn.coda}</p>
          </div>
          <div className="hymn-attr">{t.hymn.attribution}</div>
        </div>

        <Ornament color="rgba(43, 21, 100, 0.45)" />

        {/* 3 · the three-step rite */}
        <div className="rite">
          <header className="rite-h">
            <div className="eyebrow">{t.process.eyebrow}</div>
            <h3 className="rite-title">
              <em>{t.process.title_a}</em>
              <span className="alt"> {t.process.title_b}</span>
            </h3>
            <p className="lede" style={{ margin: '20px auto 0' }}>{t.process.sub}</p>
          </header>
          <ol className="rite-steps">
            {t.process.steps.map((step) => (
              <li key={step.num} className="rite-step">
                <div className="rite-step-num">№ {step.num}</div>
                <h4 className="rite-step-name">{step.name}</h4>
                <p className="rite-step-body">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───── Testimonials ───── */}
      <section className="tst" ref={tstRef} data-screen-label="07 Testimonials">
        <header className="tst-h">
          <div className="eyebrow">{t.testimonials.eyebrow}</div>
          <Ornament />
        </header>
        <div className="tst-grid">
          {t.testimonials.items.map((it, i) => (
            <article key={i} className="tst-card">
              <p className="tst-q">{it.q}</p>
              <div className="tst-who">{it.who}</div>
              <div className="tst-where">{it.where}</div>
            </article>
          ))}
        </div>
      </section>

      {/* ───── Inquiry ───── */}
      <InquiryForm />

      {/* ───── Contact ───── */}
      <section className="ctc" id="contact" ref={ctcRef} data-screen-label="09 Contact">
        <header className="ctc-h">
          <div className="eyebrow">{t.contact.eyebrow}</div>
          <h2>
            <em>{t.contact.title_a}</em>
            <span className="alt">{t.contact.title_b}</span>
          </h2>
          <Ornament color="rgba(214, 203, 233, 0.6)" />
        </header>
        <div className="ctc-grid">
          <div className="ctc-card">
            <div className="ctc-label">{t.contact.delivery_l}</div>
            <div className="ctc-value">{t.contact.delivery_v}</div>
            <div className="ctc-note">{t.contact.delivery_n}</div>
          </div>
          <div className="ctc-card">
            <div className="ctc-label">{t.contact.location_l}</div>
            <div className="ctc-value">{t.contact.location_v}</div>
          </div>
          <div className="ctc-card">
            <div className="ctc-label">{t.contact.phone_l}</div>
            <div className="ctc-value">{t.contact.phone_v}</div>
          </div>
          <div className="ctc-card">
            <div className="ctc-label">{t.contact.hours_l}</div>
            <div className="ctc-value">{t.contact.hours_v}</div>
          </div>
        </div>
        <div className="ctc-cta">{t.contact.cta}</div>
      </section>

      {/* ───── Footer ───── */}
      <footer className="ftr">
        <div className="ftr-brand"><em>Violeta</em> · {t.foot.tag}</div>
        <div className="ftr-copy">{t.foot.copy}</div>
      </footer>
    </>
  );
}

function App() {
  return (
    <LangProvider>
      <Site />
    </LangProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
