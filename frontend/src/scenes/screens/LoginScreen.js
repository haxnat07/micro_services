import React, { useState, useEffect } from "react";

/* REACT ROUTER */
import { useNavigate } from "react-router-dom";
import { Link, Navigate } from "react-router-dom";

/* REACT BOOTSTRAP */
import { Row, Col, Button, Form, Container } from "react-bootstrap";

/* REACT - REDUX */
import { useDispatch, useSelector } from "react-redux";

/* ACTION CREATORS */
import { login } from "../../actions/userActions";

function LoginScreen({ location, history }) {
  const navigate = useNavigate();

  /* STATE */
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const dispatch = useDispatch();

  /* PULLING A PART OF STATE FROM THE ACTUAL STATE IN THE REDUX STORE */
  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;

  /* REDIRECTING AN ALREADY LOGGED IN USER, AS WE DON'T WANT THEM TO SEE THE LOGIN PAGE */
  useEffect(() => {
    if (userInfo && !userInfo.isAdmin) {
      navigate("/");
    }
  }, [history, userInfo]);

  /* HANDLERS */

  const submitHandler = (e) => {
    e.preventDefault();

    /* FIRING OFF THE ACTION CREATORS USING DISPATCH FOR LOGIN */
    dispatch(login(email, password));
  };

  return (
    <Container>
      <h1 style={{ marginTop: "125px" }} className="mb-4 text-center">
        Sign In
      </h1>
      <Row>
        <Col className="col-3"></Col>
        <Col className="col-6">
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="email">
              <Form.Label className="mt-2">Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label className="mt-2">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
            </Form.Group>

            <Button type="submit" variant="primary" className="mt-3">
              Sign In
            </Button>
          </Form>
        </Col>
        <Col className="col-3"></Col>
      </Row>
    </Container>
  );
}

export default LoginScreen;
