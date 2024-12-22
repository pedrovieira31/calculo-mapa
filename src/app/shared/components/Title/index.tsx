import { ReactNode } from 'react'
import { VariantProps } from 'tailwind-variants'
import { titleTv } from './TitleTV'

export interface TitleProps extends VariantProps<typeof titleTv> {
  title: ReactNode
  className?: string
  as?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export function Title({ as, title, size, className, color, weight, align, ...props }: TitleProps) {
  const Comp = as ?? 'h1'
  return (
    <Comp
      {...props}
      className={titleTv({
        size,
        align,
        className,
        color,
        weight
      })}
    >
      {title}
    </Comp>
  )
}
