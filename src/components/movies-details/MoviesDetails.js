import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { connect } from "react-redux";
import { fetchMovies, fetchOneMovies } from "../../store/actions/movieActions";
import {
  fetchCreditsMovies,
  fetchCreditsOneActor,
} from "../../store/actions/creditsMovieAction";
import { fetchVideosMovies } from "../../store/actions/videosMovieAction";

import CreditsModalDetails from "../credits-modal-details/CreditsModalDetails";
class MoviesDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
    };
  }

  componentDidMount() {
    this.props.fetchOneMovies(this.state.id);
    this.props.fetchCreditsMovies(this.state.id);
    this.props.fetchVideosMovies(this.state.id);
  }

  fetchOneCreditActor(id) {
    this.props.fetchCreditsOneActor(id);
  }

  render() {
    return (
      <Fragment>
        <Container>
          <div className="background-landscape">
            {this.props?.videos && this.props?.videos?.results && (
              <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/${this.props?.videos?.results[0].key}?si=4KpUxsP-x1O9Yy59`}
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            )}
          </div>

          <Row>
            <Col sm={2}>
              <img
                src={
                  "https://www.themoviedb.org/t/p/w440_and_h660_face/" +
                  this.props.selectedMovie.poster_path
                }
                className="img-fluid"
                alt={
                  "https://www.themoviedb.org/t/p/w440_and_h660_face/" +
                  this.props.selectedMovie.poster_path
                }
              />
            </Col>

            <Col sm={10}>
              <h2>{this.props.selectedMovie.title}</h2>
              <p>
                {new Date(this.props.selectedMovie.release_date).getFullYear()}
              </p>
              <p className="voteAverage">
                {this.props.selectedMovie?.vote_average?.toFixed(1)}
              </p>
              <h3>Synopsis</h3>
              <p>{this.props.selectedMovie.overview}</p>
            </Col>
          </Row>
          <Row className="mt-4">
            {this.props?.credits?.cast?.map((movie, idx) => {
              return (
                <>
                  {idx < 8 && (
                    <Col key={movie.id} sm={3} xs={12}>
                      <CreditsModalDetails
                        id={movie.id}
                        name={movie.name}
                        profile_path={
                          "https://www.themoviedb.org/t/p/w440_and_h660_face/" +
                          movie.profile_path
                        }
                      >
                        <img
                          src={
                            "https://www.themoviedb.org/t/p/w440_and_h660_face/" +
                            movie.profile_path
                          }
                          className=" img-fluid image-actors"
                          alt={
                            "https://www.themoviedb.org/t/p/w440_and_h660_face/" +
                            movie.profile_path
                          }
                        />
                        <p className="m-0">{movie.name}</p>
                        <span className="underline-p m-0">
                          ({movie.character})
                        </span>
                      </CreditsModalDetails>
                    </Col>
                  )}
                </>
              );
            })}
          </Row>
        </Container>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  videos: state.videosReducer.videos,
  credits: state.creditsReducer.credits,
  selectedMovie: state.moviesReducer.selectedMovie,
  isLoading: state.moviesReducer.isLoading,
  error: state.moviesReducer.error,
});
export default connect(mapStateToProps, {
  fetchMovies,
  fetchOneMovies,
  fetchCreditsMovies,
  fetchVideosMovies,
  fetchCreditsOneActor,
})(withRouter(MoviesDetails));
