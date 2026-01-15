# 🧠 Taleem Slides API — Version 1.0 candidate

This document defines the **stable, supported API** for creating `deck-v1` presentations in **Taleem Player**.

> **Design principle:**
> This API intentionally supports a **small, reliable set of slide types** that cover ~90% of real educational content.
> If content does not fit a slide, a **new slide template** should be introduced — not stretched.

---
> Decks are authored directly as JSON.
> New slides will be added but these slide types will never be removed
---

## 🧱 Deck Object Structure

Every deck is a JSON object with the following structure:

```ts
{
  version: "deck-v1",
  name: string,
  description?: string,
  tags?: string[],
  status?: "draft" | "ready" | "published",
  deck: Slide[]
}
```

The `deck` array contains slides in playback order.

---

## 🧱 Slide Format

Each slide follows this structure:

```ts
{
  type: string,     // required
  start: number,    // absolute time (seconds)
  end: number,      // absolute time (seconds)
  data: object[]    // slide-specific items
}
```

### Timing Rules

- All timing is **absolute**
- `showAt` must fall within `[start, end]`
- If `showAt` is omitted, the item appears at `start`

---

## 🎞️ Supported Slide Types (v1.0)

Only the slide types listed below are **officially supported** in v1.0.

---

### 1. `titleSlide`

Use for section starts or major breaks.

```ts
[{ name: "title", content: "My Slide Title", showAt: 0 }];
```

---

### 2. `titleAndSubtitle`

Use for introducing topics or lessons.

```ts
[
  { name: "title", content: "Main Title", showAt: 0 },
  { name: "subtitle", content: "Supporting subtitle", showAt: 1 },
];
```

---

### 3. `bulletList`

Use for step-by-step explanations.

```ts
[
  { name: "bullet", content: "First point", showAt: 0 },
  { name: "bullet", content: "Second point", showAt: 1 },
  { name: "bullet", content: "Third point", showAt: 2 },
];
```

---

### 4. `twoColumnText`

Use for comparison, definition vs example, or theory vs summary.

```ts
[
  { name: "title", content: "Two-Column Layout", showAt: 0 },
  { name: "left", content: "Left column content", showAt: 1 },
  { name: "right", content: "Right column content", showAt: 1 },
];
```

---

### 5. `imageSlide`

Use when the image itself is the focus.

```ts
[{ name: "image", content: "/images/example.png", showAt: 0 }];
```

---

### 6. `imageWithTitle`

Use when an image needs a clear heading.

```ts
[
  { name: "image", content: "/images/example.png", showAt: 0 },
  { name: "title", content: "Image Heading", showAt: 1 },
];
```

---

### 7. `imageWithCaption`

Use when an image needs explanation without clutter.

```ts
[
  { name: "image", content: "/images/example.png", showAt: 0 },
  { name: "caption", content: "Supporting explanation", showAt: 1 },
];
```

---

### 8. `imageLeftBulletsRight`

Use for teaching with visual anchoring.

```ts
[
  { name: "image", content: "/images/example.png", showAt: 0 },
  { name: "bullet", content: "Explanation point one", showAt: 1 },
  { name: "bullet", content: "Explanation point two", showAt: 2 },
];
```

---

### 9. `imageRightBulletsLeft`

Same structure as above, reversed for visual variation.

```ts
[
  { name: "image", content: "/images/example.png", showAt: 0 },
  { name: "bullet", content: "Key idea one", showAt: 1 },
  { name: "bullet", content: "Key idea two", showAt: 2 },
];
```

---

### 10. `bigNumber`

Use for emphasis, milestones, or key facts.

```ts
[
  { name: "number", content: "5", showAt: 0 },
  { name: "label", content: "Core Slide Types", showAt: 1 },
];
```

---

### 11. `contactSlide`

Use for project, author, or course information.

```ts
[
  { name: "headline", content: "About the Project", showAt: 0 },
  { name: "email", content: "info@example.com", showAt: 1 },
  { name: "phone", content: "Additional context or tagline", showAt: 2 },
];
```

---

## 🚫 Explicitly Out of Scope (v1.0)

The following are **not part of v1.0** and are intentionally excluded from the API:

- tables
- charts (bar, donut, statistics)
- long-text / paragraph-heavy slides
- RTL / Arabic-specific layouts
- SVG pointer or diagram overlays
- EQ / equation slides

These may appear in **future versions** as **new slide templates**, not extensions.

---

## 🔒 Version Philosophy

- **v1.0** = stable core slides
> **Slides define content limits — content never stretches slides.**
