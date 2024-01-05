import React from "react";
import { useTranslations } from "next-intl";
import { Text, Box, Heading, Container } from "@chakra-ui/react";
// import image from '../../../../public/images/mission.png'
const About = () => {
  const t = useTranslations();
  return (
    <>
      <Box padding='20px' >
        <Box gap='20px' backgroundColor='white'  boxShadow='0 2px 8px rgba(0,0,0,.08)' minH="384px" display="flex" >
          <Box padding='20px' backgroundImage="url('../../../../images/underline.png')"
            backgroundSize="contain"
            backgroundRepeat="no-repeat">
            <Heading as='h2'>Missiyamiz</Heading>
            <Text width='400px'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat odit quidem totam ipsam mollitia voluptatem corporis eius magnam vel? Ratione delectus eos quaerat earum, doloremque esse eaque officiis perspiciatis labore.
            </Text>

          </Box>
          <Box
          flex='1'
            backgroundImage="url('../../../../images/mission.png')"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            backgroundPosition='center'
          ></Box>
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
