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
  const [employees, setEmployees] = useState<Employee[]>([]);
  const t = useTranslations();
  useEffect(() => {
    // Function to fetch job data
    const fetchJobs = async () => {
      try {
        const response = await fetch('https://neo-814m.onrender.com/v1/jobseeker/list?skip=0&take=9');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setEmployees(data.list)
       
      } catch (error) {
        console.error('Fetching jobs failed:', error);
      }
    };
    fetchJobs();
  }, []);

  
  return (
    <Box display="flex" w="100%" flexWrap="wrap">
      <JobsFilter locationInput={false} jobType={false} />
      <Grid
        padding="18px"
        templateColumns="1fr 1fr"
        gap="14px"
        width="calc(100% - 379px)"
      >
   {employees.map((employee) =>(
    <Card key={employee.id} firstName={employee.firstName} expectedSalary={employee.expectedSalary} lastName={employee.lastName} salaryType={employee.salaryType}/>
   ))}
      </Grid>
    </Box>
  );
};

export default Employees;
