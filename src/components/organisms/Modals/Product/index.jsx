import React, { useState, useMemo, useEffect } from 'react'
import { DrawerModal, Form } from 'components/molecules'
import {
  Button,
  Text,
  Switch,
  Flex,
  Grid,
  GridItem,
  Box,
} from '@chakra-ui/react'
import { data, validation, initial } from './settings'
import { Select, TextInput, FileInput } from 'components/atoms'
import { AlertModal } from '..'
import { category } from 'utils/categorys'
import { unitys } from 'utils/unitys'
import { useProduct, useBreakpoint } from 'services/hooks'
import { useMutation, useQueryClient } from 'react-query'
import { useModalStore, useProductStore } from 'services/stores'
import { handleSelectPhoto } from 'utils/select-photo'

export const ProductModal = ({ title, section, ...props }) => {
  const [open, setOpen] = useState(false)
  const [currentPhotos, currentPhotosSet] = useState(
    Array.from({ length: 4 }, (_, key) => {
      return {}
    })
  )
  const { setCurrentModal } = useModalStore()
  const { setProduct, product } = useProductStore()
  const { addProduct, addPhoto, deleteImage, deleteProduct, editProduct } =
    useProduct()
  const [values, getValues] = useState({
    params: product ? product : initial,
    isValid: false,
  })
  const { currentSize } = useBreakpoint()
  const queryClient = useQueryClient()

  const onSetQuantity = (quantity, id) => {
    const filter = values?.params?.stock?.filter((i) => id !== i?.unityId)
    getValues({
      params: {
        ...values?.params,
        stock: [...filter, { unityId: id, quantity: Number(quantity) }],
      },
    })
  }

  const handleSelectCategory = (e) => {
    const selected = category?.find((item) => e?.target?.value === item?.value)
    getValues({
      params: {
        ...values?.params,
        categoryId: selected?.id,
      },
      isValid: values?.isValid,
    })
  }

  const mutate = useMutation(
    'create-product',
    (params) => (product ? editProduct(params) : addProduct(params)),
    {
      onSettled: () => queryClient.invalidateQueries('get-products'),
    }
  )

  const handleSubmit = () => {
    const params = {
      ...values?.params,
      price: Number(values?.params?.price),
    }
    delete params.images
    delete params.inactive

    mutate.mutate({
      id: params?.id,
      params,
      onSuccess: (data) => {
        if (!product) {
          setProduct(data)
          setCurrentModal('photo')
          return
        }
        setProduct(null)
        setCurrentModal(null)
      },
    })
  }

  const isButtonDisabled = useMemo(() => {
    return (
      !values?.params?.categoryId ||
      values?.params?.name?.length < 3 ||
      values?.params?.description < 3 ||
      values?.params?.price?.length < 1
    )
  }, [values])

  useEffect(() => {
    if (product) {
      getValues({
        params: {
          ...product,
        },
        isValid: false,
      })
      handleSelectCategory(product?.categoryId)
      const photoList = Array.from({ length: 4 }, (_, key) => {
        return { ...product?.images?.[key] } || {}
      })
      currentPhotosSet(photoList)
    }
  }, [product])

  const mutateDeletePhoto = useMutation('delete-photo', (params) =>
    deleteImage(params)
  )

  const handleDeletePhoto = (photo, index) => {
    mutateDeletePhoto.mutate({ id: photo?.id })
    currentPhotosSet((photos) => {
      photos[index] = {
        url: null,
        raw: null,
      }
      return [...photos]
    })
  }

  const mutatePhoto = useMutation('save-photo', (params) => addPhoto(params))

  const mutateDeleteProduct = useMutation('delete-product', (params) =>
    deleteProduct(params)
  )

  return (
    <DrawerModal
      isOpen
      title={product ? 'Editar produto' : 'Adicionar produto'}
      size="auto"
      onClose={() => {
        setCurrentModal(null)
        setProduct(null)
      }}
    >
      <Flex
        flexDir="column"
        minH={{ base: `${currentSize?.height * 1.65}px`, md: 'auto' }}
      >
        <Form
          w="100%"
          validationSchema={validation}
          data={data}
          initialValues={values?.params}
          getValues={getValues}
        />
        <Text
          fontSize="16px"
          mt="12px"
          mb="12px"
          fontFamily="semiBold"
          color="secondary"
        >
          Quais as quantidades de estoque?
        </Text>
        {unitys?.map((item, index) => (
          <Box key={index}>
            <Text mb="8px" mt="8px">
              {item.name}
            </Text>
            <TextInput
              onChange={(e) => onSetQuantity(e.target.value, item?.id)}
              value={
                values?.params?.stock?.find((i) => i?.unityId === item?.id)
                  ?.quantity
              }
              type="number"
              onWheel={(e) => e.target.blur()}
            />
          </Box>
        ))}
        <Flex mt="12px">
          <Switch
            isChecked={values?.params?.isPromotion}
            onChange={() =>
              getValues({
                params: {
                  ...values?.params,
                  isPromotion: !values?.params?.isPromotion,
                },
              })
            }
            size="lg"
          />
          <Text
            fontSize="16px"
            ml="12px"
            fontFamily="semiBold"
            color="secondary"
          >
            Esse produto é promocional?
          </Text>
        </Flex>
        <Select
          label="Categoria"
          onChange={handleSelectCategory}
          defaultValue={
            product &&
            category?.find((item) => product?.categoryId === item?.id)?.value
          }
        >
          {category.map((item) => (
            <option key={item?.value}>{item?.value}</option>
          ))}
        </Select>
        {product && (
          <Grid
            justifyItems="center"
            templateRows={'repeat(2, 1fr)'}
            templateColumns={'repeat(2, 1fr)'}
            gap={4}
            w="100%"
          >
            {currentPhotos.map((item, index) => (
              <GridItem key={index} mt="16px">
                <FileInput
                  defaultImage={item?.url || item?.imageUrl}
                  key={`photo-${index}`}
                  disabled={
                    mutatePhoto.isLoading || mutateDeletePhoto.isLoading
                  }
                  loading={mutatePhoto.isLoading || mutateDeletePhoto.isLoading}
                  label={index === 0 ? 'Principal' : `Imagem ${index + 1}`}
                  onChange={(file) => {
                    handleSelectPhoto({
                      photo: file,
                      id: product?.id,
                      onAction: (params) => {
                        mutatePhoto.mutate({
                          params: {
                            ...params,
                            productId: product?.id,
                          },
                          onSuccess: (data) => {
                            currentPhotosSet((photos) => {
                              const url = URL.createObjectURL(file)
                              photos[index] = {
                                ...params,
                                url,
                                raw: file,
                                id: data?.id,
                              }
                              return [...photos]
                            })
                          },
                        })
                      },
                    })
                  }}
                  onClear={(cb) => {
                    handleDeletePhoto(item, index)
                  }}
                  withoutText
                />
              </GridItem>
            ))}
          </Grid>
        )}
        <Flex>
          {product && (
            <Button
              w="48%"
              h="50px"
              mt="16px"
              mr="4%"
              bg="danger"
              _hover={false}
              onClick={() => setOpen(true)}
              isDisabled={
                mutate.isLoading ||
                mutateDeletePhoto.isLoading ||
                mutateDeleteProduct.isLoading
              }
              isLoading={mutate.isLoading}
            >
              <Text color="white">Excluir</Text>
            </Button>
          )}
          <Button
            w={product ? '48%' : '100%'}
            h="50px"
            mt="16px"
            bg="secondary"
            _hover={false}
            onClick={handleSubmit}
            isDisabled={
              values?.params?.stock?.length === 0 ||
              values?.params?.stock?.reduce(
                (acc, val) => acc + val?.quantity,
                0
              ) === 0 ||
              isButtonDisabled ||
              mutate.isLoading ||
              mutateDeletePhoto.isLoading ||
              mutateDeleteProduct.isLoading
            }
            isLoading={mutate.isLoading}
          >
            <Text color="white">{product ? 'Editar' : 'Criar'}</Text>
          </Button>
        </Flex>
      </Flex>

      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        title={`Deseja excluir o produto ${product?.name}?`}
        description="Esta ação não poderá ser desfeita"
        isLoading={mutateDeleteProduct.isLoading}
        onAction={() =>
          mutateDeleteProduct.mutate(
            {
              id: product?.id,
              onSuccess: () => {
                setOpen(false)
                setCurrentModal(null)
                setProduct(null)
              },
            },
            {
              onSettled: () => {
                queryClient.invalidateQueries('get-products')
              },
            }
          )
        }
      />
    </DrawerModal>
  )
}
