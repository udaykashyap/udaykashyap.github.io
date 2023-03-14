import { GridItem, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const SkillCard = ({ icon, name }) => {
  return (
    <GridItem
      className="skills-card"
      p={5}
      rounded="2xl"
      _hover={{
        boxShadow: "0 0 5px red",
        transform: "scale(1.1)",
        transition: "all .3s ease-in-out",
      }}
    >
      <VStack>
        <Image
          className="skills-card-img"
          src={icon}
          w={{ base: "50%", md: "100%" }}
        />
        <Text className="skills-card-name" fontSize="sm">
          {name}
        </Text>
      </VStack>
    </GridItem>
  );
};

export default SkillCard;
