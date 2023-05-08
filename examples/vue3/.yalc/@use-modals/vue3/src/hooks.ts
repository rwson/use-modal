import { ModalActionType } from './enums'
import { mutation } from './state'

export const useRegisterModal = () => (id: string) => mutation({
  type: ModalActionType.RegisterModal,
  payload: {
    id
  }
})

export const useRemoveModal = () => (id: string) => mutation({
  type: ModalActionType.RemoveModal,
  payload: {
    id
  }
})

export const useOpenModal = () => (id: string, props?: Record<string, any>) => mutation({
  type: ModalActionType.OpenModal,
  payload: {
    id,
    props
  }
})

export const useUpdateModal = () => (id: string, props: Record<string, any>, merge?: boolean) => mutation({
  type: ModalActionType.UpdateModal,
  payload: {
    id,
    props,
    merge
  }
})

export const useCloseModal = () => (id: string) => mutation({
  type: ModalActionType.CloseModal,
  payload: {
    id,
  }
})

export const useCloseAllModals = () => () => mutation({ type: ModalActionType.CloseAllModals })
