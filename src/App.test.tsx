import userEvent from "@testing-library/user-event";
import { render, screen } from "./test-config/test-library-config";
import App from "./App";

describe("<App />", () => {
  // test("Routes the user to home, '/' when the user clicks the app logo in the header", async () => {
  //   render(<App />);

  //   const contactLink = screen.getAllByRole("link", { name: /contact/i });

  //   userEvent.click(contactLink[0]);

  //   const contactPageHeading = await screen.findAllByRole("heading", {
  //     name: /contact/i,
  //   });

  //   expect(contactPageHeading[0]).toBeInTheDocument();

  //   const appLogo = screen.getByRole("link", { name: /stacy's cakes/i });

  //   userEvent.click(appLogo);

  //   const homePageHeading = await screen.findByRole("heading", {
  //     name: /experience the magic!/i,
  //   });

  //   expect(homePageHeading).toBeInTheDocument();
  // });
  test("Routes the user to about, '/about' when the user clicks the 'About' navigation element in the header", async () => {
    render(<App />);

    const aboutLink = screen.getByRole("link", { name: /about/i });

    userEvent.click(aboutLink);

    const aboutPageHeading = await screen.findByRole("heading", {
      name: /about/i,
    });

    expect(aboutPageHeading).toBeInTheDocument();
  });
  test("Routes the user to gallery, '/gallery' when the user clicks the 'Gallery' navigation element in the header", async () => {
    render(<App />);

    const galleryLink = screen.getByRole("link", { name: /gallery/i });

    userEvent.click(galleryLink);

    const galleryPageHeading = await screen.findByRole("heading", {
      name: /gallery/i,
    });

    expect(galleryPageHeading).toBeInTheDocument();
  });
  test("Routes the user to menu, '/menu' when the user clicks the 'Menu' navigation element in the header", async () => {
    render(<App />);

    const menuLink = screen.getByRole("link", { name: /menu/i });

    userEvent.click(menuLink);

    const menuPageHeading = await screen.findByRole("heading", {
      name: /menu/i,
    });

    expect(menuPageHeading).toBeInTheDocument();
  });
  // test("Routes the user to contact, '/contact' when the user clicks the 'Contact' navigation element in the header", async () => {
  //   render(<App />);

  //   const contactLink = screen.getByRole("link", { name: /contact/i });

  //   userEvent.click(contactLink);

  //   const contactPageHeading = await screen.findByRole("heading", {
  //     name: /contact/i,
  //   });

  //   expect(contactPageHeading).toBeInTheDocument();
  // });
});
