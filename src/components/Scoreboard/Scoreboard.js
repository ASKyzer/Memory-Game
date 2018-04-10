import React from 'react';
import './Scoreboard.css';

const Scoreboard = props =>
  <div>
    <div className='scoreBoard'>
      <p className='currentScore'>Score</p>
      <span className='scoreNumber'> {props.score} </span>
      <p className='highScore'>High Score</p>
      <span className='scoreNumber'> {props.highScore} </span>
    </div>
    <div className='arrow'></div>
    <div className='innerArrow'></div>
    <div className='commentary'> {props.comment} </div>
  </div>

export default Scoreboard;
