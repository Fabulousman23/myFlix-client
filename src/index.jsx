import React from "react";
import ReactDOM from "react-dom";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import moviesApp from "./reducers/reducers";
import { devToolsEnhancer } from 'redux-devtools-extension';

import MainView from "./componenets/main-view/main-view";
// Import statement to indicate that you need to bundle `./index.scss`
import "./index.scss";
import Container from "react-bootstrap/Container";

const store = createStore(moviesApp, devToolsEnhancer());
// Main component (will eventually use all the others)
class MyFlixApplication extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <MainView />
        </Container>
      </Provider>
    );
  }
}

// Finds the root of your app
const container = document.getElementsByClassName("app-container")[0];
ReactDOM.render(React.createElement(MyFlixApplication), container);

// Tells React to render your app in the root DOM element
