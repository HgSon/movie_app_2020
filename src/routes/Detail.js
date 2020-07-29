import "./Detail.css";
import React from "react";
import { Link } from "react-router-dom";
import Recommend from "../components/Recommend";

class Detail extends React.Component {
  // componentDidMount() {
  //   const {
  //     history,
  //     location: { state },
  //   } = this.props;
  //   if (state === undefined) {
  //     history.push("/");
  //   }
  // }
  render() {
    const {
      location: { state },
    } = this.props;
    if (state) {
      const {
        location: {
          state: { title, year, summary, poster, genres },
        },
      } = this.props;
      return (
        <div className="movie-wrap">
          <div className="movie-detail">
            <img src={poster} alt={title} title={title} />
            <div className="movie-detail__data">
              <h3 className="movie-detail__title">{title}</h3>
              <h5 className="movie-detail__year">{year}</h5>
              <ul className="genres-detail">
                {genres.map((value, index) => {
                  return (
                    <li key={index} className="genres-detail__genre">
                      {value}
                    </li>
                  );
                })}
              </ul>
              <p className="movie-detail__summary">{summary}</p>
            </div>
          </div>
          <Link to="/">
            <div className="home-btn">
              <span>Home</span>
            </div>
          </Link>
          <Recommend />
        </div>
      );
    } else {
      return (
        <div>
          title
          <Recommend cat="ere" />
        </div>
      );
    }
  }
}

export default Detail;

// rating: fontawesome에서 별.. 클릭하면 색바뀌고 옆에 숫자뜨게 (0/5)? 아니면 input넣어서 (0.0/5.0)
