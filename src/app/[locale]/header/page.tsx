'use client'
import React from 'react'
import logo from '../../../../public/images/logo.svg'
import {
    Image,
    Button,
    Link,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    HStack,
    useDisclosure
} from "@chakra-ui/react"
import ChevronDownIcon from '@/icons/ChewronDownIcon'
import ArrowForwardIcon from '@/icons/ArrowForwardIcon'


function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const handleMouseEnter = () => {
        onOpen();
    };

    const handleMouseLeave = () => {
        onClose();
    };
    return (
        <HStack align={'center'} minH={20} p='10px 25px' justifyContent={'space-between'} >
            <HStack color='rgb(102, 102, 102)'>
                <Image src={logo.src} alt="Logo" h='60px' pr="16px" borderRight='1px solid rgb(102, 102, 102)' />
                <Link href='/' p='6px 16px' _hover={{ textDecoration: 'none', color: 'rgb(42, 65, 232)' }}>
                    Ana səhifə
                </Link>

                <Menu isOpen={isOpen} onClose={onClose}>
                    {({ isOpen }) => (
                        <>
                            <MenuButton
                                _hover={{ textDecoration: 'none', color: 'rgb(42, 65, 232)' }}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <HStack gap={'0'} p='6px 16px'>
                                    <Link href='/' _hover={{ textDecoration: 'none' }}>
                                        Vakansiyalar
                                    </Link>
                                    <ChevronDownIcon width={'20'} height={'22'} />
                                </HStack>
                            </MenuButton>

                            <MenuList>
                                <MenuItem>Vakansiyaları axtar</MenuItem>
                                <MenuItem>Şirkətləri axtar</MenuItem>
                            </MenuList>
                        </>
                    )}
                </Menu>

                <Menu isOpen={isOpen} onClose={onClose}>
                    {({ isOpen }) => (
                        <>
                            <MenuButton
                                _hover={{ textDecoration: 'none', color: 'rgb(42, 65, 232)' }}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <HStack gap={'0'} p='6px 16px'>
                                    <Link href='/' _hover={{ textDecoration: 'none' }}>
                                        İstifadəçilər
                                    </Link>
                                    <ChevronDownIcon width={'20'} height={'22'} />
                                </HStack>
                            </MenuButton>

                            <MenuList>
                                <MenuItem>İstifadəçiləri tap</MenuItem>
                                <MenuItem>Vakansiyaları idarə et</MenuItem>
                                <MenuItem>Vakansiya elanı paylaş</MenuItem>
                            </MenuList>
                        </>
                    )}
                </Menu>

                <Link href='/' p='6px 16px' _hover={{ textDecoration: 'none', color: 'rgb(42, 65, 232)' }}>
                    Əlaqə
                </Link>
            </HStack>
            <HStack
                align={'center'}
                color='rgb(102, 102, 102)'
                _hover={{ color: 'rgb(42, 65, 232)' }}
                fontWeight={'500'}>
                <ArrowForwardIcon width={'20'} height={'24'} />
                <Button p={0} bg={'white'} variant=''>Daxil ol / Qeydiyyatdan keç</Button>
            </HStack>

        </HStack>
    )
}
export default Header;