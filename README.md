
# `taleem-core`

`taleem-core` is part of the **Taleem** project.

**Taleem** is a system that converts **simple JSON** into **clean educational slides**.

👉 Demo & docs:
[https://bilza2023.github.io/taleem/](https://bilza2023.github.io/taleem/)

---

## What is this package?

`taleem-core` contains **only two things**:

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
* a new deck version is intentionally introduced

Otherwise: **leave it alone**.


