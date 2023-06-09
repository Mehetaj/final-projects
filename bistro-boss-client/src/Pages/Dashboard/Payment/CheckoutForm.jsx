import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useAuth from '../../../Hooks/UseAuth';
import './checkoutForm.css'

const CheckoutForm = ({ price, cart }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCartError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [proccesing, setProccesing] = useState(false)
    const [transactionId, setTransactionId] = useState('')

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    // console.log(res.data);
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [price, axiosSecure]);


    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log(error.message);
            setCartError(error.message)
        }
        else {
            console.log(paymentMethod);
            setCartError('')
        }

        setProccesing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }

        setProccesing(false)
        console.log('intent', paymentIntent);

        if (paymentIntent?.status === 'succeeded') {
            setTransactionId(paymentIntent.id)
            // TODO next steps
            const payment =
            {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                quantity: cart.length,
                cartItems: cart.map(item => item._id),
                menuItems: cart.map(item => item.menuItemID),
                status: 'service pending',
                itemNames: cart.map(item => item.name)
            }
            console.log(payment);
            axiosSecure.post('/payments', { payment })
                .then(res => {
                    console.log(res.data);
                    if (res.data) {
                        console.log(res.data);
                    }
                })
        }


    };
    return (
        <div className='w-2/3  m-8 border border-orange-400  p-10'>
            <form className='' onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className='w-[400px] mx-auto my-6'>
                    <button className='btnps ' type="submit" disabled={!stripe || !clientSecret || proccesing}>
                        Pay
                    </button>
                </div>
            </form>
            {
                cardError && <p className='text-red-600'>{cardError}</p>
            }
            {
                transactionId && <p className='text-green-500'>Transaction Complete with with ID : {transactionId}</p>
            }
        </div>
    );
};

export default CheckoutForm;