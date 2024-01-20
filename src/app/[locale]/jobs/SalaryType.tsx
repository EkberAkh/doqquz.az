import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import {
  CloseButton,
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
import { ESalaryType } from "./enums";
interface IJobCategory {
  setSelectedSalary:Dispatch<SetStateAction<string>>
}
const SalaryType:React.FC<IJobCategory> = ({selectedSalary,setSelectedSalary}) => {
  const t = useTranslations();
  const salaries = Object.entries(ESalaryType);

  
  const [salaryInputValue, setSalaryInputValue] = useState<any>("");
  const [selectedLabel, setSelectedLabel] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleCategorySelect = (label: string, originalValue: string) => {
    setInputValue(label);
    setSelectedLabel(label); 
    const selectedEntry = salaries.find(([key, val]) => val === originalValue);
    if (selectedEntry) {
    
      setSelectedSalary(selectedEntry[1]); 
    }
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue); 

    const found = salaries.some(([key, value]) => t(`Common.INDUSTRIES.${value}`) === newValue);
    if (!found && newValue === "") {
      setSelectedLabel("");
      setSelectedSalary(""); 
    }
  };
  return (
    <FormControl marginBottom="16px" w="100%">
      <FormLabel marginBottom="16px" fontSize="18px">
        {t("Common.SalaryType.label")}
      </FormLabel>
      <AutoComplete openOnFocus>
        {({ isOpen }: any) => (
          <>
            <InputGroup
            
            >
              <AutoCompleteInput
                 value={selectedSalary}
                 onChange={handleInputChange}
                id="salaryInput"
                borderRadius="4px"
                minH="48px"
                fontSize="16px"
                backgroundColor="#fff"
                outline="none"
                boxShadow="0 0px 1px 1px rgb(0 0 0 / 12%)"
                color="#808080"
                maxW="100%"
                variant="filled"
                placeholder={t("Common.SalaryType.label")}
                
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
              {salaries.map(([key, value], cid) => (
                <AutoCompleteItem
                  key={`option-${cid}`}
                  value={value}
                  textTransform="capitalize"
                  onClick={() =>
                    handleCategorySelect(t(`Common.SalaryType.${value}`), value)
                  }
                >
                  {t(`Common.SalaryType.${value}`)}
                </AutoCompleteItem>
              ))}
            </AutoCompleteList>
          </>
        )}
      </AutoComplete>
    </FormControl>
  );
};

export default SalaryType;
