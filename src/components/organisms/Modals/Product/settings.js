import React from 'react'
import * as Yup from 'yup'
import { Text } from '@chakra-ui/react'

export const data = [
  {
    id: 'name',
    name: 'name',
    type: 'text',
    label: 'Nome do produto',
    placeholder: 'Ex.: Cama de solteiro',
  },
  {
    id: 'description',
    name: 'description',
    type: 'text',
    label: 'Descrição',
    placeholder: 'Ex.: Cama de solteiro marrom',
  },
  {
    id: 'price',
    name: 'price',
    type: 'text',
    label: 'Preço',
    placeholder: 'Ex.: 100,00',
    mask: 'CURRENCY_MASK',
    leftElement: (
      <Text color="textLight" kind="medium" ml="12px" mt="2px" width="40px">
        R$
      </Text>
    ),
  },
]

export const validation = Yup.object().shape({
  name: Yup.string().min(8, 'E-mail inválido').required('E-mail inválido'),
  password: Yup.string()
    .min(6, 'Senha precisa ter pelo menos 6 caracteres')
    .required('É preciso digitar uma senha'),
})

export const initial = {
  name: '',
  description: '',
  price: '',
  isPromotion: false,
  stock: [],
}
