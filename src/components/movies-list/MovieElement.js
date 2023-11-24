import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
export default class MoviesList extends Component {
  render() {
    let variant = "Light";
    return (
      <Fragment>
        <Link
          // from="SensNonCritique-App"
          to={"SensNonCritique-App/movies-details/" + this.props.id}
        >
          <Card
            bg={variant.toLowerCase()}
            key={variant}
            className="mb-4 card-item"
          >
            <Card.Body>
              {this.props.poster && (
                <img
                  src={this.props.poster}
                  className="img-fluid"
                  alt="https://as1.ftcdn.net/v2/jpg/03/91/07/02/1000_F_391070247_pMfbcIwPuWrGuogQ0yTuQ1ACxt1rcshH.jpg"
                />
              )}
              <Card.Title>
                <h6>{this.props.title} </h6>
                <p>{this.props.vote_average}</p>
              </Card.Title>
            </Card.Body>
          </Card>
        </Link>
      </Fragment>
    );
  }
}
