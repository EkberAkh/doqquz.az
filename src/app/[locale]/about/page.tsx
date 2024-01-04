import React from "react";
import { useTranslations } from "next-intl";
import { Text, Box, Heading } from "@chakra-ui/react";

const About = () => {
  const t = useTranslations();
  return (
    <>
      <Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="start"
          alignItems="left"
        >
          <Heading>{t("About.mission.title")}</Heading>
          <Text>{t("About.mission.body")}</Text>
          <Text>{/* <h1>{t("About.body.subtitle")}</h1> */}</Text>
        </Box>
        <Box>
          <Heading>{t("About.value.title")}</Heading>
          <Text> {t("About.value.body.transparent.subtitle")}</Text>
          <Text> {t("About.value.body.transparent.caption")}</Text>
          <Text>{t("About.value.body.innovative.subtitle")}</Text>
          <Text>{t("About.value.body.innovative.caption")}</Text>
          <Text>{t("About.value.body.team.subtitle")}</Text>
          <Text>{t("About.value.body.team.caption")}</Text>
          <Text>{t("About.value.body.tenacity.subtitle")}</Text>
          <Text>{t("About.value.body.tenacity.caption")}</Text>
        </Box>
      </Box>
    </>
  );
};

export default About;
