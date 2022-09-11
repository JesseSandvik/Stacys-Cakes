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
});
