import {
  Box,
  Button,
  Heading,
  Text,
  VStack,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useState } from "react";
const BookingSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box bg="#f4c7a4" py={16} textAlign="center">
      <VStack spacing={4} maxW="xl" mx="auto">
        <Box as="span" display="block" fontSize="40px">
          <Image
            src="/logo.svg"
            alt="Qualiteeth Logo"
            height="50px"
            filter="grayscale(1) brightness(0)"
          />
        </Box>
        <Heading
          fontSize={{ base: "3xl", md: "5xl" }}
          fontWeight="light"
          mb={4}
        >
          Book today for quality care
        </Heading>
        <Text fontSize="xl" color="black" fontWeight="light" mb={4}>
          Qualiteeth Dental is committed to exceptional care with cutting-edge
          technology and an experienced team that prioritizes your well-being.
        </Text>
        <Button
          bg="black"
          color="#f4c7a4"
          _hover={{ bg: "#f4c7a4", color: "black", border: "1px solid black" }}
          onClick={() => setIsOpen(true)}
        >
          BOOK ONLINE
        </Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="xl">
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody>
              <iframe
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0HH7UcCwpUcb-NlDA38ZGn_NmQqHUJ9llAjBKixKAX-8BT0MCXFwBnZaMcnlb3-6fw9BMPDcs2?gv=true"
                style={{ border: "0", width: "100%", height: "600px" }}
                frameBorder="0"
              ></iframe>
            </ModalBody>
          </ModalContent>
        </Modal>
      </VStack>
    </Box>
  );
};

export default BookingSection;
