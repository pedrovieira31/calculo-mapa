import { TCacheName, TTimeToRefetchCache } from '@types'
import { timeToRefetchCache } from '@utils'
import { InitialDataFunction, QueryFunction, useQuery } from '@tanstack/react-query'

type TUseQueryData<T> = {
  getDataFn: (params?: QueryFunction['arguments']) => Promise<T | undefined>
  cacheName: TCacheName
  cacheTime: TTimeToRefetchCache
  enabled?: boolean
  initialData?: T | InitialDataFunction<T>
}

/**
 * Custom hook to fetch data and manage caching using react-query.
 *
 * @template T - The type of the returned data object.
 * @param {QueryFunction<T | undefined>} getDataFn - Async function to get data. Should return a promise resolving to the data object.
 * @param {TCacheName} cacheName - The name of the cache to be created.
 * @param {TTimeToRefetchCache} cacheTime - The time duration to refetch the cache.
 * @param {boolean} [enabled=true] - Optional parameter to enable or disable the query.
 * @param {T | InitialDataFunction<T>} [initialData] - Optional initial data for the query.
 * @returns {Object} - Contains `data` and all other methods returned by useQuery.
 * @example
 * const getDataFn = async (): Promise<TWordCount> => ({}) as TWordCount;
 * const { data } = useQueryData({
      cacheName: ['example'],
      cacheTime: '12-hours',
      getDataFn: getExampleFn,
    };
 */

export function useQueryData<T>({
  cacheName,
  cacheTime,
  enabled,
  initialData,
  getDataFn
}: TUseQueryData<T>) {
  const staleTime = timeToRefetchCache[cacheTime]

  const { data, ...rest } = useQuery({
    queryKey: [cacheName],
    queryFn: getDataFn,
    refetchOnWindowFocus: false,
    staleTime,
    enabled,
    initialData
  })

  return {
    data,
    ...rest
  }
}
