import { App, onBeforeUnmount, computed } from 'vue'

import { useRegisterModal, useRemoveModal } from './hooks'
import { state } from './state'
import UseModal from './UseModal'

export const installComponent = (app: App) => {
  app.component('UseModal', UseModal)
}
