"use client";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import JobsFilter from "../jobs/JobsFilter";
import { useTranslations } from "next-intl";
import Card from "./Card";
interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  expectedSalary: string;
  salaryType: string;

}
const Employees = () => {
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
        console.error('Fetching jobs failed:', error);
      }
    };

    fetchJobs();
  }, [filterData]);

  
  console.log(filterData);
  
  return (
    <Box display="flex" w="100%" flexWrap="wrap">
      <JobsFilter onFilterChange={handleFilterChange} locationInput={false} jobType={false} />
      <Grid
        padding="18px"
        templateColumns="1fr 1fr"
        gap="14px"
        width="calc(100% - 379px)"
      >
   {employees.map((employee) =>(
    <Card  key={employee.id} id={employee.id} firstName={employee.firstName} expectedSalary={employee.expectedSalary} lastName={employee.lastName} salaryType={employee.salaryType}/>
   ))}
      </Grid>
    </Box>
  );
};

export default Employees;
