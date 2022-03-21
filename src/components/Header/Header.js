import React, { useState } from "react";
//router for logo clicks
import { Link } from "react-router-dom";
//components and images
import user from "../../images/user.png";
//scss file
import "./Header.scss";
//import the movies and series action creators and pass the user input as parameter, also dispatch the action
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncSeries,
} from "../../features/movies/movieSlice";

function Header() {
  //initial local state for form
  let [term, setTerm] = useState("");
  //dispatch the action
  let dispatch = useDispatch();

  //submitHandler
  let submitHandler = (e) => {
    e.preventDefault();
    if (!term || term.value === null) {
      alert("please give a search of a MOVIE or a SERIES");
    } else {
      console.log(term);
      dispatch(fetchAsyncMovies(term));
      dispatch(fetchAsyncSeries(term));
      setTerm("");
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie</div>
      </Link>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={term}
            placeholder="Search Series or Movie"
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>

      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
}

export default Header;
