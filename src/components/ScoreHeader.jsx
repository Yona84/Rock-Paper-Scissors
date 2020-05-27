import React from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';
import ScoreComp from './ScoreComp';
import headerText from '../images/logo.svg';

const propTypes = {
  score: PropTypes.number,
};

const texts = [ 'Rock', 'Paper', 'Scissors' ];

const ScoreHeader = ({ score }) => {
  return (
    <div className={styles.flex}>
      <div className={styles.flexCol}>
        <img src={headerText} alt='logo'/>
      </div>
      <ScoreComp score={score}/>
    </div>
  );
};

const styles = {
  flex: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 20,
    padding: 16,
    border: '2px solid rgba(128, 128, 128, 0.3)',
  }),
  flexCol: css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }),
  text: css({
    marginBottom: 0,
    marginTop: 0,
    color: 'white',
    fontSize: 22
  })
};

ScoreHeader.propTypes = propTypes;

export default ScoreHeader;
