<template>
  <UseModal modalId="globalModal" isGlobal>
    <template slot-scope="modalState">
      <ElDialog :visible="modalState.visible" title="global modal title" @close="closeModal('globalModal')">
        {{ modalState.props }}
        <p>
          this modal will not be unregistered when {{ path }} is deactived, and it will still in memory
        </p>
      </ElDialog>
    </template>
  </UseModal>
</template>
<script>
export default {
  name: 'globalModal'
}
</script>