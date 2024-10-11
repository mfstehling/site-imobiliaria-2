import React from 'react'
import { Flex, Button, Text, Image, Spinner, Center } from '@chakra-ui/react'
import { useModalStore, useProductStore } from 'services/stores'

export const PromotionCard = ({ ...props }) => {
  const { setCurrentModal } = useModalStore()
  const { setProduct } = useProductStore()

  if (props?.loading) {
    return (
      <Flex
        w="100%"
        h="290px"
        bg="card"
        align="center"
        justify="center"
        p={{ base: '12px', md: '48px' }}
        borderRadius="16px"
        flexDir={{ base: 'column', md: 'row' }}
      >
        <Flex flexDir="column" w="100%" align="center" justify="center">
          <Center>
            <Spinner />
          </Center>
        </Flex>
      </Flex>
    )
  }
  return (
    <Flex
      w="100%"
      h="290px"
      bg="card"
      align="center"
      p={{ base: '12px', md: '48px' }}
      borderRadius="16px"
      flexDir={{ base: 'column-reverse', md: 'row' }}
    >
      <Flex flexDir="column" w={{ base: '100%', md: '90%' }} align="center">
        <Text
          fontSize={{ base: '18px', md: '22px', lg: '30px' }}
          mb="5%"
          color="secondary"
          fontWeight="bold"
          w="90%"
        >
          {props?.name}
        </Text>
        <Button
          w={{ base: '80%', md: '60%', lg: '35%' }}
          h="50px"
          bg="secondary"
          _hover={false}
          onClick={() => {
            setProduct(props)
            setCurrentModal('detailsModal')
          }}
        >
          <Text color="white">Comprar</Text>
        </Button>
      </Flex>
      <Image
        src={props?.images?.[0]?.imageUrl}
        alt="promocao"
        h={{ base: '50%', md: '200px' }}
        w="100%"
        borderRadius="8px"
        objectFit="contain"
      />
    </Flex>
  )
}
