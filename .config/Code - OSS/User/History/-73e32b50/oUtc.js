import { defineStyleConfig } from '@chakra-ui/react' 

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

export default Card
  
  // function CardComponent(props) {
  //   const { variant, ...rest } = props
  
  //   const styles = useStyleConfig('Card', { variant })
  
  //   // Pass the computed styles into the `__css` prop
  //   return <Box __css={styles} {...rest} />
  // }