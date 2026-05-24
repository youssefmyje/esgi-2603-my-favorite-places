import { getDistance } from "./getDistance";

describe("getDistance", () => {
  it("should return 0 when both points are identical", () => {
    const point = { lat: 48.8566, lng: 2.3522 };

    const distance = getDistance(point, point);

    expect(distance).toBe(0);
  });

  it("should return a positive distance between Paris and Lyon", () => {
    const paris = { lat: 48.8566, lng: 2.3522 };
    const lyon = { lat: 45.764, lng: 4.8357 };

    const distance = getDistance(paris, lyon);

    expect(distance).toBeGreaterThan(0);
  });
});