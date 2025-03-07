import React, { useState } from "react";
import {
  Box,
  Image,
  Flex,
  Link,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { FaPhoneAlt, FaDirections, FaBars } from "react-icons/fa";
import { ChevronDownIcon } from "@chakra-ui/icons";
import logo from "../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isOpen: isDrawerOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      as="header"
      bg="#28211d"
      p={4}
      color="white"
      height="80px"
      display="flex"
      alignItems="center"
    >
      <Flex
        justify="space-between"
        align="center"
        maxW="1200px"
        mx="auto"
        width="100%"
      >
        {/* Logo */}
        <Image
          src={logo}
          alt="Qualiteeth Logo"
          height={{ base: "250px", md: "300" }}
        />

        {/* Desktop Nav */}
        <Flex
          as="nav"
          gap={8}
          align="center"
          display={{ base: "none", md: "flex" }}
          flexGrow={1}
          justify="center"
        >
          <Link
            href="#home"
            fontSize="lg"
            _hover={{ color: "#c49d84" }}
            color="#F5C7A9"
          >
            Home
          </Link>

          <Link
            href="#service"
            fontSize="lg"
            _hover={{ color: "#c49d84" }}
            color="#F5C7A9"
          >
            Services
          </Link>

          <Link
            href="#about"
            fontSize="lg"
            _hover={{ color: "#c49d84" }}
            color="#F5C7A9"
          >
            About Us
          </Link>
        </Flex>

        {/* Contact & Location Icons */}
        <Flex gap={6} align="center">
          <Link
            href="tel:+919256491206"
            _hover={{ color: "#c49d84" }}
            color="#F5C7A9"
            display={{ base: "none", md: "block" }}
          >
            <Icon as={FaPhoneAlt} boxSize={5} />
          </Link>
          <Link
            href="https://www.google.com/maps/place/Qualiteeth+Dental+Care/@26.9018108,75.7366896,17z/data=!3m1!4b1!4m6!3m5!1s0x396db52aa8fff4cf:0xfd055fea55b4585d!8m2!3d26.901806!4d75.7392645!16s%2Fg%2F11l5vzlvgg?entry=ttu&g_ep=EgoyMDI1MDIxMS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            _hover={{ color: "#c49d84" }}
            color="#F5C7A9"
            display={{ base: "none", md: "block" }}
          >
            <Icon as={FaDirections} boxSize={6} />
          </Link>

          {/* Hamburger Icon for Mobile */}
          <Icon
            as={FaBars}
            boxSize={6}
            cursor="pointer"
            display={{ base: "block", md: "none" }}
            onClick={onOpen}
            color="#F5C7A9"
          />
        </Flex>
      </Flex>

      {/* Mobile Drawer */}
      <Drawer isOpen={isDrawerOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="#28211d" color="#F5C7A9">
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack align="start" spacing={5}>
              <Link
                href="#home"
                fontSize="lg"
                _hover={{ color: "#c49d84" }}
                onClick={onClose}
              >
                Home
              </Link>
              <Link
                href="#service"
                fontSize="lg"
                _hover={{ color: "#c49d84" }}
                onClick={onClose}
              >
                Services
              </Link>
              <Link
                href="#about"
                fontSize="lg"
                _hover={{ color: "#c49d84" }}
                onClick={onClose}
              >
                About Us
              </Link>
              {/* <Menu isOpen={isOpen}>
                <MenuButton
                  fontSize="lg"
                  bg="transparent"
                  color="#F5C7A9"
                  _hover={{ color: "#c49d84" }}
                  onMouseEnter={() => setIsOpen(true)}
                  onMouseLeave={() => setIsOpen(false)}
                >
                  Services <ChevronDownIcon />
                </MenuButton>
                <MenuList
                  bg="#502626"
                  border="none"
                  boxShadow="none"
                  onMouseEnter={() => setIsOpen(true)}
                  onMouseLeave={() => setIsOpen(false)}
                >
                  {[
                    { label: "Teeth Cleaning", href: "#cleaning" },
                    { label: "Teeth Whitening", href: "#whitening" },
                    { label: "Braces & Aligners", href: "#braces" },
                    { label: "Dental Implants", href: "#implants" },
                  ].map((item, index) => (
                    <MenuItem
                      key={index}
                      as={Link}
                      href={item.href}
                      bg="transparent"
                      _hover={{ color: "#c49d84", bg: "transparent" }}
                      color="#F5C7A9"
                      _focus={{ bg: "transparent", boxShadow: "none" }}
                    >
                      {item.label}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu> */}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;
