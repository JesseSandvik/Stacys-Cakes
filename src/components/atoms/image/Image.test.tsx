import { render, screen } from "@testing-library/react";
import Image from "./Image";

describe("<Image />", () => {
  test("Renders the <Image /> component", () => {
    render(
      <Image
        alt="Test Image"
        src="https://commons.wikimedia.org/wiki/File:Test-Logo.svg"
      />
    );

    const testImage = screen.getByRole("img", { name: /test image/i });

    expect(testImage).toBeInTheDocument();
  });
  test("<Image /> component assigned class(className) passed as prop", () => {
    render(
      <Image
        alt="Test Image"
        className="TestImageClass"
        src="https://commons.wikimedia.org/wiki/File:Test-Logo.svg"
      />
    );

    const testImage = screen.getByRole("img", { name: /test image/i });

    expect(testImage).toHaveClass("TestImageClass");
  });
  test("<Image /> component assigned id passed as prop", () => {
    render(
      <Image
        alt="Test Image"
        id="Test-Image-Id"
        src="https://commons.wikimedia.org/wiki/File:Test-Logo.svg"
      />
    );

    const testImage = screen.getByRole("img", { name: /test image/i });

    expect(testImage).toHaveAttribute("id", "Test-Image-Id");
  });
});
