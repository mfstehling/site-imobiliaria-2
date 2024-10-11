import { useFetch } from './use-fetch'
import * as e from '../api/endpoints'

export const useProduct = () => {
  const { onFetch } = useFetch()

  async function getProducts(props) {
    const data = await onFetch({
      ...props,
      url: e.GET_PRODUCTS,
      method: 'get',
      message: {
        error: 'Erro ao carregar produtos',
      },
    })
    return data
  }

  async function addProduct(props) {
    await onFetch({
      ...props,
      url: e.GET_PRODUCTS,
      method: 'post',
      message: {
        error: 'Erro ao criar produto',
        success: 'Produto criado com sucesso',
      },
    })
  }

  async function deleteProduct(props) {
    await onFetch({
      ...props,
      url: e.CHANGE_PRODUCT(props?.id),
      method: 'delete',
      message: {
        error: 'Erro ao deletar produto',
        success: 'Produto deletado com sucesso',
      },
    })
  }

  async function editProduct(props) {
    await onFetch({
      ...props,
      url: e.CHANGE_PRODUCT(props?.id),
      method: 'put',
      message: {
        error: 'Erro ao editar produto',
        success: 'Produto editado com sucesso',
      },
    })
  }

  async function addPhoto(props) {
    await onFetch({
      ...props,
      url: e.IMAGE,
      method: 'post',
      message: {
        error: 'Erro ao salvar foto',
        success: 'Foto salva com sucesso',
      },
    })
  }

  async function deleteImage(props) {
    await onFetch({
      ...props,
      url: e.DELETE_IMAGE(props?.id),
      method: 'delete',
      message: {
        error: 'Erro ao deletar imagem',
        success: 'Imagem deletada com sucesso',
      },
    })
  }

  return {
    getProducts,
    addProduct,
    deleteProduct,
    addPhoto,
    deleteImage,
    editProduct,
  }
}
