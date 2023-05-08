import { useCallback } from 'react'

import { ModalActionType } from '../constants'
import { useModalContext } from '../context'

type UseUpdateModalReturn<T> = (id: string, params: T, merge?: boolean) => void

export const useUpdateModal = <T>(): UseUpdateModalReturn<T> => {
  const { state, dispatch, defaultProps } = useModalContext()

  const update = useCallback((id: string, props: T, merge?: boolean): void => {
    dispatch(ModalActionType.UpdateModal, {
      id,
      props: Object.assign({}, defaultProps, props),
      __mergeProps___: merge
    })
  }, [state])

  return update
}