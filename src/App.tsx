import { useState } from 'react';
import * as stylex from '@stylexjs/stylex';
import reactLogo from './assets/react.svg';
import './App.css';
import viteLogo from '/vite.svg';
import { Button } from './Button';
import { logoSpinVars } from './keyframes.stylex';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" >
          <img src={viteLogo} alt="Vite" {...stylex.props(styles.logo, styles.bigLogo, styles.logoReact)} />
        </a>
        <a href="https://react.dev" target="_blank" >
          <img src={reactLogo} alt="React" {...stylex.props(styles.logoReact, styles.logo, styles.logoSpin)} />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div {...stylex.props(styles.card)}>
        <Button variant="primary" isLarge={true} styles={styles.backgroudButton} onClick={() => setCount(count => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

const styles = stylex.create({
  bigLogo: {
    height: '15em',
  },
  backgroudButton: {
    // backgroundColor: 'green',
    margin: 1,
  },

  // Default vito styles below
  logo: {
    height: '6em',
    padding: '1.5em',
    WillChange: 'filter',
    transition: 'filter 300ms',

    ':hover': {
      filter: 'drop-shadow(0 0 2em #646cffaa)',
    }
  },

  logoReact: {
    ':hover': {
      filter: 'drop-shadow(0 0 2em #61dafbaa)',
    }
  },

  logoSpin: {
    animationName: logoSpinVars.animationName,
    animationIterationCount: logoSpinVars.animationIterationCount,
    animationDelay: logoSpinVars.animationDelay,
    animationTimingFunction: logoSpinVars.animationTimingFunction,
  },

  card: {
    padding: '2em',
  },
  paddingreadTheDocs: {
    color: '#888',
  }
});

export default App;