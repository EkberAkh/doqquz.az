"use client";
import React, { useEffect, useState } from "react";
import logo from "../../public/images/logo.svg";
import dropdown from "../../public/images/down-arrow-square-outlined-button.png";
import {
  Image,
  Button,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  HStack,
  ThemeProvider,
  color,
  Text,
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Avatar,
  Flex,
  Divider,
  Img
} from "@chakra-ui/react";
import ChevronDownIcon from "@/icons/ChewronDownIcon";
import ArrowForwardIcon from "@/icons/ArrowForwardIcon";
import { extendedTheme } from "@/consts";
import { useTranslations } from "next-intl";
import Cookies from "js-cookie";
import { usePathname, useRouter } from "next/navigation";
import { NavigationLink } from "./NavigationLink";
import { EditIcon } from "@chakra-ui/icons";
import { setMaxIdleHTTPParsers } from "http";

import NotificationIcon from "@/icons/NotificationIcon";
import NotifiedIcon from "@/icons/NotifiedIcon";
import { BiDockRight } from "react-icons/bi";
import { relative } from "path";
import GhostPng from './../../public/images/ghost.png'

import { useCurrentLang } from "@/hooks";


interface IData {
  firstName: string;
  lastName: string;
  name: string;
}
function Header() {
  const token = Cookies.get("token");
  const [data, setData] = useState<IData>();
  const [isLoading, setIsLoading] = useState(true);
  const [role, setRole] = useState("");
  console.log(token);

  const router = useRouter();
  const currentLang = useCurrentLang();
  const path = usePathname();

  const t = useTranslations();

  const logOutHandler = () => {
    Cookies.remove("token");
    Cookies.remove("userId");
    localStorage.removeItem("role");
    location.reload();
  };

  async function fetchUserData() {
    // Assuming you have the token stored in cookies

    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Token: `${token}`,
      },
    };

    try {
      const response = await fetch(
        "https://neo-814m.onrender.com/v1/user",
        requestOptions
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      console.log(data.role);
      setRole(data.role);
      localStorage.setItem("role", data.role);
      // Directly return the role and id from this function
      Cookies.set("userId", data.id);

      return { id: data.id, role: data.role };
    } catch (error) {
      console.error("There was an error fetching the user data:", error);
    }
  }
  async function fetchJobseekerData(id: number, role: string) {
    const url =
      role === "JOBSEEKER"
        ? `https://neo-814m.onrender.com/v1/jobseeker/userId/${id}`
        : `https://neo-814m.onrender.com/v1/company/userId/${id}`;
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Token: `${token}`, // Include the token in the Authorization header
      },
    };

    try {
      const response = await fetch(url, requestOptions);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const jobseekerData = await response.json();
      setData(jobseekerData);

      return jobseekerData;
    } catch (error) {
      console.error("There was an error fetching the jobseeker data:", error);
    }
  }

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const userData = await fetchUserData();

      if (userData) {
        await fetchJobseekerData(userData.id, userData.role);
      }
      setIsLoading(false);
    }

    if (token) {
      fetchData();
    } else {
      setIsLoading(false); // Set loading to false if there is no token
    }
  }, [token]);
  return (
    <ThemeProvider theme={extendedTheme} >
      <HStack
        align={"center"}
        minH={20}
        p="10px 25px"
        justifyContent={"space-between"}
        boxShadow="0 0 18px 0 rgba(0, 0, 0, 0.12)"
      >
        <HStack color="rgb(102, 102, 102)">
          <Image
            src={logo.src}
            alt="Logo"
            h="60px"
            pr="16px"
            borderRight="1px solid rgb(102, 102, 102)"
          />
          <NavigationLink href="/" style={{ padding: "6px 16px" }}>
            {t("Common.Nav.home")}
          </NavigationLink>
          <Menu>
            <MenuButton
              as={Button}
              fontWeight={500}
              bgColor="transparent"
              rightIcon={<ChevronDownIcon width={"20"} height={"22"} />}
              _hover={{ textDecoration: "none", color: "rgb(42, 65, 232)" }}
            >
              {t("Common.Nav.jobs")}
            </MenuButton>
            <MenuList>
              <MenuItem>
                <NavigationLink href="/jobs">
                  {t("Common.Nav.browse_jobs")}
                </NavigationLink>
              </MenuItem>
              <MenuItem>
                <NavigationLink href="/company">
                  {t("Common.Nav.browse_companies")}
                </NavigationLink>{" "}
              </MenuItem>
            </MenuList>
          </Menu>
          <Menu>

            {role === "COMPANY" ? (
              <MenuButton
                as={Button}
                fontWeight={500}
                bgColor="transparent"
                {...(role === "COMPANY" && {
                  rightIcon: <ChevronDownIcon width={"20"} height={"22"} />,
                })}
                _hover={{ textDecoration: "none", color: "rgb(42, 65, 232)" }}
              >
                {t("Common.Nav.employees")}
              </MenuButton>
            ) : (
              <Box
                bgColor="transparent"
                _hover={{ textDecoration: "none", color: "rgb(42, 65, 232)" }}
              >

                <NavigationLink href="/employees">
                  {t("Common.Nav.employees")}
                </NavigationLink>

              </Box>
            )}
            {role === "COMPANY" && (
              <MenuList>
                <MenuItem>
                  <NavigationLink href="/employees">
                    {t("Common.Nav.browse_jobseekers")}
                  </NavigationLink>
                </MenuItem>
                <MenuItem>
                  <NavigationLink href="/managejobs">
                    {t("Common.Nav.manage_jobs")}
                  </NavigationLink>
                </MenuItem>
                <MenuItem>
                  <NavigationLink href="/postJobs">
                    {t("Common.Nav.post_a_job")}
                  </NavigationLink>
                </MenuItem>
              </MenuList>
            )}

          </Menu>
          <NavigationLink
            href="/contact"
            style={{ padding: "6px 16px" }}
          // _hover={{ textDecoration: "none", color: "rgb(42, 65, 232)" }}
          >
            {t("Common.Nav.contact")}
          </NavigationLink>
        </HStack>
        {token ? (
          <Flex >
            <Box w={'4rem'} borderRight={'1px solid black'}>
              <Popover>
                <PopoverTrigger>
                  <Box
                    h={'100%'}
                    textAlign={'center'}>
                    <NotificationIcon width="28" height="28" />
                  </Box>
                </PopoverTrigger>
                <PopoverContent right={'1rem'} bg={'#fff'}>
                  <Flex borderBottom={'1px solid rgb(119, 119, 119)'}>
                    <Flex justify={'space-between'} w={'100%'} p={'1rem'} >
                      <PopoverHeader color={'red'} border={'none'} fontWeight={600} fontSize={'1.1rem'}>Notifications</PopoverHeader>
                      <NotifiedIcon width="24" height="24" color="red" />
                    </Flex>
                  </Flex>
                  <PopoverBody h={'25rem'}>
                    <Flex justify={'center'} h={'100%'} align={'center'}>
                      <Img src={GhostPng.src} w={'8rem'} />
                    </Flex>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Box>


            <Box ml={'2rem'}>
              <Popover>
                <PopoverTrigger>
                  <Box
                    cursor="pointer"
                    backgroundColor="transparent"
                    _active={{}}
                    _hover={{}}
                  >
                    <Avatar size="md"></Avatar>
                  </Box>
                </PopoverTrigger>
                <PopoverContent padding="10px" right={'1rem'} bg="white">
                  <PopoverCloseButton />
                  <PopoverHeader gap="10px" display="flex">
                    <Avatar size="md"></Avatar>
                    <Box>
                      {!isLoading && data && (
                        <Text>
                          {" "}
                          {role === "JOBSEEKER"
                            ? `${data.firstName} ${data.lastName}`
                            : `${data.name}`}
                        </Text>
                      )}
                      <Text textDecoration="underline" color="#ECA400">
                        <NavigationLink href="/userProfile">
                          {t("Common.Warning.completeAccount")}
                        </NavigationLink>
                      </Text>
                    </Box>
                  </PopoverHeader>
                  <PopoverBody display="flex" flexDirection="column" gap="8px">
                    <Box alignItems="center" display="flex">
                      <EditIcon />
                      <Text>
                        <NavigationLink href="/userProfile">
                          {t("Common.Menu.profile.label")}
                        </NavigationLink>
                      </Text>
                    </Box>
                    <Box alignItems="center" display="flex">
                      <EditIcon />

                      <Text>
                        <NavigationLink href="/bookmarks">
                          {t("Common.Nav.bookmarks")}
                        </NavigationLink>
                      </Text>
                    </Box>
                    <Box alignItems="center" display="flex">
                      <EditIcon />

                      <Button
                        _hover={{}}
                        _active={{}}
                        height="auto"
                        backgroundColor="transparent"
                        padding={0}
                        onClick={logOutHandler}
                      >
                        {t("Common.Nav.LOG_OUT.label")}
                      </Button>
                    </Box>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Box>
          </Flex>
        ) : (
          <HStack
            align={"center"}
            color="rgb(102, 102, 102)"
            _hover={{ color: "rgb(42, 65, 232)" }}
            fontWeight={"500"}
          >
            <ArrowForwardIcon width={"20"} height={"24"} mr={""} />
            <Button p={0} bg={"white"} variant="">
              <NavigationLink href="/login">{`${t("Common.Action.LOGIN")} / ${t(
                "Common.Action.REGISTER"
              )} `}</NavigationLink>
            </Button>
          </HStack>
        )}
      </HStack>
    </ThemeProvider>
  );
}
export default Header;
