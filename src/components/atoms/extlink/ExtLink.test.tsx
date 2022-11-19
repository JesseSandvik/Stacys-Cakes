import { render, screen } from "@testing-library/react";
import ExtLink from "./ExtLink";

describe("<ExtLink />", () => {
  test("Renders the ExtLink component with an initial type of 'a'", () => {
    render(<ExtLink href="http://www.google.com">test ext link</ExtLink>);

    const extLink = screen.getByRole("link", { name: /test ext link/i });

    expect(extLink).toBeInTheDocument();
  });
});
