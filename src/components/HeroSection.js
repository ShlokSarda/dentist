import { Box, Button, Text, VStack, Image, Link } from "@chakra-ui/react";
import video from "../assets/Qualiteeth.mp4";
import team from "../assets/team.jpeg";

const HeroSection = () => {
  return (
    <>
      <Box
        position="relative"
        height="100vh"
        overflow="hidden"
        display="flex"
        alignItems="center"
        border="1px solid black"
      >
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <VStack
          spacing={4}
          align="flex-start"
          maxW="600px"
          p={8}
          marginLeft="100px"
        >
          <Text
            fontSize="2xl"
            fontWeight="light"
            color={"white"}
            fontFamily={"system-ui"}
          >
            Premier Dentist
          </Text>
          <Text
            fontSize="5xl"
            fontWeight="light"
            lineHeight="1.2"
            color={"white"}
            fontFamily={"system-ui"}
          >
            Reimagine your dental care experience
          </Text>
          <Button
            bg="#FDC6A5"
            color="black"
            size="lg"
            _hover={{ bg: "#FCA982" }}
            marginTop="10px"
          >
            BOOK ONLINE
          </Button>
          <Text fontSize="xl" color="white" fontWeight="light-300">
            Or Call <Link href="tel:+919256491206">(+91) 92564 91206</Link>
          </Text>
        </VStack>
      </Box>
      <Box
        bg="#f4c7a4" // Background color
        minH="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        p={8}
      >
        <Box
          bg="#f4c7a4"
          border="1px solid rgba(0, 0, 0, 0.2)"
          borderRadius="10px"
          p={14}
          maxW="1000px"
          w="90%"
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          alignItems="center"
          gap={8}
        >
          {/* Left Content Section */}
          <VStack align="start" flex="1" spacing={6}>
            <Text
              fontSize="5xl"
              fontWeight="medium-100"
              color="black"
              lineHeight="1.2"
            >
              Welcome to Qualiteeth!
            </Text>
            <Text
              fontSize="xl"
              color="black"
              fontWeight="light"
              lineHeight="1.2"
            >
              Experience top-tier dental care in a modern and comfortable
              setting. At Qualiteeth, our skilled Oakville dentist combines
              expertise with cutting-edge technology to deliver personalized
              treatments that keep your smile healthy and radiant.
            </Text>
            <Text
              fontSize="xl"
              color="black"
              fontWeight="light"
              lineHeight="1.2"
            >
              Inspired by precision and innovation, our clinic is designed to
              provide efficient, gentle, and advanced dental care tailored to
              your needs. From routine checkups to cosmetic and restorative
              treatments, we are committed to excellence in every aspect of your
              dental health.
            </Text>
            <Text
              fontSize="xl"
              color="black"
              fontWeight="light"
              lineHeight="1.2"
            >
              Book your appointment today and discover the Qualiteeth
              difference! 😁✨
            </Text>
          </VStack>

          {/* Right Image Section */}
          <Box flex="1">
            <Image
              src={team} // Replace with actual image URL
              alt="Qualiteeth Team"
              width="100%"
              height="100%"
              objectFit="cover"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;
