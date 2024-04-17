import { useState, useRef, useEffect } from "react";
import { useParams, Link, Outlet, useLocation, NavLink } from "react-router-dom";
import { toast } from "react-hot-toast";
import clsx from "clsx";

import api from "service/tmdbApi";
import posterFallback from "service/posterFallback";
import Loader from "components/Loader/Loader";

import css from "./MovieDetailsPage.module.css";

const linkClass = ({ isActive }) => {
  if (isActive) return clsx(css["details-link"], css.active);
  return css["details-link"];
};

const MovieDetailsPage = () => {
  const [dataMovie, setDataMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

  const { movieId } = useParams();
  const backLinkRef = useRef(location.state || "/movies");

  useEffect(() => {
    if (!movieId) return;

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const data = await api.fetchMovieDetailsByMovieId(movieId);
        setDataMovie(data);
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
      <section className={css.section}>
        <Link to={backLinkRef.current} className={css.buttonLink}>
          Go back
        </Link>
        {isLoading && <Loader />}
        {dataMovie && (
          <>
            <img
              src={
                dataMovie.backdrop_path
                  ? `https://image.tmdb.org/t/p/w500${dataMovie.backdrop_path}`
                  : posterFallback
              }
              alt={dataMovie.title}
              width="500"
            />
            <h2 className={css.title}>{dataMovie.title}</h2>
            <p className={css.genre}>
              Genres: {dataMovie.genres.map(({ name }) => name).join(", ")}
            </p>{" "}
            <p className={css.addinfo}>Additional information</p>
            <ul className={css.list}>
              <li className={css.item}>
                <NavLink to="cast" className={linkClass}>
                  Cast
                </NavLink>
              </li>
              <li className={css.item}>
                <NavLink to="reviews" className={linkClass}>
                  Reviews
                </NavLink>
              </li>
            </ul>
            <Outlet />
          </>
        )}
        {!isLoading && !dataMovie && (
          <p className={css.notfound}>Sorry, this movie does not exist in our database...</p>
        )}
      </section>
    </>
  );
};

export default MovieDetailsPage;
