"use client";
import React from "react";
import logo from "../../public/images/logo.svg";
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
} from "@chakra-ui/react";
import ChevronDownIcon from "@/icons/ChewronDownIcon";
import ArrowForwardIcon from "@/icons/ArrowForwardIcon";
import { extendedTheme } from "@/consts";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { NavigationLink } from "./NavigationLink";

function Header() {
  const route = useRouter();
  const t = useTranslations();
  const path = usePathname();
  return (
    <ThemeProvider theme={extendedTheme}>
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
            <MenuButton
              as={Button}
              fontWeight={500}
              bgColor="transparent"
              rightIcon={<ChevronDownIcon width={"20"} height={"22"} />}
              _hover={{ textDecoration: "none", color: "rgb(42, 65, 232)" }}
            >
              {t("Common.Nav.employees")}
            </MenuButton>
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
                <NavigationLink href="/postjob">
                  {t("Common.Nav.post_a_job")}
                </NavigationLink>
              </MenuItem>
            </MenuList>
          </Menu>
          <NavigationLink
            href="/contact"
            style={{padding:"6px 16px"}}
            // _hover={{ textDecoration: "none", color: "rgb(42, 65, 232)" }}
          >
            {t("Common.Nav.contact")}
          </NavigationLink>
        </HStack>
        <HStack
          align={"center"}
          color="rgb(102, 102, 102)"
          _hover={{ color: "rgb(42, 65, 232)" }}
          fontWeight={"500"}
        >
          <ArrowForwardIcon width={"20"} height={"24"} mr={""} />
          <Button p={0} bg={"white"} variant="">{`${t(
            "Common.Action.LOGIN"
          )} / ${t("Common.Action.REGISTER")} `}</Button>
        </HStack>
      </HStack>
    </ThemeProvider>
  );
}
export default Header;
