import light, {Theme} from './light';
import dark from './dark';
import nord from './nord';
import solarized from './solarized-dark';

export type IThemeNames = 'light' | 'dark' | 'nord' | 'solarized';
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
  {
    id: 'nord',
    name: 'Nord Theme',
    theme: nord,
  },
  {
    id: 'solarized',
    name: 'Solarized Dark',
    theme: solarized,
  },
];

export type {Theme};
