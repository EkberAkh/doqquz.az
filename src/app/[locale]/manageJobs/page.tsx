'use client'
import { useState } from 'react';
import { Box, Flex, Text, Link } from '@chakra-ui/react';
import React from 'react'
import { useEffect } from "react";
import { BiAddToQueue } from "react-icons/bi";
import { MdOutlineDateRange } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { FaPencil } from "react-icons/fa6";



const ManageJobs = () => {
    const [jobdata, setJobdata] = useState([]);

    useEffect(() => {
        fetch("https://neo-814m.onrender.com/v1/post/userId/2").then((res) => {
            return res.json();
        }).then((resp) => {
            setJobdata(resp);
            console.log(resp)
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
  
    return (
        <Box w="1200px"  m="auto" pb="100px">
            <Text m="30px 0" fontWeight="bold" fontSize="30px">Vakansiyaları idarə et</Text>
            <Box  boxShadow="1px 1px 5px 1px gray">
                <Flex gap="10px" p="30px">
                    <BiAddToQueue color='blue' size="20px" />
                    <Text fontWeight="bold" fontSize="18px">Vakansiya siyahım</Text>
                </Flex>
                {jobdata && jobdata.map((item)=> (
                    <>
                       <hr></hr>
                       <Box p="30px">
                           <Flex gap="10px">
                               <Link fontWeight="bold" fontSize="18px" > {item.title}</Link>
                               <Text
                                   borderRadius="5px"
                                   fontWeight="bold"
                                   bg="gray.100"
                                   color="green"
                                   p=" 3px 5px">
                                   Aktiv</Text>
                           </Flex>
                           <Flex m="15px 20px" gap="1px" alignItems="center">
                               <MdOutlineDateRange />
                               <Text mt="3px">{item.createdAt} tarixinde paylasilib</Text>
                           </Flex>
                           <Flex alignItems="center" gap="16px">
                               <Box bg="blue.100" p="10px" borderRadius="6px">
                                   <Flex gap="15px" alignItems="center">
                                       <FaUserFriends />
                                       <Text>Namizedleri idare et</Text>
                                       <Text borderRadius="50%" bg="gray.400" fontSize="14px" color="white" p="0 5px ">0</Text>
                                   </Flex>
                               </Box>
                               <Box  borderRadius="50%" p="6px 6px" boxShadow="1px 1px 5px 1px gray">
                                   <FaPencil  size="24px"/>
                               </Box>
                               <Box  borderRadius="50%" p="3px 4px" boxShadow="1px 1px 5px 1px gray">
                                   <MdDeleteOutline size="30px"  />
                               </Box>
                              
                           </Flex>
                       </Box>
                       </>
                   
                ))}
             
            </Box>

        </Box>
    )
}

export default ManageJobs;
