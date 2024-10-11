import React, { useEffect, useState } from 'react'
import { Icon } from 'components/atoms'
import {
  Table as ChakraTable,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
  Center,
  Box,
  Spinner,
  Flex,
  Text,
} from '@chakra-ui/react'
import { TrRow } from './styles'
import { ChevronRight } from 'assets/icons'

const defaultValues = {
  emptyListMessage: 'EMPTY_LIST_MESSAGE',
  emptyValueMessage: '',
  column: [],
  data: [],
}

export const Table = ({
  data,
  columns,
  children,
  deleteButtom,
  loading,
  fluid,
  emptyListMessage = defaultValues.emptyListMessage,
  onSelect = () => {},
  isSelectableRow,
  isMultiSelectable,
  isSelectableRowVariabled,
  isProductsTable = false,
  isFlag,
  selectedList,
  bgRow,
  deleteButton,
  onlyDelete,
  ...props
}) => {
  const [render, setRender] = useState(data)

  const getWidth = React.useCallback((width) => () => {
    if (!width) return null

    return width
  })

  const formatValue = React.useCallback((value) => {
    return value
  }, [])

  useEffect(() => {
    setRender(data)
  }, [data])

  return (
    <Box width={!!fluid && '100%'} flex={1} borderRadius="4px" {...props}>
      <ChakraTable
        width="100%"
        style={{ borderCollapse: 'separate', borderSpacing: '0 16px' }}
      >
        {!props?.withoutHeader && (
          <Thead bgColor="transparent">
            <Tr>
              {columns?.map((column, index) => (
                <Th
                  width={getWidth(column?.width)}
                  color={'textLight'}
                  key={`column_${column?.key}_${index}`}
                  borderColor="transparent"
                  fontFamily="Montserrat SemiBold"
                  fontSize={{
                    base: '8px',
                    ssm:
                      isSelectableRow || isSelectableRowVariabled
                        ? '7.5px'
                        : '8px',
                    sm:
                      isSelectableRow || isSelectableRowVariabled
                        ? '10px'
                        : '11px',
                    md: '12px',
                  }}
                >
                  <Flex align="center">
                    {column?.columnRender || column?.label}
                  </Flex>
                </Th>
              ))}
              {!!children && (
                <Th
                  key={`column_action`}
                  width="10%"
                  borderColor="transparent"
                />
              )}
            </Tr>
          </Thead>
        )}
        <Tbody height="fit-content">
          {!loading &&
            render &&
            !!render?.length &&
            render?.map((item, index) => (
              <TrRow
                key={`data_${index}`}
                bgRow={bgRow}
                onClick={() => (onlyDelete ? null : onSelect(item))}
                style={{
                  cursor: `${
                    (isSelectableRowVariabled?.[index] || isSelectableRow) &&
                    !onlyDelete
                      ? 'pointer'
                      : ''
                  }`,
                }}
              >
                {columns?.map((column) => (
                  <Td
                    key={`data_${column.key}_${index}`}
                    borderRightColor="transparent"
                    bg="card"
                    borderRadius={0}
                  >
                    <Text
                      width={getWidth(column.width)}
                      fontSize={{ base: '11px', md: '14px' }}
                    >
                      {column.render(item, index)}
                    </Text>
                  </Td>
                ))}
                {!!children && (
                  <Td key={`data_action_${index}`} borderColor="transparent">
                    <Text color="secondary">{children(item, index)}</Text>
                  </Td>
                )}
                {(isSelectableRowVariabled?.[index] || isSelectableRow) && (
                  <Td
                    key={`data_action_${index}`}
                    bg="card"
                    w="20px"
                    alignSelf="end"
                  >
                    {deleteButton ? (
                      <Icon
                        onClick={() => (onlyDelete ? onSelect(item) : null)}
                        name="Trash"
                        color="danger"
                        size={24}
                      />
                    ) : (
                      <ChevronRight
                        color="primary"
                        style={{ fontWeigth: 'bold' }}
                      />
                    )}
                  </Td>
                )}
                {!!isSelectableRowVariabled &&
                  !isSelectableRowVariabled?.[index] && (
                    <Td
                      key={`data_action_${index}`}
                      bg="card"
                      w="20px"
                      borderWidth={1}
                      borderColor="modalBorder"
                      alignSelf="end"
                    ></Td>
                  )}
              </TrRow>
            ))}
        </Tbody>
      </ChakraTable>
      {(!data || !data.length) && !loading && emptyListMessage !== 'none' && (
        <Center
          height={emptyListMessage?.h || '450px'}
          flexDir={emptyListMessage?.withIcon ? 'column' : 'row'}
        >
          {emptyListMessage?.withIcon && (
            <Flex
              align="center"
              justify="center"
              w="48px"
              h="48px"
              bg="layoutBackground"
              borderRadius="12px"
              mb="16px"
            >
              <Icon
                name={emptyListMessage?.withIcon}
                size={24}
                color="textDark"
              />
            </Flex>
          )}
          <Text textAlign="center" kind={emptyListMessage?.kind}>
            {emptyListMessage?.text}
          </Text>
        </Center>
      )}
      {loading && (
        <Center height="450px">
          <Spinner color="primary" />
        </Center>
      )}
    </Box>
  )
}
