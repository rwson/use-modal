<template>
  <UseModal modalId="globalModal" isGlobal>
    <template slot-scope="modalState">
      <ElDialog :visible="modalState.visible" title="global modal title" @close="closeModal('globalModal')">
        {{ modalState.props }}
      </ElDialog>
    </template>
  </UseModal>
</template>
<script>
export default {
  name: 'globalModal'
}
</script>