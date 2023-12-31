import React, { Component, Fragment } from "react";
import { MovieElement } from "..";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { connect } from "react-redux";
import { fetchMovies, fetchOneMovies } from "../../store/actions/movieActions";
class MoviesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // id: this.props.match.params.id,
    };
  }

  componentDidMount() {
    this.props.fetchMovies();
  }

  onClickMovie = (id) => {
    this.props.fetchOneMovies(id);
  };

  render() {
    return (
      <Fragment>
        <h4 className="underline">EN CE MOMENT SUR SENS - NON - CRITIQUE</h4>

        <Row>
          {this.props.movies && this.props.movies.results && (
            <Fragment>
              {this.props.movies.results.map((movie) => {
                return (
                  <Col sm={2} key={movie.id}>
                    <div>
                      <MovieElement
                        key={movie.id}
                        title={movie.original_title}
                        year={movie.release_date}
                        poster={
                          "https://www.themoviedb.org/t/p/w440_and_h660_face/" +
                          movie?.poster_path
                        }
                        id={movie.id}
                        genre={movie.genre}
                        // lengthMovie={this.props.movies.length}
                        // voteAverage={movie.voteAverage.toFixed(1)}
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
  movies: state.moviesReducer.movies,
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
