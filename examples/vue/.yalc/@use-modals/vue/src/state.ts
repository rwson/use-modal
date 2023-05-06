import Vue from 'vue'

import { ModalActionType } from './enums'

interface UpdateStatePayload {
  readonly type: ModalActionType
  readonly payload?: {
    readonly id?: string
    readonly props?: Record<string, any>
    readonly merge?: boolean
  }
}

export const state = Vue.observable<Record<string, any>>({})

export const mutation = (value: UpdateStatePayload) => {
  const { type, payload } = value

  switch (type) {
    case ModalActionType.OpenModal:
      if (!state[payload?.id!]) {
        throw new Error(`modal '${payload?.id}' not exist, please register it before your use`)
      }
      state[payload?.id!].visible = true
      state[payload?.id!].props = payload?.props!
      console.log(state)
    break

    case ModalActionType.CloseModal:
      state[payload?.id!].visible = false
      break

    case ModalActionType.UpdateModal:
      if (!state[payload?.id!]) {
        throw new Error(`modal '${payload?.id}' not exist, please register it before your use`)
      }
      const originProps = state[payload?.id!].props ?? {}
      state[payload?.id!].props = payload?.merge ? {
        ...originProps,
        ...payload?.props!
      } : payload?.props!
      break

    case ModalActionType.CloseAllModals:
      Object.keys(state).forEach((key) => {
        state[key].visible = false
      })
      break

    case ModalActionType.RegisterModal:
      Vue.set(state, payload?.id!, {
        visible: false,
        props: {}
      })
      break

    case ModalActionType.RemoveModal:
      delete state[payload?.id!]
      break

    default:
      break
  }
}
