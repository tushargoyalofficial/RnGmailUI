import light, {Theme} from './light';
import dark from './dark'

export type IThemeNames = 'light' | 'dark';
export interface IThemeMeta {
  id: IThemeNames;
  name: string;
  theme: Theme;
}

export const themes: readonly IThemeMeta[] = [
  {
    id: 'light',
    name: 'Default Light',
    theme: light,
  },
  {
    id: 'dark',
    name: 'Default Dark',
    theme: dark,
  },
];

export type {Theme};
