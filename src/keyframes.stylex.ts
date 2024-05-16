import * as stylex from '@stylexjs/stylex';

const logoSpinKeyframe = stylex.keyframes({
  from: {
    transform: 'rotate(0deg)',
  },
  to: {
    transform: 'rotate(360deg)',
  },
});

export const logoSpinVars = stylex.defineVars({
  animationName: logoSpinKeyframe,
  animationIterationCount: 'infinite',
  animationDelay: '20s',
  animationTimingFunction: 'linear',
});
