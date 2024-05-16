import { ComponentProps } from 'react';
import * as stylex from '@stylexjs/stylex';
import { colors, spacing } from './tokens.stylex';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'danger';
  isLarge?: boolean;
  styles: stylex.StyleXStyles<{margin: 1 | 5 | 10 }>;
  // styles: stylex.StyleXStylesWithout<{margin: unknown }>;
} & ComponentProps<'button'>;

export function Button({ variant = 'primary', isLarge = false, styles, ...props }: ButtonProps) {
  return (
    <button {...stylex.props(BUTTON_STYLES.base, BUTTON_STYLES[variant], isLarge && BUTTON_STYLES.large, styles)} {...props} />
  );
}

const BUTTON_STYLES = stylex.create({
  base: {
    border: 'none',
    background: 'none',
    borderRadius: spacing.borderRadius,
    padding: '0.5em 1em',
    cursor: 'pointer',
  },
  primary: {
    color: '#fff',
    // backgroundColor: {
    //   default: "#3399FF",
    //   ':hover': "#000",
    //   '@media (prefers-color-scheme: light)': {
    //     default: "pink",
    //     ':hover': 'darkblue',
    //   }
    // },
    backgroundColor: {
      default: colors.primaryColor,
      ':hover': colors.primaryDarkColor,
    },
  },
  secondary: {
    color: '#fff',
    backgroundColor: "#9999FF",
  },
  danger: {
    color: '#fff',
    backgroundColor: "#FF0000",
  },
  large: {
    fontSize: '3em',
  }
});