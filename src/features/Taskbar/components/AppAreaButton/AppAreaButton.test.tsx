import { render, screen } from "@testing-library/react";
import AppAreaButton from ".";

describe("AppAreaButton tests", () => {
  const AppAreaButtonProps = {
    title: "title",
    icon: "icon.png",
    iconAlt: "iconAlt",
  };

  it("should render AppAreaButton with a button and an img", () => {
    render(<AppAreaButton {...AppAreaButtonProps} />);

    const buttonElement = screen.getByRole("button");
    const imgElement = screen.getByAltText(AppAreaButtonProps.iconAlt);

    expect(buttonElement).toBeInTheDocument();
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", `/images/icons/${AppAreaButtonProps.icon}`);
  });
});
