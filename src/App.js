import Layout from "./components/layout/Layout";
import React, { Component } from "react";

import { Routes, Route } from "react-router-dom";
import "./styles/App.scss";
class App extends Component {
  render() {
    return (
      <Routes>
        <Route exact path="/" element={<Layout />} />
      </Routes>
    );
  }
}

export default App;
