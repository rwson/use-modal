import React from 'react'
import { Modal } from 'antd'

import { useCloseModal } from '@usemodals/react'

export default (props) => {
  const { closeModal } = useCloseModal()

  return (
    <Modal {...props} onCancel={() => {
      closeModal('modal1')
    }}>
      Lazy Load Modal1
      {props}
    </Modal>
  )
}