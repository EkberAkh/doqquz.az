"use client";
import { Box, Flex, Text, Button, color } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiDollarCircle } from "react-icons/bi";
import { GoClock } from "react-icons/go";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { BsBagPlus } from "react-icons/bs";
import { useSearchParams } from "next/navigation";
import Cookies from "js-cookie";
import { useTranslations } from "next-intl";
import { NavigationLink } from "@/components/NavigationLink";
import { useToast } from "@chakra-ui/react";

interface YourJobType {
  category: string;
  contactInformation:string;
  description:string;
  title: string;
  city: string;
  type: string;
  minEstimatedBudget: string;
  maxEstimatedBudget: string;
  currency: string;
  createdAt: string;
  id: number;
  location:{
    city:string;
    country:string;
  }
salaryType:string
  company: any;
  skills: any;

}
const ViewJobs = () => {
  const [job, setJob] = useState<YourJobType>({});
  const [jobSeeker,setJobSeeker]=useState([])
  const searchParams = useSearchParams();
  const jobId = searchParams.get("jobId");
  const token = Cookies.get("token");
  const userId = Cookies.get("userId");
  const storedJobString = localStorage.getItem("currentJob");
  const storedJob = JSON.parse(storedJobString as string);
  const toast = useToast();
let role = localStorage.getItem('role')
  const userRole = localStorage.getItem('role')
const t = useTranslations()
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(`https://neo-814m.onrender.com/v1/post/${jobId}`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setJob(data)


      } catch (error) {
        console.error('Fetching jobs failed:', error);
      }
    };

    fetchJobs();
  }, []);

  useEffect(()=>{
    async function fetchUserData() {
      // Assuming you have the token stored in cookies
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Token: `${token}`, // Include the token in the Authorization header
        },
      };
      try {
        const response = await fetch(
          `https://neo-814m.onrender.com/v1/jobseeker/userId/${userId}`,
          requestOptions
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setJobSeeker(Array.isArray(data) ? data : [data]);
      console.log('jobSeeker data:', data);
        // Directly return the role and id from this functio
      } catch (error) {
        console.error("There was an error fetching the user data:", error);
      }
    }
     fetchUserData()
  },[])

