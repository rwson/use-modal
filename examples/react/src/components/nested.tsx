import React from 'react'
import { Modal, Button } from 'antd'

import { useRegisterModal, useOpenModal, useCloseModal } from '@usemodals/react'


const OutModal = (props) => {
  const { closeModal } = useCloseModal()
  const open = useOpenModal()

  return (
    <Modal {...props} onCancel={() => closeModal('out-modal')}>
      <p>I'm Out Modal</p>
      <Button onClick={() => open('child-modal')}>
        Open Nested Modal
      </Button>
    </Modal>
  )
}

const ChildModal = (props) => {
  const { closeModal, closeAllModals } = useCloseModal()

  return (
    <Modal {...props} onCancel={() => closeModal('child-modal')} width="400px">
      <p>I'm Nested Modal</p>
      <Button onClick={closeAllModals}>Close All Modals</Button>
    </Modal>
  )
}

export default () => {
  const open = useOpenModal()

  useRegisterModal({
    'out-modal': {
      component: OutModal
    },
    'child-modal': {
      component: ChildModal
    }
  })

  return (
    <div>
      <Button
        onClick={() => open('out-modal')}
      >
        Open Out Modal
      </Button>
      
    </div>
  );
};
