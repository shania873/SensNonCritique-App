import React, { Component, Fragment } from "react";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { connect } from "react-redux";
import { fetchCreditsOneActor } from "../../store/actions/creditsMovieAction";

class CreditsModalDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      show: false,
      variant: "Light",
    };
  }

  handleShow = () => {
    this.setState({ show: true });
    this.props.fetchCreditsOneActor(this.props.id);
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <Fragment>
        <Card
          onClick={this.handleShow}
          bg={this.state.variant.toLowerCase()}
          key={this.state.variant}
          className="mb-4 card-item"
        >
          <Card.Body>{this.props.children}</Card.Body>
        </Card>

        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          backdrop="static"
          keyboard={false}
          size="lg"
        >
          <Modal.Header closeButton />
          <Modal.Body className="modal-body--credits ">
            <Container>
              <Row className="justify-content-md-center">
                <Col sm="6">
                  <img
                    src={this.props.profile_path}
                    className="img-fluid"
                    alt={this.props.profile_path}
                  />
                  <h5>{this.props.name}</h5>
                </Col>
                <Col sm="6" className="col-content-credits">
                  <h4>Filmographie</h4>
                  {this.props.id &&
                    this.props.creditsOneActor?.cast?.map((credit, idx) => {
                      return (
                        <p>
                          {credit.original_title}{" "}
                          <span className="bold">({credit.character})</span>
                        </p>
                      );
                    })}
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </Modal>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  creditsOneActor: state.creditsReducer.selectedCredits,
  isLoading: state.creditsReducer.isLoading,
  error: state.creditsReducer.error,
});
export default connect(mapStateToProps, {
  fetchCreditsOneActor,
})(CreditsModalDetails);
