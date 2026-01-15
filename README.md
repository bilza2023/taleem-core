
# `taleem-core`

**Status:** STABLE
**Version:** deck-v1 (frozen)
**Scope:** Schema only
**UI:** none
**Player:** none
**Renderer:** none

---

## What is `taleem-core`?

`taleem-core` defines the **Zod schema for Taleem slides**.

It answers **one question only**:

> **Is this Taleem deck valid or not?**

That’s it.

If a deck passes validation here, it is considered **correct Taleem data**.

---
> for detail , demo and docs check <a href="https://bilza2023.github.io/taleem/">https://bilza2023.github.io/taleem/</a>
## What this package contains

`taleem-core` contains:

* the **deck-v1 Zod schema**
* definitions for **exactly 21 slide types**
* a **canonical golden deck** that validates successfully
* minimal helpers related to deck structure
* a small base CSS file (`taleem.css`) for semantic styling

---

## What this package does NOT do

`taleem-core` does **not**:

* render slides
* play slides
* animate slides
* manage time or clocks
* sync audio
* touch the DOM
* assume browser, framework, or environment
* fix or mutate decks

If something depends on **runtime, UI, or environment**, it does **not** belong here.

---

## The Taleem slide language

`taleem-core` defines a **single slide language**.

* There are **exactly 21 slide types**
* All slides follow the **same grammar**
* There are **no special slides**
* There are **no advanced slides**
* There are **no future slides**

Every slide:

```txt
- has a type
- has start and end time
- contains data entries
- uses semantic names inside data
```

If a slide exists in the schema, it is **canonical**.

---

## About EQ, tables, charts, etc.

Slides like:

* `eq`
* `table`
* `donutChart`
* `barChart`

are **not special**.

They are:

* declarative
* schema-validated
* equal citizens of the language

Any complexity (flattening, rendering, animation) is an **app concern**, not a schema concern.

---

## The Golden Deck

`taleem-core` exports a **single canonical golden deck**.

This deck:

* uses **all 21 slide types**
* passes schema validation
* represents the full Taleem slide language

If this deck validates:

```txt
the schema is correct
```

If something breaks elsewhere:

```txt
the bug is in the renderer, browser, or player
```

---

## Validation philosophy

Validation is:

* strict
* explicit
* non-mutating

Validation **does**:

* check structure
* check types
* enforce the declared grammar

Validation **does not**:

* guess intent
* inject defaults
* “fix” data
* adapt to renderers

---

## Sister projects

Other Taleem projects **use this schema**, but do not modify it.

Examples:

* Taleem Browser
* Taleem Player
* Other future renderers

They all **start from valid data**.

---

## Extensions (future-safe)

This schema is **closed**.

No new slide types will be added here.

If new ideas are needed:

* they will be implemented as **extensions**
* or as **separate packages**
* without changing `deck-v1`

This keeps the core stable.

---

## Mental model

> **`taleem-core` defines what a slide *is*.
> Other projects decide how it is *shown*.**

---

## When to touch this repo

Only change `taleem-core` if:

* the schema is wrong
* a documented invariant is broken
* a new deck version is intentionally introduced

Otherwise:

> **Do not modify this package.**

---

If you want, next we can:

* clean `api.md` the same way (one slide at a time)
* or align `eq.md` with the new “no special slides” rule
