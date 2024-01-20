"use client";
import CompanyIcon from "@/icons/CompanyIcon";
import {
  Card,
  CardBody,
  Center,
  Flex,
  Grid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";

const CompanyItem = ({ companies }) => {
  // const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  return (
    <Grid
      gap={"1.875rem"}
      mt={"1.875rem"}
      templateColumns={{
        base: "repeat(2, 1fr)", // Две колонки на маленьких экранах
        md: "repeat(3, 1fr)", // Три колонки на средних и более экранах
      }}
      flexWrap={"wrap"}
    >
      {companies.map((company) => (
        <Card
          onClick={() => {
            router.push(
              `viewCompany?companyId=${encodeURIComponent(company.user.id)}`
            );
          }}
          key={company.id}
          align="center"
          boxShadow={"0 2px 10px rgba(0,0,0,.1)"}
          p="38px"
          mb={"30px"}
          
          cursor={"pointer"}
          _hover={{ transform: "translateY(-3px)" }}
          transition={"0.3s"}
        >
          <CardBody
            textAlign={"center"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Flex
              align={"center"}
              justify={"center"}
              borderRadius="100px"
              width="70px"
              height="70px"
              bg="#bdbdbd"
              marginBottom={"30px"}
            >
              <CompanyIcon width="25" height="25" color="#fafafa" />
            </Flex>
            <Text
              mb={"0.5rem"}
              color={"#333"}
              fontWeight={"600"}
              fontSize={"1.125rem"}
            >
              {company.name}
            </Text>
          </CardBody>
        </Card>
      ))}
    </Grid>
  );
};

export default CompanyItem;
