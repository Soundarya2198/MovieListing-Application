import React, { useEffect, useState } from "react";
import _ from "lodash";
import "./MovieList.css";
import Fire from "../../assets/fire.png";
import MovieCard from "./MovieCard";
import FilterGroup from "./FilterGroup";
const MovieList = () => {
  // useEffect(() => {
  //   fetch(
  //     "https://api.themoviedb.org/3/movie/popular?api_key=015872807be719e3fa665be79e611e13"
  //   )
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);
  const [movies, setMovies] = useState([]);
  const [minrating, setMinRating] = useState(0);
  const [filter, setFilter] = useState([]);
  const [sort, setSort] = useState({
    by: "default",
    order: "asc",
  });
  useEffect(() => {
    const data = fetchMovies();
  }, []);
  useEffect(() => {
    if (sort.by != "default") {
      const sortedMovies = _.orderBy(filter, [sort.by], [sort.order]);
      setFilter(sortedMovies);
    }
  }, [sort]);

  const fetchMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=015872807be719e3fa665be79e611e13"
    );
    const data = await res.json();
    setMovies(data.results);
    setFilter(data.results);
  };
  const handleFilter = (rate) => {
    if (rate === minrating) {
      setMinRating(0);
      setFilter(movies);
    } else {
      setMinRating(rate);
      const filteredMovies = movies.filter(
        (movie) => movie.vote_average >= rate
      );
      setFilter(filteredMovies);
    }
  };

  const handleSort = (e) => {
    const { name, value } = e.target;
    setSort((prev) => ({ ...prev, [name]: value }));
  };
  console.log(sort);
  return (
    <section className="movie_list">
      <header className="movie_list_header">
        <h2 className="movie_list_heading">
          Popular
          <img src={Fire} alt="Fire emogi" className="navbar_emoji"></img>
        </h2>
        <div className="movie_list_fs">
          <FilterGroup
            minrating={minrating}
            onRateingClick={handleFilter}
            rate={[8, 7, 6]}
          />
          <select
            name="by"
            id=""
            className="movie_sorting"
            onChange={handleSort}
            value={sort.by}
          >
            <option value="default">Sort By</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>

          <select
            name="order"
            id=""
            className="movie_sorting"
            onChange={handleSort}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </header>
      <div className="movie_cards">
        {filter.map((list) => {
          return <MovieCard key={list.id} movie={list} />;
        })}
      </div>
    </section>
  );
};

export default MovieList;
