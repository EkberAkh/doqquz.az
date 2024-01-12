'use client'
import { Button, Card, Flex, FormControl, Input, InputGroup, InputRightElement, VStack,Text } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import React, { useState, useEffect } from 'react'
import CompanyItem from './CompanyItem';
import CompanyFooter from './CompanyFooter';
import Search from './SearchButton';
import { log } from 'console';
import NotFound from './NotFound';

interface ICompanyProps {
    name: string;
    id: number,
}

export default function Company() {
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
                if(data.list.length === 0 ) {
                    throw new Error('not found')
                }

                setCompanies(data.list)
                console.log(data);
                
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
                    {!error && <CompanyItem companies={companies} />}
                    {error && <NotFound message={error}/>}
                </FormControl>
            </Flex>
            {/* <CompanyFooter /> */}
        </>
    )
}
