
export default class Timer {
    constructor() {
      this._tickCbs = [];
      this._interval = 200;
      this._intervalId = null;
      this._elapsed = 0;
      this._startedAt = null;
    }
  
    play() {
      if (this._intervalId) return;
      this._startedAt = Date.now();
      this._start();
    }
  
    pause() {
      if (!this._intervalId) return;
      this._elapsed += Date.now() - this._startedAt;
      this._stop();
    }
  
    seek(sec) {
      this._elapsed = sec * 1000;
      this._startedAt = Date.now();
    }
  
    onTick(cb, interval = 200) {
      this._tickCbs.push(cb);
      this._interval = interval;
      if (this._startedAt && !this._intervalId) this._start();
    }
  
    destroy() {
      this._stop();
    }
  
    _now() {
      const run = this._startedAt ? Date.now() - this._startedAt : 0;
      return (this._elapsed + run) / 1000;
    }
  
    _start() {
      this._stop();
      this._intervalId = setInterval(() => {
        const t = this._now();
        this._tickCbs.forEach(fn => fn(t));
      }, this._interval);
    }
  
    _stop() {
      if (this._intervalId) {
        clearInterval(this._intervalId);
        this._intervalId = null;
      }
    }
  }
  