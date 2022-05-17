import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookMovieTicket from ".";
import * as RouterDom from "react-router-dom";
import * as movieServices from "../../services/movie";

jest.mock("./MovieBookingForm", () => (props) => {
  return <button data-testid="form-submit" onClick={props.onSubmit}></button>;
});

xtest("BookMovieTicket should get render and should also use MovieBookingForm as child with handleSubmit", async () => {
  const bookTicket = jest
    .spyOn(movieServices, "bookTicket")
    .mockResolvedValue({ seatNumber: "1", ticketNumber: "2" });

  render(
    <RouterDom.BrowserRouter>
      <BookMovieTicket />
    </RouterDom.BrowserRouter>
  );

  expect(screen.getByText("Book My Ticket")).toBeInTheDocument();
  const submitButon = screen.getByTestId("form-submit");
  expect(submitButon).toBeInTheDocument();
  userEvent.click(submitButon);
  expect(bookTicket).toBeCalled();
  await waitFor(() =>
    expect(window.location.search).toBe("?seat-number=1&ticket-number=2")
  );
});
