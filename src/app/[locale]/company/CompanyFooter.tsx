'use client'
import { Divider, Flex, Text, Link, Mark, Icon, Tooltip } from '@chakra-ui/react'
import { FaFacebookF, FaLinkedin, FaTelegram, FaTwitter } from 'react-icons/fa';
import React from 'react'

const CompanyFooter = () => {
    return (
        <>
            <Divider />
            <Flex p={'24px 60px 24px 48px'} w={'100%'} justifyContent={'space-between'}>
                <Text color={'#333'}>© 2024 <Mark fontWeight={600}> Doqquz.</Mark>Bütün hüquqlar qorunur. </Text>
                <Flex gap={'15px'} >
                    <Tooltip hasArrow label='Facebook'>
                        <Link href='https://www.facebook.com/doqquz' opacity={'0.5'} _hover={{ opacity: '1' }} isExternal>
                            <Icon as={FaFacebookF} boxSize={6} />
                        </Link>
                    </Tooltip>
                    <Tooltip hasArrow label='Twitter'>
                        <Link href='https://twitter.com/9_doqquz' opacity={'0.5'} _hover={{ opacity: '1' }} isExternal>
                            <Icon as={FaTwitter} boxSize={6} />
                        </Link>
                    </Tooltip>
                    <Tooltip hasArrow label='Telegram'>
                        <Link href='https://t.me/doqquzbaku' opacity={'0.5'} _hover={{ opacity: '1' }} isExternal>
                            <Icon as={FaTelegram} boxSize={6} />
                        </Link>
                    </Tooltip>
                    <Tooltip hasArrow label='LinkedIn'>
                        <Link href='https://www.linkedin.com/company/doqquz' opacity={'0.5'} _hover={{ opacity: '1' }} isExternal>
                            <Icon as={FaLinkedin} boxSize={6} />
                        </Link>
                    </Tooltip>
                </Flex>
            </Flex>
        </>
    )
}

export default CompanyFooter;