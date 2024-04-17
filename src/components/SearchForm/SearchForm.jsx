// import { useSearchParams } from "react-router-dom";
import { useState } from "react";

import css from "./SearchForm.module.css";

const SearchForm = ({ onSubmit }) => {
  // Alternative functionality: make sure input stays the same as in URL
  // const [searchParams] = useSearchParams();
  // const urlQuery = searchParams.get("query") ?? "";

  const [query, setQuery] = useState(""); // For alternative functionality: give urlQuery as default

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const query = e.target.elements.searchQuery.value.trim();
    if (!query) return;

    setQuery(""); // For alternative functionality: remove line
    onSubmit(query);
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
          <p className="visually-hidden">Movie Search</p>
          <input
            className={css.input}
            name="searchQuery"
            value={query}
            onChange={handleChange}
            autoFocus
          />
        </label>
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
    </>
  );
};

export default SearchForm;
