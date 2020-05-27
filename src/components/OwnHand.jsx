import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import Button from '@material-ui/core/Button';

const propTypes = {
  src: PropTypes.string,
  resultType: PropTypes.string
};

const OwnHand = ({ showResult, resultType }) => {
  return (
    <div className={styles.root}>
      <span className={styles.resultText}> You Picked </span>
      <Button
        classes={{
          root: styles.button({
            won: resultType === 'You Win!',
            color: showResult.color,
          })
        }}
        variant="contained"
        startIcon={<img src={showResult.src} alt='hand'/>}
      />
    </div>
  );
};

const styles = {
  root: css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 230,
  }),
  resultText: css({
    color: 'white',
    fontSize: 32,
    textTransform: 'uppercase',
    marginBottom: 32,
  }),
  button: ({ won, color }) => css({
    '&.MuiButton-root': {
      width: 200,
      height: 200,
      borderRadius: '50%',
      backgroundColor: 'white',
      border: `20px solid ${color}`,
      marginRight: 24,
      boxShadow: won ? '10px 10px 10px' : 'none',
      pointerEvents: 'none',
    }
  }),
};

OwnHand.propTypes = propTypes;

export default OwnHand;
