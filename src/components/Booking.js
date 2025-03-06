import { Box, Button, Heading, Text, VStack, Image } from "@chakra-ui/react";

const BookingSection = () => {
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
        >
          BOOK ONLINE
        </Button>
      </VStack>
    </Box>
  );
};

export default BookingSection;
