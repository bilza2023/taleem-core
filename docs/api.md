# 🧠 DeckBuilder API — Version 1

This document defines the **programmatic API** and **data structure rules** for generating valid `deck-v1` slides used in Taleem.Help presentations.

---

## 🧱 Deck Object Structure

Every deck is a JSON object with the following top-level fields:

```ts
{
  version: "deck-v1",
  name: string,
  description?: string,
  tags?: string[],
  status?: "draft" | "ready" | "published" | "archived",
  createdAt?: ISODateString,
  editedAt?: ISODateString,
  background?: {
    backgroundColor?: string,
    backgroundImage?: string,
    backgroundImageOpacity?: number
  },
  deck: Slide[]
}
```

The `deck` array contains all slides, in order.

Use the `DeckBuilder` class to construct this format programmatically.

---

## 🔧 Metadata API

```ts
deckbuilder.addDetails({ name, description, tags, status });
deckbuilder.setBackgroundImage("/images/example.svg");
deckbuilder.setBackgroundColor("#F3E5AB");
deckbuilder.setBackgroundOpacity(0.07);
```

---

## 🧱 Slide Format

Each slide is:

```ts
{
  type: string,     // required
  start: number,    // auto-injected
  end: number,      // required
  data: object[]    // structure depends on type
}
```

### Timing Rules

See [`timings.md`](./timings.md) for complete details.

* `start` and `end` define the active window (in seconds)
* `showAt` must fall within \[start, end]
* All times are **absolute** (not relative)

---

## 🎞️ Canonical Slide Types

The following slide types are supported via `deckbuilder.s.<type>()`

### 1. `titleSlide`

```ts
[{ name: "title", content: "My Slide Title", showAt: 0 }]
```

### 2. `titleAndSubtitle`

```ts
[
  { name: "title", content: "Main Title", showAt: 0 },
  { name: "subtitle", content: "Smaller text", showAt: 1 }
]
```

### 3. `bulletList`

```ts
[
  { name: "bullet", content: "First point", showAt: 10 },
  { name: "bullet", content: "Second point", showAt: 15 }
]
```

### 4. `twoColumnText`

```ts
[
  { name: "title", content: "Topic", showAt: 0 },
  { name: "left",  content: "Text block", showAt: 1 },
  { name: "right", content: "Other block", showAt: 2 }
]
```

### 5. `imageSlide`

A full-screen image with timed entry.

```ts
// Data: single image
[
  { name: "image", content: "/images/example.png", showAt: 0 }
]
```

### 6. `imageWithTitle`

Image plus an overlaid title.

```ts
// Data: image then title
[
  { name: "image", content: "/images/example.png", showAt: 0 },
  { name: "title", content: "Slide Caption", showAt: 2 }
]
```

### 7. `imageWithCaption`

Image plus a caption below or beside it.

```ts
[
  { name: "image",   content: "/images/example.png", showAt: 0 },
  { name: "caption", content: "Descriptive text", showAt: 1 }
]
```

### 8. `imageLeftBulletsRight`

Image on the left, bullets appearing on the right.

```ts
[
  { name: "image",  content: "/images/example.png", showAt: 0 },
  { name: "bullet", content: "First point",       showAt: 5 },
  { name: "bullet", content: "Second point",      showAt: 10 }
]
```

### 9. `imageRightBulletsLeft`

Image on the right, bullets on the left.

```ts
[
  { name: "image",  content: "/images/example.png", showAt: 0 },
  { name: "bullet", content: "Point A", showAt: 3 },
  { name: "bullet", content: "Point B", showAt: 6 }
]
```

### 10. `table`

Headers and rows in tabular form.

```ts
[
  { name: "headers", content: ["Col1","Col2","Col3"], showAt: 0 },
  { name: "rows",    content: [["A","B","C"],["D","E","F"]], showAt: 1 }
]
```

### 11. `statistic`

Key figure plus label.

```ts
[
  { name: "number", content: "42",         showAt: 0 },
  { name: "label",  content: "Answer",     showAt: 1 }
]
```

### 12. `donutChart`

Circular chart segments with labels and colors.

