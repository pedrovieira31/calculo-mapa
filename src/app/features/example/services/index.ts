import { TGetExampleRequest, TGetExampleResponse } from '@types'
import { api } from '@shared'

export const getExample = ({ id }: TGetExampleRequest) => {
  const endpoint = `.../${id}`

  const { data } = api.get<TGetExampleResponse>(endpoint)

  return data
}
