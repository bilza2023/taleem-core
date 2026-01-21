
# `taleem-core`

**Status:** Stable
**API Version:** 1.0.0
**Deck Schema:** `deck-v1` (frozen)

`taleem-core` is part of the **Taleem** project.

**Taleem** is a system that converts **Taleem JSON** into **clean educational slides**.

👉 Demo & docs:
[https://bilza2023.github.io/taleem/](https://bilza2023.github.io/taleem/)

---

## What is this package?

`taleem-core` contains **only the permanent foundations** of Taleem:

1. The **schema** that defines what a valid Taleem slide deck looks like
2. One **golden reference deck** that represents the full slide language

That’s it.

This package answers just one question:

> **Is this Taleem JSON valid or not?**

---

## What this package is NOT

`taleem-core` does **not**:

* render slides
* play slides
* animate slides
* deal with time, audio, UI, or browsers
* show anything on screen

If something runs, draws, or plays — it does **not** belong here.

---

## Do I need to use this package?

**Probably not.**

Most users will:

* use the Taleem demo
* use a player or browser built on top of Taleem
* never touch `taleem-core` directly

This package exists mainly for:

* internal correctness
* validation
* documentation of the slide language

If you’re curious, you can read it.

---

## What’s inside (simple)

`taleem-core` provides:

* a **Zod schema** for Taleem decks
* definitions for all supported slide types
* a single **golden deck** that validates successfully

If the golden deck passes validation, the schema is correct.

---

## Public API (exports)

`taleem-core@1.5.0` exposes a **small, stable, frozen API**.

These exports are **guaranteed not to break** within `deck-v1`.
📘 **Full schema reference:**  
See [`docs/api.md`](./docs/api.md) for the complete `deck-v1` language specification.

### Schema

```js
import { zodDeckV1 } from "taleem-core";
```

The canonical Zod schema that defines a valid Taleem deck.

---

### Validation

```js
import { validateDeckV1 } from "taleem-core";
```

Validates a deck against `deck-v1`.
Returns a success or detailed validation errors.

---

### Helpers (introspection only)

```js
import { hasBackground, isEmptyDeck } from "taleem-core";
```

Small, pure helpers for inspecting a deck.
No rendering or side effects.

---

### Golden reference

```js
import { goldenDeckV1 } from "taleem-core";
```

A complete, valid reference deck that uses the full slide language.

If this deck validates successfully, the schema is correct.

---

## Supported slide types (v1 – frozen)

`taleem-core` defines a **finite, stable slide language**.

These slide type names are **part of the public contract** and will **never change** in `deck-v1`:

* `titleSlide`
* `titleAndSubtitle`
* `titleAndPara`
* `bulletList`
* `twoColumnText`
* `imageSlide`
* `imageWithTitle`
* `imageWithCaption`
* `imageLeftBulletsRight`
* `imageRightBulletsLeft`
* `table`
* `statistic`
* `donutChart`
* `bigNumber`
* `barChart`
* `quoteSlide`
* `quoteWithImage`
* `cornerWordsSlide`
* `contactSlide`
* `fillImage`
* `eq`

These layouts represent **core presentation primitives** and are sufficient for the vast majority of educational and professional decks.

New visuals or behaviors may evolve in players,
but **these names and their meaning are fixed**.

---

## The golden deck

The golden deck is the **reference example** of Taleem.

* It uses all supported slide types
* It follows the rules correctly
* It represents the full language

If something breaks in a browser or player **but this deck is valid**:

> the problem is **not** in `taleem-core`

---

## Mental model

Think of `taleem-core` like this:

> **It defines the language.
> Other projects decide how to speak it.**

---

## When to change this repo

Only change `taleem-core` if:

* the schema itself is wrong
* a rule is clearly incorrect
* a new deck version is intentionally introduced (e.g. `deck-v2`)

Otherwise: **leave it alone**.

---
