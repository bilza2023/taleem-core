
export function isEmptyDeck(deck) {
    return !Array.isArray(deck?.deck) || deck.deck.length === 0;
  }
  