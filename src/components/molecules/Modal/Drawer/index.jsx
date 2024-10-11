import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  Flex,
  DrawerOverlay,
  DrawerCloseButton,
  Text,
} from '@chakra-ui/react'
import { useModalStore } from 'services/stores'

export const DrawerModal = ({ children, isOpen, onClose, title, ...props }) => {
  const { setCurrentModal } = useModalStore()
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={() => (onClose ? onClose() : setCurrentModal(null))}
    >
      <DrawerOverlay />
      <DrawerContent
        bg="modalBackground"
        borderLeftWidth={1}
        maxW={{ base: 'auto', md: '40vw' }}
      >
        <DrawerHeader>
          <Flex align="center">
            <Text color="secondary" kind="extraBold" fontSize="20px" w="90%">
              {title}
            </Text>
            <DrawerCloseButton
              onClick={onClose}
              color="primary"
              zIndex="1"
              mt="10px"
            />
          </Flex>
        </DrawerHeader>
        <DrawerBody paddingX="16px">{children}</DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
