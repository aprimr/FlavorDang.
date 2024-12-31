import React, { useState } from 'react';

function Test() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid, setIsValid] = useState(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setPhoneNumber(value);
  };

  const validatePhoneNumber = (phoneNumber) => {
    // Regex pattern for Nepali phone numbers
    const phoneRegex = /^(98[0-9]{8}|97[0-9]{8}|96[0-9]{8}|95[0-9]{8}|94[0-9]{8}|93[0-9]{8}|92[0-9]{8}|91[0-9]{8}|90[0-9]{8}|89[0-9]{8})$/;
    return phoneRegex.test(phoneNumber);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validatePhoneNumber(phoneNumber)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <div>
      <h1>Nepali Phone Number Checker</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={phoneNumber}
          onChange={handleInputChange}
          placeholder="Enter Nepali phone number"
        />
        <button type="submit">Check</button>
      </form>

      {isValid === true && <p style={{ color: 'green' }}>Valid Nepali phone number!</p>}
      {isValid === false && <p style={{ color: 'red' }}>Invalid Nepali phone number.</p>}
    </div>
  );
}

export default Test;


