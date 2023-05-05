
<template>
  <div style="margin-top: 30px;">
    <ElButton @click="openModal('globalModal', { content: 'global modal content' })">Open Global Modal</ElButton>
    <GlobalModal />
  </div>
</template>

<script>
import GlobalModal from './modals/global-modal.vue'

export default {
  name: 'global',
  components: {
    GlobalModal
  }
}
</script>
