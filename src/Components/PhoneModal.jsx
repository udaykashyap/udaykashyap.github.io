import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
} from "@chakra-ui/react";
import React from "react";

function PhoneModal() {
  const OverlayOne = () => (
    <ModalOverlay
      //   bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  //   const OverlayTwo = () => (
  //     <ModalOverlay
  //       bg="none"
  //       backdropFilter="auto"
  //       backdropInvert="80%"
  //       backdropBlur="2px"
  //     />
  //   );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  return (
    <>
      <Button
        bg={"#010409"}
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        Phone
      </Button>
      {/* <Button
        ml="4"
        onClick={() => {
          setOverlay(<OverlayTwo />);
          onOpen();
        }}
      >
        Use Overlay two
      </Button> */}
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>
            <Text fontSize={{ base: "30px", md: "30px" }} fontWeight="bold">
              My<span style={{ color: "red" }}> Contact</span> Number{" "}
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>+917903646960</Text>
            <br />
            <br />

            <Text>
              Thanks for accepting my connection request. I'm glad to be a part
              of your network. !
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default PhoneModal;
