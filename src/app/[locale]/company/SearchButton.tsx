import { useTranslations } from "next-intl";
import {
  InputGroup,
  Input,
  Flex,
  InputRightElement,
  Button,
} from "@chakra-ui/react";

const Search = ({ setQuery }) => {
  let latestQuery;
  const t = useTranslations();
  const handleClick = () => {
    setQuery(latestQuery);
  };
  return (
    <InputGroup size="lg" mt="24px">
      <Input
        h="4rem"
        size={"md"}
        color="#808080"
        bg={"#fff"}
        outline="none"
        pr="8rem"
        type="text"
        placeholder="Şirkət adı"
        onChange={(e) => {
          latestQuery = e.target.value;
        }}
      />
      <Flex align="center">
        <InputRightElement width="8rem" h={"100%"}>
          <Button
            w="100%"
            h="3rem"
            fontSize="14px"
            borderRadius="4px"
            mr={"0.6rem"}
            color="#fff"
            bg="#2a41e8"
            boxShadow=" 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)"
            _hover={{}}
            onClick={handleClick}
          >
            {t("Common.Action.SEARCH")}
          </Button>
        </InputRightElement>
      </Flex>
    </InputGroup>
  );
};

export default Search;