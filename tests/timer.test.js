import { describe, it, expect, vi } from 'vitest';
import { Timer } from '../src/index.js';

describe('Timer', () => {
  it('ticks forward when playing', async () => {
    vi.useFakeTimers();
    const t = new Timer();
    let last = 0;

    t.onTick(v => (last = v), 100);
    t.play();

    vi.advanceTimersByTime(500);
    expect(last).toBeGreaterThan(0);

    t.destroy();
    vi.useRealTimers();
  });
});
