import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

import Loader from "components/Loader/Loader";
import MovieList from "components/MovieList/MovieList";
import api from "service/tmdbApi";

import css from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const { results } = await api.fetchTrendingMovies();
        setMovies(results);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className={css.section}>
      <h2 className={css.title}>Trending today</h2>
      {movies.length > 0 && <MovieList movies={movies} />}
      {isLoading && <Loader />}
    </section>
  );
};

export default HomePage;
