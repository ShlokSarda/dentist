import { Box, Flex, Icon, Text, Heading, Link } from "@chakra-ui/react";
import { FaTags, FaHandHoldingMedical } from "react-icons/fa";

const InfoSection = () => {
  return (
    <Flex
      maxW="6xl"
      mx="auto"
      py={{ base: "0", md: 20 }}
      gap={0}
      flexWrap="wrap"
      justify="center"
    >
      {/* Transparent Pricing */}
      <Box
        flex="1"
        minW={{ base: "100%", md: "50%" }}
        p={14}
        border="1px solid"
        borderColor="#F5C7A9"
        borderRadius="sm"
      >
        <Icon as={FaTags} color="#F5C7A9" boxSize={10} />
        <Heading as="h3" size="xl" mt={4} fontWeight="light">
          Transparent Pricing
        </Heading>
        <Text fontWeight="light-200" mt={8} fontSize="xl">
          No Surprises
        </Text>
        <Text
          mt={4}
          color="black"
          fontWeight="light"
          fontSize="lg"
          lineHeight="1.5"
        >
          Nothing is more important to us than delivering the highest quality of
          care — and that includes full transparency from start to finish. We
          keep you informed about the cost of any treatment so there are no
          surprises.
        </Text>
      </Box>

      {/* Insurance */}
      <Box
        flex="1"
        minW={{ base: "100%", md: "50%" }}
        p={14}
        bg="#F5C7A9"
        borderRadius="sm"
      >
        <Icon as={FaHandHoldingMedical} color="white" boxSize={10} />
        <Heading as="h3" size="xl" mt={4} fontWeight="light">
          Insurance
        </Heading>
        <Text
          mt={4}
          color="black"
          fontWeight="light"
          fontSize="lg"
          lineHeight="1.5"
        >
          Qualiteeth Dental provides detailed bills to patients for insurance
          claims. This allows you to submit the claim to your insurance provider
          directly.
        </Text>
        <Text
          mt={4}
          color="black"
          fontWeight="light"
          fontSize="lg"
          lineHeight="1.5"
        >
          Give us a call at{" "}
          <Link href="tel:+919256491206" color="black" fontWeight="bold">
            (+91) 92564 91206
          </Link>{" "}
          with any questions. We're here to help.
        </Text>
      </Box>
    </Flex>
  );
};

export default InfoSection;
