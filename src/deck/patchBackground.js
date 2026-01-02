
import { defaultBackground } from '../defaults/defaultBackground.js';

export function patchBackground(deck, bg = defaultBackground) {
  if (deck.background) return deck;
  return { ...deck, background: bg };
}
