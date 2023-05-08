import { App } from 'vue'
import UseModal from './use-modal'

export const installComponent = (app: App) => {
  app.component('UseModal', UseModal)
}
