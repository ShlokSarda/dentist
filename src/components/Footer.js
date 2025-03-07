import {
  Box,
  Container,
  SimpleGrid,
  Text,
  Link,
  Stack,
  VStack,
  IconButton,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="#28211d" color="#F5C7A9" py={10}>
      <Container maxW="6xl">
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
          {/* Office Section */}
          <VStack align="start">
            <Text fontSize="lg" fontWeight="bold">
              Office
            </Text>
            <Link
              href="https://www.google.com/maps/place/Qualiteeth+Dental+Care/@26.9018108,75.7366896,17z/data=!3m1!4b1!4m6!3m5!1s0x396db52aa8fff4cf:0xfd055fea55b4585d!8m2!3d26.901806!4d75.7392645!16s%2Fg%2F11l5vzlvgg?entry=ttu&g_ep=EgoyMDI1MDIxMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              _hover={{ color: "#c49d84" }}
            >
              <Text>Akruti Apartments, Mahant Swami Marg</Text>
              <Text>Vaishali Nagar, Jaipur, Rajasthan</Text>
            </Link>

            <Text fontWeight="bold">
              <Link href="tel:+919256491206">(+91) 92564 91206</Link>
            </Text>
          </VStack>

          {/* Practice Section */}
          <VStack align="start">
            <Text fontSize="lg" fontWeight="bold">
              Practice
            </Text>
            <Link href="#home" _hover={{ color: "#c49d84" }}>
              Home
            </Link>
            <Link href="#about" _hover={{ color: "#c49d84" }}>
              About
            </Link>
            <Link href="#service" _hover={{ color: "#c49d84" }}>
              Services
            </Link>
          </VStack>

          {/* Services Section */}
          <VStack align="start">
            <Text fontSize="lg" fontWeight="bold">
              Services
            </Text>
            <Link _hover={{ color: "#c49d84" }}>General Dentistry</Link>
            <Link _hover={{ color: "#c49d84" }}>Emergency Dentistry</Link>
            <Text fontWeight="bold">Surgical Care</Text>
            <Link _hover={{ color: "#c49d84" }}>Root Canals</Link>
            <Link _hover={{ color: "#c49d84" }}>Tooth Extractions</Link>
            <Text fontWeight="bold">Orthodontic Treatment</Text>
            <Link _hover={{ color: "#c49d84" }}>Invisalign</Link>
          </VStack>

          {/* Review & Social Section */}
          <VStack align="start">
            <Text fontSize="lg" fontWeight="bold">
              Review Us
            </Text>
            <Link
              _hover={{ color: "#c49d84" }}
              href="https://search.google.com/local/writereview?placeid=ChIJz_T_qCq1bTkRXVi0VepfBf0"
            >
              Google
            </Link>
            <Text fontSize="lg" fontWeight="bold" mt={4}>
              Social
            </Text>
            <Stack direction="row" spacing={4}>
              <IconButton
                bg="#F5C7A9"
                borderRadius="full"
                as="a"
                href="#"
                aria-label="Facebook"
                icon={<FaFacebook />}
              />
              <IconButton
                bg="#F5C7A9"
                borderRadius="full"
                as="a"
                href="https://www.instagram.com/qualiteeth_dental/"
                aria-label="Instagram"
                icon={<FaInstagram />}
              />
              <IconButton
                bg="#F5C7A9"
                borderRadius="full"
                as="a"
                href="#"
                aria-label="LinkedIn"
                icon={<FaLinkedin />}
              />
            </Stack>
          </VStack>
        </SimpleGrid>

        {/* Bottom Footer Section */}
        <Box textAlign="center" mt={10}>
          <Text fontSize="sm">
            © Qualiteeth Dental 2025 |{" "}
            <Link fontWeight="bold">Privacy Policy</Link> |{" "}
            <Link fontWeight="bold">Accessibility Statement</Link>
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
