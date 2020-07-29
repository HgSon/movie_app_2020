import "./Movie.css";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import React from "react";

function Movie({ id, title, year, summary, poster, genres }) {
  return (
    <div className="movie">
      <Link
        to={{
          pathname: `/movie/${id}`,
          state: { title, year, summary, poster, genres },
        }}
      >
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="genres">
            {genres.map((value, index) => {
              return (
                <li key={index} className="genres__genre">
                  {value}
                </li>
              );
            })}
          </ul>
          <p className="movie__summary">
            {summary.length > 90 ? summary.slice(0, 90) + "..." : summary}
          </p>
        </div>
      </Link>
    </div>
  );
}

Movie.propTypes = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  year: propTypes.number.isRequired,
  summary: propTypes.string.isRequired,
  poster: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Movie;
