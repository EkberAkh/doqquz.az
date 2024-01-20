"use client";
import {
  Box,
  Button,
  Grid,
  GridItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import JobsFilter from "../jobs/JobsFilter";
import { useTranslations } from "next-intl";
import Card from "./Card";
import { SettingsIcon } from "@chakra-ui/icons";
interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  expectedSalary: string;
  salaryType: string;
  user: {
    id: number;
  };
}
const Employees = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [maxWidth1100Media] = useMediaQuery("(max-width: 1100px)");
  const [filterData, setFilterData] = useState<any>({});
  const handleFilterChange = (newFilterData: any) => {
    // Update the state with the new filter data
    setFilterData(newFilterData);
  };
  const [employees, setEmployees] = useState<Employee[]>([]);
  const t = useTranslations();
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        // Construct the query parameters based on filterData
        const queryParams = new URLSearchParams(filterData);

        // Append the query parameters to the API endpoint
        const apiUrl =
          Object.keys(filterData).length > 0
            ? `https://neo-814m.onrender.com/v1/jobseeker/list?${queryParams.toString()}`
            : `https://neo-814m.onrender.com/v1/jobseeker/list?skip=0&take=9`;

        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data.list);
        setEmployees(data.list);
      } catch (error) {
        console.error("Fetching jobs failed:", error);
      }
    };

    fetchJobs();
  }, [filterData]);

  return (
    <Box display="flex" w="100%" flexWrap="wrap">
      {maxWidth1100Media ? (
        <>
          <Grid
            padding="18px"
            templateColumns={{base:"2fr",lg:"1fr 1 fr"}}
            gap="14px"
            width={{base:"100%",lg:"calc(100% - 379px)"}}
            
          >
            {employees.map((employee) => (
              <Card
                key={employee.id}
                id={employee.id}
                userId={employee.user.id}
                firstName={employee.firstName}
                expectedSalary={employee.expectedSalary}
                lastName={employee.lastName}
                salaryType={employee.salaryType}
              />
            ))}
          </Grid>
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
            onFilterChange={handleFilterChange}
            locationInput={false}
            jobType={false}
          />
          <Grid
            padding="18px"
            templateColumns="1fr 1fr"
            gap="14px"
            width="calc(100% - 379px)"
          >
            {employees.map((employee) => (
              <Card
                key={employee.id}
                id={employee.id}
                userId={employee.user.id}
                firstName={employee.firstName}
                expectedSalary={employee.expectedSalary}
                lastName={employee.lastName}
                salaryType={employee.salaryType}
              />
            ))}
          </Grid>
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
      >
        <SettingsIcon />
      </Button>
    </Box>
  );
};

export default Employees;
