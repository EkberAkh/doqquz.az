import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import {
  FormControl,
  FormLabel,
  Icon,
  Img,
  InputGroup,
  InputLeftElement,
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

const LocationInput = () => {
  const locations = ["Yasamal", "Bayil", "Genclik"];
  const t = useTranslations();

  return (
    <FormControl marginBottom="16px" w="100%">
      <FormLabel marginBottom="16px" fontSize="18px">
        {t("Common.location")}
      </FormLabel>
      <AutoComplete openOnFocus>
        {({ isOpen }: any) => (
          <>
            <InputGroup>
              <AutoCompleteInput
                paddingLeft="60px"
                borderRadius="4px"
                minH="48px"
                fontSize="16px"
                backgroundColor="#fff"
                outline="none"
                boxShadow="0 0px 1px 1px rgb(0 0 0 / 12%)"
                color="#808080"
                maxW="100%"
                variant="filled"
                placeholder={t("Common.location")}
              />
              <InputLeftElement
                children={
                  <Img
                    marginTop="5px"
                    color="gray"
                    src="../../../../images/image.png"
                  />
                }
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
              {locations.map((country, cid) => (
                <AutoCompleteItem
                  key={`option-${cid}`}
                  value={country}
                  textTransform="capitalize"
                >
                  {country}
                </AutoCompleteItem>
              ))}
            </AutoCompleteList>
          </>
        )}
      </AutoComplete>
    </FormControl>
  );
};

export default LocationInput;
