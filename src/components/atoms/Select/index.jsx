import React from 'react'
import { Box, Select as SelectChakra, Text } from '@chakra-ui/react'

export const Select = (props) => {
  return (
    <Box mt="12px">
      <Text fontSize={14} mb="8px" {...props}>
        {props?.label}
      </Text>
      <SelectChakra
        w="100%"
        h="56px"
        textColor="secondary"
        iconColor="primary"
        borderWidth={1}
        borderColor="border"
        borderRadius="8px"
        errorBorderColor="danger"
        placeholder={props?.placeholder || 'Selecionar'}
        backgroundColor="background"
        {...props}
      >
        {props.children}
      </SelectChakra>
    </Box>
  )
}

Select.defaultProps = {}

Select.propTypes = {
  ...Select.propTypes,
}
