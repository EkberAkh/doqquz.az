
'use client'
import React from 'react'
import { Box, Text, Flex, FormControl, InputGroup, InputLeftElement, Input, FormHelperText, Link, Button, Icon, FormErrorMessage } from '@chakra-ui/react'
import { useTranslations } from "next-intl";

import { FaArrowRight } from "react-icons/fa";
import { LockIcon } from '@chakra-ui/icons';
import { FaRegEnvelope } from "react-icons/fa6";
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
type FormData = {
  email: string;
  password: string;
};

const  Login1: React.FC = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isFocused2, setIsFocused2] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handleFocus_2 = () => setIsFocused2(true);
  const handleBlur_2 = () => setIsFocused2(false);

  const backgroundColor: string = isFocused ? 'blue' : 'gray';
  const backgroundColor2: string = isFocused2 ? 'blue' : 'gray';
  const t = useTranslations();

  const [email,setEmail] = useState("")
  const [password,setPassoword] = useState("")

  const [error, setError] = useState<string | null>(null);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (values: FormData) => {
  
     
    const data = {email,password}
    console.log("salam")
    fetch("https://neo-814m.onrender.com/v1/auth/login", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error( "email or password is wrong");
        
      }
      return response.text();
    })
    .then((token) => {
      console.log(token);
      // Handle successful response
    })
    .catch((error) => {
      console.error("username or password is wrong");
      setError("username or password is wrong");
      toast.error(`🦄 ${error.message}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    });
  };

  return (

    
    <Box boxShadow='0 2px 8px rgba(0,0,0,.08)'  bg="white" w="600px" m="auto" pb="30px">
        <Flex>
          <Text p="15px 60px" borderBottom="2px solid blue" color="blue" cursor="pointer" _hover={{ color: "black" }} >{t("Auth.tabs.login")}</Text>
          <Text p="15px 60px" color="gray.500" cursor="pointer" > <Link  href="/az/register" _hover={{color: "black" }}>{t("Auth.tabs.register")}</Link></Text>
        </Flex>

        <Flex alignItems="center" flexDirection="column" m="30px" gap="10px">
          <Text fontWeight="bold" fontSize="26px">{t("Auth.Login.title")}</Text>
          <Text>    {t.rich("Auth.Login.subTitle", {
            a: (chunks) => <a href="/az/register" style={{color:"blue", cursor: "pointer"}}>{chunks}</a>,
            span :(chunks) => <span style={{color:"gray"}}> {chunks}</span>
          })}</Text>
          {/* <Text color="gray.500">Hesabınız yoxdur? <span style={{ color: "blue", cursor: "pointer" }}> <Link  _hover={{color:"black"}} href="/az/register">Qeydiyyatdan kecin</Link> </span></Text> */}
        </Flex>

        <Box w="490px" m="auto">
          <FormControl>
        <form onSubmit={handleSubmit(onSubmit)} >
        <FormControl isInvalid={!!errors.email}>


          <InputGroup>
            <InputLeftElement
                 w="50px"
                 backgroundColor='#eee'
                 borderRadius='5px'
              p="25px 10px"
              pointerEvents="none" >
              <FaRegEnvelope color={backgroundColor} />

            </InputLeftElement>

            <Input
              // {...register('email', {
              //   required: 'This is required',
              //   validate: {
              //     containsAt: (value) => value.includes("@") && value.includes('.') || 'Format yalnisdir',
              //   },
              // })}
              id='email'
              type="email"
              placeholder="example@gmail.com"
              onFocus={handleFocus}
              onBlur={handleBlur}
              p="25px 70px"
              onChange={(e) => setEmail(e.target.value)}
          
            />
          </InputGroup>
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.password}>

          <InputGroup mt="30px">
            <InputLeftElement
            w="50px"
            backgroundColor='#eee'
            borderRadius='5px'
              p="25px 10px"
              pointerEvents="none"
            >
              <LockIcon color={backgroundColor2} />
            </InputLeftElement>
            <Input
            // {...register('password', {
            //   required: 'This is required',
            //   minLength: { value: 6, message: 'Minimum length should be 6' },
            //   validate: {
            //     containsLetterAndNumber: (value) => 
            //     /[a-z]/.test(value) && /[0-9]/.test(value) || 'Password must contain both letters (a-z) and numbers (0-9)',                },
            // })}
              id='password'
              type="password"
              placeholder= {t("Common.FormInputs.password.placeholder")}
              p="25px 70px"
              onFocus={handleFocus_2}
              onBlur={handleBlur_2}
              onChange={(e) => setPassoword(e.target.value)}
               />
          </InputGroup>
          <FormErrorMessage>
          {errors.password && errors.password.message}
          </FormErrorMessage>
          </FormControl>


          <FormHelperText m="20px 0 ">
               <Link fontSize="17px" _hover={{ color: "blue", textDecoration: "none" }} href="/az/forgotPassword" >{t("Auth.Login.question")}</Link>
          </FormHelperText>

          <Box
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            {isHovered ? (
              <Button w="450px" backgroundColor="blue" color="white" _hover={{ backgroundColor: "blue" }} p="25px" type='submit'>{t("Auth.tabs.login")} <Icon as={FaArrowRight} /></Button>
            ) :
              (<Button w="450px" backgroundColor="blue" color="white" p="25px" type='submit'>{t("Auth.tabs.login")}  </Button>)}
          </Box>


      </form>
      </FormControl>
        </Box>
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"/>
      </Box>
  )
}

export default Login1;

