import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

const renderWithRouter = (ui: React.ReactElement): void => {
  render(ui, { wrapper: BrowserRouter });
};

export * from "@testing-library/react";

export { renderWithRouter as render };
