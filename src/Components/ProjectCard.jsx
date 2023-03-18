import React from "react";
import { GoMarkGithub } from "react-icons/go";
import { AiFillEye } from "react-icons/ai";

import {
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function ProjectCards({
  heading,
  image,
  desc,
  github,
  netlify,
  techs,
}) {
  return (
    <Center py={6} className="project-card">
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: "100%", md: "540px" }}
        // height={{ sm: "476px", md: "15rem" }}
        // direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        padding={{ base: 0, md: 4, lg: 4 }}
        overflow={"hidden"}
        transition="5s"
      >
        <Flex flex={1} bg="blue.200" border="0px solid red">
          <Image objectFit="cover" boxSize="100%" src={image} />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}
          _hover={{ backgroundColor: "#1877f2", transition: "5s" }}
        >
          <Heading
            fontSize={"2xl"}
            fontFamily={"body"}
            className="project-title"
          >
            {heading}
          </Heading>

          <Text
            className="project-description"
            textAlign={"center"}
            color={useColorModeValue("gray.700", "gray.400")}
            px={3}
          >
            {desc}
          </Text>

          <Text
            className="project-tech-stack"
            textAlign={"center"}
            color={useColorModeValue("gray.700", "gray.400")}
            px={3}
            fontWeight={700}
          >
            {techs}
          </Text>
        </Stack>

        <Stack
          width={"100%"}
          mt={"2rem"}
          direction={"row"}
          padding={2}
          justifyContent={"space-evenly"}
          alignItems={"center"}
        >
          <Button
            className="project-github-link"
            onClick={() => {
              alert("Click 'Ok' to view git repo");
            }}
          >
            <a target={"_blank"} rel="noreferrer" href={github}>
              <GoMarkGithub
                style={{
                  width: "30px",
                  height: "40px",
                  borderBottom: "1px solid red",
                }}
              />
            </a>
          </Button>
          <Button className="project-deployed-link">
            <a target={"_blank"} rel="noreferrer" href={netlify}>
              <AiFillEye
                style={{
                  width: "30px",
                  height: "40px",
                  borderBottom: "1px solid red",
                }}
              />
            </a>
          </Button>
        </Stack>
      </Stack>
    </Center>
  );
}
