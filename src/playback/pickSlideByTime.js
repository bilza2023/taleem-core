
export function pickSlideByTime(deck, t) {
    const slides = deck?.deck ?? deck;
    if (!Array.isArray(slides) || slides.length === 0) {
      return { index: -1, slide: null, type: null };
    }
  
    let idx = 0;
    for (let i = 0; i < slides.length; i++) {
      if ((slides[i].start ?? 0) <= t) idx = i;
      else break;
    }
  
    const slide = slides[idx];
    return { index: idx, slide, type: slide?.type ?? null };
  }
  