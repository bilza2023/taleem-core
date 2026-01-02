
import { describe, it, expect } from 'vitest';
import {
  validateDeckV1,
  hasBackground,
  patchBackground,
  isEmptyDeck
} from '../src/index.js';

const validDeck = {
  version: 'deck-v1',
  deck: [{ start: 0, end: 5, type: 'titleSlide', data: [] }]
};

describe('deck helpers', () => {
  it('validates deck-v1', () => {
    const r = validateDeckV1(validDeck);
    expect(r.ok).toBe(true);
  });

  it('detects empty deck', () => {
    expect(isEmptyDeck({ version: 'deck-v1', deck: [] })).toBe(true);
  });

  it('checks and patches background', () => {
    expect(hasBackground(validDeck)).toBe(false);
    const patched = patchBackground(validDeck);
    expect(hasBackground(patched)).toBe(true);
  });
});
