import { StarIcon } from "@chakra-ui/icons";
import { Avatar, Box, Flex, GridItem, Img, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

interface ICardProps {
  companyName: string;
  title: string;
  city: string;
  type: string;
  minEstimatedBudget: string;
  maxEstimatedBudget: string;
  currency: string;
  createdAt: string;
  id: number;
}

const Card: React.FC<ICardProps> = ({
  id,
  companyName,
  title,
  city,
  type,
  minEstimatedBudget,
  maxEstimatedBudget,
  currency,
  createdAt,
}) => {
  const initialIsFav = localStorage.getItem(`fav-jobs-${id}`) === "true";
  const [isFav, setIsFav] = useState<boolean>(initialIsFav);
  const [bookmarkId, setBookmarkId] = useState<number | null>(null);
  useEffect(() => {
    // Update local storage when isFav changes
    localStorage.setItem(`fav-jobs-${id}`, isFav.toString());
  }, [isFav, id]);
  const handleFavClick = async () => {
    setIsFav(!isFav);
    const token = Cookies.get("token");
    let url, method, payload;

    if (!isFav) {
      // Preparing for POST request
      url = "https://neo-814m.onrender.com/v1/bookmark/";
      method = "POST";
      payload = {
        type: "JOBSEEKER",
        jobseeker: { id: id },
        post: null,
      };
    } else {
      // Preparing for DELETE request
      if (!bookmarkId) {
        console.error("No bookmark ID available for deletion");
        return;
      }
      url = `https://neo-814m.onrender.com/v1/bookmark/${bookmarkId}`;
      method = "DELETE";
      payload = null;
    }
    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          Token: `${token}`,
        },
        body: payload ? JSON.stringify(payload) : null,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      if (!isFav) {
        const data = await response.json();
        setBookmarkId(data.id); // Store the bookmark ID when adding a bookmark
      }

      // Toggle the favorite state only on successful request
      setIsFav(!isFav);
      console.log(
        isFav ? "Bookmark removed successfully" : "Bookmark added successfully"
      );
    } catch (error) {
      console.error("Error in updating bookmark:", error);
    }
  };
  const router = useRouter();
  const clickHandler = () => {
    router.push(`viewJobs?jobId=${encodeURIComponent(id)}`);
  };
  return (
    <GridItem

      maxHeight="210px"
      boxShadow="0 2px 18px rgba(0,0,0,.14)"
    >
      <Box
        backgroundColor="white"
        height="55%"
        padding="20px"
        textAlign="center"
        position="relative"
      >
        <Flex gap="20px" alignItems="center">
          <Avatar size="md" />

          <Box cursor="pointer" onClick={clickHandler} display="flex" flexDirection="column" alignItems="flex-start">
            <Text as="h4" color="grey" fontSize="16px">
              {companyName}
            </Text>
            <Text as="h3" fontSize="18px" fontWeight="bold">
              {title}
            </Text>
          </Box>
        </Flex>

        <StarIcon
          margin="18px"
          onClick={handleFavClick}
          transition="all .4s"
          _hover={isFav ? {} : { backgroundColor: "black", color: "white" }}
          borderRadius="50%"
          backgroundColor={isFav ? "gold" : "#eee"}
          padding="7px 7px 9px 7px"
          position="absolute"
          right="0"
          top="50%"
          transform="auto"
          translateY="50%"
          height="36px"
          width="36px"
          color={isFav ? "#fff" : "silver"}
          cursor="pointer"
        />
      </Box>
      <Box
        justifyContent="space-around"
        height="45%"
        padding="30px"
        backgroundColor="#fafafa"
        gap="10px"
        display="flex"
        flexDirection="column"
      >
        <Box display="flex" gap="22px">
          <Box display="flex" flexDirection="column">
            <Box gap="5px" alignItems="center" display="flex">
              <Img height="16px" width="16px" src="../../../images/image.png" />
              <Text color="#777" fontSize="14px">
                {city}
              </Text>
            </Box>
          </Box>
          <Box display="flex" flexDirection="column">
            <Box gap="10px" alignItems="center" display="flex">
              <Img
                height="16px"
                width="16px"
                src="../../../images/briefcase.png"
              />
              <Text color="#777" fontSize="14px">
                {type}
              </Text>
            </Box>
          </Box>
        </Box>
        <Box display="flex" gap="22px">
          <Box display="flex" flexDirection="column">
            <Box gap="8px" alignItems="center" display="flex">
              <Img
                height="16px"
                width="16px"
                src="../../../images/wallet.png"
              />
              <Text color="#777" fontSize="14px">
                {`${minEstimatedBudget}-${maxEstimatedBudget} ${currency}`}
              </Text>
            </Box>
          </Box>
          <Box display="flex" flexDirection="column">
            <Box gap="10px" alignItems="center" display="flex">
              <Img height="16px" width="16px" src="../../../images/clock.png" />
              <Text color="#777" fontSize="14px">
                {createdAt}
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </GridItem>
  );
};

export default Card;
