import styled from '@emotion/styled'

export const TrRow = styled.tr`
  background-color: ${({ theme, bgRow }) =>
    theme.colors[bgRow || 'background']};
`
