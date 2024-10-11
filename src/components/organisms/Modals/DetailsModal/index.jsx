import React, { useState } from 'react'
import { ContentModal } from 'components/molecules'
import { Text } from '@chakra-ui/react'
import { useProductStore } from 'services/stores'
import { Flex, Image } from '@chakra-ui/react'
import { formatPrice } from 'utils/format-price'
import { SelectUnityModal } from '..'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
// import { useBreakpoint } from 'services/hooks'

export const DetailsModal = ({ ...props }) => {
  const { product } = useProductStore()
  // const { setCurrentModal } = useModalStore()
  const [image, setImage] = useState(product?.images[0]?.imageUrl)
  const [unityModalOpen, setUnityModalOpen] = useState(false)
  // const { isDesktop } = useBreakpoint()

  return (
    <ContentModal w="70%" h="100%" isOpen>
      <Flex
        w="100%"
        h="100%"
        flexDir="column"
        justify={{ base: 'flex-start', md: 'space-between' }}
      >
        <Flex w="100%" flexDir="row" maxH={{ base: '200px', md: '400px' }}>
          {/* {isDesktop ? (
            <>
              <Image
                src={image}
                alt="promocao"
                maxH="400px"
                w="68%"
                mr="20px"
                borderRadius="20px"
                objectFit="cover"
              />
              {product?.images?.length !== 1 && (
                <Grid
                  justifyItems="center"
                  templateRows={'repeat(2, 1fr)'}
                  templateColumns={'repeat(2, 1fr)'}
                  gap={4}
                  w="100%"
                >
                  {product?.images
                    ?.filter((i) => i !== image)
                    ?.map((item, index) => (
                      <GridItem key={index} w="100%">
                        <Image
                          src={item?.imageUrl}
                          alt="promocao"
                          h="50%"
                          borderRadius="8px"
                          mr="12px"
                          cursor="pointer"
                          onClick={() => setImage(item?.imageUrl)}
                          objectFit="cover"
                        />
                      </GridItem>
                    ))}
                </Grid>
              )}
            </>
          ) : ( */}
          <Carousel autoPlay showArrows showStatus={false} infiniteLoop>
            {product?.images?.map((item, index) => (
              <Image
                key={index}
                src={item?.imageUrl}
                alt="detailsImage"
                maxH={{ base: '200px', md: '400px' }}
                minW="100%"
                borderRadius="8px"
                mr="12px"
                cursor="pointer"
                onClick={() => setImage(item?.imageUrl)}
                objectFit="contain"
              />
            ))}
          </Carousel>
          {/* )} */}
        </Flex>
        <Flex
          w={{ base: '100%', md: '100%' }}
          h="100%"
          align="flex-start"
          flexDir="column"
          mt={{ base: '12px', sm: '24px', md: '12px' }}
        >
          <Flex
            flexDir="column"
            justify="flex-start"
            align="flex-start"
            h="70%"
          >
            <Text
              fontFamily="extraBold"
              fontSize={{ md: '20px', lg: '24px', xl: '30px' }}
              color="secondary"
              textAlign="start"
            >
              {product?.name || product?.label}
            </Text>
            <Text
              fontFamily="medium"
              fontSize={{ base: '14px', md: '16px' }}
              color="secondary"
              textAlign="start"
              mt="16px"
            >
              {product?.description}
            </Text>
            <Text
              fontFamily="bold"
              fontSize={{ base: '16px', md: '20px' }}
              color="secondary"
              textAlign="start"
              mt="16px"
            >
              {formatPrice(product?.price)}
            </Text>
          </Flex>

          <Flex
            w="100%"
            borderRadius="8px"
            bg="secondary"
            onClick={() => setUnityModalOpen(true)}
            p="12px"
            align="center"
            justify="center"
            cursor="pointer"
          >
            <Text
              fontFamily="bold"
              fontSize={{ base: '14px', md: '18px', lg: '20px' }}
              color="white"
              textAlign="center"
            >
              Comprar agora
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <SelectUnityModal
        isOpen={unityModalOpen}
        onClose={() => setUnityModalOpen(false)}
      />
    </ContentModal>
  )
}
