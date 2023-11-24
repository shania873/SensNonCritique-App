import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import Card from "react-bootstrap/Card";
class MoviesList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      variant: "Light",
    };
  }

  onClickMoviesDetails = () => {
    this.props.history.push(
      "/SensNonCritique-App/movies-details/" + this.props.id
    );
  };

  render() {
    return (
      <Fragment>
        <button onClick={this.onClickMoviesDetails}>
          <Card
            bg={this.state.variant.toLowerCase()}
            key={this.state.variant}
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
        </button>
      </Fragment>
    );
  }
}
export default withRouter(MoviesList);
