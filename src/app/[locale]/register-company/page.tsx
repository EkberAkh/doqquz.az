"use client";
import React from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  Text,
  InputGroup,
  InputLeftElement,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import { FaUser, FaArrowRight, FaRegEnvelope } from "react-icons/fa";
import { useState } from "react";
import { Icon, LockIcon } from "@chakra-ui/icons";
import { PiUserListFill } from "react-icons/pi";
import { FaRegBuilding } from "react-icons/fa";
import Link from "next/link";
import { useTranslations } from "next-intl";
import ScrollToTop from "@/components/ScrollToTop";
import { basicSchema } from "./const";
import { useFormik } from "formik"

interface RegisterProps { }

interface FormData {
  name: string;
  surname: string;
  companyName: string;
  email: string;
  password: string;
}

const Register: React.FC<RegisterProps> = () => {
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
  const backgroundColor = isFocused ? "blue" : "gray";
  const backgroundColor2 = isFocused2 ? "blue" : "gray";
  const backgroundColor3 = isFocused3 ? "blue" : "gray";
  const backgroundColor4 = isFocused4 ? "blue" : "gray";
  const backgroundColor5 = isFocused5 ? "blue" : "gray";

  const t = useTranslations();

  const [isVisible, setIsVisible] = useState(false);


  const [role, setRole] = useState("COMPANY")

  const [isSubmitted, setIsSubmitted] = useState(false);

//   const toggleVisibility = () => {
//     setIsVisible(false);
//     setRole("COMPANY")
//   };

//   const toggleVisibility1 = () => {
//     setIsVisible(true);
//     setRole("JOBSEEKER")
//   };

  function onSubmit() {
    console.log(values);
    fetch("https://neo-814m.onrender.com/v1/auth/register", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ ...values, role })
    }).then((res) => {
      console.log(res);
    });

    setIsSubmitted(true); // Set the form as submitted
  }
  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      companyName: '',
      email: '',
      password: '',
    },
    validationSchema: basicSchema,
    onSubmit,
  });


  return (
    <>
      <Box bg="white" w="600px" m="auto" pb="30px">
        <Flex>
          <Text
            p="15px 60px"
            color="gray.500"
            cursor="pointer"
            _hover={{ color: "black" }}
          >
            {" "}
            <Link href="/az/login">{t("Auth.tabs.login")}</Link>
          </Text>
          <Text
            p="15px 60px"
            borderBottom="2px solid blue"
            color="blue"
            cursor="pointer"
            _hover={{ color: "black" }}
          >
            {t("Auth.tabs.register")}
          </Text>
        </Flex>

        <Text fontSize="26px" mt="30px" textAlign="center" fontWeight="bold">
          {t("Auth.Register.title")}
        </Text>
        <Box w="490px" m="auto">
          <Flex justifyContent="space-between" mt="30px">
            {/* <Button
              w="240px"
              onClick={toggleVisibility1}
              color={isVisible ? "blue" : "gray"}
              bg={isVisible ? "gray.200" : "white"}
              _hover={{ bg: "gray.200", color: "blue" }}
            >
              {t("Common.Role.JOBSEEKER")}
            </Button> */}
            <Link href="/az/register"> Istifadeci</Link>
            <Link href=""> sirket</Link>

            {/* <Button
              w="240px"
              onClick={toggleVisibility}
              color={isVisible ? "gray" : "blue"}
              bg={isVisible ? "white" : "gray.200"}
              _hover={{ bg: "gray.200", color: "blue" }}
            >
              {t("Common.Role.COMPANY")}
            </Button> */}
          </Flex>

          <form onSubmit={(e) => { setIsSubmitted(true); handleSubmit(e); }} autoComplete='off'>
            <FormControl>
              <InputGroup mt="30px">
                <InputLeftElement
                  w="50px"
                  backgroundColor='#eee'
                  borderRadius='5px'
                  p="25px 10px"
                  borderRight="1px solid white"
                  pointerEvents="none"
                >
                  <FaUser color={backgroundColor} />
                </InputLeftElement>

                <Input
                  value={values.firstName}
                  onChange={handleChange}
                  id="firstName"
                  placeholder={t("Common.FormInputs.firstName.placeholder")}
                  p="25px 70px"
                  onFocus={handleFocus}
                  onBlur={handleBlur}

                />
              </InputGroup>

            </FormControl>
            {isSubmitted && errors.firstName && <Text color="red" mt="5px">{errors.firstName}</Text>}

            <FormControl>
              {/* nezere alinacaq */}
              <FormControl>
                <InputGroup mt="30px">
                  <InputLeftElement
                    w="50px"
                    backgroundColor='#eee'
                    borderRadius='5px'
                    p="25px 10px"
                    borderRight="1px solid white"
                    pointerEvents="none"
                  >
                    <PiUserListFill size={20} color={backgroundColor2} />
                  </InputLeftElement>

                  <Input
                    value={values.lastName}
                    onChange={handleChange}
                    id="lastName"
                    type="text"
                    placeholder={t("Common.FormInputs.lastName.placeholder")}
                    p="25px 70px"
                    onFocus={handleFocus_2}
                    onBlur={handleBlur_2}
                  />
                </InputGroup>

              </FormControl>
              {isSubmitted && errors.lastName && <Text color="red" mt="5px">{errors.lastName}</Text>}

              <FormControl >
                <InputGroup mt="30px " display={isVisible ? "none" : "block"}>
                  <InputLeftElement
                    w="50px"
                    backgroundColor='#eee'
                    borderRadius='5px'
                    p="25px 10px"
                    borderRight="1px solid white"
                    pointerEvents="none"
                  >
                    <FaRegBuilding size={20} color={backgroundColor3} />
                  </InputLeftElement>
                  <Input
                    value={values.companyName}
                    onChange={handleChange}
                    id="companyName"
                    type="text"
                    placeholder={t("Common.FormInputs.companyName.placeholder")}
                    p="25px 70px"
                    onFocus={handleFocus_3}
                    onBlur={handleBlur_3}
                  />
                </InputGroup>
                {isSubmitted && errors.companyName && <Text color="red" mt="5px">{errors.companyName}</Text>}


              </FormControl>

              <FormControl >
                <InputGroup mt="30px">
                  <InputLeftElement
                    w="50px"
                    backgroundColor='#eee'
                    borderRadius='5px'
                    p="25px 10px"
                    borderRight="1px solid white"
                    pointerEvents="none"
                  >
                    <FaRegEnvelope color={backgroundColor4} />
                  </InputLeftElement>

                  <Input
                    value={values.email}
                    onChange={handleChange}
                    id="email"
                    type="email"
                    placeholder="example@gmail.com"
                    onFocus={handleFocus_4}
                    onBlur={handleBlur_4}
                    p="25px 70px"
                  />
                </InputGroup>

              </FormControl>
              {isSubmitted && errors.email && <Text color="red" mt="5px">{errors.email}</Text>}

              <FormControl >
                <InputGroup mt="30px">
                  <InputLeftElement
                    w="50px"
                    backgroundColor='#eee'
                    borderRadius='5px'
                    p="25px 10px"
                    borderRight="1px solid white"
                    pointerEvents="none"
                  >
                    <LockIcon color={backgroundColor5} />
                  </InputLeftElement>
                  <Input
                    value={values.password}
                    onChange={handleChange}
                    id="password"
                    type="password"
                    placeholder={t("Common.FormInputs.password.placeholder")}
                    p="25px 70px"
                    onFocus={handleFocus_5}
                    onBlur={handleBlur_5}
                  />
                </InputGroup>
                {isSubmitted && errors.password && <Text color="red" mt="5px">{errors.password}</Text>}
              
              </FormControl>
              <Box
                mt="30px"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Button
                  w="450px"
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
        <ScrollToTop />
      </Box>
    </>
  );
};

export default Register;

