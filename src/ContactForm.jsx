import React from 'react';
import './ContactForm.css';


export default function ContactForm() {
  return (
    // Contact Form Component
    <div className="form-container">
      <h2>Contactez-Moi</h2>  
      <form className="form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="textarea">Message</label>
          <textarea name="textarea" id="textarea" rows="10" cols="50" required></textarea>
        </div>
        <button className="form-submit-btn" type="submit">Soumettre</button>
      </form>
    </div>
  );
}   