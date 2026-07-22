import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { getCountdownValues } from "./useCountdown";

const TIMEZONE = "Asia/Jakarta";
const TARGET_START = "2026-07-26T11:00:00+07:00";
const TARGET_END = "2026-07-26T13:00:00+07:00";

describe("getCountdownValues", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("should show counting status when event is far away", () => {
    // Set current time to July 1, 2026 00:00:00 WIB
    vi.setSystemTime(new Date("2026-07-01T00:00:00+07:00"));

    const result = getCountdownValues(TARGET_START, TARGET_END, TIMEZONE);

    expect(result.status).toBe("counting");
    expect(result.days).toBe(25);
    expect(result.hours).toBe(11);
    expect(result.minutes).toBe(0);
    expect(result.seconds).toBe(0);
  });

  it("should show counting status when less than one minute remains", () => {
    // Set current time to 30 seconds before event starts
    vi.setSystemTime(new Date("2026-07-26T10:59:30+07:00"));

    const result = getCountdownValues(TARGET_START, TARGET_END, TIMEZONE);

    expect(result.status).toBe("counting");
    expect(result.days).toBe(0);
    expect(result.hours).toBe(0);
    expect(result.minutes).toBe(0);
    expect(result.seconds).toBe(30);
  });

  it("should show ongoing status at exact event start time", () => {
    vi.setSystemTime(new Date("2026-07-26T11:00:00+07:00"));

    const result = getCountdownValues(TARGET_START, TARGET_END, TIMEZONE);

    expect(result.status).toBe("ongoing");
    expect(result.days).toBe(0);
    expect(result.hours).toBe(0);
    expect(result.minutes).toBe(0);
    expect(result.seconds).toBe(0);
  });

  it("should show ongoing status during the event", () => {
    vi.setSystemTime(new Date("2026-07-26T12:00:00+07:00"));

    const result = getCountdownValues(TARGET_START, TARGET_END, TIMEZONE);

    expect(result.status).toBe("ongoing");
  });

  it("should show finished status after event ends", () => {
    vi.setSystemTime(new Date("2026-07-26T14:00:00+07:00"));

    const result = getCountdownValues(TARGET_START, TARGET_END, TIMEZONE);

    expect(result.status).toBe("finished");
    expect(result.days).toBe(0);
    expect(result.hours).toBe(0);
    expect(result.minutes).toBe(0);
    expect(result.seconds).toBe(0);
  });
});
