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
});
