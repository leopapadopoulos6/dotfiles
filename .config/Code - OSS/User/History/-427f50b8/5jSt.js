import { extendTheme } from '@chakra-ui/react';
import { defineStyleConfig } from '@chakra-ui/react' 
import { Box, useStyleConfig } from '@chakra-ui/react'
import Button from './Button';

const Card = defineStyleConfig({
  // The styles all Cards have in common
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 6,
  },
  // Two variants: rounded and smooth
  variants: {
    rounded: {
      padding: 8,
      borderRadius: 'xl',
      boxShadow: 'xl',
    },
    smooth: {
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

// function CardComponent(props) {
//   const { variant, ...rest } = props

//   const styles = useStyleConfig('Card', { variant })

//   // Pass the computed styles into the `__css` prop
//   return <Box __css={styles} {...rest} />
// }

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