import { Plugin, App } from 'vue'

import { installComponent } from './component'

export const UseModalsPlugin: Plugin = {
  install(app: App) {
    installComponent(app)
  }
}
