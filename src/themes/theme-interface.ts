export type themes = 'portal' | 'login';

export interface Props {
  slot?: JSX.Element;
  theme?: themes;
}