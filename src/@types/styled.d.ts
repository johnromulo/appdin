import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      natural: {
        type1: string;
        type2: string;
      };
      primary: {
        type1: string;
      };
      secondary: {
        type1: string;
        type2: string;
      };
      suport: {
        type1: string;
        type2: string;
        type3: string;
        type4: string;
      };
    };
    border: {
      radius: {
        circle: (n: number) => number;
        medium: string;
        small: string;
      };
    };
    shadows: {
      type1: {
        shadowColor: string;
        shadowOffset: {
          width: number;
          height: number;
        };
        shadowOpacity: number;
        shadowRadius: number;
        elevation: number;
      };
    };
    fonts: {
      primary: string;
      mono: string;
      suport: string;
    };
    fontsSizes: {
      sm: number;
      md: number;
      xs: number;
      lg: number;
      xl: number;
      '2xl': number;
      '3xl': number;
      '4xl': number;
      '5xl': number;
      '6xl': number;
    };
    fontsWeight: {
      normal: number;
      medium: number;
      bold: number;
    };
    lineHights: {
      none: number;
      shorter: number;
      short: number;
      base: number;
      tall: number;
      taller: number;
    };
    letterSpacings: {
      tighter: number;
      tight: number;
      normal: number;
      wide: number;
      wider: number;
      widest: number;
    };
    spacings: {
      sp0: number;
      sp1: number;
      sp2: number;
      sp3: number;
      sp4: number;
      sp5: number;
      sp6: number;
      sp8: number;
      sp10: number;
      sp12: number;
      sp16: number;
      sp20: number;
      sp24: number;
      sp32: number;
      sp40: number;
      sp48: number;
      sp56: number;
      sp64: number;
    };
    zIndex: {
      hide: number;
      0: number;
      1: number;
      2: number;
      4: number;
      5: number;
      6: number;
      8: number;
      10: number;
      12: number;
      16: number;
      20: number;
    };
  }
}
