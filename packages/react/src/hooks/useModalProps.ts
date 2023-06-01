import { useModalContext } from '../context'

type UseModalPropsReturn<T> = (id: string) => T | undefined

export const useModalProps = <T = any>(): UseModalPropsReturn<T> => {
  const { state } = useModalContext()

  return (id: string) => state[id]?.props as T
}
