import { Row,Col } from "react-bootstrap"
// import products from "../products"
import Product from "../components/Product"
import axios from 'axios'
import { useEffect, useState } from "react"
import {useDispatch,useSelector} from 'react-redux'
import { listProducts } from "../actions/productAction"
const HomeScreen = ()=>{
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(listProducts())
        
    },[])
    const products = [] // Dummy to avoid error
    return(
        <div>
            <h1>Latest Products</h1>
            <Row>
                {products.map(product =>(
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product}></Product>
                    </Col>
                ))}
            </Row>
        </div>
    )
}
export default HomeScreen