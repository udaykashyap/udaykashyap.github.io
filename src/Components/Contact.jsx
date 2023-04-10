import React from "react";
import {
  Box,
  Stack,
  Input,
  Text,
  Flex,
  Textarea,
  Button,
  Image,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";

import ContactImg from "../assets/Image/contact.f495edec.png";
import PhoneModal from "./PhoneModal";


// Contact section start from here

const Contact = () => {
  return (
    // display={["inline", "inline", "inline"]}
    <Box id="contact">
      <Box
        padding={{ base: "1px", md: "1rem" }}
        border="0px solid red"
        color={useColorModeValue("gray.600", "gray.200")}
      >
        <Box marginTop={{ base: "10%", md: "3%" }}>
          <Text fontSize={{ base: "30px", md: "30px" }} fontWeight="bold">
            Let's <span style={{ color: "red" }}>Connect</span> With{" "}
            <span style={{ color: "red" }}>Me</span>
          </Text>
        </Box>
        <Box
          display={["inline", "inline", "flex"]}
          gap={"70px"}
          w={["100%", "97%", "90%"]}
          fontSize={30}
          m={"auto"}
          mt={"5%"}
          border={"0px solid red"}                                    
          padding={{ base: "5px", md: "20px" }}
        >
          <Box width={{ base: "100%", md: "50%" }}>
            <Image src={ContactImg} alt="#" />
          </Box>
          <Box
            width={{ base: "100%", md: "50%" }}
            marginTop={{ base: "20px", md: "0px" }}
          >
            <form
              action="https://getform.io/f/e931265b-bdf4-4670-b3cc-d22d7f7fba64"
              method="POST"
            >
              <Stack>
                <Flex
                  justifyContent={"space-around"}
                  gap={{ base: "2", md: "2" }}
                  color={useColorModeValue("white", "gray.200")}
                >
                  <Button id="contact-linkedin" bg={"#0a66c2"}>
                    <a href="https://www.linkedin.com/in/udaykashyap/">
                      LinkedIn
                    </a>
                  </Button>
                  <Button id="contact-email" bg={"#ad201d"} padding="0">
                    <TostGmail />
                  </Button>
                  <Button id="contact-github" bg={"#010409"}>
                    <a href="https://github.com/udaykashyap">Github</a>
                  </Button>
                  <Button id="contact-phone" bg={"#010409"} padding="0">
                    <PhoneModal />
                  </Button>
                </Flex>
                <Flex>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    size={["md", "lg", "lg"]}
                    color={"white"}
                  />
                  <Input
                    type="number"
                    name="number"
                    placeholder="Mobile Number"
                    size={["md", "lg", "lg"]}
                    color={"white"}
                    ml={"20px"}
                  />
                </Flex>
              </Stack>

              <Stack mt={"20px"}>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  size={["md", "lg", "lg"]}
                  color={"white"}
                  m={"auto"}
                  mt={"8%"}
                />
              </Stack>

              <Stack mt={"20px"}>
                <Textarea
                  type="text"
                  name="message"
                  placeholder="Message"
                  size={["md", "lg", "lg"]}
                  // color={"white"}
                  m={"auto"}
                  mt={"8%"}
                />
              </Stack>
              <Stack mt={"20px"}>
                <Button
                  type="submit"
                  display={{ md: "inline-flex" }}
                  fontSize={"sm"}
                  fontWeight={600}
                  color={"white"}
                  bg={"Red"}
                  href={"#"}
                  _hover={{
                    bg: "transparent",
                    color: "red",
                    border: "1px solid red",
                  }}
                  width="100%"
                >
                  Send Message
                </Button>
                {/* <Flex
                  justifyContent={"space-around"}
                  color={useColorModeValue("white", "gray.200")}
                >
                  <Button bg={"#0a66c2"}>LinkedIn</Button>
                  <Button bg={"#ad201d"}>Gmail</Button>
                  <Button bg={"#010409"}>Github</Button>
                </Flex> */}
              </Stack>
            </form>
          </Box>
        </Box>
      </Box>
      <Text
        fontSize={{ base: "11px", md: "16px" }}
        marginTop={{ base: "20px" }}
      >
        Desgined & Build By Uday Kumar Kashyap, 2023
      </Text>
    </Box>
  );
};

export default Contact;

function TostGmail() {
  const toast = useToast();
  return (
    <Button
      onClick={() =>
        toast({
          title: "My Gmail.",
          description: "udaykashyap.hjp@gmail.com",
          status: "success",
          duration: 10000,
          isClosable: true,
        })
      }
    >
      Gmail
    </Button>
  );
}
