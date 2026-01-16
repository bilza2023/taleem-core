// src/samples/goldenDeckV1.js
var goldenDeckV1 = {
  version: "deck-v1",
  name: "Golden Deck V1 \u2013 Full Schema Coverage",
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
      end: 5,
      data: [
        { name: "title", content: "Golden Deck", showAt: 0 }
      ]
    },
    // 2 titleAndSubtitle
    {
      type: "titleAndSubtitle",
      start: 5,
      end: 10,
      data: [
        { name: "title", content: "Title & Subtitle", showAt: 5 },
        { name: "subtitle", content: "Schema language demo", showAt: 6 }
      ]
    },
    // 3 bulletList
    {
      type: "bulletList",
      start: 10,
      end: 15,
      data: [
        { name: "bullet", content: "Structured slide data", showAt: 10 },
        { name: "bullet", content: "Renderer consumes data only", showAt: 11 },
        { name: "bullet", content: "No internal state", showAt: 12 }
      ]
    },
    // 4 twoColumnText
    {
      type: "twoColumnText",
      start: 15,
      end: 20,
      data: [
        { name: "left", content: "Browser\n(index-based)", showAt: 15 },
        { name: "right", content: "Player\n(scalar-based)", showAt: 17 }
      ]
    },
    // 5 imageSlide
    {
      type: "imageSlide",
      start: 20,
      end: 25,
      data: [
        { name: "image", content: "image.png", showAt: 20 }
      ]
    },
    // 6 imageWithTitle
    {
      type: "imageWithTitle",
      start: 25,
      end: 30,
      data: [
        { name: "title", content: "Image With Title", showAt: 25 },
        { name: "image", content: "image.png", showAt: 26 }
      ]
    },
    // 7 imageWithCaption
    {
      type: "imageWithCaption",
      start: 30,
      end: 35,
      data: [
        { name: "image", content: "image.png", showAt: 30 },
        { name: "caption", content: "Caption as data", showAt: 31 }
      ]
    },
    // 8 imageLeftBulletsRight
    {
      type: "imageLeftBulletsRight",
      start: 35,
      end: 40,
      data: [
        { name: "image", content: "image.png", showAt: 35 },
        { name: "bullet", content: "Layout is declarative", showAt: 36 },
        { name: "bullet", content: "Order defined by data", showAt: 37 }
      ]
    },
    // 9 imageRightBulletsLeft
    {
      type: "imageRightBulletsLeft",
      start: 40,
      end: 45,
      data: [
        { name: "image", content: "image.png", showAt: 40 },
        { name: "bullet", content: "Renderer is pure", showAt: 41 },
        { name: "bullet", content: "No timing logic here", showAt: 42 }
      ]
    },
    // 10 table
    {
      type: "table",
      start: 45,
      end: 50,
      data: [
        { name: "header", content: ["Layer", "Role"], showAt: 45 },
        {
          name: "row",
          content: [
            ["taleem-core", "Schema"],
            ["taleem-slides", "Render"]
          ],
          showAt: 46
        }
      ]
    },
    // 11 statistic
    {
      type: "statistic",
      start: 50,
      end: 55,
      data: [
        { name: "number", content: "21", showAt: 50 },
        { name: "label", content: "Slide Types", showAt: 51 }
      ]
    },
    // 12 donutChart
    {
      type: "donutChart",
      start: 55,
      end: 60,
      data: [
        { name: "percent", content: "60", showAt: 55 },
        { name: "label", content: "Rendered", showAt: 56 },
        { name: "color", content: "#ff9900", showAt: 57 }
      ]
    },
    // 13 bigNumber
    {
      type: "bigNumber",
      start: 60,
      end: 65,
      data: [
        { name: "number", content: "100%", showAt: 60 },
        { name: "label", content: "Deterministic", showAt: 61 }
      ]
    },
    // 14 barChart
    {
      type: "barChart",
      start: 65,
      end: 70,
      data: [
        { name: "bar", label: "Pure", value: 10, showAt: 65 },
        { name: "bar", label: "Impure", value: 2, showAt: 66 }
      ]
    },
    // 15 quoteSlide
    {
      type: "quoteSlide",
      start: 70,
      end: 75,
      data: [
        { name: "quote", content: "Schema defines truth.", showAt: 70 },
        { name: "author", content: "\u2014 Taleem", showAt: 72 }
      ]
    },
    // 16 quoteWithImage
    {
      type: "quoteWithImage",
      start: 75,
      end: 80,
      data: [
        { name: "quote", content: "Language over implementation.", showAt: 75 },
        { name: "author", content: "\u2014 Core", showAt: 77 },
        { name: "image", content: "image.png", showAt: 78 }
      ]
    },
    // 17 cornerWordsSlide
    {
      type: "cornerWordsSlide",
      start: 80,
      end: 85,
      data: [
        { name: "card", icon: "\u2605", label: "Focus", showAt: 80 }
      ]
    },
    // 18 contactSlide
    {
      type: "contactSlide",
      start: 85,
      end: 90,
      data: [
        { name: "headline", content: "Library", showAt: 85 },
        { name: "email", content: "taleem-slides", showAt: 86 },
        { name: "phone", content: "github.com", showAt: 87 }
      ]
    },
    // 19 eq
    {
      type: "eq",
      start: 90,
      end: 95,
      data: [
        {
          name: "line",
          type: "heading",
          content: "Determinism",
          showAt: 90
        },
        {
          name: "line",
          type: "math",
          content: "render(data) \u21D2 same output",
          showAt: 91,
          spItems: [
            { type: "spText", content: "No hidden state" }
          ]
        }
      ]
    },
    // 20 fillImage
    {
      type: "fillImage",
      start: 95,
      end: 100,
      data: [
        { name: "image", content: "image.png", showAt: 95 }
      ]
    },
    // 21 titleAndPara
    {
      type: "titleAndPara",
      start: 100,
      end: 105,
      data: [
        { name: "title", content: "End", showAt: 100 },
        { name: "para", content: "All slide types rendered.", showAt: 101 }
      ]
    }
  ]
};
export {
  goldenDeckV1
};