console.log(job);

 console.log(jobSeeker);
 
  const handleApplyClick = async () => {
    try {
      const payload = {
       jobseekers:jobSeeker
      };
      const response = await fetch(`https://neo-814m.onrender.com/v1/post/apply/${jobId}`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Token": `${token}`,
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      console.log('Application submitted successfully!');
      toast({
        title: "Application submitted.",
        description: "Your application has been successfully submitted!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Error submitting application:', error);
    }
  };

  
  return (
    <>
      <>
        <Box h="230px" bg="linear-gradient(to right, white , gray);">
          <Box w="1200px" m="auto">
            <Flex justifyContent="space-between">
              <Box pt="40px">
                <Flex gap="30px">
                  <Box bg={"white"} p="30px" borderRadius="50%">
                    <BsBagPlus size="70px" color="blue" />
                  </Box>
                  <Box mt="10px">
                    <Text fontWeight="bold" fontSize="30px">
                      {job?.title}
                    </Text>
                    <Text fontWeight="bold" fontSize="20px">
                    {t(`Common.INDUSTRIES.${job?.category}`)}
                    </Text>
                    <Flex gap="10px" mt="10px">
                     
                     { job?.location?.country && <><FaMapMarkerAlt size="20px" />
                      <Text>{job?.location?.country}  {job?.location?.city}</Text> </> }
                    </Flex>
                  </Box>
                </Flex>
              </Box>
              <Box p="24px" bg="white" m="50px">
                <Text>{t(`Common.JobType.${job?.type}`)}</Text>
                <Text fontSize="30px">{job?.maxEstimatedBudget} - {job?.minEstimatedBudget} {job?.currency}</Text>
              </Box>
            </Flex>
          </Box>
        </Box>
        <Box w="1200px" m="50px auto">
          <Flex>
            <Box w="800px">
              <Text fontWeight="bold">{t('Company.ViewJob.description')}</Text>
              <Text p="30px 40px 30px 0">{job?.description}</Text>
              <Text fontWeight="bold">{t('Company.ViewJob.requiredSkills')}</Text>
              <Box p="30px 40px 0 0">
              <Text>{Array.isArray(job.skills) && job.skills.length > 0 ? job.skills[0].name : '--' }</Text>

              </Box>
              <Text fontWeight="bold" p="30px 40px 30px 0">
                {t('Common.FormInputs.contactInformation.label')}
              </Text>
              <Text>{job?.contactInformation}</Text>
              <Flex
                p="30px 40px 30px 0"
                alignItems="center"
                justifyContent="space-between"
              >
                <Text>{t.rich('Company.ViewJob.share',{
                  NavigationLink:(chunks)=><NavigationLink style={{color:'blue'}} href={role === 'COMPANY' ? '/postJobs':'/register'}>{chunks}</NavigationLink>
                })}</Text>
                <Box display="flex">
                  <Box
                    ml="30px"
                    bg="gray.100"
                    p="18px"
                    borderRadius="50%"
                    cursor="pointer"
                    _hover={{ bg: "green.300", color: "white" }}
                  >
                    <FaWhatsapp color="blue" size="18px" />
                  </Box>
                  <Box
                    ml="30px"
                    bg="gray.100"
                    p="18px"
                    borderRadius="50%"
                    cursor="pointer"
                    _hover={{ bg: "blue.300", color: "white" }}
                  >
                    <FaTwitter color="blue" size="18px" />
                  </Box>
                  <Box
                    ml="30px"
                    bg="gray.100"
                    p="18px"
                    borderRadius="50%"
                    cursor="pointer"
                    _hover={{ bg: "gray.300", color: "white" }}
                  >
                    <FaTelegram color="blue" size="18px" />
                  </Box>
                  <Box
                      ml="30px"
                      bg="gray.100"
                      p="18px"
                      borderRadius="50%"
                      cursor="pointer"
                    _hover={{ bg: "blue.300", color: "white" }}
                  >
                    <FaFacebookF color="blue" size="18px" />
                  </Box>
                </Box>
              </Flex>
            </Box>
            <Box>
              {userRole === 'JOBSEEKER' ? (
                <Button w="400px" p="25px 0" mb="30px" bgColor='#2a41e8' color='white'_hover={{ bgColor: '#3b4fad' }} onClick={handleApplyClick} >
                  Muraciet et
                </Button>
              ) : (
                userRole === 'COMPANY' && (
                  <Button w="400px" p="25px 0" mb="30px" disabled>
                    Muraciet et
                  </Button>
                )
              )}

              <Text bg="gray.200" p="20px 40px" fontSize="20px">
                İş Detalları
              </Text>
              <LocationItem
                icon={<FaMapMarkerAlt color="blue" size="20px" />}
                label="Ünvan"
                content={job?.location?.city}
              />
              <LocationItem
                icon={<BsBagPlus color="blue" size="20px" />}
                label="İş Növü"
                content={t(`Common.SalaryType.${job?.salaryType}`)}
              />
              <LocationItem
                icon={<BiDollarCircle color="blue" size="25px" />}
                label="Maaş"
                content={`${job?.maxEstimatedBudget ? job.maxEstimatedBudget : ''} ${job?.currency ? job?.currency : ''}`.trim()}
              />
              <LocationItem
                icon={<GoClock color="blue" size="22px" />}
                label="Paylaşıldığı Tarix"
                content="24.01.2019"
              />
            </Box>
          </Flex>
        </Box>
      </>
    </>
  );
};

const LocationItem = ({ icon, label, content }) => (
  <Flex p="8px 10px" gap="10px" alignItems="center">
    {icon}
    <Box mt="20px" mb="10px">
      <Text fontWeight="bold">{label}</Text>
      <Text>{content}</Text>
    </Box>
  </Flex>
);

export default ViewJobs;
