'use client'
import React from 'react'
import { Box, Button, Flex, FormControl, Text, InputGroup, InputLeftElement, Input, FormErrorMessage } from '@chakra-ui/react'
import { FaUser, FaArrowRight, FaRegEnvelope } from 'react-icons/fa'
import { useState } from 'react'
import { Icon, LockIcon } from '@chakra-ui/icons'
import { PiUserListFill } from "react-icons/pi";
import { FaRegBuilding } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { useTranslations } from "next-intl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavigationLink } from '@/components/NavigationLink'
import { useRouter } from 'next/navigation'
import { useToast } from "@chakra-ui/react";

interface RegisterProps { }

interface FormData {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  password: string;
}


const Register: React.FC<RegisterProps> = () => {
  const t = useTranslations();
const router = useRouter()
const toast = useToast();

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



  const [role,setRole] = useState("JOBSEEKER");

  const [salam,setSalam] = useState(true)

  const [isVisible, setIsVisible] = useState(true);
  function onSubmit(data: FormData) {
    console.log('Form Data:', data);
  
    fetch("https://neo-814m.onrender.com/v1/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(salam ? {...data,role} : { ...data, role })
    })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
    
      toast({
        title: t('Common.Success.default'),
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      router.push('login')
      return res.json();
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
      <Box bg="white" w={{base:"80%",lg:"600px"}} m="auto" pb="30px">
        <Flex >
          <Text
            p={{base:"15px 20px",lg:"15px 60px"}}
            color="black.300"
            cursor="pointer"
            _hover={{ color: "black" }}
            w={{base:"50%",lg:"auto"}}
           textAlign='center'
          >
            <NavigationLink href="/login">{t("Auth.tabs.login")}</NavigationLink>
          </Text>
          <Text
            p={{base:"15px 20px",lg:"15px 60px"}}
            borderBottom="2px solid blue"
            color="blue"
            cursor="pointer"
            _hover={{ color: "black" }}
            w={{base:"50%",lg:"auto"}}
            textAlign='center'
          >
            {" "}
            {t("Auth.tabs.register")}
          </Text>
        </Flex>

        <Text fontSize="26px" mt="30px" textAlign="center" fontWeight="bold">
          {t("Auth.Register.title")}
        </Text>
        <Box w={{base:"100%",lg:"490px"}} m="auto">
          <Flex justifyContent="space-between" mt="30px">
            <Button
              w={{base:"50%",lg:"240px"}}
              onClick={toggleVisibility1}
              color={isVisible ? "blue" : "gray"}
              bg={isVisible ? "gray.200" : "white"}
              _hover={{ bg: "gray.200", color: "blue" }}
            >
              {" "}
              {t("Common.Role.JOBSEEKER")}
            </Button>

            <Button
              w={{base:"50%",lg:"240px"}}
              onClick={toggleVisibility}
              color={isVisible ? "gray" : "blue"}
              bg={isVisible ? "white" : "gray.200"}
              _hover={{ bg: "gray.200", color: "blue" }}
            >
              {" "}
              {t("Common.Role.COMPANY")}
            </Button>
          </Flex>
          <Box paddingX={{base:"20px",lg:"0"}}>
          <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" >
            <FormControl isInvalid={!!errors.firstName}>
              <InputGroup mt="30px">
                <InputLeftElement
                  p="25px 10px"
                  borderRight="1px solid white"
                  pointerEvents="none"
                >
                  <FaUser color={backgroundColor} />
                </InputLeftElement>

                <Input
                  {...register("firstName", {
                    required: `${t("Common.Error.validation.empty")}`,
                    minLength: {
                      value: 3,
                      message: "Minimum  3 simvol",
                    },
                  })}
                  id="firstName"
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
              <FormControl isInvalid={!!errors.lastName}>
                <InputGroup mt="30px">
                  <InputLeftElement
                    p="25px 10px"
                    borderRight="1px solid white"
                    pointerEvents="none"
                  >
                    <PiUserListFill size={60} color={backgroundColor2} />
                  </InputLeftElement>

                  <Input
                    {...register("lastName", {
                      required: `${t("Common.Error.validation.empty")}`,
                      minLength: {
                        value: 3,
                        message: "Minimum 3 simvol",
                      },
                    })}
                    id="lastName"
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

              <FormControl isInvalid={!!errors.companyName}>
                <InputGroup mt="30px " display={isVisible ? "none" : "block"}>
                  <InputLeftElement
                    p="25px 10px"
                    borderRight="1px solid white"
                    pointerEvents="none"
                  >
                    <FaRegBuilding size={60} color={backgroundColor3} />
                  </InputLeftElement>
                  <Input
                    {...register("companyName", {
                      required: salam ? false : `${t("Common.Error.validation.empty")}`, // Conditionally set the requirement
                      minLength: {
                        value: 3,
                        message: "Minimum  3 simvol",
                      },
                    })}
                    id="companyName"
                    placeholder={t("Common.FormInputs.companyName.placeholder")}
                    p="25px 70px"
                    onFocus={handleFocus_3}
                    onBlur={handleBlur_3}
                  />
                </InputGroup>
                {!isVisible && errors.companyName && (
                  <FormErrorMessage>
                    {errors.companyName.message}
                  </FormErrorMessage>
                )}
              </FormControl>

              <FormControl isInvalid={!!errors.email}>
                <InputGroup mt="30px">
                  <InputLeftElement
                    p="25px 10px"
                    borderRight="1px solid white"
                    pointerEvents="none"
                  >
                    <FaRegEnvelope color={backgroundColor4} />
                  </InputLeftElement>

                  <Input
                    {...register("email", {
                      required: `${t("Common.Error.validation.empty")}`,
                      validate: {
                        containsAt: (value) =>
                          (value.includes("@") && value.includes(".")) ||
                          "Format yalnisdir",
                      },
                    })}
                    id="email"
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
                    {...register("password", {
                      required: `${t("Common.Error.validation.empty")}`,
                      minLength: {
                        value: 6,
                        message: "Minimum  6 simvol",
                      },
                      validate: {
                        containsLetterAndNumber: (value) =>
                          (/[a-z]/.test(value) && /[0-9]/.test(value)) ||
                          "Parolda həm hərflər (a-z) və rəqəmlər (0-9) olmalıdır",
                      },
                    })}
                    id="password"
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
              <Box
                mt="30px"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Button
                  w={{base:"100%",lg:"450px"}}
                  backgroundColor="blue"
                  color="white"
                  p="25px"
                  type="submit"
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
          theme="light"
        />
      </Box>
    </>
  );
}

export default Register;