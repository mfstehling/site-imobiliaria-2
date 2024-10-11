import React from 'react'
import { Box, Select as SelectChakra, Text } from '@chakra-ui/react'

export const Select = (props) => {
  return (
    <Box mt="12px">
      <Text fontSize={14} kind="medium" mb="4px" {...props}>
        {props?.label}
      </Text>
      <SelectChakra
        w="100%"
        h="56px"
        fontFamily="Montserrat regular"
        textColor="secondary"
        iconColor="primary"
        borderWidth={1}
        borderColor="borderLight"
        borderRadius="8px"
        errorBorderColor="baseRed"
        backgroundColor="layoutBackground"
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
