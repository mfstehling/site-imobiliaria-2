import React from 'react'
import { ContentModal } from 'components/molecules'
import { useModalStore, useProductStore } from 'services/stores'
import { Flex, Text } from '@chakra-ui/react'
import { unitys } from 'utils/unitys'

export const SelectUnityModal = ({
  title,
  section,
  isOpen,
  onClose,
  ...props
}) => {
  const { product } = useProductStore()
  const { setCurrentModal } = useModalStore()
  return (
    <ContentModal
      isOpen={isOpen}
      onClose={onClose}
      title="Selecione a unidade"
      size="lg"
    >
      {product?.stock
        ?.filter((i) => i?.quantity > 0)
        ?.map((unity, index) => (
          <Flex
            key={index}
            w="100%"
            borderRadius="8px"
            bg="secondary"
            onClick={() => {
              window.open(
                `https://wa.me//${
                  unitys?.find((it) => it.id === unity?.unityId)?.phone
                }?text=Tenho%20interesse%20em%20comprar%20${product?.name}`
              )
              onClose()
              setCurrentModal(null)
            }}
            flexDir="column"
            mb="12px"
            p="12px"
            cursor="pointer"
          >
            <Text
              fontFamily="semiBold"
              fontSize={{ xl: '14px' }}
              color="white"
              textAlign="start"
            >{`Comprar agora na ${
              unitys?.find((i) => i.id === unity?.unityId)?.name
            }`}</Text>
            <Text
              fontFamily="medium"
              fontSize="12px"
              color="white"
              textAlign="start"
            >
              {unitys?.find((i) => i.unityId === unity?.id)?.address}
            </Text>
          </Flex>
        ))}
    </ContentModal>
  )
}
