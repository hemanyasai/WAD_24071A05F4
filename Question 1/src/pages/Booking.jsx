import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Booking() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: '',
    people: 1,
    date: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    if (!formData.destination) tempErrors.destination = "Destination is required";
    if (!formData.date) tempErrors.date = "Date is required";
    if (formData.people < 1) tempErrors.people = "At least 1 person required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Proceed to payment
      navigate('/payment');
    }
  };

  return (
    <div>
      <div className="page-header">
        <h2>Book Your Trip</h2>
        <p>Fill in your details to secure your reservation</p>
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              value={formData.name} 
              onChange={handleChange} 
              placeholder="John Doe"
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="john@example.com"
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="destination">Destination</label>
            <select 
              name="destination" 
              id="destination" 
              value={formData.destination} 
              onChange={handleChange}
            >
              <option value="">Select a destination...</option>
              <option value="tropical">Tropical Paradise</option>
              <option value="europe">European Grand Tour</option>
              <option value="himalayas">Himalayan Trek</option>
              <option value="safari">African Safari</option>
            </select>
            {errors.destination && <span className="error-message">{errors.destination}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="people">Number of People</label>
            <input 
              type="number" 
              name="people" 
              id="people" 
              min="1" 
              value={formData.people} 
              onChange={handleChange} 
            />
            {errors.people && <span className="error-message">{errors.people}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="date">Travel Date</label>
            <input 
              type="date" 
              name="date" 
              id="date" 
              value={formData.date} 
              onChange={handleChange} 
            />
            {errors.date && <span className="error-message">{errors.date}</span>}
          </div>

          <button type="submit" className="btn-primary">Proceed to Payment</button>
        </form>
      </div>
    </div>
  );
}

export default Booking;
