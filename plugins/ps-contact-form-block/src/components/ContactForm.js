import React, { useState, useRef } from 'react';
import { SlArrowLeft } from "react-icons/sl";
import { checkInput } from '../scripts/form-validation'
import DateTimeBooker from './DateTimeBooker';
import { ToastContainer, toast } from 'react-toastify';
import Button from './Button';
import { getCalendarInfo } from '../scripts/calendar-utils'

export const ADMIN_URL = window.location.protocol + "//" + window.location.host + "/wp-admin/admin-post.php";

/**
 * CurrentButtons component.
 * @param {int} page The current page number.
 * @param {bool} loading Specifies whether the buttons should be rendered as loading or not.
 * @returns Current buttons based on component page state.
 */
function CurrentButtons({ page, loading }) {
  return page == 1 ? (<>
      <Button id="pg1_button" type="submit" loading={loading}>Get a quote</Button>
      <p>Existing customer? <a>Click here</a> to contact us.</p>
    </>) 
    : page == 2 ? (<>
      <p>No thanks.<br /><a href="google.com"><SlArrowLeft /> Return to home</a></p>
      <Button id="pg2_button" type="submit" loading={loading}>Sign me up!</Button>
    </>)
    : (<p></p>);
}

/**
 * CurrentPage component.
 * 
 * @param {int} page The page number to be rendered
 * @param {bool} message Determines whether a message field is displayed on page 1.
 * @param {JSX.Element} inputs A list of inputs to be rendered by the current page
 * @param {bool} getLoading Specifies whether a GET request is currently loading. Used with calendarProps.
 * @param {bool} postLoading Specifies whether a POST request is currently loading.
 * @param {Object | null} calendarInfo (Optional) The calendar information passed to DateTimeBooker
 * @returns Rendered page of the form, including inputs, error fields, and CurrentButtons.
 */
function CurrentPage({ 
  page, message, inputs, getLoading, postLoading, calendarInfo, needsZip
}) {
  const [calendarNeedsZip, setNeedsZip] = needsZip;
  const isDisabled = ( args ) => {
    const { date: date, view: context } = args;

    const openTime = new Date().setHours(calendarInfo.hours[date.getDay()].openHour,
      calendarInfo.hours[date.getDay()].openMinute,0,0);
    const closeTime = new Date().setHours(calendarInfo.hours[date.getDay()].closeHour,
      calendarInfo.hours[date.getDay()].closeMinute,0,0);
  
    const bookingAfter = Math.round((new Date().getTime() + calendarInfo.allowBookingAfter*60*1000)
      /(calendarInfo.slotInterval*60*1000))*(calendarInfo.slotInterval*60*1000);
    const startTime = bookingAfter > openTime && bookingAfter < closeTime ? bookingAfter : openTime;

    let isDisabled = false;
    
    if (context === 'time') {
      calendarInfo.blockedSlots.forEach((slot) => {
        if (date.getTime() >= slot.startTime && date.getTime() <= slot.endTime) {
          isDisabled = true;
          return isDisabled;
        }
      });
    }

    if ((context === 'month') && 
      date.getTime() >= !(new Date(calendarInfo.allowBookingAfter).setHours(0,0,0,0) &&
      date.getTime() <= new Date(calendarInfo.allowBookingFor).setHours(0,0,0,0))) {
      isDisabled = true;
      return isDisabled;
    }

    let timeslots = [];
    for (let t = startTime; t <= closeTime; i + (calendarInfo.slotInterval*60*1000)) {
      timeslots.push(new Date(t));
    }

    blockedSlots.forEach((blockedSlot) => {
      let i = 0;
      while (i < timeslots.length) {
        if (!(timeslots[i].getTime() >= blockedSlot.startTime && timeslots[i].getTime() <= blockedSlot.closeTime)) {
          timeslots.splice(i, 1);
          continue;
        }
        i++;
      }
    })

    isDisabled = timeslots.length == 0;

    return isDisabled;
  }

  const timeInfo = {
    hours: calendarInfo.hours,
    interval: calendarInfo.slotInterval,
    allowBookingAfter: calendarInfo.allowBookingAfter
  };

  return (<ul id={"page" + page} className="page" page={page}>
    {page == 6 ? (<p>Unfortunately, you reside outside of our service area.</p>) 
    : page == 3 && !calendarNeedsZip ? <DateTimeBooker isDisabled={isDisabled} timeInfo={timeInfo} loading={calendarInfo.id} />
    : inputs}
    {(page == 1 && message) ? 
    <li key="contact_message_field">
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" max-length="250" placeholder="Enter message..."></textarea>
      <span className="error"></span>
    </li> : null}
    <CurrentButtons page={page} loading={postLoading} />
  </ul>)
}

/**
 * The main ContactForm component.
 * 
 * Props include a list of inputs with page numbers to be displayed, an optional
 * first page message box. Lots of discrete settings in here, needs to be reworked
 * if turned into a dynamic plugin.
 * 
 * @todo Add mobile layout using isMobile
 * @param {Object} props List of properties passed from view.js
 * @returns Rendered contact form JSX.
 */
