import Spinner from ".";
import { render, screen } from "@testing-library/react";

describe("Spinner tests", () => {
  it("should render the spinner", () => {
    render(<Spinner />);
    expect(screen.getByTestId("spinner")).toBeInTheDocument();
  });
});
