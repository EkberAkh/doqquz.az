"use client";
import { Box, Button, Flex } from "@chakra-ui/react";

import { useTranslations } from "next-intl";
import React, { useState } from "react";
import LocationInput from "./LocationInput";
import KeywordInput from "./KeywordInput";
import JobCategories from "./JobCategories";
import JobType from "./JobType";
import SalaryType from "./SalaryType";
import CurrencyType from "./CurrencyType";
import Salary from "./Salary";

interface IJobFilter {
  jobType: boolean;
  locationInput: boolean;
}
const JobsFilter: React.FC<IJobFilter> = ({ jobType, locationInput }) => {
  const t = useTranslations();
  const [selectedCurrency, setSelectedCurrency] = useState('');
  const [selectedJobCategory, setSelectedJobCategory] = useState('');

  const handleSearchClick = () => {
    console.log("Selected Currency:", selectedCurrency);
    console.log("Selected Job cat:", selectedJobCategory);
  };
  return (
    <Flex overflowX="hidden" overflowY="auto" flexWrap="wrap">
      <Box
        backgroundColor="#fafafa"
        padding="24px"
        w="360px"
        display="flex"
        flexDirection="column"
        flexShrink={0}
      >
        {locationInput && <LocationInput />}
        <KeywordInput />
        <JobCategories setSelectedJobCategory={setSelectedJobCategory} />
        {jobType && <JobType />}
        <SalaryType />
        <CurrencyType selectedCurrency={selectedCurrency} setSelectedCurrency={setSelectedCurrency}/>
        <Salary />

        <Button
          marginTop="16px"
          height="52px"
          _hover={{}}
          w="100%"
          color="#fff"
          backgroundColor="#2a41e8"
          onClick={handleSearchClick}
        >
          {t("Common.Action.SEARCH")}
        </Button>
      </Box>
    </Flex>
  );
};

export default JobsFilter;
