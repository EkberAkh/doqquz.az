import { StarIcon } from "@chakra-ui/icons";
import { Avatar, Box, Flex, GridItem, Img, Spinner, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import {format} from 'date-fns'

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
  imageUrl:string;
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
  imageUrl
}) => {
  const initialIsFav = localStorage.getItem(`fav-jobs-${id}`) === "true";
  const [isFav, setIsFav] = useState<boolean>(initialIsFav);
  const [isLoading,setIsLoading] = useState<boolean>(false)
  const [bookmarkId, setBookmarkId] = useState<number | null>(null);
  let role = localStorage.getItem('role')
  useEffect(() => {
    // Update local storage when isFav changes
    localStorage.setItem(`fav-jobs-${id}`, isFav.toString());
  }, [isFav, id]);
  const handleFavClick = async () => {
    setIsLoading(true); 
    setIsFav(!isFav);
    const token = Cookies.get("token");
    let url, method, payload;

    if (!isFav) {
      // Preparing for POST request
      url = "https://neo-814m.onrender.com/v1/bookmark/";
      method = "POST";
      payload = {
        type: "POST",
        jobseeker: null,
        post: { id: id },
      };
    } else {
      // Preparing for DELETE request
      if (!bookmarkId) {
        console.error("No bookmark ID available for deletion");
        setIsLoading(false); 
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
  
        setBookmarkId(data.id); 
      }

      setIsFav(!isFav);
      console.log(
        isFav ? "Bookmark removed successfully" : "Bookmark added successfully"
      );
    } catch (error) {
      console.error("Error in updating bookmark:", error);
    }finally {
      setIsLoading(false); // Stop loading after the operation is complete
    }
  };
  const router = useRouter();
  const clickHandler = () => {
    router.push(`viewJobs?jobId=${encodeURIComponent(id)}`);
  };

  const formatCreatedAt = (createdAt) => {
    const date = new Date(createdAt);
    return format(date, 'dd.MM.yyyy')
  }

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
          <Avatar src={imageUrl} size="md" />

          <Box cursor="pointer" onClick={clickHandler} display="flex" flexDirection="column" alignItems="flex-start">
            <Text as="h4" color="grey" fontSize="16px">
              {companyName}
            </Text>
            <Text as="h3" fontSize="18px" fontWeight="bold">
              {title}
            </Text>
          </Box>
        </Flex>

       {isLoading ? <Spinner  position="absolute"
       height="36px"
       width="36px"
          right="0" 
          top="50%"
          transform="auto"
          translateY="50%"
          margin="36px 18px"
          padding="7px 7px 9px 7px"/>
          : <StarIcon
          margin="18px"
          onClick={role === 'COMPANY' || role === 'JOBSEEKER' ? handleFavClick : ()=>{router.push('login')}}
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
        />}
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
                {formatCreatedAt(createdAt)}
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </GridItem>
  );
};

export default Card;
