'use client'
import { useTranslations } from 'next-intl'
import { Card, Box, CardBody, CardHeader, Heading, Flex, Button, Text, Input, useDisclosure, Center } from '@chakra-ui/react'
import { colorObjects } from '@/consts'
import { MdOutlineAccountCircle, MdOutlineFaceUnlock, MdOutlineDesktopMac, MdOutlineLibraryBooks } from "react-icons/md";
import 'react-phone-input-2/lib/style.css'
import ScrollToTop from '@/components/ScrollToTop'
import { useSearchParams } from "next/navigation";
import { useEffect } from 'react';

import { useState } from 'react';

const Profile = () => {
    const t = useTranslations()

    const searchParams = useSearchParams();
    const companyId = searchParams.get("companyId");
    console.log(companyId);
    const [data, setData] = useState(null); 
    const [data1,setData1] = useState(null)
    
    async function fetchData() {
        try {
            const response = await fetch(`https://neo-814m.onrender.com/v1/user/${companyId}`);
            const data = await response.json();
            setData(data)
        } catch (error) {
            console.error(error);
        }
        try {
            const response = await fetch(`https://neo-814m.onrender.com/v1/company/userId/${companyId}`);
            const data1 = await response.json();
            setData1(data1)
            console.log(data1);
        } catch (error) {
            console.error(error);
        }
    }
    
    function YourComponent() {
        useEffect(() => {
            fetchData();
        }, []);
    }
    
    YourComponent();



    return (
        <Flex justify={'center'}>
            <Box mx='15px' width={'81%'}>
                <Card marginTop='30px' boxShadow='0 6px 10px rgba(1, 0, 0, 0.2)'>
                    <CardHeader borderBottom='1px solid #e4e4e4' display='flex' flexDirection='row' alignItems='center' justifyContent='space-between'>
                        <Flex align={'center'}>
                            <MdOutlineAccountCircle color='rgb(42, 65, 232)' fontSize='1.4em' />
                            <Heading ml={'8px'} fontSize='1rem' fontWeight={700}>{t('Profile.titles.contactInfo')}</Heading>
                        </Flex>
                        <Box bgColor='#e0f5d7' color='#449626' p='5px' borderRadius='5px'>
                            {t('Common.Role.COMPANY')}
                        </Box>
                    </CardHeader>

                    <CardBody p='30px'>
                        <Flex flexDirection={{base:"column",lg:'row'}} >
                            <Box w='138px' h='138px' borderRadius='100px' bgColor={colorObjects.gray.border} marginRight='30px' border={'1px solid #2a41e8'} mb={{base:"30px",lg:"0"}}>

                            </Box>

                           {data && <Box w='87%'>
                                <Flex columnGap='30px' mb='30px' flexDirection={{base:'column',lg:"row"}} rowGap='30px'>
                                    <Box w={{base:"100%",lg:"50%"}}>
                                        <Text mb='20px' fontSize='1.3rem'>{t('Common.FormInputs.email.label')}</Text>
                                        <Text>{data.email}</Text>
                                    </Box>

                                    <Box w={{base:"100%",lg:"50%"}}>
                                        <Text mb='20px' fontSize='1.3rem'>{t('Common.FormInputs.phoneNumber.label')}</Text>
                                        <Text> ----</Text>
                                    </Box>

                                </Flex>

                            </Box>}
                        </Flex>
                    </CardBody>
                </Card>

             <Card marginTop='30px' boxShadow='0 6px 10px rgba(1, 0, 0, 0.2)'>
                    <CardHeader borderBottom='1px solid #e4e4e4' display='flex' alignItems='center' justifyContent='space-between'>
                        <Flex align={'center'}>
                            <MdOutlineFaceUnlock color='rgb(42, 65, 232)' fontSize='1.4em' />
                            <Heading ml={'8px'} fontSize='1rem' fontWeight={700}> Profil Məlumatı</Heading>
                        </Flex>
                        <Button bgColor='#e0f5d7' color='#449626' p='5px' borderRadius='5px'>
                            Change
                        </Button>

                    </CardHeader>

                  {data1 &&  <CardBody p='30px'>
                        <Flex >

                            <Box w='100%'>
                                <Flex columnGap='30px' mb='30px' flexWrap='wrap' flexDirection={{base:"column",lg:"row"}}>
                                    <Box w={{base:"100%",lg:"30%"}}>
                                        <Text mb='20px' fontSize='1.3rem'>{t('Profile.ProfileInfo.name')}</Text>
                                        <Text mb='20px' fontSize='1.3rem'>{data1.name}</Text>
                                    </Box>
                                    <Box w={{base:"100%",lg:"30%"}}>
                                        <Text mb='20px' fontSize='1.3rem'> {t('Common.FormInputs.websiteUrl.label')}</Text>
                                        <Text mb='20px' fontSize='1.3rem'>----</Text>

                                    </Box>
                                    <Box w={{base:"100%",lg:"30%"}}>
                                        <Text mb='20px' fontSize='1.3rem'> {t("Profile.ProfileInfo.establishmentDate")}</Text>
                                        <Text mb='20px' fontSize='1.3rem'>----</Text>

                                    </Box>
                                    <Box w={{base:"100%",lg:"30%"}} mt='30px'>
                                        <Text mb='20px' fontSize='1.3rem'>{t('Common.FormInputs.description.label')}</Text>
                                        <Text mb='20px' fontSize='1.3rem'>-----</Text>
                                    </Box>
                                
                                </Flex>

                            </Box>
                        </Flex>
                    </CardBody>
}
                </Card>

            </Box>
            <ScrollToTop />
        </Flex>
    )
}

export default Profile;