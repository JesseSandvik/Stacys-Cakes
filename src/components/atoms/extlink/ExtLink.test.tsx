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
  test("<ExtLink /> component assigned rel passed as prop", () => {
    render(
      <ExtLink href={testHref} rel="test-rel">
        test ext link
      </ExtLink>
    );

    const extLink = screen.getByRole("link", { name: /test ext link/i });

    expect(extLink).toBeInTheDocument();
    expect(extLink).toHaveAttribute("rel", "test-rel");
    expect(extLink).not.toHaveAttribute("rel", "bad-test-rel");
  });
  test("<ExtLink /> component assigned target passed as prop", () => {
    render(
      <ExtLink href={testHref} target="test-target">
        test ext link
      </ExtLink>
    );

    const extLink = screen.getByRole("link", { name: /test ext link/i });

    expect(extLink).toBeInTheDocument();
    expect(extLink).toHaveAttribute("target", "test-target");
    expect(extLink).not.toHaveAttribute("target", "bad-test-target");
  });
  test("<ExtLink /> component assigned title passed as prop", () => {
    render(
      <ExtLink href={testHref} title="test-title">
        test ext link
      </ExtLink>
    );

    const extLink = screen.getByRole("link", { name: /test-title/i });

    expect(extLink).toBeInTheDocument();
    expect(extLink).toHaveAttribute("title", "test-title");
    expect(extLink).toHaveTextContent("test ext link");
    expect(extLink).not.toHaveTextContent("bad text content");
    expect(extLink).not.toHaveAttribute("title", "bad-test-title");
  });
});
