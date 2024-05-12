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
import OrderScreen from './screens/OrderScreen';
import UserListScreen from './screens/UserListScreen';
import EditUserScreen from './screens/UserEditScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';

const router = createBrowserRouter([
  {path:'/',element:<RootLayout></RootLayout>,
  // errorElement:<App></App>,
  children:[
    {path:'',element:<HomeScreen/>},
    {path:'login',element:<LoginScreen></LoginScreen>},
    {path:'register',element:<RegisterScreen></RegisterScreen>},
    {path:'profile',element:<ProfileScreen></ProfileScreen>},
    {path:'product/:id',element:<ProductScreen></ProductScreen>},
    {path:'cart/:id?',element:<CartScreen></CartScreen>},
    {path:'shipping',element:<ShippingScreen></ShippingScreen>},
    {path:'placeorder',element:<PlaceOrderScreen></PlaceOrderScreen>},
    {path:'order/:id',element:<OrderScreen></OrderScreen>},
    {path:'payment',element:<PaymentScreen></PaymentScreen>},
    
    {path:'admin/userlist',element:<UserListScreen></UserListScreen>},
    {path:'admin/user/:id/edit',element:<EditUserScreen></EditUserScreen>},
    
    {path:'admin/productlist',element:<ProductListScreen></ProductListScreen>},
    {path:'admin/product/:id/edit',element:<ProductEditScreen></ProductEditScreen>},

    {path:'admin/orderlist',element:<OrderListScreen></OrderListScreen>},
  ]},
])
function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App;
