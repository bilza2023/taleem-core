
export function getDeckEnd(deck) {
    const slides = deck?.deck ?? deck;
    return slides.length ? (slides[slides.length - 1].end ?? 0) : 0;
  }
  