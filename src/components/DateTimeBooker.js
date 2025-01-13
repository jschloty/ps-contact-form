import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { Calendar } from 'react-calendar';
import { clsx } from 'clsx';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

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

function disabledCheck ( {date, context, calendarInfo} ) {

  const openTime = new Date().setHours(calendarInfo.openHours[date.getDay()].openHour,
    calendarInfo.openHours[date.getDay()].openMinute,0,0);
  const closeTime = new Date().setHours(calendarInfo.openHours[date.getDay()].closeHour,
    calendarInfo.openHours[date.getDay()].closeMinute,0,0);

  // uses UsefulCalendar's startTime calculation
  const bookingAfter = Math.round((calendarInfo.startTime)
    /(calendarInfo.slotInterval))*(calendarInfo.slotInterval);
  const startTime = bookingAfter > openTime && bookingAfter < closeTime ? bookingAfter : openTime;

  let disabled = false;

  if (context === 'time') {
    calendarInfo.blockedSlots.forEach((slot) => {
      // adds 30 extra minutes of buffer times to prevent an API bug
      let effectiveStart = slot.startTime - calendarInfo.slotPreBuffer - (30*60*1000);
      let effectiveEnd = slot.endTime + calendarInfo.slotBuffer + (30*60*1000);
      if (date.getTime() >= effectiveStart && date.getTime() <= effectiveEnd) {
        disabled = true;
      }
    });
    return disabled;
  }
  
  let timeslots = [];
  for (let t = startTime; t < closeTime; t += (calendarInfo.slotInterval)) {
    timeslots.push(new Date(t));
  }

  calendarInfo.blockedSlots.forEach((blockedSlot) => {
    let i = 0;
    while (i < timeslots.length) {
      if (timeslots[i].getTime() >= blockedSlot.startTime && timeslots[i].getTime() <= blockedSlot.endTime) {
        timeslots.splice(i, 1);
        continue;
      }
      i++;
    }
  });

  // rounds the current time to midnight in local time
  let todayRounded = new Date(new Date().setHours(0,0,0,0));
  // does the same for the date in question
  let dateRounded = new Date(new Date(date).setHours(0,0,0,0));
  let isToday = todayRounded.getTime() == dateRounded.getTime();

  disabled = timeslots.length == 0 || (isToday && bookingAfter > closeTime);

  return disabled;
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
 * @param {boolean} changedDay True if the previous change of the calendar was a day.
 * @param {Function} onChange Pass a function to call when selected time is changed.
 * @param {Array} hours Contains hours objects. @see calendarInfo
 * @param {int} interval Interval of displayed times in ms.
 * @param {int} startTime The earliest allowable timeslot in ms.
 * @param {Function} slotDisabled Function for disabled check passed down into TimeSlot
 */
function TimeGrid( { 
  value,
  changedDay,
  onChange,
  onChangeMobile,
  hours,
  interval,
  startTime,
  slotDisabled
} ) {
  const [activeKey, setActiveKey] = useState(-1);
  
  if (value == null) {
    return;
  }
  
  if (interval < 15*60*1000) {
    throw new Error("Interval cannot be less than 15 minutes.");
  }

  if (changedDay.current) {
    setActiveKey(-1);
    changedDay.current = false;
  }

  const getFormattedDate =(value) => {
    return `${MONTHS[value.getMonth()]} ${value.getDate()}, ${value.getFullYear()}`;
  }


  let coeff = interval;
  // const current = new Date(Math.round(value.getTime() / coeff) * coeff);
  const now = new Date();
  // const nowRounded = new Date(Math.round(now.getTime() / coeff) * coeff);

  const openTime = value.setHours(hours[value.getDay()].openHour,
    hours[value.getDay()].openMinute,0,0);
  const closeTime = value.setHours(hours[value.getDay()].closeHour,
    hours[value.getDay()].closeMinute,0,0);
  
  const bookingAfter = Math.round((startTime)/(interval))*(interval);
  
  const start = bookingAfter > openTime && bookingAfter < closeTime ? bookingAfter : openTime;
  const endTime = closeTime;

  let times = []; // in ms

  for (let time = start; time < endTime; time += coeff) {
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
        <button className="timegrid__previous" type="button" onClick={() => {onChangeMobile(value, -1)}}><IoIosArrowBack /></button>
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

export default function DateTimeBooker({calendarInfo, loading, appt, pageState, initial}) {
  const [formPage, setFormPage] = pageState;
  const [page, setPage] = useState(1);
  const [value, setValue] = appt;
  const [width, height] = useWindowSize();

  // const date = new Date();
  // // sets open and close times based on today's date
  // const openTime = new Date().setHours(calendarInfo.openHours[date.getDay()].openHour,
  //   calendarInfo.openHours[date.getDay()].openMinute,0,0);
  // const closeTime = new Date().setHours(calendarInfo.openHours[date.getDay()].closeHour,
  //   calendarInfo.openHours[date.getDay()].closeMinute,0,0);

  // // uses UsefulCalendar's startTime calculation, rounded up to the nearest time slot
  // const bookingAfter = Math.ceil((calendarInfo.startTime)
  //   /(calendarInfo.slotInterval))*(calendarInfo.slotInterval);

  // let startTime;
  
  // // if the calculated start time is during open hours
  // if ( bookingAfter > openTime && bookingAfter < closeTime ) {
  //   startTime = bookingAfter;
  // }
  // // if start time is before open hours
  // else if ( bookingAfter < openTime ) {
  //   startTime = openTime;
  // } 
  // // start time must be tomorrow at open
  // else {
  //   const tomorrow = new Date(date.getTime());
  //   tomorrow.setTime(date.getTime()+24*60*60*1000);
  //   tomorrow.setHours(calendarInfo.openHours[tomorrow.getDay()].openHour,
  //     calendarInfo.openHours[date.getDay()].openMinute,0,0);
  //   startTime = tomorrow;
  // }

  // setValue(startTime);

  // set initial value to null if on mobile
  useEffect(() => {
    if (width < 768) {
      setValue(null);
    }
  }, [loading, width]);

  //tracks whether day was changed or just time
  const changedDay = useRef(false);

  // setting up aliases for calendarInfo
  const hours = calendarInfo.openHours;
  const interval = 30*60*1000;
  const endTime = calendarInfo.endTime;

  // replace default onChange with a check for changedDay
  const onChange = (newVal, e, time) => {
    if (value != null) {
      changedDay.current = value.getDate() != newVal.getDate();
    }

    setValue(newVal);
    if (time) {
      setFormPage(formPage + 1);
    }
  }

  // wrap isDisabled with disabledCheck
  const isDisabled = (args) => {
    const { date: date, view: context } = args;
    return disabledCheck({date, context, calendarInfo});
  }

  // adapts booker for a 2 page mobile setup
  const onChangeMobile = ( value, newPage ) => {
    onChange(value);
    setPage(page+newPage);
  }

  // Formatting navigation label
  const navLabel = ({date}) => {
    return <>
    <h2>{MONTHS[date.getMonth()]}</h2>
    <h3>{date.getFullYear()}</h3>
    </>
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
          minDate={new Date(new Date(initial).setHours(0,0,0,0))}
          maxDate={new Date(new Date(endTime).setHours(0,0,0,0))}
          prevLabel={<IoIosArrowBack />}
          nextLabel={<IoIosArrowForward />}
          navigationLabel={navLabel}
        />
        <TimeGrid 
          onChange={onChange}
          value={value}
          changedDay={changedDay}
          hours={hours}
          interval={interval}
          startTime={initial}
          slotDisabled={isDisabled}
          style={value != null ? "" : {display:"none"}}
        />
      </div>
    : <div className="date-time-booker-container date-time-booker-mobile">
        {page == 1 
        ? <Calendar 
            onChange={(value) => {onChangeMobile(value, 1)}} 
            onActiveStartDateChange={({ action }) => {
              if (action === "prev" || action === "next") {
                changedDay.current = true;
                setValue(null);
              }
            }}
            minDetail="month"
            value={value}
            tileDisabled={isDisabled}
            minDate={new Date(new Date(initial).setHours(0,0,0,0))}
            maxDate={new Date(new Date(endTime).setHours(0,0,0,0))}
            prevLabel={<IoIosArrowBack />}
            nextLabel={<IoIosArrowForward />}
            navigationLabel={navLabel}
          />
        : <TimeGrid 
            onChange={onChange}
            onChangeMobile={onChangeMobile} 
            value={value} 
            changedDay={changedDay}
            hours={hours}
            interval={interval} 
            startTime={initial.getTime()}
            mobile
            slotDisabled={isDisabled}
            style={value != null ? "" : {display:"none"}}  
          />}
      </div>;
}