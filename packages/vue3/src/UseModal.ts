import { onBeforeUnmount, useSlots, computed, defineComponent } from 'vue'
import { useRegisterModal, useRemoveModal } from './hooks'
import { state } from './state'

interface Props {
  readonly modalId: string
  readonly isGlobal?: boolean
}

const modalState = computed(() => state[props.modalId])
const slots = useSlots()

export default defineComponent({
  name: 'UseModal',
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
    
    registerModal(props.modalId)
    
    onBeforeUnmount(() => {
      if (!props.isGlobal) {
        removeModal(props.modalId)
      }
    })

    const modalState = computed(() => state[props.modalId])
    return () => context.slots?.modal?.(modalState.value)    
  }
})