import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("<Button />", () => {
  test("Renders the <Button /> component with an initial type of 'button'", () => {
    render(
      <Button onClick={() => console.log("click")}>this should render</Button>
    );

    const button = screen.getByRole("button", { name: /this should render/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("type", "button");
  });
  test("<Button /> component has type of 'submit' with type passed as a prop", () => {
    render(
      <Button onClick={() => console.log("click")} type="submit">
        this should render
      </Button>
    );

    const button = screen.getByRole("button", { name: /this should render/i });

    expect(button).toHaveAttribute("type", "submit");
  });
  test("<Button /> component is type 'button' when passed invalid type", () => {
    render(
      <Button onClick={() => console.log("click")} type="false">
        this should render
      </Button>
    );

    const button = screen.getByRole("button", { name: /this should render/i });

    expect(button).toHaveAttribute("type", "button");
  });
  test("<Button /> component assigned class passed as prop", () => {
    render(
      <Button onClick={() => console.log("click")} className="test-btn">
        this should render
      </Button>
    );

    const button = screen.getByRole("button", { name: /this should render/i });

    expect(button).toHaveClass("test-btn");
  });
  test("<Button /> component assigned id passed as prop", () => {
    render(
      <Button onClick={() => console.log("click")} id="test-btn-id">
        this should render
      </Button>
    );

    const button = screen.getByRole("button", { name: /this should render/i });

    expect(button).toHaveAttribute("id", "test-btn-id");
  });
  test("<Button /> component disabled when passed 'disabled' as prop", () => {
    render(
      <Button onClick={() => console.log("click")} disabled>
        this should render
      </Button>
    );

    const button = screen.getByRole("button", { name: /this should render/i });

    expect(button).toBeDisabled();
  });
});
