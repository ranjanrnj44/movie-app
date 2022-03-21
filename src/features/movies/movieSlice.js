import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//import baseurl, apikey
import movieApi from "../../common/apis/movieApi";
import { APIkey } from "../../common/apis/movieApiKey";
//initialState
let initialState = {
  isLoading: true,
  movies: {},
  series: {},
  moviesOrSeriesDetail: { isLoading: true },
};

//createAsyncThunk actions for movies
export const fetchAsyncMovies = createAsyncThunk(
  "movieSlice/fetchAsyncMovies",
  async (movieText) => {
    // const movieText = "iron"; //this is a hard coded search text
    let response = await movieApi
      .get(`?apikey=${APIkey}&s=${movieText}&type=movie`)
      .catch((err) => console.log(err));
    console.log(response.data);
    return response.data;
  }
);
//createAsyncThunk actions for series
export const fetchAsyncSeries = createAsyncThunk(
  "movieSlice/fetchAsyncSeries",
  async (seriesText) => {
    // const seriesText = "house"; //this is a hard coded search text
    let response = await movieApi
      .get(`?apikey=${APIkey}&s=${seriesText}&type=series`)
      .catch((err) => console.log(err));
    console.log(response.data);
    return response.data;
  }
);
//createAsyncThunk actions for movies or series detailsPage
export const fetchAsyncMoviesOrSeries = createAsyncThunk(
  "movieSlice/fetchAsyncMoviesOrSeries",
  async (id) => {
    let response = await movieApi
      .get(`?apikey=${APIkey}&i=${id}&plot=full`)
      .catch((err) => console.log(err));
    console.log(response.data);
    return response.data;
  }
);

const movieSlice = createSlice({
  name: "movieSlice",
  initialState,
  reducers: {
    // addMovies: (state = initialState, { payload }) => {
    //   state.movies = payload;
    // },
    //clean up action, need empty object, so it'll not show previous data
    cleanUpSelectedMovieOrSeries: (state) => {
      state.moviesOrSeriesDetail = { isLoading: true };
    },
  },
  extraReducers: {
    //movies
    [fetchAsyncMovies.pending]: (state) => {
      console.log("Pending");
      return { ...state, isLoading: true };
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log(payload);
      console.log("Fulfilled");
      return { ...state, movies: payload, isLoading: false };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected");
    },
    //series
    [fetchAsyncSeries.pending]: (state) => {
      console.log("Pending");
      return { ...state, isLoading: true };
    },
    [fetchAsyncSeries.fulfilled]: (state, { payload }) => {
      console.log(payload);
      console.log("Fulfilled");
      return { ...state, series: payload, isLoading: false };
    },
    //movies or series detailsPage
    [fetchAsyncMoviesOrSeries.pending]: (state) => {
      console.log("Pending");
      return { ...state, isLoading: true };
    },
    [fetchAsyncMoviesOrSeries.fulfilled]: (state, { payload }) => {
      console.log(payload);
      console.log("Fulfilled");
      return { ...state, moviesOrSeriesDetail: payload, isLoading: false };
    },
  },
});

// export const { addMovies } = movieSlice.actions;

export const { cleanUpSelectedMovieOrSeries } = movieSlice.actions;
export default movieSlice.reducer;
