import React from "react";


export class MovieView extends React.Component {
  state = {
    movie: this.props.movies.find((m) => m._id === match.params.movieId)
  }
  render() {
    console.log(this.props)
    const { movies, onBackClick } = this.props;
    const { movie } = this.state;
    return (
      <div className="movie-view">
        <div className="movie-poster">
          <img src={movie.Imagepath} width="500" height="600" />
        </div>
        <div className="movie-title">
          <span className="label">Title: </span>
          <span className="value">{movie.Title}</span>
        </div>
        <div className="movie-description">
          <span className="label">Description: </span>
          <span className="value">{movie.Description}</span>
        </div>
        <button
          onClick={() => {
            onBackClick(null);
          }}
        >
          Back
        </button>
      </div>
    );
  }
}
