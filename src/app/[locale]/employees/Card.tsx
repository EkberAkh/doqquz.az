import { ArrowForwardIcon, StarIcon } from "@chakra-ui/icons";
import { Avatar, Box, Button, GridItem, Img, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
interface ICardProps {

  firstName:string;
  lastName:string;
  expectedSalary:string;
  salaryType:string;


}
const Card:React.FC<ICardProps> = ({firstName,lastName,expectedSalary,salaryType}) => {
  const [isFav, setIsFav] = useState<boolean>(false);
  const [isHover, setisHover] = useState<boolean>(false);
  const t = useTranslations();
  return (
    <GridItem
      maxHeight="450px"
      transition="all .3s"
      _hover={{ transform: "auto", translateY: "-4px" }}
      boxShadow="0 2px 18px rgba(0,0,0,.14)"
    >
      <Box backgroundColor='white' height="55%" padding="20px" textAlign="center" position="relative">
        <Avatar marginBottom="14px" size="xl" />
        <Text fontSize="20px" fontWeight="bold">
          {`${firstName} ${lastName}`}
        </Text>

        <StarIcon
          margin="14px"
          onClick={() => {
            setIsFav(!isFav);
          }}
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
              <Text fontWeight="bold">{salaryType?salaryType:'--'}</Text>
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
              <Text fontWeight="bold">{expectedSalary?expectedSalary:'--'}</Text>
            </Box>
          </Box>
        </Box>
        <Button
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
