import { TicketSummary } from "./TicketSummary";
import { render } from "@testing-library/react";
import { AuthContext } from "../login/AuthContext";

describe("TicketSummary", () => {
  it("should render correctly", () => {
    const params = {
      "seat-number": "::SEAT_NUMBER::",
      "ticket-number": "::TICKET_NUMBER::",
    };
    const { container } = render(
      <AuthContext.Provider value={{ userName: "::USER_NAME::" }}>
        <TicketSummary params={params} />
      </AuthContext.Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
