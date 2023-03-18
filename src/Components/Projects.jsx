import { Box, Text } from "@chakra-ui/react";
import React from "react";
import ProjectCards from "./ProjectCard";

const Projects = () => {
  return (
    <Box
      padding={{ base: "1%", md: "1rem" }}
      paddingTop={{ base: "10%" }}
      marginTop={{ base: "20", md: "15px" }}
      // height={{ md: "3xl" }}
      border={"0px solid red"}
      id="projects"
      className="nav-link projects"
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
          <ProjectCards
            heading={el.heading}
            image={el.image}
            desc={el.desc}
            github={el.github}
            netlify={el.netlify}
            techs={el.techs}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Projects;

const ProjectData = [
  {
    image:
      "https://github.com/udaykashyap/udaykashyap.github.io/blob/master/src/assets/Image/Sugar%20Cosmatic.png?raw=true",
    heading: "SUGAR Cosmetics",
    desc: "This is a E-commerce website which helps you to buy most trending cosmetics porducts.",
    techs: "HTML | CSS | JavaScrip",
    github: "https://github.com/udaykashyap/Blush-Beauty-app",
    netlify: "https://blushbeauty.netlify.app/",
  },
  {
    image:
      "https://github.com/udaykashyap/udaykashyap.github.io/blob/master/src/assets/Image/Famous%20Footware.png?raw=true",
    heading: "Famous Footwear",
    desc: "This is a E-commerce website which helps you to buy most trending cosmetics porducts.",
    techs: "REACT | HTML | CSS | JavaScrip",
    github:
      "https://github.com/udaykashyap/punchy-crayon-507/tree/main/comfort-footwear",
    netlify: "https://comfortfootwear.netlify.app/",
  },
  {
    image:
      "https://github.com/udaykashyap/udaykashyap.github.io/blob/master/src/assets/Image/Hotstar.png?raw=true",
    heading: "Hotstar",
    desc: "This is Hotstar Clone which helps you to search your desired movie",
    techs: "HTML | CSS | JavaScrip",
    github: "https://github.com/udaykashyap/hotstarClone",
    netlify: "https://clonehotstar.netlify.app",
  },
  {
    image:
      "https://github.com/udaykashyap/udaykashyap.github.io/blob/master/src/assets/Image/Bewakoof.png?raw=true",
    heading: "Bewakoof.com",
    desc: "This is E-commerce website where you can buy clothes online",
    techs: "HTML | CSS | JavaScrip",
    github: "https://github.com/udaykashyap/fond-weather-8279",
    netlify: "https://bewakoofclone.netlify.app/",
  },
];
