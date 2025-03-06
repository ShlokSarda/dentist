import {
  Box,
  Button,
  Text,
  VStack,
  HStack,
  Image,
  Link,
  useBreakpointValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import video from "../assets/Qualiteeth.mp4";
import team from "../assets/team.jpeg";
import world_class from "../assets/world-class-dental-care.png";
import { Check } from "lucide-react";

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [rotation, setRotation] = useState(0);
  useEffect(() => {
    // Delay video playback by 3 seconds
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      setRotation(window.scrollY / 1); // Adjust rotation speed if needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const marginLeft = useBreakpointValue({
    base: "10px",
    md: "50px",
    lg: "100px",
  });
  const textAlign = useBreakpointValue({ base: "left", md: "left" });
  const flexDirection = useBreakpointValue({ base: "column", md: "row" });
  return (
    <>
      <Box
        id="home"
        position="relative"
        height={{ base: "80vh", md: "100vh" }}
        overflow="hidden"
        display="flex"
        alignItems="center"
        border="1px solid black"
        backgroundColor={!showVideo ? "#28211d" : "transparent"}
        px={{ base: 4, md: 8 }}
      >
        {/* Background Video */}
        {showVideo && (
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
        )}
        <VStack
          spacing={{ base: 4, md: 4 }}
          align={{ base: "flex-start", md: "flex-start" }}
          maxW={{ base: "90%", md: "600px" }}
          marginLeft={marginLeft}
          textAlign={textAlign}
        >
          <Text
            fontSize={{ base: "2xl", md: "2xl" }}
            fontWeight="light"
            color="white"
          >
            Premier Dentist
          </Text>
          <Text
            fontSize={{ base: "4xl", md: "5xl" }}
            fontWeight="light"
            lineHeight="1.2"
            color="white"
          >
            Reimagine your dental care experience
          </Text>
          <Button
            bg="#FDC6A5"
            color="black"
            size={{ base: "lg", md: "lg" }}
            _hover={{ bg: "#FCA982" }}
            marginTop="10px"
            onClick={() => setIsOpen(true)}
          >
            Book Now
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
          <Text fontSize={{ base: "xl", md: "xl" }} color="white">
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
        px={{ base: 0, md: 8 }}
        py={{ base: 8, md: 16 }}
      >
        <Box
          bg="#f4c7a4"
          border="1px solid rgba(0, 0, 0, 0.2)"
          borderRadius="10px"
          p={{ base: 6, md: 14 }}
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
              fontSize={{ base: "4xl", md: "5xl" }}
              fontWeight="medium-100"
              color="black"
              lineHeight="1.2"
            >
              Welcome to Qualiteeth!
            </Text>
            <Text
              fontSize={{ base: "lg", md: "lg" }}
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
              fontSize={{ base: "lg", md: "lg" }}
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
              fontSize={{ base: "lg", md: "lg" }}
              color="black"
              fontWeight="light"
              lineHeight="1.2"
            >
              Book your appointment today and discover the Qualiteeth
              difference! 😁✨
            </Text>
            <VStack align="start" spacing={2}>
              <HStack align="start">
                <Check size={20} color="black" style={{ marginTop: "3px" }} />
                <Text
                  fontSize={{ base: "lg", md: "lg" }}
                  color="black"
                  fontWeight="light"
                >
                  Serving the entire family - all ages welcome
                </Text>
              </HStack>
              <HStack align="start">
                <Check size={20} color="black" style={{ marginTop: "3px" }} />
                <Text
                  fontSize={{ base: "lg", md: "lg" }}
                  color="black"
                  fontWeight="light"
                >
                  Same-day emergency appointments are available
                </Text>
              </HStack>
              <HStack align="start">
                <Check size={20} color="black" style={{ marginTop: "3px" }} />
                <Text
                  fontSize={{ base: "lg", md: "lg" }}
                  color="black"
                  fontWeight="light"
                >
                  Transparent pricing (no surprise bills!)
                </Text>
              </HStack>
            </VStack>
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
            <Image
              src={world_class} // Replace with the actual image
              alt="Rotating Logo"
              top={{ base: "-40px", md: "-50px" }}
              left={{ base: "200px", md: "250px" }}
              position="relative"
              width={{ md: "150px", base: "100px" }}
              height={{ md: "150px", base: "100px" }}
              objectFit="contain"
              transition="transform 0.1s linear"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;
