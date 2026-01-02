
# `taleem-core`

**Version:** v0.1.0
**Status:** STABLE (v1 core)
**Scope:** Playback + deck logic only
**UI:** NONE
**Audio:** NONE

---

## Purpose

`taleem-core` is the **UI-agnostic core engine** for Taleem.

It contains:

* the **deck contract** (`deck-v1`)
* **deck validation**
* **playback timing math**
* a **deterministic clock**
* **small explicit helpers**

It intentionally contains **no UI code**, **no Svelte**, **no audio libraries**, **no fetch**, and **no environment assumptions**.

If you are reading this in the future:
👉 **This package exists so you can forget how the internals work and still trust them.**

---

## What this package is responsible for

`taleem-core` answers only these questions:

1. Is this deck valid?
2. Does this deck have the required structure?
3. Given a time `t`, which slide should be active?
4. What is the total duration of a deck?
5. How does time progress in a deterministic way?

That’s it.

---

## What this package is NOT responsible for

`taleem-core` does **NOT** do any of the following:

* Rendering slides
* Styling or themes
* Background images logic
* Audio playback (Howler, HTMLAudio, etc.)
* Fetching files or URLs
* User state
* Progress persistence
* Analytics
* LMS features
* Comments / likes / subscriptions

All of those belong **outside** the core.

If you feel tempted to add them here — stop.

---

## Architectural position

```
CONTENT (HTML + audio)
        ↓
   taleem-core
        ↓
 UI / Audio / App layer
```

`taleem-core` sits **between raw content and UI**.

Everything above it can change.
Everything below it is immutable content.

This is deliberate.

---

## The Deck Contract (`deck-v1`)

All playback in Taleem depends on **one frozen contract**: `deck-v1`.

### Key properties

* `version` **must** be `"deck-v1"`
* `deck` is an ordered array of slides
* Each slide has:

  * `start` (seconds)
  * `end` (seconds)
  * `type`
  * `data`

### Why this matters

* Decks are **long-lived content**
* Slides can be fixed, corrected, or improved over time
* The core must remain stable even as content grows

👉 **Once published, `deck-v1` must never be mutated implicitly.**

If a future version is needed, it will be `deck-v2`, not a silent change.

---

## Contract documentation (MANDATORY READING)

These documents define the **authoritative format and semantics** of `deck-v1`.
They are **part of the public contract**, just like code.

* [`docs/api.md`](./docs/api.md)
  → Defines the overall deck structure and slide model.

* [`docs/timings.md`](./docs/timings.md)
  → Defines timing rules, slide boundaries, and playback semantics.

* [`docs/eq.md`](./docs/eq.md)
  → Defines EQ slide format and constraints.

**Rules:**

* These files must stay **in sync with code**
* They must be **versioned**
* They must **never drift**
* Changes require a **new deck version**, not silent edits

---

## Validation philosophy

Validation is **explicit and non-mutating**.

### Validation does:

* check structure
* check types
* check required fields

### Validation does NOT:

* auto-fix
* inject defaults
* guess intent

This separation prevents hidden behavior and rebuild anxiety.

---

## Public API (v1)

All exports come from:

```js
import * as TaleemCore from 'taleem-core';
```

### Deck validation

```js
validateDeckV1(deck)
```

* Returns `{ ok: true, value }` or `{ ok: false, errors }`
* Uses the frozen `zodDeckV1` schema
* **Pure** (no mutation)

---

### Deck inspection helpers

```js
hasBackground(deck)
```

* Returns `true | false`

```js
patchBackground(deck, defaultBg?)
```

* Returns a **new deck object**
* Does nothing if background already exists
* Never mutates the original deck

```js
isEmptyDeck(deck)
```

* Returns `true` if `deck[]` is missing or empty

These helpers are intentionally small and explicit.

---

## Playback math (core responsibility)

Playback math is **pure, deterministic, and UI-free**.

```js
getDeckEnd(deck)
```

* Returns total duration in seconds
* Uses the last slide’s `end`

```js
clampTime(deck, t)
```

* Clamps any time value into `[0 … deckEnd]`
* Prevents negative or overflow time

```js
pickSlideByTime(deck, t)
```

* Returns:

  ```js
  {
    index,
    slide,
    type
  }
  ```
* Linear scan (deck assumed sorted by time)
* This is the **single authority** for time → slide mapping

👉 **If slide timing feels wrong, this is the only place to look.**

---

## Timer (clock)

`taleem-core` includes a **deterministic clock** that does not depend on audio.

```js
const timer = new Timer();
```

### Capabilities

* `play()`
* `pause()`
* `seek(seconds)`
* `onTick(callback, intervalMs?)`
* `destroy()`

### Design intent

* Audio engines **produce time**
* The core **consumes time**
* The Timer allows:

  * silent playback
  * tests
  * fallback when audio is missing

This prevents coupling playback logic to audio libraries.

---

## Why audio is NOT in core

Audio is:

* environment-dependent
* browser-dependent
* backend-dependent

Core logic must remain:

* testable
* deterministic
* stable for years

Audio adapters (Howler, WebAudio, etc.) live **outside** this package and feed time into it.

---

## Tests and trust

This package has **passing automated tests** for:

* deck validation helpers
* playback math
* timer behavior

The purpose of tests is **trust**, not coverage.

If tests pass:

* the core is safe
* you may forget how it works
* you may build on top confidently

---

## Rules for future changes (IMPORTANT)

1. **Do not change behavior silently**
2. **Do not add UI concepts**
3. **Do not add audio logic**
4. **Do not auto-mutate decks**
5. **Do not expand scope**

Allowed:

* new helpers if they are explicit
* new deck versions (`deck-v2`) as parallel contracts

Not allowed:

* “just a small fix”
* “while we’re here”
* “temporary hacks”

---

## Mental model to remember

> **taleem-core defines WHAT a lesson is and HOW time maps to it.
> Everything else is replaceable.**

If you remember only one sentence, remember that.

---

## When to touch this repo again

Only touch `taleem-core` if:

* the deck contract changes
* timing semantics change
* a bug violates an explicit rule in this README

Otherwise:
**do not open this repo.**

---

## Status

✔ Core extracted
✔ Tests passing
✔ Contract frozen

This is a **completed deliverable**.

You can now safely move on.

---

### Final verdict

This README is **done**.
Commit it and treat it as **law**, not documentation.

If you want next:

* wiring into Svelte
* audio adapter
* content pipeline docs

Just say which.
