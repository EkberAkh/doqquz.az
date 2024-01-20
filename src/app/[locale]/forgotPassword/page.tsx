
'use client'
import React from 'react'
import { Box, Text, Flex, FormControl, InputGroup, InputLeftElement, Input, FormHelperText, Link, Button, Icon, FormErrorMessage } from '@chakra-ui/react'
import { useTranslations } from "next-intl";

import { FaArrowRight } from "react-icons/fa";
import { LockIcon } from '@chakra-ui/icons';
import { FaRegEnvelope } from "react-icons/fa6";
import { useForm } from 'react-hook-form';
import { useState } from 'react';

type FormData = {
  email: string;
  password: string;
};

const Login1: React.FC = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);


  const backgroundColor: string = isFocused ? 'blue' : 'gray';
  const t = useTranslations();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (values: FormData) => {
    console.log("salam");
  };

  return (
    <>

      <Box bg="white"  w={{base:"80%",lg:"600px"}} m="auto" pb="30px">
        <Flex justifyContent={{base:"justify-content",lg:"start"}}>
          <Text p={{base:"15px",lg:"15px 60px"}} color="gray.500" cursor="pointer"><Link _hover={{ color: "black" }} href="/az/login">{t("Auth.tabs.login")}</Link></Text>
          <Text p={{base:"15px",lg:"15px 60px"}} color="gray.500" cursor="pointer"> <Link _hover={{ color: "black" }} href="/az/register">{t("Auth.tabs.register")}</Link></Text>
        </Flex>

        <Flex alignItems="center" flexDirection="column" m="30px" gap="10px">
          <Text fontWeight="bold" fontSize="26px">{t("Auth.Login.title")}</Text>
          <Text>    {t.rich("Auth.Login.subTitle", {
            a: (chunks) => <a href="/az/register" style={{ color: "blue", cursor: "pointer" }}>{chunks}</a>,
            span: (chunks) => <span style={{ color: "gray" }}> {chunks}</span>
          })}</Text>
        </Flex>

        <Box w={{base:"80%",lg:"490px"}} m="auto">
          <FormControl>
            <form onSubmit={handleSubmit(onSubmit)} >
              <FormControl isInvalid={!!errors.email}>


                <InputGroup>
                  <InputLeftElement
                    w="50px"
                    backgroundColor='#eee'
                    borderRadius='5px'
                    p="25px 10px"
                    borderRight="1px solid white"
                    pointerEvents="none"
                     >
                    <FaRegEnvelope color={backgroundColor} />

                  </InputLeftElement>

                  <Input
                    {...register('email', {
                      required: 'This is required',
                      validate: {
                        containsAt: (value) => value.includes("@") && value.includes('.') || 'Format yalnisdir',
                      },
                    })}
                    id='email'
                    type="email"
                    placeholder="example@gmail.com"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    p="25px 70px"

                  />
                </InputGroup>
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>

              <Box
                mt="30px"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                {isHovered ? (
                  <Button w={{base:"80%",lg:"490px"}} backgroundColor="blue" color="white" _hover={{ backgroundColor: "blue" }} p="25px" type='submit'>{t("Auth.tabs.login")} <Icon as={FaArrowRight} /></Button>
                ) :
                  (<Button w={{base:"80%",lg:"490px"}} backgroundColor="blue" color="white" p="25px" type='submit'>{t("Auth.tabs.login")}  </Button>)}
              </Box>


            </form>
          </FormControl>
        </Box>
      </Box>
    </>
  )
}

export default Login1;

