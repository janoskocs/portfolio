import { fireEvent, render, screen } from "@testing-library/react";
import StartButton from ".";

describe("StartButton Component", () => {
  it("should render the StartButton", () => {
    const mockClick = vi.fn();

    render(<StartButton onClick={mockClick} />);
    const buttonElement = screen.getByRole("button");
    const icon = screen.getByRole("img");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent("Start");
    expect(icon).toHaveAttribute("src", "/images/logos/logocolour.png");
    fireEvent.click(buttonElement);
    expect(mockClick).toHaveBeenCalledTimes(1);
  });
});
