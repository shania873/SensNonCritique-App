import React, { Component, Fragment } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { connect } from "react-redux";

class MoviesDetails extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <h3>Détails</h3>
          <Row sm={12}>
            <Col>
              <img
                src={this.props.selectedMovie.posterUrl}
                className="img-fluid"
                alt={this.props.selectedMovie.posterUrl}
              />
            </Col>

            <Col>
              <h4>{this.props.selectedMovie.title}</h4>
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

export default connect(mapStateToProps)(MoviesDetails);
