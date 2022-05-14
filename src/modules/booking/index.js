import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, message, Typography } from "antd";
import { bookTicket } from "../../services/movie";
import { MovieBookingForm } from "./MovieBookingForm";
import { withLoader } from "../../hoc/Loader";

function BookMovieTicket({ startLoader, stopLoader }) {
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    startLoader(true);

    try {
      const { seatNumber, ticketNumber } = await bookTicket(formData);
      navigate(
        `/ticket-summary?seat-number=${seatNumber}&ticket-number=${ticketNumber}`,
        { replace: true }
      );
    } catch (e) {
      message.error("Something went wrong, please try again later!");
    } finally {
      stopLoader();
    }
  };

  return (
    <div className={"booking-form"}>
      <Typography.Title level={2}>Book My Ticket</Typography.Title>

      <Card className={"container"}>
        <MovieBookingForm onSubmit={handleSubmit} />
      </Card>
    </div>
  );
}

export default withLoader(BookMovieTicket);
