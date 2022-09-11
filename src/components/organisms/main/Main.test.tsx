import { render, screen } from "@testing-library/react";
import Main from "./Main";

describe("<Main />", () => {
  test("<Main /> component assigned class(className) passed as prop", () => {
    render(<Main className="Testing">testing</Main>);

    const main = screen.getByRole("main");

    expect(main).toHaveClass("Testing");
    expect(main).toHaveTextContent("testing");
  });
});
