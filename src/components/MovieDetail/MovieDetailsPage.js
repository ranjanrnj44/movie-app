import React, { useEffect } from "react";
//import our function that handles api, call action creators on dispatch
import {
  fetchAsyncMoviesOrSeries,
  cleanUpSelectedMovieOrSeries,
} from "../../features/movies/movieSlice";
//router params
import { useParams, useHistory } from "react-router-dom";
//dispatch and useSelector
import { useSelector, useDispatch } from "react-redux";
//css
import "./MovieDetailsPage.scss";
//spinners watch
import { Audio } from "react-loader-spinner";

function MovieDetailsPage() {
  let history = useHistory();

  let { imdbID } = useParams();
  console.log(imdbID);

  let dispatch = useDispatch();
  let movieDetail = useSelector((state) => state.netflix.moviesOrSeriesDetail);
  console.log(movieDetail);

  let loader = useSelector((state) => state.netflix.moviesOrSeriesDetail);
  console.log(loader);

  //after initial load
  useEffect(() => {
    dispatch(fetchAsyncMoviesOrSeries(imdbID));
    return () => {
      dispatch(cleanUpSelectedMovieOrSeries());
    };
  }, [imdbID, dispatch]);

  return (
    <div className="movie-section">
      {loader.isLoading ? (
        <Audio color="#00BFFF" height={80} width={80} />
      ) : (
        <>
          <div className="section-left">
            <div className="movie-title">{movieDetail.Title}</div>
            <div className="movie-rating">
              <span>
                IMDB Rating <i className="fa fa-star"></i> :{" "}
                {movieDetail.imdbRating}
              </span>
              <span>
                IMDB Votes <i className="fa fa-thumbs-up"></i> :{" "}
                {movieDetail.imdbVotes}
              </span>
              <span>
                Movie Length <i className="fa fa-film"></i> :{" "}
                {movieDetail.Runtime}
              </span>
              <span>
                Released Year <i className="fa fa-calendar"></i> :{" "}
                {movieDetail.Year}
              </span>
            </div>
            <div className="movie-plot">{movieDetail.Plot}</div>
            <br />
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{movieDetail.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{movieDetail.Actors}</span>
              </div>
              <div>
                <span>Genres</span>
                <span>{movieDetail.Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{movieDetail.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{movieDetail.Awards}</span>
              </div>
            </div>
            <br />
            <button
              className="back-button"
              type="button"
              onClick={() => history.push("/")}
            >
              Back to result page
            </button>
          </div>

          <div className="section-right">
            <img src={movieDetail.Poster} alt={movieDetail.Title} />
          </div>
        </>
      )}
    </div>
  );
}

export default MovieDetailsPage;
