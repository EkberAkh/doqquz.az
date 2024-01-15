"use client";
import { colorObjects } from "@/consts";
import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  HStack,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import ArrowRightIcon from "@/icons/ArrowRightIcon";
import CompanyIcon from "@/icons/CompanyIcon";
import PlaceIcon from "@/icons/PlaceIcon";
import ExperienceIcon from "@/icons/ExperienceIcon";
import OclockIcon from "@/icons/OclockIcon";
import { useEffect, useState } from "react";
import { NavigationLink } from "../NavigationLink";
interface ICardProps {
  title: string;
  id: number
  type: string;
  location: {
    city: string;
    country: string;
  };
  createdAt: string;
}
export const LatestJobPostings = () => {
  const [currentJobId, setCurrentJobId] = useState<number>()
  const [currentJob, setCurrentJob] = useState([])
  
  const router = useRouter();

  const [hoverStates, setHoverStates] = useState<Record<number, boolean>>({});
  const [jobs, setJobs] = useState<ICardProps[]>([]);
  const t = useTranslations();

  useEffect(() => {
    fetch("https://neo-814m.onrender.com/v1/post/list?take=5")
      .then((response) => response.json())
      .then((data) => {
        setJobs(data.list);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        // Handle any errors
      });
  }, []);
  const handleMouseEnter = (id: number) => {
    setHoverStates({ ...hoverStates, [id]: true });
  };

  // Function to handle mouse leave
  const handleMouseLeave = (id: number) => {
    setHoverStates({ ...hoverStates, [id]: false });
  };
  const lang = useCurrentLang()


  useEffect(() => {
    currentJobId !== undefined &&
      fetch(`https://neo-814m.onrender.com/v1/post/${currentJobId}`)
        .then((response) => response.json())
        .then((data) => {
          setCurrentJob(data);

        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
          // Handle any errors
        })
  }, [currentJobId]);

  useEffect(() => {
    if (currentJobId !== undefined && currentJob !== undefined) {
      localStorage.setItem("currentJob", JSON.stringify(currentJob));
    }
  }, [currentJobId, currentJob]);


  return (
    <>
      <VStack w={"100%"} justify={"center"} mb={"4rem"} gap={"0"}>
        <Flex
          justifyContent="space-between"
          w={"89%"}
          justify={"center"}
          marginBottom={"2rem"}
        >
          <Text color={colorObjects.black.main} fontSize="1.6rem">
            {t("Home.JobAnnouncement.title")}
          </Text>
          <Text
            color={colorObjects.black.secondary}
            _hover={{ color: "#2a41e8" }}
            cursor={"pointer"}
            fontSize="1rem"
            mr={"0.7rem"}
          >
            <NavigationLink href='/jobs'>{t("Home.JobAnnouncement.actions.shortLink")}</NavigationLink>
            <ArrowRightIcon width={"25"} height={"25"} />
          </Text>
        </Flex>
        {jobs.map((job) => (
          <Card
            padding='10px'
            key={job.id}
            marginBottom="24px"
            width={"90%"}
            borderBottomRadius={"0"}
            onMouseEnter={() => handleMouseEnter(job.id)}
            onMouseLeave={() => handleMouseLeave(job.id)}
            borderLeft={`2px solid ${hoverStates[job.id] ? "#2a41e8" : "transparent"}`}
          >
            <CardBody>
              <Flex width={"100%"} justify={"space-between"}>
                <Flex>
                  <Flex
                    align={"center"}
                    justify={"center"}
                    borderRadius="100px"
                    width="56px"
                    height="56px"
                    bg="#bdbdbd"
                  >
                    <CompanyIcon width="25" height="25" color="#fafafa" />
                  </Flex>
                  <VStack ml={"2rem"}>
                    <Flex w={"96%"} justify={"flex-start"} fontWeight={700}>
                      {job.title}
                    </Flex>
                    <HStack columnGap={"1.3rem"}>
                      <Flex columnGap={"0.2rem"}>
                        <PlaceIcon
                          width="25"
                          height="25"
                          color="rgb(119, 119, 119)"
                        />
                        <Text>{`${job.location.city}, ${job.location.country}`}</Text>
                      </Flex>
                      <Flex columnGap={"0.2rem"}>
                        <ExperienceIcon
                          width="25"
                          height="25"
                          color="rgb(119, 119, 119)"
                        />
                        <Text>{job.type}</Text>
                      </Flex>
                      <Flex columnGap={"0.2rem"}>
                        <OclockIcon
                          width="25"
                          height="25"
                          color="rgb(119, 119, 119)"
                        />
                        <Text>{job.createdAt}</Text>
                      </Flex>
                    </HStack>
                  </VStack>
                </Flex>
                <Button
                  w="7rem"
                  h="3rem"
                  mr={"10px"}
                  fontSize="14px"
                  borderRadius="4px"
                  color={hoverStates[job.id] ? "#fff" : "#000"}
                  bg={hoverStates[job.id] ? "#2a41e8" : "#f0f0f0"}
                  boxShadow=" 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)"
                  _hover={{}}
                  onClick={() => {
                    router.push(`/${lang}/viewJobs?jobId=${job.id}`);
                    setCurrentJobId(job.id)
                  }
                  }
                >
                  {t("Common.Action.REQUEST")}
                </Button>
              </Flex>
            </CardBody>
          </Card>
        ))}
      </VStack>
    </>
  );
};
