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
import React, { useState } from "react";

const SalaryType = () => {
  const t = useTranslations();
  const salaries = ["ANNUALLY", "MONTHLY", "HOURLY"];

  const [isHovering, setIsHovering] = useState<any>(false);
  const [salaryInputValue, setSalaryInputValue] = useState<any>("");
  return (
    <FormControl marginBottom="16px" w="100%">
      <FormLabel marginBottom="16px" fontSize="18px">
        {t("Common.SalaryType.label")}
      </FormLabel>
      <AutoComplete openOnFocus>
        {({ isOpen }: any) => (
          <>
            <InputGroup
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <AutoCompleteInput
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
                onChange={(e: any) => setSalaryInputValue(e.target.value)}
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
              {salaries.map((salary, cid) => (
                <AutoCompleteItem
                  key={`option-${cid}`}
                  value={t(`Common.SalaryType.${salary}`)}
                  textTransform="capitalize"
                  onClick={() =>
                    setSalaryInputValue(t(`Common.SalaryType.${salary}`))
                  }
                >
                  {t(`Common.SalaryType.${salary}`)}
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
