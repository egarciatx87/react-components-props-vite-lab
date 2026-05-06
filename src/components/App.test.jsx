import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { expect, test } from "vitest"; // Since you are using Vite, we use Vitest!

test("renders the blog name in the header", () => {
  // 1. Arrange: Setup the component with a specific prop
  render(<Header name="My Cool Blog" />);

  // 2. Act: Find the text on the virtual screen
  const headerElement = screen.getByText(/My Cool Blog/i);

  // 3. Assert: Expect the element to be there
  expect(headerElement).toBeInTheDocument();
});