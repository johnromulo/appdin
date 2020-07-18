import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      backgoundPrimary: string;
      backgoundSecondary: string;
      primary: string;
      textPrimary: string;
      textSecundary: string;
      positive: string;
      danger: string;
      warning: string;
      info: string;
    };
  }
}
