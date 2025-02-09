import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { fadeIn } from '../utils/motion';
import { SectionWrapper } from '../hoc'
import { FaCoffee } from "react-icons/fa";
import { TbCurrencyRupeeNepalese } from "react-icons/tb";

import { useState } from 'react'

const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

const Donate = () => {

    const [amount, setAmount] = useState(0)

    async function payNow(e) {
        e.preventDefault();
        const isScriptLoaded = await loadRazorpayScript();
        if (!isScriptLoaded) {
          alert('Failed to load Razorpay SDK. Please check your connection.');
          return;
        }
    
        // Create order by calling the server endpoint
        const response = await fetch('http://ec2-51-20-248-30.eu-north-1.compute.amazonaws.com:3000/create-order', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ amount, currency: 'INR', receipt: 'receipt#1', notes: {} })
        });
  
        const order = await response.json();
        console.log(order);
        // Open Razorpay Checkout
        const options = {
          key: 'rzp_test_CoHPj0bYsqnQ2w', // Replace with your Razorpay key_id
          amount: order.amount,
          currency: order.currency,
          name: '',
          description: 'Test Transaction',
          order_id: order.id, // This is the order_id created in the backend
          callback_url: 'http://ec2-51-20-248-30.eu-north-1.compute.amazonaws.com:3000/payment-success', // Your success URL
          prefill: {
            name: '',
            email: '',
            contact: ''
          },
          theme: {
            color: '#915eff'
          },
          method:{
            upi:true
          },
          handler: function (response) {
            fetch('http://ec2-51-20-248-30.eu-north-1.compute.amazonaws.com:3000/verify-payment', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature
              })
            }).then(res => res.json())
              .then(data => {
                if (data.status === 'ok') {
                  window.location.href = 'http://ec2-51-20-248-30.eu-north-1.compute.amazonaws.com:3000/payment-success';
                } else {
                  alert('Payment verification failed');
                }
              }).catch(error => {
                console.error('Error:', error);
                alert('Error verifying payment');
              });
          }
        };
  
        const rzp = new window.Razorpay(options);
        rzp.open();
      }

    const handleSubmit = (e) => {
      e.preventDefault()
      // Handle donation submission here
      console.log('Donation amount:', amount)
    }
  
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-primary to-tertiary px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-md p-6 sm:p-8 bg-gray-900 rounded-xl shadow-2xl"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 15 }}
              className="flex justify-center mb-6"
            >
              <FaCoffee className="w-12 h-12 sm:w-16 sm:h-16 text-[#915eff]" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mb-2 text-2xl sm:text-3xl font-bold text-center text-gray-100"
            >
              Buy Me a Coffee
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mb-6 text-sm sm:text-base text-center text-gray-400"
            >
              Your support keeps the code brewing!
            </motion.p>
            <form onSubmit={payNow} className="space-y-4 sm:space-y-6">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="relative"
              >
                <TbCurrencyRupeeNepalese className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  type="number"
                  name="amount"
                  id="amount"
                  className="block w-full pl-10 pr-4 py-2 sm:py-3 text-base sm:text-lg text-gray-100 bg-gray-700 border-none rounded-xl focus:ring-2 focus:outline-none focus:ring-purple-100 focus:border-transparent placeholder-gray-400"
                  placeholder="5"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                />
              </motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <button
                  type="submit"
                  className="w-full px-4 py-2 sm:py-3 text-base sm:text-lg font-semibold text-gray-900 transition-colors duration-300 bg-[#a57cfd] rounded-xl hover:bg-[#8045ff] focus:outline-none  focus:ring-offset-gray-800"
                >
                  Brew Some Love
                </button>
              </motion.div>
            </form>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-4 sm:mt-6 text-xs sm:text-sm text-center text-gray-400"
            >
              Every sip counts. Thank you for your generosity!
            </motion.div>
          </motion.div>
        </div>
      )
}

export default SectionWrapper(Donate,"donate")