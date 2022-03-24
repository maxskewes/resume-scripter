export const ButtonStyle = {
  // The styles all button have in common
  baseStyle: {
    fontWeight: 600,
    textTransform: 'uppercase',
    borderRadius: '4px',
    color: 'WHITE',
    width: 120,
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
      bg: 'ORANGE',
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
    update: {
      bg: 'GRAY',
      height: '32px',
      color: 'BLACK',
      width: '70px',
      textTransform: 'none',
      padding: 0,
    },
    start: {
      bg: 'ORANGE',
      color: 'WHITE',
      width: '70px',
      textTransform: 'none',
      padding: 0,
    },
    text: {
      bg: 'transparent',
      color: 'NAVY_LIGHT',
      fontSize: 14,
      textTransform: 'none',
      width: 'auto',
    },
    wxIcon: {
      bg: 'transparent',
      border: '1px solid',
      borderColor: 'GRAY',
      color: 'GRAY_2',
      width: 8,
      height: 8,
      marginLeft: 1,
      marginRight: 1,
    },
    protip: {
      bg: '#F7Fafc',
      border: '1px solid',
      borderColor: 'NAVY_LIGHT',
      color: 'NAVY_LIGHT',
      fontSize: '14px',
      width: '100px',
      height: '45px',
      fontWeight: 700,
      _hover: {
        bg: 'NAVY_LIGHT',
        color: 'WHITE',
      },
    },
    modalClose: {
      bg: 'NAVY_LIGHT',
      _hover: {
        bg: '#142466',
      },
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
