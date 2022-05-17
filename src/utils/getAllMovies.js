import { fakeRequest } from "./index";

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

export const getAllMovies = () => fakeRequest("resolve", MOVIES, 100);
