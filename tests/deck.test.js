import { describe, it, expect } from "vitest";
import { zodDeckV1 } from "../src/deck/zodDeckV1.js";
import { goldenDeckV1 } from "../src/samples/goldenDeckV1.js";

describe("taleem-core deck contract", () => {
  it("validates the golden deck", () => {
    expect(() => zodDeckV1.parse(goldenDeckV1)).not.toThrow();
  });

  it("golden deck is not empty", () => {
    expect(goldenDeckV1.deck.length).toBeGreaterThan(0);
  });

  it("golden deck declares background", () => {
    expect(goldenDeckV1.background).toBeDefined();
  });
});
