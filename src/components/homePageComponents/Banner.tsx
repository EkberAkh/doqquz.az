"use client";

import { colorObjects } from "@/consts";
import { Flex, Box, Text, keyframes } from "@chakra-ui/react";
import { Search } from "./Search";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import image from "./../../../public/images/background.jpg";
import { transform } from "next/dist/build/swc";
import { useEffect, useState } from "react";
const path = "/images/backgroundImages";
const imagess = [
  `${path}/background.jpg`,
  `${path}/background4.png`,
  `${path}/background3.png`,
];

export const Banner = () => {
  const t = useTranslations();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagess.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const backgroundImage = `url(${imagess[currentImageIndex]})`;
  const MotionBox = motion(Box);
  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const transition = {
    duration: 1.2,
  };
  return (
    <MotionBox
      initial="hidden"
      animate="visible"
      variants={textVariants}
      transition={transition}
    >
      <Flex
        width="100%"
        height={{ base: "auto", lg: "93vh" }}
        p={{ base: "60px 0", lg: "105px 0" }}
        justify={"center"}
        backgroundImage={backgroundImage}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
      >
        <Box paddingX="1.5rem" w={"90%"}>
          <Text
            color={colorObjects.black.main}
            fontWeight={700}
            fontSize="1.7rem"
            marginY="0.5rem"
            lineHeight="1.5"
            maxW="41rem"
          >
            {t("Home.Header.title")}
          </Text>

          <Text
            color={colorObjects.black.secondary}
            fontSize={{ base: "20px", lg: "1.6rem" }}
            maxW="649px"
          >
            {t.rich("Home.Header.subTitle", {
              span: (chunks) => (
                <span
                  style={{ color: colorObjects.blue.main, fontWeight: 600 }}
                >
                  {chunks}
                </span>
              ),
            })}
          </Text>
          <Search />
        </Box>
      </Flex>
    </MotionBox>
  );
};
