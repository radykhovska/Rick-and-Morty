import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders page title", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", { name: /characters/i })
  ).toBeInTheDocument();
});
