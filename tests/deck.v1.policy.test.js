import { describe, it, expect } from "vitest";
import { zodDeckV1 } from "../src/deck/zodDeckV1.js";
import { goldenDeckV1 } from "../src/samples/goldenDeckV1.js";

describe("deck-v1 core validation", () => {
  it("validates the canonical golden deck", () => {
    expect(() => zodDeckV1.parse(goldenDeckV1)).not.toThrow();
  });
});
