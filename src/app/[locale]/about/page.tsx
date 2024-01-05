import React from "react";
import { useTranslations } from "next-intl";
import { Text, Box, Heading, Container } from "@chakra-ui/react";

const About = () => {
  const t = useTranslations();
  return (
    <>
      <Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          pl="30px"
          ml="30px"
          mt="30px"
          alignItems="left"
          // backgroundImage="url('/public/mission(2).svg')"
        >
          <Heading>{t("About.mission.title")}</Heading>

          <Text mg="5px">{t("About.mission.body")}</Text>
          <Text>{/* <h1>{t("About.body.subtitle")}</h1> */}</Text>
        </Box>
        <Container bgImage="url(public/mission(2).svg)">
          <Box margin="10px">
            <Heading>{t("About.value.title")}</Heading>
          </Box>
          <Box margin="10px">
            <Heading as="h4" size="md">
              {t("About.value.body.transparent.subtitle")}
            </Heading>

            <Text> {t("About.value.body.transparent.caption")}</Text>
          </Box>
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
        </Container>
      </Box>
    </>
  );
};

export default About;
