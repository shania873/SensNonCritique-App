import React, { Component } from "react";
import { Header } from "../index";
import { MoviesList, MoviesDetails } from "../index";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Home from "../home";

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container className="mt-4">
          <Home />
        </Container>
      </div>
    );
  }
}
