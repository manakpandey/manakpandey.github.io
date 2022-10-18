import "../scss/soon.scss"

import * as React from "react"

import {CSSProperties, useEffect, useState} from "react"

import moment from "moment";

const Soon = () => {

  const TARGET_TIME = new Date('2022-10-19 21:37')
  const [currTime, setCurrTime] = useState<Date>(new Date())


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const diff = moment.duration(Math.max(TARGET_TIME.valueOf() - currTime.valueOf(), 0))
  const days = diff.days()
  const hours = diff.hours().toLocaleString('en-US', {
    minimumIntegerDigits: 2
  })
  const min = diff.minutes().toLocaleString('en-US', {
    minimumIntegerDigits: 2
  })
  const sec = diff.seconds().toLocaleString('en-US', {
    minimumIntegerDigits: 2
  })

  const commonStyle: CSSProperties = {
    color: "#fff",
    mixBlendMode: "difference"
  }

  return <div className={"mp-soon"}>
    <div className={"mp-soon_timer"}>
      <div style={{...commonStyle, fontSize: 40}}>{days}</div>
      <div style={{...commonStyle, fontSize: 40}}>days</div>
      <div style={{...commonStyle, fontSize: 40}}>{hours}</div>
      <div style={{...commonStyle, fontSize: 40}}>hours</div>
      <div style={{...commonStyle, fontSize: 40}}>{min}</div>
      <div style={{...commonStyle, fontSize: 40}}>minutes</div>
      <div style={{...commonStyle, fontSize: 40}}>{sec}</div>
      <div style={{...commonStyle, fontSize: 40}}>seconds</div>
    </div>
  </div>
}

export default Soon