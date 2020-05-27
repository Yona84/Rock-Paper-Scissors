import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { css } from 'emotion';
import rock from '../images/icon-rock.svg';
import paper from '../images/icon-paper.svg';
import scissors from '../images/icon-scissors.svg';

const propTypes = {
  setShowResult: PropTypes.func,
};

const buttons = [
  {
    color: 'red',
    src: rock,
    handType: 'Rock'
  },
  {
    color: 'yellow',
    src: paper,
    handType: 'Paper'
  },
  {
    color: 'blue',
    src: scissors,
    handType: 'Scissors'
  }
];

const InitialScreen = ({ setShowResult }) => {

  return (
    <div className={styles.root}>
      {
        buttons.map(button => {
          return (
            <>
              <Button
                onClick={() => setShowResult({
                  src: button.src,
                  color: button.color,
                  handType: button.handType
                })}
                key={button.src}
                classes={{
                  root: styles.button({
                    color: button.color,
                  })
                }}
                variant="contained"
                startIcon={<img src={button.src} alt='hand'/>}
              />
            </>
          );
        })
      }
    </div>
  );
};

const styles = {
  root: css({
    display: 'flex',
    width: '100%',
    alignItems: 'center'
  }),
  button: ({ color }) => css({
    '&.MuiButton-root': {
      width: 200,
      height: 200,
      borderRadius: '50%',
      backgroundColor: 'white',
      border: `20px solid ${color}`,
      margin: 'auto',
    }
  })
};

InitialScreen.propTypes = propTypes;

export default InitialScreen;
