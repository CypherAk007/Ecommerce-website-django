import React from "react";
import { useState, useEffect } from "react";
import { Link, redirect, useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { getUserDetails } from "../actions/userActions";
import { Redirect } from "react-router-dom";
import FormContainer from "../components/FormContainer";
const ProfileScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const userDetails = useSelector((state) => state.userDetails);
  const { error, loading, user } = userDetails;

  //   Make sure user is logged in
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  useEffect(() => {
    // if user logged in move them back to same page as before
    if (!userInfo) {
      navigate("/login");
    } else {
      // if user info has already been loaded
      if (!user || !user.name) {
        dispatch(getUserDetails("profile"));
      } else {
        // if we have user info
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, userInfo, userInfo, user]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (password != confirmPassword) {
      setMessage("Passwords do not match !!");
    } else {
      console.log("Updating...");
    }
  };
  return (
    <Row>
      <Col md={3}>
        <h2>User Profile</h2>

          <h1>Sign In</h1>
          {message && <Message variant="danger">{message}</Message>}
          {error && <Message variant="danger">{error}</Message>}
          {loading && <Loader></Loader>}
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="name"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="passwordConfirm">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter confirm Password"
                value={confirmPassword}
                onChange={(e) => setconfirmPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button type="submit" variant="primary">
              Update
            </Button>
          </Form>

      </Col>
      <Col md={9}>
        <h2>Orders</h2>
      </Col>
    </Row>
  );
};

export default ProfileScreen;
