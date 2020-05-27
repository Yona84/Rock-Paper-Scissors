import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import Button from '@material-ui/core/Button';
import OwnHand from '../components/OwnHand';
import CompHand from '../components/CompHand';

const propTypes = {
  showResult: PropTypes.object,
  setShowResult: PropTypes.func,
  resultType: PropTypes.string,
  compHand: PropTypes.src,
  setCompResult: PropTypes.func,
};

const ResultsScreen = ({ showResult, setShowResult, resultType, compHand, setCompResult }) => {
  return (
    <div className={styles.root}>
      <OwnHand showResult={showResult} resultType={resultType}/>
      <div className={styles.flexCol}>
        <span className={styles.resultText}> {resultType} </span>
        <Button
          onClick={() => {
            setShowResult({
              src: null,
              color: null
            });
            setCompResult({
              src: null,
              color: null,
            });
          }}
          classes={{
            root: styles.buttonRestart
          }}
          variant="contained"
        > Play Again
        </Button>
      </div>
      <CompHand compHand={compHand}/>
    </div>
  );
};

const styles = {
  root: css({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }),
  buttonRestart: css({
    '&.MuiButton-root': {
      width: 200,
      height: 40,
      borderRadius: 8,
      backgroundColor: 'white',
      color: 'black'
    }
  }),
  flexCol: css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }),
  resultText: css({
    color: 'white',
    fontSize: 32,
    textTransform: 'uppercase',
    marginBottom: 16,
  })
};

ResultsScreen.propTypes = propTypes;

export default ResultsScreen;
