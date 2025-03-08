import React, { useState, useEffect } from "react";
import {
  Box,
  Image,
  IconButton,
  Flex,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectCoverflow, Navigation } from "swiper/modules";

import image1 from "../Tour/1.jpg";
import image2 from "../Tour/2.jpg";
import image3 from "../Tour/3.jpg";
import image5 from "../Tour/5.jpg";
import image6 from "../Tour/6.jpg";
import image7 from "../Tour/7.jpg";
import image8 from "../Tour/8.jpg";

const Tour = () => {
  const images = [image1, image2, image3, image5, image6, image7, image8];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Flex
      width="100vw"
      height={{ base: "auto", md: "60vh" }}
      alignItems="center"
      justifyContent="center"
      flexDirection={{ base: "column", md: "row" }}
      bg="#fceee5"
      paddingBottom={{ base: 5 }}
      paddingTop={{ base: 5 }}
      gap={4}
    >
      <Box
        width={{ base: "100%", md: "50%" }}
        textAlign="center"
        display="flex"
        alignItems="center"
        justifyContent="center"
        height={{ base: "10%", md: "100%" }}
      >
        <Text fontSize={{ base: "3xl", md: "5xl" }} fontWeight="light">
          Gallery
        </Text>
      </Box>
      <Box
        position="relative"
        width={{ base: "100%", md: "50%" }}
        height={{ base: "50%", md: "100%" }}
        overflow="hidden"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          src={images[currentIndex]}
          maxW="90%"
          maxH="80%"
          height="400px"
          objectFit="cover"
          transition="opacity 0.5s"
          borderRadius="lg"
          boxShadow="lg"
        />
        <IconButton
          icon={<ChevronLeftIcon boxSize={6} />}
          position="absolute"
          top="50%"
          left={{ base: 2, md: 100 }}
          transform="translateY(-50%)"
          bg="#28211d"
          color="white"
          onClick={prevSlide}
          _hover={{ bg: "blackAlpha.700" }}
        />
        <IconButton
          icon={<ChevronRightIcon boxSize={6} />}
          position="absolute"
          top="50%"
          right={{ base: 2, md: 100 }}
          transform="translateY(-50%)"
          bg="#28211d"
          color="white"
          onClick={nextSlide}
          _hover={{ bg: "blackAlpha.700" }}
        />
      </Box>
    </Flex>
  );
};

export default Tour;
