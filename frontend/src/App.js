import logo from './logo.svg';
// import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import {BrowserRouter as Router, Route,Routes, createBrowserRouter, RouterProvider} from 'react-router-dom'
import ProductScreen from './screens/ProductScreen';
import axios from 'axios' 
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import ShippingScreen from './screens/ShippingScreen';
import { Children } from 'react';
import RootLayout from './RootLayout';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';

const router = createBrowserRouter([
  {path:'/',element:<RootLayout></RootLayout>,
  // errorElement:<App></App>,
  children:[
    {index:true,element:<HomeScreen/>},
    {path:'login',element:<LoginScreen></LoginScreen>},
    {path:'register',element:<RegisterScreen></RegisterScreen>},
    {path:'profile',element:<ProfileScreen></ProfileScreen>},
    {path:'product/:id',element:<ProductScreen></ProductScreen>},
    {path:'cart/:id?',element:<CartScreen></CartScreen>},
    {path:'shipping',element:<ShippingScreen></ShippingScreen>},
    {path:'placeorder',element:<PlaceOrderScreen></PlaceOrderScreen>},
    {path:'payment',element:<PaymentScreen></PaymentScreen>},


  ]},
])
function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App;
