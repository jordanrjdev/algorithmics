import { canSellTickets } from "../index"

describe("Can Vania sell her tickets?", () => {
  test("Must be returned SI", () => {
    expect(canSellTickets([25, 25, 50])).toBe("SI");
  });
  test("Must be returned NO", () => {
    expect(canSellTickets([25, 100])).toBe("NO");
  });
  test("Must be returned NO", () => {
    expect(canSellTickets([25, 25, 50, 50, 100])).toBe("NO");
  });
  test("Must be returned NO", () => {
    expect(canSellTickets([100, 25, 50])).toBe("NO");
  });
  test("Must be returned NO", () => {
    expect(canSellTickets([25, 25, 50, 100])).toBe("SI");
  });
  test("Must be returned NO", () => {
    expect(canSellTickets([25, 25, 25, 25, 25, 100, 100])).toBe("NO");
  });
  test("Must be returned SI", () => {
    expect(canSellTickets([25, 25, 25, 25, 25, 100, 50, 100])).toBe("SI");
  });
});
