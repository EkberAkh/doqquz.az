'use client'
import { Button, Card, Flex, FormControl, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import React, { useState, useEffect } from 'react'
import CompanyItem from './CompanyItem';
import CompanyFooter from './CompanyFooter';
import Search from './SearchButton';

interface ICompanyProps {
    name: string;
    id: number,
}

const Company = () => {
    const [companies, setCompanies] = useState<ICompanyProps[]>([]);
    const [error, setError] = useState('')
    const [query,setQuery] = useState('')
    useEffect(function () {
        async function fetchCompany() {
            try {
                // setIsLoading(true);
                const res = await fetch(`https://neo-814m.onrender.com/v1/company/list?search=${query}`)

                if (!res.ok) {
                    throw new Error('Something went wrong with fetching companies')
                }
                const data = await res.json();
                setCompanies(data.list)
                // setIsLoading(false)
            } catch (err) {
                setError(err.message)
            }

        }
        fetchCompany();
    }, [query])
    return (
        <>
            <Flex justify='center'>
                <FormControl w='77%'>
                    <Search query={query} setQuery={setQuery}/>
                    {<CompanyItem companies={companies} />}
                </FormControl>
            </Flex>
            {/* <CompanyFooter /> */}
        </>
    )
}

export default Company
