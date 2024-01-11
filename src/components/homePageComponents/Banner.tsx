'use client'

import { colorObjects } from "@/consts"
import { Flex, Box, Text } from "@chakra-ui/react"
import { Search } from "./Search"
import { useTranslations } from "next-intl"


export const Banner = () => {
   const t = useTranslations()
   return (
      <Box width='100%' height='593px' background="linear-gradient(176deg, rgba(200, 200, 200, 1) 0%, rgba(255, 255, 255, 1) 100%)"
         p='105px 0'>
         <Box paddingX='24px' >
            <Text color={colorObjects.black.main} fontWeight={700} fontSize='1.7rem' marginY='8px' lineHeight='1.5' maxW='649px'
            >{t('Home.Header.title')}
            </Text>

            <Text color={colorObjects.black.secondary} fontSize='1.6rem' maxW='649px'>
               {t.rich('Home.Header.subTitle', {
                  span: (chunks) => <span style={{ color: colorObjects.blue.main }}>{chunks}</span>,
               })}
            </Text>
            <Search />
         </Box>
      </Box>
   )
}