import { defineComponent } from 'vue'
import { Button, Modal } from 'ant-design-vue'
import { UseModal, useCloseModal, useOpenModal, useUpdateModal } from '@usemodals/vue3'

export default defineComponent({
  setup() {
    const openModal = useOpenModal()
    const closeModal = useCloseModal()
    const updateModal = useUpdateModal()

    const openAndUpdate = (merge?: boolean) => {
      openModal('modalIdDemo', { title: 'init modal title', content: 'init modal content' })
      setTimeout(() => {
        updateModal('modalIdDemo', { content: 'update modal content' }, merge)
      }, 3000)
    }

    return () => (
      <div>
        <UseModal modalId="modalIdDemo">
          {{
            modal: (modalState) => (
              <Modal visible={modalState.visible} title={modalState.props.title} onCancel={() => closeModal('modalIdDemo')}>
                { modalState.props.content }
              </Modal>
            )
          }}
        </UseModal>

        <Button onClick={() => openModal('modalIdDemo', { title: 'MODAL TITLE' })}>demo open modal</Button>
        <Button onClick={() => openAndUpdate()}>demo open modal and update props after 3s(override props)</Button>
        <Button onClick={() => openAndUpdate(true)}>demo open modal and update props after 3s(merge props)</Button>
      </div>
    )
  }
})

