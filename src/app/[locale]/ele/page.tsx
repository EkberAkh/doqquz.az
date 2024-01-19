'use client';
import { Button } from '@chakra-ui/react';
import React from 'react';
import Cookies from 'js-cookie';

const Ele = () => {
  const submitForm = async () => {
    try {
      // Fetch the token from cookies
      const token = Cookies.get('token');

      // Create a FormData object and append your data
      const formData = new FormData();
      const jsonData = { email: "ekber.0303@gmail.com", contactNumber: "994515000001" };
      formData.append('rest', JSON.stringify(jsonData));

      // Make the POST request
      const response = await fetch('https://neo-814m.onrender.com/v1/user/108', {
        method: 'POST',
        headers: {
          // Use the Authorization header for the token
          Token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwOCwiZW1haWwiOiJla2Jlci4wMzAzQGdtYWlsLmNvbSIsImlhdCI6MTcwNTY1MzQwMiwiZXhwIjoxNzA1OTEyNjAyfQ.x5nMU6Qsm0MQUcxk4F1j-8zqeEzjnvfgApyBKTrhfPk`, // Replace with your token variable
        },
        body: formData,
      });

      // Handle the response
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Response data:', data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  return (
    <>
      <Button onClick={submitForm}>Submit</Button>
    </>
  );
};

export default Ele;
