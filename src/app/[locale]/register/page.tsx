'use client'
import React from 'react'
import { Box, Button, Flex, FormControl, Text, InputGroup, InputLeftElement, Input, FormErrorMessage, Link } from '@chakra-ui/react'
import { FaUser, FaArrowRight, FaRegEnvelope } from 'react-icons/fa'
import { useState } from 'react'
import { Icon, LockIcon } from '@chakra-ui/icons'
import { PiUserListFill } from "react-icons/pi";
import { FaRegBuilding } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { useTranslations } from "next-intl";


interface RegisterProps { }

interface FormData {
  firstName: string;
  lastName: string;
  company?: string;
  email: string;
  password: string;
}


const Register: React.FC<RegisterProps> = () => {
  const t = useTranslations();

  const [isFocused, setIsFocused] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const [isFocused3, setIsFocused3] = useState(false);
  const [isFocused4, setIsFocused4] = useState(false);
  const [isFocused5, setIsFocused5] = useState(false);

  const [isHovered, setIsHovered] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handleFocus_2 = () => setIsFocused2(true);
  const handleBlur_2 = () => setIsFocused2(false);
  const handleFocus_3 = () => setIsFocused3(true);
  const handleBlur_3 = () => setIsFocused3(false);
  const handleFocus_4 = () => setIsFocused4(true);
  const handleBlur_4 = () => setIsFocused4(false);
  const handleFocus_5 = () => setIsFocused5(true);
  const handleBlur_5 = () => setIsFocused5(false);
  const backgroundColor = isFocused ? 'blue' : 'gray';
  const backgroundColor2 = isFocused2 ? 'blue' : 'gray';
  const backgroundColor3 = isFocused3 ? 'blue' : 'gray';
  const backgroundColor4 = isFocused4 ? 'blue' : 'gray';
  const backgroundColor5 = isFocused5 ? 'blue' : 'gray';


  const [companyName,setCompanyName] = useState("")

  const [role,setRole] = useState("JOBSEEKER");

  const [salam,setSalam] = useState(true)

  const [isVisible, setIsVisible] = useState(true);
  function onSubmit(data: FormData) {
    console.log('Form Data:', data);
  
    fetch("https://neo-814m.onrender.com/v1/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(salam ? {...data,role} : { ...data, companyName, role })
    })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((responseData) => {
      console.log('Response Data:', responseData);
      // Handle the response data as needed
    })
    .catch((error) => {
      console.error("Error during fetch:", error);
      // Handle errors
    });
  }



  const toggleVisibility = () => {
    setIsVisible(false);
    setRole("COMPANY")
    setSalam(false)
  };

  const toggleVisibility1 = () => {
    setIsVisible(true);
    setRole("JOBSEEKER");
    setSalam(true)
  };
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>();
  

  return (
    <>
      <Box bg="white" w="600px" m="auto" pb="30px">
        <Flex>
          <Text p="15px 60px" color="black.300" cursor="pointer" _hover={{ color: "black" }}><Link href="/az/login">{t("Auth.tabs.login")}</Link>
          </Text>
          <Text p="15px 60px" borderBottom="2px solid blue" color="blue" cursor="pointer" _hover={{ color: "black" }} >  {t("Auth.tabs.register")}</Text>
        </Flex>

        <Text fontSize="26px" mt="30px" textAlign="center" fontWeight="bold">{t("Auth.Register.title")}</Text>
        <Box w="490px" m="auto">
          <Flex justifyContent="space-between" mt="30px">
            <Button
              w="240px"
              onClick={toggleVisibility1}
              color={isVisible ? 'blue' : 'gray'}
              bg={isVisible ? 'gray.200' : 'white'}
              _hover={{ bg: "gray.200", color: "blue" }}
            > {t("Common.Role.JOBSEEKER")}</Button>

            <Button
              w="240px"
              onClick={toggleVisibility}
              color={isVisible ? 'gray' : 'blue'}
              bg={isVisible ? 'white' : 'gray.200'}
              _hover={{ bg: "gray.200", color: "blue" }}
            > {t("Common.Role.COMPANY")}</Button>
          </Flex>

          <form  onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
            <FormControl isInvalid={!!errors.firstName} >
              <InputGroup mt="30px" >
                <InputLeftElement
                  p="25px 10px"
                  borderRight="1px solid white"
                  pointerEvents="none" >
                  <FaUser color={backgroundColor} />
                </InputLeftElement>

                <Input
                  {...register('firstName', {
                    required: 'This is required',
                    minLength: { value: 3, message: 'Minimum length should be 3' },
                  })}
                  id='firstName'
                  placeholder={t("Common.FormInputs.firstName.placeholder")}
                  p="25px 70px"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </InputGroup>
              <FormErrorMessage>
                {errors.firstName && errors.firstName.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl>
              {/* nezere alinacaq */}
              <FormControl isInvalid={!!errors.lastName} >

                <InputGroup mt="30px">
                  <InputLeftElement
                    p="25px 10px"
                    borderRight="1px solid white"
                    pointerEvents="none"
                  >
                    <PiUserListFill size={60} color={backgroundColor2} />
                  </InputLeftElement>

                  <Input
                    {...register('lastName', {
                      required: 'This is required',
                      minLength: { value: 3, message: 'Minimum length should be 3' },
                    })}
                    id='lastName'
                    placeholder={t("Common.FormInputs.lastName.placeholder")}
                    p="25px 70px"
                    onFocus={handleFocus_2}
                    onBlur={handleBlur_2}
                    />
                </InputGroup>
                <FormErrorMessage>
                  {errors.lastName && errors.lastName.message}
                </FormErrorMessage>

              </FormControl>

              <FormControl isInvalid={!!errors.company}>
                <InputGroup mt="30px " display={isVisible ? 'none' : 'block'}>
                  <InputLeftElement
                    p="25px 10px"
                    borderRight="1px solid white"
                    pointerEvents="none"
                  >
                    <FaRegBuilding size={60} color={backgroundColor3} />

                  </InputLeftElement>
                  <Input
                  {...register('company', {
                    required: salam ? false : 'This is required',  // Conditionally set the requirement
                    minLength: { value: 3, message: 'Minimum length should be 3' },
                  })}
                    id='company'
                    placeholder={t("Common.FormInputs.companyName.placeholder")}
                    p="25px 70px"
                    onFocus={handleFocus_3}
                    onBlur={handleBlur_3}
                    />
                </InputGroup>
                {!isVisible && errors.company && (
                  <FormErrorMessage>
                    {errors.company.message}
                  </FormErrorMessage>
                )}
              </FormControl>

              <FormControl isInvalid={!!errors.email}>
                <InputGroup mt="30px">
                  <InputLeftElement
                    p="25px 10px"
                    borderRight="1px solid white"
                    pointerEvents="none" >
                    <FaRegEnvelope color={backgroundColor4} />

                  </InputLeftElement>

                  <Input
                    {...register('email', {
                      required: 'This is required',
                      validate: {
                        containsAt: (value) => value.includes("@") && value.includes('.') || 'Format yalnisdir',
                      },
                    })}
                    id='email'
                    placeholder="example@gmail.com"
                    onFocus={handleFocus_4}
                    onBlur={handleBlur_4}
                    p="25px 70px"

                  />
                </InputGroup>
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.password}>

                <InputGroup mt="30px">
                  <InputLeftElement
                    p="25px 10px"
                    borderRight="1px solid white"
                    pointerEvents="none"
                  >
                    <LockIcon color={backgroundColor5} />
                  </InputLeftElement>
                  <Input
                    {...register('password', {
                      required: 'This is required',
                      minLength: { value: 6, message: 'Minimum length should be 6' },
                      validate: {
                        containsLetterAndNumber: (value) =>
                          /[a-z]/.test(value) && /[0-9]/.test(value) || 'Password must contain both letters (a-z) and numbers (0-9)',
                      },
                    })}
                    id='password'
                    type="password"
                    placeholder={t("Common.FormInputs.password.placeholder")}
                    p="25px 70px"
                    onFocus={handleFocus_5}
                    onBlur={handleBlur_5}
                  />
                </InputGroup>
                <FormErrorMessage>
                  {errors.password && errors.password.message}
                </FormErrorMessage>
              </FormControl>
              <Box mt="30px"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <Button
                  w="450px"
                  backgroundColor="blue"
                  color="white"
                  p="25px"
                  type='submit'
                  _hover={{ backgroundColor: "blue" }}
                >
                  {t("Auth.Register.actions.register")}
                  {isHovered && <Icon as={FaArrowRight} />}
                </Button>
              </Box>
            </FormControl>

          </form>


        </Box>

      </Box>
    </>
  )
}

export default Register;