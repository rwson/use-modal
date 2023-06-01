import { defineComponent } from 'vue'
import { Modal } from 'ant-design-vue'

import { UseModal, useModalProps, useCloseModal } from '@usemodals/vue3'

export default defineComponent({
  setup() {
    const modalProps = useModalProps()
    const closeModal = useCloseModal()

    return () => (
      <UseModal modalId="modalIdDemo">
        {{
          modal: (modalState) => (
            <Modal visible={modalState.visible} title={modalState.props.title} onCancel={() => closeModal('modalIdDemo')}>
              { modalState.props.content }
            </Modal>
          )
        }}
      </UseModal>
    )
  }
})
