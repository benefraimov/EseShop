import React, { useState } from 'react'
import { Form, Button, Col, FormLabel, FormGroup, FormCheck } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { savePaymentMethod } from '../actions/cartActions'

const PaymentScreen = ({ history }) => {
    // Asking for an item in our global state (local storage)
    // Redux store from { cart } in initial state object
    const cart = useSelector(state => state.cart)

    // Destructuring an object from our cart 
    // object in the initial state in our redux store
    const { shippingAddress } = cart

    // If there's no shipping address we shouldn't 
    // be on the payment screen..
    if (!shippingAddress) {
        history.push('/shipping')
    }

    const [paymentMethod, setPaymentMethod] = useState('PayPal')

    // Creating the dispatch
    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        history.push('/placeorder')
    }

    return (<FormContainer>
        <CheckoutSteps step1 step2 step3 />
        <h1>Payment Method</h1>
        <Form onSubmit={submitHandler}>
            <FormGroup>
                <FormLabel as='legend'>Select Method</FormLabel>
                <Col>
                    <FormCheck
                        type='radio'
                        label='PayPal or Credit Card'
                        id='PayPal'
                        name='paymentMethod'
                        value='PayPal'
                        checked
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    ></FormCheck>
                    {/* <Form.Check
                        type='radio'
                        label='Stripe'
                        id='Stripe'
                        name='paymentMethod'
                        value='Stripe'
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    ></Form.Check> */}
                </Col>
            </FormGroup>

            <Button
                type='submit'
                variant='primary'
            >Continue</Button>
        </Form>
    </FormContainer >
    )
}

export default PaymentScreen
