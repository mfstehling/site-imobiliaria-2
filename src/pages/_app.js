import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/theme-utils'
import { Global, css } from '@emotion/react'
import { colors, globalStyles, fonts, breakpoints } from '../styles'
import { ModalRender } from 'components/templates'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BreakpointProvider } from 'services/hooks'

const theme = extendTheme({
  colors,
  fonts,
  breakpoints,
})

const queryClient = new QueryClient()

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <BreakpointProvider>
          <Global
            styles={css`
              ${globalStyles}
            `}
          />
          <Component {...pageProps} />
          <ModalRender />
        </BreakpointProvider>
      </ChakraProvider>
    </QueryClientProvider>
  )
}
