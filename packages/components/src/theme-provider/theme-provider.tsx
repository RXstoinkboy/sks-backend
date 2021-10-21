import React, { PropsWithChildren } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { Theme } from './theme.types';
import { lightTheme } from './themes';

type ThemeProviderProps = {
   theme: Theme;
};

export const ThemeProvider = ({
   theme = lightTheme,
   ...props
}: PropsWithChildren<ThemeProviderProps>): JSX.Element => {
   return (
      <>
         <StyledThemeProvider theme={theme}>
            {props.children}
         </StyledThemeProvider>
      </>
   );
};
