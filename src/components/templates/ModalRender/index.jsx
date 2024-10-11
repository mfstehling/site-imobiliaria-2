import React from 'react'
import {
  LoginModal,
  DetailsModal,
  ProductModal,
  SelectUnityModal,
  AlertModal,
  PhotosModal,
} from 'components/organisms'
import { useModalStore } from 'services/stores'

export const ModalRender = () => {
  const { currentModal, setCurrentModal } = useModalStore()
  switch (currentModal) {
    case 'login':
      return <LoginModal onClose={() => setCurrentModal(null)} />
    case 'detailsModal':
      return <DetailsModal onClose={() => setCurrentModal(null)} />
    case 'productModal':
      return <ProductModal onClose={() => setCurrentModal(null)} />
    case 'selectUnity':
      return <SelectUnityModal onClose={() => setCurrentModal(null)} />
    case 'alert':
      return <AlertModal onClose={() => setCurrentModal(null)} />
    case 'photo':
      return <PhotosModal onClose={() => setCurrentModal(null)} />
    default:
      return <></>
  }
}
