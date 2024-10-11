/* eslint-disable react/no-children-prop */
import React, { useState } from 'react'
import {
  InputGroup,
  InputLeftElement,
  InputRightElement,
  InputLeftAddon,
  InputRightAddon,
  Input,
  useTheme,
  Box,
  Flex,
  Text,
} from '@chakra-ui/react'
import MaskedInput from 'react-text-mask'
import InputMask from 'react-input-mask'
import { Icon } from '../Icon'
import * as masks from 'utils/input-masks'

export const TextInput = ({
  error,
  required,
  leftElement,
  leftAddon,
  rightElement,
  buttonElement,
  rightAddon,
  mask,
  type,
  fontSize,
  padding,
  ...props
}) => {
  const theme = useTheme()
  const [security, setSecurity] = useState(type === 'secureText')

  const DefaultInputProps = {
    errorBorderColor: 'danger',
    borderColor: 'border',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: 'background',
    _placeholder: {
      color: theme.colors.greyDark,
      fontSize: 14,
    },
    fontSize: 16,
    maxLength: 150,
    minHeight: 42,
    color: theme.colors.secondary,
  }

  return (
    <Box w="100%" {...props?.containerProps}>
      {props?.label && <Text mb="8px">{props?.label}</Text>}
      <InputGroup>
        {leftElement &&
          (leftAddon ? (
            <InputLeftAddon my="8px" children={leftElement} />
          ) : buttonElement ? (
            <InputLeftElement
              alignItems="center"
              justifyContent="center"
              ml="8px"
              height="100%"
              pointerEvents="none"
              children={leftElement}
            />
          ) : (
            <InputLeftElement height="100%" pointerEvents="all">
              {leftElement}
            </InputLeftElement>
          ))}

        <Input
          type={
            type === 'secureText' ? (security ? 'password' : 'string') : type
          }
          as={type === 'inputMask' ? InputMask : mask ? MaskedInput : Input}
          mask={masks[mask] ? masks[mask] : mask}
          {...DefaultInputProps}
          {...props}
          isInvalid={!!error}
          py="24px"
          paddingLeft={
            padding ? padding : leftElement && !leftAddon ? '48px' : '16px'
          }
          paddingRight={
            padding ? padding : rightElement && !rightAddon ? '48px' : '16px'
          }
          fontSize={`${fontSize}px` || '14px'}
          _placeholder={{
            fontFamily: 'Montserrat Medium',
            color: 'textGrey',
          }}
          placeholder={props?.placeholder}
        />

        {type === 'secureText' && (
          <InputRightElement height="100%" pointerEvents="all">
            <Flex onClick={() => setSecurity(!security)}>
              <Icon
                name={security ? 'EyeClosed' : 'EyeOpen'}
                color="textDark"
                cursor="pointer"
              />
            </Flex>
          </InputRightElement>
        )}
        {rightElement &&
          (rightAddon ? (
            <InputRightAddon my="8px" children={rightElement} />
          ) : buttonElement ? (
            <InputRightElement height="100%" pointerEvents="all">
              <Flex onClick={buttonElement}>{rightElement}</Flex>
            </InputRightElement>
          ) : (
            <InputRightElement height="100%" w="50%" pointerEvents="all">
              <Icon name={rightElement?.name} color={rightElement?.color} />
            </InputRightElement>
          ))}
      </InputGroup>

      {error && typeof error === 'string' && (
        <Text fontSize="12px" color="red">
          {error}
        </Text>
      )}
    </Box>
  )
}
