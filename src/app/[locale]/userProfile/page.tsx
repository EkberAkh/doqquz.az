'use client'

import React, { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Card, Box, CardBody, CardHeader, Heading, Flex, Button, Text, Input, useDisclosure, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, InputGroup, InputLeftAddon, InputRightAddon, FormControl, FormHelperText, FormLabel, Center, Divider, Textarea } from '@chakra-ui/react'
import { colorObjects } from '@/consts'
import { MdOutlineAccountCircle, MdOutlineFaceUnlock, MdOutlineDesktopMac, MdOutlineLibraryBooks } from "react-icons/md";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { transform } from 'next/dist/build/swc'
import { AddIcon } from '@chakra-ui/icons'
import ScrollToTop from '@/components/ScrollToTop'
// import "react-datepicker/dist/react-datepicker.css";
// import DatePicker from "react-datepicker";

const Profile = () => {
    const t = useTranslations()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [name, setName] = React.useState('Salam')
    const [webUrl, setWebUrl] = React.useState('—')
    const [establishmentDate, setEstablishmentDate] = React.useState('—')
    const [endDate, setEndDate] = useState(new Date());
    const [description, setDescription] = React.useState('—')
    const [phoneNumber, setPhoneNumber] = useState('');
    const [valid, setValid] = useState(true)
    const [activeModal, setActiveModal] = useState('')
    const [universityName, setUniversityName] = useState('')
    const [educationMajor, setEducationMajor] = useState('')
    const [educationDegree, setEducationDegree] = useState('')
    const [company,setCompany] = useState('')
    const [duty, setDuty] = useState('')
    // const [startDate, setStartDate] = useState(new Date());
    // const [endtDate, setEndDate] = useState(new Date());

    const handleOpenModal = (modalContent) => {
        setActiveModal(modalContent);
        onOpen();
    }

    const handleChange = (value) => {
        // const input = e.target.value;
        setPhoneNumber(value);
        setValid(validatePhoneNumber(value))
    }

    const validatePhoneNumber = (phoneNumber) => {
        const phoneNumberPattern = /^\d{10}$/;
        return phoneNumberPattern.test(phoneNumber);
        // return phoneNumber.match("^[0-9]{10}$")
    }




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
                                        <Input placeholder='example@domain.com' h='48px'></Input>
                                    </Box>

                                    <Box w='50%'>
                                        <Text mb='20px' fontSize='1.3rem'>{t('Common.FormInputs.phoneNumber.label')}</Text>
                                        <PhoneInput country={'az'} placeholder='+111 (11) 111-11-11' value={phoneNumber} onChange={handleChange} inputProps={{
                                            required: 'true'
                                        }}
                                        inputStyle={{ height: '48px', width: '30rem' , borderRadius: '0.3rem' }}
                                        buttonStyle={{background: '#fff', borderRight: 'none',}}
                                        />
                                        {!valid && <Text color={'red'} mt={'0.6rem'}>Please enter a valid phone number!</Text>}
                                    </Box>

                                </Flex>
                                <Button color={'#2a41e8'}
                                    border={'2px solid #2a41e8'}
                                    p={'23px 19px'}
                                    borderRadius={'4px'}
                                    letterSpacing={'0.1em'}
                                    fontWeight={500}
                                    box-shadow={'0 5px 10px rgba(0, 0, 0, 0.1)'}
                                    transition='all 0.3s linear'
                                    position={'relative'}
                                    zIndex={'1'}
                                    _hover={{
                                        color: '#fff',
                                        _before: {
                                            transform: "scaleX(1)",
                                        },
                                    }}
                                    _before={{
                                        content: '""',
                                        position: "absolute",
                                        left: '0',
                                        top: '0',
                                        width: '100%',
                                        height: '100%',
                                        bg: '#2a41e8',
                                        zIndex: '-1',
                                        transition: ' transform 0.8s cubic-bezier(0.5,1.6,0.4,0.7)',
                                        transformOrigin: '0 0',
                                        transform: 'scaleX(0)'
                                    }}
                                    variant='primary'>{t('Common.Action.SAVE')} </Button>
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
                        <Button bgColor='#e0f5d7' color='#449626' p='5px' borderRadius='5px' onClick={() => handleOpenModal('profile')}>
                            Change
                        </Button>

                    </CardHeader>

                    <CardBody p='30px'>
                        <Flex >

                            <Box w='100%'>
                                <Flex columnGap='30px' mb='30px' flexWrap='wrap'>
                                    <Box w='30%'>
                                        <Text mb='20px' fontSize='1.3rem'>{t('Profile.ProfileInfo.name')}</Text>
                                        <Text mb='20px' fontSize='1.3rem'>{name}</Text>
                                    </Box>
                                    <Box w='30%'>
                                        <Text mb='20px' fontSize='1.3rem'>{t('Common.FormInputs.websiteUrl.label')}</Text>
                                        <Text mb='20px' fontSize='1.3rem'>{webUrl}</Text>

                                    </Box>
                                    <Box w='30%'>
                                        <Text mb='20px' fontSize='1.3rem'>{t('Profile.ProfileInfo.establishmentDate')}</Text>
                                        <Text mb='20px' fontSize='1.3rem'>{establishmentDate}</Text>

                                    </Box>
                                    <Box w='30%' mt='30px'>
                                        <Text mb='20px' fontSize='1.3rem'>{t('Common.FormInputs.description.label')}</Text>
                                        <Text mb='20px' fontSize='1.3rem'>{description}</Text>

                                    </Box>
                                </Flex>

                            </Box>
                        </Flex>
                    </CardBody>
                </Card>

                {activeModal === 'profile' && <Modal onClose={onClose} size={'full'} isOpen={isOpen}>
                    <ModalOverlay />
                    <ModalContent >
                        <ModalHeader fontSize='27px' fontWeight='700' borderBottom='1px solid #e4e4e4'>
                            <Flex px='120px'>
                                {t('Profile.titles.profileInfo')}   <ModalCloseButton size='xl' margin='10px' />
                            </Flex>

                        </ModalHeader>

                        <ModalBody padding='64px 120px 0 120px' mb='80px' display='flex' columnGap='20px' flexWrap='wrap' maxHeight='400px'>
                            <FormControl w='45%'>
                                <FormLabel>{t('Profile.ProfileInfo.name')}</FormLabel>
                                <Input type='text' value={name} onChange={(e) => setName(e.target.value)} h='48px' />
                            </FormControl>
                            <FormControl w='45%'>
                                <FormLabel>{t('Common.FormInputs.websiteUrl.label')}</FormLabel>
                                <InputGroup size='sm'>
                                    <Input placeholder='mysite' value={webUrl} onChange={(e) => setWebUrl(e.target.value)} h='48px' />
                                </InputGroup>
                            </FormControl>
                            <FormControl w='50%'>
                                <FormLabel>{t('Profile.ProfileInfo.establishmentDate')}</FormLabel>
                                <InputGroup size='sm'>
                                    <Input
                                        h='48px'
                                        value={establishmentDate} onChange={(e) => setEstablishmentDate(e.target.value)}
                                        size="md"
                                        type="datetime-local"
                                    />
                                </InputGroup>
                            </FormControl>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={onClose}>Close</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>}



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
                                    <Input type='text' value={universityName} onChange={(e)=> setUniversityName(e.target.value)} placeholder={t('Profile.Education.name')} h={'3.1rem'}></Input>
                                </FormControl>
                                <FormControl minH={'7.1rem'} flexBasis={'calc(50% - 0.8rem)'}>
                                    <FormLabel fontSize={'1.1rem'} mb={'0.9rem'}>{t('Profile.Education.major')}</FormLabel>
                                    <Input type='text' value={educationMajor} onChange={(e)=>setEducationMajor(e.target.value)} placeholder={t('Profile.Education.major')} h={'3.1rem'}></Input>
                                </FormControl>
                                <FormControl minH={'7.1rem'} flexBasis={'calc(50% - 0.8rem)'}>
                                    <FormLabel fontSize={'1.1rem'} mb={'0.9rem'}>{t('Common.FormInputs.startingDate.label')}</FormLabel>
                                    <Input
                                        h={'3.1rem'}
                                        value={establishmentDate} onChange={(e) => setEstablishmentDate(e.target.value)}
                                        size="md"
                                        type="datetime-local"
                                    />
                                </FormControl>
                                <FormControl minH={'7.1rem'} flexBasis={'calc(50% - 0.8rem)'}>
                                    <FormLabel fontSize={'1.1rem'} mb={'0.9rem'}>{t('Common.FormInputs.endDate.label')}</FormLabel>
                                    <Input
                                        h={'3.1rem'}
                                        value={endDate} onChange={(e) => setEndDate(e.target.value)}
                                        size="md"
                                        type="datetime-local"
                                    />
                                </FormControl>
                                <FormControl minH={'7.1rem'} flexBasis={'calc(50% - 0.8rem)'}>
                                    <FormLabel fontSize={'1.1rem'} mb={'0.9rem'}>{t('Profile.Education.degree')}</FormLabel>
                                    <Input type='text' value={educationDegree} onChange={(e)=> setEducationDegree(e.target.value)} placeholder={t('Profile.Education.degree')} h={'3.1rem'}></Input>
                                </FormControl>
                            </Flex>
                        </ModalBody>
                        <Divider />
                        <ModalFooter p={'1rem 7.4rem 1.5rem'}>
                            <Button
                                onClick={onClose}
                                color={'#fff'}
                                bg={'#2a41e8'}
                                border={'2px solid #2a41e8'}
                                p={'23px 15px'}
                                borderRadius={'4px'}
                                fontWeight={400}
                                box-shadow={'0 5px 10px rgba(0, 0, 0, 0.1)'}
                                variant='primary'>{t('Common.Action.SAVE')} </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>}




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
                            <Button
                                onClick={() => handleOpenModal('experience')}
                                leftIcon={<AddIcon width={'0.8rem'} mr={'0.2rem'} />}
                                color={'#fff'}
                                bg={'#2a41e8'}
                                border={'2px solid #2a41e8'}
                                p={'23px 19px'}
                                mb={'1.5rem'}
                                borderRadius={'4px'}
                                fontWeight={400}
                                box-shadow={'0 5px 10px rgba(0, 0, 0, 0.1)'}
                                transition='all 0.3s linear'
                                position={'relative'}
                                zIndex={'1'}
                                variant='primary'>{t('Common.Action.ADD')} </Button>
                        </Center>
                    </CardBody>
                </Card>

                {activeModal === 'experience' && <Modal isOpen={isOpen} onClose={onClose} size={'full'}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader fontSize='1.7rem' fontWeight='600' ml={'6.5rem'}>
                            {t('Profile.titles.experience')}
                            <ModalCloseButton size={'xl'} m={'0.9rem'} color={'#9e9e9e'} pr={'9px'} />
                        </ModalHeader>
                        <Divider borderColor='#e4e4e4' />
                        <ModalBody p={'3.7rem 7.4rem 0'}>
                            <Flex flexWrap={'wrap'} columnGap={'1.5rem'} width={'100%'}>
                                <FormControl minH={'7.1rem'} flexBasis={'calc(50% - 0.8rem)'}>
                                    <FormLabel fontSize={'1.1rem'} mb={'0.9rem'}>{t('Profile.Experience.name')}</FormLabel>
                                    <Input type='text' value={company} onChange={(e)=> setCompany(e.target.value)} placeholder={t('Profile.Experience.name')} h={'3.1rem'}></Input>
                                </FormControl>
                                <FormControl minH={'7.1rem'} flexBasis={'calc(50% - 0.8rem)'}>
                                    <FormLabel fontSize={'1.1rem'} mb={'0.9rem'}>{t('Profile.Experience.title')}</FormLabel>
                                    <Input type='text' value={duty} onChange={(e)=>setDuty(e.target.value)} placeholder={t('Profile.Experience.title')} h={'3.1rem'}></Input>
                                </FormControl>
                                <FormControl minH={'7.1rem'} flexBasis={'calc(50% - 0.8rem)'}>
                                    <FormLabel fontSize={'1.1rem'} mb={'0.9rem'}>{t('Common.FormInputs.startingDate.label')}</FormLabel>
                                    <Input
                                        h={'3.1rem'}
                                        value={establishmentDate} onChange={(event) => setEstablishmentDate(event.target.value)}
                                        size="md"
                                        type="datetime-local"
                                    />
                                </FormControl>
                                <FormControl minH={'7.1rem'} flexBasis={'calc(50% - 0.8rem)'}>
                                    <FormLabel fontSize={'1.1rem'} mb={'0.9rem'}>{t('Common.FormInputs.endDate.label')}</FormLabel>
                                    <Input
                                        h={'3.1rem'}
                                        value={endDate} onChange={(event) => setEndDate(event.target.value)}
                                        size="md"
                                        type="datetime-local"
                                    />
                                </FormControl>
                                <FormControl minH={'7.1rem'} flexBasis={'calc(50% - 0.8rem)'}>
                                    <FormLabel fontSize={'1.1rem'} mb={'0.9rem'}>{t('Common.JobType.label')}</FormLabel>
                                    <Input type='text'  placeholder={t('Common.JobType.label')} h={'3.1rem'}></Input>
                                </FormControl>
                                <FormControl minH={'7.1rem'} flexBasis={'calc(50% - 0.8rem)'}>
                                    <FormLabel fontSize={'1.1rem'} mb={'0.9rem'}>{t('Common.FormInputs.description.label')}</FormLabel>
                                    <Textarea placeholder={t('Common.FormInputs.description.label')} value={description} onChange={(e)=>setDescription(e.target.value)} minH={'5rem'} p={'1.1rem'} resize={'none'}></Textarea>
                                </FormControl>
                            </Flex>
                        </ModalBody>
                        <Divider />
                        <ModalFooter p={'1rem 7.4rem 1.5rem'}>
                            <Button
                                onClick={onClose}
                                color={'#fff'}
                                bg={'#2a41e8'}
                                border={'2px solid #2a41e8'}
                                p={'23px 15px'}
                                borderRadius={'4px'}
                                fontWeight={400}
                                box-shadow={'0 5px 10px rgba(0, 0, 0, 0.1)'}
                                variant='primary'>{t('Common.Action.SAVE')} </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>}



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
                            <Button
                                onClick={() => handleOpenModal('portfolio')}
                                leftIcon={<AddIcon width={'0.8rem'} mr={'0.2rem'} />}
                                color={'#fff'}
                                bg={'#2a41e8'}
                                border={'2px solid #2a41e8'}
                                p={'23px 19px'}
                                mb={'1.5rem'}
                                borderRadius={'4px'}
                                fontWeight={400}
                                box-shadow={'0 5px 10px rgba(0, 0, 0, 0.1)'}
                                transition='all 0.3s linear'
                                position={'relative'}
                                zIndex={'1'}
                                variant='primary'>{t('Common.Action.ADD')} </Button>
                        </Center>
                    </CardBody>
                </Card>

                {activeModal === 'portfolio' && <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
                    <ModalOverlay />
                    <ModalContent >
                        <ModalHeader fontSize='1.7rem' fontWeight='600'>
                            {t('Profile.Portfolio.header.add')}
                            <ModalCloseButton size={'lg'} m={'0.6rem'} color={'#9e9e9e'} />
                        </ModalHeader>
                        <Divider borderColor='#e4e4e4' />
                        <ModalBody  >
                            <Flex flexWrap={'wrap'} columnGap={'1.5rem'} width={'100%'}>

                                <FormControl minH={'7.1rem'} flexBasis={'calc(50% - 0.8rem)'}>
                                    <FormLabel fontSize={'1.1rem'} mb={'0.9rem'}>{t('Profile.Portfolio.title')}</FormLabel>
                                    <Input type='text' placeholder={t('Profile.Portfolio.title')} _placeholder={{ opacity: '0.5' }} h={'3.1rem'}></Input>
                                </FormControl>

                                <FormControl minH={'7.1rem'} flexBasis={'calc(50% - 0.8rem)'}>
                                    <FormLabel fontSize={'1.1rem'} mb={'0.9rem'}>{t('Common.FormInputs.websiteUrl.label')}</FormLabel>
                                    <Input type='text' placeholder={'www.example.com'} _placeholder={{ opacity: '0.5' }} h={'3.1rem'}></Input>
                                </FormControl>

                                <FormControl minH={'10rem'} flexBasis={'100%'}>
                                    <FormLabel fontSize={'1.1rem'} mb={'0.9rem'}>{t('Common.FormInputs.description.label')}</FormLabel>
                                    <Textarea placeholder={t('Common.FormInputs.description.label')} _placeholder={{ opacity: '0.5' }} minH={'5rem'} p={'1.1rem'} resize={'none'}></Textarea>
                                </FormControl>
                            </Flex>
                        </ModalBody>
                        <Divider />
                        <ModalFooter p={'1rem 1.5rem'}>
                            <Button
                                onClick={onClose}
                                color={'#fff'}
                                bg={'#2a41e8'}
                                border={'2px solid #2a41e8'}
                                p={'23px 15px'}
                                borderRadius={'4px'}
                                fontWeight={400}
                                box-shadow={'0 5px 10px rgba(0, 0, 0, 0.1)'}
                                variant='primary'>{t('Common.Action.SAVE')} </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>}

            </Box>
            <ScrollToTop/>
        </Flex>
    )
}

export default Profile;