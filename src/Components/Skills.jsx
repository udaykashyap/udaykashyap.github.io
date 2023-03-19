import { Box, Container, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import SkillsList from "./SkillsList";
import ToolsList from "./ToolsList";

const Skills = () => {
  return (
    <Box
      id="skills"
      padding={{ base: "1%", md: "1rem" }}
      paddingTop={{ base: "10%" }}
      border="0px solid red"
      bg={useColorModeValue("#edf2f7", "#0f1624")}
      // height={{ md: "3xl" }}
    >
      <Box marginTop={{ base: "10%", md: "5%" }} border={"0px solid green"}>
        <Text fontSize={{ base: "30px", md: "30px" }} fontWeight="bold">
          My <span style={{ color: "red" }}>Technical</span> Skills
        </Text>
        <Container maxW="7xl" id="skills" border={"0px solid red"}>
          <SkillsList />
        </Container>
      </Box>
      <Box border={"0px solid green"}>
        <Text fontSize={{ base: "30px", md: "30px" }} fontWeight="bold">
          My <span style={{ color: "red" }}>Tools</span>
        </Text>
        <Box width={{ md: "50%" }} margin={"auto"} border={"0px solid yellow"}>
          <ToolsList />
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;
