'use client'

import React from 'react'
import { useTranslations } from 'next-intl'
import { Card, Box, CardBody, CardHeader, Heading, Flex, Button, Text, Input, useDisclosure, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, InputGroup, InputLeftAddon, InputRightAddon, FormControl, FormHelperText, FormLabel } from '@chakra-ui/react'
import { colorObjects } from '@/consts'
import { transform } from 'next/dist/build/swc'


const Profile = () => {
    const t = useTranslations()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [name, setName] = React.useState('Salam')
    const [webUrl, setWebUrl] = React.useState('—')
    const [establishmentDate, setEstablishmentDate] = React.useState('—')
    const [description, setDescription] = React.useState('—')

    return (
        <Box mx='15px'>
            <Card marginTop='30px' boxShadow='0 6px 10px rgba(1, 0, 0, 0.2)'>
                <CardHeader borderBottom='1px solid #e4e4e4' display='flex' flexDirection='row' alignItems='center' justifyContent='space-between'>
                    <Heading fontSize='16px' fontWeight={600}>{t('Profile.titles.contactInfo')}</Heading>
                    <Box bgColor='#e0f5d7' color='#449626' p='5px' borderRadius='5px'>
                        {t('Common.Role.COMPANY')}
                    </Box>
                </CardHeader>

                <CardBody p='30px'>
                    <Flex >
                        <Box w='138px' h='138px' borderRadius='100px' bgColor={colorObjects.gray.border} marginRight='30px'>

                        </Box>
                        <Box w='87%'>
                            <Flex columnGap='30px' mb='30px'>
                                <Box w='50%'>
                                    <Text mb='20px' fontSize='1.3rem'>{t('Common.FormInputs.email.label')}</Text>
                                    <Input placeholder='sales@yourbusinessname.com' h='48px'></Input>
                                </Box>
                                <Box w='50%'>
                                    <Text mb='20px' fontSize='1.3rem'>{t('Common.FormInputs.phoneNumber.label')}</Text>
                                    <Input placeholder='sales@yourbusinessname.com' h='48px'></Input>

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
                <CardHeader borderBottom='1px solid #e4e4e4' display='flex' flexDirection='row' alignItems='center' justifyContent='space-between'>
                    <Heading fontSize='16px' fontWeight={600}> Profil Məlumatı</Heading>
                    <Button bgColor='#e0f5d7' color='#449626' p='5px' borderRadius='5px' onClick={onOpen}>
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
            <Modal onClose={onClose} size={'full'} isOpen={isOpen}>
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
                            <Input type='text' value={name} onChange={(event) => setName(event.target.value)} height='48px' />

                        </FormControl>
                        <FormControl w='45%'>
                            <FormLabel>{t('Common.FormInputs.websiteUrl.label')}</FormLabel>
                            <InputGroup size='sm'>


                                <Input placeholder='mysite' value={webUrl} onChange={(event) => setWebUrl(event.target.value)} h='48px' />

                            </InputGroup>

                        </FormControl>
                        <FormControl w='50%'>
                            <FormLabel>{t('Profile.ProfileInfo.establishmentDate')}</FormLabel>
                            <InputGroup size='sm'>


                                <Input
                                    height='48px'
                                    value={establishmentDate} onChange={(event) => setEstablishmentDate(event.target.value)}
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
            </Modal>
        </Box >

    )
}

export default Profile