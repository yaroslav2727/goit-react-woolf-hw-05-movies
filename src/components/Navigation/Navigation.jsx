import { NavLink } from "react-router-dom";

import clsx from "clsx";

import css from "./Navigation.module.css";

const linkClass = ({ isActive }) => {
  if (isActive) return clsx(css.link, css.active);
  return css.link;
};

const Navigation = () => {
  return (
    <nav>
      <ul className={css.navigation}>
        <li>
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" className={linkClass}>
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
