import React from 'react';
import { ThemeProvider } from '../src/theme-provider/theme-provider';
import * as themes from '../src/theme-provider/themes';
import { THEME_GLOBAL_CONTEXT_NAME } from './globalTypes';

const getCurrentTheme = (themeName) => themes[themeName];

export const withThemeProvider = (Story, context) => {
   return (
      <ThemeProvider
         theme={getCurrentTheme(context.globals[THEME_GLOBAL_CONTEXT_NAME])}
      >
         <Story />
      </ThemeProvider>
   );
};
