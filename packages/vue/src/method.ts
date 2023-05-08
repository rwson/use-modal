import Vue from 'vue'
import { ModalActionType } from './enums'
import { mutation } from './state'

export const injectMethods = (vm: typeof Vue) => {
  vm.prototype.__registerModal__ = (id: string) => mutation({
    type: ModalActionType.RegisterModal,
    payload: {
      id
    }
  })

  vm.prototype.__removeModal__ = (id: string) => mutation({
    type: ModalActionType.RemoveModal,
    payload: {
      id
    }
  })

  vm.prototype.openModal = (id: string, props?: Record<string, any>) => mutation({
    type: ModalActionType.OpenModal,
    payload: {
      id,
      props
    }
  })

  vm.prototype.updateModal = (id: string, props: Record<string, any>, merge?: boolean) => mutation({
    type: ModalActionType.UpdateModal,
    payload: {
      id,
      props,
      merge
    }
  })

  vm.prototype.closeModal = (id: string) => mutation({
    type: ModalActionType.CloseModal,
    payload: {
      id
    }
  })

  vm.prototype.closeAllModals = () => mutation({
    type: ModalActionType.CloseAllModals
  })
}
