import { ArrowForwardIcon, StarIcon } from "@chakra-ui/icons";
import { Avatar, Box, Button, GridItem, Img, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
// import LetteredAvatar from 'react-lettered-avatar';
interface ICardProps {
  id: number;
  firstName: string;
  lastName: string;
  expectedSalary: string;
  salaryType: string;
  userId: number;
}
const Card: React.FC<ICardProps> = ({
  id,
  firstName,
  lastName,
  expectedSalary,
  salaryType,
  userId
}) => {
  const [isFav, setIsFav] = useState<boolean>(
    localStorage.getItem(`fav-${id}`) === "true"
  );
  const [isHover, setisHover] = useState<boolean>(false);
  const [bookmarkId, setBookmarkId] = useState<number | null>(null);
  const router = useRouter()
  useEffect(() => {
    // Update local storage when isFav changes
    localStorage.setItem(`fav-${id}`, isFav.toString());
  }, [isFav, id]);
  const t = useTranslations();
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

  return (
    <GridItem
      maxHeight="450px"
      transition="all .3s"
      _hover={{ transform: "auto", translateY: "-4px" }}
      boxShadow="0 2px 18px rgba(0,0,0,.14)"
    >
      <Box
        backgroundColor="white"
        height="55%"
        padding="20px"
        textAlign="center"
        position="relative"
      >
        <Avatar marginBottom="14px" size="xl" />
        {/* <Box ml={'14rem'} mb={'1rem'} >
          <LetteredAvatar name={`${firstName || ''} ${lastName || ''}`}  radius={100}/>
        </Box> */}
        <Text fontSize="20px" fontWeight="bold">
          {`${firstName} ${lastName}`}
        </Text>

        <StarIcon
          margin="14px"
          onClick={handleFavClick}
          transition="all .4s"
          _hover={isFav ? {} : { backgroundColor: "black", color: "white" }}
          borderRadius="50%"
          backgroundColor={isFav ? "gold" : "#eee"}
          padding="7px 7px 9px 7px"
          position="absolute"
          right="0"
          top="0"
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
        gap="26px"
        display="flex"
        flexDirection="column"
      >
        <Box display="flex" gap="22px">
          <Box display="flex" flexDirection="column">
            <Text>{t("Common.SalaryType.label")}</Text>
            <Box gap="10px" alignItems="center" display="flex">
              <Img
                height="16px"
                width="16px"
                src="../../../images/briefcase.png"
              />
              <Text fontWeight="bold">{salaryType ? salaryType : "--"}</Text>
            </Box>
          </Box>
          <Box display="flex" flexDirection="column">
            <Text>{t("Profile.ProfileInfo.expectedSalary")}</Text>
            <Box gap="10px" alignItems="center" display="flex">
              <Img
                height="16px"
                width="16px"
                src="../../../images/wallet.png"
              />
              <Text fontWeight="bold">
                {expectedSalary ? expectedSalary : "--"}
              </Text>
            </Box>
          </Box>
        </Box>
        <Button
          onClick={() => {
            router.push(`profile?jobId=${encodeURIComponent(userId)}`)
          }}
          onMouseLeave={() => {
            setisHover(false);
          }}
          onMouseEnter={() => {
            setisHover(true);
          }}
          padding="22px 0"
          _hover={{}}
          color="#fff"
          backgroundColor="#2a41e8"
        >
          {t("Home.RegisteredJobseekers.actions.viewProfile")}{" "}
          {isHover && <ArrowForwardIcon marginLeft="5px" />}
        </Button>
      </Box>
    </GridItem>
  );
};

export default Card;
