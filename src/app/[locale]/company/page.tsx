"use client";
import { Flex, FormControl } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import CompanyItem from "./CompanyItem";
import Search from "./SearchButton";
import NotFound from "./NotFound";

interface ICompanyProps {
  name: string;
  id: number;
  user: {
    id: number;
  };
}

export default function Company() {
  const [companies, setCompanies] = useState<ICompanyProps[]>([]);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  useEffect(
    function () {
      async function fetchCompany() {
        try {
          setError("");
          let res = await fetch(
            `https://neo-814m.onrender.com/v1/company/list?search=${query}`
          );

          if (!res.ok) {
            throw new Error("Something went wrong with fetching companies");
          }
          const data = await res.json();
          if (data.list.length === 0) {
            throw new Error("not found");
          }

          setCompanies(data.list);
          console.log(data);
        } catch (err) {
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError("An unexpected error occurred");
          }
        }
      }
      fetchCompany();
    },
    [query]
  );

  return (
    <>
      <Flex justify="center">
        <FormControl w="77%">
          <Search query={query} setQuery={setQuery} />
          {!error && <CompanyItem companies={companies} />}
          {error && <NotFound message={error} />}
        </FormControl>
      </Flex>
    </>
  );
}
