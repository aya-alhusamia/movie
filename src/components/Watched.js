import { useState } from "react";
import MovieItem from "./MovieItem";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";

const Watched = (props) => {
  const moviesD = useSelector((state) => state.movies);
  const [query, setQuery] = useState("");
  let movies = moviesD
    .filter(
      (movie) =>
        movie.watched == props.watched &&
        movie.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((movie) => (
      <MovieItem movie={movie} text={props.watched ? "Unwatch" : "Watched"} />
    ));

  return (
    <div>
      <label>
        {props.watched ? "Watched" : "Watchlist"} : {movies.length}
      </label>

      <SearchBar setQuery={setQuery} />
      {movies.length > 0 ? movies : "There is no movies hear"}
    </div>
  );
};
export default Watched;
