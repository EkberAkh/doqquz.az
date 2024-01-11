import { StarIcon } from '@chakra-ui/icons';
import { Avatar, Box, Flex, GridItem, Img, Text } from '@chakra-ui/react';
import React, { useState } from 'react'

const Card = () => {
  const [isFav, setIsFav] = useState<boolean>(false);

  return (
    <GridItem maxHeight="210px" boxShadow="0 2px 18px rgba(0,0,0,.14)">
    <Box
      backgroundColor="white"
      height="55%"
      padding="20px"
      textAlign="center"
      position="relative"
    >
      <Flex gap="20px" alignItems="center">
        <Avatar size="md" />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
        >
          <Text as="h4" color="grey" fontSize="16px">
            Tech MMC
          </Text>
          <Text as="h3" fontSize="18px" fontWeight="bold">
            Hekim
          </Text>
        </Box>
      </Flex>

      <StarIcon
        margin="18px"
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
            <Img
              height="16px"
              width="16px"
              src="../../../images/image.png"
            />
            <Text color="#777" fontSize="14px">
              Sumqayit
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
              Frilans
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
              800-900 EUR
            </Text>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column">
          <Box gap="10px" alignItems="center" display="flex">
            <Img
              height="16px"
              width="16px"
              src="../../../images/clock.png"
            />
            <Text color="#777" fontSize="14px">
              01.29.2023
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  </GridItem>
  )
}

export default Card