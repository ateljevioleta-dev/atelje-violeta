// Shared bits: cursor petals, audio toggle, IntersectionObserver hook,
// formatDate helper. Bouquet-configurator sketch is gone.

// IntersectionObserver — adds .is-in once the element enters the viewport.
// Wraps in a fallback timeout because some embeds throttle observers.
function useReveal() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fallback = setTimeout(() => el.classList.add('is-in'), 200);
    if (!('IntersectionObserver' in window)) return () => clearTimeout(fallback);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { el.classList.add('is-in'); io.unobserve(el); clearTimeout(fallback); }
        });
      },
      { rootMargin: '200px 0px 200px 0px', threshold: 0 },
    );
    io.observe(el);
    return () => { io.disconnect(); clearTimeout(fallback); };
  }, []);
  return ref;
}

// Falling-petal cursor — drops a small lavender petal every ~90ms of
// pointer movement, capped at ~16 live elements.
function PetalCursor({ color = 'rgba(154, 135, 196, 0.55)' }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const layer = ref.current;
    if (!layer) return;
    let last = 0, count = 0;
    const onMove = (e) => {
      const now = performance.now();
      if (now - last < 90) return;
      last = now;
      if (count > 16) return;
      count++;
      const x = e.clientX;
      const y = e.clientY + window.scrollY;
      const el = document.createElement('span');
      el.className = 'petal';
      const size = 5 + Math.random() * 8;
      const dx = (Math.random() - 0.5) * 60;
      const rot = (Math.random() - 0.5) * 80;
      el.style.cssText = [
        `position:absolute`,
        `left:${x}px`,
        `top:${y}px`,
        `width:${size}px`,
        `height:${size * 1.4}px`,
        `background:${color}`,
        `--dx:${dx}px`,
        `--rot:${rot}deg`,
      ].join(';');
      layer.appendChild(el);
      setTimeout(() => { el.remove(); count--; }, 1600);
    };
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, [color]);
  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: '100%', pointerEvents: 'none',
        zIndex: 1, overflow: 'hidden',
      }}
    />
  );
}

// Quiet WebAudio drone — Aeolian-mode pad, gentle LFOs.
function useHymn() {
  const ctxRef = React.useRef(null);
  const masterRef = React.useRef(null);
  const nodesRef = React.useRef([]);
  const [on, setOn] = React.useState(false);

  const start = () => {
    if (ctxRef.current) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = new AC();
    ctxRef.current = ctx;
    const master = ctx.createGain();
    master.gain.value = 0;
    master.connect(ctx.destination);
    masterRef.current = master;
    const freqs = [196.0, 261.63, 311.13, 392.0];
    freqs.forEach((f, i) => {
      const osc = ctx.createOscillator();
      osc.type = i % 2 ? 'sine' : 'triangle';
      osc.frequency.value = f;
      const g = ctx.createGain();
      g.gain.value = 0.06 - i * 0.008;
      const lfo = ctx.createOscillator();
      lfo.frequency.value = 0.07 + i * 0.03;
      const lfoG = ctx.createGain();
      lfoG.gain.value = 0.4 + i * 0.2;
      lfo.connect(lfoG).connect(osc.detune);
      osc.connect(g).connect(master);
      osc.start();
      lfo.start();
      nodesRef.current.push(osc, lfo);
    });
  };

  const fade = (to, dur = 1.2) => {
    const ctx = ctxRef.current;
    if (!ctx || !masterRef.current) return;
    const m = masterRef.current.gain;
    m.cancelScheduledValues(ctx.currentTime);
    m.setValueAtTime(m.value, ctx.currentTime);
    m.linearRampToValueAtTime(to, ctx.currentTime + dur);
  };

  const toggle = () => {
    setOn((prev) => {
      const next = !prev;
      if (next) {
        start();
        ctxRef.current && ctxRef.current.resume && ctxRef.current.resume();
        fade(0.8, 1.4);
      } else {
        fade(0, 0.9);
      }
      return next;
    });
  };

  React.useEffect(() => () => {
    nodesRef.current.forEach((n) => { try { n.stop(); } catch {} });
    try { ctxRef.current && ctxRef.current.close(); } catch {}
  }, []);

  return { on, toggle };
}

// Small geometric ornament — three diamonds on a thin rule. Used to
// punctuate sections without using any religious iconography.
function Ornament({ color }) {
  return (
    <div className="ornament" style={color ? { color } : undefined}>
      <svg width="40" height="10" viewBox="0 0 40 10" aria-hidden="true">
        <g fill="currentColor">
          <path d="M5 5 L8 2 L11 5 L8 8 Z" />
          <path d="M17 5 L20 1 L23 5 L20 9 Z" />
          <path d="M29 5 L32 2 L35 5 L32 8 Z" opacity="0.7" />
        </g>
      </svg>
    </div>
  );
}

function formatDate(d, lang) {
  if (!d) return '';
  const dt = new Date(d);
  if (isNaN(dt)) return d;
  return dt.toLocaleDateString(lang === 'sr' ? 'sr-Latn-RS' : 'en-GB', {
    day: 'numeric', month: 'long', year: 'numeric',
  });
}

Object.assign(window, { useReveal, PetalCursor, useHymn, Ornament, formatDate });
