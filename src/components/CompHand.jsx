import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import Button from '@material-ui/core/Button';

const propTypes = {
  compResultSrc: PropTypes.string,
};

const CompHand = ({ compHand }) => {
  return (
    <div className={styles.root}>
      <span className={styles.resultText}> Computer Picked </span>
      <Button
        classes={{
          root: styles.button({
            color: compHand.color,
          })
        }}
        variant="contained"
        startIcon={<img src={compHand.src} alt='hand'/>}
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
    textAlign: 'center',
    maxWidth: 230,
  }),
  resultText: css({
    color: 'white',
    fontSize: 32,
    textTransform: 'uppercase',
    marginBottom: 32,
  }),
  button: ({ color }) => css({
    '&.MuiButton-root': {
      width: 200,
      height: 200,
      borderRadius: '50%',
      backgroundColor: 'white',
      border: `20px solid ${color}`,
      pointerEvents: 'none',
    }
  }),
};

CompHand.propTypes = propTypes;

export default CompHand;
