import {
  createContext,
  useReducer,
  useCallback,
  useContext,
  FC,
  PropsWithChildren,
} from 'react'

import {
  reducer,
  initialState
} from './reducer'
import {
  ModalStateMap,
  Dispatcher
} from './types'

import { ModalAutoMounter } from './components/ModalAutoMounter'

const ModalContext = createContext<{
  state: ModalStateMap
  dispatch: Dispatcher
  defaultProps: Record<string, any>
}>({
  state: initialState,
  dispatch: () => undefined,
  defaultProps: {},
})

ModalContext.displayName = 'UMContext'

export const ModalProvider: FC<PropsWithChildren<any>> = ({ children, defaultProps = {} }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const dispatchAction: Dispatcher = useCallback((type, payload) => {
    //  @ts-ignore
    dispatch({ type, payload })
  }, [])

  const value = {
    state,
    defaultProps,
    dispatch: dispatchAction,
  } as any

  return (
    <ModalContext.Provider value={value}>
      <>
        <ModalAutoMounter />
        {children}
      </>
    </ModalContext.Provider>
  )
}

export const useModalContext = (): {
  state: ModalStateMap
  dispatch: Dispatcher
  defaultProps: Record<string, any>
} => useContext(ModalContext)
