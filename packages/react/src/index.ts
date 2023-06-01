import { enableMapSet } from 'immer'

enableMapSet()

export { ModalProvider } from './context'

export { useOpenModal } from './hooks/useOpenModal'
export { useCloseModal } from './hooks/useCloseModal'
export { useUpdateModal } from './hooks/useUpdateModal'
export { useModalIsLoading } from './hooks/useModalIsLoading'
export { useRegisterModal } from './hooks/useRegisterModal'
export { useModalProps } from './hooks/useModalProps'

export type { ModalBasicProps } from './types'
