import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

const Salary = ({ onSalaryChange }: { onSalaryChange: (min: number, max: number) => void }) => {
  const t = useTranslations();

  const [minSalary, setMinSalary] = useState(1);
  const [maxSalary, setMaxSalary] = useState(100000);

  const handleSliderChange = ([min, max]: any) => {
    setMinSalary(min);
    setMaxSalary(max);
    onSalaryChange(min, max);
  };
  const [maxWidth1100Media] = useMediaQuery("(max-width: 1100px)");
  return (
    <VStack marginBottom='16px' spacing={4} align="stretch">
      <FormControl>
        <FormLabel marginBottom="16px" fontSize="18px">
          {t("Common.Salary.label")}
        </FormLabel>
        <Flex flexDirection={maxWidth1100Media ? 'column' : 'row'}>
          <Input
            minH="48px"
            fontSize="16px"
            backgroundColor="#fff"
            outline="none"
            boxShadow="0 0px 1px 1px rgb(0 0 0 / 12%)"
            color="#808080"
            maxW="100%"
            variant="filled"
            value={`Min: $${minSalary}`}
            isReadOnly
            borderRight="none"
            borderRightRadius="none"
            flex={1}
          />
          <Input
            minH="48px"
            fontSize="16px"
            backgroundColor="#fff"
            outline="none"
            boxShadow="0 0px 1px 1px rgb(0 0 0 / 12%)"
            color="#808080"
            maxW="100%"
            variant="filled"
            value={`Max: $${maxSalary}`}
            isReadOnly
            borderLeft="none"
            borderLeftRadius="none"
            flex={1}
          />
        </Flex>
      </FormControl>
      <RangeSlider
        aria-label={["min", "max"]}
        defaultValue={[minSalary, maxSalary]}
        min={1}
        max={200000}
        step={10}
        onChange={handleSliderChange}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
    </VStack>
  );
};

export default Salary;
