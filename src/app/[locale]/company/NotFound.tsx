import React from "react";
import { Box, Flex, Img } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
interface NotFoundProps {
  message: string;
}
const NotFound: React.FC<NotFoundProps> = ({ message }) => {
  const t = useTranslations();
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      width="calc(100%)"
      flexDirection="column"
      h={"78vh"}
    >
      <Img marginBottom="1rem" src="../../../../images/noRecord.png" />
      <Box textAlign="center">
        {t.rich("Common.noRecord", {
          div: (chunks) => <div>{chunks}</div>,
          span: (chunks) => <span>{chunks}</span>,
        })}
      </Box>
    </Flex>
  );
};

export default NotFound;
