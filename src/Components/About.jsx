import { Box, Button, Flex, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import { FiDownload } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";

const About = () => {
  return (
    <Box
      id="about"
      className="about section"
      // marginTop={{ base: "20", md: "180px" }}
      padding={{ base: "10px", md: "5rem" }}
      border="0px solid green"
    >
      <Box>
        <Text fontSize={{ base: "30px", md: "30px" }} fontWeight="bold">
          All <span style={{ color: "red" }}>About</span> Me
        </Text>
      </Box>
      <Box
        display={{ md: "flex" }}
        padding={{ md: "30px" }}
        alignItems="center"
        border="0px solid green"
        marginTop={{ base: "20" }}
      >
        <Box width={{ base: "100%", md: "50%" }} border="0px solid red">
          <Image
            margin={"auto"}
            width={"60%"}
            height={{ base: "200px", md: "auto" }}
            borderRadius={{ base: "50%", md: "10%" }}
            src="https://camo.githubusercontent.com/8bf6f6d78abc81fcf9c49f10649423e73ea44bc248e83aaae8759d401c829a84/68747470733a2f2f70687973696373677572756b756c2e66696c65732e776f726470726573732e636f6d2f323031392f30322f6368617261637465722d312e676966"
            alt="#"
          />
        </Box>
        <Box
          width={{ base: "90%", md: "40%" }}
          border="0px solid red"
          padding={{ base: "10px" }}
          margin="0 auto"
          marginTop={{ base: "20" }}
          marginBottom={{ base: "20" }}
        >
          <Text
            id="user-detail-intro"
            fontSize={"24px"}
            fontFamily="inherit"
            fontWeight="300"
            textAlign={{ base: "center", md: "left" }}
          >
            Hello! My name is Uday Kumar Kashyap & I enjoy creating things that
            lives on internet. I'm a passionate Developer with strong
            administrative & communication skills, good attention to detail &
            the ability to write efficent code. HTML,CSS,JavaScript,REACT
          </Text>
        </Box>
      </Box>

      <Flex
        justify={"center"}
        alignItems="center"
        gap={10}
        direction={["column", "row", "row"]}
      ></Flex>
      <Box
        display={{ md: "flex" }}
        justifyContent={"space-evenly"}
        alignItems="center"
        gap={{ base: "20px" }}
        border={"0px solid red"}
      >
        <Flex>
          <Button
            // id="resume-link-2"
            id="resume-button-2"
            bg={"#d50032"}
            // gap={4}
            px={10}
            width={{ base: "180px" }}
            margin={"auto"}
          >
            <Link
              href="https://drive.google.com/uc?export=download&id=1OQIAxVifyP4S7JyfuknbB5UpDIB-t3yq"
              target="_blank"
              rel="noreferrer"
              download="Uday_Resume"
              display="flex"
              justifyContent={"space-between"}
              gap={"10px"}
            >
              <FiDownload />
              <span>Resume</span>
            </Link>
          </Button>
        </Flex>

        <Flex justifyItems={"center"} alignItems={"center"} id="contact-github">
          <Button
            // bg={"transparent"}
            gap={4}
            px={10}
            width={{ base: "180px" }}
            _hover={{
              bg: "transparent",
              color: "red",
            }}
            margin={"auto"}
            marginTop={{ base: "20px", md: "0px" }}
          >
            <BsGithub />{" "}
            <span>
              {" "}
              <a href="https://github.com/udaykashyap">Github</a>
            </span>
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default About;
