import React from 'react'
import { Flex, Button, Text, Image, Spinner } from '@chakra-ui/react'
import { useModalStore, useProductStore } from 'services/stores'
import { formatPrice } from 'utils/format-price'

export const ProductCard = ({ ...props }) => {
  const { setCurrentModal } = useModalStore()
  const { setProduct } = useProductStore()

  return (
    <Flex flexDir="column">
      <Flex
        w="100%"
        bg="lightCard"
        borderRadius="8px"
        align="center"
        justify="center"
        p="12px"
        h={props?.loading && '200px'}
      >
        {props?.loading ? (
          <Spinner />
        ) : (
          <Image
            src={props?.images?.[0]?.imageUrl}
            alt="productCard"
            h="250px"
          />
        )}
      </Flex>
      {!props?.loading && (
        <>
          <Flex w="100%" justify="space-between" mt="5px" mb="5px">
            <Text
              fontWeight="bold"
              fontSize={{ md: '16px', lg: '18px' }}
              color="secondary"
            >
              {props?.name}
            </Text>
            <Text
              fontWeight="bold"
              fontSize={{ md: '14px', lg: '16px' }}
              color="secondary"
            >
              {formatPrice(props?.price)}
            </Text>
          </Flex>
          <Text fontSize="14px" color="secondary" w="100%" mb="5px">
            {props?.description}
          </Text>
          <Button
            w="50%"
            _hover={false}
            bg="secondary"
            color="white"
            onClick={() => {
              setProduct(props)
              setCurrentModal('detailsModal')
            }}
          >
            Comprar
          </Button>
        </>
      )}
    </Flex>
  )
}
