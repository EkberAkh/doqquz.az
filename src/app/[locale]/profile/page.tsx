'use client'
import { useTranslations } from 'next-intl'
import { Card, Box, CardBody, CardHeader, Heading, Flex, Button, Text, Input, useDisclosure, Center} from '@chakra-ui/react'
import { colorObjects } from '@/consts'
import { MdOutlineAccountCircle, MdOutlineFaceUnlock, MdOutlineDesktopMac, MdOutlineLibraryBooks } from "react-icons/md";
import 'react-phone-input-2/lib/style.css'
import ScrollToTop from '@/components/ScrollToTop'
import { useSearchParams } from "next/navigation";


const Profile = () => {
    const t = useTranslations()
    
    const searchParams = useSearchParams()
    const jobId  = searchParams.get("jobId");
    console.log(jobId);


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
                        <Flex >
                            <Box w='138px' h='138px' borderRadius='100px' bgColor={colorObjects.gray.border} marginRight='30px' border={'1px solid #2a41e8'}>

                            </Box>
                            <Box w='87%'>
                                <Flex columnGap='30px' mb='30px'>
                                    <Box w='50%'>
                                        <Text mb='20px' fontSize='1.3rem'>{t('Common.FormInputs.email.label')}</Text>
                                        <Text>salam@gmail.com</Text>
                                    </Box>

                                    <Box w='50%'>
                                        <Text mb='20px' fontSize='1.3rem'>{t('Common.FormInputs.phoneNumber.label')}</Text>
                                       <Text> ----</Text>
                                    </Box>

                                </Flex>
                            
                            </Box>
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

                    <CardBody p='30px'>
                        <Flex >

                            <Box w='100%'>
                                <Flex columnGap='30px' mb='30px' flexWrap='wrap'>
                                    <Box w='30%'>
                                        <Text mb='20px' fontSize='1.3rem'>{t('Profile.ProfileInfo.name')}</Text>
                                        <Text mb='20px' fontSize='1.3rem'>------</Text>
                                    </Box>
                                    <Box w='30%'>
                                        <Text mb='20px' fontSize='1.3rem'>{t('Common.FormInputs.websiteUrl.label')}</Text>
                                        <Text mb='20px' fontSize='1.3rem'>-----</Text>

                                    </Box>
                                    <Box w='30%'>
                                        <Text mb='20px' fontSize='1.3rem'>{t('Profile.ProfileInfo.establishmentDate')}</Text>
                                        <Text mb='20px' fontSize='1.3rem'>----</Text>

                                    </Box>
                                    <Box w='30%' mt='30px'>
                                        <Text mb='20px' fontSize='1.3rem'>{t('Common.FormInputs.description.label')}</Text>
                                        <Text mb='20px' fontSize='1.3rem'>-----</Text>

                                    </Box>
                                </Flex>

                            </Box>
                        </Flex>
                    </CardBody>
                </Card>


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
            <ScrollToTop/>
        </Flex>
    )
    }

export default Profile;