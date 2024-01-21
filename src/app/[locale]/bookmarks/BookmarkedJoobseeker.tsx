import CompanyIcon from "@/icons/CompanyIcon";
import ExperienceIcon from "@/icons/ExperienceIcon";
import PlaceIcon from "@/icons/PlaceIcon";
import SalaryIcon from "@/icons/Salaryİcon";
import DeleteIcon from "@/icons/DeleteIcon";
import {
  Card,
  CardHeader,
  Flex,
  Heading,
  CardBody,
  VStack,
  HStack,
  Box,
  Text,
} from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import React from "react";
import { MdOutlineFaceUnlock } from "react-icons/md";
export type Jobseeker = {
  id: number;
  jobseeker: {
    firstName: string;
    lastName: string;
    salaryType: string;
    expectedSalary: string;
  };
};

type BookmarkedJobseekerProps = {
  bookmark: Jobseeker[];
  handleDelete: (id: number) => void;
};
export function BookmarkedJoobseeker({
  bookmark,
  handleDelete,
}: BookmarkedJobseekerProps) {
  const t = useTranslations();
  return (
    <Card mt={"30px"} boxShadow="0 6px 10px rgba(1, 0, 0, 0.2)" w={"100%"}>
      <CardHeader borderBottom="1px solid #e4e4e4">
        <Flex>
          <MdOutlineFaceUnlock color="rgb(42, 65, 232)" fontSize="1.4em" />
          <Heading ml={"8px"} fontSize="1rem" fontWeight={700}>
            {" "}
            {t("Common.bookmark.jobseeker")}
          </Heading>
        </Flex>
      </CardHeader>
      {bookmark.map((joobsearcher) =>
        joobsearcher.jobseeker ? (
          <CardBody p={"2.5rem 1rem"}>
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
                <VStack ml={"1rem"}>
                  <Flex w={"96%"} justify={"flex-start"} fontWeight={700}>
                    {joobsearcher.jobseeker.firstName}{" "}
                    {joobsearcher.jobseeker.lastName}
                  </Flex>
                  <HStack columnGap={"1.3rem"}>
                    <Flex columnGap={"0.2rem"}>
                      <PlaceIcon
                        width="25"
                        height="25"
                        color="rgb(119, 119, 119)"
                      />
                      <Text>----</Text>
                    </Flex>
                    <Flex columnGap={"0.2rem"}>
                      <ExperienceIcon
                        width="25"
                        height="25"
                        color="rgb(119, 119, 119)"
                      />
                      <Text>{joobsearcher.jobseeker.salaryType}</Text>
                    </Flex>
                    <Flex columnGap={"0.2rem"}>
                      <SalaryIcon
                        width="25"
                        height="25"
                        color="rgb(119, 119, 119)"
                      />
                      <Text>{joobsearcher.jobseeker.expectedSalary}</Text>
                    </Flex>
                  </HStack>
                </VStack>
              </Flex>
              <Box
                w="5rem"
                h="3rem"
                //   mr={"10px"}
                fontSize="14px"
                borderRadius="4px"
                p={"0.8rem"}
                _hover={{}}
                onClick={() => handleDelete(joobsearcher.id)}
              >
                <DeleteIcon width="20" height="50" color="#f50057" />
              </Box>
            </Flex>
          </CardBody>
        ) : null
      )}
    </Card>
  );
}
