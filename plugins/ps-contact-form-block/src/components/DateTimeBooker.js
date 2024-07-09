import { useState, useRef } from 'react';
import { Calendar } from 'react-calendar';
import { clsx } from 'clsx';
import { SlArrowLeft } from "react-icons/sl";

const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let isMobile = window.innerWidth <= 768;

window.addEventListener("resize", () => {
    if (window.innerWidth <= 768) {
        isMobile = true;
    } else {
        isMobile = false;
    }
})

const defaultStartTime = (value) => {
  if (!value) {
    return;
  }
  
  const startTime = new Date(value.getTime());
  startTime.setHours(8, 0, 0, 0);
  return startTime;
}

const defaultEndTime = (value) => {
  if (!value) {
    return;
  }

  const endTime = new Date(value.getTime());
  endTime.setHours(17, 0, 0, 0);
  return endTime;
}

/**
 * The TimeSlot component. Represents an individual time slot button.
 * 
 * @param {Date} value The currently selected date
 * @param {Function} onChange Callback function called when selected time changes 
 * @param {boolean} disabled Indicates whether the time slot is disabled
 * @returns 
 */
function TimeSlot( { children, onChange, disabled, myKey, activeKey, onSwap } ) {
  const value = children;
  
  /**
   * Simple time formatting function   * 
   * @param {Date} value 
   * @returns formatted time string to display
   */
  const formatTime = (value) => {
    const suffix = value.getHours() >= 12 ? "PM" : "AM";
    return (value.getHours() > 12 ? value.getHours() - 12 : value.getHours()) + ":" + 
      value.getMinutes().toString().padEnd(2, "0") + " " + suffix;
  }

  return (
    <div className={'timeslot'} style={{display: 'flex'}}>
      <button
        className={clsx('timeslot__value', myKey == activeKey ? 'timeslot__value--active' : '')}
        onClick={() => {onSwap(myKey)}}
        disabled={disabled}
        value={value}
        type="button">
        {formatTime(value)}
      </button>
      <button 
        className={clsx('timeslot__select', myKey == activeKey ? '' : 'timeslot__select--hidden')}
        type="button"
        onClick={() => {onChange(value)}}>Select</button>
    </div>
  )
}

/**
 * TimeGrid component. Displays a grid of buttons with available time slots on them.
 * 
 * @param {Date} value The current value of DateTimeBooker
 * @param {Date} prev The previous value of DateTimeBooker. Used to check calendar changes.
 * @param {Function} onChange Pass a function to call when selected time is changed.
 * @param {Array[Date]} timeDisabled An array of Dates describing disabled time slots.
 * @param {[Date, Date]} timeRange Array containing start time and end time
 * @param {int} interval Interval of displayed times in minutes
 */
function TimeGrid( { 
  value,
  changedDay,
  onChange,
  timeRange = [defaultStartTime(value), defaultEndTime(value)],
  interval = 60,
  slotDisabled
} ) {
  const [activeKey, setActiveKey] = useState(-1);
  
  if (value == null) {
    return;
  }
  
  if (interval < 15) {
    throw new Error("Interval cannot be less than 15 minutes.");
  }

  if (changedDay.current) {
    setActiveKey(-1);
    changedDay.current = false;
  }

  const getFormattedDate =(value) => {
    return `${MONTHS[value.getMonth()]} ${value.getDate()}, ${value.getFullYear()}`;
  }


  let coeff = 1000 * 60 * interval;
  const current = new Date(Math.round(value.getTime() / coeff) * coeff);
  const now = new Date();
  const nowRounded = new Date(Math.round(now.getTime() / coeff) * coeff);

  const [startTime, endTime] = timeRange;

  let times = []; // in ms

  for (let time = startTime.getTime(); time <= endTime.getTime(); time += coeff) {
    times.push(time);
  }

  const timeSlots = times.map((time) => {
    let disabled = false;
    if ( current == nowRounded || slotDisabled({ date: new Date(current), view: 'time' }) ) {
      disabled = true;
    }
    return {time: new Date(time), disabled: disabled};
  });

  const handleSwap = (key) => {
    setActiveKey(key);
  }

  const props = {
    activeKey: activeKey,
    onChange: onChange,
    onSwap: handleSwap
  };

  return (
    <div className="timegrid">
      <div className="mobile-header">
        <h1>{WEEKDAYS[value.getDay()]}</h1>
        <h2>{getFormattedDate(value)}</h2>
        <button className="timegrid__previous" type="button" onClick={() => {onChange(value, -1)}}><SlArrowLeft /></button>
      </div>
      {timeSlots.map((slot, i) => {
        return (
          <TimeSlot key={"timeslot" + i} myKey={i} disabled={slotDisabled({date: new Date(slot.time), view: 'time'})} {...props}>
            {slot.time}
          </TimeSlot>
        );
      })}
    </div>
  )
}

export default function DateTimeBooker(isDisabled) {
  const now = new Date();
  const initial = now.getHours() > 17 ? 
    new Date(new Date(now.getTime() + 1000*60*60*24).setHours(0,0,0,0)) 
  : new Date(new Date(now).setHours(0,0,0,0));
  const [value, setValue] = useState(initial);
  const [page, setPage] = useState(1);
  
  const changedDay = useRef(false);

  const onChange = (newVal) => {
    if (value != null) {
      changedDay.current = value.getDate() != newVal.getDate();
    }

    setValue(newVal);
  }

  const onChangeMobile = ( value, newPage ) => {
    onChange(value);
    setPage(page+newPage);
  }

  return !isMobile ? (
    <div className="date-time-booker-container">
      <Calendar 
        onChange={onChange} 
        onActiveStartDateChange={({ action }) => {
          changedDay.current = (action === "prev" || action === "next");
          setValue(null);
        }}
        minDetail="month" 
        value={value}
        tileDisabled={isDisabled}
        />
      {setValue != null ? <TimeGrid onChange={onChange} value={value} changedDay={changedDay} interval={30} slotDisabled={isDisabled} /> : null}
    </div>
  ) : (
    <div className="date-time-booker-container">
      {page == 1 ? <Calendar onChange={(value) => {onChangeMobile(value, 1)}} minDetail="month" value={value} tileDisabled={isDisabled}/> 
      : <TimeGrid onChange={onChangeMobile} value={value} interval={30} mobile={true} slotDisabled={isDisabled} />}
    </div>
  );
}