'use client'
import { useTranslations } from 'next-intl'
import { Card, Box, CardBody, CardHeader, Heading, Flex, Button, Text, Input, useDisclosure, Center, Avatar } from '@chakra-ui/react'
import { MdOutlineAccountCircle, MdOutlineFaceUnlock, MdOutlineDesktopMac, MdOutlineLibraryBooks } from "react-icons/md";
import 'react-phone-input-2/lib/style.css'
import ScrollToTop from '@/components/ScrollToTop'
import { useSearchParams } from "next/navigation";
import { useEffect } from 'react';

import { useState } from 'react';

const Profile = () => {
    const t = useTranslations()

    const searchParams = useSearchParams();
    const jobId = searchParams.get("jobId");
    const [data, setData] = useState(null); 
    const [data1,setData1] = useState(null)
    let role = localStorage.getItem("role");
    async function fetchData() {
        try {
            const response = await fetch(`https://neo-814m.onrender.com/v1/jobseeker/userId/${jobId}`);
            const data = await response.json();
            setData(data)
        } catch (error) {
            console.error(error);
        }
        try {
            const response = await fetch(`https://neo-814m.onrender.com/v1/user/${jobId}`);
            const data1 = await response.json();
            setData1(data1)
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

    console.log('data' , data);
    console.log('data1', data1);


    return (
        <Flex justify={'center'}>
            <Box mx='15px' width={'81%'}>
                <Card marginTop='30px' boxShadow='0 6px 10px rgba(1, 0, 0, 0.2)'>
                    <CardHeader borderBottom='1px solid #e4e4e4' display='flex' flexDirection='row' alignItems='center' justifyContent='space-between'>
                        <Flex align={'center'}>
                            <MdOutlineAccountCircle color='rgb(42, 65, 232)' fontSize='1.4em' />
                            <Heading ml={'8px'} fontSize='1rem' fontWeight={700}>{t('Profile.titles.contactInfo')}</Heading>
                        </Flex>
                     
                    </CardHeader>

                    <CardBody p='30px'>
                        <Flex >
                            <Avatar src={data1?.imageUrl} size='2xl' marginRight='30px' />
                            {/* <Box w='138px' h='138px' borderRadius='100px' bgColor={colorObjects.gray.border} marginRight='30px' border={'1px solid #2a41e8'}>

                            </Box> */}

                           {data1 && <Box w='87%'>
                                <Flex columnGap='30px' mb='30px'>
                                    <Box w='50%'>
                                        <Text mb='20px' fontSize='1.3rem'>{t('Common.FormInputs.email.label')}</Text>
                                        <Text>{data1.email}</Text>
                                    </Box>

                                    <Box w='50%'>
                                        <Text mb='20px' fontSize='1.3rem'>{t('Common.FormInputs.phoneNumber.label')}</Text>
                                        <Text> +{data1?.contactNumber}</Text>
                                    </Box>

                                </Flex>

                            </Box>}
                        </Flex>
                    </CardBody>
                </Card>

            {data && <Card marginTop='30px' boxShadow='0 6px 10px rgba(1, 0, 0, 0.2)'>
                    <CardHeader borderBottom='1px solid #e4e4e4' display='flex' alignItems='center' justifyContent='space-between'>
                        <Flex align={'center'}>
                            <MdOutlineFaceUnlock color='rgb(42, 65, 232)' fontSize='1.4em' />
                            <Heading ml={'8px'} fontSize='1rem' fontWeight={700}> Profil Məlumatı</Heading>
                        </Flex>
                       

                    </CardHeader>

                    <CardBody p='30px'>
                        <Flex >

                            <Box w='100%'>
                                <Flex columnGap='30px' mb='30px' flexWrap='wrap'>
                                    <Box w='30%'>
                                        <Text mb='20px' fontSize='1.3rem'>{t('Profile.ProfileInfo.name')}</Text>
                                        <Text mb='20px' fontSize='1.3rem'>{data.firstName}</Text>
                                    </Box>
                                    <Box w='30%'>
                                        <Text mb='20px' fontSize='1.3rem'>Soyad</Text>
                                        <Text mb='20px' fontSize='1.3rem'>{data.lastName}</Text>

                                    </Box>
                                    <Box w='30%'>
                                        <Text mb='20px' fontSize='1.3rem'>{t('Profile.ProfileInfo.birthday')}</Text>
                                        <Text mb='20px' fontSize='1.3rem'>----</Text>

                                    </Box>
                                    <Box w='30%' mt='30px'>
                                        <Text mb='20px' fontSize='1.3rem'>{t('Common.GENDER.label')}</Text>
                                        <Text mb='20px' fontSize='1.3rem'>-----</Text>
                                    </Box>
                                    <Box w='30%' mt='30px'>
                                        <Text mb='20px' fontSize='1.3rem'>{t('Common.SalaryType.label')}</Text>
                                        <Text mb='20px' fontSize='1.3rem'>-----</Text>
                                    </Box>
                                    <Box w='30%' mt='30px'>
                                        <Text mb='20px' fontSize='1.3rem'>{t('Profile.ProfileInfo.expectedSalary')}</Text>
                                        <Text mb='20px' fontSize='1.3rem'>-----</Text>
                                    </Box>
                                </Flex>

                            </Box>
                        </Flex>
                    </CardBody>
                </Card>
}

                <Card mt={'30px'} boxShadow='0 6px 10px rgba(1, 0, 0, 0.2)'>
                    <CardHeader borderBottom='1px solid #e4e4e4'>
                        <Flex align={'center'}>
                            <MdOutlineDesktopMac color='rgb(42, 65, 232)' fontSize='1.4em' />
                            <Heading ml={'8px'} fontSize='1rem' fontWeight={700}> {t('Profile.titles.education')}</Heading>
                        </Flex>
                    </CardHeader>
                    <CardBody>
                        <Center flexDir={'column'}>
                            <Text m={'2rem 0 1.5rem'}>Bu bölmədə heç bir qeyd yoxdur</Text>

                        </Center>
                    </CardBody>
                </Card>


                <Card mt={'30px'} boxShadow='0 6px 10px rgba(1, 0, 0, 0.2)'>
                    <CardHeader borderBottom='1px solid #e4e4e4'>
                        <Flex align={'center'}>
                            <MdOutlineLibraryBooks color='rgb(42, 65, 232)' fontSize='1.4em' />
                            <Heading ml={'8px'} fontSize='1rem' fontWeight={700}> {t('Profile.titles.experience')}</Heading>
                        </Flex>
                    </CardHeader>
                    <CardBody>
                        <Center flexDir={'column'}>
                            <Text m={'2rem 0 1.5rem'}>Bu bölmədə heç bir qeyd yoxdur</Text>

                        </Center>
                    </CardBody>
                </Card>


                <Card mt={'30px'} boxShadow='0 6px 10px rgba(1, 0, 0, 0.2)'>
                    <CardHeader borderBottom='1px solid #e4e4e4'>
                        <Flex align={'center'}>
                            <MdOutlineDesktopMac color='rgb(42, 65, 232)' fontSize='1.4em' />
                            <Heading ml={'8px'} fontSize='1rem' fontWeight={700}> {t('Profile.titles.portfolio')}</Heading>
                        </Flex>
                    </CardHeader>
                    <CardBody>
                        <Center flexDir={'column'}>
                            <Text m={'2rem 0 1.5rem'}>Bu bölmədə heç bir qeyd yoxdur</Text>

                        </Center>
                    </CardBody>
                </Card>



            </Box>
            <ScrollToTop />
        </Flex>
    )
}

export default Profile;