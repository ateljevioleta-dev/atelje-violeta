// Interactions: multi-step inquiry form + collection lightbox.
// The bouquet configurator from the canvas version is removed.

// ──────────────────────────────────────────────────────────────────────
// InquiryForm — three steps, per-step validation, confirmation panel.
// ──────────────────────────────────────────────────────────────────────
function InquiryForm() {
  const { t, lang } = useLang();
  const q = t.inquiry;
  const f = q.f;
  const [step, setStep] = React.useState(0);
  const [data, setData] = React.useState({
    name: '', partner: '', email: '', phone: '',
    date: '', guests: '', venue: '',
    package: f.packageOpts[0], budget: '', note: '',
  });
  const [done, setDone] = React.useState(false);
  const [touched, setTouched] = React.useState({});

  const upd = (k, v) => setData((d) => ({ ...d, [k]: v }));

  const stepValid = (s) => {
    if (s === 0) return data.name.trim() && /.+@.+\..+/.test(data.email);
    if (s === 1) return data.date && data.venue.trim();
    return true;
  };

  const next = () => {
    setTouched((tch) => ({ ...tch, [step]: true }));
    if (!stepValid(step)) return;
    if (step < 2) setStep(step + 1);
    else setDone(true);
  };
  const back = () => setStep((s) => Math.max(0, s - 1));

  return (
    <section className="inq" data-anchor="inquiry" id="inquiry" data-screen-label="07 Inquiry">
      <header className="inq-h">
        <div className="eyebrow">{q.eyebrow}</div>
        <h2 className="display">
          <em>{q.title_a}</em>
          <span className="alt">{q.title_b}</span>
        </h2>
        <Ornament />
        <p className="lede" style={{ margin: '0 auto' }}>{q.sub}</p>
      </header>

      <div className="inq-shell">
        {!done && (
          <>
            <div className="inq-progress">
              {q.steps.map((label, i) => (
                <div key={i} className={`inq-pip ${i === step ? 'on' : ''} ${i < step ? 'past' : ''}`}>
                  <span className="inq-pip-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="inq-pip-label">{label}</span>
                </div>
              ))}
            </div>

            <div className="inq-step">
              <div className="inq-stepmeta">
                {q.step} <strong>{step + 1}</strong> {q.of} 3 · <span>{q.steps[step]}</span>
              </div>

              {step === 0 && (
                <div className="inq-fields">
                  <Field label={f.name} required>
                    <input value={data.name} onChange={(e) => upd('name', e.target.value)}
                      placeholder={lang === 'sr' ? 'Marija' : 'Maria'} />
                  </Field>
                  <Field label={f.partner}>
                    <input value={data.partner} onChange={(e) => upd('partner', e.target.value)}
                      placeholder="Stefan" />
                  </Field>
                  <Field label={f.email} required>
                    <input type="email" value={data.email} onChange={(e) => upd('email', e.target.value)}
                      placeholder="marija@…" />
                  </Field>
                  <Field label={f.phone}>
                    <input value={data.phone} onChange={(e) => upd('phone', e.target.value)}
                      placeholder="063 …" />
                  </Field>
                </div>
              )}

              {step === 1 && (
                <div className="inq-fields">
                  <Field label={f.date} required>
                    <input type="date" value={data.date} onChange={(e) => upd('date', e.target.value)} />
                  </Field>
                  <Field label={f.guests}>
                    <input type="number" min="0" value={data.guests} onChange={(e) => upd('guests', e.target.value)}
                      placeholder="80" />
                  </Field>
                  <Field label={f.venue} required wide>
                    <input value={data.venue} onChange={(e) => upd('venue', e.target.value)}
                      placeholder={lang === 'sr' ? 'Salon, restoran, mesto…' : 'Venue, restaurant, place…'} />
                  </Field>
                  <Field label={f.package} wide>
                    <div className="inq-radios">
                      {f.packageOpts.map((opt) => (
                        <label key={opt} className={`radio ${data.package === opt ? 'on' : ''}`}>
                          <input type="radio" name="pkg" checked={data.package === opt}
                            onChange={() => upd('package', opt)} />
                          <span>{opt}</span>
                        </label>
                      ))}
                    </div>
                  </Field>
                </div>
              )}

              {step === 2 && (
                <div className="inq-fields">
                  <Field label={f.budget} wide>
                    <div className="inq-radios">
                      {f.budgetOpts.map((opt) => (
                        <label key={opt} className={`radio ${data.budget === opt ? 'on' : ''}`}>
                          <input type="radio" name="bud" checked={data.budget === opt}
                            onChange={() => upd('budget', opt)} />
                          <span>{opt}</span>
                        </label>
                      ))}
                    </div>
                  </Field>
                  <Field label={f.note} wide>
                    <textarea rows="5" value={data.note} onChange={(e) => upd('note', e.target.value)}
                      placeholder={f.notePh} />
                  </Field>
                </div>
              )}

              {touched[step] && !stepValid(step) && (
                <div className="inq-error">
                  {lang === 'sr'
                    ? 'Molim popunite obavezna polja (označena *).'
                    : 'Please complete the required fields (marked *).'}
                </div>
              )}

              <div className="inq-nav">
                {step > 0 ? (
                  <button type="button" className="btn btn-ghost" onClick={back}>← {q.back}</button>
                ) : <span />}
                <button type="button" className="btn btn-primary" onClick={next}>
                  {step < 2 ? `${q.next} →` : `${q.submit} ✦`}
                </button>
              </div>
            </div>
          </>
        )}

        {done && (
          <div className="inq-done">
            <div className="inq-done-mark">V</div>
            <h3>
              <em>{q.done_a}</em><br />
              <span>{q.done_b}</span>
            </h3>
            <p>{q.done_sub}</p>
            <dl className="inq-done-summary">
              <div><dt>{f.name}</dt><dd>{data.name}{data.partner && ` + ${data.partner}`}</dd></div>
              <div><dt>{f.date}</dt><dd>{formatDate(data.date, lang)}</dd></div>
              <div><dt>{f.venue}</dt><dd>{data.venue}</dd></div>
              <div><dt>{f.package}</dt><dd>{data.package}</dd></div>
            </dl>
            <button type="button" className="btn btn-ghost"
              onClick={() => { setDone(false); setStep(0); }}>
              {lang === 'sr' ? '← Pošaljite još jednu' : '← Send another'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function Field({ label, required, wide, children }) {
  return (
    <label className={`field ${wide ? 'wide' : ''}`}>
      <span className="field-label">
        {label}{required && <span className="req"> *</span>}
      </span>
      {children}
    </label>
  );
}

// ──────────────────────────────────────────────────────────────────────
// Lightbox — keyboard arrows, esc to dismiss, ← → buttons.
// ──────────────────────────────────────────────────────────────────────
function Lightbox({ items, openIdx, onClose }) {
  const [idx, setIdx] = React.useState(openIdx);
  React.useEffect(() => setIdx(openIdx), [openIdx]);

  React.useEffect(() => {
    if (openIdx == null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') setIdx((i) => (i - 1 + items.length) % items.length);
      if (e.key === 'ArrowRight') setIdx((i) => (i + 1) % items.length);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [openIdx, items.length, onClose]);

  if (openIdx == null) return null;
  const item = items[idx];
  return ReactDOM.createPortal(
    <div className="lbx" onClick={onClose} role="dialog" aria-modal="true">
      <button className="lbx-close" onClick={onClose} aria-label="Close">×</button>
      <button className="lbx-arr lbx-l"
        onClick={(e) => { e.stopPropagation(); setIdx((i) => (i - 1 + items.length) % items.length); }}
        aria-label="Prev">‹</button>
      <button className="lbx-arr lbx-r"
        onClick={(e) => { e.stopPropagation(); setIdx((i) => (i + 1) % items.length); }}
        aria-label="Next">›</button>
      <div className="lbx-card" onClick={(e) => e.stopPropagation()}>
        <img src={item.src} alt={item.name} />
      </div>
      <div className="lbx-meta" onClick={(e) => e.stopPropagation()}>
        <div className="lbx-title">{item.name}</div>
        <div className="lbx-sub">{item.desc}</div>
        <div className="lbx-count">{idx + 1} / {items.length}</div>
      </div>
    </div>,
    document.body,
  );
}

Object.assign(window, { InquiryForm, Field, Lightbox });
