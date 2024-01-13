'use client'
import { Box, Flex, Text, Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiDollarCircle } from "react-icons/bi";
import { GoClock } from "react-icons/go";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { BsBagPlus } from "react-icons/bs";
import { useParams } from 'react-router-dom';


const WiewJobs = () => {
    // const {empid} = useParams();
    // const [empdata,empdataChange] = useState({});

    // useEffect(()=>{
    //     fetch("http://localhost:9000/posts/"+empid).then((res) => {
    //         return res.json();
    //     }).then((resp) => {
    //         empdataChange(resp);
    //         console.log(resp)
    //     }).catch((err) => {
    //         console.log(err.message);
    //     })
    // },[])
 
    return (
        <>
        <>
            <Box h="230px" bg="linear-gradient(to right, white , gray);">
                <Box w="1200px" m="auto">
                    <Flex justifyContent="space-between">
                        <Box pt="40px"  >
                            <Flex gap="30px">
                                <Box bg={"white"} p="30px" borderRadius="50%">
                                    <BsBagPlus  size="70px" color='blue'/>
                                </Box>
                                <Box mt="10px">
                                    <Text fontWeight="bold" fontSize="30px">hekim</Text>
                                    <Text fontWeight="bold" fontSize="20px" >doktor</Text>
                                    <Flex gap="10px" mt="10px">
                                        <FaMapMarkerAlt size="20px" />
                                        <Text > baku</Text>
                                    </Flex>
                                </Box>

                            </Flex>
                        </Box>
                        <Box p="24px" bg="white" m="50px">
                            <Text>AYLIQ</Text>
                            <Text fontSize="30px">500AZN</Text>
                        </Box>
                    </Flex>
                </Box>
            </Box>
            <Box w="1200px" m="50px auto" >
                <Flex>
                    <Box w="800px" >
                        <Text fontWeight="bold">Isin tesviri</Text>
                        <Text p="30px 40px 30px 0">islesin
                        </Text>
                        <Text fontWeight="bold" >Tələb olunan bacarıqlar</Text>
                        <Box p="30px 40px 0 0">
                            <Text>html</Text>

                        </Box>
                        <Text fontWeight="bold" p="30px 40px 30px 0">Müraciyyət üçün  </Text>
                        <Text>234354 zeng vur</Text>
                        <Flex p="30px 40px 30px 0" alignItems="center" justifyContent="space-between">
                            <Text >Maraqlıdır? Vakansiyanı paylaş!</Text>
                            <Box display="flex">
                                <Box ml="30px" bg="gray.100" p="18px" borderRadius="50%" cursor="pointer" _hover={{ bg: "green.300", color: "white" }}>
                                    <FaWhatsapp color='blue' size="18px" />
                                </Box>
                                <Box ml="30px" bg="gray.100" p="18px" borderRadius="50%" cursor="pointer" _hover={{ bg: "blue.300", color: "white" }}>
                                    <FaTwitter color='blue' size="18px" />
                                </Box>
                                <Box ml="30px" bg="gray.100" p="18px" borderRadius="50%" cursor="pointer" _hover={{ bg: "gray.300", color: "white" }}>
                                    <FaTelegram color='blue' size="18px" />
                                </Box>
                                <Box ml="30px" bg="gray.100" p="18px" borderRadius="50%" cursor="pointer" _hover={{ bg: "blue.300", color: "white" }}>
                                    <FaFacebookF color='blue' size="18px" />
                                </Box>
                            </Box>

                        </Flex>

                    </Box>
                    <Box >
                        <Button w="400px" p="25px 0" mb="30px">Muraciet et</Button>
                        <Text bg="gray.200" p="20px 40px" fontSize="20px">İş Detalları</Text>
                        <LocationItem icon={<FaMapMarkerAlt color="blue" size="20px" />} label="Ünvan" content="baku" />
                        <LocationItem icon={<BsBagPlus color="blue" size="20px" />} label="İş Növü" content="ayliq" />
                        <LocationItem icon={< BiDollarCircle color="blue" size="25px" />} label="Maaş" content="500azn" />
                        <LocationItem icon={<GoClock color="blue" size="22px" />} label="Paylaşıldığı Tarix" content="24.01.2019" />
                    </Box>
                </Flex>

            </Box>
            </>
        </>

    )
}

const LocationItem = ({ icon, label, content }) => (
    <Flex p="8px 10px" gap="10px" alignItems="center" >
        {icon}
        <Box mt="20px" mb="10px">
            <Text fontWeight="bold">{label}</Text>
            <Text>{content}</Text>
        </Box>
    </Flex>
);

export default WiewJobs;
