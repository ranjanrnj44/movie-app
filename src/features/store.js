import { configureStore } from "@reduxjs/toolkit";

//import our slices
import moviesReducer from "./movies/movieSlice";

export const store = configureStore({
  reducer: {
    netflix: moviesReducer,
  },
});
