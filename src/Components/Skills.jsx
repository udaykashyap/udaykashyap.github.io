import { Box, Container, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import SkillsList from "./SkillsList";

const Skills = () => {
  return (
    <Box
      id="skills"
      className="skills section"
      padding={{ base: "1%", md: "1rem" }}
      paddingTop={{ base: "10%" }}
      border="0px solid red"
      bg={useColorModeValue("#edf2f7", "#0f1624")}
      height={{ md: "3xl" }}
    >
      <Box marginTop={{ base: "10%", md: "5%" }}>
        <Text fontSize={{ base: "30px", md: "30px" }} fontWeight="bold">
          My <span style={{ color: "red" }}>Technical</span> Skills
        </Text>
        <Container minH="100vh" maxW="7xl" id="skills">
          <SkillsList />
        </Container>
      </Box>
    </Box>
  );
};

export default Skills;
