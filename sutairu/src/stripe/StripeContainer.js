import React from "react";
import { Elements } from '@stripe/react-stripe-js';
import {CheckoutForm} from './CheckoutForm';
import { loadStripe } from "@stripe/stripe-js";

const PUBLIC_KEY = "pk_test_51Pfjn8DzcSTtPsTSxDMewkLRP6ybX970m6PEuQbNazfvuBTER6ZriVUauwM2An1ILNvyIuTZ2jFIKasT6aELuZky00GlpvaDmQ";
const stripeTestPromise = loadStripe(PUBLIC_KEY)

const Stripe = ()=>{
    return(
        <Elements stripe={stripeTestPromise}>
            <CheckoutForm />
        </Elements>
    );
};
export default Stripe;