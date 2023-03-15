import { Box, Text } from "@chakra-ui/react";
import React from "react";
import ProjectCards from "./ProjectCard";

const Projects = () => {
  return (
    <Box
      padding={{ base: "1%", md: "1rem" }}
      paddingTop={{ base: "10%" }}
      marginTop={{ base: "20", md: "15px" }}
      height={{ md: "3xl" }}
      border={"0px solid red"}
      id="projects"
    >
      <Box marginTop={{ base: "10%", md: "3%" }}>
        <Text fontSize={{ base: "30px", md: "30px" }} fontWeight="bold">
          My<span style={{ color: "red" }}> Projects</span> Section{" "}
        </Text>
      </Box>
      <Box
        display={{ md: "grid" }}
        gridTemplateColumns={"repeat(2,1fr)"}
        gridTemplateRows={"repeat(2,1fr)"}
      >
        {ProjectData.map((el) => (
          <ProjectCards heading={el.heading} image={el.image} desc={el.desc} />
        ))}
      </Box>
    </Box>
  );
};

export default Projects;

const ProjectData = [
  {
    image:
      "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    heading: " Lindsey James",
    desc: "Actress, musician, songwriter and artist. PM for work inquires or me in your posts",
  },
  {
    image:
      "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    heading: " Lindsey ",
    desc: "Actress, musician, songwriter and artist. PM for work inquires or me in your posts",
  },
  {
    image:
      "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    heading: "  James",
    desc: "Actress, musician, songwriter and artist. PM for work inquires or me in your posts",
  },
  {
    image:
      "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    heading: " Lindsey James",
    desc: "Actress, musician, songwriter and artist. PM for work inquires or me in your posts",
  },
];
