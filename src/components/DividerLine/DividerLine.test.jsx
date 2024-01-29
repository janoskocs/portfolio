import { render } from "@testing-library/react";
import DividerLine from "./DividerLine";

describe("divider line tests", () => {
  it("should render divider lines", () => {
    const { container } = render(<DividerLine orientation="horizontal" />);
    expect(container.querySelector("hr")).toBeInTheDocument();
  });
});
