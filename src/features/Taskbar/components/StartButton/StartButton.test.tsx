import { render, screen } from "@testing-library/react";
import StartButton from "./index";

describe("StartButton Component", () => {
  it("should render the StartButton", () => {
    render(<StartButton />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent("Start");
  });
});
