import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("<Button />", () => {
  test("Renders the <Button /> component with an initial type of 'submit'", () => {
    render(<Button>this should render</Button>);

    const button = screen.getByRole("button", { name: /this should render/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("type", "submit");
  });
  test("<Button /> component has type of 'button' with type passed as a prop", () => {
    render(<Button type="button">this should render</Button>);

    const button = screen.getByRole("button", { name: /this should render/i });

    expect(button).toHaveAttribute("type", "button");
  });
  test("<Button /> component assigned class passed as prop", () => {
    render(<Button className="test-btn">this should render</Button>);

    const button = screen.getByRole("button", { name: /this should render/i });

    expect(button).toHaveClass("test-btn");
  });
  test("<Button /> component assigned id passed as prop", () => {
    render(<Button id="test-btn-id">this should render</Button>);

    const button = screen.getByRole("button", { name: /this should render/i });

    expect(button).toHaveAttribute("id", "test-btn-id");
  });
});
