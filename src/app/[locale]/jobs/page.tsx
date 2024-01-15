"use client";
import { Box, Flex, Img, Text } from "@chakra-ui/react";

import { useTranslations } from "next-intl";
import React from "react";
import JobsFilter from "./JobsFilter";
import JobCards from "./JobCards";

const Jobs = () => {

  return (
    <Box display="flex" w="100%" flexWrap="wrap">
      <JobsFilter locationInput jobType />
      <JobCards/>
    </Box>
  );
};

export default Jobs;
