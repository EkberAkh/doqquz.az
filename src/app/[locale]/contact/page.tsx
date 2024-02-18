"use client";
import {
  Box,
  Container,
  Flex,
  Text,
  FormControl,
  InputLeftElement,
  InputGroup,
  Input,
  FormErrorMessage,
  Textarea,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { FaCheck, FaRegEnvelope } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import Cookies from "js-cookie";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface RegisterProps {}

interface FormData {
  name: string;
  email: string;
  topic: string;
  textarea: string;
}

const Contact: React.FC<RegisterProps> = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const [isFocused3, setIsFocused3] = useState(false);
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handleFocus_2 = () => setIsFocused2(true);
  const handleBlur_2 = () => setIsFocused2(false);
  const handleFocus_3 = () => setIsFocused3(true);
  const handleBlur_3 = () => setIsFocused3(false);

  const backgroundColor = isFocused ? "blue" : "gray";
  const backgroundColor2 = isFocused2 ? "blue" : "gray";
  const backgroundColor3 = isFocused3 ? "blue" : "gray";

  const t = useTranslations();

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const token = Cookies.get("token");

  const onSubmit = async (values: FormData) => {
    const url = "https://neo-814m.onrender.com/v1/contact/";
    const method = "POST";

    const payload = {
      fullname: values.name,
      email: values.email,
      subject: values.topic,
      message: values.textarea,
    };

    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-type": "application/json",
          Token: `${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status} `);
      }

      const data = await response.json();

      toast.success(t("Common.Success.default"), {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeButton: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // transition: Bounce,
        icon: (
          <FaCheck
            style={{
              backgroundColor: "#fff",
              color: "#5BB318",
              borderRadius: "100px",
              padding: "2px",
            }}
          />
        ),
        style: {
          backgroundColor: "#5BB318",
          color: "#fff",
        },
      });

      reset();
    } catch (error) {
      if (error instanceof Error) {
        console.error("Data is not Posted", error.message);
        toast.error(t("Common.Error.default"));
      } else {
        console.error("Data is not Posted", error);
        toast.error(t("Common.Error.default"));
      }
    }
  };

  return (
    <Container maxW="1200px" bg={"white"} boxShadow="2xl" rounded="md">
      <Text fontWeight="bold" fontSize="20px" padding="20px">
        {t("Common.Questions.contact")}
      </Text>
      <hr></hr>
      <Box m="50px 0" p="30px">
        <form onSubmit={handleSubmit(onSubmit)}>

          <Flex gap='30px' display={{ base: "block", lg: "flex" }}>

            <FormControl isInvalid={!!errors.name}>
              <InputGroup mb={{ base: "50px", lg: "0" }}>
                <InputLeftElement
                  w="50px"

                  h={'98%'}
                  mt={'0.3px'}
                  backgroundColor='#eee'
                  borderRadius='5px 0px 0px 5px'
                  borderRight={'1px solid #D1D1D1'}
                  // p="25px 10px"
                  pointerEvents="none" >

                  <FaRegUserCircle color={backgroundColor} />
                </InputLeftElement>
                <Input
                  {...register("name", {
                    required: `${t("Common.Error.validation.empty")}`,
                  })}
                  id="name"
                  type="text"
                  placeholder={t("Common.FormInputs.fullname.label")}
                  p="25px 70px"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </InputGroup>
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.email}>
              <InputGroup>
                <InputLeftElement
                  w="50px"

                  h={'98%'}
                  mt={'0.3px'}
                  backgroundColor='#eee'
                  borderRadius='5px 0px 0px 5px'
                  borderRight={'1px solid #D1D1D1'}
                  pointerEvents="none" >

                  <FaRegEnvelope color={backgroundColor2} />
                </InputLeftElement>
                <Input
                  {...register("email", {
                    required: `${t("Common.Error.validation.empty")}`,
                  })}
                  id="email"
                  type="email"
                  placeholder={t("Common.FormInputs.email.label")}
                  p="25px 70px"
                  onFocus={handleFocus_2}
                  onBlur={handleBlur_2}
                />
              </InputGroup>
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>
          </Flex>
          <FormControl isInvalid={!!errors.topic}>
            <InputGroup m="50px 0 0 0 ">
              <InputLeftElement
                w="50px"

                h={'98%'}
                mt={'0.6px'}
                backgroundColor='#eee'
                borderRadius='5px 0px 0px 5px'
                borderRight={'1px solid #D1D1D1'}
                pointerEvents="none" >

                <FaBook color={backgroundColor3} />
              </InputLeftElement>
              <Input
                {...register("topic", {
                  required: `${t("Common.Error.validation.empty")}`,
                })}
                id="topic"
                type="text"
                placeholder={t("Common.FormInputs.subject.label")}
                p="25px 70px"
                onFocus={handleFocus_3}
                onBlur={handleBlur_3}
              />
            </InputGroup>
            <FormErrorMessage>
              {errors.topic && errors.topic.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.textarea}>
            <Textarea
              {...register("textarea", {
                required: `${t("Common.Error.validation.empty")}`,
              })}
              id="textarea"
              mt="50px"
              borderRadius="5px"
              placeholder={t("Common.FormInputs.message.label")}

              size='m'
              minHeight="110px"
              resize={'none'}

              p="20px"
            />
            <FormErrorMessage>
              {errors.textarea && errors.textarea.message}
            </FormErrorMessage>
          </FormControl>

          <Button color='white' bg="#2a41e8" _hover={{}} p="25px 40px" m="30px 0" type='submit' w={{ base: "100%", lg: "auto" }}> {t("Common.Action.SEND")}</Button>

        </form>
      </Box>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Container>
  );
};

export default Contact;
