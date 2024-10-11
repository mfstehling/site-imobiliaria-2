import React, { useEffect, useState, useRef } from 'react'
import { Flex, Input, Spinner, Text } from '@chakra-ui/react'
import { Icon } from '..'

export const FileInput = ({
  label,
  type,
  onChange,
  onClear,
  defaultImage,
  canDelete = true,
  canOverwrite = true,
  loading,
  disabled,
  withoutText,
  ...props
}) => {
  const ref = useRef(null)

  const [file, fileSet] = useState({})
  const [dataURL, dataURLSet] = useState('')
  const [hasImage, hasImageSet] = useState(!!defaultImage)

  const handleFileSelect = (event) => {
    if (event?.target?.files[0]) {
      fileSet(event?.target?.files[0])

      if (typeof onChange === 'function') {
        onChange(event?.target?.files[0])
      }
    }
  }
  const handleFileClear = () => {
    if (typeof onClear === 'function') {
      onClear(() => {
        fileSet({})
        dataURLSet('')

        if (ref?.current) {
          ref.current.value = null
          ref.current.files = null
        }
      })
    }
  }

  useEffect(() => {
    const File = new FileReader()

    const convertImageToBase64 = (event) => {
      dataURLSet(event?.target?.result)
    }

    File.addEventListener('load', convertImageToBase64)

    if (file?.name) {
      File.readAsDataURL(file)
    }

    return () => {
      File.removeEventListener('load', convertImageToBase64)
    }
  }, [file])

  useEffect(() => {
    if (defaultImage) {
      hasImageSet(true)
    }
  }, [defaultImage])

  return (
    <Flex flexDir="column" align="center" w="100%">
      <Flex
        border="1px dashed"
        bg="cardBackground"
        borderColor={
          hasImage && defaultImage ? 'transparent' : 'brand.primaryLight'
        }
        borderRadius={props?.br || '12px'}
        bgImg={
          hasImage && defaultImage
            ? `${`url(${defaultImage})` || `url(${dataURL})`}`
            : 'transparent'
        }
        bgSize="cover"
        w={props?.full ? '100%' : props?.w || '96px'}
        h={props?.h || '96px'}
        direction="column"
        align="center"
        justify="center"
        position="relative"
        {...props}
      >
        {loading && <Spinner color="white" />}
        {!defaultImage && !loading ? (
          <>
            <Text textAlign="center" kind="medium" fontSize={'12px'} mt={'8px'}>
              {label}
            </Text>
          </>
        ) : (
          canDelete && (
            <Flex
              align="center"
              justify="center"
              bg="background"
              borderRadius="100px"
              position="absolute"
              opacity={disabled ? 0.5 : 1}
              top="2"
              right="2"
              cursor={disabled ? 'auto' : 'pointer'}
              w={'24px'}
              h={'24px'}
              onClick={() => (disabled ? '' : handleFileClear())}
              zIndex={10}
              di
            >
              <Icon name="Close" color="white" size={12} />
            </Flex>
          )
        )}
        {canOverwrite && (
          <Input
            ref={ref}
            type="file"
            name="file"
            opacity="0"
            position="absolute"
            style={{ display: disabled ? 'none' : 'flex' }}
            left={0}
            right={0}
            w="100%"
            h="100%"
            cursor={disabled ? 'auto' : 'pointer'}
            onChange={handleFileSelect}
            multiple={false}
            accept="image/*"
            disabled={disabled}
          />
        )}
      </Flex>
      {!withoutText && (
        <Text fontSize="12px" color="textGrey" mt="0%">
          {'CHANGE_LOGO_BUTTON'}
        </Text>
      )}
    </Flex>
  )
}
