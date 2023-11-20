import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MoviesList from "./movies-list/MoviesList";
import MoviesDetails from "./movies-details/MoviesDetails";

export default class Home extends Component {
  render() {
    return (
      <>
        <Col sm={12}>
          <MoviesList />
        </Col>
        {/* <Col sm={6}>
          <MoviesDetails />
        </Col> */}
      </>
    );
  }
}
