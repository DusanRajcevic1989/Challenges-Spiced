import { render, screen } from "@testing-library/react";
import Link from "next/link";
import Button from "../Button";
import UserEvent from "@testing-library/user-event";
import Navigation from ".";

jest.mock("next/router", () => ({
  useRouter() {
    return { pathname: jest.fn() };
  },
}));

test("renders with two links 'Play' and 'History'", async () => {
  const user = UserEvent.setup();

  render(<Navigation />);

  const playLink = screen.getByRole("link", { name: "Play" });
  expect(playLink).toBeInTheDocument();
  const historyLink = screen.getByRole("link", { name: "History" });
  expect(historyLink).toBeInTheDocument();
});
