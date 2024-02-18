"use client";
import { Box, Button, Flex, Img, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, useMediaQuery } from "@chakra-ui/react";

import { useTranslations } from "next-intl";
import React, { useState } from "react";
import JobsFilter from "./JobsFilter";
import JobCards from "./JobCards";
import { SettingsIcon } from "@chakra-ui/icons";

const Jobs = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [maxWidth1100Media] = useMediaQuery("(max-width: 1100px)");
  const [filterData, setFilterData] = useState<any>({});
  const handleFilterChange = (newFilterData: any) => {
    // Update the state with the new filter data
    setFilterData(newFilterData);
  };
  console.log(filterData);
  
  return (
    <Box display="flex" w="100%" flexWrap="wrap" position="relative">
      {maxWidth1100Media ? (
        <>
           <JobCards filterData={filterData} />
           <Modal onClose={onClose} size={"full"} isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <JobsFilter
                locationInput
                jobType
                onFilterChange={handleFilterChange}
              />
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        </>
  
      ) : (
        <>
          <JobsFilter
            locationInput
            jobType
            onFilterChange={handleFilterChange}
          />
          <JobCards filterData={filterData} />
        </>
      )}
   
      <Button
        position="fixed"
        bottom="20px"
        left="20px"
        onClick={() => onOpen()}
        borderRadius="100px"
        width="50px"
        height="50px"
        bgColor="#2a41e8"
        display={maxWidth1100Media ? 'block' : 'none'}
      ><SettingsIcon/></Button>
    </Box>
  );
};

export default Jobs;
