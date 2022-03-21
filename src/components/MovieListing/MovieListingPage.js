import React from "react";
//get the state value
import { useSelector } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
//css
import "./MovieListingPage.scss";
//slider for our app
import Slider from "react-slick";
//import settings breakpoint
import { settings } from "./Settings";
//spinners watch
import { Audio } from "react-loader-spinner";

function MovieListingPage() {
  let movies = useSelector((state) => state.netflix.movies);
  let series = useSelector((state) => state.netflix.series);
  //loading
  let loader = useSelector((state) => state.netflix);
  console.log(loader.isLoading);

  //setting for slider

  let renderedMovies,
    renderedSeries = "";

  renderedMovies =
    movies.Response === "True" ? (
      movies.Search.map((item) => {
        if (loader.isLoading) {
          return <Audio color="#00BFFF" height={80} width={80} />;
        } else {
          return <MovieCard key={item.imdbID} data={item} />;
        }
      })
    ) : (
      <div className="movies-error">
        <h3>{movies.error}</h3>
      </div>
    );

  renderedSeries =
    series.Response === "True" ? (
      series.Search.map((item) => {
        if (loader.isLoading) {
          return <Audio color="#00BFFF" height={80} width={80} />;
        } else {
          return <MovieCard key={item.imdbID} data={item} />;
        }
      })
    ) : (
      <div className="series-error">
        <h3>{series.error}</h3>
      </div>
    );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          <Slider {...settings}>{renderedMovies}</Slider>
        </div>
      </div>
      <br />
      <div className="series-list">
        <h2>Series</h2>
        <div className="series-container">
          <Slider {...settings}>{renderedSeries}</Slider>
          {/* {renderedSeries} */}
        </div>
      </div>
    </div>
  );
}

export default MovieListingPage;
