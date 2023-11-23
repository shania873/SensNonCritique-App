import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/App.scss";

import { Home, MoviesDetails, Layout } from "./components/index";
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Layout>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/movies-details/:id" exact>
              <MoviesDetails />
            </Route>
          </Layout>
        </Switch>
      </Router>
    );
  }
}

export default App;
