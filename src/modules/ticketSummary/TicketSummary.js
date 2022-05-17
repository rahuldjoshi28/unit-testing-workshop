import React from "react";
import { withSearchParams } from "../../hoc/WithSearchParams";
import { Card, Typography } from "antd";
import { AuthContext } from "../login/AuthContext";

class TicketSummary extends React.Component {
  static contextType = AuthContext;

  constructor(props) {
    super(props);
  }

  render() {
    const { "seat-number": seatNumber, "ticket-number": ticketNumber } =
      this.props.params;

    const { userName } = this.context;
    return (
      <div className={"container"}>
        <Card className={"ticket"}>
          <Typography.Title level={4}>
            Congratulations {userName},
          </Typography.Title>
          <Typography.Paragraph>
            Your Seat number is{" "}
            <span data-testid={"seat-number"} className={"bold italic"}>
              {seatNumber}
            </span>
          </Typography.Paragraph>
          <Typography.Paragraph>
            Your Ticket number is{" "}
            <span data-testid={"ticket-number"} className={"bold italic"}>
              {ticketNumber}
            </span>
          </Typography.Paragraph>
        </Card>
      </div>
    );
  }
}

export { TicketSummary };
export default withSearchParams(TicketSummary);
