
import { getDeckEnd } from './getDeckEnd.js';

export function clampTime(deck, t) {
  const end = getDeckEnd(deck);
  if (!Number.isFinite(t)) return 0;
  return Math.min(Math.max(t, 0), end);
}
