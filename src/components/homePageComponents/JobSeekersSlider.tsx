import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Flex, Box, Heading, useMediaQuery, Avatar, Button, Center, transition,Text } from "@chakra-ui/react";
import React, { useRef } from "react";
import debounce from "lodash.debounce";
import { colorObjects } from "@/consts";
import router from "next/router";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useCurrentLang } from "@/hooks";
import { useTranslations } from "next-intl";


interface IProps {
    data:any
  }
export const JobSeekersSlider:React.FC<IProps>=({data})=>{
    const changeInterval = 10000;
  const maxSliderWidth = "1344px";
  const [maxWidth1100Media] = useMediaQuery("(max-width: 1100px)");
  const [activeIndex, setActiveIndex] = React.useState(0);

  const swiperRef = useRef<SwiperClass | null>(null);
  const debouncedSetActiveIndex = debounce(setActiveIndex, 500);
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const MotionBox = motion(Box);
  const router = useRouter();
  const lang = useCurrentLang();
  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const transition = {
    duration: 0.9,
  };
  const t = useTranslations();
  const [currentIndex, setCurrentIndex] = React.useState(0);
    return (

       
    (data &&
            data
              .map((seeker, index) => (
                <MotionBox
                
                  key={index}
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                  transition={transition}
                >
                  <Center
                  maxH='400px'
                    key={seeker.id}
                    padding="35px"
                    position="relative"
                    boxShadow="0 6px 10px rgba(1, 0, 0, 0.2)"
                    flexDirection="column"
                    w="340px"
                  >
                    {/* <Box
                      position="absolute"
                      bgColor={colorObjects.gray.light}
                      w="39px"
                      h="39px"
                      top="15px"
                      right="15px"
                      borderRadius="100px"
                    ></Box> */}
                    <Center flexDirection="column">
                      <Avatar src={seeker.user.imageUrl} size='xl'/>
                      {/* <Box
                        bgColor={colorObjects.gray.light}
                        w="104px"
                        height="104px"
                        borderRadius="100px"
                        flexDirection="column"
                        mb="8px"
                      ></Box> */}
                      <Text
                        fontSize="16px"
                        color={colorObjects.black.main}
                        fontWeight={600}
                      >
                        {seeker.firstName}
                      </Text>
                    </Center>
                    <Box marginTop="35px" paddingY="30px" w="100%">
                      <Flex
                        justifyContent="space-between"
                        fontSize="16px"
                        mb="30px"
                      >
                        <Box fontWeight={600}>
                          <Text color={colorObjects.black.secondary}>
                            {t("Common.GENDER.label")}
                          </Text>
                          <Text fontSize='14px'>{seeker.gender}</Text>
                        </Box>
                        <Box fontWeight={600}>
                          <Text color={colorObjects.black.secondary}>
                          {t("Common.Salary.label")}
                          </Text>
                          <Text>{seeker.salary}</Text>
                        </Box>
                      </Flex>
                      <Button
                        onClick={() => {
                          router.push(
                            `${lang}/profile?jobId=${encodeURIComponent(
                              seeker.user.id
                            )}`
                          );
                        }}
                        w="100%"
                        bg={"#2a41e8"}
                        color={"#fff"}
                        variant="primary"
                        height="48px"
                      >
                        {t("Home.RegisteredJobseekers.actions.viewProfile")}
                      </Button>
                    </Box>
                  </Center>
                </MotionBox>
              )))
       
    )
}