import NotificationManIcon from "@/icons/NotificationManIcon";
import { Box, HStack, VStack, Text, Tag, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { NavigationLink } from "../NavigationLink";

function NotificationItem() {
  const [notifications, setNotifications] = useState([]);
  const token = Cookies.get("token");

  useEffect(() => {
    async function fetchNotification() {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Token: `${token}`,
        },
      };

      try {
        const response = await fetch(
          "https://neo-814m.onrender.com/v1/notification/list?skip=0&take=10",
          requestOptions
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setNotifications(data.list);
        console.log(data.list);
      } catch (error) {
        console.log("There was an error fetching the notification", error);
      }
      console.log(notifications);
    }
    fetchNotification();
  }, []);

  console.log(notifications);

  return (
    <Box>
      {notifications.map((notification) => (
        <NavigationLink href="/managejobs">
          <VStack
            borderLeft="4px solid transparent"
            _hover={{ backgroundColor: "#F3F8FF", borderLeftColor: "#2a41e8" }}
          >
            <HStack key={notification?.id} p={"1rem"}>
              <NotificationManIcon width="40" height="40" />
              <HStack
                alignItems={"flex-start"}
                ml={"0.2rem"}
                w={"95%"}
                flexWrap={"wrap"}
              >
                <Text>
                  {notification.meta.from.fullName}{" "}
                  <Text as={"span"} fontSize={"0.8rem"} color="red">
                    {" "}
                    applied for a job{" "}
                  </Text>{" "}
                  <Tag
                    fontSize={"0.9rem"}
                    color={"#2a41e8"}
                    bg={"#fff"}
                    margin={"0px"}
                  >
                    {" "}
                    {notification.meta.post.title}{" "}
                  </Tag>
                </Text>
                {/* <Text>dadc</Text> */}
              </HStack>
            </HStack>
          </VStack>
        </NavigationLink>
      ))}
    </Box>
  );
}

export default NotificationItem;
