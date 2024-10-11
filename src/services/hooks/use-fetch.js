import api from 'services/api/config'
import { useToast } from '@chakra-ui/react'

export const useFetch = () => {
  const toast = useToast()
  async function onFetch({
    url,
    method,
    params,
    onSuccess,
    onError,
    message,
    headers,
  }) {
    const res = await api[method || 'get'](url, params || {}, headers)
      .then(async (response) => {
        !!onSuccess && onSuccess(response.data)
        if (message?.success) {
          toast({
            title: message?.success,
            status: 'success',
            duration: 4000,
            isClosable: true,
          })
        }
        return response.data
      })
      .catch((error) => {
        !!onError && onError(error)
        if (message?.error) {
          toast({
            title: message?.error,
            description: error?.response?.data?.error,
            status: 'error',
            duration: 4000,
            isClosable: true,
          })
        }
      })
    return res
  }
  return { onFetch }
}
