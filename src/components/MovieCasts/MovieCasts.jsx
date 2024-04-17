import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

import api from "service/tmdbApi";
import posterFallback from "service/posterFallback";
import Loader from "components/Loader/Loader";

import css from "./MovieCasts.module.css";

const MovieCasts = () => {
  const [actors, setActors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const { cast } = await api.fetchCreditsByMovieId(movieId);
        setActors(cast);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}

      {actors?.length > 0 && (
        <ul className={css.list}>
          {actors.map(({ name, profile_path, id }) => (
            <li key={id}>
              <img
                className={css.image}
                src={
                  profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : posterFallback
                }
                alt={name}
                width="200"
              />
              <p className={css.text}>{name}</p>
            </li>
          ))}
        </ul>
      )}
      {!isLoading && !actors.length && (
        <p>No cast for this movie can be found in our database...</p>
      )}
    </>
  );
};

export default MovieCasts;
