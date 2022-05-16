import { waitFor } from "@testing-library/react"
import { findMatchingMovies } from "./movie"


test("findMatchingMovies shpuld get called and return movies", async () => {
    const response = await findMatchingMovies("K.G.F")
    await waitFor(() => {
        expect(response).toStrictEqual([
            {
                name: "K.G.F. Chapter 2",
                id: "kgf_2",
            }
        ])
    })
})