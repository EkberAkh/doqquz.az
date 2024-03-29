"use client";
import { useState } from "react";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { BiAddToQueue } from "react-icons/bi";
import { MdOutlineDateRange } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { FaPencil } from "react-icons/fa6";
import Cookies from "js-cookie";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
const ManageJobs = () => {
  const [jobdata, setJobdata] = useState([]);
  const userId = Cookies.get("userId");
  const t = useTranslations();
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(userId);
        const response = await fetch(
          `https://neo-814m.onrender.com/v1/post/userId/${userId}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setJobdata(data);
        console.log(data);
      } catch (error) {
        console.error("Fetch error:", error.message);
      }
    };
    fetchData();
  }, [userId]);
  const token = Cookies.get("token");
  const router = useRouter();
  const handleDelete = async (id) => {
    const url = `https://neo-814m.onrender.com/v1/post/delete/${id}`;
    const token = Cookies.get("token");
    const requestOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "Application/json",
        Token: `${token}`,
      },
    };
    try {
      const response = await fetch(url, requestOptions);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      setJobdata((prevBookmarks) =>
        prevBookmarks.filter((bookmark) => bookmark.id !== id)
      );
      console.log(`Bookmark with ID ${id} deleted successfully)`);
    } catch (error) {
      console.error("There was an error deleting the bookmark:", error);
    }
  };
  console.log(jobdata);
  const formatCreatedAt = (createdAt) => {
    const date = new Date(createdAt);
    return format(date, "dd.MM.yyyy");
  };
  return (
    <Box w={{base:"100%",lg:"1200px"}} m="auto" pb="100px">
      <Text m="30px 0" fontWeight="bold" fontSize="30px">
        {t("Company.ManageJobs.title")}
      </Text>
      <Box boxShadow={{base:"none",lg:"1px 1px 5px 1px gray"}}>
        <Flex gap="10px" p="30px">
          <BiAddToQueue color="blue" size="20px" />
          <Text fontWeight="bold" fontSize="18px">
            {t("Company.ManageJobs.subTitle")}
          </Text>
        </Flex>
        {jobdata &&
          jobdata.map((item, key) => (
            <>
              <hr></hr>
              <Box p="30px">
                <Flex gap="10px">
                  <Text
                    cursor="pointer"
                    onClick={() => {
                      router.push(
                        `viewJobs?jobId=${encodeURIComponent(item.id)}`
                      );
                    }}
                    fontWeight="bold"
                    fontSize="18px"
                  >
                    {" "}
                    {item.title}
                  </Text>
                  <Text
                    borderRadius="5px"
                    fontWeight="bold"
                    bg="rgb(224, 245, 215)"
                    color="rgb(68, 150, 38)"
                    p=" 3px 5px"
                  >
                    {t("Common.PostStatus.ACTIVE")}
                  </Text>
                </Flex>
                <Flex m="15px 0px" gap="1px" alignItems="center">
                  <MdOutlineDateRange />
                  <Text mt="3px">
                    {formatCreatedAt(item.createdAt)}{" "}
                    {t("Company.ManageJobs.postedOn")}
                  </Text>
                </Flex>
                <Flex alignItems="center" gap="16px">
                  <Box bg="#2A41E8" p="10px" borderRadius="6px">
                    <Flex gap="15px" alignItems="center" color={"#fff"}>
                      <FaUserFriends />
                      <Text>{t("Company.ManageJobs.actions.candidates")}</Text>
                      <Text
                        borderRadius="50%"
                        bg="gray.400"
                        fontSize="14px"
                        color="white"
                        p="0 5px "
                      >
                        {item.jobseekers.length}
                      </Text>
                    </Flex>
                  </Box>
                  <Box
                    borderRadius="50%"
                    p="6px 6px"
                    boxShadow="1px 1px 5px 1px gray"
                  >
                    <FaPencil
                      size="24px"
                      onClick={() => {
                        router.push(
                          `editJob?companyId=${encodeURIComponent(item.id)}`
                        );
                      }}
                    />
                  </Box>
                  <Box
                    borderRadius="50%"
                    p="3px 4px"
                    boxShadow="1px 1px 5px 1px gray"
                  >
                    <MdDeleteOutline
                      size="30px"
                      onClick={() => handleDelete(item.id)}
                    />
                  </Box>
                </Flex>
              </Box>
            </>
          ))}
      </Box>
    </Box>
  );
};
export default ManageJobs;
