import React from "react";
import { Button, Modal } from "react-bootstrap";


export class MovieView extends React.Component {

  state = {
    show: false,
    showDirector: false,
    movie: this.props.movies.find((m) => m._id === this.props.movieId),
    // isFavorite : {favoriteMovies.includes(match.params.movieId)
  }
  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true })
  handleCloseDirector = () => this.setState({ showDirector: false });
  handleShowDirector = () => this.setState({ showDirector: true })

  render() {
    console.log(this.props)
    const { movies, goBack } = this.props;
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
        <div style={{ display: 'flex', flexDirection: 'row', padding: '10px' }}>
          <button
            onClick={() => {
              goBack();
            }}
          >
            Back
          </button> <br />
          <Button type="button" variant="primary" onClick={this.handleShowDirector}>
            {movie.Director.Name}
          </Button> <br />
          <Button type="button" variant="primary" onClick={this.handleShow}>
            {movie.Genre.Name}
          </Button>
        </div>

        {/* 
          Show Genre */}
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{movie.Genre.Name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{movie.Genre.Description}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Show Director */}
        <Modal show={this.state.showDirector} onHide={this.handleCloseDirector}>
          <Modal.Header closeButton>
            <Modal.Title>{movie.Director.Name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{movie.Director.Bio} <br /> Born on: {movie.Director.Birth}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCloseDirector}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleCloseDirector}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

      </div>
    );
  }
}
