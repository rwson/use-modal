# @usemodals/vue

![](https://i.328888.xyz/2023/05/08/i1dV1H.png)

> an eaist way to open/close modals and pass props to modals, or register an dynmaic modal and you can use these modals globally, for Vue 2.x

## Install

```bash
npm install @usemodals/vue
```

## QuickStart

```typescript
  //	main.ts
  import Vue from 'vue'
  import UseModals from '@usemodals/vue'

  import App from './app.vue'

  //	balabala
  Vue.use(UseModals)

  new Vue({
    el: '#app',
    render: h => h(App)
  })
  ```

## Available Components and Functions

- `UseModal`, is a component that provides a scope slot named `modalState` to access the `visible` and `props` information of the current modal, the component receives two `props`, namely `modalId` And `isGlobal`, `modalId` identifies the unique ID of the current modal, `isGlobal` specifies whether this registration is a global registration, if you want to save the memory of the application, it is not recommended to set it to `true`

```vue
  <template>
    <!-- Register the modal globally, it will still reside in memory no matter whether the current component is unmounted or not  -->
    <UseModal modalId="globalModalId" :isGlobal>
      <template slot-scope="modalState">
        <ThirdPartyModal :visible="modalState.visible" :title="modalState.props.title">
          {{ modalState.props }}
        </ThirdPartyModal>
      </template>
    </UseModal>

    <!-- Partially registers the modal, which will be unloaded from memory as the parent component unloads  -->
    <UseModal modalId="partModalId">
      <template slot-scope="modalState">
        <!-- balabala -->
      </template>
    </UseModal>
  </template>
  ```

- `openModal`, call this method to open a registered modal, and receive 2 parameters, one is the `modalId` when registering the modal, and the second is the `props` that needs to be passed to open a certain modal, The second parameter is optional

```vue
  <template>
    <Button @click="openModal('modalIdToBeOpen')">
      open Modal
    </Button>
  </template>
  ```



- `updateModal`, call this method to update the value of `props` in a modal that has been opened, and receive 3 parameters, one is the `modalId` when registering the modal, the second is the new `props`, The third is a boolean value, indicating whether to merge with the old `props` or directly overwrite, where the third parameter is optional

```vue
  <template>
    <div>    
      <Button @click="openAndUpdate">
        open Modal and update
      </Button>
      <Button @click="openAndUpdate">
        open Modal and update(merge)
      </Button>
    </div>
  </template>
  <script>
    export default {
      name: 'ComponentName',
      methods: {
        openAndUpdate() {
          //	in this time, modal's props should be { content: 'balabala' }
          this.openModal('modalIdToBeUpdate', { content: 'balabala' })
          
          setTimeout(() => {
            //	in this time, globalmodal's props should be { desc: 'balabala' }
            this.updateModal('modalIdToBeUpdate', { desc: 'balabala' })
          }, 5000)
        },
        openAndMergeUpate() {
          //	in this time, modal's props should be { content: 'balabala' }
          this.openModal('modalIdToBeUpdate', { content: 'balabala' })
          
          setTimeout(() => {
            //	in this time, globalmodal's props should be { content: 'balabala', desc: 'balabala' }
            this.updateModal('modalIdToBeUpdate', { desc: 'balabala' }, true)
          }, 5000)
        }
      }
    }
  </script>
  ```

- `closeModal`, call this method to close a modal that has been opened, and receive 1 parameter, which is the `modalId` when registering the modal

```vue
  <template>
    <Button @click="closeModal('modalIdToBeClose')">
      close Modal
    </Button>
  </template>
  ```

- `closeAllModals`, call this method to close all opened modals without any parameters

  ```vue
  <template>
    <Button @click="closeAllModals">
      close all Modals
    </Button>
  </template>
  ```

- `getModalProps`, call this method to get the modal props, and receive 1 parameter, which is the `modalId` when registering the modal
### Motivation

- reduce unnecessary business code
- easier to controll modal display/hidden or update modals' props
- common modal props

For detail demo, check [here](https://github.com/rwson/use-modal/tree/main/examples/vue)