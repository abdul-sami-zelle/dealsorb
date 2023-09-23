import React from 'react';
import './whatsappFloatingbutton.css';



function WhatsAppFloatingButton() {
  const handleButtonClick = () => {
    // Define the action you want to perform when the button is clicked
    // For example, scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <button className="floating-button-what" onClick={handleButtonClick}>
    </button>
  );
}

export default WhatsAppFloatingButton;
