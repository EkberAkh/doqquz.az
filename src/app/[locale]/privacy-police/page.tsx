import { Box, Text } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import React from 'react'

const Privacy = () => {
    const t = useTranslations()
  return (
   <Box>
    <Text>
        {t("PrivacyPolice.header")}

    </Text>
   </Box>
  )
}

export default Privacy