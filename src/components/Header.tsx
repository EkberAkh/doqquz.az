"use client";
import React, { useEffect, useState } from "react";
import logo from "../../public/images/logo.svg";

import {
  Image,
  Button,

  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  HStack,
  ThemeProvider,
  Text,
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Avatar,
  Flex,
  Img,
  useMediaQuery,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  useDisclosure
} from "@chakra-ui/react";
import ChevronDownIcon from "@/icons/ChewronDownIcon";
import ArrowForwardIcon from "@/icons/ArrowForwardIcon";
import { extendedTheme } from "@/consts";
import { useTranslations } from "next-intl";
import Cookies from "js-cookie";
import { usePathname, useRouter } from "next/navigation";
import { NavigationLink } from "./NavigationLink";
import { EditIcon, HamburgerIcon } from "@chakra-ui/icons";
import { setMaxIdleHTTPParsers } from "http";

import NotificationIcon from "@/icons/NotificationIcon";
import NotifiedIcon from "@/icons/NotifiedIcon";
import { BiDockRight } from "react-icons/bi";
import { relative } from "path";

import { useCurrentLang } from "@/hooks";
import LetteredAvatar from 'react-lettered-avatar';
import { HeaderMobile } from "./HeaderMobile";
import Notification from "./notifications/Notification";


interface IData {
  firstName: string;
  lastName: string;
  name: string;
}
function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const token = Cookies.get("token");
  const [userData,setUserData] = useState()
  const [data, setData] = useState<IData>();
  const [isLoading, setIsLoading] = useState(true);
  const [role, setRole] = useState("");
  console.log(token);

  const router = useRouter();
  const currentLang = useCurrentLang();
  const path = usePathname();
console.log(path);

  const t = useTranslations();

  const logOutHandler = () => {
    Cookies.remove("token");
    Cookies.remove("userId");
    localStorage.removeItem("role");
   location.reload()
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
      setUserData(data)
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
      console.log(jobseekerData);
      
      Cookies.set('userProfileId',jobseekerData.id)
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
  console.log(userData);
  const [responsiveHeader] = useMediaQuery("(max-width: 1100px)");
  return (
    <ThemeProvider theme={extendedTheme} >
      <HStack
      align={{base:"start",lg:"center"}}
        alignItems='center'
        minH={20}
        p="10px 25px"
        justifyContent={"space-between"}
        boxShadow="0 0 18px 0 rgba(0, 0, 0, 0.12)"
      >
           {responsiveHeader ? (
          <HeaderMobile />
        ) :(
        <HStack color="rgb(102, 102, 102)">
         <NavigationLink href='/'>
         <Image
            src={logo.src}
            alt="Logo"
            h="60px"
            pr="16px"
            borderRight="1px solid rgb(102, 102, 102)"
          />
         </NavigationLink>
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
                  <NavigationLink href={role === 'COMPANY'? "/managejobs" : '/login'}>
                    {t("Common.Nav.manage_jobs")}
                  </NavigationLink>
                </MenuItem>
                <MenuItem>
                  <NavigationLink href={role === 'COMPANY' ? "/postJobs":'/login'}>
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
        )}
        {token ? (
          <Flex >
            
          <Notification/>

            <Box ml={'2rem'}>
              <Popover>
                <PopoverTrigger>
                  <Box
                    cursor="pointer"
                    backgroundColor="transparent"
                    _active={{}}
                    _hover={{}}
                  >

                    {userData?.imageUrl ? <Avatar src={userData?.imageUrl}/>:<LetteredAvatar name={role === "JOBSEEKER"
                            ? `${data?.firstName} ${data?.lastName}`
                            : `${data?.name}`}/> }

                  </Box>
                </PopoverTrigger>
                <PopoverContent padding="10px" right={'1rem'} bg="white">
                  <PopoverCloseButton />
                  <PopoverHeader gap="10px" display="flex">

                  {userData?.imageUrl ? <Avatar src={userData?.imageUrl}/>:<LetteredAvatar name={role === "JOBSEEKER"
                            ? `${data?.firstName} ${data?.lastName}`
                            : `${data?.name}`}/> }
                    <Box>
                      {!isLoading && data && (
                        <Text>
                        
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
          {  responsiveHeader && (
            <Flex alignItems='center' columnGap='20px'>
             <HStack
               align={"center"}
               color="rgb(102, 102, 102)"
               _hover={{ color: "rgb(42, 65, 232)" }}
               fontWeight={"500"}
             >
             </HStack>
             <HamburgerIcon onClick={onOpen} _hover={{ color: "rgb(42, 65, 232)" }} cursor='pointer'/>
             </Flex>
           )}
          </Flex>
         
        ) : responsiveHeader ? (
          <Flex alignItems='center' columnGap='20px'>
           <HStack
             align={"center"}
             color="rgb(102, 102, 102)"
             _hover={{ color: "rgb(42, 65, 232)" }}
             fontWeight={"500"}
           >
             <NavigationLink href="/login">
               <ArrowForwardIcon width={"20"} height={"24"} mr={""} />
             </NavigationLink>
           </HStack>
           <HamburgerIcon onClick={onOpen} _hover={{ color: "rgb(42, 65, 232)" }} cursor='pointer'/>
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
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        
      >
        <DrawerOverlay />
        <DrawerContent bgColor='white'>

          <DrawerBody display={'flex'} flexDirection='column' alignItems='flex-start' padding='40px' fontSize='20px' rowGap='20px'>
          <NavigationLink href="/" style={{ padding: "6px 16px" }}>
              {t("Common.Nav.home")}
            </NavigationLink>
            <Menu>
              <MenuButton
                as={Button}
                fontSize={'20px'}
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
            <Menu >
              {role === "COMPANY" ? (
                <MenuButton
                  as={Button}
                  fontWeight={500}
                  style={{ padding: "6px 16px" }}
                  bgColor="transparent"
                  {...(role === "COMPANY" && {
                    rightIcon: <ChevronDownIcon width={"20"} height={"22"} />,
                  })}
                  _hover={{ textDecoration: "none", color: "rgb(42, 65, 232)" }}
                  p='6px 16px'
                >
                  {t("Common.Nav.employees")}
                </MenuButton>
              ) : (
                <Box
                style={{ padding: "6px 16px" }}
                  bgColor="transparent"
                  _hover={{ textDecoration: "none", color: "rgb(42, 65, 232)" }}
                >
                  <NavigationLink href="/employees">
                    {t("Common.Nav.employees")}
                  </NavigationLink>
                </Box>
              )}
              {role === "COMPANY" && (
                <MenuList   style={{ padding: "6px 16px" }}>
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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </ThemeProvider>
  );
}
export default Header;