```ts
[
  { name: "percent", content: "60",      showAt: 0 },
  { name: "label",   content: "Alpha",   showAt: 0 },
  { name: "color",   content: "#4CAF50", showAt: 0 },
  { name: "percent", content: "40",      showAt: 2 },
  { name: "label",   content: "Beta",    showAt: 2 },
  { name: "color",   content: "#FF9800", showAt: 2 }
]
```

### 13. `bigNumber`

Prominent number with optional label.

```ts
[
  { name: "number", content: "100%",   showAt: 0 },
  { name: "label",  content: "Complete", showAt: 1 }
]
```

### 14. `barChart`

Horizontal or vertical bars with values.

```ts
[
  { name: "bar", label: "Math",    value: 80, showAt: 0 },
  { name: "bar", label: "Science", value: 70, showAt: 1 }
]
```

### 15. `quoteSlide`

Quote lines followed by author.

```ts
[
  { name: "quoteLine", content: "To be or not...", showAt: 0 },
  { name: "author",    content: "– Author",    showAt: 2 }
]
```

### 16. `quoteWithImage`

Quote plus an accompanying image.

```ts
[
  { name: "quoteLine", content: "Insightful text", showAt: 0 },
  { name: "author",    content: "– Speaker",     showAt: 1 },
  { name: "image",     content: "/images/quote.jpg", showAt: 2 }
]
```

### 17. `cornerWordsSlide`

Cards in the corners with icon and label.

```ts
[
  { name: "card", icon: "🔭", label: "Observe", showAt: 0 },
  { name: "card", icon: "⚗️", label: "Experiment", showAt: 3 }
]
```

### 18. `contactSlide`

Contact information fields.

```ts
[
  { name: "headline", content: "Contact Us", showAt: 0 },
  { name: "email",    content: "help@example.com", showAt: 1 },
  { name: "phone",    content: "+123456789",       showAt: 2 }
]
```

### 19. `fillImage`

Background-filling image.

```ts
[
  { name: "image", content: "/images/fullscreen.png", showAt: 0 }
]
```

---

### 20. `titleAndPara` (Title + Paragraph)

```ts
[
  { name: "title",     content: "Main Slide Title",            showAt: 0 },
  { name: "paragraph", content: "Here’s the full paragraph text…", showAt: 1 }
]

```

---


## ➗ EQ Slide

See [`eq.md`](./eq.md) for full detail.

* Flat input array with `{ type, content, showAt }` lines
* Followed by `sp*` sidebar entries (auto-attached)

```ts
deckbuilder.s.eq(50, [
  { type: "math", content: "E = mc^2", showAt: 10 },
  { type: "spHeading", content: "Einstein's Law" },
  { type: "spText", content: "Energy-mass equivalence" },
]);
```

---

## 🧭 SVG Pointer Slide (Special Case)

### Use for visual overlays on an SVG diagram

```ts
deckbuilder.s.svgPointer(40, [
  { type: "image", content: "/images/theorem.svg" },
  { type: "circle", x: 120, y: 80, showAt: 10, duration: 5 },
  { type: "dot", x: 150, y: 90, showAt: 15 },
  { type: "arrow", x: 100, y: 50, showAt: 20, duration: 3 },
  { type: "blink", targetId: "x5", showAt: 25, duration: 6 },
  { type: "window", x: 30, y: 30, width: 100, height: 80, showAt: 28 }
]);
```

### 🛑 Constraints:

* Only **one slide** allowed per deck
* Must contain **exactly one** `{ type: "image" }`
* All items must have `showAt` within the slide duration
* `duration` is optional (defaults apply)

SVG pointer slides are rendered by a dedicated `<SvgPointer>` component.

See [`timings.md`](./timings.md) for pointer timing rules.

---

## 🧪 Finalize Deck

```ts
const json = deckbuilder.build(); // returns fully validated deck-v1
```

Uses `DeckDoctor` internally for:

* validation
* EQ expansion
* default injection

---

## 🔒 Format Lock

The `deck-v1` format is frozen. All future additions (e.g., transitions, grouped animations) will be released under `deck-v2`.
