import React from "react";
import axios from "axios";
import { RegistrationView } from "../registration-view/registration-view";
import { LoginView } from "../login-view/login-view";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { Row, Col, Container, Navbar } from "react-bootstrap";
import Nav1 from "./nav";
import { BrowserRouter as Router, Route } from "react-router-dom";




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
    this.onRegisterIn = this.onRegisterIn.bind(this)
  }
  componentDidMount() {
    let accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem('username'),
      });
      this.getMovies(accessToken);
    }
  }
  getMovies(token) {
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

  onLoggedOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.setState({
      user: null
    });
  }

  // When a user successfully register, this function updates the user properties

  onRegisterIn({ username, password, email, birthday }) {
    axios.post("https://my-movie-app1234.herokuapp.com/users", {
      Username: username,
      Password: password,
      Birthday: birthday,
      Email: email
    })
      .then((response) => {
        const data = response.data;
        alert('REG SUCSESFULL')
        props.onLoggedIn(data);
        window.location.replace("/")
      })
      .catch((e) => {
        console.log(e);
      });

    this.setState({
      registered: true
    });
  }


  render() {
    const { movies, user, registered } = this.state;
    // // If the user is on register, show registration view and register
    // if (!registered) { return <RegistrationView onRegisterIn={registered => this.onRegisterIn(registered)} /> }

    // /* If there is no user, the LoginView is rendered. If there is a user logged in, the user details are *passed as a prop to the LoginView*/
    // if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;

    // if (movies.length === 0)
    //   return <div className="main-view">The list is empty</div>;
    // else
    return (
      <div>
        <Nav1 user={user} />
        <Router>

          <Container fluid>
            <Route
              exact
              path="/"
              render={() => {
                // If there's no user, the LoginView is rendered.
                if (!localStorage.getItem('token')) {
                  return <LoginView onLoggedIn={this.onLoggedIn} />;
                }
                // If a user is logged the Movies are rendered as MovieCards
                return (
                  <Row className="main-view-width mx-auto justify-content-center mt-3">
                    {movies.map((movies) => (
                      <MovieCard key={movies._id} movie={movies}>
                        {movies.title}
                      </MovieCard>
                    ))}
                  </Row>
                );
              }}
            />

            <Route
              path="/register"
              render={() => <RegistrationView onRegisterIn={this.onRegisterIn} />}
            />

            <Route
              path="/movies/:movieId"
              render={({ match, history }) => (
                <MovieView
                  // movie={movies.find((m) => m._id === match.params.movieId)}
                  // isFavorite={favoriteMovies.includes(match.params.movieId)}
                  // goBack={history.goBack}
                  // handleFavorite={this.handleFavorite}
                  movies={this.state.movies}
                  movieId={match.params.movieId}
                  goBack={history.goBack}
                />
              )}
            />

            <Route
              path="/directors/:directorName"
              render={({ match, history }) => (
                <DirectorView
                  director={
                    movies.find(
                      (m) => m.director.name === match.params.directorName
                    ).director
                  }
                  directorMovies={movies.filter(
                    (m) => m.director.name === match.params.directorName
                  )}
                  goBack={history.goBack}
                />
              )}
            />

            <Route
              path="/genres/:genreName"
              render={({ match, history }) => (
                <GenreView
                  genreMovies={movies.filter(
                    (movie) => movie.genre.name === match.params.genreName
                  )}
                  genre={
                    movies.find(
                      (movie) => movie.genre.name === match.params.genreName
                    ).genre
                  }
                  goBack={history.goBack}
                />
              )}
            />

            <Route
              path={`/users/${user}`}
              render={({ history }) => {
                if (!user) return <Redirect to="/" />;
                return (
                  <ProfileView
                    movies={movies}
                    goBack={history.goBack}
                    favoriteMovies={favoriteMovies || []}
                    handleFavorite={this.handleFavorite}
                  />
                );
              }}
            />
          </Container>
        </Router>
      </div>
    );
  }
}