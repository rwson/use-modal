import Vue from 'vue'

import { injectMethods } from './method'
import { installComponent } from './component'

export const install = (vm: typeof Vue) => {
  injectMethods(vm)
  installComponent(vm)
}
