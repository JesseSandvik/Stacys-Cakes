import userEvent from "@testing-library/user-event";
import { render, screen } from "./test-config/test-library-config";
import App from "./App";

describe("<App />", () => {
  test("Routes the user to home, '/' when the user clicks the app logo in the header", async () => {
    render(<App />);

    const contactLink = screen.getByRole("link", { name: /contact/i });

    userEvent.click(contactLink);

    const contactPageBody = await screen.findByRole("main");

    expect(contactPageBody).toHaveTextContent("contact");

    const appLogo = screen.getByText("Stacy's Cakes New York");

    userEvent.click(appLogo);

    const homePageBody = await screen.findByRole("main");

    expect(homePageBody).toHaveTextContent("home");
  });
  test("Routes the user to contact, '/contact' when the user clicks the 'Contact' navigation element in the header", async () => {
    render(<App />);

    const contactLink = screen.getByRole("link", { name: /contact/i });

    userEvent.click(contactLink);

    const pageBody = await screen.findByRole("main");

    expect(pageBody).toHaveTextContent("contact");
  });
});