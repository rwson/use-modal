<template>
  <UseModal modalId="modalId">
    <template #modal="modalState">
      <Modal :visible="modalState.visible" @cancel="closeModal('modalId')">
        {{ modalState.props }}
        <Button @click="getProps">
          get props
        </Button>
      </Modal>
    </template>
  </UseModal>
</template>
<script setup>
import { Modal, Button } from 'ant-design-vue'
import { UseModal, useModalProps, useCloseModal } from '@usemodals/vue3'

const closeModal = useCloseModal()
const getModalProps = useModalProps()

console.log(getModalProps)

const getProps = () => {
  console.log(getModalProps('modalId'))
}
</script>