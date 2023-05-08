import { Plugin, App } from 'vue'

import { installComponent } from './component'

export const UseModals: Plugin = {
  install(app: App) {
    installComponent(app)
  }
}
