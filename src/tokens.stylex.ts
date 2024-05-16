import * as stylex from '@stylexjs/stylex';

const LIGHT = '@media (prefers-color-scheme: light)';

export const colors = stylex.defineVars({
  primaryColor: {
    default: '#00AAFF',
    [LIGHT]: '#00FFAA',
  },
  primaryDarkColor: {
    default: '#0076BA',
    [LIGHT]: '#01AC01',
  },
});

export const spacing = stylex.defineVars({
  borderRadius: '0.25em',
});