# @use-modals/vue3

> an eaist way to open/close modals and pass props to modals, or register an dynmaic modal and you can use these modals globally, for Vue 3.x

## Install

```bash
npm install @use-modals/vue3
```

## QuickStart

```typescript
//	main.ts
import Vue from 'vue'
import UseModals from '@use-modals/vue3'

import App from './app.vue'

const app = createApp(App)

//	balabala
app.use(UseModals)

app.mount('#app')
```

## Available Components and Functions

- `UseModal`, is a component that provides a scope slot named `modalState` to access the `visible` and `props` information of the current modal, the component receives two `props`, namely `modalId` And `isGlobal`, `modalId` identifies the unique ID of the current modal, `isGlobal` specifies whether this registration is a global registration, if you want to save the memory of the application, it is not recommended to set it to `true`

```vue
<template>
	<!-- Register the modal globally, it will still reside in memory no matter whether the current component is unmounted or not  -->
	<UseModal modalId="globalModalId" :isGlobal>
  	<template #modal="modalState">
      <ThirdPartyModal :visible="modalState.visible" :title="modalState.props.title">
        {{ modalState.props }}
  		</ThirdPartyModal>
    </template>
  </UseModal>

	<!-- Partially registers the modal, which will be unloaded from memory as the parent component unloads  -->
	<UseModal modalId="partModalId">
  	<template #modal="modalState">
			<!-- balabala -->
    </template>
  </UseModal>
</template>
```

- `useOpenModal`, it's return a method to open a registered modal, and receive 2 parameters, one is the `modalId` when registering the modal, and the second is the `props` that needs to be passed to open a certain modal, The second parameter is optional

```vue
<template>
  <Button @click="openModal('modalIdToBeOpen', { propsKey: 'string', propsKey2: 'string2' })">
    open Modal
  </Button>
</template>
<script setup lang="ts">
import { useOpenModal } from '@use-modals/vue3'

const openModal = useOpenModal()
</script>
```

- `useUpdateModal`, it's return a method to update the value of `props` in a modal that has been opened, and receive 3 parameters, one is the `modalId` when registering the modal, the second is the new `props`, The third is a boolean value, indicating whether to merge with the old `props` or directly overwrite, where the third parameter is optional

```vue
<template>
	<div>    
    <Button @click="() => openAndUpdate()">
      open Modal and update
    </Button>
     <Button @click="openAndUpdate(true)">
      open Modal and update(merge)
    </Button>
  </div>
</template>
<script setup lang="ts">
import { useOpenModal, useUpdateModal } from '@use-modals/vue3'
const openModal = useOpenModal()
const updateModal = useUpdateModal()

const openAndUpdate = (merge?: boolean) => {
  openModal('modalIdToBeUpdate', { title: 'init modal title', content: 'init modal content' })
  setTimeout(() => {
    updateModal('modalIdToBeUpdate', { content: 'update modal content' }, merge)
  }, 3000)
}
</script>
```

- `useCloseModal`, it's return a method to close a modal that has been opened, and receive 1 parameter, which is the `modalId` when registering the modal

```vue
<template>
	<Button @click="closeModal('modalIdToBeClose')">
    close Modal
  </Button>
</template>
<script setup lang="ts">
import { useCloseModal } from '@use-modals/vue3'

const closeModal = useCloseModal()
</script>
```

- `useCloseAllModals`, it's return a method to close all opened modals without any parameters

```vue
<template>
	<Button @click="closeAllModals">
    close all Modals
  </Button>
</template>
<script setup lang="ts">
import { useCloseAllModals } from '@use-modals/vue3'

const closeAllModals = useCloseAllModals()
</script>
```