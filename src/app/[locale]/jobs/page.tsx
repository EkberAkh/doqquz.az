"use client";
import { Box, Flex, Img, Text } from "@chakra-ui/react";

import { useTranslations } from "next-intl";
import React from "react";
import JobsFilter from "./JobsFilter";

const Jobs = () => {
  const t = useTranslations();

  return (
    <Box display="flex" w="100%" flexWrap="wrap">
      <JobsFilter jobType />
      <Flex
        justifyContent="center"
        alignItems="center"
        width="calc(100% - 379px)"
        flexDirection="column"
      >
        <Img marginBottom="16px" src="../../../../images/noRecord.png" />
        <Text>
          {t.markup("Common.noRecord", {
            emoji: (chunks) => `<Emoji>${chunks}</Emoji>`,
            span: (chunks) => `<span>${chunks}</span>`,
            b: (chunks) => `<b>${chunks}</b>`,
          })}
        </Text>
      </Flex>
    </Box>
  );
};

export default Jobs;
