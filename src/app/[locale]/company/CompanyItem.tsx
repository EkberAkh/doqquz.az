import CompanyIcon from '@/icons/CompanyIcon'
import { Card, CardBody, Center, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const CompanyItem = () => {
    return (
        <Flex gap={'1.875rem'} mt={'1.875rem'} flexWrap={'wrap'}>

            <Card
                align='center'
                boxShadow={'0 2px 10px rgba(0,0,0,.1)'}
                p='38px'
                mb={'30px'}
                width='calc(33.3% - 20px)'
                cursor={'pointer'}
                _hover={{ transform: 'translateY(-3px)' }}
                transition={'0.3s'}>
                <CardBody textAlign={'center'} alignItems={'center'} justifyContent={'center'}>
                    <Flex
                        align={'center'}
                        justify={'center'}
                        borderRadius='100px'
                        width='70px'
                        height='70px'
                        bg='#bdbdbd'
                        marginBottom={'30px'}
                    >
                        <CompanyIcon
                            width='25'
                            height='25'
                            color='#fafafa'
                        />
                    </Flex>
                    <Text mb={'0.5rem'} color={'#333'} fontWeight={'600'} fontSize={'1.125rem'}>Sirket MMC</Text>
                </CardBody>
            </Card>

            <Card
                align='center'
                boxShadow={'0 2px 10px rgba(0,0,0,.1)'}
                p='38px'
                mb={'30px'}
                width='calc(33.3% - 20px)'
                cursor={'pointer'}
                _hover={{ transform: 'translateY(-3px)' }}
                transition={'0.3s'}>
                <CardBody textAlign={'center'} alignItems={'center'} justifyContent={'center'}>
                    <Flex
                        align={'center'}
                        justify={'center'}
                        borderRadius='100px'
                        width='70px'
                        height='70px'
                        bg='#bdbdbd'
                        marginBottom={'30px'}
                    >
                        <CompanyIcon
                            width='25'
                            height='25'
                            color='#fafafa'
                        />
                    </Flex>
                    <Text mb={'0.5rem'} color={'#333'} fontWeight={'600'} fontSize={'1.125rem'}>Sirket MMC</Text>
                </CardBody>
            </Card>

            <Card
                align='center'
                boxShadow={'0 2px 10px rgba(0,0,0,.1)'}
                p='38px'
                mb={'30px'}
                width='calc(33.3% - 20px)'
                cursor={'pointer'}
                _hover={{ transform: 'translateY(-3px)' }}
                transition={'0.3s'}>

                <CardBody >
                    <Flex
                        align={'center'}
                        justifyContent={'center'}
                        textAlign={'center'}
                        borderRadius='100px'
                        width='70px'
                        height='70px'
                        bg='#bdbdbd'
                        marginBottom={'30px'}
                    >
                        <CompanyIcon
                            width='25'
                            height='25'
                            color='#fafafa'
                        />
                    </Flex>
                    <Text mb={'0.5rem'} color={'#333'} fontWeight={'600'} fontSize={'1.125rem'}>Sirket MMC</Text>
                </CardBody>
            </Card>


        </Flex>
    )
}

export default CompanyItem