import { Box, Container, Divider, Heading, Link, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

const Privacy = () => {
  const t = useTranslations("PrivacyPolice");

  return (
    <Container
      borderRadius="4px"
      boxShadow="0 2px 8px rgba(0,0,0,.08)"
      maxW="container.lg"
      bg="whiteAlpha.900"
      p="12px"
    >
      <Box>
        <Heading ml="12px" size="md">
          {t("header")}
        </Heading>
        <Divider variant="solid" my="12px" />
        <Text>
          {t.rich("mainSection", {
            strong: (chunks) => <strong>{chunks}</strong>,
            br: () => <br />,
            a: (chunks) => (
              <Link fontWeight="500" color="gray.700" href={chunks as string}>
                {chunks}
              </Link>
            ),
            span: (chunks) => (
              <Text color="blackAlpha.800" fontSize="sm" mb="8px">
                {chunks}
              </Text>
            ),
          })}
        </Text>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((item) => (
          <Text mb="12px" key={item}>
            {t.rich(`${item}`, {
              h6: (chunks) => (
                <Heading mb="4px" as="h6" size="l">
                  {chunks}
                </Heading>
              ),
              subtitle1: (chunks) => (
                <>
                  <Text as="strong" fontSize="sm">
                    {chunks}
                  </Text>
                  <br />
                </>
              ),
              p: (chunks) => (
                <Text my="8px" color="blackAlpha.800" fontSize="sm">
                  {chunks}
                </Text>
              ),
            })}
          </Text>
        ))}
      </Box>
    </Container>
  );
};

export default Privacy;
