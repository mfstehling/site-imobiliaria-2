import { useFetch } from './use-fetch'
import * as e from '../api/endpoints'

export const useAuth = () => {
  const { onFetch } = useFetch()

  async function onLogin(props) {
    const data = await onFetch({
      ...props,
      url: e.LOGIN,
      method: 'post',
      message: {
        error: 'Erro ao realizar o login',
        success: 'Login realizado com sucesso',
      },
    })
    return data
  }

  return { onLogin }
}
