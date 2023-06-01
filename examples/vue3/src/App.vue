<script setup lang="ts">
import { useOpenModal, useUpdateModal } from '@usemodals/vue3'
import { Button } from 'ant-design-vue'

const openModal = useOpenModal()
const updateModal = useUpdateModal()

const openAndUpdate = (merge?: boolean) => {
  openModal('modalId', { title: 'init modal title', content: 'init modal content' })
  setTimeout(() => {
    updateModal('modalId', { content: 'update modal content' }, merge)
  }, 3000)
}

import Demo from './demo'
import Test from './test.vue'
</script>

<template>
  <Button @click="openModal('modalId', { title: 'MODAL TITLE' })">open modal</Button>
  <Button @click="() => openAndUpdate()">open modal and update props after 3s(override props)</Button>
  <Button @click="openAndUpdate(true)">open modal and update props after 3s(merge props)</Button>

  <Demo />
  <Test />
</template>

