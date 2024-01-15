"use client";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
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
interface YourJobType {
  companyName: string;
  title: string;
  city: string;
  type: string;
  minEstimatedBudget: string;
  maxEstimatedBudget: string;
  currency: string;
  createdAt: string;
  id: number;
  location: any;
  company: any;
  skills: any

}
const ViewJobs = () => {
  const [allJobs, setAllJobs] = useState<YourJobType[]>([]);
  const [jobSeeker,setJobSeeker]=useState([])
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('https://neo-814m.onrender.com/v1/post/list');

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        setAllJobs(data.list);
      } catch (error) {
        console.error('Fetching jobs failed:', error);
      }
    };

    fetchJobs();
  }, []);

  const searchParams = useSearchParams();
  const jobId = searchParams.get("jobId");


  const storedJobString = localStorage.getItem("currentJob");
  const storedJob = JSON.parse(storedJobString as string);

  const userRole = localStorage.getItem('role')

  const token = Cookies.get("token");


  
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
          `https://neo-814m.onrender.com/v1/post/${jobId}`,
          requestOptions
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setJobSeeker(data.jobseekers)
       
        console.log('viewJobdata',data);
        
        // Directly return the role and id from this functio
      } catch (error) {
        console.error("There was an error fetching the user data:", error);
      }
    } 
     fetchUserData()
  },[])

  console.log('jobSeeker',jobSeeker)
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
                      {storedJob.title}
                    </Text>
                    <Text fontWeight="bold" fontSize="20px">
                      doktor
                    </Text>
                    <Flex gap="10px" mt="10px">
                      <FaMapMarkerAlt size="20px" />
                      <Text> {storedJob?.location?.city}</Text>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
              <Box p="24px" bg="white" m="50px">
                <Text>AYLIQ</Text>
                <Text fontSize="30px">{storedJob?.maxEstimatedBudget} - {storedJob?.minEstimatedBudget} {storedJob?.currency}</Text>
              </Box>
            </Flex>
          </Box>
        </Box>
        <Box w="1200px" m="50px auto">
          <Flex>
            <Box w="800px">
              <Text fontWeight="bold">Isin tesviri</Text>
              <Text p="30px 40px 30px 0">{storedJob?.type}</Text>
              <Text fontWeight="bold">Tələb olunan bacarıqlar</Text>
              <Box p="30px 40px 0 0">
              <Text>{storedJob?.skills && storedJob.skills.length > 0 ? storedJob.skills[0].name : ''}</Text>
              </Box>
              <Text fontWeight="bold" p="30px 40px 30px 0">
                Müraciyyət üçün{" "}
              </Text>
              <Text>234354 zeng vur</Text>
              <Flex
                p="30px 40px 30px 0"
                alignItems="center"
                justifyContent="space-between"
              >
                <Text>Maraqlıdır? Vakansiyanı paylaş!</Text>
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
                content={storedJob?.location?.city}
              />
              <LocationItem
                icon={<BsBagPlus color="blue" size="20px" />}
                label="İş Növü"
                content={storedJob?.salaryType}
              />
              <LocationItem
                icon={<BiDollarCircle color="blue" size="25px" />}
                label="Maaş"
                content={`${storedJob?.maxEstimatedBudget ? storedJob.maxEstimatedBudget : ''} ${storedJob?.currency ? storedJob.currency : ''}`.trim()}
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
