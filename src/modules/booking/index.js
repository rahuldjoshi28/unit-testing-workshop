import React from "react";
import { Card, message, Typography } from "antd";
import { bookTicket } from "../../services/movie";
import { MovieBookingForm } from "./MovieBookingForm";
import { withLoader } from "../../components/Loader";

function BookMovieTicket({ startLoader, stopLoader }) {
  const handleSubmit = async (formData) => {
    startLoader(true);

    try {
      const { seatNumber, ticketNumber } = await bookTicket(formData);
      console.log({ seatNumber, ticketNumber });
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
