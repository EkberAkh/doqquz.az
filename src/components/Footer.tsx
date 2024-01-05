import { Flex, Box, Image, Container, Button, Text, Divider, Input } from "@chakra-ui/react"
import logo from '../../public/images/logo.svg'
import { useTranslations } from "next-intl"

export const Footer = () => {
    const t = useTranslations()
    return (
        <Box bgColor='#303030' w='100%'>
            <Box maxW='1150px' margin='0 auto' justifyContent='space-between' >
                <Flex alignItems='center' w='100%'>
                    <Box w='60%'>
                        <Image src={logo.src} alt="Logo" h='60px' pr="16px" />
                    </Box>
                    <Flex w='40%' px='40px'></Flex>
                    <Box w='40%' p='40px'>
                        <Button variant='primary'>
                            Azərbaycanca
                        </Button>
                    </Box>
                </Flex>
                <Divider position='absolute' left='0' right='0' borderColor='#484848' />
                <Flex justifyContent='space-between' py='60px' >
                    <Flex columnGap='20px'>
                        <Box>
                            <Text fontSize='18px' color='#fff' mb='15px' fontWeight={500}>{t('Home.Footer.Nav.forCandidates.label')}</Text>
                            <Flex flexDirection='column' rowGap='10px'>
                                <Text fontSize='14px' color='#c0c0c0'>{t('Common.Nav.browse_jobs')}</Text>
                                <Text fontSize='14px' color='#c0c0c0'>{t('Home.Footer.Nav.forCandidates.addResume')}</Text>
                                <Text fontSize='14px' color='#c0c0c0'>{t('Common.Nav.browse_companies')}</Text>
                            </Flex>

                        </Box>
                        <Box>
                            <Text fontSize='18px' color='#fff' mb='15px'>{t('Home.Footer.Nav.forEmployers.label')}</Text>
                            <Flex flexDirection='column' rowGap='10px'>
                                <Text fontSize='14px' color='#c0c0c0'>{t('Common.Nav.browse_jobseekers')}</Text>
                                <Text fontSize='14px' color='#c0c0c0'>{t('Common.Nav.manage_jobs')}</Text>
                                <Text fontSize='14px' color='#c0c0c0'>{t('Common.Nav.post_a_job')}</Text>
                            </Flex>
                        </Box>
                        <Box>
                            <Text fontSize='18px' color='#fff' mb='15px'>{t('Home.Footer.Nav.helpfulLinks')}</Text>
                            <Flex flexDirection='column' rowGap='10px'>
                                <Text fontSize='14px' color='#c0c0c0'>{t('Common.Nav.about')}</Text>
                                <Text fontSize='14px' color='#c0c0c0'>{t('Common.Nav.contact')}</Text>
                                <Text fontSize='14px' color='#c0c0c0'>{t('Home.Footer.Nav.privacyPolice')}</Text>
                            </Flex>
                        </Box>
                        <Box>
                            <Text fontSize='18px' color='#fff' mb='15px'>{t('Home.Footer.Nav.account')}</Text>
                            <Flex flexDirection='column' rowGap='10px'>
                                <Text fontSize='14px' color='#c0c0c0'>Vakansiyaları axtar</Text>
                                <Text fontSize='14px' color='#c0c0c0'>{t('Common.Action.LOGIN')}</Text>
                                <Text fontSize='14px' color='#c0c0c0'>{t('Common.Menu.profile.label')}</Text>
                            </Flex>
                        </Box>
                    </Flex>

                    <Box>
                        <Text fontSize='18px' color='#fff' mb='15px'>{t('Home.Footer.Subscribe.title')}</Text>
                        <Flex flexDirection='column' rowGap='10px'>
                            <Text fontSize='14px' color='#c0c0c0'>{t('Home.Footer.Subscribe.description')}</Text>
                            <Flex columnGap='8px'>
                                <Input bgColor='rgb(38, 38, 38)' color='#808080' height='48px' width='100%' borderColor='transparent' placeholder="example@domain.com" />
                                <Button variant='primary' height='48px' w='48px'></Button>
                            </Flex>

                        </Flex>
                    </Box>

                </Flex>
                <Divider position='absolute' left='0' right='0' borderColor='#484848' />
                <Container w='100%' fontSize='18px' color='#fff' textAlign='center' paddingY='40px'>
                    © 2024 Doqquz.Bütün hüquqlar qorunur.
                </Container>
            </Box>

        </Box>
    )
}