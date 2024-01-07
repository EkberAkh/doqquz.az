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
        >
          <Box
            padding="20px"
            backgroundImage="url('../../../../images/underline.png')"
            backgroundSize="contain"
            backgroundRepeat="no-repeat"
          >
            <Heading as="h2">{t("About.value.title")}</Heading>
            <Container width="400px">
              <Box>{t("About.mission.title")}</Box>
              <Box>{t("About.mission.body")}</Box>
            </Container>
          </Box>
          <Box
            flex="1"
            backgroundImage="url('../../../../images/mission.png')"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            backgroundPosition="center"
          ></Box>
        </Box>
      </Box>
      <Box padding="20px">
        <Box
          backgroundImage="url('../../../../images/panel-bg.png')"
          gap="20px"
          backgroundColor="white"
          boxShadow="0 2px 8px rgba(0,0,0,.08)"
          minH="384px"
          display="flex"
        >
          <Box
            padding="20px"
            backgroundImage="url('../../../../images/underline.png')"
            backgroundSize="contain"
            backgroundRepeat="no-repeat"
          >
            {/* <Heading as="h2">{t("About.value.title")}</Heading> */}
            <Box>
              <Text width="400px">
                <Heading as="h2">{t("About.value.title")}</Heading>
                <Text width="400px"></Text>
                <Box>{t("About.value.body.transparent.caption")}</Box>
                <Text> {t("About.value.body.transparent.caption")} </Text>
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              flex="1"
              backgroundImage="url('../../../../images/panel-bg.png')"
            ></Box>
            <Box>
              <Heading as="h4" size="md">
                {t("About.value.body.innovative.subtitle")}
              </Heading>

              <Text>{t("About.value.body.innovative.caption")}</Text>
            </Box>
            <Box>
              <Heading as="h4" size="md">
                {t("About.value.body.team.subtitle")}
              </Heading>
              <Text>{t("About.value.body.team.caption")}</Text>
            </Box>
            <Box>
              <Heading as="h4" size="md">
                {t("About.value.body.tenacity.subtitle")}
              </Heading>
              <Text>{t("About.value.body.tenacity.caption")}</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default About;
