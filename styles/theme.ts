import { 
  extendTheme, 
  type ThemeConfig, 
  // withDefaultProps, 
  // withDefaultSize, 
  // withDefaultVariant 
} from "@chakra-ui/react"

// Color mode config
const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

// Global styles
const overrides = {
  /*  
    styles: {
      global: (props) => ({
        body: {
            ? override global styling here
          }
        })
      }
  */
}

// CASLounge custom theme setup
const colors = {
  // ? Set your caslounge's color theme here
}

const sematicTokens = {
  /*
    colors: {
        error: 'red.500',
        text: {
          default: 'gray.900',
          _dark: 'gray.50',
        },
      },
    },
  */
}

const components = {
  // ?  customize components here
  /*
    NameOfTheComponent: {
      style object for base or default style
      baseStyle: {},
      styles for different sizes ("sm", "md", "lg")
      sizes: {},
      styles for different visual variants ("outline", "solid")
      variants: {},
      default values for `size` and `variant`
      defaultProps: {
        size: '',
        variant: '',
      },
    }
  */
}

const theme = {
  overrides,
  colors,
  components,
  config,
  sematicTokens
}

export default extendTheme(theme)