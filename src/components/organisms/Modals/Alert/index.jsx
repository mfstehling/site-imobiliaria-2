import React from 'react'
import { ContentModal } from 'components/molecules'
import { Button, Text, Flex } from '@chakra-ui/react'

export const AlertModal = ({
  isOpen,
  title,
  description,
  onAction,
  onClose,
  ...props
}) => {
  return (
    <ContentModal isOpen={isOpen} onClose={onClose} size="xl">
      <Flex flexDir="column" w="100%" align="center">
        <Text
          fontSize="24px"
          fontFamily="bold"
          color="secondary"
          mb="16px"
          w="70%"
        >
          {title}
        </Text>

        <Text fontSize="16px" mb="16px" color="secondary" fontFamily="regular">
          {description}
        </Text>
        <Button
          w="100%"
          h="50px"
          mt="16px"
          bg="danger"
          borderStyle="none"
          _focus={false}
          _hover={false}
          isLoading={props?.isLoading}
          onClick={onAction}
        >
          <Text color="white" kind="bold">
            Confirmar
          </Text>
        </Button>
        <Button
          w="100%"
          h="50px"
          mt="16px"
          bg="transparent"
          borderColor="secondary"
          borderWidth="1px"
          _hover={false}
          onClick={onClose}
        >
          <Text color="secondary" kind="bold">
            Cancelar
          </Text>
        </Button>
      </Flex>
    </ContentModal>
  )
}
