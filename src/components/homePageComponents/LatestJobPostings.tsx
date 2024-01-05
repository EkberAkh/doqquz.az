'use client'
import { colorObjects } from "@/consts"
import { Flex, Text } from "@chakra-ui/react"
import { useTranslations } from "next-intl"

export const LatestJobPostings = () => {
    const t = useTranslations()
    return (
        <Flex marginBottom='40px' marginTop='60px' justifyContent='space-between' paddingX='24px'>
            <Text color={colorObjects.black.main} fontSize='1.6rem'>{t('Home.JobAnnouncement.title')}
            </Text>
            <Text color={colorObjects.black.secondary} fontSize='1rem' >{t('Home.JobAnnouncement.actions.shortLink')}</Text>
        </Flex>
    )
}