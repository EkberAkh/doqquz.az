"use client";
import Select from "react-select";
import { BiAddToQueue } from "react-icons/bi";
import React, { useState } from "react";
import {
  Box,
  Input,
  Text,
  Flex,
  FormLabel,
  FormControl,
  Textarea,
  Button,
  InputGroup,
  InputRightElement,
  Icon,
} from "@chakra-ui/react";
import { jobType } from "./const";
import { jobcategory } from "./const";
import { salaryType } from "./const";
import { currencyType } from "./const";
import { locationType } from "./const";
import JobCategories from "../jobs/JobCategories";
import Salary from "../jobs/Salary";
import SalaryType from "../jobs/SalaryType";
import CurrencyType from "../jobs/CurrencyType";
import LocationInput from "../jobs/LocationInput";
import KeywordInput from "../jobs/KeywordInput";
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";
import { useTranslations } from "next-intl";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { EJobType } from "../jobs/enums";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import { FaCheck } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useToast } from "@chakra-ui/react";
const PostJobs = () => {
  const token = Cookies.get('token')
  const t = useTranslations();
  const router = useRouter()
  const [title, setTitle] = useState("");
  const [jobType, setJobType] = useState([]);
  const [jobCategory, setJobCategory] = useState("");
  const [salaryType, setSalaryType] = useState("");
  const [salarymin, setSalarymin] = useState("");
  const [salarymax, setSalarymax] = useState("");
  const [currency, setCurrency] = useState("");
  const [location, setlocation] = useState("");
  const [notify, setNotify] = useState("");
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const [description, setDscription] = useState("");
  const [contact, setContact] = useState("");
  const [jobTypeValue, setJobTypeValue] = useState("");

  const toast = useToast();

  const jobTypes = Object.entries(EJobType);

  const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const payload = {
      category: jobCategory,
      contactInformation: contact,
      currency: currency,
      description: description,

      id: null, 
      location: location.id,

      maxEstimatedBudget: salarymax,
      minEstimatedBudget: salarymin,
      notificationEmail: notify,
      salaryType: salaryType,
      skills: selectedKeywords.map(skill => ({ id: null, name: skill })),
      title: title,
      type: jobType,
      user: null
    };
    try {
      const response = await fetch('https://neo-814m.onrender.com/v1/post/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Token: `${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      toast({
        title: t('Common.Success.default'),
        status: "success",
        duration: 2000,
        isClosable: true,
      });
   

      router.push('jobs')
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };


  const handleCategorySelect = (label: string, originalValue: string) => {
    setJobTypeValue(label);
    setJobType(originalValue);
    const selectedEntry = jobTypes.find(([key, val]) => val === originalValue);
    if (selectedEntry) {

      setJobType(selectedEntry[1]);
    }
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setJobTypeValue(newValue);

    const foundEntry = jobTypes.find(([key, value]) =>
      t(`Common.INDUSTRIES.${value}`) === newValue
    );

    if (foundEntry) {
      setJobType(foundEntry[0]); // Set the actual enum value
    } else {
      setJobType(""); // Clear the enum value if no match is found
    }
  };
  return (
    <>
      <Box w="1250px" m="auto">
        <Text fontWeight="bold" fontSize="24px">
          {t('Company.ManageJobs.actions.postAJob')}
        </Text>
        <Box boxShadow="1px 1px 5px 1px gray" p="20px 30px" m="50px 0">
          <Box mb="50px">
            <Flex gap="10px" p="10px 10px">
              <BiAddToQueue color="blue" size="20px" />
              <Text fontWeight="bold" fontSize="18px">
                {" "}
                {t('Company.PostAJob.subTitle')}
              </Text>
            </Flex>
            <hr></hr>
          </Box>
          <Box >
            <Flex alignItems='center' gap="30px" m="30px 0">
              <FormControl>
                <FormLabel fontSize='18px' marginBottom='16px'>{t('Company.PostAJob.fields.title')}</FormLabel>
                <Input
                  value={title}
                  backgroundColor='#fff'
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  type="text"
                  placeholder={t('Company.PostAJob.fields.title')}
                  h="50px"
                />
              </FormControl>
              <FormControl  w="100%">
                <FormLabel marginBottom="16px" fontSize="18px">
                  {t("Common.JobType.label")}
                </FormLabel>
                <AutoComplete openOnFocus>
                  {({ isOpen }: any) => (
                    <>
                      <InputGroup>
                        <AutoCompleteInput
                          value={jobTypeValue}
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
                          placeholder={t("Common.JobType.label")}
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
                        {jobTypes.map(([key, value], cid) => (
                          <AutoCompleteItem
                            key={`option-${cid}`}
                            value={value} // Original enum value
                            textTransform="capitalize"
                            onClick={() =>
                              handleCategorySelect(
                                t(`Common.JobType.${value}`),
                                value
                              )
                            }
                          >
                            {t(`Common.JobType.${value}`)}
                          </AutoCompleteItem>
                        ))}
                      </AutoCompleteList>
                    </>
                  )}
                </AutoComplete>
              </FormControl>
              <JobCategories setSelectedJobCategory={setJobCategory} />
            </Flex>
            <Flex alignItems='center' gap="30px">
              <SalaryType setSelectedSalary={setSalaryType} />
              <Box>
                <Flex alignItems='flex-end' gap="20px">
                  <FormControl>
                    <FormLabel>{t('Common.Salary.label')} </FormLabel>
                    <Input
                      backgroundColor='#fff'
                      width="180px"
                      h="50px"
                      onChange={(e) => {
                        setSalarymin(e.target.value);
                      }}
                      type="text"
                      placeholder="Min"
                    />
                  </FormControl>
                  <FormControl>
                    <Input
                      backgroundColor='#fff'
                      mt="24px"
                      width="180px"
                      h="50px"
                      onChange={(e) => {
                        setSalarymax(e.target.value);
                      }}
                      type="text"
                      placeholder="Max"
                    />
                  </FormControl>
                </Flex>
              </Box>
              <CurrencyType
                selectedCurrency={currency}
                setSelectedCurrency={setCurrency}
              />
            </Flex>
            <Flex alignItems='center' gap="30px" m="30px 0">
              <LocationInput setSelectedLocation={setlocation} />
              <FormControl>
                <FormLabel marginBottom='16px' fontSize='18px'>{t('Company.PostAJob.fields.notificationEmail')} </FormLabel>
                <Input
                  backgroundColor='#fff'
                  h="50px"
                  onChange={(e) => {
                    setNotify(e.target.value);
                  }}
                  type="text"
                  placeholder={t('Company.PostAJob.fields.notificationEmail')}
                />
              </FormControl>
              <KeywordInput setSelectedKeywords={setSelectedKeywords} />
            </Flex>
            <FormLabel> {t('Common.FormInputs.description.label')}</FormLabel>
            <Textarea
              backgroundColor='#fff'
              onChange={(e) => {
                setDscription(e.target.value);
              }}
              mb="30px"
              h="130px"
            />
            <FormLabel>{t('Common.FormInputs.contactInformation.label')}</FormLabel>
            <Textarea
              backgroundColor='#fff'
              onChange={(e) => {
                setContact(e.target.value);
              }}
              h="130px"
            />
            <Button mt="30px" _hover={{ opacity: '.4' }} color='#fff' backgroundColor='#2a41e8' p="20px 35px" onClick={handleSubmit}>
              {t('Common.Action.CREATE')}
            </Button>
          </Box>

        </Box>

      </Box>
    </>
  );
};

export default PostJobs;
