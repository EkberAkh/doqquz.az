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
  onFilterChange: (filterData: any) => void;
}
const JobsFilter: React.FC<IJobFilter> = ({ jobType, locationInput,onFilterChange  }) => {
  const t = useTranslations();
  const [selectedCurrency, setSelectedCurrency] = useState('');
  const [selectedJobCategory, setSelectedJobCategory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedSalary, setSelectedSalary] = useState('');
  const [selectedJobTypes, setSelectedJobTypes] = useState<string[]>([]);
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);
  const [salaryRange, setSalaryRange] = useState({ min: 1, max: 100000 });
  const handleSalaryChange = (min: number, max: number) => {
    setSalaryRange({ min, max });
  };
  const handleSearchClick = () => {
    const filterData = {
      currency: selectedCurrency,
      category: selectedJobCategory,
      locObj: selectedLocation,
      salaryType: selectedSalary,
      type: selectedJobTypes[0] === undefined ? '' :selectedJobTypes[0]  ,
      keyword: selectedKeywords[0] === undefined ? '': selectedKeywords[0],
      maxEstimatedBudget: salaryRange.max,
      minEstimatedBudget:salaryRange.min 
    };

    onFilterChange(filterData);
  };

  return (
    <Flex overflowX="hidden"  overflowY="auto" flexWrap="wrap">
      <Box
      gap='40px'
        backgroundColor="#fafafa"
        padding="24px"
        w="360px"
        display="flex"
        flexDirection="column"
        flexShrink={0}
      >
        {locationInput && <LocationInput setSelectedLocation={setSelectedLocation} />}
        <KeywordInput setSelectedKeywords={setSelectedKeywords} />
        <JobCategories setSelectedJobCategory={setSelectedJobCategory} />
        {jobType && <JobType selectedJobTypes={selectedJobTypes} setSelectedJobTypes={setSelectedJobTypes} />}
        <SalaryType setSelectedSalary={setSelectedSalary}   />
        <CurrencyType selectedCurrency={selectedCurrency} setSelectedCurrency={setSelectedCurrency}/>
        <Salary  onSalaryChange={handleSalaryChange}/>

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
