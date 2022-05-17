import { render, screen } from "@testing-library/react";
import { MovieSelector } from "./MovieSelector";
import userEvent from "@testing-library/user-event";
import { findMatchingMovies } from "../../services/movie";

jest.mock("../../services/movie");

describe("Testing MovieSelector", () => {
  const onSelect = jest.fn();

  const MOVIES = [
    {
      name: "::MOVIE_1::",
      id: "movie1",
    },
    {
      name: "::MOVIE_2::",
      id: "movie2",
    },
  ];

  findMatchingMovies.mockReturnValue(MOVIES);

  const setUp = (props) => render(<MovieSelector onSelect={onSelect} />);

  it("should render", () => {
    setUp();
    expect(screen.getByTestId("movie-select")).toBeInTheDocument();
  });

  it("should select correct option", async () => {
    setUp();

    userEvent.click(screen.getByRole("combobox"));
    userEvent.type(screen.getByRole("combobox"), "::MOVIE");
    userEvent.click(await screen.findByText("::MOVIE_1::"));
    expect(onSelect).toHaveBeenCalledWith("movie1", expect.anything());
  });
});
