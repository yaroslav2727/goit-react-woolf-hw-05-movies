import { Link, useLocation } from "react-router-dom";

import css from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <ul className={css.list}>
        {movies.map(({ title, id }) => (
          <li key={id} className={css.item}>
            <Link to={`/movies/${id}`} state={location} className={css.link}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieList;
