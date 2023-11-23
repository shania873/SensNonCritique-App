import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { connect } from "react-redux";
import { fetchMovies, fetchOneMovies } from "../../store/actions/movieActions";
class MoviesDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
    };
  }

  componentDidMount() {
    this.props.fetchOneMovies(this.state.id);
    console.log(this.props.selectedMovie);
  }

  render() {
    return (
      <Fragment>
        <Container>
          {/* <h3>Détails</h3> */}
          <Row>
            <Col sm={2}>
              <img
                src={this.props.selectedMovie.posterUrl}
                className="img-fluid"
                alt={this.props.selectedMovie.posterUrl}
              />
            </Col>

            <Col sm={10}>
              <h2>{this.props.selectedMovie.title}</h2>
              <p>
                {new Date(this.props.selectedMovie.releaseDate).getFullYear()}
              </p>
              <p className="voteAverage">
                {this.props.selectedMovie?.voteAverage?.toFixed(1)}
              </p>
              <p>
                <span className="bold">Genre:</span>{" "}
                {this.props.selectedMovie.genre}
              </p>
              <p>{this.props.selectedMovie.overview}</p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  selectedMovie: state.default.selectedMovie,
  isLoading: state.default.isLoading,
  error: state.default.error,
});

export default connect(mapStateToProps, { fetchMovies, fetchOneMovies })(
  withRouter(MoviesDetails)
);
