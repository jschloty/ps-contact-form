import { useState, useRef, useLayoutEffect } from 'react';
import { Calendar } from 'react-calendar';
import { clsx } from 'clsx';
import { SlArrowLeft } from "react-icons/sl";
import { TbReceiptYuan } from 'react-icons/tb';

const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function useWindowSize() {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [])
  return size;
}

/**
 * BookerPlaceholder: a greyed out dummy calendar that displays while the calendar info is retrieved.
 * 
 */
function BookerPlaceholder() {
  return <p>LOADING...</p>
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
        type="submit"
        onClick={(e) => {e.preventDefault(); onChange(value, e, true);}}>Select</button>
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
  hours,
  interval,
  startTime,
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

  const openTime = value.setHours(hours[value.getDay()].openHour,
    hours[value.getDay()].openMinute,0,0);
  const closeTime = value.setHours(hours[value.getDay()].closeHour,
    hours[value.getDay()].closeMinute,0,0);
  
  const bookingAfter = Math.round((startTime)/(interval*60*1000))*(interval*60*1000);
  
  const start = bookingAfter > openTime && bookingAfter < closeTime ? bookingAfter : openTime;
  const endTime = closeTime;

  let times = []; // in ms

  for (let time = start; time <= endTime; time += coeff) {
    times.push(time);
  }

  const timeSlots = times.map((time) => {
    return new Date(time);
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
          <TimeSlot 
            key={"timeslot" + i}
            myKey={i}
            disabled={slotDisabled({date: slot, view: 'time'})}
            {...props}
          >
            {slot}
          </TimeSlot>
        );
      })}
    </div>
  )
}

export default function DateTimeBooker({isDisabled, timeInfo, loading, appt, pageState}) {
  const [formPage, setFormPage] = pageState;
  const [page, setPage] = useState(1);
  const [value, setValue] = appt;
  const [width, height] = useWindowSize();

  const changedDay = useRef(false);

  const {
    hours,
    interval = 30,
    startTime = new Date(),
    endTime
  } = timeInfo;

  const onChange = (newVal, e, time) => {
    if (value != null) {
      changedDay.current = value.getDate() != newVal.getDate();
    }

    setValue(newVal);
    if (time) {
      setFormPage(formPage + 1);
    }
  }

  const onChangeMobile = ( value, newPage ) => {
    onChange(value);
    setPage(page+newPage);
  }

  console.log("width = " + width);
  return loading ? <BookerPlaceholder /> :
    width >= 768
    ? <div className="date-time-booker-container">
        <Calendar 
          onChange={onChange} 
          onActiveStartDateChange={({ action }) => {
            if (action === "prev" || action === "next") {
              changedDay.current = true;
              setValue(null);
            }
          }}
          minDetail="month"
          value={value}
          tileDisabled={isDisabled}
          minDate={new Date(new Date(startTime).setHours(0,0,0,0))}
          maxDate={new Date(new Date(endTime).setHours(0,0,0,0))}
        />
        <TimeGrid 
          onChange={onChange}
          value={value}
          changedDay={changedDay}
          hours={hours}
          interval={interval}
          startTime={startTime}
          slotDisabled={isDisabled}
          style={value != null ? "" : {display:"none"}}
        />
      </div>
    : <div className="date-time-booker-container date-time-booker-mobile">
        {page == 1 
        ? <Calendar 
            onChange={(value) => {onChangeMobile(value, 1)}} 
            minDetail="month" 
            value={value} 
            tileDisabled={isDisabled}/> 
        : <TimeGrid 
            onChange={onChangeMobile} 
            value={value} 
            changedDay={changedDay}
            hours={hours}
            interval={interval} 
            startTime={startTime}
            mobile
            slotDisabled={isDisabled}
            style={value != null ? "" : {display:"none"}}  
          />}
      </div>;
}