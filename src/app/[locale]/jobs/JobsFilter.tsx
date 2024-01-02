"use client";
import { Box, Button, Flex } from "@chakra-ui/react";

import { useTranslations } from "next-intl";
import React from "react";
import LocationInput from "./LocationInput";
import KeywordInput from "./KeywordInput";
import JobCategories from "./JobCategories";
import JobType from "./JobType";
import SalaryType from "./SalaryType";
import CurrencyType from "./CurrencyType";
import Salary from "./Salary";
const JobsFilter = () => {
  const t = useTranslations();

  return (
    <Flex
      overflowX="hidden"
      overflowY="auto"
      flexWrap="wrap"
      height="calc(100vh - 82px)"
    >
      <Box
        backgroundColor="#fafafa"
        padding="24px"
        w="360px"
        display="flex"
        flexDirection="column"
        flexShrink={0}
      >
        <LocationInput />
        <KeywordInput />
        <JobCategories />
        <JobType />
        <SalaryType />
        <CurrencyType />
        <Salary />

        <Button
          height="52px"
          _hover={{}}
          margin="0 0 12px 12px"
          left="0"
          w="352px"
          bottom="0"
          color="#fff"
          position="fixed"
          backgroundColor="#2a41e8"
        >
          {t("Common.Action.SEARCH")}
        </Button>
      </Box>
    </Flex>
  );
};

export default JobsFilter;
