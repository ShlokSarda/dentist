import {
  Box,
  HStack,
  IconButton,
  Text,
  VStack,
  Link,
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";
import { FaPhoneAlt, FaCalendarAlt, FaDirections } from "react-icons/fa";
import { useState } from "react";

const BottomNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      display={{ md: "none" }}
      position="fixed"
      bottom="0"
      left="0"
      width="100%"
      bg="#28211d"
      color="#F5C7A9"
      py={3}
      zIndex="1000"
    >
      <HStack justify="space-around">
        <VStack>
          <Link
            href="tel:+919256491206"
            _hover={{ color: "#c49d84" }}
            color="#F5C7A9"
          >
            <Icon as={FaPhoneAlt} marginTop={{ base: 2 }} boxSize={5} />
          </Link>
          <Text fontSize="sm">Phone</Text>
        </VStack>

        <VStack>
          <IconButton
            aria-label="Book Online"
            icon={<FaCalendarAlt />}
            variant="ghost"
            color="#F5C7A9"
            fontSize="xl"
            onClick={onOpen}
          />
          <Text fontSize="sm">Book Online</Text>
          <Modal
            isOpen={isOpen}
            onClose={onClose}
            size="xl"
            blockScrollOnMount={true}
          >
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

        <VStack>
          <Link
            href="https://www.google.com/maps/place/Qualiteeth+Dental+Care/@26.9018108,75.7366896,17z/data=!3m1!4b1!4m6!3m5!1s0x396db52aa8fff4cf:0xfd055fea55b4585d!8m2!3d26.901806!4d75.7392645!16s%2Fg%2F11l5vzlvgg?entry=ttu&g_ep=EgoyMDI1MDIxMS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            _hover={{ color: "#c49d84" }}
            color="#F5C7A9"
          >
            <Icon as={FaDirections} marginTop={{ base: 2 }} boxSize={6} />
          </Link>
          <Text fontSize="sm">Directions</Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default BottomNav;
