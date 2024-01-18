"use client"
import { Button, Flex, Grid, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import Card from "./Card";

interface IJobCards {
  filterData: any;
}
const JobCards:React.FC<IJobCards> =  ({ filterData }) => {

  const t = useTranslations();
  const [allJobs, setAllJobs] = useState([]); 
  console.log(filterData);
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


console.log(allJobs);

  
  return (
    <>
      <Grid
        padding="18px"
        templateColumns="1fr 1fr"
        gap="14px"
        width="calc(100% - 379px)"
      >
      
       {allJobs.map((job:any) => (
        <Card
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
      {/* <Flex justifyContent="center" alignItems="center" marginTop="20px">
        <Button
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
          marginRight="12px"
        >
          Previous
        </Button>
        <Text>
          Page {currentPage} of {totalPages}
        </Text>
        <Button
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === totalPages}
          marginLeft="12px"
        >
          Next
        </Button>
      </Flex> */}


      {/* <Flex
        justifyContent="center"
        alignItems="center"
        width="calc(100% - 379px)"
        flexDirection="column"
      >
        <Img marginBottom="16px" src="../../../../images/noRecord.png" />
        <Box textAlign="center">
          {t.rich("Common.noRecord", {
            div: (chunks) => <div>{chunks}</div>,
            span: (chunks) => <span>{chunks}</span>,
          })}
        </Box>
      </Flex> */}
    </>
  );
};

export default JobCards;
