import {
  Box,
  Flex,
  Text,
  Link,
  Image,
  VStack,
  Icon,
  HStack,
} from "@chakra-ui/react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import visit1 from "../assets/visit-1.jpg";
import visit2 from "../assets/visit-2.jpg";
import visit3 from "../assets/visit-3.jpg";

const Visit = () => {
  const hexagonStyle = {
    clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",

    objectFit: "cover",
  };
  return (
    <Box bg="#FFF5F0" p={10} py={20} id="about">
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        gap={10}
      >
        {/* Hexagonal Images */}
        <Box display="flex">
          <Flex direction="row" align="center">
            <Flex direction="column" align="center" gap={{ md: 4, base: 1 }}>
              {/* First row - Single Image */}
              <Flex justify="center">
                <Image
                  src={visit1}
                  alt="Interior 1"
                  sx={hexagonStyle}
                  width={{ md: "280px", base: "100px" }}
                  height={{ md: "230px", base: "100px" }}
                />
                {/* <Image src={visit3} alt="Interior 3" sx={hexagonStyle} /> */}
              </Flex>

              {/* Second row - Two Images */}
              <Flex justify="center" gap={{ md: 4, base: 1 }} mt={0}>
                <Image
                  src={visit2}
                  alt="Interior 2"
                  sx={hexagonStyle}
                  width={{ md: "280px", base: "100px" }}
                  height={{ md: "230px", base: "100px" }}
                />
              </Flex>
            </Flex>
            <Flex justify="center" mt={0} ml={{ md: -12, base: -5 }}>
              <Image
                src={visit3}
                alt="Interior 3"
                sx={hexagonStyle}
                width={{ md: "280px", base: "100px" }}
                height={{ md: "230px", base: "100px" }}
              />
            </Flex>
          </Flex>
        </Box>

        {/* Contact Information */}
        <VStack
          align="start"
          spacing={4}
          w={{ base: "100%", md: "50%" }}
          px={5}
        >
          <Text fontSize={{ base: "4xl", md: "5xl" }} fontWeight="light">
            Visit Qualiteeth
          </Text>
          <Text fontSize="lg" fontWeight="light">
            Conveniently book online or give us a call at{" "}
            <Link href="tel:+919256491206" fontWeight="bold">
              (+91) 92564 91206
            </Link>
            . Same-day appointments and ample free parking are available. We
            look forward to welcoming you!
          </Text>

          <HStack align="start" spacing={2}>
            <Icon as={FaMapMarkerAlt} color="gray.600" boxSize={5} mt={1} />
            <Text fontSize="lg" fontWeight="light">
              Mahant Swami Marg, near Akshar Dham Chauraha, Akruti Apartments,
              <br />
              Vaishali Nagar, Jaipur, Rajasthan
            </Text>
          </HStack>
          <Link
            ml="30px"
            fontWeight="bold"
            color="black"
            href="https://www.google.com/maps/place/Qualiteeth+Dental+Care/@26.9018108,75.7366896,17z/data=!3m1!4b1!4m6!3m5!1s0x396db52aa8fff4cf:0xfd055fea55b4585d!8m2!3d26.901806!4d75.7392645!16s%2Fg%2F11l5vzlvgg?entry=ttu&g_ep=EgoyMDI1MDIxMS4wIKXMDSoASAFQAw%3D%3D"
          >
            Get Directions
          </Link>
          <HStack>
            <Icon as={FaPhoneAlt} color="gray.600" />
            <Link href="tel:+919256491206" fontSize="lg" fontWeight="light">
              (+91) 92564 91206
            </Link>
          </HStack>

          <Text fontSize="lg" fontWeight="light">
            Visit Us Anytime Between 10 AM – 8 PM
          </Text>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Visit;
