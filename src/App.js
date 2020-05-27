import React from 'react';
import { css } from 'emotion';
import Button from '@material-ui/core/Button';
import ScoreHeader from './components/ScoreHeader';
import Game from './components/Game';

function App () {
  const [ score, setScore ] = React.useState(0);

  return (
    <div className={styles.root}>
      <div className={styles.layout}>
        <ScoreHeader score={score}/>
        <Game setScore={setScore} score={score}/>
      </div>
      <Button
        onClick={() => setScore(0)}
        classes={{
          root: styles.buttonRestart
        }}
        variant="contained"
      > Restart
      </Button>
    </div>
  )
    ;
}

const styles = {
  root: css({
    width: '100vw',
    height: '100vh',
    backgroundImage: 'linear-gradient(to right, hsl(214, 47%, 23%) ,hsl(237, 49%, 15%))',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 50,
    position: 'relative'
  }),
  layout: css({
    width: 800,
  }),
  buttonRestart: css({
    '&.MuiButton-root': {
      width: 200,
      height: 40,
      borderRadius: 8,
      backgroundColor: 'white',
      color: 'black',
      marginTop: 64
    }
  }),
};

export default App;
