"use client";
import {
  Flex,
  Box,
  Image,
  Container,
  Button,
  Text,
  Divider,
  Input,
  Icon,
  Link,
  Tooltip,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Tag,
  useMediaQuery,
} from "@chakra-ui/react";
import logo from "../../public/images/logo.svg";
import { useTranslations } from "next-intl";
import { FaFacebookF, FaTwitter, FaTelegram, FaLinkedin } from "react-icons/fa";
import { ChevronDownIcon } from "@chakra-ui/icons";
import ArrowRightIcon from "@/icons/ArrowRightIcon";
import ScrollToTop from "./ScrollToTop";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { NavigationLink } from "./NavigationLink";

export const Footer = () => {
  const [responsiveHeader] = useMediaQuery("(max-width: 1100px)");
  const t = useTranslations();
  const [selectedLanguage, setSelectedLanguage] = useState("Azərbaycanca");
  const router = useRouter();
  const currentPath = usePathname();
  let role = localStorage.getItem("role");

  useEffect(() => {
    if (currentPath.startsWith("/en")) {
      setSelectedLanguage("English");
    } else if (currentPath.startsWith("/ru")) {
      setSelectedLanguage("Pусский");
    } else {
      setSelectedLanguage("Azərbaycanca");
    }
  }, [currentPath]);

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);

    let langPrefix = "";
    switch (language) {
      case "English":
        langPrefix = "/en";
        break;
      case "Pусский":
        langPrefix = "/ru";
        break;
      case "Azərbaycanca":
      default:
        langPrefix = "/az";
        break;
    }

    // Replace the language segment in the path
    const newPath = currentPath.replace(/^\/(en|ru|az)/, langPrefix);

    // Navigate to the new path
    router.push(newPath);
  };
  return (
    <Box bgColor="#303030" w="100%">
      <Box
        borderBottom={"2px solid #444"}
        justifyContent="space-between"
        w={"100%"}
        minH={"6rem"}
        display={"flex"}
        paddingBottom={responsiveHeader ? "20px" : "0"}
      >
        <Flex
          alignItems={responsiveHeader ? "start" : "center"}
          justifyContent="space-between"
          w="78%"
          margin="0 auto"
          flexDirection={responsiveHeader ? "column" : "row"}
          rowGap={responsiveHeader ? "20px" : "0"}
        >
          <Flex
            w="66%"
            borderRight={responsiveHeader ? 'none' : "2px solid #444"}
            h={"100%"}
            align={"center"}
          >
            <Image
              src={logo.src}
              alt="Logo"
              h="3.5rem"
              pr="16px"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Flex>
          <Box>
            <Flex gap={"20px"} pt={"0.5rem"}>
              <Tooltip
                hasArrow
                label="Facebook"
                bg={"#fff"}
                p={"0.3rem 0.7rem"}
                borderRadius={"0.3rem"}
              >
                <Link
                  href="https://www.facebook.com/doqquz"
                  color={"#fff"}
                  opacity={"0.5"}
                  _hover={{ opacity: "1" }}
                  isExternal
                >
                  <Icon as={FaFacebookF} boxSize={21} />
                </Link>
              </Tooltip>
              <Tooltip
                hasArrow
                label="Twitter"
                bg={"#fff"}
                p={"0.3rem 0.7rem"}
                borderRadius={"0.3rem"}
              >
                <Link
                  href="https://twitter.com/9_doqquz"
                  color={"#fff"}
                  opacity={"0.5"}
                  _hover={{ opacity: "1" }}
                  isExternal
                >
                  <Icon as={FaTwitter} boxSize={21} />
                </Link>
              </Tooltip>
              <Tooltip
                hasArrow
                label="Telegram"
                bg={"#fff"}
                p={"0.3rem 0.7rem"}
                borderRadius={"0.3rem"}
              >
                <Link
                  href="https://t.me/doqquzbaku"
                  color={"#fff"}
                  opacity={"0.5"}
                  _hover={{ opacity: "1" }}
                  isExternal
                >
                  <Icon as={FaTelegram} boxSize={21} />
                </Link>
              </Tooltip>
              <Tooltip
                hasArrow
                label="LinkedIn"
                bg={"#fff"}
                p={"0.3rem 0.7rem"}
                borderRadius={"0.3rem"}
              >
                <Link
                  href="https://www.linkedin.com/company/doqquz"
                  color={"#fff"}
                  opacity={"0.5"}
                  _hover={{ opacity: "1" }}
                  isExternal
                >
                  <Icon as={FaLinkedin} boxSize={21} />
                </Link>
              </Tooltip>
            </Flex>
          </Box>
          <Flex
            borderLeft={responsiveHeader ? 'none' : "2px solid #444"}
            h={"100%"}
            align={"center"}
            pl={responsiveHeader ? "0" : "2rem"}
          >
            <Menu>
              <MenuButton
                color={"#fff"}
                bg={"#444"}
                p={"0.3rem 0.8rem"}
                transition="all 0.2s"
                borderRadius="0.2rem"
                boxShadow={"0 5px 10px rgba(0, 0, 0, 0.3)"}
                _hover={{ bg: "#2a41e8" }}
                _expanded={{ bg: "#2a41e8" }}
                _focus={{ boxShadow: "outline" }}
              >
                {selectedLanguage} <ChevronDownIcon />
              </MenuButton>
              <MenuList
                color={"#444"}
                bg={"#fff"}
                display={"flex"}
                flexDir={"column"}
                rowGap={"0.7rem"}
                p={" 0.5rem 1.2rem"}
                borderRadius="0.3rem"
              >
                <MenuItem onClick={() => handleLanguageChange("Azərbaycanca")}>
                  Azərbaycanca
                </MenuItem>
                <MenuItem onClick={() => handleLanguageChange("English")}>
                  English
                </MenuItem>
                <MenuItem onClick={() => handleLanguageChange("Pусский")}>
                  Pусский
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
      <Divider position="absolute" left="0" right="0" borderColor="#484848" />
      <Box w={"100%"} minH={"19rem"} display={"flex"} alignItems={"center"} paddingTop={responsiveHeader ? '20px' : '0'}>
        <Flex justify="space-between" w={"78%"} margin={"0 auto"} flexDirection={responsiveHeader ? 'column' : 'row'} rowGap={responsiveHeader ? '30px' : '0'}>
          <Flex columnGap="40px" h={"100%"} flexDirection={responsiveHeader ? 'column' : 'row'} rowGap={responsiveHeader ? '30px' : '0'}>
            <Box >
              <Text fontSize="18px" color="#fff" mb="15px" fontWeight={500}>
                {t("Home.Footer.Nav.forCandidates.label")}
              </Text>
              <Flex flexDirection="column" rowGap="0.8rem">
                <Text position={'relative'} fontSize="14px" color="#c0c0c0" _before={{
                  content: '""', position: 'absolute', bottom: '-2px', height: '2.5px', width: '0%', background: '#2a41e8', borderRadius: '3rem', transition: 'width 0.1s linear',
                }} _hover={{
                  _before: {
                    width: '85%'
                  }
                }}>
                  <NavigationLink href="/jobs">
                    {t("Common.Nav.browse_jobs")}
                  </NavigationLink>
                </Text>
                <Text position={'relative'} fontSize="14px" color="#c0c0c0" _before={{
                  content: '""', position: 'absolute', bottom: '-2px', height: '2.5px', width: '0%', background: '#2a41e8', borderRadius: '3rem', transition: 'width 0.1s linear',
                }} _hover={{
                  _before: {
                    width: '65%'
                  }
                }}>
                  <NavigationLink href="/userProfile">
                    {" "}
                    {t("Home.Footer.Nav.forCandidates.addResume")}
                  </NavigationLink>
                </Text>
                <Text position={'relative'} fontSize="14px" color="#c0c0c0" _before={{
                  content: '""', position: 'absolute', bottom: '-2px', height: '2.5px', width: '0%', background: '#2a41e8', borderRadius: '3rem', transition: 'width 0.1s linear',
                }} _hover={{
                  _before: {
                    width: '68%'
                  }
                }}>
                  <NavigationLink href="/company">
                    {t("Common.Nav.browse_companies")}
                  </NavigationLink>
                </Text>
              </Flex>
            </Box>
            <Box>
              <Text fontSize="18px" color="#fff" mb="15px" fontWeight={500}>
                {t("Home.Footer.Nav.forEmployers.label")}
              </Text>
              <Flex flexDirection="column" rowGap="0.8rem">
                <Text position={'relative'} fontSize="14px" color="#c0c0c0" _before={{
                  content: '""', position: 'absolute', bottom: '-2px', height: '2.5px', width: '0%', background: '#2a41e8', borderRadius: '3rem', transition: 'width 0.1s linear',
                }} _hover={{
                  _before: {
                    width: '67%'
                  }
                }}>
                  <NavigationLink href="/employees">
                    {t("Common.Nav.browse_jobseekers")}
                  </NavigationLink>
                </Text>
                <Text position={'relative'} fontSize="14px" color="#c0c0c0" _before={{
                  content: '""', position: 'absolute', bottom: '-2px', height: '2.5px', width: '0%', background: '#2a41e8', borderRadius: '3rem', transition: 'width 0.1s linear',
                }} _hover={{
                  _before: {
                    width : '88%'
                  }
                }}>
                  <NavigationLink
                    href={
                      role === "JOBSEEKER" || role === null
                        ? "/register"
                        : "/managejobs"
                    }
                  >
                    {t("Common.Nav.manage_jobs")}
                  </NavigationLink>
                </Text>
                <Text position={'relative'} fontSize="14px" color="#c0c0c0" _before={{
                  content: '""', position: 'absolute', bottom: '-2px', height: '2.5px', width: '0%', background: '#2a41e8', borderRadius: '3rem', transition: 'width 0.1s linear',
                }} _hover={{
                  _before: {
                    width : '92%'
                  }
                }}>
                  <NavigationLink
                    href={
                      role === "JOBSEEKER" || role === null ? "/register" : "/postJobs"
                    }
                  >
                    {t("Common.Nav.post_a_job")}
                  </NavigationLink>
                </Text>
              </Flex>
            </Box>
            <Box>
              <Text fontSize="18px" color="#fff" mb="15px" fontWeight={500}>
                {t("Home.Footer.Nav.helpfulLinks")}
              </Text>
              <Flex flexDirection="column" rowGap="0.8rem">
              <Text position={'relative'} fontSize="14px" color="#c0c0c0" _before={{
                  content: '""', position: 'absolute', bottom: '-2px', height: '2.5px', width: '0%', background: '#2a41e8', borderRadius: '3rem', transition: 'width 0.1s linear',
                }} _hover={{
                  _before: {
                    width : '65%'
                  }
                }}>
                  <NavigationLink href="/about">
                    {" "}
                    {t("Common.Nav.about")}
                  </NavigationLink>
                </Text>
                <Text position={'relative'} fontSize="14px" color="#c0c0c0" _before={{
                  content: '""', position: 'absolute', bottom: '-2px', height: '2.5px', width: '0%', background: '#2a41e8', borderRadius: '3rem', transition: 'width 0.1s linear',
                }} _hover={{
                  _before: {
                    width : '30%'
                  }
                }}>
                  <NavigationLink href="/contact">
                    {" "}
                    {t("Common.Nav.contact")}
                  </NavigationLink>
                </Text>
                <Text position={'relative'} fontSize="14px" color="#c0c0c0" _before={{
                  content: '""', position: 'absolute', bottom: '-2px', height: '2.5px', width: '0%', background: '#2a41e8', borderRadius: '3rem', transition: 'width 0.1s linear',
                }} _hover={{
                  _before: {
                    width : '85%'
                  }
                }}>
                  <NavigationLink href="/privacy-police">
                    {t("Home.Footer.Nav.privacyPolice")}
                  </NavigationLink>
                </Text>
              </Flex>
            </Box>
            <Box>
              <Text fontSize="18px" color="#fff" mb="15px" fontWeight={500}>
                {t("Home.Footer.Nav.account")}
              </Text>
              <Flex flexDirection="column" rowGap="0.8rem">
              <Text position={'relative'} fontSize="14px" color="#c0c0c0" _before={{
                  content: '""', position: 'absolute', bottom: '-2px', height: '2.5px', width: '0%', background: '#2a41e8', borderRadius: '3rem', transition: 'width 0.1s linear',
                }} _hover={{
                  _before: {
                    width : '50%'
                  }
                }}>
                  <NavigationLink href="/login">
                    {t("Common.Action.LOGIN")}
                  </NavigationLink>
                </Text>
                <Text position={'relative'} fontSize="14px" color="#c0c0c0" _before={{
                  content: '""', position: 'absolute', bottom: '-2px', height: '2px', width: '0%', background: '#2a41e8', borderRadius: '3rem', transition: 'width 0.1s linear',
                }} _hover={{
                  _before: {
                    width : '100%'
                  }
                }}>
                  <NavigationLink href="/userProfile">
                    {t("Common.Menu.profile.label")}
                  </NavigationLink>
                </Text>
              </Flex>
            </Box>
          </Flex>

          <Box width={responsiveHeader ? '100%' : '32%'}>
            <Text fontSize="18px" color="#fff" mb="15px" ml={"3px"}>
              {t("Home.Footer.Subscribe.title")}
            </Text>
            <Flex flexDir="column" rowGap="10px">
              <Text
                fontSize="14px"
                color="#c0c0c0"
                lineHeight={"1.5rem"}
                mb={"1rem"}
              >
                {t("Home.Footer.Subscribe.description")}
              </Text>
              <Flex columnGap="8px">
                <Input
                  bgColor="rgb(38, 38, 38)"
                  color="#808080"
                  h="48px"
                  w="100%"
                  p={"0 1rem"}
                  borderColor="transparent"
                  boxShadow={"0 0px 1px 1px rgb(0 0 0 / 12%)"}
                  borderRadius={"0.3rem"}
                  placeholder="example@domain.com"
                  _placeholder={{ color: "#808080", opacity: "0.5" }}
                />
                <Button
                  bg={"#2a41e8"}
                  color={"#fff"}
                  width={"60px"}
                  height={"48px"}
                  borderRadius={"0.2rem"}
                  _hover={{
                    bg: "#fff",
                    color: "#000",
                    transition: "bg 0.6s, color 0.6s",
                  }}
                >
                  <ArrowRightIcon width={"25"} height={"25"} />{" "}
                </Button>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Divider position="absolute" left="0" right="0" borderColor="#484848" />
      <Container
        w="100%"
        fontSize={{ base: "12px", lg: "0.9rem" }}
        color={"silver"}
        textAlign="center"
        paddingY="23px"
        borderTop={"2px solid #444"}
      >
        © 2024 <Tag color={"#fff"}> Doqquz</Tag>.Bütün hüquqlar qorunur.
      </Container>
      <ScrollToTop />
    </Box>
  );
};
