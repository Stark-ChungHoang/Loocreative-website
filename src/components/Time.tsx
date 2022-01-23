// import React, { Component } from 'react';
import moment from "moment";

import React, { useEffect, useState } from "react";

interface TimeProps {
  getTime?: any;
}

const Time: React.FC<TimeProps> = ({ getTime }) => {
  const [time, setTime] = useState(moment(new Date()).format("HH:mm:ss"));

  const tick = () => {
    setInterval(() => {
      setTime(moment(new Date()).format("HH:mm:ss"));
    }, 1000);
    // getTime(time);
  };

  useEffect(() => {
    tick();
  });
  return <>{time}</>;
};

export default Time;
