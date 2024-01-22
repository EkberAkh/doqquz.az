import React from "react";
import { useTranslations } from "next-intl";
import { Text, Box, Heading, Container } from "@chakra-ui/react";
// import image from '../../../../public/images/mission.png'
const About = () => {
  const t = useTranslations();
  return (
    <>
      <Box padding="20px">
        <Box
          gap="20px"
          backgroundColor="white"
          boxShadow="0 2px 8px rgba(0,0,0,.08)"
          minH="384px"
          display="flex"
          mb="20px"
        >
          <Box
            padding="20px"
            gap="60px"
            display="flex"
            justifyContent="center"
            flexDirection="column"
            textAlign="center"
          >
            <Heading
              backgroundImage="url('../../../../images/underline.png')"
              backgroundPosition="bottom"
              backgroundSize="contain"
              backgroundRepeat="no-repeat"
              fontSize={{ base: "40px", lg: "48px" }}
              fontWeight={500}
              minHeight="76px"
            >
              {t("About.mission.title")}
            </Heading>
            <Text
              width={{ base: "100%", lg: "400px" }}
              fontSize={{ base: "18px", lg: "20px" }}
              fontWeight="400"
            >
              {t("About.mission.body")}
            </Text>
          </Box>
          <Box
            flex="1"
            backgroundImage="url('../../../../images/mission.png')"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            backgroundPosition="center"
          ></Box>
        </Box>
        <Box
          gap="20px"
          backgroundColor="white"
          boxShadow="0 2px 8px rgba(0,0,0,.08)"
          minH="384px"
          display="flex"
        >
          <Box
            padding="20px"
            display="flex"
            justifyContent="center"
            flexDirection="column"
            textAlign="center"
            w={{ base: "100%", lg: "50%" }}
          >
            <Heading fontSize="48px" fontWeight={500} mb="12px">
              {t("About.value.title")}
            </Heading>

            <Box marginY="10px">
              <Heading as="h4" size="md">
                {t("About.value.body.transparent.subtitle")}
              </Heading>

              <Text> {t("About.value.body.transparent.caption")}</Text>
            </Box>
            <Box marginY="10px">
              <Heading as="h4" size="md">
                {t("About.value.body.innovative.subtitle")}
              </Heading>

              <Text>{t("About.value.body.innovative.caption")}</Text>
            </Box>
            <Box marginY="10px">
              <Heading as="h4" size="md">
                {t("About.value.body.team.subtitle")}
              </Heading>
              <Text>{t("About.value.body.team.caption")}</Text>
            </Box>
            <Box marginY="10px">
              <Heading as="h4" size="md">
                {t("About.value.body.tenacity.subtitle")}
              </Heading>
              <Text>{t("About.value.body.tenacity.caption")}</Text>
            </Box>
          </Box>
          <Box
            flex="1"
            backgroundImage="url('../../../../images/mission2.svg')"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            backgroundPosition="center"
            display={{ base: "none", lg: "block" }}
          ></Box>
        </Box>
      </Box>
    </>
  );
};

export default About;
