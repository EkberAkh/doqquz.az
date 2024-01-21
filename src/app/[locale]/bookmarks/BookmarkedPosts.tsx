import CompanyIcon from "@/icons/CompanyIcon";
import ExperienceIcon from "@/icons/ExperienceIcon";
import OclockIcon from "@/icons/OclockIcon";
import PlaceIcon from "@/icons/PlaceIcon";
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
import { MdOutlineBusinessCenter } from "react-icons/md";
import { format } from "date-fns";
export type Post = {
  id: number;
  title: string;
  type: string;
  createdAt: string; // or Date, depending on how you receive this data
};

type MarkedPost = {
  id: number;
  post: Post;
};

interface BookmarkedPostsProps {
  bookmark: MarkedPost[];
  handleDelete: (id: number) => void;
}
const BookmarkedPosts: React.FC<BookmarkedPostsProps> = ({
  bookmark,
  handleDelete,
}) => {
  const t = useTranslations();

  const formatCreatedAt = (createdAt: string) => {
    const date = new Date(createdAt);
    return format(date, "dd.MM.yyyy");
  };
  return (
    <Card mt={"20px"} boxShadow="0 6px 10px rgba(1, 0, 0, 0.2)" w={"100%"}>
      <CardHeader borderBottom="1px solid #e4e4e4">
        <Flex>
          <MdOutlineBusinessCenter color="rgb(42, 65, 232)" fontSize="1.4em" />
          <Heading ml={"8px"} fontSize="1rem" fontWeight={700}>
            {" "}
            {t("Common.bookmark.post")}
          </Heading>
        </Flex>
      </CardHeader>
      {bookmark.map((markedpost) =>
        markedpost.post ? (
          <CardBody key={markedpost.id} p={"2.5rem 1rem"}>
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
                    {markedpost.post.title}
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
                      <Text>{t(`Common.JobType.${markedpost.post.type}`)}</Text>
                    </Flex>
                    <Flex columnGap={"0.2rem"}>
                      <OclockIcon
                        width="25"
                        height="25"
                        color="rgb(119, 119, 119)"
                      />
                      <Text>{formatCreatedAt(markedpost.post.createdAt)}</Text>
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
                onClick={() => handleDelete(markedpost.id)}
              >
                <DeleteIcon width="20" height="50" color="#f50057" />
              </Box>
            </Flex>
          </CardBody>
        ) : null
      )}
    </Card>
  );
};

export default BookmarkedPosts;
