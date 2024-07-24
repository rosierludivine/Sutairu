import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

export const CheckoutForm= ()=>{
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit =async(event)=>{
        event.preventDefault();
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });
        if(!error){
            console.log("token ok:", paymentMethod);
            try{
                const {id} = paymentMethod;
                const response = await axios.post("http://localhost:5000/stripe/charge",
                {
                    amount: 1000,
                    id: id,
                });
                if (response.data.success)
                    console.log("payment reussi");
            }
            catch (error){
                console.log("error axios", error);
            }
        }
        else{
            console.log(error.message);
        }
    }

    return(
        <form onSubmit={handleSubmit} style={{ minWidth: 400}}>
            <CardElement
            options={{
                hidePostalCode: true
            }}
            />
            <button style={{backgroundColor: "#0E4A65"}}>Payer</button>
        </form>
    )
}