'use client'
import { colorObjects } from "@/consts"
import { useEffect } from "react";
import { useState } from "react";

import { Flex, Box, Text, Button, Center } from "@chakra-ui/react"
import { motion } from "framer-motion";
import React from "react";
import { DJobSeekers } from "../data/DJobSeekers";
import { useTranslations } from "next-intl";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { IoIosArrowRoundForward } from "react-icons/io";


export const LatestJobSeekers = () => {

    const t = useTranslations()
    const MotionBox = motion(Box);
    const textVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };
    const transition = {
        duration: 0.9,
    };
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const handlePrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? DJobSeekers.length - 3 : prevIndex - 3));
    };

    const handleNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 3 >= DJobSeekers.length ? 0 : prevIndex + 3));
    };

    const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://neo-814m.onrender.com/v1/jobseeker/list?skip=0&take=9');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result.list);
                console.log(result.list);
                
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };
        console.log(data);
        
        fetchData();
    }, []);
    return (
        <Flex justify={'center'}>
            <Box paddingX='24px' paddingBottom='80px' width={'90%'}>
                <Flex marginBottom='40px' marginTop='60px' justifyContent='space-between'>
                    <Text color={colorObjects.black.main} fontSize='1.5rem' >{t('Home.RegisteredJobseekers.title')}
                    </Text>
                    <Text color={colorObjects.black.secondary} fontSize='1rem' >{t('Home.RegisteredJobseekers.actions.shortLink')}</Text>
                </Flex>
                <Flex alignItems='center' w='100%' justifyContent='space-between'>
                    <Button onClick={handlePrevSlide}>
                        <ChevronLeftIcon height='20px' width='20px' />
                    </Button>
                    <Flex paddingX='40px' columnGap='30px' >

                        {data && data.slice(currentIndex, currentIndex + 3).map((seeker, index) => (
                            <MotionBox key={index} initial="hidden" animate="visible" variants={textVariants} transition={transition}>
                                <Center key={seeker.id} padding='35px' position='relative' boxShadow='0 6px 10px rgba(1, 0, 0, 0.2)' flexDirection='column' w='340px'>
                                    <Box position='absolute' bgColor={colorObjects.gray.light} w='39px' h='39px' top='15px' right='15px' borderRadius='100px'>

                                    </Box>
                                    <Center flexDirection='column'>

                                        <Box bgColor={colorObjects.gray.light} w='104px' height='104px' borderRadius='100px' flexDirection='column' mb='8px'>
                                        </Box>
                                        <Text fontSize='16px' color={colorObjects.black.main} fontWeight={600} >
                                            {seeker.firstName}
                                        </Text>
                                    </Center>
                                    <Box marginTop='35px' paddingY='30px' w='100%'>
                                        <Flex justifyContent='space-between' fontSize='16px' mb='30px'>
                                            <Box fontWeight={600}>
                                                <Text color={colorObjects.black.secondary}>{t('Common.GENDER.label')}</Text>
                                                <Text>{seeker.gender}</Text>
                                            </Box>
                                            <Box fontWeight={600}>
                                                <Text color={colorObjects.black.secondary}>Maaş</Text>
                                                <Text>{seeker.salary}</Text>
                                            </Box>
                                        </Flex>
                                        <Button w='100%' bg={'#2a41e8'} color={'#fff'} variant='primary' height='48px' >{t('Home.RegisteredJobseekers.actions.viewProfile')}</Button>
                                    </Box>

                                </Center>
                            </MotionBox>
                        )

                        )}

                    </Flex>
                    <Button onClick={handleNextSlide}>
                        <ChevronRightIcon height='20px' width='20px' />
                    </Button>
                </Flex>
            </Box >
        </Flex>
    )
}

