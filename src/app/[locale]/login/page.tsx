"use client";
import React from "react";
import {
  Box,
  Text,
  Flex,
  FormControl,
  InputGroup,
  InputLeftElement,
  Input,
  FormHelperText,
  Link,
  Button,
  Icon,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { FaArrowRight } from "react-icons/fa";
import { LockIcon } from "@chakra-ui/icons";
import { FaRegEnvelope } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { basicSchema } from "./const";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { NavigationLink } from "@/components/NavigationLink";
import { useToast } from "@chakra-ui/react";

type FormData = {
  email: string;
  password: string;
};

const Login1: React.FC = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isFocused2, setIsFocused2] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const toast = useToast();

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handleFocus_2 = () => setIsFocused2(true);
  const handleBlur_2 = () => setIsFocused2(false);

  const backgroundColor: string = isFocused ? "blue" : "gray";
  const backgroundColor2: string = isFocused2 ? "blue" : "gray";
  const t = useTranslations();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassoword] = useState("");

  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  console.log(token);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function onSubmit() {
    console.log(values);
    fetch("https://neo-814m.onrender.com/v1/auth/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("email or password is wrong");
        }
        return response.text();
      })
      .then((token1) => {
        setToken(token1);
        Cookies.set("token", token1, { expires: 7 }); // expires in 7 days
        toast({
          title: "Login successful",
          status: "success",
          duration: 2000,
          isClosable: true,
        });

        router.push("/");
      })
      .catch((error) => {
        console.error("username or password is wrong");
        setError("username or password is wrong");
        toast({
          title: "Username or password is wrong",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      });

    setIsSubmitted(true); // Set the form as submitted
  }
  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  return (
    <Box
      boxShadow="0 2px 8px rgba(0,0,0,.08)"
      bg="white"
      w={{ base: "80%", lg: "600px" }}
      m="auto"
      pb="30px"
    >
      <Flex justifyContent={{ base: "justify-content", lg: "start" }}>
        <Text
          p={{ base: "15px", lg: "15px 60px" }}
          borderBottom="2px solid blue"
          color="blue"
          cursor="pointer"
          _hover={{ color: "black" }}
        >
          {t("Auth.tabs.login")}
        </Text>
        <Text
          p={{ base: "15px", lg: "15px 60px" }}
          color="gray.500"
          cursor="pointer"
        >
          {" "}
          <NavigationLink href="/register" _hover={{ color: "black" }}>
            {t("Auth.tabs.register")}
          </NavigationLink>
        </Text>
      </Flex>

      <Flex alignItems="center" flexDirection="column" m="30px" gap="10px">
        <Text fontWeight="bold" fontSize={{ base: "16px", lg: "26px" }}>
          {t("Auth.Login.title")}
        </Text>
        <Text fontSize={{ base: "13px", lg: "16px" }}>
          {" "}
          {t.rich("Auth.Login.subTitle", {
            NavigationLink: (chunks) => (
              <NavigationLink
                href="/register"
                style={{ color: "blue", cursor: "pointer" }}
              >
                {chunks}
              </NavigationLink>
            ),
            span: (chunks) => <span style={{ color: "gray" }}> {chunks}</span>,
          })}
        </Text>
        {/* <Text color="gray.500">Hesabınız yoxdur? <span style={{ color: "blue", cursor: "pointer" }}> <Link  _hover={{color:"black"}} href="/az/register">Qeydiyyatdan kecin</Link> </span></Text> */}
      </Flex>

      <Box w={{ base: "80%", lg: "490px" }} m="auto">
        <FormControl>
          <form
            onSubmit={(e) => {
              setIsSubmitted(true);
              handleSubmit(e);
            }}
            autoComplete="off"
          >
            <FormControl>
              <InputGroup>
                <InputLeftElement
                  w="50px"
                  backgroundColor="#eee"
                  borderRadius="5px"
                  p="25px 10px"
                  pointerEvents="none"
                  display={{ base: "none", lg: "flex" }}
                >
                  <FaRegEnvelope color={backgroundColor} />
                </InputLeftElement>

                <Input
                  id="email"
                  type="email"
                  placeholder="example@gmail.com"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  p={{ base: "25px 30px 25px 30px", lg: "25px 70px" }}
                  value={values.email}
                  onChange={handleChange}
                />
              </InputGroup>
              {isSubmitted && errors.email && (
                <Text color="red" mt="5px">
                  {errors.email}
                </Text>
              )}
            </FormControl>

            <FormControl>
              <InputGroup mt="30px">
                <InputLeftElement
                  w="50px"
                  backgroundColor="#eee"
                  borderRadius="5px"
                  p="25px 10px"
                  pointerEvents="none"
                  display={{ base: "none", lg: "flex" }}
                >
                  <LockIcon color={backgroundColor2} />
                </InputLeftElement>
                <Input
                  id="password"
                  type="password"
                  placeholder={t("Common.FormInputs.password.placeholder")}
                  p={{ base: "25px 30px 25px 30px", lg: "25px 70px" }}
                  onFocus={handleFocus_2}
                  onBlur={handleBlur_2}
                  value={values.password}
                  onChange={handleChange}
                />
              </InputGroup>
              {isSubmitted && errors.password && (
                <Text color="red" mt="5px">
                  {errors.password}
                </Text>
              )}
            </FormControl>

            <FormHelperText m="20px 0 ">
              <NavigationLink
                fontSize="17px"
                _hover={{ color: "blue", textDecoration: "none" }}
                href="/forgotPassword"
              >
                {t("Auth.Login.question")}
              </NavigationLink>
            </FormHelperText>

            <Box
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {isHovered ? (
                <Button
                  w={{ base: "100%", lg: "450px" }}
                  backgroundColor="blue"
                  color="white"
                  _hover={{ backgroundColor: "blue" }}
                  p="25px"
                  type="submit"
                >
                  {t("Auth.tabs.login")} <Icon as={FaArrowRight} />
                </Button>
              ) : (
                <Button
                  w={{ base: "100%", lg: "450px" }}
                  backgroundColor="blue"
                  color="white"
                  p="25px"
                  type="submit"
                >
                  {t("Auth.tabs.login")}{" "}
                </Button>
              )}
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
        theme="light"
      />
    </Box>
  );
};

export default Login1;
