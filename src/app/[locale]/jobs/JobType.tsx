import { FormControl, FormLabel, HStack, Switch } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import React, { Dispatch, SetStateAction } from "react";
interface IJobType {
  setSelectedJobTypes: Dispatch<SetStateAction<string[]>>;
  selectedJobTypes: string[];

  
}
const JobType:React.FC<IJobType> = ({setSelectedJobTypes,selectedJobTypes}) => {
  const t = useTranslations();
  const handleSwitchChange = (jobTypeValue:any) => {
    if (selectedJobTypes.includes(jobTypeValue)) {
      setSelectedJobTypes(selectedJobTypes.filter((type: any) => type !== jobTypeValue));
    } else {
      setSelectedJobTypes([...selectedJobTypes, jobTypeValue]);
    }
  };
  return (
    <FormControl gap="5px" alignItems="center">
      <FormLabel marginBottom="16px" fontSize="18px">
        {t("Common.JobType.label")}
      </FormLabel>
      <HStack mb="28px">
        <Switch onChange={() => handleSwitchChange('FULL')}
         checked={selectedJobTypes.includes('FULL')} size="lg" id="full" />
        <FormLabel cursor="pointer" fontSize="18px" htmlFor="full" mb="0">
          {t("Common.JobType.FULL")}
        </FormLabel>
      </HStack>
      <HStack mb="28px">
        <Switch onChange={() => handleSwitchChange('PART')}
         checked={selectedJobTypes.includes('PART')} size="lg" id="part" />
        <FormLabel cursor="pointer" fontSize="18px" htmlFor="part" mb="0">
          {t("Common.JobType.PART")}
        </FormLabel>
      </HStack>
      <HStack mb="28px">
        <Switch onChange={() => handleSwitchChange('FREELANCE')}
         checked={selectedJobTypes.includes('FREELANCE')}  size="lg" id="freelance" />
        <FormLabel cursor="pointer" fontSize="18px" htmlFor="freelance" mb="0">
          {t("Common.JobType.FREELANCE")}
        </FormLabel>
      </HStack>
      <HStack mb="28px">
        <Switch onChange={() => handleSwitchChange('INTERSHIP')}
         checked={selectedJobTypes.includes('INTERSHIP')}  size="lg" id="intern" />
        <FormLabel cursor="pointer" fontSize="18px" htmlFor="intern" mb="0">
          {t("Common.JobType.INTERSHIP")}
        </FormLabel>
      </HStack>
      <HStack mb="28px">
        <Switch onChange={() => handleSwitchChange('TEMPORARY')}
         checked={selectedJobTypes.includes('TEMPORARY')}  size="lg" id="temporary" />
        <FormLabel cursor="pointer" fontSize="18px" htmlFor="temporary" mb="0">
          {t("Common.JobType.TEMPORARY")}
        </FormLabel>
      </HStack>
    </FormControl>
  );
};

export default JobType;
