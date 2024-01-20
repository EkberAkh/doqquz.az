"use client"
import { Button, Flex, Grid, HStack, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import Card from "./Card";

interface IJobCards {
  filterData: any;
}
const JobCards:React.FC<IJobCards> =  ({ filterData }) => {

  const t = useTranslations();
  const [allJobs, setAllJobs] = useState([]); 
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        // Construct the query parameters based on filterData
        const queryParams = new URLSearchParams(filterData);

        // Append the query parameters to the API endpoint
        const apiUrl =
          Object.keys(filterData).length > 0
            ? `https://neo-814m.onrender.com/v1/post/list?${queryParams.toString()}`
            : `https://neo-814m.onrender.com/v1/post/list`;

        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data.list);
        setAllJobs(data.list);
      } catch (error) {
        console.error('Fetching jobs failed:', error);
      }
    };

    fetchJobs();
  }, [filterData]);


  const pageCount = Math.ceil(allJobs.length / itemsPerPage);
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
  const currentJobs = allJobs.slice(indexOfFirstItem, indexOfLastItem);

  console.log(currentJobs);
  
  return (
    <>
      <Grid
      maxHeight='470px'
        padding="18px"
        templateColumns="1fr 1fr"
        gap="14px"
        width="calc(100% - 379px)"
      >
      
      {currentJobs.map((job: any) => (
          <Card
          imageUrl={job.user.imageUrl}
          id={job.id}
          key={job.id}
          title={job.title}
          minEstimatedBudget={job.minEstimatedBudget}
          maxEstimatedBudget={job.maxEstimatedBudget}
          type={job.type}
          currency={job.currency}
          createdAt={job.createdAt}
          companyName={job.company[0].name}
          city={job.location && job.location.city}
          />
        ))}
     
      </Grid>
      <HStack spacing="20px" justify="center" p="4">
        <Button onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1}>
          Prev
        </Button>
        {Array.from({ length: pageCount }, (_, i) => i + 1).map((number) => (
          <Button key={number} onClick={() => changePage(number)} isActive={number === currentPage}>
            {number}
          </Button>
        ))}
        <Button onClick={() => changePage(currentPage + 1)} disabled={currentPage === pageCount}>
          Next
        </Button>
      </HStack>
  
    </>
  );
};

export default JobCards;


