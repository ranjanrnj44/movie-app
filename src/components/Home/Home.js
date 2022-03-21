import React, { useEffect } from "react";
//components
import MovieListingPage from "../MovieListing/MovieListingPage";

//dispatch action to our addMovieSlice
import { useSelector, useDispatch } from "react-redux";
//import our function that handles api, call action creators on dispatch
import {
  fetchAsyncMovies,
  fetchAsyncSeries,
} from "../../features/movies/movieSlice";

function Home() {
  console.log(useSelector((state) => state));
  //dispatch
  let dispatch = useDispatch();
  //api call for our home page
  let movieText = "pirates";
  let seriesText = "iron";
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncSeries(seriesText));
  }, [dispatch, movieText, seriesText]);

  return (
    <>
      <div className="banner-img"></div>
      <MovieListingPage />
    </>
  );
}

export default Home;
