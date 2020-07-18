import React from 'react';
import { render } from 'react-native-testing-library';
import { ThemeProvider } from 'styled-components';

import darkTheme from '@styles/themes/dark';

import SignUp from '@pages/SignUp';

describe('SignIn page', () => {
  it('should', () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <SignUp />
      </ThemeProvider>,
    );

    // console.log('result', result);
  });
});
