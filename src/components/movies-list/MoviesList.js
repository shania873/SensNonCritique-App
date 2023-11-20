import React, { Component, Fragment } from "react";
import { MovieElement } from "..";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { connect } from "react-redux";
import { fetchMovies, fetchOneMovies } from "../../store/actions/movieActions";
class MoviesList extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }

  onClickMovie = (id) => (e) => {
    this.props.fetchOneMovies(id);
  };

  render() {
    return (
      <Fragment>
        {console.log(this.props.movies)}
        <h4 className="underline">EN CE MOMENT SUR SENS - NON - CRITIQUE</h4>

        <Row>
          {this.props.movies && this.props.movies.length > 0 && (
            <Fragment>
              {this.props.movies.map((movie) => {
                return (
                  <Col sm={2} key={movie.id}>
                    <div onClick={this.onClickMovie(movie.id)}>
                      <MovieElement
                        key={movie.id}
                        title={movie.title}
                        year={movie.popularity}
                        poster={movie.posterUrl ? movie.posterUrl : null}
                        id={movie.id}
                        genre={movie.genre}
                        lengthMovie={this.props.movies.length}
                        voteCount={movie.voteCount}
                      />
                    </div>
                  </Col>
                );
              })}
            </Fragment>
          )}
        </Row>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  selectedMovie:
    state.default !== undefined && state.default.selectedMovie
      ? state.default.selectedMovie
      : null,
  movies:
    state.default !== undefined && state.default.movies
      ? state.default.movies
      : null,
  isLoading:
    state.default !== undefined && state.default.isLoading
      ? state.default.isLoading
      : null,
  error:
    state.default !== undefined && state.default.error
      ? state.default.error
      : null,
});

export default connect(mapStateToProps, { fetchMovies, fetchOneMovies })(
  MoviesList
);
