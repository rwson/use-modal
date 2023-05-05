import Vue from 'vue'

import { state } from './state'

export const installComponent = (vm: typeof Vue) => {
  vm.component<any, any, any, Record<string, any>>('UseModal', {
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
    created() {
      if (!state[this.modalId]) {
        this.__registerModal__(this.modalId)
      }
    },
    beforeDestroy() {
      if (!this.isGlobal) {
        this.__removeModal__(this.modalId)
      }
    },
    computed: {
      modalState() {
        const currentState = state[this.modalId]

        return {
          visible: currentState?.visible,
          props: currentState?.props ?? {}
        }
      }
    },
    render() {
      return this.$scopedSlots.default(this.modalState)
    }
  })
}
