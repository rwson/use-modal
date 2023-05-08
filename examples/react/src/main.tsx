import React from 'react'
import { createRoot } from 'react-dom/client'
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom'
import { ModalProvider, useRegisterModal } from '@usemodals/react'

import Modal from './components/lazy-modals/modal-1'

import Normal from './components/normal'
import Nested from './components/nested'

import 'antd/dist/antd.css'
import { Space } from 'antd'

const AppRoute = () => {
  useRegisterModal({
    modal1: {
      component: Modal
    },
    modal1Lazy: {
      isLazy: true,
      loader: () => import('./components/lazy-modals/modal-1')
    }
  })

  return (
    <div>
      <div style={{
        marginBottom: '20px'
      }}>
        <Space size='large'>
          <Link to="/normal">normal useage and pass props</Link>
          <Link to="/nested">nested useage</Link>
          <Link to="/dynmaic">dynmaic useage</Link>
        </Space>
      </div>
      <Routes>
        <Route path="/normal" element={<Normal />} />
        <Route path="/nested" element={<Nested />} />
      </Routes>
    </div>
  )
}

const App = () => {
  return (
    <ModalProvider defaultProps={{
      width: '500px',
      centered: true,
      closeable: true,
    }}>
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
    </ModalProvider>
  );
};

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(<App />)
