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
        { name: "title", content: "Taleem Project - Golden Deck", showAt: 0 }
      ]
    },
    // 2 titleAndSubtitle
    {
      type: "titleAndSubtitle",
      start: 5,
      end: 10,
      data: [
        { name: "title", content: "How Taleem Slides Work", showAt: 5 },
        { name: "subtitle", content: "A simple, calm way to present ideas", showAt: 6 }
      ]
    },
    // 3 bulletList
    {
      type: "bulletList",
      start: 10,
      end: 15,
      data: [
        { name: "bullet", content: "Each slide is carefully prepared information", showAt: 10 },
        { name: "bullet", content: "The system only shows what is written", showAt: 11 },
        { name: "bullet", content: "Nothing changes behind the scenes", showAt: 12 },
        { name: "bullet", content: "The author controls when ideas appear", showAt: 13 },
        { name: "bullet", content: "The same lesson looks the same everywhere", showAt: 14 }
      ]
    },
    {
      type: "twoColumnText",
      start: 15,
      end: 20,
      data: [
        {
          name: "left",
          content: `
          taleem-browser shows one complete slide at a time. Each slide appears fully, clear, and ready to read.
          `,
          showAt: 15
        },
        {
          name: "right",
          content: `
          taleem-player shows content gradually, like a video. Ideas appear step by step as the lesson moves forward.
          `,
          showAt: 17
        }
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
        { name: "title", content: "Learning with Visual Support", showAt: 25 },
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
        { name: "bullet", content: "Each slide has a clear visual focus", showAt: 36 },
        { name: "bullet", content: "Points are shown in a planned order", showAt: 37 },
        { name: "bullet", content: "Nothing appears randomly", showAt: 38 },
        { name: "bullet", content: "This helps students follow step by step", showAt: 39 }
      ]
    },
    // 9 imageRightBulletsLeft
    {
      type: "imageRightBulletsLeft",
      start: 40,
      end: 45,
      data: [
        { name: "image", content: "image.png", showAt: 40 },
        { name: "bullet", content: "Slides do not change on their own", showAt: 41 },
        { name: "bullet", content: "The teacher decides when to move forward", showAt: 42 },
        { name: "bullet", content: "Students are never rushed", showAt: 43 },
        { name: "bullet", content: "This keeps learning calm and focused", showAt: 44 }
      ]
    },
    // 10 table
    {
      type: "table",
      start: 45,
      end: 50,
      data: [
        ["Layer", "Role"],
        ["taleem-core", "Schema for JSON"],
        ["taleem-slides", "Render \u2013 JSON to HTML"],
        ["taleem-browser", "Index-based presentations"],
        ["taleem-player", "Time-based presentations"]
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
        { name: "label", content: "Lesson Covered", showAt: 56 },
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
        { name: "label", content: "Always the Same Output", showAt: 61 }
      ]
    },
    // 14 barChart
    {
      type: "barChart",
      start: 65,
      end: 70,
      data: [
        { name: "bar", label: "Excellent", value: 4, showAt: 65 },
        { name: "bar", label: "Good", value: 6, showAt: 66 },
        { name: "bar", label: "Average", value: 5, showAt: 67 },
        { name: "bar", label: "Needs improvement", value: 2, showAt: 68 }
      ]
    },
    // 15 quoteSlide
    {
      type: "quoteSlide",
      start: 70,
      end: 75,
      data: [
        { name: "quote", content: "Clarity makes learning easier for everyone.", showAt: 70 },
        { name: "author", content: "\u2014 Taleem", showAt: 72 }
      ]
    },
    // 16 quoteWithImage
    {
      type: "quoteWithImage",
      start: 75,
      end: 80,
      data: [
        { name: "quote", content: "Understanding ideas matters more than using complex tools.", showAt: 75 },
        { name: "author", content: "\u2014 Taleem", showAt: 77 },
        { name: "image", content: "image.png", showAt: 78 }
      ]
    },
    // 17 cornerWordsSlide
    {
      type: "cornerWordsSlide",
      start: 80,
      end: 85,
      data: [
        { name: "card", icon: "\u{1F9E0}", label: "Focus", showAt: 80 },
        { name: "card", icon: "\u{1F4D8}", label: "Clarity", showAt: 81 },
        { name: "card", icon: "\u23F1\uFE0F", label: "Pace", showAt: 82 },
        { name: "card", icon: "\u{1F3AF}", label: "Understanding", showAt: 83 }
      ]
    },
    // 18 contactSlide
    {
      type: "contactSlide",
      start: 85,
      end: 90,
      data: [
        { name: "headline", content: "Taleem Project", showAt: 85 },
        { name: "email", content: "github.com/taleem", showAt: 86 },
        { name: "phone", content: "Open-source educational tools", showAt: 87 }
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
          content: "Eq Slide - under contruction",
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
