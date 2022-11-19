import { render, screen } from "@testing-library/react";
import ExtLink from "./ExtLink";

describe("<ExtLink />", () => {
  const testHref = "http://www.google.com";
  test("Renders the ExtLink component", () => {
    render(<ExtLink href={testHref}>test ext link</ExtLink>);

    const extLink = screen.getByRole("link", { name: /test ext link/i });

    expect(extLink).toBeInTheDocument();
  });
  test("<ExtLink /> component to have href passed as prop", () => {
    render(<ExtLink href={testHref}>test ext link</ExtLink>);

    const extLink = screen.getByRole("link", { name: /test ext link/i });

    expect(extLink).toBeInTheDocument();
    expect(extLink).toHaveAttribute("href", testHref);
    expect(extLink).not.toHaveAttribute("href", "http://www.badurl.com");
  });
  test("<ExtLink /> component assigned class(className) passed as prop", () => {
    render(
      <ExtLink className="test-class" href={testHref}>
        test ext link
      </ExtLink>
    );

    const extLink = screen.getByRole("link", { name: /test ext link/i });

    expect(extLink).toBeInTheDocument();
    expect(extLink).toHaveClass("test-class");
    expect(extLink).not.toHaveClass("bad-test-class");
  });
  test("<ExtLink /> component assigned id passed as prop", () => {
    render(
      <ExtLink href={testHref} id="test-id">
        test ext link
      </ExtLink>
    );

    const extLink = screen.getByRole("link", { name: /test ext link/i });

    expect(extLink).toBeInTheDocument();
    expect(extLink).toHaveAttribute("id", "test-id");
    expect(extLink).not.toHaveAttribute("id", "bad-test-id");
  });
});
