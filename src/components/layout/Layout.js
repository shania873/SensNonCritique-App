import React, { Component } from "react";
import { Header } from "../index";

import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <Container className="mt-4">{children}</Container>
    </div>
  );
}
