import { withThemeProvider } from './decorators';
import { themeGlobalType } from './globalTypes';

export const parameters = {
   actions: { argTypesRegex: '^on[A-Z].*' },
   controls: {
      matchers: {
         color: /(background|color)$/i,
         date: /Date$/,
      },
   },
};

export const decorators = [withThemeProvider];

export const globalTypes = { ...themeGlobalType };
