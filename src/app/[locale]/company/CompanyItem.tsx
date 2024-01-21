"use client";
import CompanyIcon from "@/icons/CompanyIcon";
import { Card, CardBody, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";
type Company = {
  id: number;
  name: string;
  user: {
    id: number;
  };
};

type CompanyItemProps = {
  companies: Company[];
};
const CompanyItem: React.FC<CompanyItemProps> = ({ companies }) => {
  const router = useRouter();
  return (
    <Flex
      gap={{ base: "0", lg: "1.87rem" }}
      mt={"1.875rem"}
      flexWrap={"wrap"}
      justifyContent={{ base: "space-between", lg: "start" }}
      flexDirection={{ base: "column", sm: "row" }}
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
          width={{ base: "100%", sm: "40%", lg: "calc(33.3% - 20px)" }}
          cursor={"pointer"}
          _hover={{ transform: "translateY(-3px)" }}
          transition={"0.3s"}
        >
          <CardBody
            textAlign={"center"}
            alignItems={"center"}
            justifyContent={"center"}
            display="flex"
            flexDirection="column"
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
    </Flex>
  );
};

export default CompanyItem;
