import React, { useState } from 'react'
import { ContentModal, Form } from 'components/molecules'
import { Button, Text } from '@chakra-ui/react'
import { data, validation, initial } from './settings'
import { useAuth } from 'services/hooks'
import { useMutation } from 'react-query'
import { useUserStore, useModalStore } from 'services/stores'

export const LoginModal = ({ title, section, ...props }) => {
  const [values, getValues] = useState({ params: initial, isValid: false })
  const { onLogin } = useAuth()
  const { setData } = useUserStore()
  const { setCurrentModal } = useModalStore()

  const mutate = useMutation('on-login', (params) => onLogin(params))

  const onSuccess = (data) => {
    setData({
      email: data?.email,
      name: data?.name,
    })
    setCurrentModal(null)
  }

  const handleSubmit = () => {
    const params = {
      ...values?.params,
    }
    mutate.mutate({ params, onSuccess })
  }

  return (
    <ContentModal isOpen title="Acesse sua conta" size="lg">
      <Form
        w="100%"
        validationSchema={validation}
        data={data}
        initialValues={values?.params}
        getValues={getValues}
      />
      <Button
        w="100%"
        h="50px"
        mt="16px"
        bg="secondary"
        _hover={false}
        isLoading={mutate.isLoading}
        onClick={handleSubmit}
      >
        <Text color="white">Login</Text>
      </Button>
    </ContentModal>
  )
}
