//Create the header of the minesweeper game containing the following elements
//Number of mines to find
//Restart button in the form of a smiley face while the game is running and a sad face when a mine is clicked & game is over
//Timer - tracks the time played

import React from 'react';
import PropTypes from "prop-types";

const Head = props => {
  let minutes = Math.floor(props.time / 60);
  let formattedSeconds = props.time - minutes * 60 || 0;

  formattedSeconds =
    formattedSeconds < 10 ? `0${formattedSeconds}` : formattedSeconds;
  let time = `${minutes}:${formattedSeconds}`;
  let status =
    props.status === "running" || props.status === "waiting" ? (
      <i className="icon ion-happy-outline" />
    ) : (
        <i className="icon ion-sad-outline" />
      );

  return (
    <div className="head">
      <div className="flag-count">{props.flagsUsed}</div>
      <button className="reset" onClick={props.reset}>
        {status}
      </button>
      <div className="timer">{time}</div>
    </div>
  );
};

Head.propTypes = {
  time: PropTypes.number.isRequired,
  flagsUsed: PropTypes.number.isRequired
};

export default Head;