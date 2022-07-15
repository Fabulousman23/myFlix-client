import React from "react";
import axios from "axios";
import { RegistrationView } from "../registration-view/registration-view";
import { LoginView } from "../login-view/login-view";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { Row } from "react-bootstrap/Row";
import { Col } from "react-bootstrap/Col";
import { Container } from "react-bootstrap/Container";
import { Navbar } from "react-bootstrap";



// import * as images from "./data";

export class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: null,
      registered: null,
      user: null,

    };
  }
  componentDidMount() {
    axios.get("https://my-movie-app1234.herokuapp.com/movies")
      .then(response => {
        console.log(response.data)
        this.setState({
          movies: response.data,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  /*When a movie is clicked, this function is invoked and updates 
  the state of the `selectedMovie` *property to that movie*/

  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie,
    });
  }

  /* When a user successfully logs in, this function updates the `user` property in state to that *particular user*/

  onLoggedIn(user) {
    this.setState({
      user,
    });
  }

  // When a user successfully register, this function updates the user properties

  onRegisterIn(registered) {
    this.setState({
      registered
    });
  }


  render() {
    const { movies, selectedMovie, user, registered } = this.state;
    // If the user is on register, show registration view and register
    if (!registered) { return <RegistrationView onRegisterIn={registered => this.onRegisterIn(registered)} /> }

    /* If there is no user, the LoginView is rendered. If there is a user logged in, the user details are *passed as a prop to the LoginView*/
    if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;

    if (movies.length === 0)
      return <div className="main-view">The list is empty</div>;
    return (
      <Row className="main-view justify-content-md-center">
        {selectedMovie ? (
          <Col md={8}>
            <MovieView
              movie={selectedMovie}
              onBackClick={newSelectedMovie => {
                this.setSelectedMovie(newSelectedMovie);
              }}
            />
          </Col>
        ) : (
          movies.map(movie => (
            <Col md={3}>
              <MovieCard
                key={movie._id}
                movie={movie}
                onMovieClick={movie => {
                  this.setSelectedMovie(movie);
                }}
              />
            </Col>
          ))
        )}
      </Row>
    );
  }
}
