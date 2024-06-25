import { useState } from 'react';
import { Calendar } from 'react-calendar';
import { clsx } from 'clsx';

const defaultStartTime = (value) => {
  const startTime = new Date(value.getTime());
  startTime.setHours(8, 0, 0, 0);
  return startTime;
}

const defaultEndTime = (value) => {
  const endTime = new Date(value.getTime());
  endTime.setHours(17, 0, 0, 0);
  return endTime;
}

/**
 * Handler function for TimeSlot button click. 
 * @param {Event} e 
 * @param {Function} onChange 
 * @returns Calls the setter function of value in DateTimeBooker with the
 *          newly selected time.
 */
function handleClick(e, onChange) {
  let prev;
  if (prev) {
    prev.classList.remove("selected");
  }
  prev = e;
  let newTime = e.target.value;
  e.target.classList.add("selected")

  return onChange(new Date(newTime));
}

/**
 * The TimeSlot component. Represents an individual time slot button.
 * 
 * @param {Date} value The currently selected date
 * @param {Function} onChange Callback function called when selected time changes 
 * @param {boolean} disabled Indicates whether the time slot is disabled
 * @returns 
 */
function TimeSlot( { children, onChange, disabled } ) {
  /**
   * Simple time formatting function   * 
   * @param {Date} value 
   * @returns formatted time string to display
   */

  const value = children;

  const formatTime = (value) => {
    const suffix = value.getHours() >= 12 ? "PM" : "AM";
    return (value.getHours() > 12 ? value.getHours() - 12 : value.getHours()) + ":" + 
      value.getMinutes().toString().padEnd(2, "0") + " " + suffix;
  }

  return (
    <button
      className={'timeslot'}
      onClick={(e) => {handleClick(e, onChange)}}
      disabled={disabled}
      value={value}
      type="button">
      {formatTime(value)}
    </button>
  )
}

/**
 * TimeGrid component. Displays a grid of buttons with available time slots on them.
 * 
 * @param {Date} value The current value of DateTimeBooker
 * @param {Function} onChange Pass a function to call when selected time is changed.
 * @param {Array[Date]} timeDisabled An array of Dates describing disabled time slots.
 * @param {[Date, Date]} timeRange Array containing start time and end time
 * @param {int} interval Interval of displayed times in minutes
 */
function TimeGrid( { value, onChange, timeDisabled = [], timeRange = [defaultStartTime(value), defaultEndTime(value)], interval = 60 } ) {
  if (interval < 15) {
    throw new Error("Interval cannot be less than 15 minutes.");
  }

  let coeff = 1000 * 60 * interval;
  const current = new Date(Math.round(value.getTime() / coeff) * coeff);
  const now = new Date();
  const nowRounded = new Date(Math.round(now.getTime() / coeff) * coeff);

  const [startTime, endTime] = timeRange;

  let times = [];

  for (let time = startTime.getTime(); time <= endTime.getTime(); time += coeff) {
    times.push(time);
  }

  const timeSlots = times.map((time) => {
    let disabled = false;
    if ( current == nowRounded || timeDisabled.includes(current) ) {
      disabled = true;
    }
    return {time: new Date(time), disabled: disabled};
  });

  return (
    <div className="timegrid">
      {timeSlots.map((slot, i) => {
        return (
          <TimeSlot key={"timeslot" + i} disabled={slot.disabled} onChange={onChange}>{slot.time}</TimeSlot>
        );
      })}
    </div>
  )
}


export default function DateTimeBooker() {
  const [value, onChange] = useState(new Date());
  console.log(value.toLocaleString());

  // get array of disabled dates []

  const disabled = [new Date(2024, 5, 15)];

  const isDisabled = ( args ) => {
    const { date } = args;
    let isDisabled = false;

    disabled.forEach((disabledDate) => {
      if ((disabledDate.getTime() == date.getTime()) || (date.getTime() < Date.now())) {
        isDisabled = true;
      }
    })

    return isDisabled;
  }

  return (
    <div className="date-time-booker-container">
      <Calendar onChange={onChange} minDetail="month" value={value} tileDisabled={isDisabled} />
      <TimeGrid onChange={onChange} value={value} interval={30} />
    </div>
  );
}