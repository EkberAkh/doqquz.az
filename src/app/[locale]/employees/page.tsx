"use client";
import {
  Box,
  Button,
  Grid,
  HStack,
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
import NotFound from "../company/NotFound";
interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  expectedSalary: string;
  salaryType: string;
  user: {
    id: number;
    imageUrl: string;
  };
}
const Employees = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [maxWidth1100Media] = useMediaQuery("(max-width: 1100px)");
  const [filterData, setFilterData] = useState<any>({});

  const [employees, setEmployees] = useState<Employee[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const t = useTranslations();
  const handleFilterChange = (newFilterData: any) => {
    // Update the state with the new filter data
    setFilterData(newFilterData);
    setCurrentPage(1);
  };
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

  console.log(employees);

  const pageCount = Math.ceil(employees.length / itemsPerPage);
  const changePage = (pageNumber: number) => {
    if (pageNumber < 1) {
      setCurrentPage(1); // Stay on the first page if the page number goes below 1
    } else if (pageNumber > pageCount) {
      setCurrentPage(pageCount); // Stay on the last page if the page number goes beyond the total page count
    } else {
      setCurrentPage(pageNumber);
    }
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentEmployees = employees.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <Box display="flex" justifyContent="center" w="100%" flexWrap="wrap">
      {maxWidth1100Media ? (
        <>
          <Grid
            padding="18px"
            templateColumns={ currentEmployees.length || maxWidth1100Media ? "2fr" : "1fr 1 fr" }
            gap="14px"
            width={ maxWidth1100Media  ? '100%' : "calc(100% - 379px)"}
            maxHeight={maxWidth1100Media ? "auto" : "470px"}
          >
            {currentEmployees.length===0 ? <NotFound message={""}/> : currentEmployees.map((employee) => (
              <Card
                key={employee.id}
                id={employee.id}
                userId={employee.user.id}
                firstName={employee.firstName}
                expectedSalary={employee.expectedSalary}
                lastName={employee.lastName}
                salaryType={employee.salaryType}
                imageUrl={employee.user.imageUrl}
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
            {currentEmployees.map((employee) => (
              <Card
                key={employee.id}
                id={employee.id}
                userId={employee.user.id}
                firstName={employee.firstName}
                expectedSalary={employee.expectedSalary}
                lastName={employee.lastName}
                salaryType={employee.salaryType}
                imageUrl={employee.user.imageUrl}
              />
            ))}
          </Grid>
          <HStack spacing="20px" justify="center" p="4">
            <Button
              onClick={() => changePage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Prev
            </Button>
            {Array.from({ length: pageCount }, (_, i) => i + 1).map(
              (number) => (
                <Button
                  key={number}
                  onClick={() => changePage(number)}
                  isActive={number === currentPage}
                >
                  {number}
                </Button>
              )
            )}
            <Button
              onClick={() => changePage(currentPage + 1)}
              disabled={currentPage === pageCount}
            >
              Next
            </Button>
          </HStack>
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
        display={maxWidth1100Media ? "block" : "none"}
      >
        <SettingsIcon />
      </Button>
    </Box>
  );
};

export default Employees;
