import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AppAreaButton from "./";

describe("AppAreaButton", () => {
  const props = {
    title: "Test App",
    icon: "test-icon.png",
    iconAlt: "Test Icon",
  };

  it("renders the button with the correct title", () => {
    render(<AppAreaButton {...props} />);
    expect(screen.getByRole("button")).toHaveTextContent(props.title);
  });

  it("renders the icon with the correct src and alt attributes", () => {
    render(<AppAreaButton {...props} />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", `/images/icons/${props.icon}`);
    expect(img).toHaveAttribute("alt", props.iconAlt);
  });

  it("applies the correct styles to the button and icon", () => {
    render(<AppAreaButton {...props} />);
    const button = screen.getByRole("button");
    const img = screen.getByRole("img");
    expect(button).toHaveClass("app");
    expect(img).toHaveClass("icon");
  });
});
