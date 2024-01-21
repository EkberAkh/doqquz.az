import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import {
  FormControl,
  FormLabel,
  Icon,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";
import { useTranslations } from "next-intl";
import React, { Dispatch, SetStateAction, useState } from "react";
import { EINDUSTRY } from "./enums";
interface IJobCategory {
  setSelectedJobCategory: Dispatch<SetStateAction<string>>
}
const JobCategories: React.FC<IJobCategory> = ({selectedJobCategory, setSelectedJobCategory }) => {
  const t = useTranslations();
  const jobs = Object.entries(EINDUSTRY);
  const [selectedLabel, setSelectedLabel] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleCategorySelect = (label: string, originalValue: string) => {
    setInputValue(label);
    setSelectedLabel(label);
    const selectedEntry = jobs.find(([key, val]) => val === originalValue);
    if (selectedEntry) {

      setSelectedJobCategory(selectedEntry[1]);
    }
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);

    const found = jobs.some(([key, value]) => t(`Common.INDUSTRIES.${value}`) === newValue);
    if (!found && newValue === "") {
      setSelectedLabel("");
      setSelectedJobCategory("");
    }
  };
  return (

    <FormControl w="100%">
    <FormLabel marginBottom="16px" fontSize="18px">
      {t("Common.INDUSTRIES.label")}
    </FormLabel>
    <AutoComplete openOnFocus>
      {({ isOpen }:any) => (
        <>
          <InputGroup>
            <AutoCompleteInput
                  value={inputValue}
                  onChange={handleInputChange}
              borderRadius="4px"
              minH="48px"
              fontSize="16px"
              backgroundColor="#fff"
              outline="none"
              boxShadow="0 0px 1px 1px rgb(0 0 0 / 12%)"
              color="#808080"
              maxW="100%"
              variant="filled"
              placeholder={t("Common.INDUSTRIES.label")}
            
            />


              <InputRightElement
                children={
                  <Icon
                    cursor="pointer"
                    marginTop="5px"
                    fontSize="10px"
                    color="gray"
                    as={isOpen ? TriangleUpIcon : TriangleDownIcon}
                  />
                }
              />
            </InputGroup>
            <AutoCompleteList>
              {jobs.map(([key, value], cid) => (
                <AutoCompleteItem
                  key={`option-${cid}`}
                  value={value} // Original enum value
                  textTransform="capitalize"
                  onClick={() => handleCategorySelect(t(`Common.INDUSTRIES.${value}`), value)}
                >
                  {t(`Common.INDUSTRIES.${value}`)}
                </AutoCompleteItem>
              ))}
            </AutoCompleteList>
          </>
        )}
      </AutoComplete>
    </FormControl>
  );
};

export default JobCategories;
