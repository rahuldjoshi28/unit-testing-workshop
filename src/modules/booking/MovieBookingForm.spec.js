import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MovieBookingForm from "./MovieBookingForm";
import { MovieSelector } from "./MovieSelector";

jest.mock("./MovieSelector");

MovieSelector.mockImplementation(({ onSelect }) => {
  const handleSelect = (e) => onSelect(e.target.value);
  return (
    <select data-testid={"movie-selector"} onChange={handleSelect}>
      <option value={"movie1"}>::MOVIE_1::</option>
      <option value={"movie2"}>::MOVIE_2::</option>
    </select>
  );
});

describe("Testing MovieBookingForm", () => {
  const onSubmit = jest.fn();
  const setUp = () => render(<MovieBookingForm onSubmit={onSubmit} />);

  it("should render the form with fields", () => {
    setUp();

    // expect(screen.getByLabelText("Select a movie")).toBeInTheDocument()
    expect(screen.getByLabelText("Full Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Select a Date")).toBeInTheDocument();
    expect(screen.getByLabelText("Select a Time")).toBeInTheDocument();
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  it("should show error messages", async () => {
    setUp();

    const submitBtn = screen.getByText("Submit");
    userEvent.click(submitBtn);
    expect(
      await screen.findByText("Please input your name!")
    ).toBeInTheDocument();
    expect(screen.getByText("'date' is required")).toBeInTheDocument();
    expect(screen.getByText("'time' is required")).toBeInTheDocument();
  });

  xit("should call onSubmit", async () => {
    const { container } = setUp();
    const submitBtn = screen.getByText("Submit");

    userEvent.selectOptions(screen.getByTestId("movie-selector"), ["movie1"]);

    userEvent.type(screen.getByLabelText("Full Name"), "Name");
    // userEvent.type(screen.getByLabelText("#last-name"), "Name");
    userEvent.click(submitBtn);
    await waitFor(() => {
      expect(onSubmit).toBeCalled();
    });
  });
});
