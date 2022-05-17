import {getAllMovies} from "../utils/getAllMovies";

export async function findMatchingMovies(searchKeyword) {
  const allMovies = await getAllMovies();
  return allMovies.filter(({ name }) =>
    name.toLowerCase().includes(searchKeyword.toLowerCase())
  );
}

