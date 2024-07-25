import React, {useState} from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const CheckoutForm= ({ amount })=>{
    const stripe = useStripe();
    const elements = useElements();

    const [isModalVisible, setIsModalVisible] = useState(false);
    const navigate = useNavigate();
    // Function to toggle the modal's visibility
    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const redirectionsPageHome = () => {
      navigate("/");
    };
  
    const closeModal = () => {
      setIsModalVisible(false);
    };

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
                    amount: Math.round(amount * 100),
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
            {isModalVisible && (
              <div>
                <div className="modal-overlay"></div>
                <div className="modal-content">
                  <h2>Votre paiement a bien été accepté</h2>
                  <div className="modal-buttons">
                    <button onClick={redirectionsPageHome} className="modal-btn">
                      Revenir à la page d'acceuil
                    </button>
                  </div>
                </div>
              </div>
            )}
        </form>
    )
}