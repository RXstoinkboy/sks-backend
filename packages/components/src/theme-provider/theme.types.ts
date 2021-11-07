import { colorMatrix } from './colorMatrix';

type ThemeColor = keyof typeof colorMatrix;

export enum ThemeTypes {
   LIGHT_THEME = 'lightTheme',
   DARK_THEME = 'darkTheme',
}
export type Theme = {
   name: ThemeTypes;
   primary: ThemeColor;
   secondary: ThemeColor;
   textPrimary: ThemeColor;
   textSecondary: ThemeColor;
   warningPrimary: ThemeColor;
   warningSecondary: ThemeColor;
   errorPrimary: ThemeColor;
   errorSecondary: ThemeColor;
   notificationPrimary: ThemeColor;
   notificationSecondary: ThemeColor;
};
