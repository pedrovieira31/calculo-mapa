import { useCallback, useRef } from 'react'

/**
 * @function fn callback function
 * @param delay number
 * @returns function to be called when delay time equal 0
 */

export const useDebounce = () => {
  const timeOutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const debounced = useCallback((fn: () => void, delay: number) => {
    if (timeOutRef.current) clearTimeout(timeOutRef.current)

    timeOutRef.current = setTimeout(() => {
      fn()
    }, delay)
  }, [])

  return { debounced }
}
