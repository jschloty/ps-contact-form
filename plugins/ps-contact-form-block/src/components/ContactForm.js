import React, { useState, useRef } from 'react';
import { SlArrowLeft } from "react-icons/sl";
import { checkInput } from '../scripts/form-validation'
import DateTimeBooker from './DateTimeBooker';
import { ToastContainer, toast } from 'react-toastify';
import Button from './Button';
import { getCalendarInfo, appointmentSubmit } from '../scripts/calendar-utils';

export const ADMIN_URL = window.location.protocol + "//" + window.location.host + "/wp-admin/admin-post.php";

/**
 * CurrentButtons component.
 * @param {int} page The current page number.
 * @param {bool} loading Specifies whether the buttons should be rendered as loading or not.
 * @returns Current buttons based on component page state.
 */
function CurrentButtons({ pageState, loading, needsZip }) {
  const [page, setPage] = pageState;
  return page == 1 ? (<>
      <Button id="pg1_button" type="submit" loading={loading}>Get a quote</Button>
      <p id="existing">Existing customer? <a>Click here</a> to contact us.</p>
    </>) 
    : page == 2 ? (<>
      <p>No thanks.<br /><a href="google.com"><SlArrowLeft /> Return to home</a></p>
      <Button id="pg2_button" type="submit" loading={loading}>Sign me up!</Button>
    </>)
    : page == 3 && needsZip ? <Button id="pg3_zip-button" type="submit" loading={loading}>Submit</Button>
    : page == 4 ? <><Button id="pg4_back" type="button" onClick={(e) => {e.preventDefault(); setPage(3)}} ><SlArrowLeft /></Button><Button id="pg4_button" type="submit" loading={loading}>Submit</Button></>
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
  pageState, message, inputs, postLoading, calendarInfo, needsZip, appt
}) {
  const [calendarNeedsZip, setNeedsZip] = needsZip;
  const [page, setPage] = pageState;
  
  const isDisabled = ( args ) => {
    const { date: date, view: context } = args;

    const openTime = new Date().setHours(calendarInfo.openHours[date.getDay()].openHour,
      calendarInfo.openHours[date.getDay()].openMinute,0,0);
    const closeTime = new Date().setHours(calendarInfo.openHours[date.getDay()].closeHour,
      calendarInfo.openHours[date.getDay()].closeMinute,0,0);
  
    const bookingAfter = Math.round((calendarInfo.startTime)
      /(calendarInfo.slotInterval*60*1000))*(calendarInfo.slotInterval*60*1000);
    const startTime = bookingAfter > openTime && bookingAfter < closeTime ? bookingAfter : openTime;

    let isDisabled = false;

    if (context === 'time') {
      calendarInfo.blockedSlots.forEach((slot) => {
        if (date.getTime() >= slot.startTime && date.getTime() <= slot.endTime) {
          isDisabled = true;
        }
      });
      return isDisabled;
    }
    
    let timeslots = [];
    for (let t = startTime; t <= closeTime; t += (calendarInfo.slotInterval*60*1000)) {
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

    isDisabled = timeslots.length == 0;

    return isDisabled;
  }

  const timeInfo = {
    hours: calendarInfo.openHours,
    interval: calendarInfo.slotInterval,
    startTime: calendarInfo.startTime,
    endTime: calendarInfo.endTime
  };

  return (<ul id={"page" + page} className="page" page={page}>
    {page == 6 ? <p>Unfortunately, you reside outside of our service area.</p>
    : (page == 3 && !calendarNeedsZip) || (page == 3 && calendarInfo.id !== "zip-input") ? 
      <DateTimeBooker 
        isDisabled={isDisabled} 
        timeInfo={timeInfo} 
        loading={calendarInfo.id === "loading"} 
        appt={appt} 
        pageState={[page, setPage]}
      />
    : inputs}
    {(page == 1 && message) ? 
    <li key="contact_message_field">
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" max-length="250" placeholder="Enter message..."></textarea>
      <span className="error"></span>
    </li> : null}
    <CurrentButtons pageState={[page, setPage]} loading={postLoading} needsZip={calendarNeedsZip} />
  </ul>)
}

/**
 * The main ContactForm component.
 * 
 * Props include a list of inputs with page numbers to be displayed, an optional
 * first page message box. Lots of discrete settings in here, needs to be reworked
 * if turned into a dynamic plugin.
 * 
 * @todo Add mobile layout using isMobile. ADD NONCE. !!ADD CONTACT INFO SECTION IF SERVER DOESNT MATCH SESSION!!
 * @param {Object} props List of properties passed from view.js
 * @returns Rendered contact form JSX.
 */
function ContactForm (props) {
  const calendarInfo = useRef({
    openHours: Array.from({length: 7}, () => {return {closeHour: 17, openHour: 9, closeMinute: 0, openMinute: 0}}),
    slotBuffer: 0,
    slotDuration: 30,
    slotInterval: 30,
    id: "default",
    locationId: "default",
    locationName: null,
    blockedSlots: [],
    startTime: new Date().setHours(0,0,0,0),
    endTime: new Date(new Date().setMonth(new Date().getMonth() + 2)).setHours(0,0,0,0)
  });

  const { inputs, message, heading, content, nonce } = props;
  
  const now = new Date();
  let initial;

  let [page, setPage] = useState(1); //CHANGE THIS BACK TO 1
  let [getLoading, setGetLoading] = useState(false);
  let [postLoading, setPostLoading] = useState(false);
  let [calendarNeedsZip, setCalendarNeedsZip] = useState(false);
  let [appointmentTime, setAppointment] = useState(initial);

  const setAppointmentTime = (value) => {
    setAppointment(value);
  } 


  let currentInputs;

  if (page == 3 && calendarNeedsZip) {
    currentInputs = [(
    <li key='zip_field'>
      <label htmlFor="zip">Please enter your zip code to continue.</label>
      <input type="text" id="calendar_zip" name="zip" required={true} />
      <span className="error"></span>
    </li>)];
  } else {
    // Inputs that match page number
    currentInputs = inputs.map(input => {
      return input.page == page ? (
      <li key={input.name + "_field"}>
        <label htmlFor={input.id}>{input.label}</label>
        <input type={input.type} id={input.id} name={input.name} required={input.required} />
        <span className="error"></span>
      </li>
      ) : null;
    })
    currentInputs.push(<input key="action" type="hidden" id="action" name="action" value={page == 1 ? "contact_form" : "appointment"}></input>);
    currentInputs.push(<input key="nonce" type="hidden" id="_wpnonce" name="_wpnonce" value={nonce}></input>)
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
    if (page == 2) {
      setPage(page+1);
      return
    }
    if (page == 3 && calendarInfo.current.id !== "zip-input") {
      setPage(page+1);
      return;
    }
    if (page == 3 && calendarInfo.current.id === "zip-input") {
      const zipInput = document.querySelector("#calendar_zip")
      let error = zipInput.nextSibling;
      let validity = await checkInput(zipInput, e);

      if (!validity.isValid) {
        error.textContent = validity.error;
        error.className = "error active";
        zipInput.focus();
        return;
      } else {
        if (validity.location === "invalid") {
          setPage(6);
          return;
        }
        // calendarInfo.current.locationName = validity.location;
        calendarInfo.current.id = "loading";
        calendarInfo.current = await getCalendarInfo(calendarNeedsZip, validity.location);
        initial = now.getHours() > 17 || new Date(now).setHours(0,0,0,0) < new Date(calendarInfo.current.startTime).setHours(0,0,0,0) ? 
          new Date(new Date(now.getTime() + 1000*60*60*24).setHours(0,0,0,0)) 
        : new Date(new Date(now).setHours(0,0,0,0));
        setAppointmentTime(initial);
        setCalendarNeedsZip(false);
      }
      return;
    }

    const inputList = document.querySelectorAll("form#ps-contact-form input");
    let inputs = Array.from(inputList);
    inputs.pop();
    if (page == 1) {inputs.push(document.querySelector("form#ps-contact-form textarea"));}

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
      let result;
      if (page == 1) {
        result = await formSubmit(data);
      } else if (page == 4) {
        result = await appointmentSubmit(data, appointmentTime, calendarInfo.current);
      }
      
      if (!result.success) {
        throw new Error(result.message);
      }
      
      setPostLoading(false);
      setPage(page+1);
    } catch (e) {
      if (e.message === 'Error saving the form data.') {
        toast.dismiss();
        toast.error('Oops! Form could not be submitted.')
        setPostLoading(false);
      }
      console.error(e);
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
    calendarInfo.current.id = "loading";
    getCalendarInfo(calendarNeedsZip, calendarInfo.current.locationName)
    .then((calendar) => {
      if (!calendar.success && calendar.message.includes("location")) {
        throw new Error('zip-code');
      }
      initial = now.getHours() > 17 || new Date(now).setHours(0,0,0,0) < new Date(calendar.startTime).setHours(0,0,0,0) 
        ? new Date(new Date(now.getTime() + 1000*60*60*24).setHours(0,0,0,0)) 
        : new Date(new Date(now).setHours(0,0,0,0));
      calendarInfo.current = calendar;
      setAppointmentTime(initial);
    })
    .catch ((e) => {
      if (e.message !== 'zip-code') {
        calendarInfo.current.id = "default-failed";
        console.error(e);
      }
      calendarInfo.current.id = "zip-input";
      setCalendarNeedsZip(true);
    });
  }

  return (
    <form noValidate id="ps-contact-form" onSubmit={checkValidity}>
      <h1 id="form-h1">{heading?.[page-1]}</h1>
      <p id="form-p">{content?.[page-1]}</p>
      <CurrentPage 
        pageState={[page, setPage]}
        message={message}
        inputs={currentInputs}
        postLoading={postLoading}
        calendarInfo={calendarInfo.current}
        needsZip={[calendarNeedsZip, setCalendarNeedsZip]}
        appt={[appointmentTime, setAppointmentTime]}
      />
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