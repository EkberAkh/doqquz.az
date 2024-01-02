"use client";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import JobsFilter from "../jobs/JobsFilter";
import { useTranslations } from "next-intl";
import Card from "./Card";

const Employees = () => {
  const t = useTranslations();
  return (
    <Box display="flex" w="100%" flexWrap="wrap">
      <JobsFilter jobType={false} />
      <Grid
        padding="18px"
        templateColumns="1fr 1fr"
        gap="14px"
        width="calc(100% - 379px)"
      >
        <Card />
        <Card />
      </Grid>
    </Box>
  );
};

export default Employees;
