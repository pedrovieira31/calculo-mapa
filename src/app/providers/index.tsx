'use client'

import { PropsWithChildren, ReactNode } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { NextUIProvider } from '@nextui-org/react'
import { queryClient } from '@shared'

type TProvidersProps = {
  children: ReactNode
}

export function Providers({ children }: PropsWithChildren) {
  const composeProviders =
    (
      ...providers: {
        ({ children }: TProvidersProps): JSX.Element
      }[]
    ) =>
    (props: { children: ReactNode }) =>
      providers.reduceRight(
        (children, Provider) => <Provider {...props}>{children}</Provider>,
        props.children
      )

  const AllProviders = composeProviders()

  return (
    <NextUIProvider>
      <QueryClientProvider client={queryClient}>
        <AllProviders>{children}</AllProviders>
      </QueryClientProvider>
    </NextUIProvider>
  )
}
