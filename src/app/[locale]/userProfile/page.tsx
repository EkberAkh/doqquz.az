"use client";
import React, { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import {
  Card,
  Box,
  CardBody,
  CardHeader,
  Heading,
  Flex,
  Button,
  Text,
  Input,
  useDisclosure,
  Modal,
  Link,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  FormControl,
  FormHelperText,
  FormLabel,
  Center,
  Divider,
  Textarea,
  Img,
  useMediaQuery,
} from "@chakra-ui/react";
import { colorObjects } from "@/consts";
import {
  MdOutlineAccountCircle,
  MdOutlineFaceUnlock,
  MdOutlineDesktopMac,
  MdOutlineLibraryBooks,
} from "react-icons/md";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { AddIcon } from "@chakra-ui/icons";
import ScrollToTop from "@/components/ScrollToTop";
// import "react-datepicker/dist/react-datepicker.css";
// import DatePicker from "react-datepicker";
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";
import { useEffect } from "react";

import { RiGraduationCapLine } from "react-icons/ri";
import { TiPin } from "react-icons/ti";
import { IoReorderThreeOutline } from "react-icons/io5";
import { GoClock } from "react-icons/go";
import Cookies from "js-cookie";
import { EJobType } from "../jobs/enums";
import { useToast } from "@chakra-ui/react";
const Profile = () => {
  const [maxWidth1100Media] = useMediaQuery("(max-width: 1100px)");
  const userProfileId = Cookies.get("userProfileId");
  const userId = Cookies.get("userId");
  const toast = useToast();
  const token = Cookies.get("token");
  const t = useTranslations();
  let role = localStorage.getItem("role");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [completionDate, setCompletionDate] = useState(new Date());

  const [contactNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const [valid, setValid] = useState(true);
  const [activeModal, setActiveModal] = useState("");
  const [universityName, setUniversityName] = useState("");
  const [major, setEducationMajor] = useState("");
  const [certificateDegreeName, setEducationDegree] = useState("");
  const [startingDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = React.useState("—");
  const [websiteUrl, setWebUrl] = React.useState("—");

  const [jobTypeValue, setJobTypeValue] = useState("");
  const [jobType, setJobType] = useState([]);
  const [companyName, setCompanyName] = useState("");
  const [title, setTitle] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);
  const [userInfo, setUserInfo] = useState();
  const [primaryData, setPrimaryData] = useState();

  useEffect(() => {
    async function fetchUserData() {
      // Assuming you have the token stored in cookies

      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Token: `${token}`,
        },
      };

      try {
        const response = await fetch(
          "https://neo-814m.onrender.com/v1/user",
          requestOptions
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setUserInfo(data);
      } catch (error) {
        console.error("There was an error fetching the user data:", error);
      }
    }
    fetchUserData();
  }, []);

  useEffect(() => {
    if (userInfo?.email) {
      setEmail(userInfo.email);
    }
  }, [userInfo]);
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleSave = async () => {
    try {
      // Fetch the token from cookies

      // Create a FormData object and append your data
      const formData = new FormData();
      const jsonData = { email: email, contactNumber: contactNumber };
      if (fileInputRef.current.files[0]) {
        formData.append("file", fileInputRef.current.files[0]);
      }
      formData.append("rest", JSON.stringify(jsonData));

      // Make the POST request
      const response = await fetch(
        `https://neo-814m.onrender.com/v1/user/${userId}`,
        {
          method: "POST",
          headers: {
            Token: `${token}`,
          },
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      toast({
        title: "Edit successful",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      console.log("Response data:", data);

      if (data.imageUrl) {
        setSelectedImage(data.imageUrl);
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  const handleOpenModal = (modalContent) => {
    setActiveModal(modalContent);
    onOpen();
  };

  const handleChange = (value) => {
    // const input = e.target.value;
    setPhoneNumber(value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\d{10}$/;
    return phoneNumberPattern.test(phoneNumber);
    // return phoneNumber.match("^[0-9]{10}$")
  };

  const handleSubmitEducation = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    const id = null;
    const jobSeeker = userProfileId;

    const data = {
      universityName,
      major,
      certificateDegreeName,
      startingDate,
      completionDate,
      id,
      jobSeeker,
    };

    fetch(`https://neo-814m.onrender.com/v1/education/${userProfileId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Token: `${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data); // Handle the response data as needed
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };
  const handleSubmitPortfolio = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    const id = null;
    const jobSeeker = userProfileId;

    const data = { description, websiteUrl, title, id, jobSeeker };

    fetch(`https://neo-814m.onrender.com/v1/portfolio/${userProfileId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Token: `${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data); // Handle the response data as needed
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  const handleSubmitExperience = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    const payload = {
      companyName: companyName,
      companyUser: null,
      description: description,
      endDate: endDate,
      id: null,
      jobType: jobType,
      jobSeeker: userProfileId,
      startingDate: startingDate,
      title: title,
    };
    try {
      const response = await fetch(
        `https://neo-814m.onrender.com/v1/experience/${userProfileId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Token: `${token}`,
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };
  const jobTypes = Object.entries(EJobType);

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

    const foundEntry = jobTypes.find(
      ([key, value]) => t(`Common.INDUSTRIES.${value}`) === newValue
    );

    if (foundEntry) {
      setJobType(foundEntry[0]); // Set the actual enum value
    } else {
      setJobType(""); // Clear the enum value if no match is found
    }
  };
  const [data, setData] = useState([]);
  const [experience, setExperience] = useState([]);
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://neo-814m.onrender.com/v1/education/jobSeeker/${userProfileId}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data);
        console.log(data);
      } catch (error) {
        console.error("Fetch error:", error.message);
      }
      try {
        const response = await fetch(
          `https://neo-814m.onrender.com/v1/experience/jobSeeker/${userProfileId}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setExperience(data);
        console.log(data);
      } catch (error) {
        console.error("Fetch error:", error.message);
      }
      try {
        const response = await fetch(
          `https://neo-814m.onrender.com/v1/portfolio/jobSeeker/${userProfileId}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPortfolio(data);
        console.log(data);
      } catch (error) {
        console.error("Fetch error:", error.message);
      }
    };

    fetchData();
  }, []);

  console.log(userInfo);

  useEffect(() => {
    async function fetchPrimaryData(id: number, role: string) {
      const url =
        role === "JOBSEEKER"
          ? `https://neo-814m.onrender.com/v1/jobseeker/userId/${id}`
          : `https://neo-814m.onrender.com/v1/company/userId/${id}`;
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Token: `${token}`, // Include the token in the Authorization header
        },
      };

      try {
        const response = await fetch(url, requestOptions);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();

        setPrimaryData(data);
      } catch (error) {
        console.error("There was an error fetching the jobseeker data:", error);
      }
    }

    fetchPrimaryData(userId, role);
  }, []);

  console.log(primaryData);

  return (
    <Flex justify={"center"}>
      <Box mx="15px" width={{base:"90%",lg:"81%"}}>
        <Card marginTop="30px" boxShadow="0 6px 10px rgba(1, 0, 0, 0.2)">
          <CardHeader
            borderBottom="1px solid #e4e4e4"
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex align={"center"}>
              <MdOutlineAccountCircle
                color="rgb(42, 65, 232)"
                fontSize="1.4em"
              />
              <Heading ml={"8px"} fontSize="1rem" fontWeight={700}>
                {t("Profile.titles.contactInfo")}
              </Heading>
            </Flex>
            <Box bgColor="#e0f5d7" color="#449626" p="5px" borderRadius="5px">
              {t("Common.Role.COMPANY")}
            </Box>
          </CardHeader>

          <CardBody p="30px">
            <Flex flexDirection={{base:"column",lg:"row"}}>
              <Box
                cursor="pointer"
                w="138px"
                h="138px"
                borderRadius="100px"
                bgColor={colorObjects.gray.border}
                marginRight="30px"
                border={"1px solid #2a41e8"}
                onClick={triggerFileInput}
                style={{
                  backgroundImage: `url(${selectedImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                marginBottom={{base:"20px",lg:"0"}}
              >
                {!selectedImage &&
                  (userInfo?.imageUrl ? (
                    <Img
                      w="138px"
                      h="138px"
                      borderRadius="100px"
                      src={userInfo?.imageUrl}
                    />
                  ) : (
                    <Img
                      w="138px"
                      h="138px"
                      borderRadius="100px"
                      src="../../../images/user.png"
                    />
                  ))}
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                  accept="image/*"
                />
              </Box>
              <Box w={{base:"100%",lg:"87%"}} >
                <Flex columnGap="30px" mb="30px" flexDirection={{base:"column",lg:"row"}}>
                  <Box w={{base:"100%",lg:"50%"}} marginBottom={{base:"15px",lg:"0"}}>
                    <Text mb="20px" fontSize="1.3rem">
                      {t("Common.FormInputs.email.label")}
                    </Text>
                    <Input
                      value={email}
                      placeholder="example@domain.com"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      h="48px"
                    ></Input>
                  </Box>

                  <Box w={{base:"100%",lg:"50%"}}>
                    <Text mb="20px" fontSize="1.3rem">
                      {t("Common.FormInputs.phoneNumber.label")}
                    </Text>
                    <PhoneInput
                      value={userInfo?.contactNumber}
                      country={"az"}
                      placeholder="+111 (11) 111-11-11"
                      onChange={(value) => {
                        setPhoneNumber(value);
                      }}
                      inputProps={{
                        required: "true",
                      }}
                      inputStyle={{
                        height: "48px",
                        width:  maxWidth1100Media ? '100%' : "27rem",
                        borderRadius: "0.3rem",
                      }}
                      buttonStyle={{ background: "#fff", borderRight: "none" }}
                    />
                    {!valid && (
                      <Text color={"red"} mt={"0.6rem"}>
                        Please enter a valid phone number!
                      </Text>
                    )}
                  </Box>
                </Flex>
                <Button
                  onClick={handleSave}
                  color={"#2a41e8"}
                  border={"2px solid #2a41e8"}
                  p={"23px 19px"}
                  borderRadius={"4px"}
                  letterSpacing={"0.1em"}
                  fontWeight={500}
                  box-shadow={"0 5px 10px rgba(0, 0, 0, 0.1)"}
                  transition="all 0.3s linear"
                  position={"relative"}
                  zIndex={"1"}
                  _hover={{
                    color: "#fff",
                    _before: {
                      transform: "scaleX(1)",
                    },
                  }}
                  _before={{
                    content: '""',
                    position: "absolute",
                    left: "0",
                    top: "0",
                    width: "100%",
                    height: "100%",
                    bg: "#2a41e8",
                    zIndex: "-1",
                    transition: " transform 0.8s cubic-bezier(0.5,1.6,0.4,0.7)",
                    transformOrigin: "0 0",
                    transform: "scaleX(0)",
                  }}
                  variant="primary"
                >
                  {t("Common.Action.SAVE")}
                </Button>
              </Box>
            </Flex>
          </CardBody>
        </Card>

        <Card marginTop="30px" boxShadow="0 6px 10px rgba(1, 0, 0, 0.2)">
          <CardHeader
            borderBottom="1px solid #e4e4e4"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex align={"center"}>
              <MdOutlineFaceUnlock color="rgb(42, 65, 232)" fontSize="1.4em" />
              <Heading ml={"8px"} fontSize="1rem" fontWeight={700}>
                {" "}
                Profil Məlumatı
              </Heading>
            </Flex>
            <Button
              bgColor="#e0f5d7"
              color="#449626"
              p="5px"
              borderRadius="5px"
              onClick={() => handleOpenModal("profile")}
            >
              Change
            </Button>
          </CardHeader>

          <CardBody p="30px">
            <Flex>
              <Box w="100%">
                {role === "COMPANY" && (
                  <Flex columnGap="30px" mb="30px" flexWrap="wrap" flexDirection={{base:"column",lg:"row"}}>
                    <Box w={{base:"100%",lg:"30%"}} display={{base:'flex',lg:"block"}} justifyContent={{base:"space-between",lg:"start"}}>>
                      <Text mb="20px" fontSize="1.3rem" fontWeight={600}>
                        {t("Profile.ProfileInfo.name")}
                      </Text>
                      <Text mb="20px" fontSize="1.3rem">
                        {primaryData?.name}
                      </Text>
                    </Box>
                    <Box w={{base:"100%",lg:"30%"}} display={{base:'flex',lg:"block"}} justifyContent={{base:"space-between",lg:"start"}}>>
                      <Text mb="20px" fontSize="1.3rem" fontWeight={600}>
                        {t("Common.FormInputs.websiteUrl.label")}
                      </Text>
                      <Text mb="20px" fontSize="1.3rem">
                        {primaryData?.websiteUrl}
                      </Text>
                    </Box>
                    <Box w={{base:"100%",lg:"30%"}} display={{base:'flex',lg:"block"}} justifyContent={{base:"space-between",lg:"start"}}>>
                      <Text mb="20px" fontSize="1.3rem" fontWeight={600}>
                        {t("Profile.ProfileInfo.establishmentDate")}
                      </Text>
                      <Text mb="20px" fontSize="1.3rem">
                        {primaryData?.establishmentDate}
                      </Text>
                    </Box>
                    <Box w={{base:"100%",lg:"30%"}} display={{base:'flex',lg:"block"}} justifyContent={{base:"space-between",lg:"start"}}> mt="30px">
                      <Text mb="20px" fontSize="1.3rem" fontWeight={600}>
                        {t("Common.FormInputs.description.label")}
                      </Text>
                      <Text mb="20px" fontSize="1.3rem">
                        {primaryData?.description}
                      </Text>
                    </Box>
                  </Flex>
                )}
                {role === "JOBSEEKER" && (
                  <Flex columnGap="30px" mb="30px" flexWrap="wrap" flexDirection={{base:"column",lg:"row"}}>
                    <Box w={{base:"100%",lg:"30%"}} display={{base:'flex',lg:"block"}} justifyContent={{base:"space-between",lg:"start"}}>
                      <Text mb="20px" fontSize="1.3rem" fontWeight={600}>
                        {t("Profile.ProfileInfo.name")}
                      </Text>
                      <Text mb="20px" fontSize="1.3rem">
                        {primaryData?.firstName}
                      </Text>
                    </Box>
                    <Box  w={{base:"100%",lg:"30%"}} display={{base:'flex',lg:"block"}} justifyContent={{base:"space-between",lg:"start"}}>
                      <Text mb="20px" fontSize="1.3rem" fontWeight={600}>
                        {t("Common.FormInputs.lastName.label")}
                      </Text>
                      <Text mb="20px" fontSize="1.3rem">
                        {primaryData?.lastName}
                      </Text>
                    </Box>
                    <Box  w={{base:"100%",lg:"30%"}} display={{base:'flex',lg:"block"}} justifyContent={{base:"space-between",lg:"start"}}>
                      <Text mb="20px" fontSize="1.3rem" fontWeight={600}>
                        {t("Profile.ProfileInfo.birthday")}
                      </Text>
                      <Text mb="20px" fontSize="1.3rem">
                        {primaryData?.birthDay === null && "--"}
                      </Text>
                    </Box>
                    <Box  w={{base:"100%",lg:"30%"}} display={{base:'flex',lg:"block"}} justifyContent={{base:"space-between",lg:"start"}} mt="30px">
                      <Text mb="20px" fontSize="1.3rem" fontWeight={600}>
                        {t("Common.GENDER.label")}
                      </Text>
                      <Text mb="20px" fontSize="1.3rem">
                        {primaryData?.gender === null && "--"}
                      </Text>
                    </Box>
                    <Box  w={{base:"100%",lg:"30%"}} display={{base:'flex',lg:"block"}} justifyContent={{base:"space-between",lg:"start"}} mt="30px">
                      <Text mb="20px" fontSize="1.3rem" fontWeight={600}>
                        {t("Common.SalaryType.label")}
                      </Text>
                      <Text mb="20px" fontSize="1.3rem">
                        {primaryData?.salaryType === null && "--"}
                      </Text>
                    </Box>
                    <Box  w={{base:"100%",lg:"30%"}} display={{base:'flex',lg:"block"}} justifyContent={{base:"space-between",lg:"start"}} mt="30px">
                      <Text mb="20px" fontSize="1.3rem" fontWeight={600}>
                        {t("Profile.ProfileInfo.expectedSalary")}
                      </Text>
                      <Text mb="20px" fontSize="1.3rem">
                        {primaryData?.expectedSalary === null && "--"}
                      </Text>
                    </Box>
                    <Box  w={{base:"100%",lg:"30%"}} display={{base:'flex',lg:"block"}} justifyContent={{base:"space-between",lg:"start"}} mt="30px">
                      <Text mb="20px" fontSize="1.3rem" fontWeight={600}>
                        {t("Common.Currency.label")}
                      </Text>
                      <Text mb="20px" fontSize="1.3rem">
                        {primaryData?.currency === null && "--"}
                      </Text>
                    </Box>
                    <Box  w={{base:"100%",lg:"30%"}} display={{base:'flex',lg:"block"}} justifyContent={{base:"space-between",lg:"start"}} mt="30px">
                      <Text mb="20px" fontSize="1.3rem" fontWeight={600}>
                        {t("Common.INDUSTRIES.label")}
                      </Text>
                      <Text mb="20px" fontSize="1.3rem">
                        {primaryData?.category === null && "--"}
                      </Text>
                    </Box>
                  </Flex>
                )}
              </Box>
            </Flex>
          </CardBody>
        </Card>

        {role === "JOBSEEKER" && (
          <Box>
            {activeModal === "profile" && (
              <Modal onClose={onClose} size={"full"} isOpen={isOpen}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader
                    fontSize="27px"
                    fontWeight="700"
                    borderBottom="1px solid #e4e4e4"
                  >
                    <Flex px="120px">
                      {t("Profile.titles.profileInfo")}{" "}
                      <ModalCloseButton size="xl" margin="10px" />
                    </Flex>
                  </ModalHeader>

                  <ModalBody
                    padding="64px 120px 0 120px"
                    mb="80px"
                    display="flex"
                    columnGap="20px"
                    flexWrap="wrap"
                    maxHeight="400px"
                  >
                    <FormControl w="45%">
                      <FormLabel>{t("Profile.ProfileInfo.name")}</FormLabel>
                      <Input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        h="48px"
                      />
                    </FormControl>
                    <FormControl w="45%">
                      <FormLabel>
                        {t("Common.FormInputs.websiteUrl.label")}
                      </FormLabel>
                      <InputGroup size="sm">
                        <Input
                          placeholder="mysite"
                          onChange={(e) => setWebUrl(e.target.value)}
                          h="48px"
                        />
                      </InputGroup>
                    </FormControl>
                    <FormControl w="50%">
                      <FormLabel>
                        {t("Profile.ProfileInfo.establishmentDate")}
                      </FormLabel>
                      <InputGroup size="sm">
                        <Input
                          h="48px"
                          onChange={(e) => setStartDate(e.target.value)}
                          size="md"
                          type="datetime-local"
                        />
                      </InputGroup>
                    </FormControl>
                  </ModalBody>
                  <ModalFooter>
                    <Button onClick={onClose}>Close</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            )}

            <Card mt={"30px"} boxShadow="0 6px 10px rgba(1, 0, 0, 0.2)">
              <CardHeader borderBottom="1px solid #e4e4e4">
                <Flex align={"center"}>
                  <MdOutlineDesktopMac
                    color="rgb(42, 65, 232)"
                    fontSize="1.4em"
                  />
                  <Heading ml={"8px"} fontSize="1rem" fontWeight={700}>
                    {" "}
                    {t("Profile.titles.education")}
                  </Heading>
                </Flex>
              </CardHeader>
              <CardBody>
                <Center flexDir={"column"}>
                  {/* <Text m={'2rem 0 1.5rem'}>Bu bölmədə heç bir qeyd yoxdur</Text> */}
                  {data &&
                    data.map((item, key) => (
                      <>
                        <Box w="100%">
                          <Flex justifyContent="space-between">
                            <Box pt="40px">
                              <Flex gap="30px" alignItems="center" ml="20px">
                                <Box
                                  borderRadius="50%"
                                  padding="16px"
                                  bg="gray"
                                >
                                  <RiGraduationCapLine
                                    size="20px"
                                    color="white"
                                  />
                                </Box>

                                <Flex flexDirection="column">
                                  <Text fontWeight="bold" fontSize="18px">
                                    {item.universityName} ----{item.major}
                                  </Text>
                                  <Flex alignItems="center" gap="6px">
                                    <IoReorderThreeOutline size="24px" />
                                    <Text fontSize="14px" mr="20px">
                                      {" "}
                                      {item.certificateDegreeName}
                                    </Text>
                                    <GoClock />
                                    <Text fontSize="14px">
                                      {new Date(
                                        item.startingDate
                                      ).toLocaleDateString()}{" "}
                                      -{" "}
                                      {new Date(
                                        item.completionDate
                                      ).toLocaleDateString()}
                                    </Text>
                                  </Flex>
                                </Flex>
                              </Flex>
                            </Box>
                            <Box m="50px">
                              <Flex gap="20px">
                                <Button>EDIT</Button>
                                <Button>DELETE</Button>
                              </Flex>
                            </Box>
                          </Flex>
                        </Box>
                      </>
                    ))}
                  <Button
                    onClick={() => handleOpenModal("education")}
                    leftIcon={<AddIcon width={"0.8rem"} mr={"0.2rem"} />}
                    color={"#fff"}
                    bg={"#2a41e8"}
                    border={"2px solid #2a41e8"}
                    p={"23px 19px"}
                    mb={"1.5rem"}
                    borderRadius={"4px"}
                    fontWeight={400}
                    box-shadow={"0 5px 10px rgba(0, 0, 0, 0.1)"}
                    variant="primary"
                  >
                    {t("Common.Action.ADD")}{" "}
                  </Button>
                </Center>
              </CardBody>
            </Card>

            {activeModal === "education" && (
              <Modal isOpen={isOpen} onClose={onClose} size={"full"}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader fontSize="1.7rem" fontWeight="600" ml={"6.5rem"}>
                    {t("Profile.titles.education")}
                    <ModalCloseButton
                      size={"xl"}
                      m={"0.9rem"}
                      color={"#9e9e9e"}
                      pr={"9px"}
                    />
                  </ModalHeader>
                  <Divider borderColor="#e4e4e4" />
                  <ModalBody p={"3.7rem 7.4rem 0"}>
                    <Flex flexWrap={"wrap"} columnGap={"1.5rem"} width={"100%"}>
                      <FormControl
                        minH={"7.1rem"}
                        flexBasis={"calc(50% - 0.8rem)"}
                      >
                        <FormLabel fontSize={"1.1rem"} mb={"0.9rem"}>
                          {t("Profile.Education.name")}
                        </FormLabel>
                        <Input
                          type="text"
                          onChange={(e) => setUniversityName(e.target.value)}
                          placeholder={t("Profile.Education.name")}
                          h={"3.1rem"}
                        ></Input>
                      </FormControl>
                      <FormControl
                        minH={"7.1rem"}
                        flexBasis={"calc(50% - 0.8rem)"}
                      >
                        <FormLabel fontSize={"1.1rem"} mb={"0.9rem"}>
                          {t("Profile.Education.major")}
                        </FormLabel>
                        <Input
                          type="text"
                          onChange={(e) => setEducationMajor(e.target.value)}
                          placeholder={t("Profile.Education.major")}
                          h={"3.1rem"}
                        ></Input>
                      </FormControl>
                      <FormControl
                        minH={"7.1rem"}
                        flexBasis={"calc(50% - 0.8rem)"}
                      >
                        <FormLabel fontSize={"1.1rem"} mb={"0.9rem"}>
                          {t("Common.FormInputs.startingDate.label")}
                        </FormLabel>
                        <Input
                          h={"3.1rem"}
                          onChange={(e) => setStartDate(e.target.value)}
                          size="md"
                          type="date" // Change here
                        />
                      </FormControl>
                      <FormControl
                        minH={"7.1rem"}
                        flexBasis={"calc(50% - 0.8rem)"}
                      >
                        <FormLabel fontSize={"1.1rem"} mb={"0.9rem"}>
                          {t("Common.FormInputs.endDate.label")}
                        </FormLabel>
                        <Input
                          h={"3.1rem"}
                          onChange={(e) => setCompletionDate(e.target.value)}
                          size="md"
                          type="date" // Change here
                        />
                      </FormControl>
                      <FormControl
                        minH={"7.1rem"}
                        flexBasis={"calc(50% - 0.8rem)"}
                      >
                        <FormLabel fontSize={"1.1rem"} mb={"0.9rem"}>
                          {t("Profile.Education.degree")}
                        </FormLabel>
                        <Input
                          type="text"
                          onChange={(e) => setEducationDegree(e.target.value)}
                          placeholder={t("Profile.Education.degree")}
                          h={"3.1rem"}
                        ></Input>
                      </FormControl>
                    </Flex>
                  </ModalBody>
                  <Divider />
                  <ModalFooter p={"1rem 7.4rem 1.5rem"}>
                    <Button
                      onClick={handleSubmitEducation}
                      color={"#fff"}
                      bg={"#2a41e8"}
                      border={"2px solid #2a41e8"}
                      p={"23px 15px"}
                      borderRadius={"4px"}
                      fontWeight={400}
                      box-shadow={"0 5px 10px rgba(0, 0, 0, 0.1)"}
                      variant="primary"
                    >
                      {t("Common.Action.SAVE")}{" "}
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            )}

            <Card mt={"30px"} boxShadow="0 6px 10px rgba(1, 0, 0, 0.2)">
              <CardHeader borderBottom="1px solid #e4e4e4">
                <Flex align={"center"}>
                  <MdOutlineLibraryBooks
                    color="rgb(42, 65, 232)"
                    fontSize="1.4em"
                  />
                  <Heading ml={"8px"} fontSize="1rem" fontWeight={700}>
                    {" "}
                    {t("Profile.titles.experience")}
                  </Heading>
                </Flex>
              </CardHeader>
              <CardBody>
                <Center flexDir={"column"}>
                  {/* <Text m={'2rem 0 1.5rem'}>Bu bölmədə heç bir qeyd yoxdur</Text> */}
                  {experience &&
                    experience.map((item, key) => (
                      <>
                        <Box w="100%">
                          <Flex justifyContent="space-between">
                            <Box pt="40px">
                              <Flex gap="30px" alignItems="center" ml="20px">
                                <Box
                                  borderRadius="50%"
                                  padding="16px"
                                  bg="gray"
                                >
                                  <RiGraduationCapLine
                                    size="20px"
                                    color="white"
                                  />
                                </Box>

                                <Flex flexDirection="column" gap="5px">
                                  <Text fontWeight="bold" fontSize="18px">
                                    {item.companyName} ----{item.title}
                                  </Text>
                                  <Flex alignItems="center" gap="6px">
                                    <GoClock />
                                    <Text fontSize="14px">
                                      {new Date(
                                        item.startingDate
                                      ).toLocaleDateString()}{" "}
                                      -{" "}
                                      {new Date(
                                        item.endDate
                                      ).toLocaleDateString()}
                                    </Text>
                                  </Flex>
                                  <Text>{item.description}</Text>
                                </Flex>
                              </Flex>
                            </Box>
                            <Box m="50px">
                              <Flex gap="20px">
                                <Button>EDIT</Button>
                                <Button>DELETE</Button>
                              </Flex>
                            </Box>
                          </Flex>
                        </Box>
                      </>
                    ))}
                  <Button
                    onClick={() => handleOpenModal("experience")}
                    leftIcon={<AddIcon width={"0.8rem"} mr={"0.2rem"} />}
                    color={"#fff"}
                    bg={"#2a41e8"}
                    border={"2px solid #2a41e8"}
                    p={"23px 19px"}
                    mb={"1.5rem"}
                    borderRadius={"4px"}
                    fontWeight={400}
                    box-shadow={"0 5px 10px rgba(0, 0, 0, 0.1)"}
                    transition="all 0.3s linear"
                    position={"relative"}
                    zIndex={"1"}
                    variant="primary"
                  >
                    {t("Common.Action.ADD")}{" "}
                  </Button>
                </Center>
              </CardBody>
            </Card>

            {activeModal === "experience" && (
              <Modal isOpen={isOpen} onClose={onClose} size={"full"}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader fontSize="1.7rem" fontWeight="600" ml={"6.5rem"}>
                    {t("Profile.titles.experience")}
                    <ModalCloseButton
                      size={"xl"}
                      m={"0.9rem"}
                      color={"#9e9e9e"}
                      pr={"9px"}
                    />
                  </ModalHeader>
                  <Divider borderColor="#e4e4e4" />
                  <ModalBody p={"3.7rem 7.4rem 0"}>
                    <Flex flexWrap={"wrap"} columnGap={"1.5rem"} width={"100%"}>
                      <FormControl
                        minH={"7.1rem"}
                        flexBasis={"calc(50% - 0.8rem)"}
                      >
                        <FormLabel fontSize={"1.1rem"} mb={"0.9rem"}>
                          {t("Profile.Experience.name")}
                        </FormLabel>
                        <Input
                          type="text"
                          onChange={(e) => setCompanyName(e.target.value)}
                          placeholder={t("Profile.Experience.name")}
                          h={"3.1rem"}
                        ></Input>
                      </FormControl>
                      <FormControl
                        minH={"7.1rem"}
                        flexBasis={"calc(50% - 0.8rem)"}
                      >
                        <FormLabel fontSize={"1.1rem"} mb={"0.9rem"}>
                          {t("Profile.Experience.title")}
                        </FormLabel>
                        <Input
                          type="text"
                          onChange={(e) => setTitle(e.target.value)}
                          placeholder={t("Profile.Experience.title")}
                          h={"3.1rem"}
                        ></Input>
                      </FormControl>
                      <FormControl
                        minH={"7.1rem"}
                        flexBasis={"calc(50% - 0.8rem)"}
                      >
                        <FormLabel fontSize={"1.1rem"} mb={"0.9rem"}>
                          {t("Common.FormInputs.startingDate.label")}
                        </FormLabel>
                        <Input
                          h={"3.1rem"}
                          onChange={(e) => setStartDate(e.target.value)}
                          size="md"
                          type="date" // Change here
                        />
                      </FormControl>
                      <FormControl
                        minH={"7.1rem"}
                        flexBasis={"calc(50% - 0.8rem)"}
                      >
                        <FormLabel fontSize={"1.1rem"} mb={"0.9rem"}>
                          {t("Common.FormInputs.endDate.label")}
                        </FormLabel>
                        <Input
                          h={"3.1rem"}
                          onChange={(e) => setEndDate(e.target.value)}
                          size="md"
                          type="date" // Change here
                        />
                      </FormControl>
                      <FormControl
                        minH={"7.1rem"}
                        flexBasis={"calc(50% - 0.8rem)"}
                      >
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
                      <FormControl
                        minH={"7.1rem"}
                        flexBasis={"calc(50% - 0.8rem)"}
                      >
                        <FormLabel fontSize={"1.1rem"} mb={"0.9rem"}>
                          {t("Common.FormInputs.description.label")}
                        </FormLabel>
                        <Textarea
                          placeholder={t("Common.FormInputs.description.label")}
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          minH={"5rem"}
                          p={"1.1rem"}
                          resize={"none"}
                        ></Textarea>
                      </FormControl>
                    </Flex>
                  </ModalBody>
                  <Divider />
                  <ModalFooter p={"1rem 7.4rem 1.5rem"}>
                    <Button
                      onClick={handleSubmitExperience}
                      color={"#fff"}
                      bg={"#2a41e8"}
                      border={"2px solid #2a41e8"}
                      p={"23px 15px"}
                      borderRadius={"4px"}
                      fontWeight={400}
                      box-shadow={"0 5px 10px rgba(0, 0, 0, 0.1)"}
                      variant="primary"
                    >
                      {t("Common.Action.SAVE")}{" "}
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            )}

            <Card mt={"30px"} boxShadow="0 6px 10px rgba(1, 0, 0, 0.2)">
              <CardHeader borderBottom="1px solid #e4e4e4">
                <Flex align={"center"}>
                  <MdOutlineDesktopMac
                    color="rgb(42, 65, 232)"
                    fontSize="1.4em"
                  />
                  <Heading ml={"8px"} fontSize="1rem" fontWeight={700}>
                    {" "}
                    {t("Profile.titles.portfolio")}
                  </Heading>
                </Flex>
              </CardHeader>
              <CardBody>
                <Center flexDir={"column"}>
                  {/* <Text m={'2rem 0 1.5rem'}>Bu bölmədə heç bir qeyd yoxdur</Text> */}
                  {portfolio &&
                    portfolio.map((item, key) => (
                      <>
                        <Box w="100%">
                          <Flex justifyContent="space-between">
                            <Box pt="40px">
                              <Flex gap="30px" alignItems="center" ml="20px">
                                <Box
                                  borderRadius="50%"
                                  padding="16px"
                                  bg="gray"
                                >
                                  <RiGraduationCapLine
                                    size="20px"
                                    color="white"
                                  />
                                </Box>

                                <Flex flexDirection="column">
                                  <Text fontWeight="bold" fontSize="18px">
                                    {item.title}
                                  </Text>
                                  <Flex alignItems="center" gap="6px">
                                    <TiPin size="24px" />
                                    <Link
                                      fontSize="14px"
                                      mr="20px"
                                      color="blue"
                                    >
                                      {" "}
                                      {item.websiteUrl}
                                    </Link>
                                  </Flex>
                                </Flex>
                              </Flex>
                            </Box>
                            <Box m="50px">
                              <Flex gap="20px">
                                <Button>EDIT</Button>
                                <Button>DELETE</Button>
                              </Flex>
                            </Box>
                          </Flex>
                        </Box>
                      </>
                    ))}
                  <Button
                    onClick={() => handleOpenModal("portfolio")}
                    leftIcon={<AddIcon width={"0.8rem"} mr={"0.2rem"} />}
                    color={"#fff"}
                    bg={"#2a41e8"}
                    border={"2px solid #2a41e8"}
                    p={"23px 19px"}
                    mb={"1.5rem"}
                    borderRadius={"4px"}
                    fontWeight={400}
                    box-shadow={"0 5px 10px rgba(0, 0, 0, 0.1)"}
                    transition="all 0.3s linear"
                    position={"relative"}
                    zIndex={"1"}
                    variant="primary"
                  >
                    {t("Common.Action.ADD")}{" "}
                  </Button>
                </Center>
              </CardBody>
            </Card>

            {activeModal === "portfolio" && (
              <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader fontSize="1.7rem" fontWeight="600">
                    {t("Profile.Portfolio.header.add")}
                    <ModalCloseButton
                      size={"lg"}
                      m={"0.6rem"}
                      color={"#9e9e9e"}
                    />
                  </ModalHeader>
                  <Divider borderColor="#e4e4e4" />
                  <ModalBody>
                    <Flex flexWrap={"wrap"} columnGap={"1.5rem"} width={"100%"}>
                      <FormControl
                        minH={"7.1rem"}
                        flexBasis={"calc(50% - 0.8rem)"}
                      >
                        <FormLabel fontSize={"1.1rem"} mb={"0.9rem"}>
                          {t("Profile.Portfolio.title")}
                        </FormLabel>
                        <Input
                          onChange={(e) => setTitle(e.target.value)}
                          type="text"
                          placeholder={t("Profile.Portfolio.title")}
                          _placeholder={{ opacity: "0.5" }}
                          h={"3.1rem"}
                        ></Input>
                      </FormControl>

                      <FormControl
                        minH={"7.1rem"}
                        flexBasis={"calc(50% - 0.8rem)"}
                      >
                        <FormLabel fontSize={"1.1rem"} mb={"0.9rem"}>
                          {t("Common.FormInputs.websiteUrl.label")}
                        </FormLabel>
                        <Input
                          onChange={(e) => setWebUrl(e.target.value)}
                          type="text"
                          placeholder={"www.example.com"}
                          _placeholder={{ opacity: "0.5" }}
                          h={"3.1rem"}
                        ></Input>
                      </FormControl>

                      <FormControl minH={"10rem"} flexBasis={"100%"}>
                        <FormLabel fontSize={"1.1rem"} mb={"0.9rem"}>
                          {t("Common.FormInputs.description.label")}
                        </FormLabel>
                        <Textarea
                          onChange={(e) => setDescription(e.target.value)}
                          placeholder={t("Common.FormInputs.description.label")}
                          _placeholder={{ opacity: "0.5" }}
                          minH={"5rem"}
                          p={"1.1rem"}
                          resize={"none"}
                        ></Textarea>
                      </FormControl>
                    </Flex>
                  </ModalBody>
                  <Divider />
                  <ModalFooter p={"1rem 1.5rem"}>
                    <Button
                      onClick={handleSubmitPortfolio}
                      color={"#fff"}
                      bg={"#2a41e8"}
                      border={"2px solid #2a41e8"}
                      p={"23px 15px"}
                      borderRadius={"4px"}
                      fontWeight={400}
                      box-shadow={"0 5px 10px rgba(0, 0, 0, 0.1)"}
                      variant="primary"
                    >
                      {t("Common.Action.SAVE")}{" "}
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            )}
          </Box>
        )}
      </Box>
      <ScrollToTop />
    </Flex>
  );
};

export default Profile;
