'use client'
import { Button } from '@chakra-ui/react';
import React from 'react';
import Cookies from 'js-cookie';

const Ele = () => {
  const submitForm = async () => {
    try {
      const token = Cookies.get('token');
      const formdata = new FormData();
      const jsonData = {
        email: 'polat123@mail.ru',
        contactNumber: '0553000202',
      };
      formdata.append('rest', JSON.stringify(jsonData));

      const response = await fetch('https://neo-814m.onrender.com/v1/user/27', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'token': `${token}`, // Use lowercase 'token'
        },
        body: formdata,
      });

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
