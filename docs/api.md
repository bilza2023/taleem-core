# Taleem Slide Schema — `deck-v1`

**Status:** Stable · Frozen

This document describes the **complete Taleem slide schema** (`deck-v1`).

It defines **exactly 21 canonical slide types** that together form the full Taleem slide language.

If a deck validates against this schema, it is considered **correct Taleem data**.

---

## What this document is

* A **language reference** for Taleem slides
* A guide for **humans and AI** generating slide decks
* A contract used by Taleem renderers and players

This document mirrors the Zod schema exactly.

---

## What this document is NOT

This schema does **not**:

* render slides
* play slides
* animate slides
* manage clocks or playback
* assume browser or framework
* fix or mutate decks

Those responsibilities belong to **sister projects**.

---

## Core principles

* There are **no special slides**
* There are **no advanced slides**
* All slide types are **equal and canonical**
* Meaning is expressed by **names**, not positions
* Validation checks **structure**, not behavior

---

## Deck object

A Taleem deck has the following structure:

* `version` — must be `"deck-v1"`
* `name` — human-readable title
* `background` — optional visual hints
* `deck` — ordered array of slides

If the deck validates, it is correct.

---

## Background object

The background object is declarative only.

* `backgroundColor` — string (e.g. `#111111`)
* `backgroundImage` — string or `null`
* `backgroundImageOpacity` — number (0–1)

Renderers may ignore these values.

---

## Slide grammar (applies to ALL slides)

Every slide follows the same grammar:

* `type` — slide type name
* `start` — number
* `end` — number
* `data` — array of semantic items

Timing values are structural only. Interpretation is an application concern.

---

## Semantic data items

Inside `data`, each item:

* has a `name`
* has `content` or structured fields
* may include `showAt`

**Order never implies meaning.**

Meaning is always explicit.

---

## Canonical slide types (21)

The following slide types are **complete and final** for `deck-v1`.

There is no core/advanced distinction.

### Text slides

1. `titleSlide`
2. `titleAndSubtitle`
3. `titleAndPara`
4. `bulletList`
5. `twoColumnText`

### Image slides

6. `imageSlide`
7. `imageWithTitle`
8. `imageWithCaption`
9. `imageLeftBulletsRight`
10. `imageRightBulletsLeft`
11. `fillImage`

### Data & statistic slides

12. `bigNumber`
13. `statistic`
14. `table`
15. `barChart`
16. `donutChart`

### Quote & utility slides

17. `quoteSlide`
18. `quoteWithImage`
19. `cornerWordsSlide`
20. `contactSlide`

### Structured content

21. `eq`

---

## Table slide

The `table` slide is semantic, not positional.

* `header` — array of strings
* `row` — array of string arrays

No assumptions are made about layout or styling.

---

## EQ slide

The `eq` slide represents structured mathematical or symbolic content.

* Content is declarative
* Nested data (`spItems`) is allowed
* Flattening or preprocessing is **not** a schema concern

All interpretation is handled by the application.

---

## Golden deck

`taleem-core` exports a **canonical golden deck**.

This deck:

* uses all 21 slide types
* passes schema validation
* represents the full language

If the golden deck validates, the schema is correct.

---

## Validation philosophy

Validation:

* is strict
* is explicit
* never mutates data

If validation passes:

> the deck is correct

If something fails later:

> the bug is in the renderer or player

---

## Extensions

The `deck-v1` schema is **closed**.

New ideas should be implemented as:

* extensions
* separate packages
* renderer-level features

The core schema should remain stable.

---

## Mental model

> Taleem Core defines **what a slide is**.
> Other projects decide **how it is shown**.

If a deck validates here, it is truth.
