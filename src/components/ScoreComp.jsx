import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

const propTypes = {
  score: PropTypes.string,
};

const ScoreComp = ({ score }) => {

  return (
    <div className={styles.flexCol}>
      <span className={styles.score}> Score </span>
      <span className={styles.scoreNum}> {score} </span>
    </div>
  );
};

const styles = {
  flexCol: css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 150,
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    height: 85
  }),
  score: css({
    letterSpacing: 1.2,
    color: 'black',
    textTransform: 'uppercase',
    fontWeight: 600,
  }),
  scoreNum: css({
    fontSize: 24
  })
};

ScoreComp.propTypes = propTypes;

export default ScoreComp;
