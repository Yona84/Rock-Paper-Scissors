import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import InitialScreen from '../components/InitialScreen';
import ResultsScreen from '../components/ResultsScreen';
import rock from '../images/icon-rock.svg';
import paper from '../images/icon-paper.svg';
import scissors from '../images/icon-scissors.svg';

const propTypes = {
  setScore: PropTypes.func,
  score: PropTypes.number
};

const handTypes = [ 'Paper', 'Rock', 'Scissors' ];

const srcTypes = {
  [ 'Paper' ]: {
    src: paper,
    color: 'yellow',
  },
  [ 'Rock' ]: {
    src: rock,
    color: 'red',
  },
  [ 'Scissors' ]: {
    src: scissors,
    color: 'blue'
  }
};

const Game = ({ setScore, score }) => {

    const [ showResult, setShowResult ] = React.useState({
      src: null,
      color: null,
      handType: null
    });

    const [ resultType, setResultType ] = React.useState('');

    const [ compResult, setCompResult ] = React.useState({
      src: '',
      color: ''
    });

    const firstUpdate = React.useRef(true);
    React.useEffect(() => {
      if (firstUpdate.current) {
        firstUpdate.current = false;
        return;
      }
      const compHand = handTypes[ Math.floor(Math.random() * handTypes.length) ];

      const newCompResultSrc = srcTypes[ compHand ].src;
      const newCompResultColor = srcTypes[ compHand ].color;

      if (showResult.src !== null) {
        setCompResult({
          ...compResult,
          src: newCompResultSrc,
          color: newCompResultColor
        });
      }

      switch (true) {
        case ( compHand === 'Paper' && showResult.handType === 'Paper' ) || ( compHand === 'Rock' && showResult.handType === 'Rock' ) || ( compHand === 'Scissors' && showResult.handType === 'Scissors' ) : {
          setResultType('Draw');
          return;
        }
        case ( compHand === 'Paper' && showResult.handType === 'Scissors' ) || ( compHand === 'Rock' && showResult.handType === 'Paper' ) || ( compHand === 'Scissors' && showResult.handType === 'Rock' ) : {
          setResultType('You Win!');
          const newScore = score + 1;
          setScore(newScore);
          return;
        }
        case ( compHand === 'Paper' && showResult.handType === 'Rock' ) || ( compHand === 'Rock' && showResult.handType === 'Scissors' ) || ( compHand === 'Scissors' && showResult.handType === 'Paper' ) : {
          setResultType('You Lose');
          if (score > 0) {
            const newScore = score - 1;
            setScore(newScore);
          }
          return;
        }
      }
    }, [ showResult ]);

    return (
      <div className={styles.root}>
        {
          ( showResult.src && compResult.src ) ?
            <ResultsScreen showResult={showResult}
                           setShowResult={setShowResult}
                           resultType={resultType}
                           compHand={compResult}
                           setCompResult={setCompResult}/>
            :
            <InitialScreen setShowResult={setShowResult}/>
        }
      </div>
    );
  }
;

const styles = {
  root: css({
    marginTop: 32,
  })
};

Game.propTypes = propTypes;

export default Game;
