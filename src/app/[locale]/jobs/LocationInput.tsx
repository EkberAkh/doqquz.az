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
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
interface IJobCategory {
  setSelectedLocation: Dispatch<SetStateAction<string>>;
}
interface LocationItem {
  city: string;
  // include other properties if needed
}
const LocationInput: React.FC<IJobCategory> = ({ setSelectedLocation }) => {
  const [locations, setLocations] = useState<LocationItem[]>([]);
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    if (inputValue) {
      fetch(`https://neo-814m.onrender.com/v1/location/${inputValue}`)
        .then((response) => response.json())
        .then((data) => setLocations(data.list))
        .catch((error) => console.error("Error fetching locations:", error));
    }
  }, [inputValue]);

  const t = useTranslations();
  console.log(locations);

  const handleSelect = (location: LocationItem) => {
    // @ts-ignore
    setSelectedLocation(location);
  };
  return (
    <FormControl w="100%">
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
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setInputValue(e.target.value)
                }
              />
              <InputLeftElement>
                <Img
                  marginTop="5px"
                  color="gray"
                  src="../../../../images/image.png"
                />
              </InputLeftElement>

              <InputRightElement>
                <Icon
                  cursor="pointer"
                  marginTop="5px"
                  fontSize="10px"
                  color="gray"
                  as={isOpen ? TriangleUpIcon : TriangleDownIcon}
                />
              </InputRightElement>
            </InputGroup>
            <AutoCompleteList>
              {locations.map((item, cid) => (
                <AutoCompleteItem
                  key={`option-${cid}`}
                  value={item.city}
                  textTransform="capitalize"
                  onClick={() => handleSelect(item)}
                >
                  {item.city}
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
