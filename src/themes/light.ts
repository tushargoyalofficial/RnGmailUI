import { createTheme } from '@shopify/restyle';

// Palette
const p = {
  black: 'black',
  red: 'red',
  blue: 'blue',
  yellow: 'yellow',
  paper00: '#FFFFFF',
  paper10: '#F5F5F4',
  paper20: '#E6E6E6',
  paper300: '#767577',
  paper900: '#202020',
  blue70: '#2185D0',
  navy20: '#171A21',
  navy900: '#B9BABC',
};

const theme = createTheme({
  spacing: {
    '0': 0,
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    xxl: 48,
    hg: 128,
  },
  breakpoints: {
    phone: 0,
    tabled: 760,
  },
  colors: {
    black: p.black,
    red: p.red,
    blue: p.blue,
    yellow: p.yellow,

    $primary: p.blue70,
    $windowBackground: '#F0F0F0',
    $background: p.paper10,
    $foreground: p.paper900,
    $sidebarBackground: p.navy20,
    $sidebarForeground: p.navy900,
    $sidebarSeparator: p.paper00 + '20',
    $headerBarBackground: p.paper20,
  },
  borderRadii: {
    xs: 4,
    sm: 16,
    md: 24,
    lg: 64,
    hg: 128,
  },
  textVariants: {
    defaults: {
      color: '$foreground',
      fontSize: 16,
    },
    sidebar: {
      color: '$sidebarForeground',
    },
  },
  barVariants: {
    headerBar: {
      bg: '$headerBarBackground',
      borderRadius: 'hg',
    },
  },
});

export default theme;
export type Theme = typeof theme;
