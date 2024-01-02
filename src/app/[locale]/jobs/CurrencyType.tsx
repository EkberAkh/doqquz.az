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

const CurrencyType = () => {
  const t = useTranslations();
  const currencies = ["AZN", "TL", "USD", "EUR", "STR"];

  return (
    <FormControl marginBottom="16px" w="100%">
      <FormLabel marginBottom="16px" fontSize="18px">
        {t("Common.Currency.label")}
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
                placeholder={t("Common.Currency.label")}
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

              {/* <InputRightElement
              children={
                <Icon
                  marginRight="65px"
                  cursor="pointer"
                  marginTop="5px"
                  fontSize="12px"
                  color="gray"
                  as={CloseButton}
                />
              }
            /> */}
            </InputGroup>
            <AutoCompleteList>
              {currencies.map((currency, cid) => (
                <AutoCompleteItem
                  key={`option-${cid}`}
                  value={currency}
                  textTransform="capitalize"
                >
                  {currency}
                </AutoCompleteItem>
              ))}
            </AutoCompleteList>
          </>
        )}
      </AutoComplete>
    </FormControl>
  );
};

export default CurrencyType;
