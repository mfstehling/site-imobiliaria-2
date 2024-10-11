import React from 'react'
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react'
import { Icon } from 'components/atoms'
import { useModalStore } from 'services/stores'

export const ContentModal = ({ children, header, ...props }) => {
  const { setCurrentModal } = useModalStore()
  return (
    <Modal
      isCentered
      isOpen={props?.isOpen}
      onClose={props?.onClose}
      size={props?.size}
    >
      <ModalOverlay />

      <ModalContent
        flexDir="column"
        align="center"
        justify="center"
        p="8px"
        pb="24px"
        minW={props?.w || '450px'}
        height={props?.h}
        bgColor="lightCard"
        borderRadius="12px"
      >
        <ModalHeader flexDirection="row" alignItems="flex-start" mb="16px">
          {!props?.notClose && (
            <Icon
              name="Close"
              onClick={() =>
                props?.onClose ? props?.onClose() : setCurrentModal(null)
              }
              size={18}
              color="secondary"
            />
          )}
          <Text
            fontFamily="bold"
            fontSize="20px"
            color="secondary"
            textAlign="center"
          >
            {props?.title}
          </Text>
        </ModalHeader>

        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  )
}
