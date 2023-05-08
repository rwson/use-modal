import { App, onBeforeUnmount, computed } from 'vue'

import { useRegisterModal, useRemoveModal } from './hooks'
import { state } from './state'

export const installComponent = (app: App) => {
  app.component('UseModal', {
    props: {
      modalId: {
        type: String,
        required: true
      },
      isGlobal: {
        type: Boolean,
        required: false,
        default: () => false
      }
    },
    setup(props, context) {
      const registerModal = useRegisterModal()
      const removeModal = useRemoveModal()

      if (!state[props.modalId]) {
        registerModal(props.modalId)
      }

      onBeforeUnmount(() => {
        if (!props.isGlobal) {
          removeModal(props.modalId)
        }
      })

      const modalState = computed(() => state[props.modalId])
      return () => context.slots?.modal?.(modalState.value)
    }
  })
}
