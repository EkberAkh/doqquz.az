"use client";
import { BiAddToQueue } from "react-icons/bi";
import React, { useEffect, useState } from "react";
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
import { ESalaryType } from "../jobs/enums";
import { EINDUSTRY } from "../jobs/enums";
import { useSearchParams } from "next/navigation";



const EditJobs = () => {
    const t = useTranslations();
    const router = useRouter()
    const [title, setTitle] = useState("");
    const [salarymin, setSalarymin] = useState("");
    const [salarymax, setSalarymax] = useState("");
    const [currency, setCurrency] = useState("");
    const [location, setlocation] = useState("");
    const [notify, setNotify] = useState("");
    const [selectedKeywords, setSelectedKeywords] = useState([]);
    const [description, setDscription] = useState("");
    const [contact, setContact] = useState("");

    const [jobType, setJobType] = useState([]);
    const [jobTypeValue, setJobTypeValue] = useState("");

    const [data, setData] = useState({})

    const jobTypes = Object.entries(EJobType);

    const token = Cookies.get('token');

    useEffect(() => {
        const fetchData = async () => {

            try {
                const response = await fetch(`https://neo-814m.onrender.com/v1/post/${companyId}`)
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const dataa = await response.json();
                setData(dataa);
                setTitle(dataa.title)
                setSalarymin(dataa.minEstimatedBudget)
                setSalarymax(dataa.maxEstimatedBudget)
                setDscription(dataa.description)
                setContact(dataa.contactInformation)
                setCurrency(dataa.currency)
                setJobTypeValue(t(`Common.JobType.${dataa.type}`));
                setSalaryTypevalue(t(`Common.SalaryType.${dataa.salaryType}`))
                setJobCategoryValue(t(`Common.INDUSTRIES.${dataa.category}`))
                setSelectedKeywords(dataa.skills)

            } catch (error) {
                console.error('Fetch error:', error.message);
            }
        };
        fetchData();

    }, []);



    const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const token = Cookies.get('token');
        e.preventDefault();
        const payload = {
            category: jobCategory,
            contactInformation: contact,
            currency: currency,
            description: description,
            id: null,
            location: location === "" ? null : location,
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
            const response = await fetch(`https://neo-814m.onrender.com/v1/post/${companyId}`, {
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


            router.push('jobs')
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };

    //--------------------------------------------------------------------------  jobType  full,part,frilans

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

    //----------------------------------------------------------------------------------   salaryType ayliq,illik

    const [salaryType, setSalaryType] = useState([]);
    const [salaryTypevalue, setSalaryTypevalue] = useState("");
    const salaries = Object.entries(ESalaryType);

    const handleSalaryCategorySelect = (label: string, originalValue: string) => {
        setSalaryTypevalue(label);
        setSalaryType(originalValue);
        const selectedEntry = salaries.find(([key, val]) => val === originalValue);
        if (selectedEntry) {

            setSalaryType(selectedEntry[1]);
        }
    };
    const handleInputChangeSalary = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setSalaryTypevalue(newValue);

        const found = salaries.some(([key, value]) => t(`Common.INDUSTRIES.${value}`) === newValue);
        if (foundEntry) {
            setSalaryType(foundEntry[0]); // Set the actual enum value
        } else {
            setSalaryType(""); // Clear the enum value if no match is found
        }
    };
//-----------------------------------------------------------------------------------------------------------  jobCategory
const [jobCategory, setJobCategory] = useState([]);
const [jobCategoryValue, setJobCategoryValue] = useState("");

const jobs = Object.entries(EINDUSTRY);

const handleJobCategorySelect = (label: string, originalValue: string) => {
    setJobCategoryValue(label);
    setJobCategory(originalValue);
    const selectedEntry = jobs.find(([key, val]) => val === originalValue);
    if (selectedEntry) {

        setJobCategory(selectedEntry[1]);
    }
};
const handleInputChangeJob = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setJobCategoryValue(newValue);

    const found = salaries.some(([key, value]) => t(`Common.INDUSTRIES.${value}`) === newValue);
    if (foundEntry) {
        setJobCategory(foundEntry[0]); // Set the actual enum value
    } else {
        setJobCategory(""); // Clear the enum value if no match is found
    }
};

const searchParams = useSearchParams();
const companyId = searchParams.get("companyId");

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
                    {data &&
                        <Box >
                            <Flex alignItems='center' gap="30px" m="30px 0">
                                <FormControl>
                                    <FormLabel>{t('Company.PostAJob.fields.title')}</FormLabel>
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
                                <FormControl marginBottom="16px" w="100%">
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
                                {/* <JobCategories setSelectedJobCategory={setJobCategory} selectedCategory={jobCategory} /> */}
                                <FormControl marginBottom="16px" w="100%">
                                    <FormLabel marginBottom="16px" fontSize="18px">
                                        {t("Common.INDUSTRIES.label")}
                                    </FormLabel>
                                    <AutoComplete openOnFocus>
                                        {({ isOpen }: any) => (
                                            <>
                                                <InputGroup>
                                                    <AutoCompleteInput
                                                        value={jobCategoryValue}
                                                        onChange={handleInputChangeJob}
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
                                                            onClick={() => handleJobCategorySelect(t(`Common.INDUSTRIES.${value}`), value)}
                                                        >
                                                            {t(`Common.INDUSTRIES.${value}`)}
                                                        </AutoCompleteItem>
                                                    ))}
                                                </AutoCompleteList>
                                            </>
                                        )}
                                    </AutoComplete>
                                </FormControl>
                            </Flex>
                            <Flex alignItems='center' gap="30px">

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
                                                        value={salaryTypevalue}
                                                        onChange={handleInputChangeSalary}
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
                                                                handleSalaryCategorySelect(t(`Common.SalaryType.${value}`), value)
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
                                <Box>
                                    <Flex alignItems='flex-end' gap="20px">
                                        <FormControl>
                                            <FormLabel>{t('Common.Salary.label')} </FormLabel>
                                            <Input

                                                value={salarymin}
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
                                                value={salarymax}
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
                                    setSelectedCurrency={setCurrency}
                                />
                            </Flex>
                            <Flex alignItems='center' gap="30px" m="30px 0">
                                <LocationInput setSelectedLocation={setlocation} />
                                <FormControl>
                                    <FormLabel>{t('Company.PostAJob.fields.notificationEmail')} </FormLabel>
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
                                <KeywordInput setSelectedKeywords={setSelectedKeywords} selectedKeywords={selectedKeywords} />
                            </Flex>
                            <FormLabel> {t('Common.FormInputs.description.label')}</FormLabel>
                            <Textarea
                                value={description}
                                backgroundColor='#fff'
                                onChange={(e) => {
                                    setDscription(e.target.value);
                                }}
                                mb="30px"
                                h="130px"
                            />
                            <FormLabel>{t('Common.FormInputs.contactInformation.label')}</FormLabel>
                            <Textarea
                                value={contact}
                                backgroundColor='#fff'
                                onChange={(e) => {
                                    setContact(e.target.value);
                                }}
                                h="130px"
                            />
                            <Button mt="30px" _hover={{ opacity: '.4' }} color='#fff' backgroundColor='#2a41e8' p="20px 35px" onClick={handleSubmit}>
                                {t('Common.Action.CREATE')}
                            </Button>
                        </Box>}

                </Box>

            </Box>
        </>
    );
};

export default EditJobs;