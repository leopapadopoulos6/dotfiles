import { extendTheme } from '@chakra-ui/react';
import { defineStyleConfig } from '@chakra-ui/react' 
import { Box, useStyleConfig } from '@chakra-ui/react'

const Button = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderRadius: 'base', // <-- border radius is same for all variants and sizes
  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: 'sm',
      px: 4, // <-- px is short for paddingLeft and paddingRight
      py: 3, // <-- py is short for paddingTop and paddingBottom
    },
    md: {
      fontSize: 'md',
      px: 6, // <-- these values are tokens from the design system
      py: 4, // <-- these values are tokens from the design system
    },
  },
  // Two variants: outline and solid
  variants: {
    outline: {
      border: '2px solid',
      borderColor: 'blue',
      color: 'purple',
    },
    solid: {
      bg: 'purple',
      color: 'bg',
    },
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
})

const Card = defineStyleConfig({
  // The styles all Cards have in common
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    background: 'aqua',
    backgroundColor: 'aqua',
    alignItems: 'center',
    gap: 6,
  },
  // Two variants: rounded and smooth
  variants: {
    rounded: {
      color: 'aqua',
      padding: 8,
      borderRadius: 'xl',
      boxShadow: 'xl',
    },
    smooth: {
      backgroundColor: 'aqua',
      padding: 6,
      borderRadius: 'base',
      boxShadow: 'md',
    },
  },
  // The default variant value
  defaultProps: {
    variant: 'smooth',
  },
})

function Card(props) {
  const { variant, ...rest } = props

  const styles = useStyleConfig('Card', { variant })

  // Pass the computed styles into the `__css` prop
  return <Box __css={styles} {...rest} />
}

const Theme = extendTheme({
  components: {
    Button,
    Card
  },
  colors: {
    black: '#16161D',
    bg: '#282828',
    fg: '#ebdbb2',
    red: '#cc241d',
    yellow: '#d79921',
    green: '#98971a',
    blue: '#458588',
    purple: '#b16286',
    aqua: '#689d6a',
    gray: '#a89984'
  },
  styles: {
    global: {
      html: {
        // scrollBehavior: 'smooth',
      },
      '::selection': {
        background: 'red.400',
      },
    },
  },
  fonts: {
    heading: 'Hanson, sans-serif',
    body: 'Manrope, sans-serif',
  },
  shadows: {
    gray: '0 0 1px 2px rgba(75, 85, 99, .75)',
  },
  sizes: {
    header: {
      height: '6.5625rem',
    },
  }
});

export default Theme;