function ContactForm (props) {
  let [page, setPage] = useState(3); //CHANGE THIS BACK TO 1
  let [postLoading, setPostLoading] = useState(false);
  let [calendarNeedsZip, setCalendarNeedsZip] = useState(false);

  const calendarInfo = useRef({
    hours: Array.from({length: 7}, () => {return {closeHour: 17, openHour: 9, closeMinute: 0, openMinute: 0}}),
    slotBuffer: 0,
    slotDuration: 30,
    slotInterval: 30,
    allowBookingAfter: 60,
    allowBookingFor: 60,
    id: "default",
    locationId: "default",
    locationName: null,
    blockedSlots: []
  });

  let currentInputs;

  if (page == 3 && calendarNeedsZip) {
    currentInputs = [(
    <li key='zip_field'>
      <label htmlFor="zip">Please enter your zip code to continue.</label>
      <input type="text" id="calendar_zip" name="zip" required />
      <span className="error"></span>
    </li>)];
  } else {
    // Inputs that match page number
    currentInputs = props.inputs.map(input => {
      return input.page == page ? (
      <li key={input.name + "_field"}>
        <label htmlFor={input.id}>{input.label}</label>
        <input type={input.type} id={input.id} name={input.name} required={input.required} />
        <span className="error"></span>
      </li>
      ) : null;
    })
  }
  
  
  /**
   * Submit handler function for ContactForm. Checks validity of each input using checkInput
   * and either renders first validity error or passes the FormData to formSubmit.
   * 
   * @param {Event} e The HTML <form> submit event.
   * 
   * @note Special case: if contact ZIP code is not in service area, form is submitted and
   *     contact is sent to page 6.
   */  
  async function checkValidity(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    if (page == 5) {return;}
    if (page == 2) {setPage(page++); return;}
    if (page == 3 && data.get('zip')) {
      const zipInput = document.querySelector("#calendar_zip")
      let error = zipInput.nextSibling;
      let validity = await checkInput(zipInput, e);

      if (!validity.isValid) {
        error.textContent = validity.error;
        error.className = "error active";
        zipInput.focus();
      } else {
        if (validity.location === "invalid") {
          setPage(6);
          return;
        }
        calendarInfo.current.locationName = validity.location;
        setCalendarNeedsZip(false);
      }
      return;
    }

    const inputList = document.querySelectorAll("form#ps-contact-form input");
    let inputs = Array.from(inputList);
    inputs.pop();
    if (page == 1) {inputs.push(document.querySelector("form#ps-contact-form textarea"));}
    console.log(inputs);

    for (const input of inputs) {
      if (input.id === "hidden") {return;}
      let error = input.nextSibling;
      let validity = await checkInput(input, e);

      if (!validity.isValid) {
        error.textContent = validity.error;
        error.className = "error active";
        input.focus();
        return;
      }

      if(!!validity.location) {
        data.append('location', validity.location);
        if (validity.location === "invalid") {
          setPage(6);
          formSubmit(data);
          return;
        }
      }

      error.textContent = "";
      error.className = "error";
    }

    // response handling section
    try {
      setPostLoading(true);
      const result = await formSubmit(data);

      console.log(result);

      if (!result.success) {
        throw new Error(result.message);
      }

      
      setPostLoading(false);
      setPage(page+1);
      console.log(page);
    } catch (e) {
      if (e.message === 'Error saving the form data.') {
        toast.dismiss();
        toast.error('Oops! Form could not be submitted.')
        setPostLoading(false);
      }
    }
  }

  /**
   * Submits a given FormData object to admin_post.php.
   * 
   * @todo Move advance page function here, and only advance page if wpdb returns success.
   *     Display error if not. Email admin if API call fails.
   * @todo Preemptively fetch appointment information as soon as first page submits.
   * @param {FormData} data Validated form data submitted from ContactForm.
   */
  async function formSubmit(data) {
    try {
      let submission = await fetch(ADMIN_URL, { method: "POST", body: data});
      if (!submission.ok) {
        throw new Error(`HTTP error: ${submission.status}`);
      }
      return await submission.json();
    } catch (e) {
      throw new Error(e);
    }

  }

  if ((page == 2 || page == 3) && calendarInfo.current.id === "default") {
    try {
      calendarInfo.current.id = "loading";
      getCalendarInfo(calendarNeedsZip, calendarInfo.current.locationName)
      .then((calendar) => {
        if (!calendar.success && message.contains("ZIP code")) {
          throw new Error('zip-code');
        }
        calendarInfo.current = calendar;
      })
    } catch (e) {
      if (e.message !== 'zip-code') {
        calendarInfo.current.id = "default-failed";
        console.error(e);
      }
      setCalendarNeedsZip(true);
    }
  }

  return (
    <form noValidate id="ps-contact-form" onSubmit={checkValidity}>
      <CurrentPage 
        page={page}
        message={props.message}
        inputs={currentInputs}
        postLoading={postLoading}
        calendarInfo={calendarInfo.current}
        needsZip={[calendarNeedsZip, setCalendarNeedsZip]}
      />
      <input id="hidden" type="hidden" name="action" value="contact_form" />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss={false}
        role="alert"
        limit={1}
      />
    </form>
  )
}

export default ContactForm;