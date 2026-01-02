
import { describe, it, expect } from 'vitest';
import {
  getDeckEnd,
  clampTime,
  pickSlideByTime
} from '../src/index.js';

const deck = {
  deck: [
    { start: 0, end: 5, type: 'a' },
    { start: 5, end: 10, type: 'b' }
  ]
};

describe('playback math', () => {
  it('gets deck end', () => {
    expect(getDeckEnd(deck)).toBe(10);
  });

  it('clamps time', () => {
    expect(clampTime(deck, -5)).toBe(0);
    expect(clampTime(deck, 20)).toBe(10);
  });

  it('picks slide by time', () => {
    const r = pickSlideByTime(deck, 6);
    expect(r.index).toBe(1);
    expect(r.type).toBe('b');
  });
});
