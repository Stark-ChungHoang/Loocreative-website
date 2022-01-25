// import React, { Component } from 'react';
import moment from "moment";

import React, { useEffect, useState } from "react";

interface TimeProps {
  getTime?: any;
}

const Time: React.FC<TimeProps> = ({ getTime }) => {
  const [time, setTime] = useState(moment(new Date()).format("HH:mm:ss"));


  useEffect(() => {
    const timeLock = setInterval(() => {
      setTime(moment(new Date()).format("HH:mm:ss"));
    }, 1000);
    return (() => {
      clearInterval(timeLock);
    });
  }, []);
  return <>{time}</>;
};

export default Time;
