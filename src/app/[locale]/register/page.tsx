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
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useTranslations } from "next-intl";
import ScrollToTop from "@/components/ScrollToTop";
import { NavigationLink } from "@/components/NavigationLink";

interface RegisterProps {}

interface FormData {
  name: string;
  surname: string;
  company?: string;
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

  const [isVisible, setIsVisible] = useState(true);
  const t = useTranslations();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEamil] = useState("");
  const [password, setPassoword] = useState("");
  const [salam, setSalam] = useState(true);
  const [role, setRole] = useState("JOBSEEKER");

  const toggleVisibility = () => {
    setIsVisible(false);
    setSalam(false);
    setRole("COMPANY");
  };

  const toggleVisibility1 = () => {
    setIsVisible(true);
    setSalam(true);
    setRole("JOBSEEKER");
  };
  const onSubmit = async (e:any) => {
    e.preventDefault();
    const data = getValues(["name", "surname", "email", "company", "password"]);
    const [name, surname, email, company, password] = data;
    const role = salam ? "JOBSEEKER" : "COMPANY";
    const formData = salam
      ? { email, firstName: name, lastName: surname, password, role }
      : {
          companyName,
          email,
          firstName: name,
          lastName: surname,
          password,
          role,
        };
    try {
      await  fetch("https://neo-814m.onrender.com/v1/auth/register", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(formData),
    }).then((res) => {
      console.log(res);
    });
      // await fetch()
    } catch (e) {
      console.log(e);
      
    }
  }

  const handleClick =  async (e: any) => {
    e.preventDefault();
    const data = getValues(["name", "surname", "email", "company", "password"]);
    const [name, surname, email, company, password] = data;
    const role = salam ? "JOBSEEKER" : "COMPANY";
    const formData = salam
      ? { email, firstName: name, lastName: surname, password, role }
      : {
          companyName,
          email,
          firstName: name,
          lastName: surname,
          password,
          role,
        };
        fetch("https://neo-814m.onrender.com/v1/auth/register", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(formData),
        }).then((res) => {
          console.log(res);
        });
   
  };
  const {
    handleSubmit,
    getValues,
    register,
    formState: { errors },
  } = useForm<FormData>();
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
            <NavigationLink href="/login">
              {t("Auth.tabs.login")}
            </NavigationLink>
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
            <Button
              w="240px"
              onClick={toggleVisibility1}
              color={isVisible ? "blue" : "gray"}
              bg={isVisible ? "gray.200" : "white"}
              _hover={{ bg: "gray.200", color: "blue" }}
            >
              {t("Common.Role.JOBSEEKER")}
            </Button>

            <Button
              w="240px"
              onClick={toggleVisibility}
              color={isVisible ? "gray" : "blue"}
              bg={isVisible ? "white" : "gray.200"}
              _hover={{ bg: "gray.200", color: "blue" }}
            >
              {t("Common.Role.COMPANY")}
            </Button>
          </Flex>

          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={!!errors.name}>
              <InputGroup mt="30px">
                <InputLeftElement
                  w="50px"
                  backgroundColor="#eee"
                  borderRadius="5px"
                  p="25px 10px"
                  borderRight="1px solid white"
                  pointerEvents="none"
                >
                  <FaUser color={backgroundColor} />
                </InputLeftElement>

                <Input
                  id="name"
                  placeholder={t("Common.FormInputs.firstName.placeholder")}
                  p="25px 70px"
              
                  {...register("name", {
                    required: "This is required",
                    minLength: {
                      value: 3,
                      message: "Minimum length should be 3",
                    },
                  })}
                />
              </InputGroup>
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl>
              {/* nezere alinacaq */}
              <FormControl isInvalid={!!errors.surname}>
                <InputGroup mt="30px">
                  <InputLeftElement
                    w="50px"
                    backgroundColor="#eee"
                    borderRadius="5px"
                    p="25px 10px"
                    borderRight="1px solid white"
                    pointerEvents="none"
                  >
                    <PiUserListFill size={20} color={backgroundColor2} />
                  </InputLeftElement>

                  <Input
                    id="surname"
                    type="text"
                    placeholder={t("Common.FormInputs.lastName.placeholder")}
                    p="25px 70px"
                 
                    {...register("surname", {
                      required: "This is required",
                      minLength: {
                        value: 3,
                        message: "Minimum length should be 3",
                      },
                    })}
                  />
                </InputGroup>
                <FormErrorMessage>
                  {errors.surname && errors.surname.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.company}>
                <InputGroup mt="30px " display={isVisible ? "none" : "block"}>
                  <InputLeftElement
                    w="50px"
                    backgroundColor="#eee"
                    borderRadius="5px"
                    p="25px 10px"
                    borderRight="1px solid white"
                    pointerEvents="none"
                  >
                    <FaRegBuilding size={20} color={backgroundColor3} />
                  </InputLeftElement>
                  <Input
                    id="company"
                    type="text"
                    placeholder={t("Common.FormInputs.companyName.placeholder")}
                    p="25px 70px"
              
                    {...register("company", {
                      required: "This is required",
                      minLength: {
                        value: 3,
                        message: "Minimum length should be 3",
                      },
                    })}
                  />
                </InputGroup>
                {!isVisible && (
                  <FormErrorMessage>
                    {errors.company && errors.company.message}
                  </FormErrorMessage>
                )}
              </FormControl>

              <FormControl isInvalid={!!errors.email}>
                <InputGroup mt="30px">
                  <InputLeftElement
                    w="50px"
                    backgroundColor="#eee"
                    borderRadius="5px"
                    p="25px 10px"
                    borderRight="1px solid white"
                    pointerEvents="none"
                  >
                    <FaRegEnvelope color={backgroundColor4} />
                  </InputLeftElement>

                  <Input
                    id="email"
                    type="email"
                    placeholder="example@gmail.com"
                
                    p="25px 70px"
                    {...register("email", {
                      required: "This is required",
                      validate: {
                        containsAt: (value) =>
                          (value.includes("@") && value.includes(".")) ||
                          "Format yalnisdir",
                      },
                    })}
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
                    backgroundColor="#eee"
                    borderRadius="5px"
                    p="25px 10px"
                    borderRight="1px solid white"
                    pointerEvents="none"
                  >
                    <LockIcon color={backgroundColor5} />
                  </InputLeftElement>
                  <Input
                    id="password"
                    type="password"
                    placeholder={t("Common.FormInputs.password.placeholder")}
                    p="25px 70px"
                
                    {...register("password", {
                      required: "This is required",
                      minLength: {
                        value: 6,
                        message: "Minimum length should be 6",
                      },
                      validate: {
                        containsLetterAndNumber: (value) =>
                          (/[a-z]/.test(value) && /[0-9]/.test(value)) ||
                          "Password must contain both letters (a-z) and numbers (0-9)",
                      },
                    })}
                  />
                </InputGroup>
                <FormErrorMessage>
                  {errors.password && errors.password.message}
                </FormErrorMessage>
              </FormControl>
              <Box
                mt="30px"
                // onMouseEnter={() => setIsHovered(true)}
                // onMouseLeave={() => setIsHovered(false)}
              ></Box>
            </FormControl>
              <Button
                type="submit"
                w="450px"
                backgroundColor="blue"
                color="white"
                p="25px"
                _hover={{ backgroundColor: "blue" }}
              >
                {t("Auth.Register.actions.register")}
                {isHovered && <Icon as={FaArrowRight} />}
              </Button>
          </form>
        </Box>
        <ScrollToTop />
      </Box>
    </>
  );
};

export default Register;
