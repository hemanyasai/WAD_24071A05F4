import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Payment() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = (e) => {
    e.preventDefault();
    if (formData.cardName && formData.cardNumber && formData.expiry && formData.cvv) {
      alert('Payment Successful! Your trip is booked.');
      navigate('/');
    } else {
      alert('Please fill in all payment details.');
    }
  };

  return (
    <div>
      <div className="page-header">
        <h2>Payment Details</h2>
        <p>Complete your booking securely</p>
      </div>

      <div className="form-container">
        <form onSubmit={handlePayment}>
          <div className="form-group">
            <label htmlFor="cardName">Cardholder Name</label>
            <input 
              type="text" 
              name="cardName" 
              id="cardName" 
              value={formData.cardName} 
              onChange={handleChange} 
              placeholder="Name on card"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="cardNumber">Card Number</label>
            <input 
              type="text" 
              name="cardNumber" 
              id="cardNumber" 
              value={formData.cardNumber} 
              onChange={handleChange} 
              placeholder="XXXX XXXX XXXX XXXX"
              maxLength="16"
              required
            />
          </div>

          <div className="payment-grid">
            <div className="form-group">
              <label htmlFor="expiry">Expiry Date</label>
              <input 
                type="text" 
                name="expiry" 
                id="expiry" 
                value={formData.expiry} 
                onChange={handleChange} 
                placeholder="MM/YY"
                maxLength="5"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="cvv">CVV</label>
              <input 
                type="password" 
                name="cvv" 
                id="cvv" 
                value={formData.cvv} 
                onChange={handleChange} 
                placeholder="123"
                maxLength="4"
                required
              />
            </div>
          </div>

          <button type="submit" className="btn-primary" style={{ backgroundColor: '#2ecc71' }}>
            Pay Securely
          </button>
        </form>
      </div>
    </div>
  );
}

export default Payment;
