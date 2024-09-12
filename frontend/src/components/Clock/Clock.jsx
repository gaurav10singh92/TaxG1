import React, { useState, useEffect } from "react";
import "./Clock.css";
const Clock = () => {
  const [currentTime, SetCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      SetCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formatDate = (date) => {
    const options = {
      weekday: "long",
    };
    return date.toLocaleDateString(undefined, options);
  };
  const formatTime = (date) => {
    return date.toLocaleTimeString();
  };

  return (
    <div>
      <span className="time">{formatTime(currentTime)}</span>
      <span className="day">{formatDate(currentTime)}</span>
    </div>
  );
};

export default Clock;
