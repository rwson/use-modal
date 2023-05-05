<template>
  <UseModal modalId="normalModal">
    <template slot-scope="modalState">
      <ElDialog :visible="modalState.visible" title="normal modal title" @close="closeModal('normalModal')">
        {{ modalState.props }}
        <p>
          this modal will be unregistered when {{ path }} is deactived, and it will be register again when {{ path }} is actived
        </p>
      </ElDialog>
    </template>
  </UseModal>
</template>
<script>
export default {
  name: 'normalModal',
  computed: {
    path() {
      return this.$route.path
    }
  }
}
</script>