import { render, screen } from "@testing-library/react";
import Heading from "./Heading";

describe("<Heading />", () => {
  test("Renders the <Heading /> component with an initial level of 6", () => {
    render(<Heading>this is a test</Heading>);

    const heading = screen.getByRole("heading", { name: /this is a test/i });

    expect(heading.nodeName.toLowerCase()).toEqual("h6");
  });
  test("Renders the <Heading /> component with specific level when passed as a prop", () => {
    render(<Heading level={2}>this is a test</Heading>);

    const heading = screen.getByRole("heading", { name: /this is a test/i });

    expect(heading.nodeName.toLowerCase()).toEqual("h2");
  });
  test("<Heading /> component assigned class(className) passed as a prop", () => {
    render(<Heading className="Test-Heading">this is a test</Heading>);

    const heading = screen.getByRole("heading", { name: /this is a test/i });

    expect(heading).toHaveClass("Test-Heading");
  });
  test("<Heading /> component assigned id passed as a prop", () => {
    render(<Heading id="Test-Heading-Id">this is a test</Heading>);

    const heading = screen.getByRole("heading", { name: /this is a test/i });

    expect(heading).toHaveAttribute("id", "Test-Heading-Id");
  });
});
