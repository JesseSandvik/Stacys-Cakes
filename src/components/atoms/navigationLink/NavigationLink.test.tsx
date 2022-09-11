import userEvent from "@testing-library/user-event";
import { render, screen } from "../../../test-config/test-library-config";
import NavigationLink from "./NavigationLink";

describe("<NavigationLink />", () => {
  test("Renders the <NavigationLink /> component", () => {
    render(<NavigationLink path="/">testing link</NavigationLink>);

    const testLink = screen.getByRole("link", { name: /testing link/i });

    expect(testLink).toBeInTheDocument();
  });
  test("<NavigationLink /> component assigned class(className) passed as a prop", () => {
    render(
      <NavigationLink className="test-class" path="/">
        testing link
      </NavigationLink>
    );

    const testLink = screen.getByRole("link", { name: /testing link/i });

    expect(testLink).toHaveClass("test-class");
  });
  test("Class(className) passed as prop persists while link is 'active'", async () => {
    render(
      <NavigationLink className="test-class" path="/test">
        testing link
      </NavigationLink>
    );

    const testLink = await screen.findByRole("link", { name: /testing link/i });

    expect(testLink).not.toHaveClass("active");
    expect(testLink).toHaveClass("test-class");

    userEvent.click(testLink);

    const testLinkAfterClick = await screen.findByRole("link", {
      name: /testing link/i,
    });

    expect(testLinkAfterClick).toHaveClass("active");
    expect(testLinkAfterClick).toHaveClass("test-class");
  });
  test("<NavigationLink /> component assigned id passed as a prop", () => {
    render(
      <NavigationLink id="test-id" path="/">
        testing link
      </NavigationLink>
    );

    const testLink = screen.getByRole("link", { name: /testing link/i });

    expect(testLink).toHaveAttribute("id", "test-id");
  });
  test("<NavigationLink /> component has class(className) 'active' when current route", async () => {
    render(<NavigationLink path="/contact">contact link</NavigationLink>);

    const contactLink = await screen.findByRole("link", {
      name: /contact link/i,
    });

    expect(contactLink).not.toHaveClass("active");

    userEvent.click(contactLink);

    const contactLinkAfterClick = await screen.findByRole("link", {
      name: /contact link/i,
    });

    expect(contactLinkAfterClick).toHaveClass("active");
  });
});
