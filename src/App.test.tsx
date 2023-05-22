import { act, render, screen } from "@testing-library/react";
import App from "./App";
import routes from "./routes";

describe("App", () => {
  test("renders Navbar component", () => {
    render(<App />);

    const navbarElement = screen.getByTestId("navbar");
    expect(navbarElement).toBeInTheDocument();
  });

  test("renders Footer component", () => {
    render(<App />);

    const footerElement = screen.getByTestId("footer");
    expect(footerElement).toBeInTheDocument();
  });

  test("renders component correctly on route change", async () => {
    render(<App />);

    routes.forEach(async (route) => {
      // It is updating the state, so we need to wrap it in an act() call
      act(() => {
        // get the route link and click it
        screen.getByRole("link", { name: route.title }).click();
      });

      // Wait for the route to change and the new component to render
      await screen.findByTestId(route.key);
    });
  });
});
