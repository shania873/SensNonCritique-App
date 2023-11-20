import React, { Component } from "react";
import { Form } from "react-bootstrap";

export default class Login extends Component {
  return() {
    return (
      <div>
        <h3>Connexion</h3>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Connexion
          </Button>
        </Form>
      </div>
    );
  }
}
