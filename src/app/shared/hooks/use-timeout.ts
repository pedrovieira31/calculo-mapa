'use client'

import { useCallback, useEffect } from 'react'

/**
 * @param situation situation to invoke callback function
 * @param updateSituation callback function to be called with situation return true
 * @param time time in ms to reset initial situation param
 * @example
 * const [desactived, setDesactived] = useState(true);
 * const situation = desactived;
 * const updateSituation = () => setDesactived(false);
 * const time = animatedTension; // in ms
 * useTimeout(situation, updateSituation, time);
 */

export const useTimeout = (situation: boolean, updateSituation: () => void, time: number) => {
  const resetSituation = useCallback(() => {
    if (situation) {
      const timeRef = () =>
        setTimeout(() => {
          updateSituation()
        }, time)

      timeRef()

      return clearTimeout(timeRef())
    }
  }, [situation, time, updateSituation])

  useEffect(() => {
    resetSituation()
  }, [resetSituation])
}
