"use client";
import { colorObjects } from "@/consts";
import { useCurrentLang } from "@/hooks";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  Button,
  InputGroup,
  Input,
  InputLeftElement,
  Icon,
  InputRightElement,
} from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export const Search = () => {
  const t = useTranslations();
  const router = useRouter();
  const lang = useCurrentLang();
  const handleClick = () => {
    router.push(`${lang}/jobs`);
  };
  return (
    <Flex
      width="100%"
      mt={{ base: "20px", lg: "100px" }}
      w={"100%"}
      justify={"center"}
    >
      <Flex width={"100%"} display={{ base: "block", lg: "flex" }}>
        <Box w={{ base: "100%", lg: "45%" }} mb={{ base: "40px", lg: "0" }}>
          <Button
            variant="primary"
            mb="20px"
            bg={"#2a41e8"}
            color={"#fff"}
            fontWeight="400"
            cursor="auto"
          >
            {t("Home.Header.questions.where")}
          </Button>

          <InputGroup
            bgColor={colorObjects.white.main}
            w="100%"
            p="10px 12px"
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
            borderLeftRadius="5px"
            borderRight="1px solid #e4e4e4"
          >
            <Input
              placeholder={t("Common.location")}
              fontSize={{ base: "16px", lg: "1.2rem" }}
              outline="none"
              border="none"
            />
          </InputGroup>
        </Box>
        <Box w={{ base: "100%", lg: "55%" }}>
          <Button
            variant="primary"
            mb="20px"
            bg={"#2a41e8"}
            color={"#fff"}
            fontWeight="400"
            cursor="auto"
          >
            {t("Home.Header.questions.jobType")}
          </Button>
          <Box width="100%">
            <InputGroup
              bgColor={colorObjects.white.main}
              w="100%"
              p="10px"
              boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
              borderRightRadius="5px"
            >
              <Input
                placeholder={t("Home.Header.placeholders.jobType")}
                fontSize={{ base: "16px", lg: "1.2rem" }}
                width={{ base: "100%", lg: "81%" }}
                outline="none"
                border="none"
              />
              <InputRightElement
                width="8rem"
                h={"100%"}
                display={{ base: "none", lg: "flex" }}
              >
                <Button
                  onClick={handleClick}
                  w="100%"
                  h="3rem"
                  mr={"10px"}
                  fontSize="14px"
                  borderRadius="4px"
                  color="#fff"
                  bg="#2a41e8"
                  boxShadow=" 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)"
                  _hover={{}}
                >
                  {t("Common.Action.SEARCH")}
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};
