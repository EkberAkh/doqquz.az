
'use client'
import React, { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Card, Box, CardBody, CardHeader, Heading, Flex, Button, Text, Input, useDisclosure, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, InputGroup, InputLeftAddon, InputRightAddon, FormControl, FormHelperText, FormLabel, Center, Divider, Textarea } from '@chakra-ui/react'
import { MdOutlineDesktopMac } from "react-icons/md";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { AddIcon } from '@chakra-ui/icons'
import ScrollToTop from '@/components/ScrollToTop'
// import "react-datepicker/dist/react-datepicker.css";
// import DatePicker from "react-datepicker";
import Cookies from "js-cookie";


const Profile = () => {
    const userProfileId = Cookies.get('userProfileId')
    const t = useTranslations()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [startingDate, setEstablishmentDate] = React.useState('—')
    const [completionDate, setEndDate] = useState(new Date());
    const [activeModal, setActiveModal] = useState('')
    const [universityName, setUniversityName] = useState('')
    const [major, setEducationMajor] = useState('')
    const [certificateDegreeName, setEducationDegree] = useState('')

    const handleOpenModal = (modalContent) => {
        setActiveModal(modalContent);
        onOpen();
    }



    const token = Cookies.get('token')

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const id = null;
        const jobSeeker = 58;

        const data = { universityName, major, certificateDegreeName, startingDate, completionDate,id,jobSeeker };

        fetch('https://neo-814m.onrender.com/v1/education/58', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Token': `${token}`,
            },
            body: JSON.stringify(data),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log(data); // Handle the response data as needed
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }


    console.log(userProfileId);

    return (
        <Flex justify={'center'}>
            <Box mx='15px' width={'81%'}>



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
                            <Button
                                onClick={() => handleOpenModal('education')}
                                leftIcon={<AddIcon width={'0.8rem'} mr={'0.2rem'} />}
                                color={'#fff'}
                                bg={'#2a41e8'}
                                border={'2px solid #2a41e8'}
                                p={'23px 19px'}
                                mb={'1.5rem'}
                                borderRadius={'4px'}
                                fontWeight={400}
                                box-shadow={'0 5px 10px rgba(0, 0, 0, 0.1)'}
                                variant='primary'>{t('Common.Action.ADD')} </Button>
                        </Center>
                    </CardBody>
                </Card>

                {activeModal === 'education' && <Modal isOpen={isOpen} onClose={onClose} size={'full'} >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader fontSize='1.7rem' fontWeight='600' ml={'6.5rem'}>
                            {t('Profile.titles.education')}
                            <ModalCloseButton size={'xl'} m={'0.9rem'} color={'#9e9e9e'} pr={'9px'} />
                        </ModalHeader>
                        <Divider borderColor='#e4e4e4' />
                        <ModalBody p={'3.7rem 7.4rem 0'}>
                            <Flex flexWrap={'wrap'} columnGap={'1.5rem'} width={'100%'}>
                                <FormControl minH={'7.1rem'} flexBasis={'calc(50% - 0.8rem)'}>
                                    <FormLabel fontSize={'1.1rem'} mb={'0.9rem'}>{t('Profile.Education.name')}</FormLabel>
                                    <Input type='text' onChange={(e) => setUniversityName(e.target.value)} placeholder={t('Profile.Education.name')} h={'3.1rem'}></Input>
                                </FormControl>
                                <FormControl minH={'7.1rem'} flexBasis={'calc(50% - 0.8rem)'}>
                                    <FormLabel fontSize={'1.1rem'} mb={'0.9rem'}>{t('Profile.Education.major')}</FormLabel>
                                    <Input type='text' onChange={(e) => setEducationMajor(e.target.value)} placeholder={t('Profile.Education.major')} h={'3.1rem'}></Input>
                                </FormControl>
                                <FormControl minH={'7.1rem'} flexBasis={'calc(50% - 0.8rem)'}>
                                    <FormLabel fontSize={'1.1rem'} mb={'0.9rem'}>{t('Common.FormInputs.startingDate.label')}</FormLabel>
                                    <Input
                                        h={'3.1rem'}
                                        onChange={(e) => setEstablishmentDate(e.target.value)}
                                        size="md"
                                        type="date"  // Change here
                                    />
                                </FormControl>
                                <FormControl minH={'7.1rem'} flexBasis={'calc(50% - 0.8rem)'}>
                                    <FormLabel fontSize={'1.1rem'} mb={'0.9rem'}>{t('Common.FormInputs.endDate.label')}</FormLabel>
                                    <Input
                                        h={'3.1rem'}
                                        onChange={(e) => setEndDate(e.target.value)}
                                        size="md"
                                        type="date"  // Change here
                                    />
                                </FormControl>
                                <FormControl minH={'7.1rem'} flexBasis={'calc(50% - 0.8rem)'}>
                                    <FormLabel fontSize={'1.1rem'} mb={'0.9rem'}>{t('Profile.Education.degree')}</FormLabel>
                                    <Input type='text' onChange={(e) => setEducationDegree(e.target.value)} placeholder={t('Profile.Education.degree')} h={'3.1rem'}></Input>
                                </FormControl>
                            </Flex>
                        </ModalBody>
                        <Divider />
                        <Button onClick={handleSubmit}> yadda saxla</Button>

                    </ModalContent>
                </Modal>}




            </Box>
            <ScrollToTop />
        </Flex>
    )
}

export default Profile;