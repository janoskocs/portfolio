import { render, screen } from "@testing-library/react";
import Clock from ".";

describe("Clock tests", () => {
  beforeAll(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2024-09-15T12:00:00"));
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  it("renders as a semantic element", () => {
    const { getByRole } = render(<Clock />);
    const clockElement = getByRole("time");
    expect(clockElement).toBeInTheDocument();
  });

  it("renders the current time", () => {
    render(<Clock />);
    const currentTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const timeElement = screen.getByText(currentTime);
    expect(timeElement).toBeInTheDocument();
  });
});
