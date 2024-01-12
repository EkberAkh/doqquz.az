import { Button, Card, Flex, FormControl, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import React from 'react'
import CompanyItem from './CompanyItem';
import CompanyFooter from './CompanyFooter';

const Company = () => {
    const t = useTranslations();
    return (
        <>
            <Flex justify='center'>
                <FormControl w='77%'>
                    <InputGroup size='lg' mt='24px' >
                        <Input
                            h='4rem'
                            size={'md'}
                            color='#808080'
                            bg={'#fff'}
                            outline='none'
                            pr='8rem'
                            type='text'
                            placeholder='Şirkət adı'
                        />
                        <Flex align='center'>
                            <InputRightElement width='8rem' h={'100%'} >
                                <Button
                                    // pr={'10px'}
                                    w='100%'
                                    h='3rem'
                                    fontSize='14px'
                                    borderRadius='4px'
                                    mr={'0.6rem'}
                                    color='#fff'
                                    bg="#2a41e8"
                                    boxShadow=" 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)"
                                    _hover={{ }}
                                >
                                    {t('Common.Action.SEARCH')}
                                </Button>
                            </InputRightElement>
                        </Flex>
                    </InputGroup>
                    <CompanyItem />
                </FormControl>
            </Flex>
            {/* <CompanyFooter /> */}
        </>
    )
}

export default Company