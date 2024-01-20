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
         height={{base:"auto",lg:"93vh"}}
         p={{base:"60px 0",lg:"105px 0"}}
         justify={'center'} 
         backgroundImage={{base:"linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(2,0,36,0.26234243697478987) 100%)",lg:"url('../../../../images/background.jpg')"}}
         backgroundSize="cover"
         backgroundRepeat="no-repeat"
         backgroundPosition='center'
         >
         <Box paddingX={{base:"0",lg:"1.5rem"}} w={'90%'}  >
            <Text color={colorObjects.black.main} fontWeight={700} fontSize={{base:"23px",lg:"1.7rem"}} marginY='0.5rem' lineHeight='1.5' maxW='41rem'
            >{t('Home.Header.title')}
            </Text>

            <Text color={colorObjects.black.secondary} fontSize={{base:"20px",lg:"1.6rem"}} maxW='649px'>
               {t.rich('Home.Header.subTitle', {
                  span: (chunks) => <span style={{ color: colorObjects.blue.main, fontWeight: 600 }}>{chunks}</span>
               })}
            </Text>
            <Search />
         </Box>
      </Flex>
   )
}