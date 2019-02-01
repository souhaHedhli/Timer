
import React from "react";
import "./App.css";

const TimerConverter = milliseconds => {
  let valTime = Math.floor(milliseconds / 1000);
  // eslint-disable-next-line
  let days = Math.floor(valTime / 86400);
  let reshour = valTime % 86400;
  let hours = Math.floor(reshour / 3600);
  let minutes = Math.floor((valTime % 3600) / 60);
  let seconds = (valTime % 3600) % 60;
  return {
    hours,
    minutes,
    seconds
  };
};

const TimerView=(props)=>

      <div className="background">
        <div className="timer">
          <div className="hours forme">
            <span className="numeric">
           { String(TimerConverter(props.time).hours).padStart(2, "0")}
            </span>
            <span className="letter">Hour</span>
          </div>
          <span>:</span>
          <div className="minute forme">
            <span className="numeric">
            {String(TimerConverter(props.time).minutes).padStart(2, "0")}
            </span>
            <span className="letter">Minute</span>
          </div>
          <span>:</span>
          <div className="second forme">
            <span className="numeric">
            {String(TimerConverter(props.time).seconds).padStart(2, "0")}
            </span>
            <span className="letter">Second</span>
          </div>
        </div>

      </div>

export default TimerView;
