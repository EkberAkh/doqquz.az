"use client";
import { Box, Container, Flex, Text, FormControl, InputLeftElement, InputGroup, Input, FormErrorMessage, Textarea, Button } from '@chakra-ui/react'
import React from 'react'
import { FaRegEnvelope } from 'react-icons/fa'
import { FaRegUserCircle } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useTranslations } from 'next-intl';


interface RegisterProps { }

interface FormData {
  name: string;
  email: string;
  topic: string;
  textarea:string;
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
  } = useForm<FormData>();

  const onSubmit = (values: FormData) => {
    console.log("salam", values);
  };


  return (
    <Container maxW="1200px" bg={"white"} boxShadow='2xl'  rounded='md'  >
      <Text fontWeight="bold" fontSize="20px" padding="20px">{t("Common.Questions.contact")}</Text>
      <hr></hr>
      <Box m="50px 0" p="30px" >

        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex gap='30px'>
            <FormControl isInvalid={!!errors.name}>
              <InputGroup>
                <InputLeftElement
                  w="50px"
                  backgroundColor='#eee'
                  borderRadius='5px'
                  p="25px 10px"
                  pointerEvents="none" >
                  <FaRegUserCircle color={backgroundColor} />
                </InputLeftElement>
                <Input
                  {...register("name", {
                    required: "This is required"
                  })}
                  id='name'
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
                  backgroundColor='#eee'
                  borderRadius='5px'
                  p="25px 10px"
                  pointerEvents="none" >
                  <FaRegEnvelope color={backgroundColor2} />
                </InputLeftElement >
                <Input
                  {...register("email", {
                    required: "This is requiered"
                  })}
                  id='email'
                  type="email"
                  placeholder= {t("Common.FormInputs.email.label")}
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
                backgroundColor='#eee'
                borderRadius='5px'
                p="25px 10px"
                pointerEvents="none" >
                <FaBook color={backgroundColor3} />
              </InputLeftElement>
              <Input
                {...register("topic", {
                  required: "this is required"
                }
                )}
                id='topic'
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
          <FormControl isInvalid= {!!errors.textarea}>
            <Textarea
            {...register("textarea", {
              required:"this is required"
            })}
            id='textarea'
              mt="50px"
              borderRadius="5px"
              placeholder={t("Common.FormInputs.message.label")}
              size='m'
              minHeight="150px"
              p="20px"
            />
            <FormErrorMessage>
              {errors.textarea && errors.textarea.message}
            </FormErrorMessage>
          </FormControl>
          <Button bg="blue.500" _hover={{}} p="25px 40px" m="30px 0" type='submit'> {t("Common.Action.SEND")}</Button>

        </form>

      </Box>



    </Container>
  )
}

export default Contact