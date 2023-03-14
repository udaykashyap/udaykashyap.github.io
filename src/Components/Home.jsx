import { Box, Image, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <Box
      id="home"
      className="nav-link home"
      padding={{ base: "0px", md: "5rem" }}
      border="0px solid red"
      marginTop={"62px"}
      height="3xl"
      bg={useColorModeValue("#edf2f7", "#0f1624")}
      // paddingTop="10rem"
    >
      <Box
        display={{ md: "flex" }}
        margin="auto"
        border={"0px solid red"}
        justifyContent="space-around"
        padding={"20px"}
      >
        <Box
          // border={"1px solid red"}
          //   height="400px"
          width={{ base: "100%", md: "60%" }}
          display="grid"
          alignContent="center"
          height={{ base: "250px", md: "auto" }}
        >
          <Text fontSize={{ sm: "2xl", md: "3xl" }} fontWeight={"bold"}>
            Hello there, I'm
          </Text>
          <Text
            color={"red"}
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
            fontWeight={"bold"}
          >
            Uday Kumar Kashyap
          </Text>
          <Text fontSize={{ base: "2xl", sm: "4xl", md: "5xl" }}>
            <Typewriter
              options={{
                strings: [
                  "A Full Stack Developer",
                  "A Software Engineer",
                  "A Problem Solver",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </Text>
          <br />
        </Box>
        <Box>
          <Image
            // borderRadius={"50%"}

            _hover={{
              transition: "0.9s",
              transform: "scale(1.1)",
              // width: "150%",
            }}
            src="https://avatars.githubusercontent.com/u/112899880?v=4"
            alt="#"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
