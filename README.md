

# `taleem-core`

**Version:** v1 (core frozen)
**Status:** STABLE
**Scope:** Deck contracts + validation + core CSS
**UI:** NONE
**Playback:** NONE
**Audio:** NONE

---

## Purpose

`taleem-core` defines the **foundational contracts** of the Taleem ecosystem.

It exists to answer one question only:

> **“What is a valid Taleem deck?”**

Once this package is trusted, everything else (player, browser, UI, audio, frameworks) can change freely.

---

## What this package contains

`taleem-core` contains **only stable, long-lived definitions**:

* the **deck contract** (`deck-v1`)
* **deck validation**
* **semantic deck inspection helpers**
* **core visual contract (`taleem.css`)**

It intentionally contains:

* ❌ no rendering
* ❌ no playback logic
* ❌ no timing math
* ❌ no clocks or timers
* ❌ no audio logic
* ❌ no framework code
* ❌ no environment assumptions

---

## What this package is NOT

`taleem-core` does **not**:

* render slides
* decide active slides
* manage time
* clamp timestamps
* sync audio
* mount DOM
* apply themes
* resolve backgrounds
* fetch files
* store user state

If something depends on **time**, **DOM**, or **environment** — it does **not** belong here.

---

## Architectural position

```
Deck JSON (content)
        ↓
   taleem-core
        ↓
 Player / Browser / App
        ↓
        DOM
```

`taleem-core` sits **below all runtime systems**.

It is designed to be:

* boring
* stable
* forgettable
* trustworthy

---

## The Deck Contract (`deck-v1`)

All Taleem playback depends on **one frozen contract**: `deck-v1`.

### Core properties

* `version` must be `"deck-v1"`
* `deck` is an ordered array of slides
* each slide defines:

  * `type`
  * `start`
  * `end`
  * `data`

Optional, deck-level metadata includes:

* `background` (static, declarative)
* name, description, tags, status

👉 **Once published, a deck is never mutated implicitly.**

If semantics change, a new contract (`deck-v2`) is introduced.

---

## Contract documentation (MANDATORY)

These documents define the **authoritative meaning** of `deck-v1`
They are part of the public API.

* `docs/api.md` — deck & slide structure
* `docs/timings.md` — timing rules (semantic, not playback)
* `docs/eq.md` — EQ slide format

**Rules:**

* Docs and code must stay in sync
* Changes require a new deck version
* No silent behavior changes

---

## Validation philosophy

Validation is **explicit and non-mutating**.

Validation **does**:

* verify structure
* verify types
* enforce constraints

Validation **does not**:

* inject defaults
* auto-correct
* guess intent

This keeps content safe and predictable.

---

## Public API

All exports come from:

```js
import * as TaleemCore from "taleem-core";
```

### Deck validation

```js
validateDeckV1(deck)
```

* returns `{ ok: true, value }` or `{ ok: false, errors }`
* uses the frozen `zodDeckV1` schema
* pure (no mutation)

---

### Deck inspection helpers

```js
hasBackground(deck)
```

* returns `true | false`
* checks **only** for declared background

```js
isEmptyDeck(deck)
```

* returns `true` if `deck.deck` is missing or empty

These helpers answer **semantic questions**, not runtime ones.

---

## Core CSS (`taleem.css`)

`taleem-core` includes a **single CSS file**:

```
styles/taleem.css
```

This file defines the **semantic visual baseline** for Taleem slides.

### What `taleem.css` does

* maps semantic classes → appearance
* consumes **theme tokens** via CSS variables
* defines consistent typography and spacing

### What it does NOT do

* define themes
* inject styles dynamically
* assume frameworks
* manage background rendering

Importing `taleem-core` in a browser build applies the core CSS as a side effect.

---

## Design rules (LOCKED)

1. Core defines **structure**, not behavior
2. Core never touches **time**
3. Core never touches **DOM**
4. Core never injects **defaults**
5. Core evolves only via **new contracts**

---

## Mental model

> **taleem-core defines what a lesson *is*.
> Everything else defines how it is *experienced*.**

---

## When to touch this repo again

Only touch `taleem-core` if:

* a deck contract changes
* a validation rule is wrong
* a documented invariant is violated

Otherwise:

> **Do not open this repo.**

---
