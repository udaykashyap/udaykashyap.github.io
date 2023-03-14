import GitHubCalendar from "react-github-calendar";
import React from "react";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";
export const Github = () => {
  return (
    <Box
      id="stats"
      bg={useColorModeValue("#edf2f7", "#0f1624")}
      w="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems={"center"}
      gap="30px"
      marginTop={{ base: "20", md: "180px" }}
      padding={{ base: "1px", md: "1rem" }}
      border="0px solid red"
    >
      <Box marginTop={{ base: "10%", md: "3%" }}>
        <Text fontSize={{ base: "30px", md: "30px" }} fontWeight="bold">
          My <span style={{ color: "red" }}>Github</span>
        </Text>
      </Box>

      <Box
        padding={{ base: "5px", md: "30px" }}
        display="flex"
        justifyContent={"center"}
        alignItems="center"
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        borderRadius="5px"
        width={{ base: "100%", md: "70%" }}
      >
        <GitHubCalendar
          class="react-activity-calendar"
          username="udaykashyap"
          theme={{
            level0: "#161b22",
            level1: "#39ff43c7",
            level2: "#68e700c7",
            level3: "#007e06",
            level4: "#004e04c7",
          }}
        />
      </Box>

      <Box
        display={{ md: "flex" }}
        margin="auto"
        border={"0px solid red"}
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        borderRadius="5px"
        width={{ base: "100%", md: "70%" }}
      >
        <Box padding={{ base: "0px", md: "30px" }} width="100%">
          <Text style={{ base: "10px", md: "20px" }} textAlign="center">
            My streak
          </Text>
          <img
            id="github-streak-stats"
            style={{ display: "block", margin: "auto" }}
            src="https://streak-stats.demolab.com?user=udaykashyap&_border=true&theme=dark&hide_border=true&theme=react"
            alt="#"
          />
        </Box>
        <Box padding={{ base: "0px", md: "30px" }} width="100%">
          <Text style={{ base: "10px", md: "20px" }} textAlign="center">
            My Github Stats
          </Text>
          <img
            id="github-stats-card"
            style={{ display: "block", margin: "auto" }}
            src="https://github-readme-stats.vercel.app/api?username=udaykashyap&theme=react&border_radius=4.6&show_icons=true&count_private=true&hide_border=true&show_icons=true"
            alt="#"
          />
        </Box>
      </Box>

      <Box
        padding={{ base: "0px", md: "30px" }}
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        borderRadius="5px"
        width={{ base: "100%", md: "70%" }}
      >
        <Text style={{ base: "0px", md: "20px" }} textAlign="center">
          Top Languages
        </Text>
        <img
          style={{ display: "block", margin: "auto" }}
          id="github-top-langs"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=udaykashyap&theme=react&border_radius=4.6&hide_border=true&layout=compact&show_icons=true"
          alt="#"
        />
      </Box>
    </Box>
  );
};
