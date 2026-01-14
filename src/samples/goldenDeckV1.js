import { zodDeckV1 } from "../deck/zodDeckV1.js";

export const goldenDeckV1 = {
  version: "deck-v1",

  name: "Golden Deck V1",

  background: {
    backgroundColor: "#111111",
    backgroundImage: null,
    backgroundImageOpacity: 0.3
  },

  deck: [
    // 1. titleSlide
    {
      type: "titleSlide",
      start: 0,
      end: 3,
      data: [
        { name: "title", content: "Golden Deck", showAt: 0 }
      ]
    },

    // 2. titleAndSubtitle
    {
      type: "titleAndSubtitle",
      start: 3,
      end: 6,
      data: [
        { name: "title", content: "Title & Subtitle", showAt: 0 },
        { name: "subtitle", content: "Subtitle text", showAt: 0 }
      ]
    },

    // 3. titleAndPara
    {
      type: "titleAndPara",
      start: 6,
      end: 10,
      data: [
        { name: "title", content: "Title & Paragraph", showAt: 0 },
        { name: "paragraph", content: "Some paragraph text.", showAt: 0 }
      ]
    },

    // 4. bulletList
    {
      type: "bulletList",
      start: 10,
      end: 14,
      data: [
        { name: "bullet", content: "Point one", showAt: 0 },
        { name: "bullet", content: "Point two", showAt: 0 }
      ]
    },

    // 5. twoColumnText
    {
      type: "twoColumnText",
      start: 14,
      end: 18,
      data: [
        { name: "left", content: "Left text", showAt: 0 },
        { name: "right", content: "Right text", showAt: 0 }
      ]
    },

    // 6. imageSlide
    {
      type: "imageSlide",
      start: 18,
      end: 22,
      data: [
        { name: "image", content: "image.png", showAt: 0 }
      ]
    },

    // 7. imageWithTitle
    {
      type: "imageWithTitle",
      start: 22,
      end: 26,
      data: [
        { name: "title", content: "Image Title", showAt: 0 },
        { name: "image", content: "image.png", showAt: 0 }
      ]
    },

    // 8. imageWithCaption
    {
      type: "imageWithCaption",
      start: 26,
      end: 30,
      data: [
        { name: "image", content: "image.png", showAt: 0 },
        { name: "caption", content: "Caption text", showAt: 0 }
      ]
    },

    // 9. imageLeftBulletsRight
    {
      type: "imageLeftBulletsRight",
      start: 30,
      end: 34,
      data: [
        { name: "image", content: "image.png", showAt: 0 },
        { name: "bullet", content: "Bullet A", showAt: 0 },
        { name: "bullet", content: "Bullet B", showAt: 0 }
      ]
    },

    // 10. table
    {
      type: "table",
      start: 34,
      end: 38,
      data: [
        { name: "headers", content: ["A", "B"], showAt: 0 },
        { name: "rows", content: [["1", "2"], ["3", "4"]], showAt: 0 }
      ]
    },

    // 11. bigNumber
    {
      type: "bigNumber",
      start: 38,
      end: 42,
      data: [
        { name: "number", content: "42", showAt: 0 },
        { name: "label", content: "Meaning of life", showAt: 0 }
      ]
    },

    // 12. quoteSlide
    {
      type: "quoteSlide",
      start: 42,
      end: 46,
      data: [
        { name: "quoteLine", content: "Simplicity wins.", showAt: 0 },
        { name: "author", content: "— Taleem", showAt: 0 }
      ]
    },

    // 13. contactSlide
    {
      type: "contactSlide",
      start: 46,
      end: 50,
      data: [
        { name: "headline", content: "Contact", showAt: 0 },
        { name: "email", content: "info@example.com", showAt: 0 }
      ]
    }
  ]
};

// 🔒 Core validates its own canonical deck
zodDeckV1.parse(goldenDeckV1);
