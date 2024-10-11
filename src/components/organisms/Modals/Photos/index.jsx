import React, { useState, useEffect } from 'react'
import { ContentModal } from 'components/molecules'
import { Button, Text, Grid, GridItem } from '@chakra-ui/react'
import { FileInput } from 'components/atoms'
import { handleSelectPhoto } from 'utils/select-photo'
import { useProduct } from 'services/hooks'
import { useMutation } from 'react-query'
import { useModalStore, useProductStore } from 'services/stores'

export const PhotosModal = ({ title, section, ...props }) => {
  const [currentPhotos, currentPhotosSet] = useState([])
  const { setCurrentModal } = useModalStore()
  const { product } = useProductStore()
  const { addPhoto, deleteImage } = useProduct()

  useEffect(() => {
    const photoList = Array.from({ length: 4 }, (_, key) => {
      return {}
    })
    currentPhotosSet(photoList)
  }, [])

  const mutateDelete = useMutation('delete-photo', (params) =>
    deleteImage(params)
  )

  const handleDeletePhoto = (photo, index) => {
    mutateDelete.mutate({ id: photo?.id })
    currentPhotosSet((photos) => {
      photos[index] = {
        url: null,
        raw: null,
      }
      return [...photos]
    })
  }

  const mutate = useMutation('save-photo', (params) => addPhoto(params))

  return (
    <ContentModal notClose isOpen title="Adicionar imagens" size="xl">
      <Grid
        justifyItems="center"
        templateRows={'repeat(2, 1fr)'}
        templateColumns={'repeat(2, 1fr)'}
        gap={4}
        w="100%"
      >
        {currentPhotos.map((item, index) => (
          <GridItem key={index}>
            <FileInput
              defaultImage={item?.url}
              key={`photo-${index}`}
              disabled={mutate.isLoading || mutateDelete.isLoading}
              loading={mutate.isLoading || mutateDelete.isLoading}
              label={index === 0 ? 'Principal' : `Imagem ${index + 1}`}
              onChange={(file) => {
                handleSelectPhoto({
                  photo: file,
                  id: product?.id,
                  onAction: (params) => {
                    mutate.mutate({
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
      <Button
        w="100%"
        h="50px"
        mt="16px"
        bg="secondary"
        _hover={false}
        isLoading={mutate.isLoading}
        onClick={() => setCurrentModal(null)}
        isDisabled={
          currentPhotos.filter((item) => item?.imageBase64)?.length === 0 ||
          mutate.isLoading
        }
      >
        <Text color="white">Fechar</Text>
      </Button>
    </ContentModal>
  )
}
