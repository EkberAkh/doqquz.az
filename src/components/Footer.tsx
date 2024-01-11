'use client'
import { Flex, Box, Image, Container, Button, Text, Divider, Input, Icon, Link, Tooltip, Popover, PopoverTrigger, Menu, MenuButton, MenuList, MenuItem, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, Portal, MenuItemOption, MenuOptionGroup, Tag } from "@chakra-ui/react"
import logo from '../../public/images/logo.svg'
import { useTranslations } from "next-intl"
import { FaFacebookF, FaTwitter, FaTelegram, FaLinkedin } from "react-icons/fa"
import { ChevronDownIcon } from "@chakra-ui/icons"
import ArrowRightIcon from '@/icons/ArrowRightIcon'
import ScrollToTop from "./ScrollToTop"

export const Footer = () => {
    const t = useTranslations()
    return (
        <Box bgColor='#303030' w='100%'>
            <Box borderBottom={'2px solid #444'} justifyContent='space-between' w={'100%'} minH={'6rem'} display={'flex'}>
                <Flex alignItems='center' justifyContent='space-between' w='78%' margin='0 auto'>
                    <Flex w='66%' borderRight={'2px solid #444'} h={'100%'} align={'center'} >
                        <Image src={logo.src} alt="Logo" h='3.5rem' pr="16px" style={{ filter: 'brightness(0) invert(1)' }} />
                    </Flex>
                    <Box>
                        <Flex gap={'20px'} pt={'0.5rem'}>
                            <Tooltip hasArrow label='Facebook' bg={'#fff'} p={'0.3rem 0.7rem'} borderRadius={'0.3rem'}>
                                <Link href='https://www.facebook.com/doqquz' color={'#fff'} opacity={'0.5'} _hover={{ opacity: '1' }} isExternal>
                                    <Icon as={FaFacebookF} boxSize={21} />
                                </Link>
                            </Tooltip>
                            <Tooltip hasArrow label='Twitter' bg={'#fff'} p={'0.3rem 0.7rem'} borderRadius={'0.3rem'}>
                                <Link href='https://twitter.com/9_doqquz' color={'#fff'} opacity={'0.5'} _hover={{ opacity: '1' }} isExternal>
                                    <Icon as={FaTwitter} boxSize={21} />
                                </Link>
                            </Tooltip>
                            <Tooltip hasArrow label='Telegram' bg={'#fff'} p={'0.3rem 0.7rem'} borderRadius={'0.3rem'}>
                                <Link href='https://t.me/doqquzbaku' color={'#fff'} opacity={'0.5'} _hover={{ opacity: '1' }} isExternal>
                                    <Icon as={FaTelegram} boxSize={21} />
                                </Link>
                            </Tooltip>
                            <Tooltip hasArrow label='LinkedIn' bg={'#fff'} p={'0.3rem 0.7rem'} borderRadius={'0.3rem'}>
                                <Link href='https://www.linkedin.com/company/doqquz' color={'#fff'} opacity={'0.5'} _hover={{ opacity: '1' }} isExternal>
                                    <Icon as={FaLinkedin} boxSize={21} />
                                </Link>
                            </Tooltip>
                        </Flex>
                    </Box>
                    <Flex borderLeft={'2px solid #444'} h={'100%'} align={'center'} pl={'2rem'}>
                        <Menu>
                            <MenuButton
                                color={'#fff'}
                                bg={'#444'}
                                p={'0.3rem 0.8rem'}
                                transition='all 0.2s'
                                borderRadius='0.2rem'
                                box-shadow={'0 5px 10px rgba(0, 0, 0, 0.3)'}
                                _hover={{ bg: '#2a41e8' }}
                                _expanded={{ bg: '#2a41e8' }}
                                _focus={{ boxShadow: 'outline' }}
                            >
                                Azərbaycanca <ChevronDownIcon />
                            </MenuButton>
                            <MenuList color={'#444'} bg={'#fff'} display={'flex'} flexDir={'column'} rowGap={'0.7rem'} p={' 0.5rem 1.2rem'} borderRadius='0.3rem'>
                                <MenuItem>Azərbaycanca</MenuItem>
                                <MenuItem>English</MenuItem>
                                <MenuItem>Pусский</MenuItem>
                                {/* <MenuOptionGroup defaultValue='az' type='radio' >
                                        <MenuItemOption value='az'>Azərbaycanca</MenuItemOption>
                                        <MenuItemOption value='en'>English</MenuItemOption>
                                        <MenuItemOption value='ru'>Pусский</MenuItemOption>
                                    </MenuOptionGroup> */}
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>
            </Box>
            <Divider position='absolute' left='0' right='0' borderColor='#484848' />
            <Box w={'100%'} minH={'19rem'} display={'flex'} alignItems={'center'}>
                <Flex justify='space-between' w={'78%'} margin={'0 auto'} >
                    <Flex columnGap='40px' h={'100%'}>
                        <Box>
                            <Text fontSize='18px' color='#fff' mb='15px' fontWeight={500}>{t('Home.Footer.Nav.forCandidates.label')}</Text>
                            <Flex flexDirection='column' rowGap='0.8rem'>
                                <Text fontSize='14px' color='#c0c0c0'>{t('Common.Nav.browse_jobs')}</Text>
                                <Text fontSize='14px' color='#c0c0c0'>{t('Home.Footer.Nav.forCandidates.addResume')}</Text>
                                <Text fontSize='14px' color='#c0c0c0'>{t('Common.Nav.browse_companies')}</Text>
                            </Flex>
                        </Box>
                        <Box>
                            <Text fontSize='18px' color='#fff' mb='15px' fontWeight={500}>{t('Home.Footer.Nav.forEmployers.label')}</Text>
                            <Flex flexDirection='column' rowGap='0.8rem'>
                                <Text fontSize='14px' color='#c0c0c0'>{t('Common.Nav.browse_jobseekers')}</Text>
                                <Text fontSize='14px' color='#c0c0c0'>{t('Common.Nav.manage_jobs')}</Text>
                                <Text fontSize='14px' color='#c0c0c0'>{t('Common.Nav.post_a_job')}</Text>
                            </Flex>
                        </Box>
                        <Box>
                            <Text fontSize='18px' color='#fff' mb='15px' fontWeight={500}>{t('Home.Footer.Nav.helpfulLinks')}</Text>
                            <Flex flexDirection='column' rowGap='0.8rem'>
                                <Text fontSize='14px' color='#c0c0c0'>{t('Common.Nav.about')}</Text>
                                <Text fontSize='14px' color='#c0c0c0'>{t('Common.Nav.contact')}</Text>
                                <Text fontSize='14px' color='#c0c0c0'>{t('Home.Footer.Nav.privacyPolice')}</Text>
                            </Flex>
                        </Box>
                        <Box>
                            <Text fontSize='18px' color='#fff' mb='15px' fontWeight={500}>{t('Home.Footer.Nav.account')}</Text>
                            <Flex flexDirection='column' rowGap='0.8rem'>
                                <Text fontSize='14px' color='#c0c0c0'>{t('Common.Action.LOGIN')}</Text>
                                <Text fontSize='14px' color='#c0c0c0'>{t('Common.Menu.profile.label')}</Text>
                            </Flex>
                        </Box>
                    </Flex>

                    <Box width={'32%'}>
                        <Text fontSize='18px' color='#fff' mb='15px' ml={'3px'}>{t('Home.Footer.Subscribe.title')}</Text>
                        <Flex flexDir='column' rowGap='10px'>
                            <Text fontSize='14px' color='#c0c0c0' lineHeight={'1.5rem'} mb={'1rem'}>{t('Home.Footer.Subscribe.description')}</Text>
                            <Flex columnGap='8px'>
                                <Input bgColor='rgb(38, 38, 38)' color='#808080' h='48px' w='100%' p={'0 1rem'} borderColor='transparent' boxShadow={'0 0px 1px 1px rgb(0 0 0 / 12%)'} borderRadius={'0.3rem'} placeholder="example@domain.com" _placeholder={{ color: '#808080', opacity: '0.5' }} />
                                <Button bg={'#2a41e8'} color={'#fff'} width={'60px'} height={'48px'} borderRadius={'0.2rem'} _hover={{ bg: '#fff', color: '#000', transition: 'bg 0.6s, color 0.6s' }}> <ArrowRightIcon width={'25'} height={'25'} /> </Button>
                            </Flex>

                        </Flex>
                    </Box>
                </Flex>
            </Box>
            <Divider position='absolute' left='0' right='0' borderColor='#484848' />
            <Container w='100%' fontSize='0.9rem' color={'silver'} textAlign='center' paddingY='23px' borderTop={'2px solid #444'}>
                © 2024 <Tag color={'#fff'}> Doqquz</Tag>.Bütün hüquqlar qorunur.
            </Container>
            <ScrollToTop />
        </Box>

    )
}