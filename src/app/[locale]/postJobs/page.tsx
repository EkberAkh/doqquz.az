'use client'
import Select from 'react-select';
import { BiAddToQueue } from "react-icons/bi";
import React, { useState } from 'react'
import { Box, Input, Text, Flex, FormLabel, FormControl, Textarea, Button } from '@chakra-ui/react'
import { jobType } from './const';
import { jobcategory } from './const';
import { salaryType } from './const';
import { currencyType } from './const';
import { locationType } from './const'

const PostJobs = () => {
  const [title, setTitle] = useState("");
  const [job_type, setJob_type] = useState("");
  const [job_category, setJob_category] = useState("");
  const [salary_type, setSalary_type] = useState("");
  const [salary, setSalary] = useState("");
  const [currency, setCurrency] = useState("");
  const [location, setlocation] = useState("");
  const [notify, setNotify] = useState("");
  const [skills, setSkills] = useState("");
  const [description, setDscription] = useState("");
  const [contact, setContact] = useState("");

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     const employee = { title, job_type, job_category, salary_type, salary, currency, location, notify, skills, description, contact }

  //     fetch("http://localhost:9000/posts", {
  //       method: "POST",
  //       headers: { "content-type": "application/json" },
  //       body: JSON.stringify(employee)
  //     }).then(() => {
  //       alert("Saved succesfully !!!")
  //     })

  //       .catch((err) => {
  //         console.log(err.message)
  //       })
  //     console.log(employee);
  //   }

  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const customStyles = {
    control: base => ({
      ...base,
      height: 50,
    })
  };

  return (
    <>

      <Box w="1250px" m="auto">
        <Text fontWeight="bold" fontSize="24px">Vakansiya elanı paylaş</Text>
        <Box boxShadow="1px 1px 5px 1px gray" p="20px 30px" m="50px 0">
        <Box mb="50px">
          <Flex gap="10px" p="10px 10px">
            <BiAddToQueue color='blue' size="20px" />
            <Text fontWeight="bold" fontSize="18px"> Vakansiya Paylaşma Formu</Text>
          </Flex>
          <hr></hr>
        </Box>
        <Box>
          <Flex gap="30px" m="30px 0">
            <FormControl>
              <FormLabel>Vəzifə/Başlıq </FormLabel>
              <Input
                onChange={(e) => { setTitle(e.target.value) }}
                type='text' placeholder='Vəzifə/Başlıq' h="50px" />
            </FormControl>
            <FormControl >
              <FormLabel>İş Növü </FormLabel>
              <Select
                styles={customStyles}
                onChange={(selectedOption) => {
                  if (selectedOption) {
                    setJob_type(selectedOption.value);
                  } else {
                    setJob_type(""); // Handle the case when the option is cleared
                  }
                }}
                type='text' placeholder='İş Növü'
                isClearable={isClearable}
                isSearchable={isSearchable}
                options={jobType}
              />
            </FormControl>

            <FormControl >
              <FormLabel>İş Kateqoriyası </FormLabel>
              <Select
                styles={customStyles}
                onChange={(selectedOption) => {
                  if (selectedOption) {
                    setJob_type(selectedOption.value);
                  } else {
                    setJob_type(""); // Handle the case when the option is cleared
                  }
                }}
                type='text' placeholder='İş Kateqoriyası'
                isClearable={isClearable}
                isSearchable={isSearchable}
                options={jobcategory}
              />
            </FormControl>
          </Flex>
          <Flex gap="30px">
            <FormControl >
              <FormLabel>Maaş Növü </FormLabel>
              <Select
                styles={customStyles}
                onChange={(selectedOption) => {
                  if (selectedOption) {
                    setJob_type(selectedOption.value);
                  } else {
                    setJob_type(""); // Handle the case when the option is cleared
                  }
                }}
                type='text' placeholder='Maaş Növü'
                isClearable={isClearable}
                isSearchable={isSearchable}
                options={salaryType}
              />
            </FormControl>
            <Box>
              <Flex gap="20px">
                <FormControl>
                  <FormLabel>Maaş </FormLabel>
                  <Input
                    width="180px"
                    h="50px"
                    onChange={(e) => { setSalary(e.target.value) }}
                    type='text' placeholder='Min' />
                </FormControl>
                <FormControl>
                  <Input
                    mt="24px"
                    width="180px"
                    h="50px"
                    onChange={(e) => { setSalary(e.target.value) }}
                    type='text' placeholder='Max' />
                </FormControl>
              </Flex>
            </Box>
            <FormControl >
              <FormLabel>Valyuta</FormLabel>
              <Select
                styles={customStyles}
                onChange={(selectedOption) => {
                  if (selectedOption) {
                    setJob_type(selectedOption.value);
                  } else {
                    setJob_type(""); // Handle the case when the option is cleared
                  }
                }}
                type='text' placeholder='Valyuta'
                isClearable={isClearable}
                isSearchable={isSearchable}
                options={currencyType}
              />
            </FormControl>
          </Flex>
          <Flex gap="30px" m="30px 0">
            <FormControl >
              <FormLabel>Ünvan </FormLabel>
              <Select
                styles={customStyles}
                onChange={(selectedOption) => {
                  if (selectedOption) {
                    setJob_type(selectedOption.value);
                  } else {
                    setJob_type(""); // Handle the case when the option is cleared
                  }
                }}
                type='text' placeholder='Ünvan'
                isClearable={isClearable}
                isSearchable={isSearchable}
                options={locationType}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Bildiriş üçün ünvan </FormLabel>
              <Input
                h="50px"
                onChange={(e) => { setNotify(e.target.value) }}
                type='text' placeholder='Bildiriş üçün ünvan' />
            </FormControl>
            <FormControl>
              <FormLabel> Bacarıqlar</FormLabel>
              <Input
                h="50px"
                onChange={(e) => { setSkills(e.target.value) }}
                type='text' placeholder='Bacarıqlar' />
            </FormControl>
          </Flex>
          <FormLabel> Təsvir</FormLabel>
          <Textarea
            onChange={(e) => { setDscription(e.target.value) }}
            mb="30px" h="130px" />
          <FormLabel> Müraciyyət üçün</FormLabel>
          <Textarea
            onChange={(e) => { setContact(e.target.value) }}
            h="130px"
          />
          <Button
            mt="30px"
            bg="green"
            p="20px 35px"
          >Yarat</Button>

        </Box>
        </Box>

      </Box>

    </>
  )
}

export default PostJobs;