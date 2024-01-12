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

interface IJobFilter {
  jobType:boolean
  locationInput:boolean
}
const JobsFilter: React.FC<IJobFilter> = ({jobType,locationInput}) => {
  const t = useTranslations();

  return (
    <Flex
      overflowX="hidden"
      overflowY="auto"
      flexWrap="wrap"
      
    >
      <Box
        backgroundColor="#fafafa"
        padding="24px"
        w="360px"
        display="flex"
        flexDirection="column"
        flexShrink={0}
      >
      {locationInput &&  <LocationInput />}
        <KeywordInput />
        <JobCategories />
       {jobType && <JobType /> } 
        <SalaryType />
        <CurrencyType />
        <Salary />

        <Button
        marginTop='16px'
          height="52px"
          _hover={{}}
          w="100%"
          color="#fff"
          backgroundColor="#2a41e8"
        >
          {t("Common.Action.SEARCH")}
        </Button>
      </Box>
    </Flex>
  );
};

export default JobsFilter;
