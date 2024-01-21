import { AddIcon } from "@chakra-ui/icons";
import {
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Tag,
  TagCloseButton,
  TagLabel,
} from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
interface IKeyword {
  setSelectedKeywords: Dispatch<SetStateAction<string[]>>;


  
}
const KeywordInput:React.FC<IKeyword> = ({selectedKeywords,setSelectedKeywords}) => {
  // useEffect(() => {
  //   setSelectedKeywordsLocal(selectedKeywords);
  // }, []);
  const t = useTranslations();
  console.log("aaabbb",selectedKeywords.map((item)=>item.name));
  
  const [selectedKeywordsLocal, setSelectedKeywordsLocal] = useState<any>(selectedKeywords);
  const [inputValue, setInputValue] = useState<any>("");
  const addKeyword = (newKeyword: any) => {
    if (newKeyword) {
      setSelectedKeywordsLocal([...selectedKeywordsLocal, newKeyword]);
      setInputValue("");
    }
  };
  const handleAddKeyword = (event: any) => {
    addKeyword(event.target.value);
  };
  const handleButtonClick = () => {
    addKeyword(inputValue);
  };
  const handleRemoveKeyword = (keyword: any) => {
    setSelectedKeywordsLocal(selectedKeywordsLocal.filter((k: string) => k !== keyword));
  };
  setSelectedKeywords(selectedKeywordsLocal)
  return (
    <FormControl maxHeight='93px' w="100%">
      <FormLabel marginBottom="16px" fontSize="18px">
        {t("Common.Keyword.label")}
      </FormLabel>
      <InputGroup>
        <Input
          borderRadius="4px"
          minH="48px"
          fontSize="16px"
          backgroundColor="#fff"
          outline="none"
          boxShadow="0 0px 1px 1px rgb(0 0 0 / 12%)"
          color="#808080"
          maxW="100%"
          variant="filled"
          placeholder={t("Common.Keyword.placeholder")}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(event) =>
            event.key === "Enter" && handleAddKeyword(event)
          }
        />
        <InputRightElement
          children={
            <Icon
              cursor="pointer"
              marginTop="7px"
              fontSize="24px"
              color="#fff"
              backgroundColor="#2a41e8"
              w="36px"
              h="36px"
              padding="9px"
              boxShadow=" 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)"
              borderRadius="4px"
              marginRight="10px"
              as={AddIcon}
              onClick={handleButtonClick}
            />
          }
        />
      </InputGroup>
      <HStack flexWrap="wrap" spacing={4} mt={2}>
        {selectedKeywordsLocal.map((keyword: any, index: any) => (
          <Tag 
            color="#fff"
            padding="4px 8px"
            backgroundColor="#2a41e8"
            size="md"
            key={index}
            borderRadius="full"
          >
            <TagLabel>{keyword}</TagLabel>
            <TagCloseButton
              fontSize="22px"
              onClick={() => handleRemoveKeyword(keyword)}
            />
          </Tag>
        ))}
      </HStack>
    </FormControl>
  );
};

export default KeywordInput;
