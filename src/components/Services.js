import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import emergency from "../assets/emergency-services.jpeg";
import orthodontic from "../assets/orthodontic-solutions.jpeg";
import rootcanal from "../assets/root-canal.jpeg";
import cleaning from "../assets/teeth-cleaning.jpeg";
import implant from "../assets/dental-implants.jpeg";
import whitening from "../assets/teeth-whitening.jpeg";

const services = [
  {
    title: "Emergency Services",
    description:
      "In pain? Qualiteeth offers immediate relief through same-day appointments and compassionate emergency care. Let's get you feeling better fast.",
    image: emergency, // Replace with actual image URL
  },
  {
    title: "Orthodontic Solutions",
    description:
      "Modern and personalized orthodontic treatments for all ages. Interested in learning more? We invite you to book a complimentary orthodontic consultation.",
    image: orthodontic, // Replace with actual image URL
  },
  {
    title: "Root Canal Treatment",
    description:
      "If you're experiencing severe tooth pain or infection, our gentle root canal treatment can save your tooth, relieve discomfort, and restore your smile.",
    image: rootcanal,
  },
  {
    title: "Teeth Cleaning and Polishing",
    description:
      "Keep your smile healthy and bright with our professional teeth cleaning and polishing—removing plaque, stains, and tartar for a fresh, confident look!",
    image: cleaning,
  },
  {
    title: "Dental Implants",
    description:
      "Restore your smile with natural-looking dental implants—permanent, comfortable, and designed to function just like real teeth!",
    image: implant,
  },
  {
    title: "Teeth Whitening",
    description:
      "Brighten your smile with our professional teeth whitening treatment—safe, effective, and designed to give you a radiant, confident look!",
    image: whitening,
  },
];

const DentalServices = () => {
  return (
    <Box bg="#fceee5" py={20} textAlign="center" id="service">
      <Text fontSize="5xl" mb={10} fontWeight="light">
        All-in-one dental solutions, right here in one place
      </Text>
      <Flex wrap="wrap" justify="center" gap={8} px={5}>
        {services.map((service, index) => (
          <VStack
            key={index}
            bg="#fceee5"
            // borderRadius="md"
            // boxShadow="md"
            overflow="hidden"
            maxW="sm"
            textAlign="left"
            align="stretch"
            transition="all 0.3s ease-in-out"
            _hover={{
              transform: "translateY(-20px)",
              borderRadius: "md",
              boxShadow: "md",
              bg: "white",
            }}
          >
            <Image
              src={service.image}
              alt={service.title}
              objectFit="cover"
              height="200px"
              p="10px"
            />
            <Box p={4}>
              <Heading fontSize="lg" mb={2}>
                {service.title}
              </Heading>
              <Text fontSize="sm" color="gray.600">
                {service.description}
              </Text>
            </Box>
          </VStack>
        ))}
      </Flex>
    </Box>
  );
};

export default DentalServices;
