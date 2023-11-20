import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Col from "react-bootstrap/Col";
import MoviesList from "./movies-list/MoviesList";

export default class Home extends Component {
  render() {
    return (
      <>
        <Col sm={12}>
          <MoviesList />
        </Col>
      </>
    );
  }
}
