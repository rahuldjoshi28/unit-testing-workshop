import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import MovieBookingForm from "./MovieBookingForm"


describe("Testing MovieBookingForm", () => {
    const onSubmit = jest.fn()
    const setUp = () => render(<MovieBookingForm onSubmit={onSubmit} />)

    it("should render the form with fields", () => {
        setUp()
        // expect(screen.getByLabelText("Select a movie")).toBeInTheDocument()
        expect(screen.getByLabelText("Full Name")).toBeInTheDocument()
        expect(screen.getByLabelText("Select a Date")).toBeInTheDocument()
        expect(screen.getByLabelText("Select a Time")).toBeInTheDocument()
        expect(screen.getByText("Submit")).toBeInTheDocument()
    })

    it("should show error messages", async () => {
        setUp()
        const submitBtn = screen.getByText("Submit")
        userEvent.click(submitBtn)
        await waitFor(() => {
            expect(screen.getAllByText("Please input your name!").length).toBe(2)
            expect(screen.getByText("'date' is required")).toBeInTheDocument()
            expect(screen.getByText("'time' is required")).toBeInTheDocument()
        })
    })

    // it("should call onSubmit", async () => {
    //     const { container } = setUp()
    //     const submitBtn = screen.getByText("Submit")
    //     userEvent.type(container.querySelector("#first-name"), "Name")
    //     userEvent.type(container.querySelector("#last-name"), "Name")
    //     userEvent.click(submitBtn)
    //     await waitFor(() => {
    //         expect(onSubmit).toBeCalled()
    //     })
    // })

})