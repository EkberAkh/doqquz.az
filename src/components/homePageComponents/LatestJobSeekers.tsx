'use client'
import { colorObjects } from "@/consts"

import { Flex, Box, Text, Button, Center } from "@chakra-ui/react"
import { motion } from "framer-motion";
import React from "react";
import { DJobSeekers } from "../data/DJobSeekers";
import { useTranslations } from "next-intl";


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
    return (
        <Box paddingX='24px' paddingBottom='80px' >
            <Flex marginBottom='40px' marginTop='60px' justifyContent='space-between'>
                <Text color={colorObjects.black.main} fontSize='1.6rem'>{t('Home.RegisteredJobseekers.title')}
                </Text>
                <Text color={colorObjects.black.secondary} fontSize='1rem' >{t('Home.RegisteredJobseekers.actions.shortLink')}</Text>
            </Flex>
            <Flex alignItems='center' w='100%' justifyContent='space-between'>
                <Button onClick={handlePrevSlide}>
                    ff
                </Button>
                <Flex paddingX='40px' columnGap='50px' >

                    {DJobSeekers.slice(currentIndex, currentIndex + 3).map((seeker) => (
                        <MotionBox initial="hidden" animate="visible" variants={textVariants} transition={transition}>
                            <Center key={seeker.id} padding='35px' position='relative' boxShadow='0 6px 10px rgba(1, 0, 0, 0.2)' flexDirection='column' w='340px'>
                                <Box position='absolute' bgColor={colorObjects.gray.light} w='39px' h='39px' top='15px' right='15px' borderRadius='100px'>

                                </Box>
                                <Center flexDirection='column'>

                                    <Box bgColor={colorObjects.gray.light} w='104px' height='104px' borderRadius='100px' flexDirection='column' mb='8px'>
                                    </Box>
                                    <Text fontSize='16px' color={colorObjects.black.main} fontWeight={600} >
                                        {seeker.name}
                                    </Text>
                                </Center>
                                <Box marginTop='35px' paddingY='35px' w='100%'>
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
                                    <Button w='100%' variant='primary' height='48px' >{t('Home.RegisteredJobseekers.actions.viewProfile')}</Button>
                                </Box>

                            </Center>
                        </MotionBox>
                    )

                    )}

                </Flex>
                <Button onClick={handleNextSlide}>
                    ff
                </Button>
            </Flex>
        </Box >
    )
}
