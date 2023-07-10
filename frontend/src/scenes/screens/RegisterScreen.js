import React, { useState, useEffect } from "react";

/* REACT ROUTER */
import { useNavigate } from "react-router-dom";
import { Link, Navigate } from "react-router-dom";

/* REACT BOOTSTRAP */
import { Row, Col, Button, Form, Container } from "react-bootstrap";

/* REACT - REDUX */
import { useDispatch, useSelector } from "react-redux";

/* ACTION CREATORS */
import { register } from "../../actions/userActions";

function RegisterScreen({ location, history }) {
  const navigate = useNavigate();

  /* STATE */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  /* PULLING A PART OF STATE FROM THE ACTUAL STATE IN THE REDUX STORE */
  const userRegister = useSelector((state) => state.userRegister);

  const { userInfo } = userRegister;

  /* REDIRECTING AN ALREADY LOGGED IN USER, AS WE DON'T WANT THEM TO SEE THE LOGIN PAGE */
  useEffect(() => {
    if (userInfo) {
      navigate("/login");
    }
  }, [history, userInfo]);

  /* HANDLERS */

  const submitHandler = (e) => {
    e.preventDefault();

    /* DISABLE SUBMIT IF PASSWORDS DON'T MATCH */
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      /* FIRING OFF THE ACTION CREATORS USING DISPATCH FOR REGISTER */
      dispatch(register(name, email, password));
    }
  };

  return (
    <Container>
      <h1 style={{ marginTop: "125px" }} className="mb-4 text-center">
        Register
      </h1>
      <Row>
        <Col className="col-3"></Col>
        <Col className="col-6">
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="name"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label className="mt-2">Email Address</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label className="mt-2">Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="passwordConfirm">
              <Form.Label className="mt-2">Confirm Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>

            <Button type="submit" variant="primary" className="mt-3">
              Register
            </Button>
          </Form>
        </Col>
        <Col className="col-3"></Col>
      </Row>
    </Container>
  );
}

export default RegisterScreen;
