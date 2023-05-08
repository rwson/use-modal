import React, { createElement, useEffect, useMemo, useState } from 'react'
import { Modal, Button } from 'antd'
import { useOpenModal, useUpdateModal } from '@usemodals/react'

import Lazy1 from './lazy-modals/modal-1'

export default () => {
  const [ state, setState ] = useState({
    visible: true,
    content: 'test111'
  })

  const openModal = useOpenModal()
  const updateModal = useUpdateModal()

  return (
    <div>
      <Button onClick={() => {
        openModal('modal1', {
          title: 'Modal1',
          content: 'I\' init props'
        })
      }} >
        Open Normal Modal
      </Button>
      <Button onClick={() => {
        openModal('modal1', {
          title: 'Modal1',
          content: 'I\' init props'
        })

        setTimeout(() => {
          updateModal('modal1', {
            content: 'I\'m updated props'
          }, true)
        }, 5000)
      }}>
        Open UpdateAble Modal(merge props)
      </Button>
      <Button onClick={() => {
        openModal('modal1', {
          title: 'Modal1',
          content: 'I\' init props'
        })

        setTimeout(() => {
          updateModal('modal1', {
            content: 'I\'m updated props'
          })
        }, 5000)
      }}>
        Open UpdateAble Modal
      </Button>
    </div>
  );
};
