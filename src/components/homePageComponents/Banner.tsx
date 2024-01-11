'use client'

import { colorObjects } from "@/consts"
import { Flex, Box, Text } from "@chakra-ui/react"
import { Search } from "./Search"
import { useTranslations } from "next-intl"
import image from './../../../public/images/background.jpg'

export const Banner = () => {
   const t = useTranslations()
   return (
      <Flex width='100%'
       height='93vh'
         p='105px 0' 
         justify={'center'} 
         backgroundImage="url('../../../../images/background.jpg')"
         backgroundSize="cover"
         backgroundRepeat="no-repeat"
         backgroundPosition='center'
         >
         <Box paddingX='1.5rem' w={'90%'}  >
            <Text color={colorObjects.black.main} fontWeight={700} fontSize='1.7rem' marginY='0.5rem' lineHeight='1.5' maxW='41rem'
            >{t('Home.Header.title')}
            </Text>

            <Text color={colorObjects.black.secondary} fontSize='1.6rem' maxW='649px'>
               {t.rich('Home.Header.subTitle', {
                  span: (chunks) => <span style={{ color: colorObjects.blue.main, fontWeight: 600 }}>{chunks}</span>
               })}
            </Text>
            <Search />
         </Box>
      </Flex>
   )
}