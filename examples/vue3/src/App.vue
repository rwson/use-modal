<script setup lang="ts">
import { useOpenModal, useCloseModal, useUpdateModal } from '@use-modals/vue3'
import { Modal, Button } from 'ant-design-vue'

const openModal = useOpenModal()
const closeModal = useCloseModal()
const updateModal = useUpdateModal()

const openAndUpdate = (merge?: boolean) => {
  openModal('modalId', { title: 'init modal title', content: 'init modal content' })
  setTimeout(() => {
    updateModal('modalId', { content: 'update modal content' }, merge)
  }, 3000)
}
</script>

<template>
  <UseModal modalId="modalId">
    <template #modal="modalState">
      <Modal :visible="modalState.visible" @cancel="closeModal('modalId')">
        {{ modalState.props }}
      </Modal>
    </template>
  </UseModal>

  <Button @click="openModal('modalId', { title: 'MODAL TITLE' })">open modal</Button>
  <Button @click="() => openAndUpdate()">open modal and update props after 3s(override props)</Button>
  <Button @click="openAndUpdate(true)">open modal and update props after 3s(merge props)</Button>
</template>

