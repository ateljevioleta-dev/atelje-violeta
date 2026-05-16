// Scroller — horizontal scroll-snap carousel.
//
// Props:
//   items[]            — data array
//   renderItem(item,i) — returns the card JSX (don't include outer .scroller-card; we add it)
//   cardWidth          — px, optional, default 360
//   gap                — px, optional, default 24
//   ariaLabel          — for screen readers
//   onItemClick(i)     — optional click handler for the card
//
// Uses native scroll-snap (smooth on mobile + trackpad), with arrow
// buttons that scroll one card at a time on click. Arrow buttons hide
// when there's nothing to scroll in that direction.

function Scroller({ items, renderItem, cardWidth = 360, gap = 24, ariaLabel, onItemClick }) {
  const trackRef = React.useRef(null);
  const [canLeft, setCanLeft]   = React.useState(false);
  const [canRight, setCanRight] = React.useState(true);
  const [active, setActive]     = React.useState(0);

  const update = React.useCallback(() => {
    const t = trackRef.current;
    if (!t) return;
    setCanLeft(t.scrollLeft > 4);
    setCanRight(t.scrollLeft + t.clientWidth < t.scrollWidth - 4);
    // simple index mapping: which card's left edge is closest to the track's
    // scroll origin. matches scroll-snap-align: start, so the dot always
    // reflects the "current" card.
    const idx = Math.round(t.scrollLeft / (cardWidth + gap));
    setActive(Math.max(0, Math.min(items.length - 1, idx)));
  }, [items.length, cardWidth, gap]);

  React.useEffect(() => {
    const t = trackRef.current;
    if (!t) return;
    update();
    t.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      t.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [update]);

  const step = (dir) => {
    const t = trackRef.current;
    if (!t) return;
    t.scrollBy({ left: dir * (cardWidth + gap), behavior: 'smooth' });
  };

  const goTo = (i) => {
    const t = trackRef.current;
    if (!t) return;
    t.scrollTo({ left: i * (cardWidth + gap), behavior: 'smooth' });
  };

  return (
    <div className="scroller" aria-label={ariaLabel}>
      <button
        type="button"
        className={`scroller-arr scroller-arr-l ${canLeft ? '' : 'is-disabled'}`}
        onClick={() => step(-1)}
        aria-label="Prethodno"
        disabled={!canLeft}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor"
          strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M11 3L5 9l6 6" />
        </svg>
      </button>
      <button
        type="button"
        className={`scroller-arr scroller-arr-r ${canRight ? '' : 'is-disabled'}`}
        onClick={() => step(1)}
        aria-label="Sledeće"
        disabled={!canRight}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor"
          strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M7 3l6 6-6 6" />
        </svg>
      </button>

      <div
        className="scroller-track"
        ref={trackRef}
        style={{ '--card-w': `${cardWidth}px`, '--gap': `${gap}px` }}
      >
        {items.map((it, i) => (
          <div
            key={it.id || i}
            className="scroller-card"
            onClick={onItemClick ? () => onItemClick(i) : undefined}
            role={onItemClick ? 'button' : undefined}
            tabIndex={onItemClick ? 0 : undefined}
            onKeyDown={onItemClick ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onItemClick(i); }
            } : undefined}
          >
            {renderItem(it, i)}
          </div>
        ))}
      </div>

      <div className="scroller-dots" role="tablist" aria-label="Stranica">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`scroller-dot ${i === active ? 'on' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`${i + 1}`}
            aria-selected={i === active}
          />
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { Scroller });
