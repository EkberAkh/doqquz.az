"use client";
import {
  Button,
  Flex,
  Grid,
  HStack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import NotFound from "../company/NotFound";

interface IJobCards {
  filterData: any;
}
const JobCards: React.FC<IJobCards> = ({ filterData }) => {
  const [maxWidth1100Media] = useMediaQuery("(max-width: 1100px)");
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
        setAllJobs(data.list);
      } catch (error) {
        console.error("Fetching jobs failed:", error);
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
 
  return (
    <>

      <Grid
        padding="18px"
        templateColumns={maxWidth1100Media || currentJobs.length===0  ? "2fr" : "1fr 1fr"}
        gap="14px"
        width={maxWidth1100Media ? "100%" : "calc(100% - 379px)"}
        maxHeight={maxWidth1100Media ? "auto" : "470px"}
      >
        {currentJobs.length===0 ? <NotFound message={""}/> : currentJobs.map((job: any) => (
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
      <HStack
        spacing="20px"
        justify="center"
        p="4"
        display={maxWidth1100Media || currentJobs.length===0 ? "none" : "block"}
        margin="0 auto"
      >
        <Button
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
          marginRight="15px"
        
        >
          Prev
        </Button>
        {Array.from({ length: pageCount }, (_, i) => i + 1).map((number) => (
          <Button
            key={number}
            onClick={() => changePage(number)}
            isActive={number === currentPage}
          >
            {number}
          </Button>
        ))}
        <Button
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === pageCount}
          marginLeft="15px"
        >
          Next
        </Button>
      </HStack>
    </>
  );
};

export default JobCards;
