
<template>
  <div style="margin-top: 30px;">
    <div style="margin-top: 10px;">
      <ElButton @click="openModal('normalModal')">Open NormalModal</ElButton>
    </div>
    <div style="margin-top: 10px;">
      <ElButton @click="() => openAndUpdate()">Open NormalModal and update props after 3s (No Merge)</ElButton>
    </div>
    <div style="margin-top: 10px;">
      <ElButton @click="openAndUpdate(true)">Open NormalModal and update props after 3s (Merge Props)</ElButton>
    </div>
    <NormalModal />
  </div>
</template>

<script>
import NormalModal from './modals/normal-modal.vue'

export default {
  name: 'normal',
  components: {
    NormalModal
  },
  methods: {
    openAndUpdate(merge) {
      this.openModal('normalModal', { content: 'modal init content' })

      setTimeout(() => {
        if (merge) {
          this.updateModal('normalModal', { desc: 'modal updated content', merge }, merge)
          return
        }
        this.updateModal('normalModal', { desc: 'modal updated content' })
      }, 3000)
    }
  }
}
</script>