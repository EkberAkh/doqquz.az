'use client'
import { colorObjects } from "@/consts"
import { SearchIcon } from "@chakra-ui/icons"
import { Flex, Box, Button, InputGroup, Input, InputLeftElement, Icon } from "@chakra-ui/react"
import { useTranslations } from "next-intl"

export const Search = () => {
    const t = useTranslations()
    return (
        <Flex width='100%' mt='100px'>
            <Box w='45%'>
                <Button variant='primary' mb='20px' fontWeight='400' cursor='auto'>
                    {t('Home.Header.questions.where')}
                </Button>

                <InputGroup bgColor={colorObjects.white.main} w='100%' p='10px 12px'
                    boxShadow='0 2px 4px rgba(0, 0, 0, 0.1)' borderLeftRadius='10px' borderRight='1px solid #e4e4e4'>
                    <Input placeholder={t('Common.location')} fontSize='1.2rem' outline='none' border='none' />
                </InputGroup>


            </Box>
            <Box w='55%'>
                <Button variant='primary' mb='20px' fontWeight='400' cursor='auto'>
                    {t('Home.Header.questions.jobType')}
                </Button>
                <Box width='100%'>
                    <InputGroup bgColor={colorObjects.white.main} w='100%' p='10px 12px'
                        boxShadow='0 2px 4px rgba(0, 0, 0, 0.1)' borderRightRadius='10px' >
                        <Input placeholder={t('Home.Header.placeholders.jobType')} fontSize='1.2rem' outline='none' border='none' />
                    </InputGroup>

                </Box>
            </Box>
        </Flex >
    )
}