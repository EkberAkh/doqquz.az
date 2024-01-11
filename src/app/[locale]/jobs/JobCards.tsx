import { StarIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Grid,
  GridItem,
  Heading,
  Img,
  Text,
} from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import Card from "./Card";

const JobCards = () => {
  const t = useTranslations();

  return (
    <>
      <Grid
        padding="18px"
        templateColumns="1fr 1fr"
        gap="14px"
        width="calc(100% - 379px)"
      >
        <Card/>
      
      </Grid>
      {/* <Flex
        justifyContent="center"
        alignItems="center"
        width="calc(100% - 379px)"
        flexDirection="column"
      >
        <Img marginBottom="16px" src="../../../../images/noRecord.png" />
        <Box textAlign="center">
          {t.rich("Common.noRecord", {
            div: (chunks) => <div>{chunks}</div>,
            span: (chunks) => <span>{chunks}</span>,
          })}
        </Box>
      </Flex> */}
    </>
  );
};

export default JobCards;
