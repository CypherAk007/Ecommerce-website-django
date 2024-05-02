import { useState, useEffect } from "react";
import { Link, redirect, useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { login } from "../actions/userActions";
import { Redirect } from "react-router-dom";
import React from "react";
import FormContainer from "../components/FormContainer";

const LoginScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const redirect = queryParams.get("redirect")
    ? queryParams.get("redirect")
    : "/";
  console.log(redirect);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
    const userLogin = useSelector(state=> state.userLogin)
    const {error,loading,userInfo} = userLogin

    const dispatch = useDispatch()

    useEffect(()=>{
      // if user logged in move them back to same page as before 
        if (userInfo){
            navigate(redirect)

        }
    },[navigate,userInfo,redirect])

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email,password))
    console.log("Submitted");

  };

  const registerNavHandler = () => {
    console.log('Nav Handler Register');
    if (redirect){
    navigate(`/register?redirect=${redirect}`);

    }else{
        navigate(`/register`)
    }
  };



  return (
    <FormContainer>
      <h1>Sign In</h1>
      {error && <Message variant='danger'>{error}</Message>}
      {loading&&<Loader></Loader>}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <Button type="submit" variant="primary">
          Sign In
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          {/* New Customer? <Button onClick={registerNavHandler}>Register</Button> */}
          New Customer? <Link to={redirect?`/register?redirect=${redirect}`:'/register'} >Register</Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginScreen;
