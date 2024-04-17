import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useSearchParams } from "react-router-dom";

import Loader from "components/Loader/Loader";
import MovieList from "components/MovieList/MovieList";
import SearchForm from "components/SearchForm/SearchForm";
import api from "service/tmdbApi";

import css from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const { results } = await api.fetchMovieByQuery(query);
        setMovies(results);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query]);

  const handleSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <section className={css.section}>
      <SearchForm onSubmit={handleSubmit} />
      {movies.length > 0 && (
        <h2 className={css.title}>
          <span className={css.text}>Results for:</span> {query}
        </h2>
      )}
      {movies.length > 0 && <MovieList movies={movies} />}
      {isLoading && <Loader />}
      {!movies.length && searchParams.get("query") && !isLoading && <p>Nothing was found</p>}
    </section>
  );
};

export default MoviesPage;
