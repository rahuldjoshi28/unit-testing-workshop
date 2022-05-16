import { render, screen } from "@testing-library/react"
import { MovieSelector } from "./MovieSelector"
import userEvent from "@testing-library/user-event";

describe("Testing MovieSelector", () => {
    const onSelect = jest.fn()

    const MOVIES = [
        {
            name: "K.G.F. Chapter 2",
            id: "kgf_2",
        },
        {
            name: "Gangubai Kathiawadi",
            id: "gangubai_kathiawadi",
        },
        {
            name: "Radhe Shyam",
            id: "radhe_shyam",
        },
    ];

    jest.mock("../../services/movie", () => ({
        findMatchingMovies: jest.fn(() => Promise.resolve(MOVIES))
    }))


    const setUp = (props) => render(<MovieSelector onSelect={onSelect} />)

    it("should render", () => {
        setUp()
        expect(screen.getByTestId("movie-select")).toBeInTheDocument()
    })

    it("should onselect", async () => {
        setUp()
        userEvent.type(screen.getByRole("combobox"), "Radhe")
        userEvent.click(screen.getByText("K.G.F. Chapter 2"), undefined, { skipPointerEventsCheck: true })
        expect(onSelect).toHaveBeenCalledWith("K.G.F. Chapter 2", {
            label: "K.G.F. Chapter 2",
            value: "kgf_2",
        })
    })
})