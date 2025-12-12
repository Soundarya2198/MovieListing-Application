import React, { useEffect, useState } from "react";
import "./MovieList.css";
import Fire from "../../assets/fire.png";
import MovieCard from "./MovieCard";
const MovieList = () => {
  // useEffect(() => {
  //   fetch(
  //     "https://api.themoviedb.org/3/movie/popular?api_key=015872807be719e3fa665be79e611e13"
  //   )
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);
  useEffect(() => {
    const data = fetchMovies();
  }, []);
  const [movies, setMovies] = useState([]);
  const fetchMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=015872807be719e3fa665be79e611e13"
    );
    const data = await res.json();
    setMovies(data.results);
  };
  return (
    <section className="movie_list">
      <header className="movie_list_header">
        <h2 className="movie_list_heading">
          Popular
          <img src={Fire} alt="Fire emogi" className="navbar_emoji"></img>
        </h2>
        <div className="movie_list_fs">
          <ul className="movie_filter">
            <li className="movie_filter_item active">8+ star</li>
            <li className="movie_filter_item"> 7+ star</li>
            <li className="movie_filter_item"> 6+ star</li>
          </ul>

          <select name="" id="" className="movie_sorting">
            <option value="">Sort By</option>
            <option value="">Date</option>
            <option value="">Rating</option>
          </select>

          <select name="" id="" className="movie_sorting">
            <option value="">Ascending</option>
            <option value="">Descending</option>
          </select>
        </div>
      </header>
      <div className="movie_cards">
        {movies.map((list) => {
          return <MovieCard key={list.id} movie={list} />;
        })}
      </div>
    </section>
  );
};

export default MovieList;
