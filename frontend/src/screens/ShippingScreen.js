import React from 'react'
import { useEffect,useState } from 'react'
import { Form,Button } from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import FormContainer from '../components/FormContainer'

const ShippingScreen = () => {
  const [address,setAddress] = useState('')
  const [city,setCity] = useState('')
  const [postalCode,setPostalCode] = useState('')
  const [country,setCountry] = useState('')

  const submitHandler = ()=>{
    console.log('subbmitted');
    console.log(address,city,postalCode,country);
  }


  return (
    <FormContainer controlId='address'>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='address'>
          <Form.Label>Address</Form.Label>
          <Form.Control 
          required
          type='text'
          placeholder='Enter Address'
          value={address? address:''}
          onChange={(e)=>setAddress(e.target.value)}>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId='city'>
          <Form.Label>City</Form.Label>
          <Form.Control 
          required
          type='text'
          placeholder='Enter City'
          value={city? city:''}
          onChange={(e)=>setCity(e.target.value)}>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId='postalCode'>
          <Form.Label>PostalCode</Form.Label>
          <Form.Control 
          required
          type='text'
          placeholder='Enter PostalCode'
          value={postalCode? postalCode:''}
          onChange={(e)=>setPostalCode(e.target.value)}>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId='country'>
          <Form.Label>Country</Form.Label>
          <Form.Control 
          required
          type='text'
          placeholder='Enter Country'
          value={country? country:''}
          onChange={(e)=>setCountry(e.target.value)}>
          </Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary'>
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}

export default ShippingScreen
