import React from 'react'
import { Flex, Box } from '@chakra-ui/react'
import * as IconsAssets from 'assets/icons'
import { theme } from 'styles'

export const Icon = ({ name, color, size, box, ...props }) => {
  const AssetIcon = IconsAssets[name || 'Instagram']
  return (
    <Flex {...props}>
      <Box
        cursor={props?.onClick ? 'pointer' : 'unset'}
        onClick={props?.onClick}
        borderRadius="6px"
      >
        <AssetIcon
          {...props}
          height={size ? `${size}px` : '18px'}
          width={size ? `${size}px` : '18px'}
          color={color ? theme.colors[color] : theme.colors.secondary}
        />
      </Box>
    </Flex>
  )
}
