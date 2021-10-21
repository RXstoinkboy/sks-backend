import { ThemeTypes } from '../src/theme-provider/theme.types';

export const THEME_GLOBAL_CONTEXT_NAME = 'theme';

export const themeGlobalType = {
   [THEME_GLOBAL_CONTEXT_NAME]: {
      name: 'Theme',
      description: 'Global theme switcher',
      defaultValue: ThemeTypes.LIGHT_THEME,
      toolbar: {
         icon: 'circle',
         items: [
            {
               value: ThemeTypes.LIGHT_THEME,
               title: 'Light theme',
            },
            {
               value: ThemeTypes.DARK_THEME,
               title: 'Dark theme',
            },
         ],
         showName: true,
      },
   },
};
