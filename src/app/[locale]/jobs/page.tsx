"use client";
import { Box, Flex, Img, Text } from "@chakra-ui/react";

import { useTranslations } from "next-intl";
import React, { useState } from "react";
import JobsFilter from "./JobsFilter";
import JobCards from "./JobCards";

const Jobs = () => {
  const [filterData, setFilterData] = useState<any>({});
  const handleFilterChange = (newFilterData: any) => {
    // Update the state with the new filter data
    setFilterData(newFilterData);
  };
  return (
    <Box display="flex" justifyContent='center' w="100%" flexWrap="wrap">
      <JobsFilter locationInput jobType onFilterChange={handleFilterChange} />
      <JobCards filterData={filterData}/>
    </Box>
  );
};

export default Jobs;
