import { zodDeckV1 } from "../deck/zodDeckV1.js";

export const goldenDeckV1 = {
  version: "deck-v1",

  name: "Golden Deck V1 – Full Schema Coverage",

  background: {
    backgroundColor: "#111111",
    backgroundImage: null,
    backgroundImageOpacity: 0.3
  },

  deck: [
    // 1 titleSlide
    {
      type: "titleSlide",
      start: 0,
      end: 2,
      data: [{ name: "title", content: "Golden Deck", showAt: 0 }]
    },

    // 2 titleAndSubtitle
    {
      type: "titleAndSubtitle",
      start: 2,
      end: 4,
      data: [
        { name: "title", content: "Title & Subtitle", showAt: 0 },
        { name: "subtitle", content: "Schema language demo", showAt: 0 }
      ]
    },

    // 3 bulletList
    {
      type: "bulletList",
      start: 4,
      end: 6,
      data: [
        { name: "bullet", content: "First bullet", showAt: 0 },
        { name: "bullet", content: "Second bullet", showAt: 0 }
      ]
    },

    // 4 twoColumnText
    {
      type: "twoColumnText",
      start: 6,
      end: 8,
      data: [
        { name: "left", content: "Left column", showAt: 0 },
        { name: "right", content: "Right column", showAt: 0 }
      ]
    },

    // 5 imageSlide
    {
      type: "imageSlide",
      start: 8,
      end: 10,
      data: [{ name: "image", content: "image.png", showAt: 0 }]
    },

    // 6 imageWithTitle
    {
      type: "imageWithTitle",
      start: 10,
      end: 12,
      data: [
        { name: "title", content: "Image With Title", showAt: 0 },
        { name: "image", content: "image.png", showAt: 0 }
      ]
    },

    // 7 imageWithCaption
    {
      type: "imageWithCaption",
      start: 12,
      end: 14,
      data: [
        { name: "image", content: "image.png", showAt: 0 },
        { name: "caption", content: "Image caption", showAt: 0 }
      ]
    },

    // 8 imageLeftBulletsRight
    {
      type: "imageLeftBulletsRight",
      start: 14,
      end: 16,
      data: [
        { name: "image", content: "image.png", showAt: 0 },
        { name: "bullet", content: "Bullet A", showAt: 0 },
        { name: "bullet", content: "Bullet B", showAt: 0 }
      ]
    },

    // 9 imageRightBulletsLeft
    {
      type: "imageRightBulletsLeft",
      start: 16,
      end: 18,
      data: [
        { name: "image", content: "image.png", showAt: 0 },
        { name: "bullet", content: "Bullet X", showAt: 0 },
        { name: "bullet", content: "Bullet Y", showAt: 0 }
      ]
    },

    // 10 table
    {
      type: "table",
      start: 18,
      end: 20,
      data: [
        { name: "header", content: ["A", "B"], showAt: 0 },
        { name: "row", content: [["1", "2"], ["3", "4"]], showAt: 0 }
      ]
    },

    // 11 statistic
    {
      type: "statistic",
      start: 20,
      end: 22,
      data: [
        { name: "number", content: "75%", showAt: 0 },
        { name: "label", content: "Completion Rate", showAt: 0 }
      ]
    },

    // 12 donutChart
    {
      type: "donutChart",
      start: 22,
      end: 24,
      data: [
        { name: "percent", content: "60", showAt: 0 },
        { name: "label", content: "Used", showAt: 0 },
        { name: "color", content: "#ff9900", showAt: 0 }
      ]
    },

    // 13 bigNumber
    {
      type: "bigNumber",
      start: 24,
      end: 26,
      data: [
        { name: "number", content: "42", showAt: 0 },
        { name: "label", content: "Answer", showAt: 0 }
      ]
    },

    // 14 barChart
    {
      type: "barChart",
      start: 26,
      end: 28,
      data: [
        { name: "bar", label: "A", value: 10, showAt: 0 },
        { name: "bar", label: "B", value: 20, showAt: 0 }
      ]
    },

    // 15 quoteSlide
    {
      type: "quoteSlide",
      start: 28,
      end: 30,
      data: [
        { name: "quote", content: "Schema defines truth.", showAt: 0 },
        { name: "author", content: "— Taleem", showAt: 0 }
      ]
    },

    // 16 quoteWithImage
    {
      type: "quoteWithImage",
      start: 30,
      end: 32,
      data: [
        { name: "quote", content: "Language over implementation.", showAt: 0 },
        { name: "author", content: "— Core", showAt: 0 },
        { name: "image", content: "image.png", showAt: 0 }
      ]
    },

    // 17 cornerWordsSlide
    {
      type: "cornerWordsSlide",
      start: 32,
      end: 34,
      data: [
        { name: "card", icon: "★", label: "Focus", showAt: 0 }
      ]
    },

    // 18 contactSlide
    {
      type: "contactSlide",
      start: 34,
      end: 36,
      data: [
        { name: "headline", content: "Contact", showAt: 0 },
        { name: "email", content: "info@example.com", showAt: 0 },
        { name: "phone", content: "+123456789", showAt: 0 }
      ]
    },

    // 19 eq
    {
      type: "eq",
      start: 36,
      end: 40,
      data: [
        {
          name: "line",
          type: "heading",
          content: "Quadratic Formula",
          showAt: 0
        },
        {
          name: "line",
          type: "math",
          content: "x = (-b ± √(b² - 4ac)) / 2a",
          showAt: 1,
          spItems: [
            { type: "spText", content: "Where a, b, c are constants" }
          ]
        }
      ]
    },

    // 20 fillImage
    {
      type: "fillImage",
      start: 40,
      end: 42,
      data: [
        { name: "image", content: "image.png", showAt: 0 }
      ]
    },

    // 21 titleAndPara
    {
      type: "titleAndPara",
      start: 42,
      end: 44,
      data: [
        { name: "title", content: "End", showAt: 0 },
        { name: "para", content: "All 21 slide types validated.", showAt: 0 }
      ]
    }
  ]
};

// 🔒 Canonical validation
zodDeckV1.parse(goldenDeckV1);
