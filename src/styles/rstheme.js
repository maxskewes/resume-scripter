import { extendTheme, theme as base } from '@chakra-ui/react';
import { ButtonStyle as Button } from './components/ButtonStyle';
import { HeadingStyle as Heading } from './components/HeadingStyle';
import { TextStyle as Text } from './components/TextStyle';
import { CheckboxStyle as RSCheckboxes } from './components/CheckboxStyle';

const rstheme = extendTheme({
  // Fonts
  fonts: {
    body: `Work Sans, ${base.fonts.heading}`,
    heading: `Work Sans, ${base.fonts.heading}`,
    text: 'Work Sans',
    link: 'Work Sans',
  },
  // Colors
  colors: {
    BLACK: '#333333',
    BLACKER: '#29292A',
    GRAY: '#C4C4C4',
    GRAY_2: '#989898',
    NAVY_LIGHT: '#2542BB',
    ORANGE: '#FF914D',
    orangeScheme: {
      100: '#FF914D',
      500:'#FF914D',
      900: '#e65800',
    },
    ORANGE_HOVER: '#e65800'
  },
  // Components
  components: {
    Button,
    Heading,
    Text,
    RSCheckboxes,
  },
});

export default rstheme;
