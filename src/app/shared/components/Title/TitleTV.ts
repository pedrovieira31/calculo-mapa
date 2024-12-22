import { tv } from 'tailwind-variants'

export const titleTv = tv({
  base: 'duration-500 m-0',
  variants: {
    size: {
      '2xl': 'md:text-lg lg:text-xl xl:text-2xl',
      xl: 'text-lg xl:text-xl',
      lg: 'md:text-md lg:text-lg',
      md: 'text-sm md:text-md'
    },
    weight: {
      bold: 'font-bold',
      normal: 'font-normal',
      light: 'font-light',
      'semi-bold': 'font-500',
      black: 'font-black'
    },
    color: {
      secondary: 'text-green-400',
      gray: 'text-gray-400',
      black: 'text-black',
      white: 'text-white'
    },
    align: {
      center: 'text-center'
    }
  },
  defaultVariants: {
    size: 'lg',
    weight: 'normal',
    fontFamily: 'inter',
    color: 'black'
  }
})
