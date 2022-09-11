import { render, screen } from "../../../test-config/test-library-config";
import NavigationLink from "./NavigationLink";

describe("<NavigationLink />", () => {
  test("Renders the <NavigationLink /> component", () => {
    render(<NavigationLink path="/">testing link</NavigationLink>);

    const testLink = screen.getByRole("link", { name: /testing link/i });

    expect(testLink).toBeInTheDocument();
  });
});
