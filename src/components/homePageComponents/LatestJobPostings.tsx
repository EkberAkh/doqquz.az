'use client'
import { colorObjects } from "@/consts"
import { Box, Button, Card, CardBody, Flex, HStack, Icon, Text, VStack } from "@chakra-ui/react"
import { useTranslations } from "next-intl"
import ArrowRightIcon from "@/icons/ArrowRightIcon"
import CompanyIcon from "@/icons/CompanyIcon"
import PlaceIcon from '@/icons/PlaceIcon'
import ExperienceIcon from '@/icons/ExperienceIcon'
import OclockIcon from '@/icons/OclockIcon'
import { useState } from "react"

export const LatestJobPostings = () => {
    const [isHovered, setIsHovered] = useState(false);

    const t = useTranslations()
    return (
        <>
            <VStack w={'100%'} justify={'center'} mb={'4rem'} gap={'0'} >
                <Flex justifyContent='space-between' w={'89%'} justify={'center'} marginBottom={'2rem'}>
                    <Text color={colorObjects.black.main} fontSize='1.6rem'>{t('Home.JobAnnouncement.title')}
                    </Text>
                    <Text color={colorObjects.black.secondary}
                        _hover={{ color: '#2a41e8' }}
                        cursor={'pointer'}
                        fontSize='1rem'
                        mr={'0.7rem'}
                    >
                        {t('Home.JobAnnouncement.actions.shortLink')}
                        <ArrowRightIcon width={"25"} height={"25"} /></Text>
                </Flex>
                <Card width={'90%'} borderBottomRadius={'0'} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} borderLeft={`2px solid ${isHovered ? '#2a41e8' : ' transparent'}`} >
                    <CardBody >
                        <Flex width={'100%'} justify={'space-between'}>
                            <Flex>
                                <Flex
                                    align={'center'}
                                    justify={'center'}
                                    borderRadius='100px'
                                    width='56px'
                                    height='56px'
                                    bg='#bdbdbd'
                                >
                                    <CompanyIcon
                                        width='25'
                                        height='25'
                                        color='#fafafa'
                                    />
                                </Flex>
                                <VStack ml={'2rem'}>
                                    <Flex w={'96%'} justify={'flex-start'} fontWeight={700}>Helpdesk</Flex>
                                    <HStack columnGap={'1.3rem'}>
                                        <Flex columnGap={'0.2rem'}>
                                            <PlaceIcon width="25" height="25" color="rgb(119, 119, 119)" />
                                            <Text>Mingəçevir, Azerbaijan</Text>
                                        </Flex>
                                        <Flex columnGap={'0.2rem'}>
                                            <ExperienceIcon width="25" height="25" color="rgb(119, 119, 119)" />
                                            <Text>Təcrübə</Text>
                                        </Flex>
                                        <Flex columnGap={'0.2rem'}>
                                            <OclockIcon width="25" height="25" color="rgb(119, 119, 119)" />
                                            <Text>11.01.2024</Text>
                                        </Flex>
                                    </HStack>
                                </VStack>
                            </Flex>
                            <Button
                                w='7rem'
                                h='3rem'
                                mr={'10px'}
                                fontSize='14px'
                                borderRadius='4px'
                                color={isHovered ? '#fff' : '#000'}
                                bg={isHovered ? '#2a41e8' : '#f0f0f0'}
                                boxShadow=" 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)"
                                _hover={{}}
                            >
                                {t('Common.Action.REQUEST')}
                            </Button>
                        </Flex>
                    </CardBody>
                </Card>
            </VStack>
        </>
    )
}