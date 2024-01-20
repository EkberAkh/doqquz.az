import NotificationIcon from '@/icons/NotificationIcon'
import NotifiedIcon from '@/icons/NotifiedIcon'
import { Box, Popover, PopoverTrigger, PopoverContent, Flex, PopoverHeader, PopoverBody, Img } from '@chakra-ui/react'
import GhostPng from './../../../public/images/ghost.png'
import React from 'react'
import NotificationItem from './NotificationItem'
let role = localStorage.getItem("role");

function Notification() {
    return (
        <Box w={'4rem'} borderRight={'1px solid black'}>
            <Popover>
                <PopoverTrigger>
                    <Box
                        h={'100%'}
                        textAlign={'center'}>
                        <NotificationIcon width="28" height="28" />
                    </Box>
                </PopoverTrigger>
                <PopoverContent right={'1rem'} bg={'#fff'} width={'22rem'} border={'none'}>
                    <Flex borderBottom={'1px solid rgb(119, 119, 119)'}>
                        <Flex justify={'space-between'} w={'100%'} p={'1rem'} >
                            <PopoverHeader color={'red'} border={'none'} fontWeight={600} fontSize={'1.1rem'}>Notifications</PopoverHeader>
                            <NotifiedIcon width="24" height="24" color="red" />
                        </Flex>
                    </Flex>
                    <PopoverBody h={'23rem'} overflowY={'auto'} p={'0px'}>
                        {role === 'JOBSEEKER' ?
                            <Flex justify={'center'} h={'100%'} align={'center'}>
                                <Img src={GhostPng.src} w={'8rem'} />
                            </Flex> :
                            <NotificationItem />
                        }

                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </Box>
    )
}

export default Notification