import { install } from './plugin'

export default install

declare module 'vue/types/vue' {
  interface Vue {
    openModal(id: string, props?: Record<string, any>): void
    updateModal(id: string, props: Record<string, any>, merge?: boolean): void
    closeModal(id: string): void
    closeAllModals(): void
  }
}