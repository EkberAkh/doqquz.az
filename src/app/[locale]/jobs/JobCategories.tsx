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
import React from "react";

const JobCategories = () => {
  const t = useTranslations();
  const jobs = [
    "INDUSTRY",
    "ACCOUNTING",
    "AIRLINES_OR_AVIATION",
    "ARTS_OR_CRAFTS",
    "AUTOMOTIVE",
    "AVIATION_OR_AEROSPACE",
    "BUSINESS_SUPPLIES_OR_EQUIPMENT",
  ];
  return (
    <FormControl marginBottom="16px" w="100%">
      <FormLabel marginBottom="16px" fontSize="18px">
        {t("Common.INDUSTRIES.label")}
      </FormLabel>
      <AutoComplete openOnFocus>
        {({ isOpen }: any) => (
          <>
            <InputGroup>
              <AutoCompleteInput
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
              {jobs.map((job, cid) => (
                <AutoCompleteItem
                  key={`option-${cid}`}
                  value={t(`Common.INDUSTRIES.${job}`)}
                  textTransform="capitalize"
                >
                  {t(`Common.INDUSTRIES.${job}`)}
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
