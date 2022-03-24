export const CheckboxStyle = {
  // The styles all button have in common
  baseStyle: {
    fontWeight: 600,
    textTransform: 'uppercase',
    borderRadius: '4px',
    color: 'RED',
  },
  sizes: {
    sm: {
      fontSize: 16,
      px: 7,
      py: 3,
      h: 10,
    },
    md: {
      // fontSize: 'md',
      // px: 6,
      // py: 4,
    },
  },
  variants: {
    solid: {
      bg: 'BLUE',
      _hover: {
        bg: 'ORANGE_HOVER',
        color: 'WHITE',
      },
      // _focus: {
      //   bg: 'ORANGE_HOVER',
      // },
    },
    outline: {
      bg: 'transparent',
      border: '1px solid',
      borderColor: 'GRAY',
    },
    // for development purposes only
    dev: {
      bg: 'GRAY',
      border: '3px solid',
      borderColor: 'purple',
      color: 'WHITE',
    },
    //////////
  },
  defaultProps: {
    size: 'sm',
    variant: 'solid',
  },
};
