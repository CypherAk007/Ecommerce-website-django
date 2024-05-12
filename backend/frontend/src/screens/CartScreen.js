import React, { useEffect } from "react";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Message from "../components/Message";
import { addToCart, removeFromCart } from "../actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const CartScreen = () => {
  const { id } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const quantity = queryParams.get("qty");
  console.log('id',id,'qty',quantity);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  // console.log(cartItems,';::');
  const navigate = useNavigate()

  // //   Make sure user is logged in
  // const userLogin = useSelector((state) => state.userLogin);
  // const { userInfo } = userLogin;
  

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, quantity));
    }
  }, [dispatch, id, quantity]);

  const removeFromCartHandler = (id)=>{
    console.log('remove:',id);
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = ()=>{
    // Check for auth and send to shipping page 
  //   const redirectTo ='/shipping'
  //   if (!userInfo) {
  //     navigate("/login?redirect="+redirectTo);
  //   } else {
  //     navigate(redirectTo);
  // }
    // navigate(`/shipping`) // Version degreaded so -> useNavigate
    navigate('/login?redirect=/shipping')
  }
  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message variant="info">
            Your Cart is Empty <Link to="/">Go Back</Link>
          </Message>
        ) : (
          <listGroup variant={`flush`}>
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      fluid
                      rounded
                    ></Image>
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>${item.price}</Col>
                  <Col md={3}>
                    <Form.Control
                      as="select"
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(addToCart(item.product, Number(e.target.value)))
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={1}>
                    <Button
                    type="button"
                    variant="light"
                    onClick={()=>removeFromCartHandler(item.product)}>
                      <i className='fas fa-trash'></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </listGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Subtotal ({cartItems.reduce((acc,item)=> acc+item.qty,0)}) items</h2>
              $ {cartItems.reduce((acc,item)=> acc+item.qty*item.price,0).toFixed(2)}
            
            </ListGroup.Item>
          </ListGroup>
          <ListGroup.Item>
            <Row className="m-3">
              <Button type="button"
              className="btn-block"
              disabled={cartItems.length===0}
              onClick={checkoutHandler}>Proceed to Checkout</Button>

            </Row>
          </ListGroup.Item>
        </Card>
      </Col>
    </Row>
  );
};

export default CartScreen;
