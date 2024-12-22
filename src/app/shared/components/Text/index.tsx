import { VariantProps } from 'tailwind-variants'
import { textTv } from './TextTV'

export interface TextProps extends VariantProps<typeof textTv> {
  text: string | number
  className?: string
  htmlFor?: string
  as?: 'span' | 'small' | 'b' | 'label'
  onClick?: () => void
}

export function Text({
  as,
  text = '',
  size = 'sm',
  weight,
  color,
  className = '',
  align,
  textStyle,
  ...props
}: TextProps) {
  const Comp = as ?? 'p'

  return (
    <Comp {...props} className={textTv({ size, weight, color, align, className, textStyle })}>
      {text}
    </Comp>
  )
}
