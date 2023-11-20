import React, { Component } from "react";
import { Header } from "../index";
import "bootstrap/dist/css/bootstrap.min.css";

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
