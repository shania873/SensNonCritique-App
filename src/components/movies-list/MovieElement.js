import React, { Component, Fragment } from "react";
import Card from "react-bootstrap/Card";
export default class MoviesList extends Component {
  render() {
    let variant = "Light";
    console.log(this.props);
    return (
      <Fragment>
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={"white"}
          className="mb-4 card-item"
        >
          {/* <Card.Header>{this.props.genre}</Card.Header> */}
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
              <p>Votes: {this.props.voteCount}</p>
            </Card.Title>
          </Card.Body>
        </Card>
      </Fragment>
    );
  }
}
