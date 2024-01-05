'use client'
import React from 'react'
import logo from '../../public/images/logo.svg'
import {
    Image,
    Button,
    Link,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    HStack,
    ThemeProvider
} from "@chakra-ui/react"
import ChevronDownIcon from '@/icons/ChewronDownIcon'
import ArrowForwardIcon from '@/icons/ArrowForwardIcon'
import { extendedTheme } from '@/consts'
import { useTranslations } from 'next-intl'


function Header() {
    const t = useTranslations()
    return (
        <ThemeProvider theme={extendedTheme}>
            <HStack align={'center'} minH={20} p='10px 25px' justifyContent={'space-between'} boxShadow='0 0 18px 0 rgba(0, 0, 0, 0.12)'>
                <HStack color='rgb(102, 102, 102)'>
                    <Image src={logo.src} alt="Logo" h='60px' pr="16px" borderRight='1px solid rgb(102, 102, 102)' />
                    <Link href='/' p='6px 16px' _hover={{ textDecoration: 'none', color: 'rgb(42, 65, 232)' }}>
                        {t('Common.Nav.home')}
                    </Link>
                    <Menu  >
                        <MenuButton as={Button} fontWeight={500} bgColor='transparent' rightIcon={<ChevronDownIcon width={'20'} height={'22'} />} _hover={{ textDecoration: 'none', color: 'rgb(42, 65, 232)' }}>
                            {t('Common.Nav.jobs')}
                        </MenuButton>
                        <MenuList>
                            <MenuItem>  {t('Common.Nav.browse_jobs')}</MenuItem>
                            <MenuItem>{t('Common.Nav.browse_companies')}</MenuItem>
                        </MenuList>
                    </Menu>
                    <Menu >
                        <MenuButton as={Button} fontWeight={500} bgColor='transparent' rightIcon={<ChevronDownIcon width={'20'} height={'22'} />} _hover={{ textDecoration: 'none', color: 'rgb(42, 65, 232)' }}>
                            {t('Common.Nav.employees')}
                        </MenuButton>
                        <MenuList>
                            <MenuItem>{t('Common.Nav.browse_jobseekers')}</MenuItem>
                            <MenuItem>{t('Common.Nav.manage_jobs')}</MenuItem>
                            <MenuItem>{t('Common.Nav.post_a_job')}</MenuItem>
                        </MenuList>
                    </Menu>
                    <Link href='/' p='6px 16px' _hover={{ textDecoration: 'none', color: 'rgb(42, 65, 232)' }}>
                        {t('Common.Nav.contact')}
                    </Link>
                </HStack>
                <HStack
                    align={'center'}
                    color='rgb(102, 102, 102)'
                    _hover={{ color: 'rgb(42, 65, 232)' }}
                    fontWeight={'500'}>
                    <ArrowForwardIcon width={'20'} height={'24'} />
                    <Button p={0} bg={'white'} variant=''>{`${t('Common.Action.LOGIN')} / ${t('Common.Action.REGISTER')} `}</Button>
                </HStack>

            </HStack>

        </ThemeProvider >
    )
}
export default Header;