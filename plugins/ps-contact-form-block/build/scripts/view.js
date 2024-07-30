/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Button.js":
/*!**********************************!*\
  !*** ./src/components/Button.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Spinner */ "./src/components/Spinner.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");





/**
 * Custom button element. Supports loading.
 * @param {Object} props Component props
 * @param {string=} props.id The HTML id of the button
 * @param {string} [props.type="button"] The HTML button type
 * @param {string} props.children The content of the button element.
 * @param {function=} props.onClick Callback function to handle button click.
 * @param {bool=} props.loading Whether the button should be displayed as loading or not
 * @param {string | Array | Object=} props.className button element classes
 * @returns Rendered button
 */
function Button({
  id = "",
  loading = false,
  onClick = () => {},
  type = "button",
  children,
  className = ""
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    id: id,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__.clsx)(className, loading && "loading"),
    onClick: onClick,
    type: type,
    disabled: loading
  }, loading ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Spinner__WEBPACK_IMPORTED_MODULE_1__["default"], null) : children);
}

/***/ }),

/***/ "./src/components/ContactForm.js":
/*!***************************************!*\
  !*** ./src/components/ContactForm.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ADMIN_URL: () => (/* binding */ ADMIN_URL),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_sl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/sl */ "./node_modules/react-icons/sl/index.mjs");
/* harmony import */ var _scripts_form_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/form-validation */ "./src/scripts/form-validation.js");
/* harmony import */ var _DateTimeBooker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DateTimeBooker */ "./src/components/DateTimeBooker.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Button */ "./src/components/Button.js");
/* harmony import */ var _scripts_calendar_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scripts/calendar-utils */ "./src/scripts/calendar-utils.js");








const ADMIN_URL = window.location.protocol + "//" + window.location.host + "/wp-admin/admin-post.php";

/**
 * CurrentButtons component.
 * @param {int} page The current page number.
 * @param {bool} loading Specifies whether the buttons should be rendered as loading or not.
 * @returns Current buttons based on component page state.
 */
function CurrentButtons({
  pageState,
  loading,
  needsZip
}) {
  const [page, setPage] = pageState;
  return page == 1 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "pg1_button",
    type: "submit",
    loading: loading
  }, "Get a quote"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Existing customer? ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", null, "Click here"), " to contact us.")) : page == 2 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "No thanks.", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "google.com"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_icons_sl__WEBPACK_IMPORTED_MODULE_6__.SlArrowLeft, null), " Return to home")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "pg2_button",
    type: "submit",
    loading: loading
  }, "Sign me up!")) : page == 3 && needsZip ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "pg3_zip-button",
    type: "submit",
    loading: loading
  }, "Submit") : page == 4 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "pg4_back",
    type: "button",
    onClick: e => {
      e.preventDefault();
      setPage(3);
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_icons_sl__WEBPACK_IMPORTED_MODULE_6__.SlArrowLeft, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "pg4_button",
    type: "submit",
    loading: loading
  }, "Submit")) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null);
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
  pageState,
  message,
  inputs,
  postLoading,
  calendarInfo,
  needsZip,
  appt
}) {
  const [calendarNeedsZip, setNeedsZip] = needsZip;
  const [page, setPage] = pageState;
  const isDisabled = args => {
    const {
      date: date,
      view: context
    } = args;
    const openTime = new Date().setHours(calendarInfo.openHours[date.getDay()].openHour, calendarInfo.openHours[date.getDay()].openMinute, 0, 0);
    const closeTime = new Date().setHours(calendarInfo.openHours[date.getDay()].closeHour, calendarInfo.openHours[date.getDay()].closeMinute, 0, 0);
    const bookingAfter = Math.round(calendarInfo.startTime / (calendarInfo.slotInterval * 60 * 1000)) * (calendarInfo.slotInterval * 60 * 1000);
    const startTime = bookingAfter > openTime && bookingAfter < closeTime ? bookingAfter : openTime;
    let isDisabled = false;
    if (context === 'time') {
      calendarInfo.blockedSlots.forEach(slot => {
        if (date.getTime() >= slot.startTime && date.getTime() <= slot.endTime) {
          isDisabled = true;
        }
      });
      return isDisabled;
    }
    let timeslots = [];
    for (let t = startTime; t <= closeTime; t += calendarInfo.slotInterval * 60 * 1000) {
      timeslots.push(new Date(t));
    }
    calendarInfo.blockedSlots.forEach(blockedSlot => {
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
  };
  const timeInfo = {
    hours: calendarInfo.openHours,
    interval: calendarInfo.slotInterval,
    startTime: calendarInfo.startTime,
    endTime: calendarInfo.endTime
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    id: "page" + page,
    className: "page",
    page: page
  }, page == 6 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Unfortunately, you reside outside of our service area.") : page == 3 && !calendarNeedsZip || page == 3 && calendarInfo.id !== "zip-input" ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_DateTimeBooker__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isDisabled: isDisabled,
    timeInfo: timeInfo,
    loading: calendarInfo.id === "loading",
    appt: appt,
    pageState: [page, setPage]
  }) : inputs, page == 1 && message ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    key: "contact_message_field"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "message"
  }, "Message"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea", {
    id: "message",
    name: "message",
    "max-length": "250",
    placeholder: "Enter message..."
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "error"
  })) : null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(CurrentButtons, {
    pageState: [page, setPage],
    loading: postLoading,
    needsZip: calendarNeedsZip
  }));
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
function ContactForm(props) {
  const calendarInfo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    openHours: Array.from({
      length: 7
    }, () => {
      return {
        closeHour: 17,
        openHour: 9,
        closeMinute: 0,
        openMinute: 0
      };
    }),
    slotBuffer: 0,
    slotDuration: 30,
    slotInterval: 30,
    id: "default",
    locationId: "default",
    locationName: null,
    blockedSlots: [],
    startTime: new Date().setHours(0, 0, 0, 0),
    endTime: new Date(new Date().setMonth(new Date().getMonth() + 2)).setHours(0, 0, 0, 0)
  });
  const {
    inputs,
    message,
    heading,
    content,
    nonce
  } = props;
  const now = new Date();
  let initial;
  let [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1); //CHANGE THIS BACK TO 1
  let [getLoading, setGetLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  let [postLoading, setPostLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  let [calendarNeedsZip, setCalendarNeedsZip] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  let [appointmentTime, setAppointment] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initial);
  const setAppointmentTime = value => {
    setAppointment(value);
  };
  let currentInputs;
  if (page == 3 && calendarNeedsZip) {
    currentInputs = [(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      key: "zip_field"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: "zip"
    }, "Please enter your zip code to continue."), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "text",
      id: "calendar_zip",
      name: "zip",
      required: true
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "error"
    }))];
  } else {
    // Inputs that match page number
    currentInputs = inputs.map(input => {
      return input.page == page ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
        key: input.name + "_field"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
        htmlFor: input.id
      }, input.label), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
        type: input.type,
        id: input.id,
        name: input.name,
        required: input.required
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        className: "error"
      })) : null;
    });
    currentInputs.push((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "hidden",
      id: "action",
      name: "action",
      value: page == 1 ? "contact_form" : "appointment"
    }));
    currentInputs.push((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "hidden",
      id: "_wpnonce",
      name: "_wpnonce",
      value: nonce
    }));
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
    if (page == 5) {
      return;
    }
    if (page == 2) {
      setPage(page + 1);
      return;
    }
    if (page == 3 && calendarInfo.current.id !== "zip-input") {
      setPage(page + 1);
      return;
    }
    if (page == 3 && calendarInfo.current.id === "zip-input") {
      const zipInput = document.querySelector("#calendar_zip");
      let error = zipInput.nextSibling;
      let validity = await (0,_scripts_form_validation__WEBPACK_IMPORTED_MODULE_1__.checkInput)(zipInput, e);
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
        calendarInfo.current = await (0,_scripts_calendar_utils__WEBPACK_IMPORTED_MODULE_5__.getCalendarInfo)(calendarNeedsZip, validity.location);
        initial = now.getHours() > 17 || new Date(now).setHours(0, 0, 0, 0) < new Date(calendarInfo.current.startTime).setHours(0, 0, 0, 0) ? new Date(new Date(now.getTime() + 1000 * 60 * 60 * 24).setHours(0, 0, 0, 0)) : new Date(new Date(now).setHours(0, 0, 0, 0));
        setAppointmentTime(initial);
        setCalendarNeedsZip(false);
      }
      return;
    }
    const inputList = document.querySelectorAll("form#ps-contact-form input");
    let inputs = Array.from(inputList);
    inputs.pop();
    if (page == 1) {
      inputs.push(document.querySelector("form#ps-contact-form textarea"));
    }
    for (const input of inputs) {
      if (input.id === "hidden") {
        return;
      }
      let error = input.nextSibling;
      let validity = await (0,_scripts_form_validation__WEBPACK_IMPORTED_MODULE_1__.checkInput)(input, e);
      if (!validity.isValid) {
        error.textContent = validity.error;
        error.className = "error active";
        input.focus();
        return;
      }
      if (!!validity.location) {
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
        result = await (0,_scripts_calendar_utils__WEBPACK_IMPORTED_MODULE_5__.appointmentSubmit)(data, appointmentTime, calendarInfo.current);
      }
      if (!result.success) {
        throw new Error(result.message);
      }
      setPostLoading(false);
      setPage(page + 1);
    } catch (e) {
      if (e.message === 'Error saving the form data.') {
        react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.dismiss();
        react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error('Oops! Form could not be submitted.');
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
      let submission = await fetch(ADMIN_URL, {
        method: "POST",
        body: data
      });
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
    (0,_scripts_calendar_utils__WEBPACK_IMPORTED_MODULE_5__.getCalendarInfo)(calendarNeedsZip, calendarInfo.current.locationName).then(calendar => {
      if (!calendar.success && calendar.message.includes("location")) {
        throw new Error('zip-code');
      }
      initial = now.getHours() > 17 || new Date(now).setHours(0, 0, 0, 0) < new Date(calendar.startTime).setHours(0, 0, 0, 0) ? new Date(new Date(now.getTime() + 1000 * 60 * 60 * 24).setHours(0, 0, 0, 0)) : new Date(new Date(now).setHours(0, 0, 0, 0));
      calendarInfo.current = calendar;
      setAppointmentTime(initial);
    }).catch(e => {
      if (e.message !== 'zip-code') {
        calendarInfo.current.id = "default-failed";
        console.error(e);
      }
      calendarInfo.current.id = "zip-input";
      setCalendarNeedsZip(true);
    });
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
    noValidate: true,
    id: "ps-contact-form",
    onSubmit: checkValidity
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    id: "form-h2"
  }, heading?.[page - 1]), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    id: "form-p"
  }, content?.[page - 1]), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(CurrentPage, {
    pageState: [page, setPage],
    message: message,
    inputs: currentInputs,
    postLoading: postLoading,
    calendarInfo: calendarInfo.current,
    needsZip: [calendarNeedsZip, setCalendarNeedsZip],
    appt: [appointmentTime, setAppointmentTime]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: true,
    newestOnTop: true,
    closeOnClick: true,
    pauseOnFocusLoss: false,
    role: "alert",
    limit: 1
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactForm);

/***/ }),

/***/ "./src/components/DateTimeBooker.js":
/*!******************************************!*\
  !*** ./src/components/DateTimeBooker.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DateTimeBooker)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-calendar */ "./node_modules/react-calendar/dist/esm/Calendar.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var react_icons_sl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/sl */ "./node_modules/react-icons/sl/index.mjs");






const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let isMobile = window.innerWidth <= 768;
window.addEventListener("resize", () => {
  if (window.innerWidth <= 768) {
    isMobile = true;
  } else {
    isMobile = false;
  }
});

/**
 * BookerPlaceholder: a greyed out dummy calendar that displays while the calendar info is retrieved.
 * 
 */
function BookerPlaceholder() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "LOADING...");
}

/**
 * The TimeSlot component. Represents an individual time slot button.
 * 
 * @param {Date} value The currently selected date
 * @param {Function} onChange Callback function called when selected time changes 
 * @param {boolean} disabled Indicates whether the time slot is disabled
 * @returns 
 */
function TimeSlot({
  children,
  onChange,
  disabled,
  myKey,
  activeKey,
  onSwap
}) {
  const value = children;

  /**
   * Simple time formatting function   * 
   * @param {Date} value 
   * @returns formatted time string to display
   */
  const formatTime = value => {
    const suffix = value.getHours() >= 12 ? "PM" : "AM";
    return (value.getHours() > 12 ? value.getHours() - 12 : value.getHours()) + ":" + value.getMinutes().toString().padEnd(2, "0") + " " + suffix;
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'timeslot',
    style: {
      display: 'flex'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__.clsx)('timeslot__value', myKey == activeKey ? 'timeslot__value--active' : ''),
    onClick: () => {
      onSwap(myKey);
    },
    disabled: disabled,
    value: value,
    type: "button"
  }, formatTime(value)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__.clsx)('timeslot__select', myKey == activeKey ? '' : 'timeslot__select--hidden'),
    type: "submit",
    onClick: e => {
      e.preventDefault();
      onChange(value, e, true);
    }
  }, "Select"));
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
function TimeGrid({
  value,
  changedDay,
  onChange,
  hours,
  interval,
  startTime,
  slotDisabled
}) {
  const [activeKey, setActiveKey] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(-1);
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
  const getFormattedDate = value => {
    return `${MONTHS[value.getMonth()]} ${value.getDate()}, ${value.getFullYear()}`;
  };
  let coeff = 1000 * 60 * interval;
  const current = new Date(Math.round(value.getTime() / coeff) * coeff);
  const now = new Date();
  const nowRounded = new Date(Math.round(now.getTime() / coeff) * coeff);
  const openTime = value.setHours(hours[value.getDay()].openHour, hours[value.getDay()].openMinute, 0, 0);
  const closeTime = value.setHours(hours[value.getDay()].closeHour, hours[value.getDay()].closeMinute, 0, 0);
  const bookingAfter = Math.round(startTime / (interval * 60 * 1000)) * (interval * 60 * 1000);
  const start = bookingAfter > openTime && bookingAfter < closeTime ? bookingAfter : openTime;
  const endTime = closeTime;
  let times = []; // in ms

  for (let time = start; time <= endTime; time += coeff) {
    times.push(time);
  }
  const timeSlots = times.map(time => {
    return new Date(time);
  });
  const handleSwap = key => {
    setActiveKey(key);
  };
  const props = {
    activeKey: activeKey,
    onChange: onChange,
    onSwap: handleSwap
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "timegrid"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mobile-header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", null, WEEKDAYS[value.getDay()]), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, getFormattedDate(value)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "timegrid__previous",
    type: "button",
    onClick: () => {
      onChange(value, -1);
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_icons_sl__WEBPACK_IMPORTED_MODULE_2__.SlArrowLeft, null))), timeSlots.map((slot, i) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TimeSlot, {
      key: "timeslot" + i,
      myKey: i,
      disabled: slotDisabled({
        date: slot,
        view: 'time'
      }),
      ...props
    }, slot);
  }));
}
function DateTimeBooker({
  isDisabled,
  timeInfo,
  loading,
  appt,
  pageState
}) {
  const [formPage, setFormPage] = pageState;
  const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const [value, setValue] = appt;
  const changedDay = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
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
  };
  const onChangeMobile = (value, newPage) => {
    onChange(value);
    setPage(page + newPage);
  };
  return loading ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BookerPlaceholder, null) :
  // !isMobile 
   true ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "date-time-booker-container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_calendar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onChange: onChange,
    onActiveStartDateChange: ({
      action
    }) => {
      if (action === "prev" || action === "next") {
        changedDay.current = true;
        setValue(null);
      }
    },
    minDetail: "month",
    value: value,
    tileDisabled: isDisabled,
    minDate: new Date(new Date(startTime).setHours(0, 0, 0, 0)),
    maxDate: new Date(new Date(endTime).setHours(0, 0, 0, 0))
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TimeGrid, {
    onChange: onChange,
    value: value,
    changedDay: changedDay,
    hours: hours,
    interval: interval,
    startTime: startTime,
    slotDisabled: isDisabled,
    style: value != null ? "" : {
      display: "none"
    }
  })) : 0;
}

/***/ }),

/***/ "./src/components/Spinner.js":
/*!***********************************!*\
  !*** ./src/components/Spinner.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Spinner)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function Spinner() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "spinner"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null));
}

/***/ }),

/***/ "./src/scripts/calendar-utils.js":
/*!***************************************!*\
  !*** ./src/scripts/calendar-utils.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appointmentSubmit: () => (/* binding */ appointmentSubmit),
/* harmony export */   getCalendarInfo: () => (/* binding */ getCalendarInfo)
/* harmony export */ });
/* harmony import */ var _components_ContactForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/ContactForm */ "./src/components/ContactForm.js");
// import React from 'react';

async function getCalendarInfo(needsLocation = false, locationName) {
  if (needsLocation && !locationName) {
    throw new Error("Location name must be supplied.");
  }
  let request_url = _components_ContactForm__WEBPACK_IMPORTED_MODULE_0__.ADMIN_URL + '?action=calendar_info';
  request_url += needsLocation ? '&location_name=' + locationName : '';
  console.log(request_url);
  const response = await fetch(request_url, {
    method: "GET"
  });
  let calendarInfo;
  calendarInfo = await response.json();
  console.log(calendarInfo);
  return calendarInfo;
}

/**
 * Submits an appointment to the server.
 * 
 * @param {FormData} data Validated form data from the appointment submission.
 * @param {Date} time The time of the appointment.
 * @param {calendarInfo} calendarInfo Information about the calendar, used to determine appointment duration.
 */
async function appointmentSubmit(data, time, calendarInfo) {
  data.append("calendarId", calendarInfo.id);
  data.append("locationId", calendarInfo.locationId);
  data.append("startTime", time.getTime());
  data.append("endTime", time.getTime() + calendarInfo.slotDuration * 60 * 1000);
  console.log("action: " + data.get("action"));
  const response = await fetch(_components_ContactForm__WEBPACK_IMPORTED_MODULE_0__.ADMIN_URL, {
    method: "POST",
    body: data
  });
  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }
  console.log(await response.text());
  return await response.json();
}

/***/ }),

/***/ "./src/scripts/form-validation.js":
/*!****************************************!*\
  !*** ./src/scripts/form-validation.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkInput: () => (/* binding */ checkInput)
/* harmony export */ });
/* harmony import */ var _components_ContactForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/ContactForm */ "./src/components/ContactForm.js");


/** Checks the validity of all accepted input types. If input is ZIP code, returns
 * user location: RVA, VAB, FL, or invalid.
 * 
 * @param input: HTMLInputElement || HTMLTextAreaElement
 * @param e: submit Event
 * @returns object {isValid: bool, error: string || null, location: string || null}
 */
function checkInput(input, e) {
  if (!input.id || !input.name) {
    return {
      isValid: false,
      error: "Invalid input object"
    };
  }
  let validity = {
    isValid: false
  };
  const formdata = new FormData(e.target);
  if (input.name === "message") {
    if (input.validity.tooLong) {
      validity.error = "Message must be less than 250 characters.";
      return validity;
    } else {
      validity.isValid = true;
      return validity;
    }
  } else if (input.type === "text") {
    if (input.name === "zip") {
      let userZip = parseInt(formdata.get('zip'));
      if (!userZip.length == 5) {
        validity.error = "Enter a 5-digit ZIP code.";
        return validity;
      }
      if (input.validity.valueMissing) {
        validity.error = "This field is required.";
        return validity;
      }
      return fetch(_components_ContactForm__WEBPACK_IMPORTED_MODULE_0__.ADMIN_URL + "?action=zip_request", {
        method: "GET"
      }).then(data => data.json()).then(zips => {
        return zips.rva.includes(userZip) ? {
          isValid: true,
          location: 'RVA'
        } : zips.vab.includes(userZip) ? {
          isValid: true,
          location: 'VAB'
        } : zips.fl.includes(userZip) ? {
          isValid: true,
          location: 'FL'
        } : {
          isValid: true,
          location: 'invalid'
        };
      }).catch(error => {
        console.error(`Could not retrieve valid ZIPs: ${error.message}`);
      });
    } else {
      validity.isValid = !input.validity.valueMissing;
      validity.error = input.validity.valueMissing ? "This field is required." : "";
      return validity;
    }
  } else if (input.type === "tel") {
    validity.isValid = !input.validity.valueMissing;
    validity.error = input.validity.valueMissing ? "This field is required." : "";
    return validity;
  } else if (input.type === "email") {
    validity.isValid = !input.validity.valueMissing && !input.validity.typeMismatch;
    validity.error = input.validity.valueMissing ? "This field is required." : input.validity.typeMismatch ? "Not a valid email address." : "";
    return validity;
  }
}

/***/ }),

/***/ "./node_modules/map-age-cleaner/dist/index.js":
/*!****************************************************!*\
  !*** ./node_modules/map-age-cleaner/dist/index.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const p_defer_1 = __importDefault(__webpack_require__(/*! p-defer */ "./node_modules/p-defer/index.js"));
function mapAgeCleaner(map, property = 'maxAge') {
    let processingKey;
    let processingTimer;
    let processingDeferred;
    const cleanup = () => __awaiter(this, void 0, void 0, function* () {
        if (processingKey !== undefined) {
            // If we are already processing an item, we can safely exit
            return;
        }
        const setupTimer = (item) => __awaiter(this, void 0, void 0, function* () {
            processingDeferred = p_defer_1.default();
            const delay = item[1][property] - Date.now();
            if (delay <= 0) {
                // Remove the item immediately if the delay is equal to or below 0
                map.delete(item[0]);
                processingDeferred.resolve();
                return;
            }
            // Keep track of the current processed key
            processingKey = item[0];
            processingTimer = setTimeout(() => {
                // Remove the item when the timeout fires
                map.delete(item[0]);
                if (processingDeferred) {
                    processingDeferred.resolve();
                }
            }, delay);
            // tslint:disable-next-line:strict-type-predicates
            if (typeof processingTimer.unref === 'function') {
                // Don't hold up the process from exiting
                processingTimer.unref();
            }
            return processingDeferred.promise;
        });
        try {
            for (const entry of map) {
                yield setupTimer(entry);
            }
        }
        catch (_a) {
            // Do nothing if an error occurs, this means the timer was cleaned up and we should stop processing
        }
        processingKey = undefined;
    });
    const reset = () => {
        processingKey = undefined;
        if (processingTimer !== undefined) {
            clearTimeout(processingTimer);
            processingTimer = undefined;
        }
        if (processingDeferred !== undefined) { // tslint:disable-line:early-exit
            processingDeferred.reject(undefined);
            processingDeferred = undefined;
        }
    };
    const originalSet = map.set.bind(map);
    map.set = (key, value) => {
        if (map.has(key)) {
            // If the key already exist, remove it so we can add it back at the end of the map.
            map.delete(key);
        }
        // Call the original `map.set`
        const result = originalSet(key, value);
        // If we are already processing a key and the key added is the current processed key, stop processing it
        if (processingKey && processingKey === key) {
            reset();
        }
        // Always run the cleanup method in case it wasn't started yet
        cleanup(); // tslint:disable-line:no-floating-promises
        return result;
    };
    cleanup(); // tslint:disable-line:no-floating-promises
    return map;
}
exports["default"] = mapAgeCleaner;
// Add support for CJS
module.exports = mapAgeCleaner;
module.exports["default"] = mapAgeCleaner;


/***/ }),

/***/ "./node_modules/mem/dist/index.js":
/*!****************************************!*\
  !*** ./node_modules/mem/dist/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const mimicFn = __webpack_require__(/*! mimic-fn */ "./node_modules/mem/node_modules/mimic-fn/index.js");
const mapAgeCleaner = __webpack_require__(/*! map-age-cleaner */ "./node_modules/map-age-cleaner/dist/index.js");
const decoratorInstanceMap = new WeakMap();
const cacheStore = new WeakMap();
/**
[Memoize](https://en.wikipedia.org/wiki/Memoization) functions - An optimization used to speed up consecutive function calls by caching the result of calls with identical input.

@param fn - Function to be memoized.

@example
```
import mem = require('mem');

let i = 0;
const counter = () => ++i;
const memoized = mem(counter);

memoized('foo');
//=> 1

// Cached as it's the same arguments
memoized('foo');
//=> 1

// Not cached anymore as the arguments changed
memoized('bar');
//=> 2

memoized('bar');
//=> 2
```
*/
const mem = (fn, { cacheKey, cache = new Map(), maxAge } = {}) => {
    if (typeof maxAge === 'number') {
        // TODO: Drop after https://github.com/SamVerschueren/map-age-cleaner/issues/5
        // @ts-expect-error
        mapAgeCleaner(cache);
    }
    const memoized = function (...arguments_) {
        const key = cacheKey ? cacheKey(arguments_) : arguments_[0];
        const cacheItem = cache.get(key);
        if (cacheItem) {
            return cacheItem.data;
        }
        const result = fn.apply(this, arguments_);
        cache.set(key, {
            data: result,
            maxAge: maxAge ? Date.now() + maxAge : Number.POSITIVE_INFINITY
        });
        return result;
    };
    mimicFn(memoized, fn, {
        ignoreNonConfigurable: true
    });
    cacheStore.set(memoized, cache);
    return memoized;
};
/**
@returns A [decorator](https://github.com/tc39/proposal-decorators) to memoize class methods or static class methods.

@example
```
import mem = require('mem');

class Example {
    index = 0

    @mem.decorator()
    counter() {
        return ++this.index;
    }
}

class ExampleWithOptions {
    index = 0

    @mem.decorator({maxAge: 1000})
    counter() {
        return ++this.index;
    }
}
```
*/
mem.decorator = (options = {}) => (target, propertyKey, descriptor) => {
    const input = target[propertyKey];
    if (typeof input !== 'function') {
        throw new TypeError('The decorated value must be a function');
    }
    delete descriptor.value;
    delete descriptor.writable;
    descriptor.get = function () {
        if (!decoratorInstanceMap.has(this)) {
            const value = mem(input, options);
            decoratorInstanceMap.set(this, value);
            return value;
        }
        return decoratorInstanceMap.get(this);
    };
};
/**
Clear all cached data of a memoized function.

@param fn - Memoized function.
*/
mem.clear = (fn) => {
    const cache = cacheStore.get(fn);
    if (!cache) {
        throw new TypeError('Can\'t clear a function that was not memoized!');
    }
    if (typeof cache.clear !== 'function') {
        throw new TypeError('The cache Map can\'t be cleared!');
    }
    cache.clear();
};
module.exports = mem;


/***/ }),

/***/ "./node_modules/mem/node_modules/mimic-fn/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/mem/node_modules/mimic-fn/index.js ***!
  \*********************************************************/
/***/ ((module) => {



const copyProperty = (to, from, property, ignoreNonConfigurable) => {
	// `Function#length` should reflect the parameters of `to` not `from` since we keep its body.
	// `Function#prototype` is non-writable and non-configurable so can never be modified.
	if (property === 'length' || property === 'prototype') {
		return;
	}

	// `Function#arguments` and `Function#caller` should not be copied. They were reported to be present in `Reflect.ownKeys` for some devices in React Native (#41), so we explicitly ignore them here.
	if (property === 'arguments' || property === 'caller') {
		return;
	}

	const toDescriptor = Object.getOwnPropertyDescriptor(to, property);
	const fromDescriptor = Object.getOwnPropertyDescriptor(from, property);

	if (!canCopyProperty(toDescriptor, fromDescriptor) && ignoreNonConfigurable) {
		return;
	}

	Object.defineProperty(to, property, fromDescriptor);
};

// `Object.defineProperty()` throws if the property exists, is not configurable and either:
//  - one its descriptors is changed
//  - it is non-writable and its value is changed
const canCopyProperty = function (toDescriptor, fromDescriptor) {
	return toDescriptor === undefined || toDescriptor.configurable || (
		toDescriptor.writable === fromDescriptor.writable &&
		toDescriptor.enumerable === fromDescriptor.enumerable &&
		toDescriptor.configurable === fromDescriptor.configurable &&
		(toDescriptor.writable || toDescriptor.value === fromDescriptor.value)
	);
};

const changePrototype = (to, from) => {
	const fromPrototype = Object.getPrototypeOf(from);
	if (fromPrototype === Object.getPrototypeOf(to)) {
		return;
	}

	Object.setPrototypeOf(to, fromPrototype);
};

const wrappedToString = (withName, fromBody) => `/* Wrapped ${withName}*/\n${fromBody}`;

const toStringDescriptor = Object.getOwnPropertyDescriptor(Function.prototype, 'toString');
const toStringName = Object.getOwnPropertyDescriptor(Function.prototype.toString, 'name');

// We call `from.toString()` early (not lazily) to ensure `from` can be garbage collected.
// We use `bind()` instead of a closure for the same reason.
// Calling `from.toString()` early also allows caching it in case `to.toString()` is called several times.
const changeToString = (to, from, name) => {
	const withName = name === '' ? '' : `with ${name.trim()}() `;
	const newToString = wrappedToString.bind(null, withName, from.toString());
	// Ensure `to.toString.toString` is non-enumerable and has the same `same`
	Object.defineProperty(newToString, 'name', toStringName);
	Object.defineProperty(to, 'toString', {...toStringDescriptor, value: newToString});
};

const mimicFn = (to, from, {ignoreNonConfigurable = false} = {}) => {
	const {name} = to;

	for (const property of Reflect.ownKeys(from)) {
		copyProperty(to, from, property, ignoreNonConfigurable);
	}

	changePrototype(to, from);
	changeToString(to, from, name);

	return to;
};

module.exports = mimicFn;


/***/ }),

/***/ "./node_modules/p-defer/index.js":
/*!***************************************!*\
  !*** ./node_modules/p-defer/index.js ***!
  \***************************************/
/***/ ((module) => {


module.exports = () => {
	const ret = {};

	ret.promise = new Promise((resolve, reject) => {
		ret.resolve = resolve;
		ret.reject = reject;
	});

	return ret;
};


/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-runtime.development.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-runtime.development.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "react");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types.
var REACT_ELEMENT_TYPE = Symbol.for('react.element');
var REACT_PORTAL_TYPE = Symbol.for('react.portal');
var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
var REACT_CONTEXT_TYPE = Symbol.for('react.context');
var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
var REACT_MEMO_TYPE = Symbol.for('react.memo');
var REACT_LAZY_TYPE = Symbol.for('react.lazy');
var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      printWarning('error', format, args);
    }
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    } // eslint-disable-next-line react-internal/safe-string-coercion


    var argsWithFormat = args.map(function (item) {
      return String(item);
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// -----------------------------------------------------------------------------

var enableScopeAPI = false; // Experimental Create Event Handle API.
var enableCacheElement = false;
var enableTransitionTracing = false; // No known bugs, but needs performance testing

var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
// stuff. Intended to enable React core members to more easily debug scheduling
// issues in DEV builds.

var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

var REACT_MODULE_REFERENCE;

{
  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
}

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
    // types supported by any Flight configuration anywhere since
    // we don't know which Flight build this will end up being used
    // with.
    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var displayName = outerType.displayName;

  if (displayName) {
    return displayName;
  }

  var functionName = innerType.displayName || innerType.name || '';
  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
} // Keep in sync with react-reconciler/getComponentNameFromFiber


function getContextName(type) {
  return type.displayName || 'Context';
} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


function getComponentNameFromType(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';

  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        var outerName = type.displayName || null;

        if (outerName !== null) {
          return outerName;
        }

        return getComponentNameFromType(type.type) || 'Memo';

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentNameFromType(init(payload));
          } catch (x) {
            return null;
          }
        }

      // eslint-disable-next-line no-fallthrough
    }
  }

  return null;
}

var assign = Object.assign;

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: assign({}, props, {
          value: prevLog
        }),
        info: assign({}, props, {
          value: prevInfo
        }),
        warn: assign({}, props, {
          value: prevWarn
        }),
        error: assign({}, props, {
          value: prevError
        }),
        group: assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if ( !fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
                // but we have a user-provided "displayName"
                // splice it in to make the stack more readable.


                if (fn.displayName && _frame.includes('<anonymous>')) {
                  _frame = _frame.replace('<anonymous>', fn.displayName);
                }

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            // eslint-disable-next-line react-internal/prod-error-codes
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

function isArray(a) {
  return isArrayImpl(a);
}

/*
 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
 *
 * The functions in this module will throw an easier-to-understand,
 * easier-to-debug exception with a clear errors message message explaining the
 * problem. (Instead of a confusing exception thrown inside the implementation
 * of the `value` object).
 */
// $FlowFixMe only called in DEV, so void return is not possible.
function typeName(value) {
  {
    // toStringTag is needed for namespaced types like Temporal.Instant
    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
    return type;
  }
} // $FlowFixMe only called in DEV, so void return is not possible.


function willCoercionThrow(value) {
  {
    try {
      testStringCoercion(value);
      return false;
    } catch (e) {
      return true;
    }
  }
}

function testStringCoercion(value) {
  // If you ended up here by following an exception call stack, here's what's
  // happened: you supplied an object or symbol value to React (as a prop, key,
  // DOM attribute, CSS property, string ref, etc.) and when React tried to
  // coerce it to a string using `'' + value`, an exception was thrown.
  //
  // The most common types that will cause this exception are `Symbol` instances
  // and Temporal objects like `Temporal.Instant`. But any object that has a
  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
  // exception. (Library authors do this to prevent users from using built-in
  // numeric operators like `+` or comparison operators like `>=` because custom
  // methods are needed to perform accurate arithmetic or comparison.)
  //
  // To fix the problem, coerce this object or symbol value to a string before
  // passing it to React. The most reliable way is usually `String(value)`.
  //
  // To find which value is throwing, check the browser or debugger console.
  // Before this exception was thrown, there should be `console.error` output
  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
  // problem and how that type was used: key, atrribute, input value prop, etc.
  // In most cases, this console output also shows the component and its
  // ancestor components where the exception happened.
  //
  // eslint-disable-next-line react-internal/safe-string-coercion
  return '' + value;
}
function checkKeyStringCoercion(value) {
  {
    if (willCoercionThrow(value)) {
      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      {
        checkKeyStringCoercion(maybeKey);
      }

      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      {
        checkKeyStringCoercion(config.key);
      }

      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */


function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentNameFromType(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentNameFromType(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

var didWarnAboutKeySpread = {};
function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    {
      if (hasOwnProperty.call(props, 'key')) {
        var componentName = getComponentNameFromType(type);
        var keys = Object.keys(props).filter(function (k) {
          return k !== 'key';
        });
        var beforeExample = keys.length > 0 ? '{key: someKey, ' + keys.join(': ..., ') + ': ...}' : '{key: someKey}';

        if (!didWarnAboutKeySpread[componentName + beforeExample]) {
          var afterExample = keys.length > 0 ? '{' + keys.join(': ..., ') + ': ...}' : '{}';

          error('A props object containing a "key" prop is being spread into JSX:\n' + '  let props = %s;\n' + '  <%s {...props} />\n' + 'React keys must be passed directly to JSX without using spread:\n' + '  let props = %s;\n' + '  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);

          didWarnAboutKeySpread[componentName + beforeExample] = true;
        }
      }
    }

    if (type === REACT_FRAGMENT_TYPE) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev
// even with the prod transform. This means that jsxDEV is purely
// opt-in behavior for better messages but that we won't stop
// giving you warnings if you use production apis.

function jsxWithValidationStatic(type, props, key) {
  {
    return jsxWithValidation(type, props, key, true);
  }
}
function jsxWithValidationDynamic(type, props, key) {
  {
    return jsxWithValidation(type, props, key, false);
  }
}

var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
// for now we can ship identical prod functions

var jsxs =  jsxWithValidationStatic ;

exports.Fragment = REACT_FRAGMENT_TYPE;
exports.jsx = jsx;
exports.jsxs = jsxs;
  })();
}


/***/ }),

/***/ "./node_modules/react/jsx-runtime.js":
/*!*******************************************!*\
  !*** ./node_modules/react/jsx-runtime.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-runtime.development.js */ "./node_modules/react/cjs/react-jsx-runtime.development.js");
}


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = window["ReactDOM"];

/***/ }),

/***/ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@wojtekmaj/date-utils/dist/esm/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCenturyEnd: () => (/* binding */ getCenturyEnd),
/* harmony export */   getCenturyRange: () => (/* binding */ getCenturyRange),
/* harmony export */   getCenturyStart: () => (/* binding */ getCenturyStart),
/* harmony export */   getDate: () => (/* binding */ getDate),
/* harmony export */   getDayEnd: () => (/* binding */ getDayEnd),
/* harmony export */   getDayRange: () => (/* binding */ getDayRange),
/* harmony export */   getDayStart: () => (/* binding */ getDayStart),
/* harmony export */   getDaysInMonth: () => (/* binding */ getDaysInMonth),
/* harmony export */   getDecadeEnd: () => (/* binding */ getDecadeEnd),
/* harmony export */   getDecadeRange: () => (/* binding */ getDecadeRange),
/* harmony export */   getDecadeStart: () => (/* binding */ getDecadeStart),
/* harmony export */   getHours: () => (/* binding */ getHours),
/* harmony export */   getHoursMinutes: () => (/* binding */ getHoursMinutes),
/* harmony export */   getHoursMinutesSeconds: () => (/* binding */ getHoursMinutesSeconds),
/* harmony export */   getISOLocalDate: () => (/* binding */ getISOLocalDate),
/* harmony export */   getISOLocalDateTime: () => (/* binding */ getISOLocalDateTime),
/* harmony export */   getISOLocalMonth: () => (/* binding */ getISOLocalMonth),
/* harmony export */   getMilliseconds: () => (/* binding */ getMilliseconds),
/* harmony export */   getMinutes: () => (/* binding */ getMinutes),
/* harmony export */   getMonth: () => (/* binding */ getMonth),
/* harmony export */   getMonthEnd: () => (/* binding */ getMonthEnd),
/* harmony export */   getMonthHuman: () => (/* binding */ getMonthHuman),
/* harmony export */   getMonthRange: () => (/* binding */ getMonthRange),
/* harmony export */   getMonthStart: () => (/* binding */ getMonthStart),
/* harmony export */   getNextCenturyEnd: () => (/* binding */ getNextCenturyEnd),
/* harmony export */   getNextCenturyStart: () => (/* binding */ getNextCenturyStart),
/* harmony export */   getNextDayEnd: () => (/* binding */ getNextDayEnd),
/* harmony export */   getNextDayStart: () => (/* binding */ getNextDayStart),
/* harmony export */   getNextDecadeEnd: () => (/* binding */ getNextDecadeEnd),
/* harmony export */   getNextDecadeStart: () => (/* binding */ getNextDecadeStart),
/* harmony export */   getNextMonthEnd: () => (/* binding */ getNextMonthEnd),
/* harmony export */   getNextMonthStart: () => (/* binding */ getNextMonthStart),
/* harmony export */   getNextYearEnd: () => (/* binding */ getNextYearEnd),
/* harmony export */   getNextYearStart: () => (/* binding */ getNextYearStart),
/* harmony export */   getPreviousCenturyEnd: () => (/* binding */ getPreviousCenturyEnd),
/* harmony export */   getPreviousCenturyStart: () => (/* binding */ getPreviousCenturyStart),
/* harmony export */   getPreviousDayEnd: () => (/* binding */ getPreviousDayEnd),
/* harmony export */   getPreviousDayStart: () => (/* binding */ getPreviousDayStart),
/* harmony export */   getPreviousDecadeEnd: () => (/* binding */ getPreviousDecadeEnd),
/* harmony export */   getPreviousDecadeStart: () => (/* binding */ getPreviousDecadeStart),
/* harmony export */   getPreviousMonthEnd: () => (/* binding */ getPreviousMonthEnd),
/* harmony export */   getPreviousMonthStart: () => (/* binding */ getPreviousMonthStart),
/* harmony export */   getPreviousYearEnd: () => (/* binding */ getPreviousYearEnd),
/* harmony export */   getPreviousYearStart: () => (/* binding */ getPreviousYearStart),
/* harmony export */   getSeconds: () => (/* binding */ getSeconds),
/* harmony export */   getYear: () => (/* binding */ getYear),
/* harmony export */   getYearEnd: () => (/* binding */ getYearEnd),
/* harmony export */   getYearRange: () => (/* binding */ getYearRange),
/* harmony export */   getYearStart: () => (/* binding */ getYearStart)
/* harmony export */ });
/**
 * Utils
 */
function makeGetEdgeOfNeighbor(getPeriod, getEdgeOfPeriod, defaultOffset) {
    return function makeGetEdgeOfNeighborInternal(date, offset) {
        if (offset === void 0) { offset = defaultOffset; }
        var previousPeriod = getPeriod(date) + offset;
        return getEdgeOfPeriod(previousPeriod);
    };
}
function makeGetEnd(getBeginOfNextPeriod) {
    return function makeGetEndInternal(date) {
        return new Date(getBeginOfNextPeriod(date).getTime() - 1);
    };
}
function makeGetRange(getStart, getEnd) {
    return function makeGetRangeInternal(date) {
        return [getStart(date), getEnd(date)];
    };
}
/**
 * Simple getters - getting a property of a given point in time
 */
/**
 * Gets year from a given date.
 *
 * @param {DateLike} date Date to get year from
 * @returns {number} Year
 */
function getYear(date) {
    if (date instanceof Date) {
        return date.getFullYear();
    }
    if (typeof date === 'number') {
        return date;
    }
    var year = parseInt(date, 10);
    if (typeof date === 'string' && !isNaN(year)) {
        return year;
    }
    throw new Error("Failed to get year from date: ".concat(date, "."));
}
/**
 * Gets month from a given date.
 *
 * @param {Date} date Date to get month from
 * @returns {number} Month
 */
function getMonth(date) {
    if (date instanceof Date) {
        return date.getMonth();
    }
    throw new Error("Failed to get month from date: ".concat(date, "."));
}
/**
 * Gets human-readable month from a given date.
 *
 * @param {Date} date Date to get human-readable month from
 * @returns {number} Human-readable month
 */
function getMonthHuman(date) {
    if (date instanceof Date) {
        return date.getMonth() + 1;
    }
    throw new Error("Failed to get human-readable month from date: ".concat(date, "."));
}
/**
 * Gets day of the month from a given date.
 *
 * @param {Date} date Date to get day of the month from
 * @returns {number} Day of the month
 */
function getDate(date) {
    if (date instanceof Date) {
        return date.getDate();
    }
    throw new Error("Failed to get year from date: ".concat(date, "."));
}
/**
 * Gets hours from a given date.
 *
 * @param {Date | string} date Date to get hours from
 * @returns {number} Hours
 */
function getHours(date) {
    if (date instanceof Date) {
        return date.getHours();
    }
    if (typeof date === 'string') {
        var datePieces = date.split(':');
        if (datePieces.length >= 2) {
            var hoursString = datePieces[0];
            if (hoursString) {
                var hours = parseInt(hoursString, 10);
                if (!isNaN(hours)) {
                    return hours;
                }
            }
        }
    }
    throw new Error("Failed to get hours from date: ".concat(date, "."));
}
/**
 * Gets minutes from a given date.
 *
 * @param {Date | string} date Date to get minutes from
 * @returns {number} Minutes
 */
function getMinutes(date) {
    if (date instanceof Date) {
        return date.getMinutes();
    }
    if (typeof date === 'string') {
        var datePieces = date.split(':');
        if (datePieces.length >= 2) {
            var minutesString = datePieces[1] || '0';
            var minutes = parseInt(minutesString, 10);
            if (!isNaN(minutes)) {
                return minutes;
            }
        }
    }
    throw new Error("Failed to get minutes from date: ".concat(date, "."));
}
/**
 * Gets seconds from a given date.
 *
 * @param {Date | string} date Date to get seconds from
 * @returns {number} Seconds
 */
function getSeconds(date) {
    if (date instanceof Date) {
        return date.getSeconds();
    }
    if (typeof date === 'string') {
        var datePieces = date.split(':');
        if (datePieces.length >= 2) {
            var secondsWithMillisecondsString = datePieces[2] || '0';
            var seconds = parseInt(secondsWithMillisecondsString, 10);
            if (!isNaN(seconds)) {
                return seconds;
            }
        }
    }
    throw new Error("Failed to get seconds from date: ".concat(date, "."));
}
/**
 * Gets milliseconds from a given date.
 *
 * @param {Date | string} date Date to get milliseconds from
 * @returns {number} Milliseconds
 */
function getMilliseconds(date) {
    if (date instanceof Date) {
        return date.getMilliseconds();
    }
    if (typeof date === 'string') {
        var datePieces = date.split(':');
        if (datePieces.length >= 2) {
            var secondsWithMillisecondsString = datePieces[2] || '0';
            var millisecondsString = secondsWithMillisecondsString.split('.')[1] || '0';
            var milliseconds = parseInt(millisecondsString, 10);
            if (!isNaN(milliseconds)) {
                return milliseconds;
            }
        }
    }
    throw new Error("Failed to get seconds from date: ".concat(date, "."));
}
/**
 * Century
 */
/**
 * Gets century start date from a given date.
 *
 * @param {DateLike} date Date to get century start from
 * @returns {Date} Century start date
 */
function getCenturyStart(date) {
    var year = getYear(date);
    var centuryStartYear = year + ((-year + 1) % 100);
    var centuryStartDate = new Date();
    centuryStartDate.setFullYear(centuryStartYear, 0, 1);
    centuryStartDate.setHours(0, 0, 0, 0);
    return centuryStartDate;
}
/**
 * Gets previous century start date from a given date.
 *
 * @param {DateLike} date Date to get previous century start from
 * @returns {Date} Previous century start date
 */
var getPreviousCenturyStart = makeGetEdgeOfNeighbor(getYear, getCenturyStart, -100);
/**
 * Gets next century start date from a given date.
 *
 * @param {DateLike} date Date to get next century start from
 * @returns {Date} Next century start date
 */
var getNextCenturyStart = makeGetEdgeOfNeighbor(getYear, getCenturyStart, 100);
/**
 * Gets century end date from a given date.
 *
 * @param {DateLike} date Date to get century end from
 * @returns {Date} Century end date
 */
var getCenturyEnd = makeGetEnd(getNextCenturyStart);
/**
 * Gets previous century end date from a given date.
 *
 * @param {DateLike} date Date to get previous century end from
 * @returns {Date} Previous century end date
 */
var getPreviousCenturyEnd = makeGetEdgeOfNeighbor(getYear, getCenturyEnd, -100);
/**
 * Gets next century end date from a given date.
 *
 * @param {DateLike} date Date to get next century end from
 * @returns {Date} Next century end date
 */
var getNextCenturyEnd = makeGetEdgeOfNeighbor(getYear, getCenturyEnd, 100);
/**
 * Gets century start and end dates from a given date.
 *
 * @param {DateLike} date Date to get century start and end from
 * @returns {[Date, Date]} Century start and end dates
 */
var getCenturyRange = makeGetRange(getCenturyStart, getCenturyEnd);
/**
 * Decade
 */
/**
 * Gets decade start date from a given date.
 *
 * @param {DateLike} date Date to get decade start from
 * @returns {Date} Decade start date
 */
function getDecadeStart(date) {
    var year = getYear(date);
    var decadeStartYear = year + ((-year + 1) % 10);
    var decadeStartDate = new Date();
    decadeStartDate.setFullYear(decadeStartYear, 0, 1);
    decadeStartDate.setHours(0, 0, 0, 0);
    return decadeStartDate;
}
/**
 * Gets previous decade start date from a given date.
 *
 * @param {DateLike} date Date to get previous decade start from
 * @returns {Date} Previous decade start date
 */
var getPreviousDecadeStart = makeGetEdgeOfNeighbor(getYear, getDecadeStart, -10);
/**
 * Gets next decade start date from a given date.
 *
 * @param {DateLike} date Date to get next decade start from
 * @returns {Date} Next decade start date
 */
var getNextDecadeStart = makeGetEdgeOfNeighbor(getYear, getDecadeStart, 10);
/**
 * Gets decade end date from a given date.
 *
 * @param {DateLike} date Date to get decade end from
 * @returns {Date} Decade end date
 */
var getDecadeEnd = makeGetEnd(getNextDecadeStart);
/**
 * Gets previous decade end date from a given date.
 *
 * @param {DateLike} date Date to get previous decade end from
 * @returns {Date} Previous decade end date
 */
var getPreviousDecadeEnd = makeGetEdgeOfNeighbor(getYear, getDecadeEnd, -10);
/**
 * Gets next decade end date from a given date.
 *
 * @param {DateLike} date Date to get next decade end from
 * @returns {Date} Next decade end date
 */
var getNextDecadeEnd = makeGetEdgeOfNeighbor(getYear, getDecadeEnd, 10);
/**
 * Gets decade start and end dates from a given date.
 *
 * @param {DateLike} date Date to get decade start and end from
 * @returns {[Date, Date]} Decade start and end dates
 */
var getDecadeRange = makeGetRange(getDecadeStart, getDecadeEnd);
/**
 * Year
 */
/**
 * Gets year start date from a given date.
 *
 * @param {DateLike} date Date to get year start from
 * @returns {Date} Year start date
 */
function getYearStart(date) {
    var year = getYear(date);
    var yearStartDate = new Date();
    yearStartDate.setFullYear(year, 0, 1);
    yearStartDate.setHours(0, 0, 0, 0);
    return yearStartDate;
}
/**
 * Gets previous year start date from a given date.
 *
 * @param {DateLike} date Date to get previous year start from
 * @returns {Date} Previous year start date
 */
var getPreviousYearStart = makeGetEdgeOfNeighbor(getYear, getYearStart, -1);
/**
 * Gets next year start date from a given date.
 *
 * @param {DateLike} date Date to get next year start from
 * @returns {Date} Next year start date
 */
var getNextYearStart = makeGetEdgeOfNeighbor(getYear, getYearStart, 1);
/**
 * Gets year end date from a given date.
 *
 * @param {DateLike} date Date to get year end from
 * @returns {Date} Year end date
 */
var getYearEnd = makeGetEnd(getNextYearStart);
/**
 * Gets previous year end date from a given date.
 *
 * @param {DateLike} date Date to get previous year end from
 * @returns {Date} Previous year end date
 */
var getPreviousYearEnd = makeGetEdgeOfNeighbor(getYear, getYearEnd, -1);
/**
 * Gets next year end date from a given date.
 *
 * @param {DateLike} date Date to get next year end from
 * @returns {Date} Next year end date
 */
var getNextYearEnd = makeGetEdgeOfNeighbor(getYear, getYearEnd, 1);
/**
 * Gets year start and end dates from a given date.
 *
 * @param {DateLike} date Date to get year start and end from
 * @returns {[Date, Date]} Year start and end dates
 */
var getYearRange = makeGetRange(getYearStart, getYearEnd);
/**
 * Month
 */
function makeGetEdgeOfNeighborMonth(getEdgeOfPeriod, defaultOffset) {
    return function makeGetEdgeOfNeighborMonthInternal(date, offset) {
        if (offset === void 0) { offset = defaultOffset; }
        var year = getYear(date);
        var month = getMonth(date) + offset;
        var previousPeriod = new Date();
        previousPeriod.setFullYear(year, month, 1);
        previousPeriod.setHours(0, 0, 0, 0);
        return getEdgeOfPeriod(previousPeriod);
    };
}
/**
 * Gets month start date from a given date.
 *
 * @param {DateLike} date Date to get month start from
 * @returns {Date} Month start date
 */
function getMonthStart(date) {
    var year = getYear(date);
    var month = getMonth(date);
    var monthStartDate = new Date();
    monthStartDate.setFullYear(year, month, 1);
    monthStartDate.setHours(0, 0, 0, 0);
    return monthStartDate;
}
/**
 * Gets previous month start date from a given date.
 *
 * @param {DateLike} date Date to get previous month start from
 * @returns {Date} Previous month start date
 */
var getPreviousMonthStart = makeGetEdgeOfNeighborMonth(getMonthStart, -1);
/**
 * Gets next month start date from a given date.
 *
 * @param {DateLike} date Date to get next month start from
 * @returns {Date} Next month start date
 */
var getNextMonthStart = makeGetEdgeOfNeighborMonth(getMonthStart, 1);
/**
 * Gets month end date from a given date.
 *
 * @param {DateLike} date Date to get month end from
 * @returns {Date} Month end date
 */
var getMonthEnd = makeGetEnd(getNextMonthStart);
/**
 * Gets previous month end date from a given date.
 *
 * @param {DateLike} date Date to get previous month end from
 * @returns {Date} Previous month end date
 */
var getPreviousMonthEnd = makeGetEdgeOfNeighborMonth(getMonthEnd, -1);
/**
 * Gets next month end date from a given date.
 *
 * @param {DateLike} date Date to get next month end from
 * @returns {Date} Next month end date
 */
var getNextMonthEnd = makeGetEdgeOfNeighborMonth(getMonthEnd, 1);
/**
 * Gets month start and end dates from a given date.
 *
 * @param {DateLike} date Date to get month start and end from
 * @returns {[Date, Date]} Month start and end dates
 */
var getMonthRange = makeGetRange(getMonthStart, getMonthEnd);
/**
 * Day
 */
function makeGetEdgeOfNeighborDay(getEdgeOfPeriod, defaultOffset) {
    return function makeGetEdgeOfNeighborDayInternal(date, offset) {
        if (offset === void 0) { offset = defaultOffset; }
        var year = getYear(date);
        var month = getMonth(date);
        var day = getDate(date) + offset;
        var previousPeriod = new Date();
        previousPeriod.setFullYear(year, month, day);
        previousPeriod.setHours(0, 0, 0, 0);
        return getEdgeOfPeriod(previousPeriod);
    };
}
/**
 * Gets day start date from a given date.
 *
 * @param {DateLike} date Date to get day start from
 * @returns {Date} Day start date
 */
function getDayStart(date) {
    var year = getYear(date);
    var month = getMonth(date);
    var day = getDate(date);
    var dayStartDate = new Date();
    dayStartDate.setFullYear(year, month, day);
    dayStartDate.setHours(0, 0, 0, 0);
    return dayStartDate;
}
/**
 * Gets previous day start date from a given date.
 *
 * @param {DateLike} date Date to get previous day start from
 * @returns {Date} Previous day start date
 */
var getPreviousDayStart = makeGetEdgeOfNeighborDay(getDayStart, -1);
/**
 * Gets next day start date from a given date.
 *
 * @param {DateLike} date Date to get next day start from
 * @returns {Date} Next day start date
 */
var getNextDayStart = makeGetEdgeOfNeighborDay(getDayStart, 1);
/**
 * Gets day end date from a given date.
 *
 * @param {DateLike} date Date to get day end from
 * @returns {Date} Day end date
 */
var getDayEnd = makeGetEnd(getNextDayStart);
/**
 * Gets previous day end date from a given date.
 *
 * @param {DateLike} date Date to get previous day end from
 * @returns {Date} Previous day end date
 */
var getPreviousDayEnd = makeGetEdgeOfNeighborDay(getDayEnd, -1);
/**
 * Gets next day end date from a given date.
 *
 * @param {DateLike} date Date to get next day end from
 * @returns {Date} Next day end date
 */
var getNextDayEnd = makeGetEdgeOfNeighborDay(getDayEnd, 1);
/**
 * Gets day start and end dates from a given date.
 *
 * @param {DateLike} date Date to get day start and end from
 * @returns {[Date, Date]} Day start and end dates
 */
var getDayRange = makeGetRange(getDayStart, getDayEnd);
/**
 * Other
 */
/**
 * Returns a number of days in a month of a given date.
 *
 * @param {Date} date Date
 * @returns {number} Number of days in a month
 */
function getDaysInMonth(date) {
    return getDate(getMonthEnd(date));
}
function padStart(num, val) {
    if (val === void 0) { val = 2; }
    var numStr = "".concat(num);
    if (numStr.length >= val) {
        return num;
    }
    return "0000".concat(numStr).slice(-val);
}
/**
 * Returns local hours and minutes (hh:mm).
 *
 * @param {Date | string} date Date to get hours and minutes from
 * @returns {string} Local hours and minutes
 */
function getHoursMinutes(date) {
    var hours = padStart(getHours(date));
    var minutes = padStart(getMinutes(date));
    return "".concat(hours, ":").concat(minutes);
}
/**
 * Returns local hours, minutes and seconds (hh:mm:ss).
 *
 * @param {Date | string} date Date to get hours, minutes and seconds from
 * @returns {string} Local hours, minutes and seconds
 */
function getHoursMinutesSeconds(date) {
    var hours = padStart(getHours(date));
    var minutes = padStart(getMinutes(date));
    var seconds = padStart(getSeconds(date));
    return "".concat(hours, ":").concat(minutes, ":").concat(seconds);
}
/**
 * Returns local month in ISO-like format (YYYY-MM).
 *
 * @param {Date} date Date to get month in ISO-like format from
 * @returns {string} Local month in ISO-like format
 */
function getISOLocalMonth(date) {
    var year = padStart(getYear(date), 4);
    var month = padStart(getMonthHuman(date));
    return "".concat(year, "-").concat(month);
}
/**
 * Returns local date in ISO-like format (YYYY-MM-DD).
 *
 * @param {Date} date Date to get date in ISO-like format from
 * @returns {string} Local date in ISO-like format
 */
function getISOLocalDate(date) {
    var year = padStart(getYear(date), 4);
    var month = padStart(getMonthHuman(date));
    var day = padStart(getDate(date));
    return "".concat(year, "-").concat(month, "-").concat(day);
}
/**
 * Returns local date & time in ISO-like format (YYYY-MM-DDThh:mm:ss).
 *
 * @param {Date} date Date to get date & time in ISO-like format from
 * @returns {string} Local date & time in ISO-like format
 */
function getISOLocalDateTime(date) {
    return "".concat(getISOLocalDate(date), "T").concat(getHoursMinutesSeconds(date));
}


/***/ }),

/***/ "./node_modules/clsx/dist/clsx.mjs":
/*!*****************************************!*\
  !*** ./node_modules/clsx/dist/clsx.mjs ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clsx: () => (/* binding */ clsx),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clsx);

/***/ }),

/***/ "./node_modules/get-user-locale/dist/esm/index.js":
/*!********************************************************!*\
  !*** ./node_modules/get-user-locale/dist/esm/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getUserLocale: () => (/* binding */ getUserLocale),
/* harmony export */   getUserLocales: () => (/* binding */ getUserLocales)
/* harmony export */ });
/* harmony import */ var mem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mem */ "./node_modules/mem/dist/index.js");

function isString(el) {
    return typeof el === 'string';
}
function isUnique(el, index, arr) {
    return arr.indexOf(el) === index;
}
function isAllLowerCase(el) {
    return el.toLowerCase() === el;
}
function fixCommas(el) {
    return el.indexOf(',') === -1 ? el : el.split(',');
}
function normalizeLocale(locale) {
    if (!locale) {
        return locale;
    }
    if (locale === 'C' || locale === 'posix' || locale === 'POSIX') {
        return 'en-US';
    }
    // If there's a dot (.) in the locale, it's likely in the format of "en-US.UTF-8", so we only take the first part
    if (locale.indexOf('.') !== -1) {
        var _a = locale.split('.')[0], actualLocale = _a === void 0 ? '' : _a;
        return normalizeLocale(actualLocale);
    }
    // If there's an at sign (@) in the locale, it's likely in the format of "en-US@posix", so we only take the first part
    if (locale.indexOf('@') !== -1) {
        var _b = locale.split('@')[0], actualLocale = _b === void 0 ? '' : _b;
        return normalizeLocale(actualLocale);
    }
    // If there's a dash (-) in the locale and it's not all lower case, it's already in the format of "en-US", so we return it
    if (locale.indexOf('-') === -1 || !isAllLowerCase(locale)) {
        return locale;
    }
    var _c = locale.split('-'), splitEl1 = _c[0], _d = _c[1], splitEl2 = _d === void 0 ? '' : _d;
    return "".concat(splitEl1, "-").concat(splitEl2.toUpperCase());
}
function getUserLocalesInternal(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.useFallbackLocale, useFallbackLocale = _c === void 0 ? true : _c, _d = _b.fallbackLocale, fallbackLocale = _d === void 0 ? 'en-US' : _d;
    var languageList = [];
    if (typeof navigator !== 'undefined') {
        var rawLanguages = navigator.languages || [];
        var languages = [];
        for (var _i = 0, rawLanguages_1 = rawLanguages; _i < rawLanguages_1.length; _i++) {
            var rawLanguagesItem = rawLanguages_1[_i];
            languages = languages.concat(fixCommas(rawLanguagesItem));
        }
        var rawLanguage = navigator.language;
        var language = rawLanguage ? fixCommas(rawLanguage) : rawLanguage;
        languageList = languageList.concat(languages, language);
    }
    if (useFallbackLocale) {
        languageList.push(fallbackLocale);
    }
    return languageList.filter(isString).map(normalizeLocale).filter(isUnique);
}
var getUserLocales = mem__WEBPACK_IMPORTED_MODULE_0__(getUserLocalesInternal, { cacheKey: JSON.stringify });
function getUserLocaleInternal(options) {
    return getUserLocales(options)[0] || null;
}
var getUserLocale = mem__WEBPACK_IMPORTED_MODULE_0__(getUserLocaleInternal, { cacheKey: JSON.stringify });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getUserLocale);


/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/Calendar.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/Calendar.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _Calendar_Navigation_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Calendar/Navigation.js */ "./node_modules/react-calendar/dist/esm/Calendar/Navigation.js");
/* harmony import */ var _CenturyView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CenturyView.js */ "./node_modules/react-calendar/dist/esm/CenturyView.js");
/* harmony import */ var _DecadeView_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DecadeView.js */ "./node_modules/react-calendar/dist/esm/DecadeView.js");
/* harmony import */ var _YearView_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./YearView.js */ "./node_modules/react-calendar/dist/esm/YearView.js");
/* harmony import */ var _MonthView_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MonthView.js */ "./node_modules/react-calendar/dist/esm/MonthView.js");
/* harmony import */ var _shared_dates_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/dates.js */ "./node_modules/react-calendar/dist/esm/shared/dates.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/utils.js */ "./node_modules/react-calendar/dist/esm/shared/utils.js");
'use client';
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};










var baseClassName = 'react-calendar';
var allViews = ['century', 'decade', 'year', 'month'];
var allValueTypes = ['decade', 'year', 'month', 'day'];
var defaultMinDate = new Date();
defaultMinDate.setFullYear(1, 0, 1);
defaultMinDate.setHours(0, 0, 0, 0);
var defaultMaxDate = new Date(8.64e15);
function toDate(value) {
    if (value instanceof Date) {
        return value;
    }
    return new Date(value);
}
/**
 * Returns views array with disallowed values cut off.
 */
function getLimitedViews(minDetail, maxDetail) {
    return allViews.slice(allViews.indexOf(minDetail), allViews.indexOf(maxDetail) + 1);
}
/**
 * Determines whether a given view is allowed with currently applied settings.
 */
function isViewAllowed(view, minDetail, maxDetail) {
    var views = getLimitedViews(minDetail, maxDetail);
    return views.indexOf(view) !== -1;
}
/**
 * Gets either provided view if allowed by minDetail and maxDetail, or gets
 * the default view if not allowed.
 */
function getView(view, minDetail, maxDetail) {
    if (!view) {
        return maxDetail;
    }
    if (isViewAllowed(view, minDetail, maxDetail)) {
        return view;
    }
    return maxDetail;
}
/**
 * Returns value type that can be returned with currently applied settings.
 */
function getValueType(view) {
    var index = allViews.indexOf(view);
    return allValueTypes[index];
}
function getValue(value, index) {
    var rawValue = Array.isArray(value) ? value[index] : value;
    if (!rawValue) {
        return null;
    }
    var valueDate = toDate(rawValue);
    if (isNaN(valueDate.getTime())) {
        throw new Error("Invalid date: ".concat(value));
    }
    return valueDate;
}
function getDetailValue(_a, index) {
    var value = _a.value, minDate = _a.minDate, maxDate = _a.maxDate, maxDetail = _a.maxDetail;
    var valuePiece = getValue(value, index);
    if (!valuePiece) {
        return null;
    }
    var valueType = getValueType(maxDetail);
    var detailValueFrom = (function () {
        switch (index) {
            case 0:
                return (0,_shared_dates_js__WEBPACK_IMPORTED_MODULE_3__.getBegin)(valueType, valuePiece);
            case 1:
                return (0,_shared_dates_js__WEBPACK_IMPORTED_MODULE_3__.getEnd)(valueType, valuePiece);
            default:
                throw new Error("Invalid index value: ".concat(index));
        }
    })();
    return (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_4__.between)(detailValueFrom, minDate, maxDate);
}
var getDetailValueFrom = function (args) { return getDetailValue(args, 0); };
var getDetailValueTo = function (args) { return getDetailValue(args, 1); };
var getDetailValueArray = function (args) {
    return [getDetailValueFrom, getDetailValueTo].map(function (fn) { return fn(args); });
};
function getActiveStartDate(_a) {
    var maxDate = _a.maxDate, maxDetail = _a.maxDetail, minDate = _a.minDate, minDetail = _a.minDetail, value = _a.value, view = _a.view;
    var rangeType = getView(view, minDetail, maxDetail);
    var valueFrom = getDetailValueFrom({
        value: value,
        minDate: minDate,
        maxDate: maxDate,
        maxDetail: maxDetail,
    }) || new Date();
    return (0,_shared_dates_js__WEBPACK_IMPORTED_MODULE_3__.getBegin)(rangeType, valueFrom);
}
function getInitialActiveStartDate(_a) {
    var activeStartDate = _a.activeStartDate, defaultActiveStartDate = _a.defaultActiveStartDate, defaultValue = _a.defaultValue, defaultView = _a.defaultView, maxDate = _a.maxDate, maxDetail = _a.maxDetail, minDate = _a.minDate, minDetail = _a.minDetail, value = _a.value, view = _a.view;
    var rangeType = getView(view, minDetail, maxDetail);
    var valueFrom = activeStartDate || defaultActiveStartDate;
    if (valueFrom) {
        return (0,_shared_dates_js__WEBPACK_IMPORTED_MODULE_3__.getBegin)(rangeType, valueFrom);
    }
    return getActiveStartDate({
        maxDate: maxDate,
        maxDetail: maxDetail,
        minDate: minDate,
        minDetail: minDetail,
        value: value || defaultValue,
        view: view || defaultView,
    });
}
function getIsSingleValue(value) {
    return value && (!Array.isArray(value) || value.length === 1);
}
function areDatesEqual(date1, date2) {
    return date1 instanceof Date && date2 instanceof Date && date1.getTime() === date2.getTime();
}
var Calendar = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function Calendar(props, ref) {
    var activeStartDateProps = props.activeStartDate, allowPartialRange = props.allowPartialRange, calendarType = props.calendarType, className = props.className, defaultActiveStartDate = props.defaultActiveStartDate, defaultValue = props.defaultValue, defaultView = props.defaultView, formatDay = props.formatDay, formatLongDate = props.formatLongDate, formatMonth = props.formatMonth, formatMonthYear = props.formatMonthYear, formatShortWeekday = props.formatShortWeekday, formatWeekday = props.formatWeekday, formatYear = props.formatYear, _a = props.goToRangeStartOnSelect, goToRangeStartOnSelect = _a === void 0 ? true : _a, inputRef = props.inputRef, locale = props.locale, _b = props.maxDate, maxDate = _b === void 0 ? defaultMaxDate : _b, _c = props.maxDetail, maxDetail = _c === void 0 ? 'month' : _c, _d = props.minDate, minDate = _d === void 0 ? defaultMinDate : _d, _e = props.minDetail, minDetail = _e === void 0 ? 'century' : _e, navigationAriaLabel = props.navigationAriaLabel, navigationAriaLive = props.navigationAriaLive, navigationLabel = props.navigationLabel, next2AriaLabel = props.next2AriaLabel, next2Label = props.next2Label, nextAriaLabel = props.nextAriaLabel, nextLabel = props.nextLabel, onActiveStartDateChange = props.onActiveStartDateChange, onChangeProps = props.onChange, onClickDay = props.onClickDay, onClickDecade = props.onClickDecade, onClickMonth = props.onClickMonth, onClickWeekNumber = props.onClickWeekNumber, onClickYear = props.onClickYear, onDrillDown = props.onDrillDown, onDrillUp = props.onDrillUp, onViewChange = props.onViewChange, prev2AriaLabel = props.prev2AriaLabel, prev2Label = props.prev2Label, prevAriaLabel = props.prevAriaLabel, prevLabel = props.prevLabel, _f = props.returnValue, returnValue = _f === void 0 ? 'start' : _f, selectRange = props.selectRange, showDoubleView = props.showDoubleView, showFixedNumberOfWeeks = props.showFixedNumberOfWeeks, _g = props.showNavigation, showNavigation = _g === void 0 ? true : _g, showNeighboringCentury = props.showNeighboringCentury, showNeighboringDecade = props.showNeighboringDecade, _h = props.showNeighboringMonth, showNeighboringMonth = _h === void 0 ? true : _h, showWeekNumbers = props.showWeekNumbers, tileClassName = props.tileClassName, tileContent = props.tileContent, tileDisabled = props.tileDisabled, valueProps = props.value, viewProps = props.view;
    var _j = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultActiveStartDate), activeStartDateState = _j[0], setActiveStartDateState = _j[1];
    var _k = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), hoverState = _k[0], setHoverState = _k[1];
    var _l = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array.isArray(defaultValue)
        ? defaultValue.map(function (el) { return (el !== null ? toDate(el) : null); })
        : defaultValue !== null && defaultValue !== undefined
            ? toDate(defaultValue)
            : null), valueState = _l[0], setValueState = _l[1];
    var _m = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultView), viewState = _m[0], setViewState = _m[1];
    var activeStartDate = activeStartDateProps ||
        activeStartDateState ||
        getInitialActiveStartDate({
            activeStartDate: activeStartDateProps,
            defaultActiveStartDate: defaultActiveStartDate,
            defaultValue: defaultValue,
            defaultView: defaultView,
            maxDate: maxDate,
            maxDetail: maxDetail,
            minDate: minDate,
            minDetail: minDetail,
            value: valueProps,
            view: viewProps,
        });
    var value = (function () {
        var rawValue = (function () {
            // In the middle of range selection, use value from state
            if (selectRange && getIsSingleValue(valueState)) {
                return valueState;
            }
            return valueProps !== undefined ? valueProps : valueState;
        })();
        if (!rawValue) {
            return null;
        }
        return Array.isArray(rawValue)
            ? rawValue.map(function (el) { return (el !== null ? toDate(el) : null); })
            : rawValue !== null
                ? toDate(rawValue)
                : null;
    })();
    var valueType = getValueType(maxDetail);
    var view = getView(viewProps || viewState, minDetail, maxDetail);
    var views = getLimitedViews(minDetail, maxDetail);
    var hover = selectRange ? hoverState : null;
    var drillDownAvailable = views.indexOf(view) < views.length - 1;
    var drillUpAvailable = views.indexOf(view) > 0;
    var getProcessedValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (value) {
        var processFunction = (function () {
            switch (returnValue) {
                case 'start':
                    return getDetailValueFrom;
                case 'end':
                    return getDetailValueTo;
                case 'range':
                    return getDetailValueArray;
                default:
                    throw new Error('Invalid returnValue.');
            }
        })();
        return processFunction({
            maxDate: maxDate,
            maxDetail: maxDetail,
            minDate: minDate,
            value: value,
        });
    }, [maxDate, maxDetail, minDate, returnValue]);
    var setActiveStartDate = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (nextActiveStartDate, action) {
        setActiveStartDateState(nextActiveStartDate);
        var args = {
            action: action,
            activeStartDate: nextActiveStartDate,
            value: value,
            view: view,
        };
        if (onActiveStartDateChange && !areDatesEqual(activeStartDate, nextActiveStartDate)) {
            onActiveStartDateChange(args);
        }
    }, [activeStartDate, onActiveStartDateChange, value, view]);
    var onClickTile = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (value, event) {
        var callback = (function () {
            switch (view) {
                case 'century':
                    return onClickDecade;
                case 'decade':
                    return onClickYear;
                case 'year':
                    return onClickMonth;
                case 'month':
                    return onClickDay;
                default:
                    throw new Error("Invalid view: ".concat(view, "."));
            }
        })();
        if (callback)
            callback(value, event);
    }, [onClickDay, onClickDecade, onClickMonth, onClickYear, view]);
    var drillDown = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (nextActiveStartDate, event) {
        if (!drillDownAvailable) {
            return;
        }
        onClickTile(nextActiveStartDate, event);
        var nextView = views[views.indexOf(view) + 1];
        if (!nextView) {
            throw new Error('Attempted to drill down from the lowest view.');
        }
        setActiveStartDateState(nextActiveStartDate);
        setViewState(nextView);
        var args = {
            action: 'drillDown',
            activeStartDate: nextActiveStartDate,
            value: value,
            view: nextView,
        };
        if (onActiveStartDateChange && !areDatesEqual(activeStartDate, nextActiveStartDate)) {
            onActiveStartDateChange(args);
        }
        if (onViewChange && view !== nextView) {
            onViewChange(args);
        }
        if (onDrillDown) {
            onDrillDown(args);
        }
    }, [
        activeStartDate,
        drillDownAvailable,
        onActiveStartDateChange,
        onClickTile,
        onDrillDown,
        onViewChange,
        value,
        view,
        views,
    ]);
    var drillUp = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {
        if (!drillUpAvailable) {
            return;
        }
        var nextView = views[views.indexOf(view) - 1];
        if (!nextView) {
            throw new Error('Attempted to drill up from the highest view.');
        }
        var nextActiveStartDate = (0,_shared_dates_js__WEBPACK_IMPORTED_MODULE_3__.getBegin)(nextView, activeStartDate);
        setActiveStartDateState(nextActiveStartDate);
        setViewState(nextView);
        var args = {
            action: 'drillUp',
            activeStartDate: nextActiveStartDate,
            value: value,
            view: nextView,
        };
        if (onActiveStartDateChange && !areDatesEqual(activeStartDate, nextActiveStartDate)) {
            onActiveStartDateChange(args);
        }
        if (onViewChange && view !== nextView) {
            onViewChange(args);
        }
        if (onDrillUp) {
            onDrillUp(args);
        }
    }, [
        activeStartDate,
        drillUpAvailable,
        onActiveStartDateChange,
        onDrillUp,
        onViewChange,
        value,
        view,
        views,
    ]);
    var onChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (rawNextValue, event) {
        var previousValue = value;
        onClickTile(rawNextValue, event);
        var isFirstValueInRange = selectRange && !getIsSingleValue(previousValue);
        var nextValue;
        if (selectRange) {
            // Range selection turned on
            if (isFirstValueInRange) {
                // Value has 0 or 2 elements - either way we're starting a new array
                // First value
                nextValue = (0,_shared_dates_js__WEBPACK_IMPORTED_MODULE_3__.getBegin)(valueType, rawNextValue);
            }
            else {
                if (!previousValue) {
                    throw new Error('previousValue is required');
                }
                if (Array.isArray(previousValue)) {
                    throw new Error('previousValue must not be an array');
                }
                // Second value
                nextValue = (0,_shared_dates_js__WEBPACK_IMPORTED_MODULE_3__.getValueRange)(valueType, previousValue, rawNextValue);
            }
        }
        else {
            // Range selection turned off
            nextValue = getProcessedValue(rawNextValue);
        }
        var nextActiveStartDate = 
        // Range selection turned off
        !selectRange ||
            // Range selection turned on, first value
            isFirstValueInRange ||
            // Range selection turned on, second value, goToRangeStartOnSelect toggled on
            goToRangeStartOnSelect
            ? getActiveStartDate({
                maxDate: maxDate,
                maxDetail: maxDetail,
                minDate: minDate,
                minDetail: minDetail,
                value: nextValue,
                view: view,
            })
            : null;
        event.persist();
        setActiveStartDateState(nextActiveStartDate);
        setValueState(nextValue);
        var args = {
            action: 'onChange',
            activeStartDate: nextActiveStartDate,
            value: nextValue,
            view: view,
        };
        if (onActiveStartDateChange && !areDatesEqual(activeStartDate, nextActiveStartDate)) {
            onActiveStartDateChange(args);
        }
        if (onChangeProps) {
            if (selectRange) {
                var isSingleValue = getIsSingleValue(nextValue);
                if (!isSingleValue) {
                    onChangeProps(nextValue || null, event);
                }
                else if (allowPartialRange) {
                    if (Array.isArray(nextValue)) {
                        throw new Error('value must not be an array');
                    }
                    onChangeProps([nextValue || null, null], event);
                }
            }
            else {
                onChangeProps(nextValue || null, event);
            }
        }
    }, [
        activeStartDate,
        allowPartialRange,
        getProcessedValue,
        goToRangeStartOnSelect,
        maxDate,
        maxDetail,
        minDate,
        minDetail,
        onActiveStartDateChange,
        onChangeProps,
        onClickTile,
        selectRange,
        value,
        valueType,
        view,
    ]);
    function onMouseOver(nextHover) {
        setHoverState(nextHover);
    }
    function onMouseLeave() {
        setHoverState(null);
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(ref, function () { return ({
        activeStartDate: activeStartDate,
        drillDown: drillDown,
        drillUp: drillUp,
        onChange: onChange,
        setActiveStartDate: setActiveStartDate,
        value: value,
        view: view,
    }); }, [activeStartDate, drillDown, drillUp, onChange, setActiveStartDate, value, view]);
    function renderContent(next) {
        var currentActiveStartDate = next
            ? (0,_shared_dates_js__WEBPACK_IMPORTED_MODULE_3__.getBeginNext)(view, activeStartDate)
            : (0,_shared_dates_js__WEBPACK_IMPORTED_MODULE_3__.getBegin)(view, activeStartDate);
        var onClick = drillDownAvailable ? drillDown : onChange;
        var commonProps = {
            activeStartDate: currentActiveStartDate,
            hover: hover,
            locale: locale,
            maxDate: maxDate,
            minDate: minDate,
            onClick: onClick,
            onMouseOver: selectRange ? onMouseOver : undefined,
            tileClassName: tileClassName,
            tileContent: tileContent,
            tileDisabled: tileDisabled,
            value: value,
            valueType: valueType,
        };
        switch (view) {
            case 'century': {
                return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CenturyView_js__WEBPACK_IMPORTED_MODULE_5__["default"], __assign({ formatYear: formatYear, showNeighboringCentury: showNeighboringCentury }, commonProps)));
            }
            case 'decade': {
                return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DecadeView_js__WEBPACK_IMPORTED_MODULE_6__["default"], __assign({ formatYear: formatYear, showNeighboringDecade: showNeighboringDecade }, commonProps)));
            }
            case 'year': {
                return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_YearView_js__WEBPACK_IMPORTED_MODULE_7__["default"], __assign({ formatMonth: formatMonth, formatMonthYear: formatMonthYear }, commonProps)));
            }
            case 'month': {
                return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MonthView_js__WEBPACK_IMPORTED_MODULE_8__["default"], __assign({ calendarType: calendarType, formatDay: formatDay, formatLongDate: formatLongDate, formatShortWeekday: formatShortWeekday, formatWeekday: formatWeekday, onClickWeekNumber: onClickWeekNumber, onMouseLeave: selectRange ? onMouseLeave : undefined, showFixedNumberOfWeeks: typeof showFixedNumberOfWeeks !== 'undefined'
                        ? showFixedNumberOfWeeks
                        : showDoubleView, showNeighboringMonth: showNeighboringMonth, showWeekNumbers: showWeekNumbers }, commonProps)));
            }
            default:
                throw new Error("Invalid view: ".concat(view, "."));
        }
    }
    function renderNavigation() {
        if (!showNavigation) {
            return null;
        }
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Calendar_Navigation_js__WEBPACK_IMPORTED_MODULE_9__["default"], { activeStartDate: activeStartDate, drillUp: drillUp, formatMonthYear: formatMonthYear, formatYear: formatYear, locale: locale, maxDate: maxDate, minDate: minDate, navigationAriaLabel: navigationAriaLabel, navigationAriaLive: navigationAriaLive, navigationLabel: navigationLabel, next2AriaLabel: next2AriaLabel, next2Label: next2Label, nextAriaLabel: nextAriaLabel, nextLabel: nextLabel, prev2AriaLabel: prev2AriaLabel, prev2Label: prev2Label, prevAriaLabel: prevAriaLabel, prevLabel: prevLabel, setActiveStartDate: setActiveStartDate, showDoubleView: showDoubleView, view: view, views: views }));
    }
    var valueArray = Array.isArray(value) ? value : [value];
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(baseClassName, selectRange && valueArray.length === 1 && "".concat(baseClassName, "--selectRange"), showDoubleView && "".concat(baseClassName, "--doubleView"), className), ref: inputRef, children: [renderNavigation(), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "".concat(baseClassName, "__viewContainer"), onBlur: selectRange ? onMouseLeave : undefined, onMouseLeave: selectRange ? onMouseLeave : undefined, children: [renderContent(), showDoubleView ? renderContent(true) : null] })] }));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Calendar);


/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/Calendar/Navigation.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/Calendar/Navigation.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navigation)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var get_user_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! get-user-locale */ "./node_modules/get-user-locale/dist/esm/index.js");
/* harmony import */ var _shared_dates_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/dates.js */ "./node_modules/react-calendar/dist/esm/shared/dates.js");
/* harmony import */ var _shared_dateFormatter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/dateFormatter.js */ "./node_modules/react-calendar/dist/esm/shared/dateFormatter.js");
'use client';




var className = 'react-calendar__navigation';
function Navigation(_a) {
    var activeStartDate = _a.activeStartDate, drillUp = _a.drillUp, _b = _a.formatMonthYear, formatMonthYear = _b === void 0 ? _shared_dateFormatter_js__WEBPACK_IMPORTED_MODULE_1__.formatMonthYear : _b, _c = _a.formatYear, formatYear = _c === void 0 ? _shared_dateFormatter_js__WEBPACK_IMPORTED_MODULE_1__.formatYear : _c, locale = _a.locale, maxDate = _a.maxDate, minDate = _a.minDate, _d = _a.navigationAriaLabel, navigationAriaLabel = _d === void 0 ? '' : _d, navigationAriaLive = _a.navigationAriaLive, navigationLabel = _a.navigationLabel, _e = _a.next2AriaLabel, next2AriaLabel = _e === void 0 ? '' : _e, _f = _a.next2Label, next2Label = _f === void 0 ? '»' : _f, _g = _a.nextAriaLabel, nextAriaLabel = _g === void 0 ? '' : _g, _h = _a.nextLabel, nextLabel = _h === void 0 ? '›' : _h, _j = _a.prev2AriaLabel, prev2AriaLabel = _j === void 0 ? '' : _j, _k = _a.prev2Label, prev2Label = _k === void 0 ? '«' : _k, _l = _a.prevAriaLabel, prevAriaLabel = _l === void 0 ? '' : _l, _m = _a.prevLabel, prevLabel = _m === void 0 ? '‹' : _m, setActiveStartDate = _a.setActiveStartDate, showDoubleView = _a.showDoubleView, view = _a.view, views = _a.views;
    var drillUpAvailable = views.indexOf(view) > 0;
    var shouldShowPrevNext2Buttons = view !== 'century';
    var previousActiveStartDate = (0,_shared_dates_js__WEBPACK_IMPORTED_MODULE_2__.getBeginPrevious)(view, activeStartDate);
    var previousActiveStartDate2 = shouldShowPrevNext2Buttons
        ? (0,_shared_dates_js__WEBPACK_IMPORTED_MODULE_2__.getBeginPrevious2)(view, activeStartDate)
        : undefined;
    var nextActiveStartDate = (0,_shared_dates_js__WEBPACK_IMPORTED_MODULE_2__.getBeginNext)(view, activeStartDate);
    var nextActiveStartDate2 = shouldShowPrevNext2Buttons
        ? (0,_shared_dates_js__WEBPACK_IMPORTED_MODULE_2__.getBeginNext2)(view, activeStartDate)
        : undefined;
    var prevButtonDisabled = (function () {
        if (previousActiveStartDate.getFullYear() < 0) {
            return true;
        }
        var previousActiveEndDate = (0,_shared_dates_js__WEBPACK_IMPORTED_MODULE_2__.getEndPrevious)(view, activeStartDate);
        return minDate && minDate >= previousActiveEndDate;
    })();
    var prev2ButtonDisabled = shouldShowPrevNext2Buttons &&
        (function () {
            if (previousActiveStartDate2.getFullYear() < 0) {
                return true;
            }
            var previousActiveEndDate = (0,_shared_dates_js__WEBPACK_IMPORTED_MODULE_2__.getEndPrevious2)(view, activeStartDate);
            return minDate && minDate >= previousActiveEndDate;
        })();
    var nextButtonDisabled = maxDate && maxDate < nextActiveStartDate;
    var next2ButtonDisabled = shouldShowPrevNext2Buttons && maxDate && maxDate < nextActiveStartDate2;
    function onClickPrevious() {
        setActiveStartDate(previousActiveStartDate, 'prev');
    }
    function onClickPrevious2() {
        setActiveStartDate(previousActiveStartDate2, 'prev2');
    }
    function onClickNext() {
        setActiveStartDate(nextActiveStartDate, 'next');
    }
    function onClickNext2() {
        setActiveStartDate(nextActiveStartDate2, 'next2');
    }
    function renderLabel(date) {
        var label = (function () {
            switch (view) {
                case 'century':
                    return (0,_shared_dates_js__WEBPACK_IMPORTED_MODULE_2__.getCenturyLabel)(locale, formatYear, date);
                case 'decade':
                    return (0,_shared_dates_js__WEBPACK_IMPORTED_MODULE_2__.getDecadeLabel)(locale, formatYear, date);
                case 'year':
                    return formatYear(locale, date);
                case 'month':
                    return formatMonthYear(locale, date);
                default:
                    throw new Error("Invalid view: ".concat(view, "."));
            }
        })();
        return navigationLabel
            ? navigationLabel({
                date: date,
                label: label,
                locale: locale || (0,get_user_locale__WEBPACK_IMPORTED_MODULE_3__.getUserLocale)() || undefined,
                view: view,
            })
            : label;
    }
    function renderButton() {
        var labelClassName = "".concat(className, "__label");
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", { "aria-label": navigationAriaLabel, "aria-live": navigationAriaLive, className: labelClassName, disabled: !drillUpAvailable, onClick: drillUp, style: { flexGrow: 1 }, type: "button", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "".concat(labelClassName, "__labelText ").concat(labelClassName, "__labelText--from"), children: renderLabel(activeStartDate) }), showDoubleView ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "".concat(labelClassName, "__divider"), children: " \u2013 " }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "".concat(labelClassName, "__labelText ").concat(labelClassName, "__labelText--to"), children: renderLabel(nextActiveStartDate) })] })) : null] }));
    }
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: className, children: [prev2Label !== null && shouldShowPrevNext2Buttons ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { "aria-label": prev2AriaLabel, className: "".concat(className, "__arrow ").concat(className, "__prev2-button"), disabled: prev2ButtonDisabled, onClick: onClickPrevious2, type: "button", children: prev2Label })) : null, prevLabel !== null && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { "aria-label": prevAriaLabel, className: "".concat(className, "__arrow ").concat(className, "__prev-button"), disabled: prevButtonDisabled, onClick: onClickPrevious, type: "button", children: prevLabel })), renderButton(), nextLabel !== null && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { "aria-label": nextAriaLabel, className: "".concat(className, "__arrow ").concat(className, "__next-button"), disabled: nextButtonDisabled, onClick: onClickNext, type: "button", children: nextLabel })), next2Label !== null && shouldShowPrevNext2Buttons ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { "aria-label": next2AriaLabel, className: "".concat(className, "__arrow ").concat(className, "__next2-button"), disabled: next2ButtonDisabled, onClick: onClickNext2, type: "button", children: next2Label })) : null] }));
}


/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/CenturyView.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/CenturyView.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CenturyView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _CenturyView_Decades_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CenturyView/Decades.js */ "./node_modules/react-calendar/dist/esm/CenturyView/Decades.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


/**
 * Displays a given century.
 */
function CenturyView(props) {
    function renderDecades() {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CenturyView_Decades_js__WEBPACK_IMPORTED_MODULE_1__["default"], __assign({}, props));
    }
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "react-calendar__century-view", children: renderDecades() });
}


/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/CenturyView/Decade.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/CenturyView/Decade.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Decade)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");
/* harmony import */ var _Tile_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Tile.js */ "./node_modules/react-calendar/dist/esm/Tile.js");
/* harmony import */ var _shared_dates_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/dates.js */ "./node_modules/react-calendar/dist/esm/shared/dates.js");
/* harmony import */ var _shared_dateFormatter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/dateFormatter.js */ "./node_modules/react-calendar/dist/esm/shared/dateFormatter.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};





var className = 'react-calendar__century-view__decades__decade';
function Decade(_a) {
    var _b = _a.classes, classes = _b === void 0 ? [] : _b, currentCentury = _a.currentCentury, _c = _a.formatYear, formatYear = _c === void 0 ? _shared_dateFormatter_js__WEBPACK_IMPORTED_MODULE_1__.formatYear : _c, otherProps = __rest(_a, ["classes", "currentCentury", "formatYear"]);
    var date = otherProps.date, locale = otherProps.locale;
    var classesProps = [];
    if (classes) {
        classesProps.push.apply(classesProps, classes);
    }
    if (className) {
        classesProps.push(className);
    }
    if ((0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__.getCenturyStart)(date).getFullYear() !== currentCentury) {
        classesProps.push("".concat(className, "--neighboringCentury"));
    }
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Tile_js__WEBPACK_IMPORTED_MODULE_3__["default"], __assign({}, otherProps, { classes: classesProps, maxDateTransform: _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__.getDecadeEnd, minDateTransform: _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__.getDecadeStart, view: "century", children: (0,_shared_dates_js__WEBPACK_IMPORTED_MODULE_4__.getDecadeLabel)(locale, formatYear, date) })));
}


/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/CenturyView/Decades.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/CenturyView/Decades.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Decades)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");
/* harmony import */ var _TileGroup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../TileGroup.js */ "./node_modules/react-calendar/dist/esm/TileGroup.js");
/* harmony import */ var _Decade_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Decade.js */ "./node_modules/react-calendar/dist/esm/CenturyView/Decade.js");
/* harmony import */ var _shared_dates_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/dates.js */ "./node_modules/react-calendar/dist/esm/shared/dates.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};





function Decades(props) {
    var activeStartDate = props.activeStartDate, hover = props.hover, showNeighboringCentury = props.showNeighboringCentury, value = props.value, valueType = props.valueType, otherProps = __rest(props, ["activeStartDate", "hover", "showNeighboringCentury", "value", "valueType"]);
    var start = (0,_shared_dates_js__WEBPACK_IMPORTED_MODULE_1__.getBeginOfCenturyYear)(activeStartDate);
    var end = start + (showNeighboringCentury ? 119 : 99);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TileGroup_js__WEBPACK_IMPORTED_MODULE_2__["default"], { className: "react-calendar__century-view__decades", dateTransform: _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_3__.getDecadeStart, dateType: "decade", end: end, hover: hover, renderTile: function (_a) {
            var date = _a.date, otherTileProps = __rest(_a, ["date"]);
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Decade_js__WEBPACK_IMPORTED_MODULE_4__["default"], __assign({}, otherProps, otherTileProps, { activeStartDate: activeStartDate, currentCentury: start, date: date }), date.getTime()));
        }, start: start, step: 10, value: value, valueType: valueType }));
}


/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/DecadeView.js":
/*!************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/DecadeView.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DecadeView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _DecadeView_Years_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DecadeView/Years.js */ "./node_modules/react-calendar/dist/esm/DecadeView/Years.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


/**
 * Displays a given decade.
 */
function DecadeView(props) {
    function renderYears() {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DecadeView_Years_js__WEBPACK_IMPORTED_MODULE_1__["default"], __assign({}, props));
    }
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "react-calendar__decade-view", children: renderYears() });
}


/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/DecadeView/Year.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/DecadeView/Year.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Year)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");
/* harmony import */ var _Tile_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Tile.js */ "./node_modules/react-calendar/dist/esm/Tile.js");
/* harmony import */ var _shared_dateFormatter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/dateFormatter.js */ "./node_modules/react-calendar/dist/esm/shared/dateFormatter.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};




var className = 'react-calendar__decade-view__years__year';
function Year(_a) {
    var _b = _a.classes, classes = _b === void 0 ? [] : _b, currentDecade = _a.currentDecade, _c = _a.formatYear, formatYear = _c === void 0 ? _shared_dateFormatter_js__WEBPACK_IMPORTED_MODULE_1__.formatYear : _c, otherProps = __rest(_a, ["classes", "currentDecade", "formatYear"]);
    var date = otherProps.date, locale = otherProps.locale;
    var classesProps = [];
    if (classes) {
        classesProps.push.apply(classesProps, classes);
    }
    if (className) {
        classesProps.push(className);
    }
    if ((0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__.getDecadeStart)(date).getFullYear() !== currentDecade) {
        classesProps.push("".concat(className, "--neighboringDecade"));
    }
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Tile_js__WEBPACK_IMPORTED_MODULE_3__["default"], __assign({}, otherProps, { classes: classesProps, maxDateTransform: _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__.getYearEnd, minDateTransform: _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__.getYearStart, view: "decade", children: formatYear(locale, date) })));
}


/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/DecadeView/Years.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/DecadeView/Years.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Years)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");
/* harmony import */ var _TileGroup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../TileGroup.js */ "./node_modules/react-calendar/dist/esm/TileGroup.js");
/* harmony import */ var _Year_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Year.js */ "./node_modules/react-calendar/dist/esm/DecadeView/Year.js");
/* harmony import */ var _shared_dates_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/dates.js */ "./node_modules/react-calendar/dist/esm/shared/dates.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};





function Years(props) {
    var activeStartDate = props.activeStartDate, hover = props.hover, showNeighboringDecade = props.showNeighboringDecade, value = props.value, valueType = props.valueType, otherProps = __rest(props, ["activeStartDate", "hover", "showNeighboringDecade", "value", "valueType"]);
    var start = (0,_shared_dates_js__WEBPACK_IMPORTED_MODULE_1__.getBeginOfDecadeYear)(activeStartDate);
    var end = start + (showNeighboringDecade ? 11 : 9);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TileGroup_js__WEBPACK_IMPORTED_MODULE_2__["default"], { className: "react-calendar__decade-view__years", dateTransform: _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_3__.getYearStart, dateType: "year", end: end, hover: hover, renderTile: function (_a) {
            var date = _a.date, otherTileProps = __rest(_a, ["date"]);
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Year_js__WEBPACK_IMPORTED_MODULE_4__["default"], __assign({}, otherProps, otherTileProps, { activeStartDate: activeStartDate, currentDecade: start, date: date }), date.getTime()));
        }, start: start, value: value, valueType: valueType }));
}


/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/Flex.js":
/*!******************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/Flex.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Flex)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


function toPercent(num) {
    return "".concat(num, "%");
}
function Flex(_a) {
    var children = _a.children, className = _a.className, count = _a.count, direction = _a.direction, offset = _a.offset, style = _a.style, wrap = _a.wrap, otherProps = __rest(_a, ["children", "className", "count", "direction", "offset", "style", "wrap"]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: className, style: __assign({ display: 'flex', flexDirection: direction, flexWrap: wrap ? 'wrap' : 'nowrap' }, style) }, otherProps, { children: react__WEBPACK_IMPORTED_MODULE_1__.Children.map(children, function (child, index) {
            var marginInlineStart = offset && index === 0 ? toPercent((100 * offset) / count) : null;
            return (0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(child, __assign(__assign({}, child.props), { style: {
                    flexBasis: toPercent(100 / count),
                    flexShrink: 0,
                    flexGrow: 0,
                    overflow: 'hidden',
                    marginLeft: marginInlineStart,
                    marginInlineStart: marginInlineStart,
                    marginInlineEnd: 0,
                } }));
        }) })));
}


/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/MonthView.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/MonthView.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MonthView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _MonthView_Days_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MonthView/Days.js */ "./node_modules/react-calendar/dist/esm/MonthView/Days.js");
/* harmony import */ var _MonthView_Weekdays_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MonthView/Weekdays.js */ "./node_modules/react-calendar/dist/esm/MonthView/Weekdays.js");
/* harmony import */ var _MonthView_WeekNumbers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MonthView/WeekNumbers.js */ "./node_modules/react-calendar/dist/esm/MonthView/WeekNumbers.js");
/* harmony import */ var _shared_const_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/const.js */ "./node_modules/react-calendar/dist/esm/shared/const.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};






function getCalendarTypeFromLocale(locale) {
    if (locale) {
        for (var _i = 0, _a = Object.entries(_shared_const_js__WEBPACK_IMPORTED_MODULE_2__.CALENDAR_TYPE_LOCALES); _i < _a.length; _i++) {
            var _b = _a[_i], calendarType = _b[0], locales = _b[1];
            if (locales.includes(locale)) {
                return calendarType;
            }
        }
    }
    return _shared_const_js__WEBPACK_IMPORTED_MODULE_2__.CALENDAR_TYPES.ISO_8601;
}
/**
 * Displays a given month.
 */
function MonthView(props) {
    var activeStartDate = props.activeStartDate, locale = props.locale, onMouseLeave = props.onMouseLeave, showFixedNumberOfWeeks = props.showFixedNumberOfWeeks;
    var _a = props.calendarType, calendarType = _a === void 0 ? getCalendarTypeFromLocale(locale) : _a, formatShortWeekday = props.formatShortWeekday, formatWeekday = props.formatWeekday, onClickWeekNumber = props.onClickWeekNumber, showWeekNumbers = props.showWeekNumbers, childProps = __rest(props, ["calendarType", "formatShortWeekday", "formatWeekday", "onClickWeekNumber", "showWeekNumbers"]);
    function renderWeekdays() {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MonthView_Weekdays_js__WEBPACK_IMPORTED_MODULE_3__["default"], { calendarType: calendarType, formatShortWeekday: formatShortWeekday, formatWeekday: formatWeekday, locale: locale, onMouseLeave: onMouseLeave }));
    }
    function renderWeekNumbers() {
        if (!showWeekNumbers) {
            return null;
        }
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MonthView_WeekNumbers_js__WEBPACK_IMPORTED_MODULE_4__["default"], { activeStartDate: activeStartDate, calendarType: calendarType, onClickWeekNumber: onClickWeekNumber, onMouseLeave: onMouseLeave, showFixedNumberOfWeeks: showFixedNumberOfWeeks }));
    }
    function renderDays() {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MonthView_Days_js__WEBPACK_IMPORTED_MODULE_5__["default"], __assign({ calendarType: calendarType }, childProps));
    }
    var className = 'react-calendar__month-view';
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(className, showWeekNumbers ? "".concat(className, "--weekNumbers") : ''), children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: {
                display: 'flex',
                alignItems: 'flex-end',
            }, children: [renderWeekNumbers(), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: {
                        flexGrow: 1,
                        width: '100%',
                    }, children: [renderWeekdays(), renderDays()] })] }) }));
}


/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/MonthView/Day.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/MonthView/Day.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Day)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");
/* harmony import */ var _Tile_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Tile.js */ "./node_modules/react-calendar/dist/esm/Tile.js");
/* harmony import */ var _shared_dates_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/dates.js */ "./node_modules/react-calendar/dist/esm/shared/dates.js");
/* harmony import */ var _shared_dateFormatter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/dateFormatter.js */ "./node_modules/react-calendar/dist/esm/shared/dateFormatter.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};





var className = 'react-calendar__month-view__days__day';
function Day(_a) {
    var calendarType = _a.calendarType, _b = _a.classes, classes = _b === void 0 ? [] : _b, currentMonthIndex = _a.currentMonthIndex, _c = _a.formatDay, formatDay = _c === void 0 ? _shared_dateFormatter_js__WEBPACK_IMPORTED_MODULE_1__.formatDay : _c, _d = _a.formatLongDate, formatLongDate = _d === void 0 ? _shared_dateFormatter_js__WEBPACK_IMPORTED_MODULE_1__.formatLongDate : _d, otherProps = __rest(_a, ["calendarType", "classes", "currentMonthIndex", "formatDay", "formatLongDate"]);
    var date = otherProps.date, locale = otherProps.locale;
    var classesProps = [];
    if (classes) {
        classesProps.push.apply(classesProps, classes);
    }
    if (className) {
        classesProps.push(className);
    }
    if ((0,_shared_dates_js__WEBPACK_IMPORTED_MODULE_2__.isWeekend)(date, calendarType)) {
        classesProps.push("".concat(className, "--weekend"));
    }
    if (date.getMonth() !== currentMonthIndex) {
        classesProps.push("".concat(className, "--neighboringMonth"));
    }
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Tile_js__WEBPACK_IMPORTED_MODULE_3__["default"], __assign({}, otherProps, { classes: classesProps, formatAbbr: formatLongDate, maxDateTransform: _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_4__.getDayEnd, minDateTransform: _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_4__.getDayStart, view: "month", children: formatDay(locale, date) })));
}


/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/MonthView/Days.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/MonthView/Days.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Days)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");
/* harmony import */ var _TileGroup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../TileGroup.js */ "./node_modules/react-calendar/dist/esm/TileGroup.js");
/* harmony import */ var _Day_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Day.js */ "./node_modules/react-calendar/dist/esm/MonthView/Day.js");
/* harmony import */ var _shared_dates_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/dates.js */ "./node_modules/react-calendar/dist/esm/shared/dates.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};





function Days(props) {
    var activeStartDate = props.activeStartDate, calendarType = props.calendarType, hover = props.hover, showFixedNumberOfWeeks = props.showFixedNumberOfWeeks, showNeighboringMonth = props.showNeighboringMonth, value = props.value, valueType = props.valueType, otherProps = __rest(props, ["activeStartDate", "calendarType", "hover", "showFixedNumberOfWeeks", "showNeighboringMonth", "value", "valueType"]);
    var year = (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getYear)(activeStartDate);
    var monthIndex = (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getMonth)(activeStartDate);
    var hasFixedNumberOfWeeks = showFixedNumberOfWeeks || showNeighboringMonth;
    var dayOfWeek = (0,_shared_dates_js__WEBPACK_IMPORTED_MODULE_2__.getDayOfWeek)(activeStartDate, calendarType);
    var offset = hasFixedNumberOfWeeks ? 0 : dayOfWeek;
    /**
     * Defines on which day of the month the grid shall start. If we simply show current
     * month, we obviously start on day one, but if showNeighboringMonth is set to
     * true, we need to find the beginning of the week the first day of the month is in.
     */
    var start = (hasFixedNumberOfWeeks ? -dayOfWeek : 0) + 1;
    /**
     * Defines on which day of the month the grid shall end. If we simply show current
     * month, we need to stop on the last day of the month, but if showNeighboringMonth
     * is set to true, we need to find the end of the week the last day of the month is in.
     */
    var end = (function () {
        if (showFixedNumberOfWeeks) {
            // Always show 6 weeks
            return start + 6 * 7 - 1;
        }
        var daysInMonth = (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getDaysInMonth)(activeStartDate);
        if (showNeighboringMonth) {
            var activeEndDate = new Date();
            activeEndDate.setFullYear(year, monthIndex, daysInMonth);
            activeEndDate.setHours(0, 0, 0, 0);
            var daysUntilEndOfTheWeek = 7 - (0,_shared_dates_js__WEBPACK_IMPORTED_MODULE_2__.getDayOfWeek)(activeEndDate, calendarType) - 1;
            return daysInMonth + daysUntilEndOfTheWeek;
        }
        return daysInMonth;
    })();
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TileGroup_js__WEBPACK_IMPORTED_MODULE_3__["default"], { className: "react-calendar__month-view__days", count: 7, dateTransform: function (day) {
            var date = new Date();
            date.setFullYear(year, monthIndex, day);
            return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getDayStart)(date);
        }, dateType: "day", hover: hover, end: end, renderTile: function (_a) {
            var date = _a.date, otherTileProps = __rest(_a, ["date"]);
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Day_js__WEBPACK_IMPORTED_MODULE_4__["default"], __assign({}, otherProps, otherTileProps, { activeStartDate: activeStartDate, calendarType: calendarType, currentMonthIndex: monthIndex, date: date }), date.getTime()));
        }, offset: offset, start: start, value: value, valueType: valueType }));
}


/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/MonthView/WeekNumber.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/MonthView/WeekNumber.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WeekNumber)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};

var className = 'react-calendar__tile';
function WeekNumber(props) {
    var onClickWeekNumber = props.onClickWeekNumber, weekNumber = props.weekNumber;
    var children = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: weekNumber });
    if (onClickWeekNumber) {
        var date_1 = props.date, onClickWeekNumber_1 = props.onClickWeekNumber, weekNumber_1 = props.weekNumber, otherProps = __rest(props, ["date", "onClickWeekNumber", "weekNumber"]);
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({}, otherProps, { className: className, onClick: function (event) { return onClickWeekNumber_1(weekNumber_1, date_1, event); }, type: "button", children: children })));
    }
    else {
        var date = props.date, onClickWeekNumber_2 = props.onClickWeekNumber, weekNumber_2 = props.weekNumber, otherProps = __rest(props, ["date", "onClickWeekNumber", "weekNumber"]);
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({}, otherProps, { className: className, children: children })));
    }
}


/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/MonthView/WeekNumbers.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/MonthView/WeekNumbers.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WeekNumbers)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");
/* harmony import */ var _WeekNumber_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WeekNumber.js */ "./node_modules/react-calendar/dist/esm/MonthView/WeekNumber.js");
/* harmony import */ var _Flex_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Flex.js */ "./node_modules/react-calendar/dist/esm/Flex.js");
/* harmony import */ var _shared_dates_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/dates.js */ "./node_modules/react-calendar/dist/esm/shared/dates.js");





function WeekNumbers(props) {
    var activeStartDate = props.activeStartDate, calendarType = props.calendarType, onClickWeekNumber = props.onClickWeekNumber, onMouseLeave = props.onMouseLeave, showFixedNumberOfWeeks = props.showFixedNumberOfWeeks;
    var numberOfWeeks = (function () {
        if (showFixedNumberOfWeeks) {
            return 6;
        }
        var numberOfDays = (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getDaysInMonth)(activeStartDate);
        var startWeekday = (0,_shared_dates_js__WEBPACK_IMPORTED_MODULE_2__.getDayOfWeek)(activeStartDate, calendarType);
        var days = numberOfDays - (7 - startWeekday);
        return 1 + Math.ceil(days / 7);
    })();
    var dates = (function () {
        var year = (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getYear)(activeStartDate);
        var monthIndex = (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getMonth)(activeStartDate);
        var day = (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getDate)(activeStartDate);
        var result = [];
        for (var index = 0; index < numberOfWeeks; index += 1) {
            result.push((0,_shared_dates_js__WEBPACK_IMPORTED_MODULE_2__.getBeginOfWeek)(new Date(year, monthIndex, day + index * 7), calendarType));
        }
        return result;
    })();
    var weekNumbers = dates.map(function (date) { return (0,_shared_dates_js__WEBPACK_IMPORTED_MODULE_2__.getWeekNumber)(date, calendarType); });
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Flex_js__WEBPACK_IMPORTED_MODULE_3__["default"], { className: "react-calendar__month-view__weekNumbers", count: numberOfWeeks, direction: "column", onFocus: onMouseLeave, onMouseOver: onMouseLeave, style: { flexBasis: 'calc(100% * (1 / 8)', flexShrink: 0 }, children: weekNumbers.map(function (weekNumber, weekIndex) {
            var date = dates[weekIndex];
            if (!date) {
                throw new Error('date is not defined');
            }
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_WeekNumber_js__WEBPACK_IMPORTED_MODULE_4__["default"], { date: date, onClickWeekNumber: onClickWeekNumber, weekNumber: weekNumber }, weekNumber));
        }) }));
}


/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/MonthView/Weekdays.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/MonthView/Weekdays.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Weekdays)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");
/* harmony import */ var _Flex_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Flex.js */ "./node_modules/react-calendar/dist/esm/Flex.js");
/* harmony import */ var _shared_dates_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/dates.js */ "./node_modules/react-calendar/dist/esm/shared/dates.js");
/* harmony import */ var _shared_dateFormatter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/dateFormatter.js */ "./node_modules/react-calendar/dist/esm/shared/dateFormatter.js");






var className = 'react-calendar__month-view__weekdays';
var weekdayClassName = "".concat(className, "__weekday");
function Weekdays(props) {
    var calendarType = props.calendarType, _a = props.formatShortWeekday, formatShortWeekday = _a === void 0 ? _shared_dateFormatter_js__WEBPACK_IMPORTED_MODULE_2__.formatShortWeekday : _a, _b = props.formatWeekday, formatWeekday = _b === void 0 ? _shared_dateFormatter_js__WEBPACK_IMPORTED_MODULE_2__.formatWeekday : _b, locale = props.locale, onMouseLeave = props.onMouseLeave;
    var anyDate = new Date();
    var beginOfMonth = (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_3__.getMonthStart)(anyDate);
    var year = (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_3__.getYear)(beginOfMonth);
    var monthIndex = (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_3__.getMonth)(beginOfMonth);
    var weekdays = [];
    for (var weekday = 1; weekday <= 7; weekday += 1) {
        var weekdayDate = new Date(year, monthIndex, weekday - (0,_shared_dates_js__WEBPACK_IMPORTED_MODULE_4__.getDayOfWeek)(beginOfMonth, calendarType));
        var abbr = formatWeekday(locale, weekdayDate);
        weekdays.push((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(weekdayClassName, (0,_shared_dates_js__WEBPACK_IMPORTED_MODULE_4__.isCurrentDayOfWeek)(weekdayDate) && "".concat(weekdayClassName, "--current"), (0,_shared_dates_js__WEBPACK_IMPORTED_MODULE_4__.isWeekend)(weekdayDate, calendarType) && "".concat(weekdayClassName, "--weekend")), children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("abbr", { "aria-label": abbr, title: abbr, children: formatShortWeekday(locale, weekdayDate).replace('.', '') }) }, weekday));
    }
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Flex_js__WEBPACK_IMPORTED_MODULE_5__["default"], { className: className, count: 7, onFocus: onMouseLeave, onMouseOver: onMouseLeave, children: weekdays }));
}


/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/Tile.js":
/*!******************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/Tile.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Tile)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");



function Tile(props) {
    var activeStartDate = props.activeStartDate, children = props.children, classes = props.classes, date = props.date, formatAbbr = props.formatAbbr, locale = props.locale, maxDate = props.maxDate, maxDateTransform = props.maxDateTransform, minDate = props.minDate, minDateTransform = props.minDateTransform, onClick = props.onClick, onMouseOver = props.onMouseOver, style = props.style, tileClassNameProps = props.tileClassName, tileContentProps = props.tileContent, tileDisabled = props.tileDisabled, view = props.view;
    var tileClassName = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
        var args = { activeStartDate: activeStartDate, date: date, view: view };
        return typeof tileClassNameProps === 'function' ? tileClassNameProps(args) : tileClassNameProps;
    }, [activeStartDate, date, tileClassNameProps, view]);
    var tileContent = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
        var args = { activeStartDate: activeStartDate, date: date, view: view };
        return typeof tileContentProps === 'function' ? tileContentProps(args) : tileContentProps;
    }, [activeStartDate, date, tileContentProps, view]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", { className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes, tileClassName), disabled: (minDate && minDateTransform(minDate) > date) ||
            (maxDate && maxDateTransform(maxDate) < date) ||
            (tileDisabled && tileDisabled({ activeStartDate: activeStartDate, date: date, view: view })), onClick: onClick ? function (event) { return onClick(date, event); } : undefined, onFocus: onMouseOver ? function () { return onMouseOver(date); } : undefined, onMouseOver: onMouseOver ? function () { return onMouseOver(date); } : undefined, style: style, type: "button", children: [formatAbbr ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("abbr", { "aria-label": formatAbbr(locale, date), children: children }) : children, tileContent] }));
}


/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/TileGroup.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/TileGroup.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TileGroup)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _Flex_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Flex.js */ "./node_modules/react-calendar/dist/esm/Flex.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/utils.js */ "./node_modules/react-calendar/dist/esm/shared/utils.js");



function TileGroup(_a) {
    var className = _a.className, _b = _a.count, count = _b === void 0 ? 3 : _b, dateTransform = _a.dateTransform, dateType = _a.dateType, end = _a.end, hover = _a.hover, offset = _a.offset, renderTile = _a.renderTile, start = _a.start, _c = _a.step, step = _c === void 0 ? 1 : _c, value = _a.value, valueType = _a.valueType;
    var tiles = [];
    for (var point = start; point <= end; point += step) {
        var date = dateTransform(point);
        tiles.push(renderTile({
            classes: (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getTileClasses)({
                date: date,
                dateType: dateType,
                hover: hover,
                value: value,
                valueType: valueType,
            }),
            date: date,
        }));
    }
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Flex_js__WEBPACK_IMPORTED_MODULE_2__["default"], { className: className, count: count, offset: offset, wrap: true, children: tiles }));
}


/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/YearView.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/YearView.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ YearView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _YearView_Months_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./YearView/Months.js */ "./node_modules/react-calendar/dist/esm/YearView/Months.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


/**
 * Displays a given year.
 */
function YearView(props) {
    function renderMonths() {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_YearView_Months_js__WEBPACK_IMPORTED_MODULE_1__["default"], __assign({}, props));
    }
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "react-calendar__year-view", children: renderMonths() });
}


/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/YearView/Month.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/YearView/Month.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Month)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");
/* harmony import */ var _Tile_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Tile.js */ "./node_modules/react-calendar/dist/esm/Tile.js");
/* harmony import */ var _shared_dateFormatter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/dateFormatter.js */ "./node_modules/react-calendar/dist/esm/shared/dateFormatter.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};




var className = 'react-calendar__year-view__months__month';
function Month(_a) {
    var _b = _a.classes, classes = _b === void 0 ? [] : _b, _c = _a.formatMonth, formatMonth = _c === void 0 ? _shared_dateFormatter_js__WEBPACK_IMPORTED_MODULE_1__.formatMonth : _c, _d = _a.formatMonthYear, formatMonthYear = _d === void 0 ? _shared_dateFormatter_js__WEBPACK_IMPORTED_MODULE_1__.formatMonthYear : _d, otherProps = __rest(_a, ["classes", "formatMonth", "formatMonthYear"]);
    var date = otherProps.date, locale = otherProps.locale;
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Tile_js__WEBPACK_IMPORTED_MODULE_2__["default"], __assign({}, otherProps, { classes: __spreadArray(__spreadArray([], classes, true), [className], false), formatAbbr: formatMonthYear, maxDateTransform: _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_3__.getMonthEnd, minDateTransform: _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_3__.getMonthStart, view: "year", children: formatMonth(locale, date) })));
}


/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/YearView/Months.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/YearView/Months.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Months)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");
/* harmony import */ var _TileGroup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../TileGroup.js */ "./node_modules/react-calendar/dist/esm/TileGroup.js");
/* harmony import */ var _Month_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Month.js */ "./node_modules/react-calendar/dist/esm/YearView/Month.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};




function Months(props) {
    var activeStartDate = props.activeStartDate, hover = props.hover, value = props.value, valueType = props.valueType, otherProps = __rest(props, ["activeStartDate", "hover", "value", "valueType"]);
    var start = 0;
    var end = 11;
    var year = (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getYear)(activeStartDate);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TileGroup_js__WEBPACK_IMPORTED_MODULE_2__["default"], { className: "react-calendar__year-view__months", dateTransform: function (monthIndex) {
            var date = new Date();
            date.setFullYear(year, monthIndex, 1);
            return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getMonthStart)(date);
        }, dateType: "month", end: end, hover: hover, renderTile: function (_a) {
            var date = _a.date, otherTileProps = __rest(_a, ["date"]);
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Month_js__WEBPACK_IMPORTED_MODULE_3__["default"], __assign({}, otherProps, otherTileProps, { activeStartDate: activeStartDate, date: date }), date.getTime()));
        }, start: start, value: value, valueType: valueType }));
}


/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/shared/const.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/shared/const.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CALENDAR_TYPES: () => (/* binding */ CALENDAR_TYPES),
/* harmony export */   CALENDAR_TYPE_LOCALES: () => (/* binding */ CALENDAR_TYPE_LOCALES),
/* harmony export */   WEEKDAYS: () => (/* binding */ WEEKDAYS)
/* harmony export */ });
var _a;
var CALENDAR_TYPES = {
    GREGORY: 'gregory',
    HEBREW: 'hebrew',
    ISLAMIC: 'islamic',
    ISO_8601: 'iso8601',
};
var CALENDAR_TYPE_LOCALES = (_a = {},
    _a[CALENDAR_TYPES.GREGORY] = [
        'en-CA',
        'en-US',
        'es-AR',
        'es-BO',
        'es-CL',
        'es-CO',
        'es-CR',
        'es-DO',
        'es-EC',
        'es-GT',
        'es-HN',
        'es-MX',
        'es-NI',
        'es-PA',
        'es-PE',
        'es-PR',
        'es-SV',
        'es-VE',
        'pt-BR',
    ],
    _a[CALENDAR_TYPES.HEBREW] = ['he', 'he-IL'],
    _a[CALENDAR_TYPES.ISLAMIC] = [
        // ar-LB, ar-MA intentionally missing
        'ar',
        'ar-AE',
        'ar-BH',
        'ar-DZ',
        'ar-EG',
        'ar-IQ',
        'ar-JO',
        'ar-KW',
        'ar-LY',
        'ar-OM',
        'ar-QA',
        'ar-SA',
        'ar-SD',
        'ar-SY',
        'ar-YE',
        'dv',
        'dv-MV',
        'ps',
        'ps-AR',
    ],
    _a);
var WEEKDAYS = [0, 1, 2, 3, 4, 5, 6];


/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/shared/dateFormatter.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/shared/dateFormatter.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatDate: () => (/* binding */ formatDate),
/* harmony export */   formatDay: () => (/* binding */ formatDay),
/* harmony export */   formatLongDate: () => (/* binding */ formatLongDate),
/* harmony export */   formatMonth: () => (/* binding */ formatMonth),
/* harmony export */   formatMonthYear: () => (/* binding */ formatMonthYear),
/* harmony export */   formatShortWeekday: () => (/* binding */ formatShortWeekday),
/* harmony export */   formatWeekday: () => (/* binding */ formatWeekday),
/* harmony export */   formatYear: () => (/* binding */ formatYear)
/* harmony export */ });
/* harmony import */ var get_user_locale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! get-user-locale */ "./node_modules/get-user-locale/dist/esm/index.js");

var formatterCache = new Map();
function getFormatter(options) {
    return function formatter(locale, date) {
        var localeWithDefault = locale || (0,get_user_locale__WEBPACK_IMPORTED_MODULE_0__["default"])();
        if (!formatterCache.has(localeWithDefault)) {
            formatterCache.set(localeWithDefault, new Map());
        }
        var formatterCacheLocale = formatterCache.get(localeWithDefault);
        if (!formatterCacheLocale.has(options)) {
            formatterCacheLocale.set(options, new Intl.DateTimeFormat(localeWithDefault || undefined, options).format);
        }
        return formatterCacheLocale.get(options)(date);
    };
}
/**
 * Changes the hour in a Date to ensure right date formatting even if DST is messed up.
 * Workaround for bug in WebKit and Firefox with historical dates.
 * For more details, see:
 * https://bugs.chromium.org/p/chromium/issues/detail?id=750465
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1385643
 *
 * @param {Date} date Date.
 * @returns {Date} Date with hour set to 12.
 */
function toSafeHour(date) {
    var safeDate = new Date(date);
    return new Date(safeDate.setHours(12));
}
function getSafeFormatter(options) {
    return function (locale, date) { return getFormatter(options)(locale, toSafeHour(date)); };
}
var formatDateOptions = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
};
var formatDayOptions = { day: 'numeric' };
var formatLongDateOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
};
var formatMonthOptions = { month: 'long' };
var formatMonthYearOptions = {
    month: 'long',
    year: 'numeric',
};
var formatShortWeekdayOptions = { weekday: 'short' };
var formatWeekdayOptions = { weekday: 'long' };
var formatYearOptions = { year: 'numeric' };
var formatDate = getSafeFormatter(formatDateOptions);
var formatDay = getSafeFormatter(formatDayOptions);
var formatLongDate = getSafeFormatter(formatLongDateOptions);
var formatMonth = getSafeFormatter(formatMonthOptions);
var formatMonthYear = getSafeFormatter(formatMonthYearOptions);
var formatShortWeekday = getSafeFormatter(formatShortWeekdayOptions);
var formatWeekday = getSafeFormatter(formatWeekdayOptions);
var formatYear = getSafeFormatter(formatYearOptions);


/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/shared/dates.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/shared/dates.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBegin: () => (/* binding */ getBegin),
/* harmony export */   getBeginNext: () => (/* binding */ getBeginNext),
/* harmony export */   getBeginNext2: () => (/* binding */ getBeginNext2),
/* harmony export */   getBeginOfCenturyYear: () => (/* binding */ getBeginOfCenturyYear),
/* harmony export */   getBeginOfDecadeYear: () => (/* binding */ getBeginOfDecadeYear),
/* harmony export */   getBeginOfWeek: () => (/* binding */ getBeginOfWeek),
/* harmony export */   getBeginPrevious: () => (/* binding */ getBeginPrevious),
/* harmony export */   getBeginPrevious2: () => (/* binding */ getBeginPrevious2),
/* harmony export */   getCenturyLabel: () => (/* binding */ getCenturyLabel),
/* harmony export */   getDayOfWeek: () => (/* binding */ getDayOfWeek),
/* harmony export */   getDecadeLabel: () => (/* binding */ getDecadeLabel),
/* harmony export */   getEnd: () => (/* binding */ getEnd),
/* harmony export */   getEndPrevious: () => (/* binding */ getEndPrevious),
/* harmony export */   getEndPrevious2: () => (/* binding */ getEndPrevious2),
/* harmony export */   getRange: () => (/* binding */ getRange),
/* harmony export */   getValueRange: () => (/* binding */ getValueRange),
/* harmony export */   getWeekNumber: () => (/* binding */ getWeekNumber),
/* harmony export */   isCurrentDayOfWeek: () => (/* binding */ isCurrentDayOfWeek),
/* harmony export */   isWeekend: () => (/* binding */ isWeekend)
/* harmony export */ });
/* harmony import */ var _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const.js */ "./node_modules/react-calendar/dist/esm/shared/const.js");
/* harmony import */ var _dateFormatter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dateFormatter.js */ "./node_modules/react-calendar/dist/esm/shared/dateFormatter.js");



var SUNDAY = _const_js__WEBPACK_IMPORTED_MODULE_0__.WEEKDAYS[0];
var FRIDAY = _const_js__WEBPACK_IMPORTED_MODULE_0__.WEEKDAYS[5];
var SATURDAY = _const_js__WEBPACK_IMPORTED_MODULE_0__.WEEKDAYS[6];
/* Simple getters - getting a property of a given point in time */
/**
 * Gets day of the week of a given date.
 * @param {Date} date Date.
 * @param {CalendarType} [calendarType="iso8601"] Calendar type.
 * @returns {number} Day of the week.
 */
function getDayOfWeek(date, calendarType) {
    if (calendarType === void 0) { calendarType = _const_js__WEBPACK_IMPORTED_MODULE_0__.CALENDAR_TYPES.ISO_8601; }
    var weekday = date.getDay();
    switch (calendarType) {
        case _const_js__WEBPACK_IMPORTED_MODULE_0__.CALENDAR_TYPES.ISO_8601:
            // Shifts days of the week so that Monday is 0, Sunday is 6
            return (weekday + 6) % 7;
        case _const_js__WEBPACK_IMPORTED_MODULE_0__.CALENDAR_TYPES.ISLAMIC:
            return (weekday + 1) % 7;
        case _const_js__WEBPACK_IMPORTED_MODULE_0__.CALENDAR_TYPES.HEBREW:
        case _const_js__WEBPACK_IMPORTED_MODULE_0__.CALENDAR_TYPES.GREGORY:
            return weekday;
        default:
            throw new Error('Unsupported calendar type.');
    }
}
/**
 * Century
 */
/**
 * Gets the year of the beginning of a century of a given date.
 * @param {Date} date Date.
 * @returns {number} Year of the beginning of a century.
 */
function getBeginOfCenturyYear(date) {
    var beginOfCentury = (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getCenturyStart)(date);
    return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getYear)(beginOfCentury);
}
/**
 * Decade
 */
/**
 * Gets the year of the beginning of a decade of a given date.
 * @param {Date} date Date.
 * @returns {number} Year of the beginning of a decade.
 */
function getBeginOfDecadeYear(date) {
    var beginOfDecade = (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getDecadeStart)(date);
    return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getYear)(beginOfDecade);
}
/**
 * Week
 */
/**
 * Returns the beginning of a given week.
 *
 * @param {Date} date Date.
 * @param {CalendarType} [calendarType="iso8601"] Calendar type.
 * @returns {Date} Beginning of a given week.
 */
function getBeginOfWeek(date, calendarType) {
    if (calendarType === void 0) { calendarType = _const_js__WEBPACK_IMPORTED_MODULE_0__.CALENDAR_TYPES.ISO_8601; }
    var year = (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getYear)(date);
    var monthIndex = (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getMonth)(date);
    var day = date.getDate() - getDayOfWeek(date, calendarType);
    return new Date(year, monthIndex, day);
}
/**
 * Gets week number according to ISO 8601 or US standard.
 * In ISO 8601, Arabic and Hebrew week 1 is the one with January 4.
 * In US calendar week 1 is the one with January 1.
 *
 * @param {Date} date Date.
 * @param {CalendarType} [calendarType="iso8601"] Calendar type.
 * @returns {number} Week number.
 */
function getWeekNumber(date, calendarType) {
    if (calendarType === void 0) { calendarType = _const_js__WEBPACK_IMPORTED_MODULE_0__.CALENDAR_TYPES.ISO_8601; }
    var calendarTypeForWeekNumber = calendarType === _const_js__WEBPACK_IMPORTED_MODULE_0__.CALENDAR_TYPES.GREGORY ? _const_js__WEBPACK_IMPORTED_MODULE_0__.CALENDAR_TYPES.GREGORY : _const_js__WEBPACK_IMPORTED_MODULE_0__.CALENDAR_TYPES.ISO_8601;
    var beginOfWeek = getBeginOfWeek(date, calendarType);
    var year = (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getYear)(date) + 1;
    var dayInWeekOne;
    var beginOfFirstWeek;
    // Look for the first week one that does not come after a given date
    do {
        dayInWeekOne = new Date(year, 0, calendarTypeForWeekNumber === _const_js__WEBPACK_IMPORTED_MODULE_0__.CALENDAR_TYPES.ISO_8601 ? 4 : 1);
        beginOfFirstWeek = getBeginOfWeek(dayInWeekOne, calendarType);
        year -= 1;
    } while (date < beginOfFirstWeek);
    return Math.round((beginOfWeek.getTime() - beginOfFirstWeek.getTime()) / (8.64e7 * 7)) + 1;
}
/**
 * Others
 */
/**
 * Returns the beginning of a given range.
 *
 * @param {RangeType} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 * @returns {Date} Beginning of a given range.
 */
function getBegin(rangeType, date) {
    switch (rangeType) {
        case 'century':
            return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getCenturyStart)(date);
        case 'decade':
            return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getDecadeStart)(date);
        case 'year':
            return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getYearStart)(date);
        case 'month':
            return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getMonthStart)(date);
        case 'day':
            return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getDayStart)(date);
        default:
            throw new Error("Invalid rangeType: ".concat(rangeType));
    }
}
/**
 * Returns the beginning of a previous given range.
 *
 * @param {RangeType} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 * @returns {Date} Beginning of a previous given range.
 */
function getBeginPrevious(rangeType, date) {
    switch (rangeType) {
        case 'century':
            return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getPreviousCenturyStart)(date);
        case 'decade':
            return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getPreviousDecadeStart)(date);
        case 'year':
            return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getPreviousYearStart)(date);
        case 'month':
            return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getPreviousMonthStart)(date);
        default:
            throw new Error("Invalid rangeType: ".concat(rangeType));
    }
}
/**
 * Returns the beginning of a next given range.
 *
 * @param {RangeType} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 * @returns {Date} Beginning of a next given range.
 */
function getBeginNext(rangeType, date) {
    switch (rangeType) {
        case 'century':
            return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getNextCenturyStart)(date);
        case 'decade':
            return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getNextDecadeStart)(date);
        case 'year':
            return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getNextYearStart)(date);
        case 'month':
            return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getNextMonthStart)(date);
        default:
            throw new Error("Invalid rangeType: ".concat(rangeType));
    }
}
function getBeginPrevious2(rangeType, date) {
    switch (rangeType) {
        case 'decade':
            return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getPreviousDecadeStart)(date, -100);
        case 'year':
            return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getPreviousYearStart)(date, -10);
        case 'month':
            return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getPreviousMonthStart)(date, -12);
        default:
            throw new Error("Invalid rangeType: ".concat(rangeType));
    }
}
function getBeginNext2(rangeType, date) {
    switch (rangeType) {
        case 'decade':
            return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getNextDecadeStart)(date, 100);
        case 'year':
            return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getNextYearStart)(date, 10);
        case 'month':
            return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getNextMonthStart)(date, 12);
        default:
            throw new Error("Invalid rangeType: ".concat(rangeType));
    }
}
/**
 * Returns the end of a given range.
 *
 * @param {RangeType} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 * @returns {Date} End of a given range.
 */
function getEnd(rangeType, date) {
    switch (rangeType) {
        case 'century':
            return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getCenturyEnd)(date);
        case 'decade':
            return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getDecadeEnd)(date);
        case 'year':
            return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getYearEnd)(date);
        case 'month':
            return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getMonthEnd)(date);
        case 'day':
            return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getDayEnd)(date);
        default:
            throw new Error("Invalid rangeType: ".concat(rangeType));
    }
}
/**
 * Returns the end of a previous given range.
 *
 * @param {RangeType} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 * @returns {Date} End of a previous given range.
 */
function getEndPrevious(rangeType, date) {
    switch (rangeType) {
        case 'century':
            return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getPreviousCenturyEnd)(date);
        case 'decade':
            return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getPreviousDecadeEnd)(date);
        case 'year':
            return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getPreviousYearEnd)(date);
        case 'month':
            return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getPreviousMonthEnd)(date);
        default:
            throw new Error("Invalid rangeType: ".concat(rangeType));
    }
}
function getEndPrevious2(rangeType, date) {
    switch (rangeType) {
        case 'decade':
            return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getPreviousDecadeEnd)(date, -100);
        case 'year':
            return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getPreviousYearEnd)(date, -10);
        case 'month':
            return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getPreviousMonthEnd)(date, -12);
        default:
            throw new Error("Invalid rangeType: ".concat(rangeType));
    }
}
/**
 * Returns an array with the beginning and the end of a given range.
 *
 * @param {RangeType} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 * @returns {Date[]} Beginning and end of a given range.
 */
function getRange(rangeType, date) {
    switch (rangeType) {
        case 'century':
            return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getCenturyRange)(date);
        case 'decade':
            return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getDecadeRange)(date);
        case 'year':
            return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getYearRange)(date);
        case 'month':
            return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getMonthRange)(date);
        case 'day':
            return (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getDayRange)(date);
        default:
            throw new Error("Invalid rangeType: ".concat(rangeType));
    }
}
/**
 * Creates a range out of two values, ensuring they are in order and covering entire period ranges.
 *
 * @param {RangeType} rangeType Range type (e.g. 'day')
 * @param {Date} date1 First date.
 * @param {Date} date2 Second date.
 * @returns {Date[]} Beginning and end of a given range.
 */
function getValueRange(rangeType, date1, date2) {
    var rawNextValue = [date1, date2].sort(function (a, b) { return a.getTime() - b.getTime(); });
    return [getBegin(rangeType, rawNextValue[0]), getEnd(rangeType, rawNextValue[1])];
}
function toYearLabel(locale, formatYear, dates) {
    if (formatYear === void 0) { formatYear = _dateFormatter_js__WEBPACK_IMPORTED_MODULE_2__.formatYear; }
    return dates.map(function (date) { return formatYear(locale, date); }).join(' – ');
}
/**
 * @callback FormatYear
 * @param {string} locale Locale.
 * @param {Date} date Date.
 * @returns {string} Formatted year.
 */
/**
 * Returns a string labelling a century of a given date.
 * For example, for 2017 it will return 2001-2100.
 *
 * @param {string} locale Locale.
 * @param {FormatYear} formatYear Function to format a year.
 * @param {Date|string|number} date Date or a year as a string or as a number.
 * @returns {string} String labelling a century of a given date.
 */
function getCenturyLabel(locale, formatYear, date) {
    return toYearLabel(locale, formatYear, (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getCenturyRange)(date));
}
/**
 * Returns a string labelling a decade of a given date.
 * For example, for 2017 it will return 2011-2020.
 *
 * @param {string} locale Locale.
 * @param {FormatYear} formatYear Function to format a year.
 * @param {Date|string|number} date Date or a year as a string or as a number.
 * @returns {string} String labelling a decade of a given date.
 */
function getDecadeLabel(locale, formatYear, date) {
    return toYearLabel(locale, formatYear, (0,_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__.getDecadeRange)(date));
}
/**
 * Returns a boolean determining whether a given date is the current day of the week.
 *
 * @param {Date} date Date.
 * @returns {boolean} Whether a given date is the current day of the week.
 */
function isCurrentDayOfWeek(date) {
    return date.getDay() === new Date().getDay();
}
/**
 * Returns a boolean determining whether a given date is a weekend day.
 *
 * @param {Date} date Date.
 * @param {CalendarType} [calendarType="iso8601"] Calendar type.
 * @returns {boolean} Whether a given date is a weekend day.
 */
function isWeekend(date, calendarType) {
    if (calendarType === void 0) { calendarType = _const_js__WEBPACK_IMPORTED_MODULE_0__.CALENDAR_TYPES.ISO_8601; }
    var weekday = date.getDay();
    switch (calendarType) {
        case _const_js__WEBPACK_IMPORTED_MODULE_0__.CALENDAR_TYPES.ISLAMIC:
        case _const_js__WEBPACK_IMPORTED_MODULE_0__.CALENDAR_TYPES.HEBREW:
            return weekday === FRIDAY || weekday === SATURDAY;
        case _const_js__WEBPACK_IMPORTED_MODULE_0__.CALENDAR_TYPES.ISO_8601:
        case _const_js__WEBPACK_IMPORTED_MODULE_0__.CALENDAR_TYPES.GREGORY:
            return weekday === SATURDAY || weekday === SUNDAY;
        default:
            throw new Error('Unsupported calendar type.');
    }
}


/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/shared/utils.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/shared/utils.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   between: () => (/* binding */ between),
/* harmony export */   doRangesOverlap: () => (/* binding */ doRangesOverlap),
/* harmony export */   getTileClasses: () => (/* binding */ getTileClasses),
/* harmony export */   isRangeWithinRange: () => (/* binding */ isRangeWithinRange),
/* harmony export */   isValueWithinRange: () => (/* binding */ isValueWithinRange)
/* harmony export */ });
/* harmony import */ var _dates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dates.js */ "./node_modules/react-calendar/dist/esm/shared/dates.js");

/**
 * Returns a value no smaller than min and no larger than max.
 *
 * @param {Date} value Value to return.
 * @param {Date} min Minimum return value.
 * @param {Date} max Maximum return value.
 * @returns {Date} Value between min and max.
 */
function between(value, min, max) {
    if (min && min > value) {
        return min;
    }
    if (max && max < value) {
        return max;
    }
    return value;
}
function isValueWithinRange(value, range) {
    return range[0] <= value && range[1] >= value;
}
function isRangeWithinRange(greaterRange, smallerRange) {
    return greaterRange[0] <= smallerRange[0] && greaterRange[1] >= smallerRange[1];
}
function doRangesOverlap(range1, range2) {
    return isValueWithinRange(range1[0], range2) || isValueWithinRange(range1[1], range2);
}
function getRangeClassNames(valueRange, dateRange, baseClassName) {
    var isRange = doRangesOverlap(dateRange, valueRange);
    var classes = [];
    if (isRange) {
        classes.push(baseClassName);
        var isRangeStart = isValueWithinRange(valueRange[0], dateRange);
        var isRangeEnd = isValueWithinRange(valueRange[1], dateRange);
        if (isRangeStart) {
            classes.push("".concat(baseClassName, "Start"));
        }
        if (isRangeEnd) {
            classes.push("".concat(baseClassName, "End"));
        }
        if (isRangeStart && isRangeEnd) {
            classes.push("".concat(baseClassName, "BothEnds"));
        }
    }
    return classes;
}
function isCompleteValue(value) {
    if (Array.isArray(value)) {
        return value[0] !== null && value[1] !== null;
    }
    return value !== null;
}
function getTileClasses(args) {
    if (!args) {
        throw new Error('args is required');
    }
    var value = args.value, date = args.date, hover = args.hover;
    var className = 'react-calendar__tile';
    var classes = [className];
    if (!date) {
        return classes;
    }
    var now = new Date();
    var dateRange = (function () {
        if (Array.isArray(date)) {
            return date;
        }
        var dateType = args.dateType;
        if (!dateType) {
            throw new Error('dateType is required when date is not an array of two dates');
        }
        return (0,_dates_js__WEBPACK_IMPORTED_MODULE_0__.getRange)(dateType, date);
    })();
    if (isValueWithinRange(now, dateRange)) {
        classes.push("".concat(className, "--now"));
    }
    if (!value || !isCompleteValue(value)) {
        return classes;
    }
    var valueRange = (function () {
        if (Array.isArray(value)) {
            return value;
        }
        var valueType = args.valueType;
        if (!valueType) {
            throw new Error('valueType is required when value is not an array of two dates');
        }
        return (0,_dates_js__WEBPACK_IMPORTED_MODULE_0__.getRange)(valueType, value);
    })();
    if (isRangeWithinRange(valueRange, dateRange)) {
        classes.push("".concat(className, "--active"));
    }
    else if (doRangesOverlap(valueRange, dateRange)) {
        classes.push("".concat(className, "--hasActive"));
    }
    var valueRangeClassNames = getRangeClassNames(valueRange, dateRange, "".concat(className, "--range"));
    classes.push.apply(classes, valueRangeClassNames);
    var valueArray = Array.isArray(value) ? value : [value];
    if (hover && valueArray.length === 1) {
        var hoverRange = hover > valueRange[0] ? [valueRange[0], hover] : [hover, valueRange[0]];
        var hoverRangeClassNames = getRangeClassNames(hoverRange, dateRange, "".concat(className, "--hover"));
        classes.push.apply(classes, hoverRangeClassNames);
    }
    return classes;
}


/***/ }),

/***/ "./node_modules/react-icons/lib/iconBase.mjs":
/*!***************************************************!*\
  !*** ./node_modules/react-icons/lib/iconBase.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GenIcon: () => (/* binding */ GenIcon),
/* harmony export */   IconBase: () => (/* binding */ IconBase)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _iconContext_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iconContext.mjs */ "./node_modules/react-icons/lib/iconContext.mjs");
var _excluded = ["attr", "size", "title"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } } return target; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


function Tree2Element(tree) {
  return tree && tree.map((node, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(node.tag, _objectSpread({
    key: i
  }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
  return props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconBase, _extends({
    attr: _objectSpread({}, data.attr)
  }, props), Tree2Element(data.child));
}
function IconBase(props) {
  var elem = conf => {
    var {
        attr,
        size,
        title
      } = props,
      svgProps = _objectWithoutProperties(props, _excluded);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: _objectSpread(_objectSpread({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, title), props.children);
  };
  return _iconContext_mjs__WEBPACK_IMPORTED_MODULE_1__.IconContext !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_iconContext_mjs__WEBPACK_IMPORTED_MODULE_1__.IconContext.Consumer, null, conf => elem(conf)) : elem(_iconContext_mjs__WEBPACK_IMPORTED_MODULE_1__.DefaultContext);
}

/***/ }),

/***/ "./node_modules/react-icons/lib/iconContext.mjs":
/*!******************************************************!*\
  !*** ./node_modules/react-icons/lib/iconContext.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultContext: () => (/* binding */ DefaultContext),
/* harmony export */   IconContext: () => (/* binding */ IconContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(DefaultContext);

/***/ }),

/***/ "./node_modules/react-icons/lib/iconsManifest.mjs":
/*!********************************************************!*\
  !*** ./node_modules/react-icons/lib/iconsManifest.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconsManifest: () => (/* binding */ IconsManifest)
/* harmony export */ });
var IconsManifest = [
  {
    "id": "ci",
    "name": "Circum Icons",
    "projectUrl": "https://circumicons.com/",
    "license": "MPL-2.0 license",
    "licenseUrl": "https://github.com/Klarr-Agency/Circum-Icons/blob/main/LICENSE"
  },
  {
    "id": "fa",
    "name": "Font Awesome 5",
    "projectUrl": "https://fontawesome.com/",
    "license": "CC BY 4.0 License",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
  },
  {
    "id": "fa6",
    "name": "Font Awesome 6",
    "projectUrl": "https://fontawesome.com/",
    "license": "CC BY 4.0 License",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
  },
  {
    "id": "io",
    "name": "Ionicons 4",
    "projectUrl": "https://ionicons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/ionic-team/ionicons/blob/master/LICENSE"
  },
  {
    "id": "io5",
    "name": "Ionicons 5",
    "projectUrl": "https://ionicons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/ionic-team/ionicons/blob/master/LICENSE"
  },
  {
    "id": "md",
    "name": "Material Design icons",
    "projectUrl": "http://google.github.io/material-design-icons/",
    "license": "Apache License Version 2.0",
    "licenseUrl": "https://github.com/google/material-design-icons/blob/master/LICENSE"
  },
  {
    "id": "ti",
    "name": "Typicons",
    "projectUrl": "http://s-ings.com/typicons/",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"
  },
  {
    "id": "go",
    "name": "Github Octicons icons",
    "projectUrl": "https://octicons.github.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/primer/octicons/blob/master/LICENSE"
  },
  {
    "id": "fi",
    "name": "Feather",
    "projectUrl": "https://feathericons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/feathericons/feather/blob/master/LICENSE"
  },
  {
    "id": "lu",
    "name": "Lucide",
    "projectUrl": "https://lucide.dev/",
    "license": "ISC",
    "licenseUrl": "https://github.com/lucide-icons/lucide/blob/main/LICENSE"
  },
  {
    "id": "gi",
    "name": "Game Icons",
    "projectUrl": "https://game-icons.net/",
    "license": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "id": "wi",
    "name": "Weather Icons",
    "projectUrl": "https://erikflowers.github.io/weather-icons/",
    "license": "SIL OFL 1.1",
    "licenseUrl": "http://scripts.sil.org/OFL"
  },
  {
    "id": "di",
    "name": "Devicons",
    "projectUrl": "https://vorillaz.github.io/devicons/",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "ai",
    "name": "Ant Design Icons",
    "projectUrl": "https://github.com/ant-design/ant-design-icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "bs",
    "name": "Bootstrap Icons",
    "projectUrl": "https://github.com/twbs/icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "ri",
    "name": "Remix Icon",
    "projectUrl": "https://github.com/Remix-Design/RemixIcon",
    "license": "Apache License Version 2.0",
    "licenseUrl": "http://www.apache.org/licenses/"
  },
  {
    "id": "fc",
    "name": "Flat Color Icons",
    "projectUrl": "https://github.com/icons8/flat-color-icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "gr",
    "name": "Grommet-Icons",
    "projectUrl": "https://github.com/grommet/grommet-icons",
    "license": "Apache License Version 2.0",
    "licenseUrl": "http://www.apache.org/licenses/"
  },
  {
    "id": "hi",
    "name": "Heroicons",
    "projectUrl": "https://github.com/tailwindlabs/heroicons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "hi2",
    "name": "Heroicons 2",
    "projectUrl": "https://github.com/tailwindlabs/heroicons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "si",
    "name": "Simple Icons",
    "projectUrl": "https://simpleicons.org/",
    "license": "CC0 1.0 Universal",
    "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/"
  },
  {
    "id": "sl",
    "name": "Simple Line Icons",
    "projectUrl": "https://thesabbir.github.io/simple-line-icons/",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "im",
    "name": "IcoMoon Free",
    "projectUrl": "https://github.com/Keyamoon/IcoMoon-Free",
    "license": "CC BY 4.0 License",
    "licenseUrl": "https://github.com/Keyamoon/IcoMoon-Free/blob/master/License.txt"
  },
  {
    "id": "bi",
    "name": "BoxIcons",
    "projectUrl": "https://github.com/atisawd/boxicons",
    "license": "MIT",
    "licenseUrl": "https://github.com/atisawd/boxicons/blob/master/LICENSE"
  },
  {
    "id": "cg",
    "name": "css.gg",
    "projectUrl": "https://github.com/astrit/css.gg",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "vsc",
    "name": "VS Code Icons",
    "projectUrl": "https://github.com/microsoft/vscode-codicons",
    "license": "CC BY 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
  },
  {
    "id": "tb",
    "name": "Tabler Icons",
    "projectUrl": "https://github.com/tabler/tabler-icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "tfi",
    "name": "Themify Icons",
    "projectUrl": "https://github.com/lykmapipo/themify-icons",
    "license": "MIT",
    "licenseUrl": "https://github.com/thecreation/standard-icons/blob/master/modules/themify-icons/LICENSE"
  },
  {
    "id": "rx",
    "name": "Radix Icons",
    "projectUrl": "https://icons.radix-ui.com",
    "license": "MIT",
    "licenseUrl": "https://github.com/radix-ui/icons/blob/master/LICENSE"
  },
  {
    "id": "pi",
    "name": "Phosphor Icons",
    "projectUrl": "https://github.com/phosphor-icons/core",
    "license": "MIT",
    "licenseUrl": "https://github.com/phosphor-icons/core/blob/main/LICENSE"
  },
  {
    "id": "lia",
    "name": "Icons8 Line Awesome",
    "projectUrl": "https://icons8.com/line-awesome",
    "license": "MIT",
    "licenseUrl": "https://github.com/icons8/line-awesome/blob/master/LICENSE.md"
  }
]

/***/ }),

/***/ "./node_modules/react-icons/lib/index.mjs":
/*!************************************************!*\
  !*** ./node_modules/react-icons/lib/index.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultContext: () => (/* reexport safe */ _iconContext_mjs__WEBPACK_IMPORTED_MODULE_2__.DefaultContext),
/* harmony export */   GenIcon: () => (/* reexport safe */ _iconBase_mjs__WEBPACK_IMPORTED_MODULE_1__.GenIcon),
/* harmony export */   IconBase: () => (/* reexport safe */ _iconBase_mjs__WEBPACK_IMPORTED_MODULE_1__.IconBase),
/* harmony export */   IconContext: () => (/* reexport safe */ _iconContext_mjs__WEBPACK_IMPORTED_MODULE_2__.IconContext),
/* harmony export */   IconsManifest: () => (/* reexport safe */ _iconsManifest_mjs__WEBPACK_IMPORTED_MODULE_0__.IconsManifest)
/* harmony export */ });
/* harmony import */ var _iconsManifest_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iconsManifest.mjs */ "./node_modules/react-icons/lib/iconsManifest.mjs");
/* harmony import */ var _iconBase_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iconBase.mjs */ "./node_modules/react-icons/lib/iconBase.mjs");
/* harmony import */ var _iconContext_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iconContext.mjs */ "./node_modules/react-icons/lib/iconContext.mjs");




/***/ }),

/***/ "./node_modules/react-icons/sl/index.mjs":
/*!***********************************************!*\
  !*** ./node_modules/react-icons/sl/index.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SlActionRedo: () => (/* binding */ SlActionRedo),
/* harmony export */   SlActionUndo: () => (/* binding */ SlActionUndo),
/* harmony export */   SlAnchor: () => (/* binding */ SlAnchor),
/* harmony export */   SlArrowDown: () => (/* binding */ SlArrowDown),
/* harmony export */   SlArrowDownCircle: () => (/* binding */ SlArrowDownCircle),
/* harmony export */   SlArrowLeft: () => (/* binding */ SlArrowLeft),
/* harmony export */   SlArrowLeftCircle: () => (/* binding */ SlArrowLeftCircle),
/* harmony export */   SlArrowRight: () => (/* binding */ SlArrowRight),
/* harmony export */   SlArrowRightCircle: () => (/* binding */ SlArrowRightCircle),
/* harmony export */   SlArrowUp: () => (/* binding */ SlArrowUp),
/* harmony export */   SlArrowUpCircle: () => (/* binding */ SlArrowUpCircle),
/* harmony export */   SlBadge: () => (/* binding */ SlBadge),
/* harmony export */   SlBag: () => (/* binding */ SlBag),
/* harmony export */   SlBan: () => (/* binding */ SlBan),
/* harmony export */   SlBasket: () => (/* binding */ SlBasket),
/* harmony export */   SlBasketLoaded: () => (/* binding */ SlBasketLoaded),
/* harmony export */   SlBell: () => (/* binding */ SlBell),
/* harmony export */   SlBookOpen: () => (/* binding */ SlBookOpen),
/* harmony export */   SlBriefcase: () => (/* binding */ SlBriefcase),
/* harmony export */   SlBubble: () => (/* binding */ SlBubble),
/* harmony export */   SlBubbles: () => (/* binding */ SlBubbles),
/* harmony export */   SlBulb: () => (/* binding */ SlBulb),
/* harmony export */   SlCalculator: () => (/* binding */ SlCalculator),
/* harmony export */   SlCalender: () => (/* binding */ SlCalender),
/* harmony export */   SlCallEnd: () => (/* binding */ SlCallEnd),
/* harmony export */   SlCallIn: () => (/* binding */ SlCallIn),
/* harmony export */   SlCallOut: () => (/* binding */ SlCallOut),
/* harmony export */   SlCamera: () => (/* binding */ SlCamera),
/* harmony export */   SlCamrecorder: () => (/* binding */ SlCamrecorder),
/* harmony export */   SlChart: () => (/* binding */ SlChart),
/* harmony export */   SlCheck: () => (/* binding */ SlCheck),
/* harmony export */   SlChemistry: () => (/* binding */ SlChemistry),
/* harmony export */   SlClock: () => (/* binding */ SlClock),
/* harmony export */   SlClose: () => (/* binding */ SlClose),
/* harmony export */   SlCloudDownload: () => (/* binding */ SlCloudDownload),
/* harmony export */   SlCloudUpload: () => (/* binding */ SlCloudUpload),
/* harmony export */   SlCompass: () => (/* binding */ SlCompass),
/* harmony export */   SlControlEnd: () => (/* binding */ SlControlEnd),
/* harmony export */   SlControlForward: () => (/* binding */ SlControlForward),
/* harmony export */   SlControlPause: () => (/* binding */ SlControlPause),
/* harmony export */   SlControlPlay: () => (/* binding */ SlControlPlay),
/* harmony export */   SlControlRewind: () => (/* binding */ SlControlRewind),
/* harmony export */   SlControlStart: () => (/* binding */ SlControlStart),
/* harmony export */   SlCreditCard: () => (/* binding */ SlCreditCard),
/* harmony export */   SlCrop: () => (/* binding */ SlCrop),
/* harmony export */   SlCup: () => (/* binding */ SlCup),
/* harmony export */   SlCursor: () => (/* binding */ SlCursor),
/* harmony export */   SlCursorMove: () => (/* binding */ SlCursorMove),
/* harmony export */   SlDiamond: () => (/* binding */ SlDiamond),
/* harmony export */   SlDirection: () => (/* binding */ SlDirection),
/* harmony export */   SlDirections: () => (/* binding */ SlDirections),
/* harmony export */   SlDisc: () => (/* binding */ SlDisc),
/* harmony export */   SlDislike: () => (/* binding */ SlDislike),
/* harmony export */   SlDoc: () => (/* binding */ SlDoc),
/* harmony export */   SlDocs: () => (/* binding */ SlDocs),
/* harmony export */   SlDrawer: () => (/* binding */ SlDrawer),
/* harmony export */   SlDrop: () => (/* binding */ SlDrop),
/* harmony export */   SlEarphones: () => (/* binding */ SlEarphones),
/* harmony export */   SlEarphonesAlt: () => (/* binding */ SlEarphonesAlt),
/* harmony export */   SlEmotsmile: () => (/* binding */ SlEmotsmile),
/* harmony export */   SlEnergy: () => (/* binding */ SlEnergy),
/* harmony export */   SlEnvelopeOpen: () => (/* binding */ SlEnvelopeOpen),
/* harmony export */   SlEnvolope: () => (/* binding */ SlEnvolope),
/* harmony export */   SlEnvolopeLetter: () => (/* binding */ SlEnvolopeLetter),
/* harmony export */   SlEqualizer: () => (/* binding */ SlEqualizer),
/* harmony export */   SlEvent: () => (/* binding */ SlEvent),
/* harmony export */   SlExclamation: () => (/* binding */ SlExclamation),
/* harmony export */   SlEye: () => (/* binding */ SlEye),
/* harmony export */   SlEyeglass: () => (/* binding */ SlEyeglass),
/* harmony export */   SlFeed: () => (/* binding */ SlFeed),
/* harmony export */   SlFilm: () => (/* binding */ SlFilm),
/* harmony export */   SlFire: () => (/* binding */ SlFire),
/* harmony export */   SlFlag: () => (/* binding */ SlFlag),
/* harmony export */   SlFolder: () => (/* binding */ SlFolder),
/* harmony export */   SlFolderAlt: () => (/* binding */ SlFolderAlt),
/* harmony export */   SlFrame: () => (/* binding */ SlFrame),
/* harmony export */   SlGameController: () => (/* binding */ SlGameController),
/* harmony export */   SlGhost: () => (/* binding */ SlGhost),
/* harmony export */   SlGlobe: () => (/* binding */ SlGlobe),
/* harmony export */   SlGlobeAlt: () => (/* binding */ SlGlobeAlt),
/* harmony export */   SlGraduation: () => (/* binding */ SlGraduation),
/* harmony export */   SlGraph: () => (/* binding */ SlGraph),
/* harmony export */   SlGrid: () => (/* binding */ SlGrid),
/* harmony export */   SlHandbag: () => (/* binding */ SlHandbag),
/* harmony export */   SlHeart: () => (/* binding */ SlHeart),
/* harmony export */   SlHome: () => (/* binding */ SlHome),
/* harmony export */   SlHourglass: () => (/* binding */ SlHourglass),
/* harmony export */   SlInfo: () => (/* binding */ SlInfo),
/* harmony export */   SlKey: () => (/* binding */ SlKey),
/* harmony export */   SlLayers: () => (/* binding */ SlLayers),
/* harmony export */   SlLike: () => (/* binding */ SlLike),
/* harmony export */   SlLink: () => (/* binding */ SlLink),
/* harmony export */   SlList: () => (/* binding */ SlList),
/* harmony export */   SlLocationPin: () => (/* binding */ SlLocationPin),
/* harmony export */   SlLock: () => (/* binding */ SlLock),
/* harmony export */   SlLockOpen: () => (/* binding */ SlLockOpen),
/* harmony export */   SlLogin: () => (/* binding */ SlLogin),
/* harmony export */   SlLogout: () => (/* binding */ SlLogout),
/* harmony export */   SlLoop: () => (/* binding */ SlLoop),
/* harmony export */   SlMagicWand: () => (/* binding */ SlMagicWand),
/* harmony export */   SlMagnet: () => (/* binding */ SlMagnet),
/* harmony export */   SlMagnifier: () => (/* binding */ SlMagnifier),
/* harmony export */   SlMagnifierAdd: () => (/* binding */ SlMagnifierAdd),
/* harmony export */   SlMagnifierRemove: () => (/* binding */ SlMagnifierRemove),
/* harmony export */   SlMap: () => (/* binding */ SlMap),
/* harmony export */   SlMenu: () => (/* binding */ SlMenu),
/* harmony export */   SlMicrophone: () => (/* binding */ SlMicrophone),
/* harmony export */   SlMinus: () => (/* binding */ SlMinus),
/* harmony export */   SlMouse: () => (/* binding */ SlMouse),
/* harmony export */   SlMusicTone: () => (/* binding */ SlMusicTone),
/* harmony export */   SlMusicToneAlt: () => (/* binding */ SlMusicToneAlt),
/* harmony export */   SlMustache: () => (/* binding */ SlMustache),
/* harmony export */   SlNote: () => (/* binding */ SlNote),
/* harmony export */   SlNotebook: () => (/* binding */ SlNotebook),
/* harmony export */   SlOptions: () => (/* binding */ SlOptions),
/* harmony export */   SlOptionsVertical: () => (/* binding */ SlOptionsVertical),
/* harmony export */   SlOrganization: () => (/* binding */ SlOrganization),
/* harmony export */   SlPaperClip: () => (/* binding */ SlPaperClip),
/* harmony export */   SlPaperPlane: () => (/* binding */ SlPaperPlane),
/* harmony export */   SlPaypal: () => (/* binding */ SlPaypal),
/* harmony export */   SlPencil: () => (/* binding */ SlPencil),
/* harmony export */   SlPeople: () => (/* binding */ SlPeople),
/* harmony export */   SlPhone: () => (/* binding */ SlPhone),
/* harmony export */   SlPicture: () => (/* binding */ SlPicture),
/* harmony export */   SlPieChart: () => (/* binding */ SlPieChart),
/* harmony export */   SlPin: () => (/* binding */ SlPin),
/* harmony export */   SlPlane: () => (/* binding */ SlPlane),
/* harmony export */   SlPlaylist: () => (/* binding */ SlPlaylist),
/* harmony export */   SlPlus: () => (/* binding */ SlPlus),
/* harmony export */   SlPower: () => (/* binding */ SlPower),
/* harmony export */   SlPresent: () => (/* binding */ SlPresent),
/* harmony export */   SlPrinter: () => (/* binding */ SlPrinter),
/* harmony export */   SlPuzzle: () => (/* binding */ SlPuzzle),
/* harmony export */   SlQuestion: () => (/* binding */ SlQuestion),
/* harmony export */   SlRefresh: () => (/* binding */ SlRefresh),
/* harmony export */   SlReload: () => (/* binding */ SlReload),
/* harmony export */   SlRocket: () => (/* binding */ SlRocket),
/* harmony export */   SlScreenDesktop: () => (/* binding */ SlScreenDesktop),
/* harmony export */   SlScreenSmartphone: () => (/* binding */ SlScreenSmartphone),
/* harmony export */   SlScreenTablet: () => (/* binding */ SlScreenTablet),
/* harmony export */   SlSettings: () => (/* binding */ SlSettings),
/* harmony export */   SlShare: () => (/* binding */ SlShare),
/* harmony export */   SlShareAlt: () => (/* binding */ SlShareAlt),
/* harmony export */   SlShield: () => (/* binding */ SlShield),
/* harmony export */   SlShuffle: () => (/* binding */ SlShuffle),
/* harmony export */   SlSizeActual: () => (/* binding */ SlSizeActual),
/* harmony export */   SlSizeFullscreen: () => (/* binding */ SlSizeFullscreen),
/* harmony export */   SlSocialBehance: () => (/* binding */ SlSocialBehance),
/* harmony export */   SlSocialDribbble: () => (/* binding */ SlSocialDribbble),
/* harmony export */   SlSocialDropbox: () => (/* binding */ SlSocialDropbox),
/* harmony export */   SlSocialFacebook: () => (/* binding */ SlSocialFacebook),
/* harmony export */   SlSocialFoursqare: () => (/* binding */ SlSocialFoursqare),
/* harmony export */   SlSocialGithub: () => (/* binding */ SlSocialGithub),
/* harmony export */   SlSocialGoogle: () => (/* binding */ SlSocialGoogle),
/* harmony export */   SlSocialInstagram: () => (/* binding */ SlSocialInstagram),
/* harmony export */   SlSocialLinkedin: () => (/* binding */ SlSocialLinkedin),
/* harmony export */   SlSocialPintarest: () => (/* binding */ SlSocialPintarest),
/* harmony export */   SlSocialReddit: () => (/* binding */ SlSocialReddit),
/* harmony export */   SlSocialSkype: () => (/* binding */ SlSocialSkype),
/* harmony export */   SlSocialSoundcloud: () => (/* binding */ SlSocialSoundcloud),
/* harmony export */   SlSocialSpotify: () => (/* binding */ SlSocialSpotify),
/* harmony export */   SlSocialSteam: () => (/* binding */ SlSocialSteam),
/* harmony export */   SlSocialStumbleupon: () => (/* binding */ SlSocialStumbleupon),
/* harmony export */   SlSocialTumblr: () => (/* binding */ SlSocialTumblr),
/* harmony export */   SlSocialTwitter: () => (/* binding */ SlSocialTwitter),
/* harmony export */   SlSocialVkontakte: () => (/* binding */ SlSocialVkontakte),
/* harmony export */   SlSocialYoutube: () => (/* binding */ SlSocialYoutube),
/* harmony export */   SlSpeech: () => (/* binding */ SlSpeech),
/* harmony export */   SlSpeedometer: () => (/* binding */ SlSpeedometer),
/* harmony export */   SlStar: () => (/* binding */ SlStar),
/* harmony export */   SlSupport: () => (/* binding */ SlSupport),
/* harmony export */   SlSymbleFemale: () => (/* binding */ SlSymbleFemale),
/* harmony export */   SlSymbolMale: () => (/* binding */ SlSymbolMale),
/* harmony export */   SlTag: () => (/* binding */ SlTag),
/* harmony export */   SlTarget: () => (/* binding */ SlTarget),
/* harmony export */   SlTrash: () => (/* binding */ SlTrash),
/* harmony export */   SlTrophy: () => (/* binding */ SlTrophy),
/* harmony export */   SlUmbrella: () => (/* binding */ SlUmbrella),
/* harmony export */   SlUser: () => (/* binding */ SlUser),
/* harmony export */   SlUserFemale: () => (/* binding */ SlUserFemale),
/* harmony export */   SlUserFollow: () => (/* binding */ SlUserFollow),
/* harmony export */   SlUserFollowing: () => (/* binding */ SlUserFollowing),
/* harmony export */   SlUserUnfollow: () => (/* binding */ SlUserUnfollow),
/* harmony export */   SlVector: () => (/* binding */ SlVector),
/* harmony export */   SlVolume1: () => (/* binding */ SlVolume1),
/* harmony export */   SlVolume2: () => (/* binding */ SlVolume2),
/* harmony export */   SlVolumeOff: () => (/* binding */ SlVolumeOff),
/* harmony export */   SlWallet: () => (/* binding */ SlWallet),
/* harmony export */   SlWrench: () => (/* binding */ SlWrench)
/* harmony export */ });
/* harmony import */ var _lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/index.mjs */ "./node_modules/react-icons/lib/index.mjs");
// THIS FILE IS AUTO GENERATED

function SlActionRedo (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M33.935 942.336c.336 0 .72 0 1.088-.031 16.193-.529 26.4-13.088 27.777-29.216C63.888 901.217 95.775 614 544.048 614.305l1.008 183.664c0 12.368 7.12 23.664 18.335 28.944 11.088 5.312 24.432 3.68 33.968-4.224l414.976-343.776a31.864 31.864 0 0 0 11.681-24.784c-.032-9.6-4.336-18.687-11.776-24.752L597.28 88.817c-9.569-7.807-22.785-9.311-33.937-4.095-11.152 5.311-18.288 16.56-18.288 28.91l-1.008 179.633c-185.952 5.887-329.968 65.712-423.328 174.96C-31.217 646 2.69 904.385 4.287 915.137c2.368 15.68 13.872 27.199 29.649 27.199zm543.121-392.527h-.063c-320.208.192-442.591 108.32-512.464 203.824 10.224-76.496 40.064-168.72 105.008-244.031 86.336-100.096 225.44-152.848 407.536-152.848 17.68 0 32-14.32 32-32V180.978l332.433 273.344-332.448 275.904v-148.4a31.953 31.953 0 0 0-9.409-22.656 31.96 31.96 0 0 0-22.592-9.36z"},"child":[]}]})(props);
};
function SlActionUndo (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M990.064 942.336c-.336 0-.72 0-1.088-.031-16.192-.529-26.4-13.088-27.776-29.216-1.088-11.872-33.968-299.088-482.256-298.784v183.664c0 12.368-7.12 23.664-18.336 28.944-11.088 5.312-24.432 3.68-33.968-4.224L11.664 478.913a31.864 31.864 0 0 1-11.68-24.784c.032-9.6 4.335-18.687 11.776-24.752l414.96-340.56c9.568-7.807 22.784-9.311 33.936-4.095 11.153 5.311 18.288 16.56 18.288 28.91v179.633c185.968 5.904 330.992 65.712 424.336 174.976 151.936 177.776 118.031 436.16 116.432 446.912-2.368 15.664-13.872 27.183-29.648 27.183zm-543.12-392.527l.063-.001C767.23 550 889.599 658.128 959.47 753.617c-10.224-76.496-40.064-168.72-105.008-244.031-86.336-100.096-225.44-152.848-407.535-152.848-17.68 0-32-14.32-32-32V180.962L82.496 454.322l332.432 275.904v-148.4a31.953 31.953 0 0 1 9.408-22.656c6-5.985 14.128-9.36 22.608-9.36z"},"child":[]}]})(props);
};
function SlAnchor (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M1021.02 731.408L938.734 580.11c-.128-.208-.096-.4-.224-.593l-5.872-10.143c-3.28-5.617-8.432-9.233-14.192-10.593-5.696-1.408-11.985-.544-17.408 2.975l-9.84 6.336c-.193.113-.305.288-.497.416l-145.6 98.32c-10.88 7.008-14.416 21.68-7.936 32.913l6.544 7.2c6.48 11.184 21.265 11.647 32.161 4.64l87.04-59.184c-20.608 166-154.736 293.392-318.96 308.176v-641.6h128.048c17.664 0 32-14.336 32-32s-14.336-32-32-32h-129.44c-.24-.832-.448-1.664-.768-2.464 57.103-13.28 99.695-64.368 99.695-125.536 0-71.248-57.744-129.008-129.008-129.008-71.248 0-128.992 57.744-128.992 129.008 0 60.817 42.112 111.664 98.736 125.28-.336.88-.576 1.808-.848 2.72H351.997c-17.665 0-32 14.336-32 32s14.335 32 32 32H479.98v641.584c-164.176-14.784-298.16-142.128-318.816-308.112l86.944 59.12c10.88 7.008 25.664 6.544 32.144-4.64l6.56-7.2c6.48-11.216 2.944-25.903-7.951-32.911l-145.6-98.32c-.193-.144-.305-.32-.48-.415l-9.857-6.336a22.16 22.16 0 0 0-17.408-2.976c-5.744 1.36-10.912 4.992-14.193 10.592l-5.872 10.16c-.112.193-.096.385-.209.593L2.971 731.408c-6.496 11.168-2.945 25.872 7.952 32.896l9.12 3.424c10.88 6.992 24.256.64 30.752-10.543l47.904-88.975c29.376 204.72 205.104 357.823 413.28 357.823 208.063 0 383.92-153.088 413.36-357.712l47.84 88.864c6.496 11.184 19.888 17.535 30.768 10.543l9.12-3.424c10.896-7.024 14.448-21.728 7.952-32.896zM447.506 126.975c0-35.84 29.153-65.01 64.993-65.01 35.84 0 65.008 29.153 65.008 65.009s-29.152 65.009-65.009 65.009c-35.824-.016-64.992-29.168-64.992-65.008z"},"child":[]}]})(props);
};
function SlArrowDownCircle (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M0 512c0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0 229.232 0 0 229.232 0 512zm961.008 0c0 247.024-201.969 448-449.009 448s-448-200.976-448-448 200.976-448 448-448 449.009 200.976 449.009 448zM479.663 287.68v360.448l-115.76-115.76c-12.496-12.496-32.752-12.496-45.248 0s-12.496 32.752 0 45.248l194.016 189.008 194-189.008c6.256-6.256 9.376-14.432 9.376-22.624s-3.12-16.368-9.376-22.624c-12.496-12.496-32.752-12.496-45.248 0l-117.744 117.76V287.68c0-17.68-14.336-32-32-32s-32.016 14.32-32.016 32z"},"child":[]}]})(props);
};
function SlArrowDown (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M8.2 275.4c0-8.6 3.4-17.401 10-24.001 13.2-13.2 34.8-13.2 48 0l451.8 451.8 445.2-445.2c13.2-13.2 34.8-13.2 48 0s13.2 34.8 0 48L542 775.399c-13.2 13.2-34.8 13.2-48 0l-475.8-475.8c-6.8-6.8-10-15.4-10-24.199z"},"child":[]}]})(props);
};
function SlArrowLeftCircle (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M512 0C229.216 0 0 229.232 0 512c0 282.784 229.216 512 512 512 282.768 0 512-229.216 512-512C1024 229.232 794.768 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01zm224.32-481.344H375.856l115.76-115.76c12.496-12.496 12.496-32.752 0-45.248s-32.752-12.496-45.248 0l-189.008 194 189.008 194c6.256 6.256 14.432 9.376 22.624 9.376s16.368-3.12 22.624-9.376c12.496-12.496 12.496-32.752 0-45.248l-117.76-117.744H736.32c17.68 0 32-14.336 32-32s-14.32-32-32-32z"},"child":[]}]})(props);
};
function SlArrowLeft (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M752.145 0c8.685 0 17.572 3.434 24.237 10.099 13.33 13.33 13.33 35.143 0 48.473L320.126 515.03l449.591 449.591c13.33 13.33 13.33 35.144 0 48.474-13.33 13.33-35.142 13.33-48.472 0L247.418 539.268c-13.33-13.33-13.33-35.144 0-48.474L727.91 10.1C734.575 3.435 743.46.002 752.146.002z"},"child":[]}]})(props);
};
function SlArrowRightCircle (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01zm20.368-642.368c-12.496 12.496-12.496 32.752 0 45.248l115.76 115.76H287.68c-17.68 0-32 14.336-32 32s14.32 32 32 32h362.464l-117.76 117.744c-12.496 12.496-12.496 32.752 0 45.248 6.256 6.256 14.432 9.376 22.624 9.376s16.368-3.12 22.624-9.376l189.008-194-189.008-194c-12.512-12.496-32.752-12.496-45.264 0z"},"child":[]}]})(props);
};
function SlArrowRight (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M271.653 1023.192c-8.685 0-17.573-3.432-24.238-10.097-13.33-13.33-13.33-35.144 0-48.474L703.67 508.163 254.08 58.573c-13.33-13.331-13.33-35.145 0-48.475 13.33-13.33 35.143-13.33 48.473 0L776.38 483.925c13.33 13.33 13.33 35.143 0 48.473l-480.492 480.694c-6.665 6.665-15.551 10.099-24.236 10.099z"},"child":[]}]})(props);
};
function SlArrowUpCircle (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M1024 512C1024 229.216 794.768 0 512 0 229.216 0 0 229.216 0 512c0 282.768 229.216 512 512 512 282.768 0 512-229.232 512-512zm-960.992 0C63.008 264.976 264.976 64 512 64c247.024 0 448 200.976 448 448S759.024 960 512 960 63.008 759.024 63.008 512zm481.328 224.32V375.856l115.76 115.76c12.496 12.496 32.752 12.496 45.248 0s12.496-32.752 0-45.248l-194-189.008-194 189.008c-6.256 6.256-9.376 14.432-9.376 22.624s3.12 16.368 9.376 22.624c12.496 12.496 32.752 12.496 45.248 0l117.744-117.76V736.32c0 17.68 14.336 32 32 32s32-14.32 32-32z"},"child":[]}]})(props);
};
function SlArrowUp (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M8.2 751.4c0 8.6 3.4 17.401 10 24.001 13.2 13.2 34.8 13.2 48 0l451.8-451.8 445.2 445.2c13.2 13.2 34.8 13.2 48 0s13.2-34.8 0-48L542 251.401c-13.2-13.2-34.8-13.2-48 0l-475.8 475.8c-6.8 6.8-10 15.4-10 24.2z"},"child":[]}]})(props);
};
function SlBadge (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M1021.06 839.968L833.798 493.664c19.104-43.36 29.792-91.28 29.792-141.696C863.59 157.664 706.07.16 511.782.16c-194.336 0-351.84 157.52-351.84 351.808 0 51.632 11.216 100.624 31.184 144.784L3.03 839.808c-6.065 11.024-5.057 24.624 2.527 34.688 7.6 10.033 20.432 14.752 32.687 11.873l160.624-36.848 54.976 153.12c4.288 11.904 15.152 20.16 27.744 21.088.817.064 1.6.096 2.368.096a32.002 32.002 0 0 0 28.192-16.88L475.844 701.97a355.152 355.152 0 0 0 35.92 1.808c11.12 0 22.095-.576 32.943-1.6l167.248 305.008a31.984 31.984 0 0 0 30.56 16.527c12.56-1.008 23.376-9.248 27.631-21.088l54.976-153.12 160.624 36.848c12.32 2.975 25.024-1.809 32.624-11.809 7.632-9.984 8.656-23.52 2.688-34.576zm-731.282 73.376L249.52 801.183c-5.504-15.248-21.471-24.128-37.28-20.368l-118.8 27.248L228.85 561.087c44.592 60.24 107.952 105.68 181.44 127.793zm-65.553-561.377c0-158.544 129.009-287.536 287.568-287.536 158.544 0 287.536 128.992 287.536 287.536S670.337 639.535 511.793 639.535c-158.576 0-287.568-129.024-287.568-287.568zm587.52 428.847c-15.872-3.744-31.776 5.12-37.28 20.367l-40.529 112.976-123.152-224.56c75.44-22.096 140.337-68.735 185.505-130.735L931.137 808.19z"},"child":[]}]})(props);
};
function SlBag (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M864 158.704H672.815V97.328c0-52.944-43.056-96-96-96H449.183c-52.944 0-96 43.056-96 96v61.376H159.999c-35.344 0-64 28.656-64 64v735.968c0 35.344 28.656 64 64 64h704c35.344 0 64-28.656 64-64V222.704c0-35.344-28.656-64-64-64H864zM417.184 97.328c0-17.664 14.336-32 32-32h127.632c17.664 0 32 14.336 32 32v61.376H417.184V97.328zM864 958.672H160V222.704h193.184v65.84s-.848 31.967 31.809 31.967c36 0 32.192-31.967 32.192-31.967v-65.84h191.632v65.84s-2.128 32.128 31.872 32.128c32 0 32.128-32.128 32.128-32.128v-65.84h191.184v735.968z"},"child":[]}]})(props);
};
function SlBan (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0zM64 512c0-112.272 41.615-214.959 110.096-293.663l631.856 631.856C727.216 919.073 624.416 961.008 512 961.008c-247.024 0-448-201.984-448-449.009V512zm787.023 292.786L219.408 173.17C297.984 105.235 400.24 64.002 512 64.002c247.024 0 448 200.976 448 448 0 111.664-41.152 214.032-108.977 292.784z"},"child":[]}]})(props);
};
function SlBasketLoaded (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M1015.66 284a31.822 31.822 0 0 0-25.999-13.502h-99.744L684.78 95.666c-24.976-24.976-65.52-25.008-90.495 0L392.638 270.498h-82.096l-51.408-177.28c-20.16-69.808-68.065-77.344-87.713-77.344H34.333c-17.568 0-31.776 14.224-31.776 31.776S16.78 79.425 34.332 79.425h137.056c4.336 0 17.568 0 26.593 31.184l176.848 649.936c3.84 13.712 16.336 23.183 30.592 23.183h431.968c13.408 0 25.376-8.4 29.904-21.024l152.256-449.68c3.504-9.744 2.048-20.592-3.888-29.024zM639.537 140.93l152.032 129.584H487.457zm175.488 579.263H429.538L328.386 334.065h616.096zm-63.023 127.936c-44.192 0-80 35.808-80 80s35.808 80 80 80 80-35.808 80-80-35.808-80-80-80zm-288 0c-44.192 0-80 35.808-80 80s35.808 80 80 80 80-35.808 80-80-35.808-80-80-80z"},"child":[]}]})(props);
};
function SlBasket (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M1015.66 284a31.82 31.82 0 0 0-25.998-13.502H310.526l-51.408-177.28c-20.16-69.808-68.065-77.344-87.713-77.344H34.333c-17.569 0-31.777 14.224-31.777 31.776S16.78 79.425 34.332 79.425h137.056c4.336 0 17.568 0 26.593 31.184l176.848 649.936c3.84 13.712 16.336 23.183 30.591 23.183h431.968c13.409 0 25.376-8.4 29.905-21.024l152.256-449.68c3.504-9.744 2.048-20.592-3.888-29.024zM815.026 720.194H429.539L328.387 334.066h616.096zM752.003 848.13c-44.192 0-80 35.808-80 80s35.808 80 80 80 80-35.808 80-80-35.808-80-80-80zm-288 0c-44.192 0-80 35.808-80 80s35.808 80 80 80 80-35.808 80-80-35.808-80-80-80z"},"child":[]}]})(props);
};
function SlBell (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M905.616 711.888c-37.344-45.424-88.48-109.742-88.48-175.358V327.57c0-180.016-134.64-326.479-306.688-326.479-172.08 0-305.664 146.464-305.664 326.479v208.96c0 64.512-55.489 125.487-90.672 172.799-31.649 42.512-56.624 76.096-39.76 109.664 14.832 29.536 51.968 33.328 82.655 33.328h183.36c.048 94.208 76.448 170.576 170.672 170.576 94.24 0 170.641-76.368 170.688-170.576h187.664c19.52 0 65.152 0 80.863-33.2 15.857-33.616-9.52-64.513-44.64-107.232zm-394.609 243.97c-57.216 0-103.632-46.352-103.712-103.536h207.424c-.08 57.184-46.464 103.535-103.712 103.535zm358.384-171.665H157.006c-4.896 0-8.991-.16-12.367-.368 6.592-10.208 16.271-23.248 24.143-33.857 38.993-52.4 104.145-126.368 104.145-213.424v-208.96c0-142.464 103.04-258.352 237.521-258.352S749.01 185.12 749.01 327.584v208.96c0 90.016 60.08 165.248 103.968 218.608 7.392 8.993 16.24 19.76 23.12 28.96-2.033.048-4.273.08-6.705.08z"},"child":[]}]})(props);
};
function SlBookOpen (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M952.08 1.552L529.039 116.144c-10.752 2.88-34.096 2.848-44.815-.16L72.08 1.776C35.295-8.352-.336 18.176-.336 56.048V834.16c0 32.096 24.335 62.785 55.311 71.409l412.16 114.224c11.025 3.055 25.217 4.751 39.937 4.751 10.095 0 25.007-.784 38.72-4.528l423.023-114.592c31.056-8.4 55.504-39.024 55.504-71.248V56.048c.016-37.84-35.616-64.464-72.24-54.496zM479.999 956.943L71.071 843.887c-3.088-.847-7.408-6.496-7.408-9.712V66.143L467.135 177.68c3.904 1.088 8.288 1.936 12.864 2.656v776.608zm480.336-122.767c0 3.152-5.184 8.655-8.256 9.503L544 954.207v-775.92c.592-.144 1.2-.224 1.792-.384L960.32 65.775v768.4h.016zM641.999 366.303c2.88 0 5.81-.367 8.69-1.184l223.935-63.024c17.025-4.816 26.945-22.465 22.16-39.473s-22.56-26.88-39.472-22.16l-223.936 63.025c-17.024 4.816-26.944 22.464-22.16 39.472 3.968 14.128 16.815 23.344 30.783 23.344zm.002 192.001c2.88 0 5.81-.368 8.69-1.185l223.935-63.024c17.025-4.816 26.945-22.465 22.16-39.473-4.783-17.008-22.56-26.88-39.472-22.16l-223.936 63.025c-17.024 4.816-26.944 22.464-22.16 39.457 3.968 14.127 16.815 23.36 30.783 23.36zm.002 192c2.88 0 5.81-.368 8.69-1.185l223.935-63.024c17.025-4.816 26.945-22.465 22.16-39.473s-22.56-26.88-39.472-22.16L633.38 687.487c-17.024 4.816-26.944 22.464-22.16 39.472 3.968 14.113 16.815 23.345 30.783 23.345zM394.629 303.487l-223.934-63.025c-16.912-4.72-34.688 5.152-39.473 22.16s5.12 34.656 22.16 39.473l223.937 63.024a31.827 31.827 0 0 0 8.687 1.184c13.968 0 26.815-9.215 30.783-23.343 4.784-16.993-5.12-34.657-22.16-39.473zm.002 191.999l-223.934-63.025c-16.912-4.72-34.689 5.152-39.473 22.16s5.12 34.656 22.16 39.473l223.936 63.024a31.827 31.827 0 0 0 8.688 1.184c13.968 0 26.815-9.215 30.783-23.343 4.784-16.993-5.12-34.657-22.16-39.473zm.002 191.999L170.699 624.46c-16.912-4.72-34.689 5.152-39.473 22.16s5.12 34.656 22.16 39.473l223.936 63.024a31.827 31.827 0 0 0 8.688 1.184c13.968 0 26.815-9.215 30.783-23.343 4.784-17.008-5.12-34.657-22.16-39.473z"},"child":[]}]})(props);
};
function SlBriefcase (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M960.016 191.472H704.415v-62c0-52.944-43.056-96-96-96H415.983c-52.944 0-96 43.056-96 96v62H64.015c-35.184 0-64 28.816-64 64v224.256h-.032v64h.032v382.816c0 35.184 28.816 64 64 64h896c35.184 0 64-28.816 64-64V255.472c0-35.184-28.816-64-64-64h.001zm-576.033-62c0-17.664 14.336-32 32-32h192.432c17.664 0 32 14.336 32 32v62H383.983zm-319.967 126h896v224.256H607.648v-32.752c0-35.28-28.72-64-64-64h-63.745c-35.28 0-64 28.72-64 64v32.752H64.017V255.472zm479.679 352.656h-63.809V446.976h63.745zm-479.68 318.4V543.712h351.872v64.4c0 35.281 28.72 64 64 64h63.744c35.28 0 64-28.719 64-64v-64.4h352.368v382.816H64.015z"},"child":[]}]})(props);
};
function SlBubble (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M512 128c247.024 0 448 143.553 448 320.001 0 176.432-200.976 320-448 320l-26.512.096c-17.584 0-29.088-.464-47.072-3.153l-35.856-5.12-23.008 27.84c-10.576 12.784-64.544 57.12-124.112 85.664 12.112-32.032 21.04-67.008 21.84-101.6l.32-1.904V725.2l-34.864-17.808C129.136 649.28 64 554.752 64 448c0-176.448 200.976-320 448-320zm0-63.999C229.2 64.001 0 235.936 0 448c0 132.064 78.256 247.152 213.584 316.336 0 .816-.256 1.408-.256 2.32 0 57.376-32.16 120.464-51.008 152.944h.048C160.88 923.09 160 926.913 160 931.01c0 16.08 12.96 28.992 29.008 28.992 2.416 0 6.256-.496 7.664-.496.336 0 .528 0 .496.095 100-16.336 209.952-104.688 231.824-131.344 22.48 3.344 37.664 3.84 56.48 3.84 7.936 0 16.496-.096 26.528-.096 282.752 0 512-171.904 512-384 0-212.064-229.248-384-512-383.999z"},"child":[]}]})(props);
};
function SlBubbles (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M424.816 679.344c230.944 0 409.902-131.903 407.15-327.631 0-173.184-183.216-311.632-414.16-311.632C186.83 40.081-.353 178.529-.353 351.713c0 107.872 52.912 222.88 163.408 279.376 0 .656-.192 1.152-.192 1.872 0 46.88-39.025 111.152-54.4 137.664h.064c-1.216 2.88-1.952 6-1.952 9.344 0 13.12 10.576 23.664 23.696 23.664 1.935 0 5.088-.4 6.223-.4.32 0 .433 0 .4.095 81.665-13.344 202.257-105.248 220.129-127.024 18.336 2.72 30.72 3.152 46.08 3.152 6.528-.016 13.473-.112 21.713-.112zm-94.129-68.879l-40.977 34.032c-9.504 10.976-50.8 45.44-86.351 67.808 21.648-61.68 20.704-81.216 20.704-81.216l3.008-39.152-34.88-17.808c-88.672-45.344-128.528-139.744-128.528-222.4 0-137.664 158.864-247.632 354.16-247.632 195.28 0 350.16 109.968 350.16 247.632-.609 152.608-145.872 264.624-341.152 264.624 0 0-29.808 1.152-60.4-3.376zm693.643-.272c0-86.736-33.887-152.881-118.446-202.513-2.064 23.072-8.64 47.824-15.793 69.568 54.656 37.777 70.256 76.56 70.256 132.944 0 69.025-32.16 119.09-106.912 157.345l-31.84 15.808s3.312 82 8.224 102.752c-62.448-45.776-83.905-84-83.905-84l-33.664 5.184c-13.311 1.935-49.311 1.967-49.311 1.967-86.944 0-151.376-20.72-206.336-63.744 14.928-.912-89.185-.88-91.505 1.153 63.568 77.631 167.473 126.592 297.84 126.592 7.089 0 13.089.064 18.72.064 13.28 0 24-.368 39.84-2.688 15.489 18.784 102.225 101.504 172.816 113.008-.032-.065.064-.065.368-.065.944 0 3.68.336 5.344.336 11.344 0 20.496-9.12 20.496-20.464 0-2.88-.656-5.6-1.68-8.063h.064c-13.28-22.88-34.128-89.744-34.128-130.256 0-.624-.192-1.056-.192-1.632 95.504-48.832 139.744-120.08 139.744-213.296z"},"child":[]}]})(props);
};
function SlBulb (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M511.984 0c-198.032 0-353.12 161.104-353.12 359.136 0 149.2 73.28 220.256 131.185 272.128 37.28 33.424 62.368 53.552 62.368 78.352v54.255c0 1.392.193 2.752.368 4.128h-.72v92.624c.016 97.712 63.2 163.376 161.072 163.376 94.464 0 158.944-65.664 158.944-163.376V768h-.928c.176-1.376.416-2.736.416-4.128v-54.255c0-37.76 28.032-60.592 70.528-97.696 57.504-50.208 123.023-112.688 123.023-252.784C865.136 161.104 710.016 0 511.983 0zm-1.215 960c-59.904 0-94.689-37.152-94.689-99.376l-.463-42.672C438.64 825.824 470 832 512 832c41.424 0 72.848-6.624 96.08-14.768v43.392c0 63.152-35.247 99.376-97.312 99.376zm189.248-396.288c-43.472 37.968-92.433 77.216-92.433 145.904v40.432c-15.183 8.48-43.183 18.56-96.127 18.56-55.569 0-81.92-9.856-95.024-17.473V709.6c0-54.608-42.688-89.297-83.68-126.017-54.32-48.672-109.873-103.84-109.873-224.464-.015-162.72 126.385-295.12 289.104-295.12 162.752 0 289.152 132.4 289.152 295.137 0 111.024-48.463 158.576-101.12 204.576z"},"child":[]}]})(props);
};
function SlCalculator (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M960-.096H64c-35.184 0-64 28.816-64 64v896.192c0 35.184 28.816 64 64 64h896c35.184 0 64-28.816 64-64V63.904c0-35.184-28.816-64-64-64zm0 960.193H64V63.905h896v896.192zM224 352.305h64v64c0 17.664 14.336 32 32 32s32-14.336 32-32v-64h64c17.664 0 32-14.336 32-32s-14.336-32-32-32h-64v-64c0-17.664-14.336-32-32-32s-32 14.336-32 32v64h-64c-17.664 0-32 14.336-32 32s14.336 32 32 32zm209.136 238.847c-12.496-12.496-32.752-12.497-45.248-.001L320 659.023l-67.887-67.872c-12.496-12.496-32.752-12.496-45.264 0-12.496 12.496-12.496 32.769 0 45.265l67.872 67.872-67.872 67.872c-12.496 12.496-12.496 32.768 0 45.264s32.752 12.497 45.264 0L320 749.568l67.888 67.872c12.496 12.496 32.752 12.496 45.248 0s12.496-32.768 0-45.264l-67.872-67.873 67.872-67.872c12.496-12.511 12.496-32.767 0-45.279zM608 352.304h192c17.664 0 32-14.336 32-32s-14.336-32-32-32H608c-17.664 0-32 14.336-32 32s14.336 32 32 32zm0 320h192c17.664 0 32-14.336 32-32s-14.336-32-32-32H608c-17.664 0-32 14.336-32 32s14.336 32 32 32zm0 128h192c17.664 0 32-14.336 32-32s-14.336-32-32-32H608c-17.664 0-32 14.336-32 32s14.336 32 32 32z"},"child":[]}]})(props);
};
function SlCalender (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M960 95.888l-256.224.001V32.113c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76h-256v-63.76c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76H64c-35.344 0-64 28.656-64 64v800c0 35.343 28.656 64 64 64h896c35.344 0 64-28.657 64-64v-800c0-35.329-28.656-63.985-64-63.985zm0 863.985H64v-800h255.776v32.24c0 17.679 14.32 32 32 32s32-14.321 32-32v-32.224h256v32.24c0 17.68 14.32 32 32 32s32-14.32 32-32v-32.24H960v799.984zM736 511.888h64c17.664 0 32-14.336 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32zm0 255.984h64c17.664 0 32-14.32 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.696 14.336 32 32 32zm-192-128h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32zm0-255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32zm-256 0h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32zm0 255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32z"},"child":[]}]})(props);
};
function SlCallEnd (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M961.696 199.552c0 1.056-.097 1.935-.225 2.623-26.16 18-172.433 114.624-199.776 132.16-2.88.065-10.191-.911-20.623-6.4-11.12-5.84-43.536-24.032-88.88-49.904l-35.28-20.128-33.248 23.344c-24.72 17.408-78.464 58.817-160.288 140.624-82.176 82.16-123.456 135.712-140.768 160.336l-23.344 33.248 20.16 35.28c19.537 34.193 42.945 75.504 50 88.945 5.68 10.784 6.129 18.16 6.129 20.16 0 .32 0 .593-.033.816-15.36 24.497-114.593 173.937-132.673 200.32-2.56.432-8.128.032-15.088-4.816-56.256-40.608-114.96-98.24-123.376-120.8 5.632-120.032 111.12-288.464 297.568-474.88 186.464-186.4 354.72-291.872 474.352-297.44 22.624 8.096 80.624 66.815 120.912 122.527 2.832 4.128 4.48 9.232 4.481 13.985zm62.004-.001c0-16.944-5.121-34.914-15.969-50.498-1.055-1.504-108.256-152.096-170.336-150.096-174.432 5.552-379.439 175.056-520.703 316.271C175.46 456.444 5.892 661.452.307 836.572v1.44c0 61.312 148.672 169.088 150.144 170.128 40.4 28.289 84.881 17.968 102.945-7.776 11.008-15.664 124.976-187.056 137.808-208.063 5.6-9.152 8.336-20.32 8.336-32.464 0-15.664-4.576-33.008-13.473-49.935-8.687-16.496-37.119-66.464-51.086-90.912 15.12-21.537 53.872-72.128 133.664-151.84 79.183-79.216 130.19-118.32 151.84-133.535 24.431 13.935 74.399 42.335 90.847 50.975 31.008 16.368 61.968 18.225 82.848 4.945 19.68-12.464 189.808-125.968 206-137.68 15.28-11.056 23.52-30.848 23.52-52.304z"},"child":[]}]})(props);
};
function SlCallIn (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M1000.35 771.616c-15.664-11.008-187.059-124.974-208.066-137.806-9.152-5.6-20.32-8.336-32.464-8.336-15.664 0-33.008 4.56-49.935 13.472-16.497 8.688-66.464 37.12-90.913 51.088-21.536-15.12-72.127-53.872-151.84-133.664-79.215-79.184-118.319-130.191-133.535-151.84 13.936-24.432 42.336-74.4 50.976-90.848 16.368-31.008 18.225-61.968 4.944-82.848-12.463-19.68-125.968-191.808-137.68-208C240.813 7.554 221.021-.702 199.55-.702c-16.944 0-34.912 5.12-50.496 15.968C147.55 16.338-3.043 125.522-1.043 187.618 4.51 362.05 174.013 567.042 315.228 708.306s346.224 310.815 521.344 316.399h1.44c61.312 0 169.089-148.688 170.129-150.16 28.272-40.4 17.968-84.88-7.791-102.929zm-44.209 65.651c-40.592 56.224-98.225 114.945-120.784 123.346-120.032-5.632-288.464-111.12-474.88-297.568-186.4-186.464-291.872-354.704-297.44-474.336 8.096-22.624 66.815-80.624 122.527-120.912 4.128-2.848 9.216-4.496 13.968-4.496 1.055 0 1.935.096 2.624.224 18 26.16 114.624 172.433 132.16 199.776.064 2.88-.911 10.19-6.4 20.623-5.84 11.12-24.032 43.536-49.904 88.88l-20.128 35.28 23.344 33.248c17.408 24.72 58.816 78.464 140.624 160.288 82.16 82.192 135.712 123.473 160.336 140.784l33.248 23.344 35.28-20.16c34.193-19.537 75.504-42.945 88.945-50 10.784-5.68 18.16-6.129 20.16-6.129.32 0 .593 0 .816.033 24.496 15.376 173.937 114.592 200.32 132.688.432 2.56.031 8.128-4.816 15.088zm-312.305-460.75c4.128 4.176 9.938 6.722 16.386 6.546l11.712-.273c.223 0 .383-.095.64-.11l229.503 1.007c12.912-.304 23.616-10.992 23.92-23.937l.016-16.416c-1.952-15.232-13.937-24.16-26.865-23.872l-151.504-.4 261.952-261.6c12.497-12.496 12.497-32.769 0-45.265-12.496-12.48-32.752-12.48-45.248 0l-262.672 262.32.88-154.833c.288-12.927-9.967-24.191-22.895-23.887l-16.416.015c-12.96.32-23.664 8.017-23.937 20.945l-.656 231.008c0 .223.88.383.88.607l-1.28 11.712c-.128 6.496 1.391 12.272 5.584 16.433z"},"child":[]}]})(props);
};
function SlCallOut (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M1000.35 771.616c-15.664-11.008-187.059-124.974-208.066-137.806-9.152-5.6-20.32-8.336-32.464-8.336-15.664 0-33.008 4.56-49.935 13.472-16.497 8.688-66.464 37.12-90.913 51.088-21.536-15.12-72.127-53.872-151.84-133.664-79.215-79.184-118.319-130.191-133.535-151.84 13.936-24.432 42.336-74.4 50.976-90.848 16.368-31.008 18.225-61.968 4.944-82.848-12.463-19.68-125.968-191.808-137.68-208C240.813 7.554 221.021-.702 199.55-.702c-16.944 0-34.912 5.12-50.496 15.968C147.55 16.338-3.043 125.522-1.043 187.618 4.51 362.05 174.013 567.042 315.228 708.306s346.224 310.815 521.344 316.399h1.44c61.312 0 169.089-148.688 170.129-150.16 28.272-40.4 17.968-84.88-7.791-102.929zm-44.209 65.651c-40.592 56.224-98.225 114.945-120.784 123.346-120.032-5.632-288.464-111.12-474.88-297.568-186.4-186.464-291.872-354.704-297.44-474.336 8.096-22.624 66.815-80.624 122.527-120.912 4.128-2.848 9.216-4.496 13.968-4.496 1.055 0 1.935.096 2.624.224 18 26.16 114.624 172.433 132.16 199.776.064 2.88-.911 10.19-6.4 20.623-5.84 11.12-24.032 43.536-49.904 88.88l-20.128 35.28 23.344 33.248c17.408 24.72 58.816 78.464 140.624 160.288 82.16 82.192 135.712 123.473 160.336 140.784l33.248 23.344 35.28-20.16c34.193-19.537 75.504-42.945 88.945-50 10.784-5.68 18.16-6.129 20.16-6.129.32 0 .593 0 .816.033 24.496 15.376 173.937 114.592 200.32 132.688.432 2.56.031 8.128-4.816 15.088zM683.899 382.276l275.246-273.572-.88 155.056c-.288 12.944 9.968 24.192 22.912 23.889l16.416-.016c12.96-.32 23.649-8 23.921-20.928l.656-231.008c0-.223-.864-.383-.864-.607l1.264-11.712c.128-6.496-1.376-12.288-5.6-16.432-4.128-4.175-9.935-6.72-16.384-6.543L988.89.675c-.224 0-.4.096-.655.128L758.763-.222c-12.928.289-23.616 10.977-23.92 23.921l-.032 16.416c1.967 15.233 13.935 24.16 26.88 23.872l151.248.4L638.65 337.013c-12.497 12.496-12.497 32.768 0 45.264 12.496 12.481 32.752 12.481 45.248 0z"},"child":[]}]})(props);
};
function SlCamera (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M928 224H780.816L704 96H320l-76.8 128H96c-32 0-96 32-96 95.008V832c0 53.008 48 96 89.328 96H930c42 0 94-44.992 94-94.992V320c0-32-32-96-96-96zm32 609.008c0 12.624-20.463 30.288-29.999 31.008H89.521c-7.408-.609-25.52-15.04-25.52-32.016V319.008c0-20.272 27.232-30.496 32-31.008h183.44l76.8-128h313.647l57.12 96.945 17.6 31.055H928c22.56 0 31.68 29.472 32 32v513.008zM512.001 320c-123.712 0-224 100.288-224 224s100.288 224 224 224 224-100.288 224-224-100.288-224-224-224zm0 384c-88.224 0-160-71.776-160-160s71.776-160 160-160 160 71.776 160 160-71.776 160-160 160z"},"child":[]}]})(props);
};
function SlCamrecorder (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M638.128 223.376c1.28 0 2.32 1.008 2.32 2.24v127.872c0 23.664 13.056 45.424 34 56.528a63.763 63.763 0 0 0 30 7.471c12.56 0 27.056-3.68 37.84-10.991L960 283.264V739.68L741.088 620.16a63.92 63.92 0 0 0-36.655-11.536 64.277 64.277 0 0 0-29.568 7.217c-21.12 11.024-34.4 32.88-34.432 56.688l-.16 125.84c0 1.248-1.008 2.256-2.288 2.256H66.289c-1.28 0-2.289-.992-2.289-2.225l.16-572.784c0-1.248 1.008-2.24 2.289-2.24h571.68zm352.24-32.032c-6.816 0-20.291 2.016-27.97 9.664l-257.969 152.48V225.616c0-36.56-29.68-66.24-66.319-66.24H66.43c-36.672 0-66.288 29.665-66.288 66.241l-.144 572.752c0 36.56 29.632 66.256 66.288 66.256h571.712c36.657 0 66.289-29.68 66.289-66.256l.16-125.744 262.976 153.312c7.712 7.68 16.256 6.687 23.088 6.687 7.087 0 12.368-2.16 13.024-2.432 12.432-5.184 20.464-17.184 20.464-30.688V224.528c0-13.504-8.032-25.551-20.464-30.656-.72-.32-6.031-2.528-13.167-2.528z"},"child":[]}]})(props);
};
function SlChart (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M272.064 319.984H48c-17.68 0-32 14.32-32 32V992c0 17.68 14.32 32 32 32h224.064c17.68 0 32-14.32 32-32V351.984c0-17.68-14.32-32-32-32zm-32 640.016H80V383.984h160.064V960zm383.68-449.744h-224.08c-17.68 0-32 14.32-32 32V992c0 17.68 14.32 32 32 32h224.08c17.68 0 32-14.32 32-32V542.256c0-17.696-14.304-32-32-32zm-32 449.744h-160.08V574.256h160.08V960zM976 0H752.272c-17.68 0-32 14.32-32 32v960c0 17.68 14.32 32 32 32H976c17.68 0 32-14.32 32-32V32c0-17.68-14.32-32-32-32zm-32 960H784.272V64H944v896z"},"child":[]}]})(props);
};
function SlCheck (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01zm204.336-636.352L415.935 626.944l-135.28-135.28c-12.496-12.496-32.752-12.496-45.264 0-12.496 12.496-12.496 32.752 0 45.248l158.384 158.4c12.496 12.48 32.752 12.48 45.264 0 1.44-1.44 2.673-3.009 3.793-4.64l318.784-320.753c12.48-12.496 12.48-32.752 0-45.263-12.512-12.496-32.768-12.496-45.28 0z"},"child":[]}]})(props);
};
function SlChemistry (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M810.416 970.72L640.015 769.056V415.552h21.312c17.68 0 32-14.32 32-32s-14.32-32-32-32h-53.312c-17.68 0-32 14.32-32 32v397.824a31.944 31.944 0 0 0 8.256 21.44l130.368 157.343h-405.28l130.368-157.344a31.944 31.944 0 0 0 8.256-21.44V383.553c0-17.68-14.32-32-32-32H362.67c-17.68 0-32 14.32-32 32s14.32 32 32 32h21.312v353.504l-170.4 201.664a32.039 32.039 0 0 0-5.504 34.431 32.001 32.001 0 0 0 29.249 19.01h549.344a32.001 32.001 0 0 0 29.249-19.01c5.12-11.551 2.976-25.055-5.504-34.431zM479.999 319.68c35.264 0 63.84-28.592 63.84-63.84 0-35.216-28.576-63.807-63.84-63.807-35.28 0-63.84 28.591-63.84 63.807 0 35.248 28.56 63.84 63.84 63.84zm208.48-94.992c62.368 0 112.928-50.336 112.928-112.416S750.863-.144 688.479-.144c-62.352 0-112.928 50.336-112.928 112.416s50.576 112.416 112.928 112.416zm-.496-161.025c26.656 0 48.336 21.584 48.336 48.128 0 26.528-21.68 48.128-48.336 48.128s-48.336-21.6-48.336-48.128c.016-26.544 21.68-48.128 48.336-48.128z"},"child":[]}]})(props);
};
function SlClock (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01zm32-462V192.002c0-17.664-14.336-32-32-32s-32 14.336-32 32v320c0 9.056 3.792 17.2 9.856 23.007.529.624.96 1.296 1.537 1.887l158.384 158.4c12.496 12.481 32.752 12.481 45.248 0 12.496-12.496 12.496-32.768 0-45.264z"},"child":[]}]})(props);
};
function SlClose (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01zm181.008-630.016c-12.496-12.496-32.752-12.496-45.248 0L512 466.752l-135.76-135.76c-12.496-12.496-32.752-12.496-45.264 0-12.496 12.496-12.496 32.752 0 45.248L466.736 512l-135.76 135.76c-12.496 12.48-12.496 32.769 0 45.249 12.496 12.496 32.752 12.496 45.264 0L512 557.249l135.76 135.76c12.496 12.496 32.752 12.496 45.248 0 12.496-12.48 12.496-32.769 0-45.249L557.248 512l135.76-135.76c12.512-12.512 12.512-32.768 0-45.248z"},"child":[]}]})(props);
};
function SlCloudDownload (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M763.024 260C718.4 141.568 622.465 66.559 477.569 66.559c-184.384 0-313.392 136.912-324.479 315.536C64.178 410.527.002 501.215.002 603.935c0 125.744 98.848 231.968 215.823 231.968h28.448c17.664 0 32-14.32 32-32s-14.336-32-32-32h-28.448c-82.304 0-152.832-76.912-152.832-167.968 0-80.464 56.416-153.056 127.184-165.216l29.04-5.008-2.592-29.344-.24-.368c.016-155.872 102.607-273.44 261.184-273.44 127.104 0 198.513 62.624 231.553 169.44l6.832 22.032 23.072.497c118.864 2.496 223.088 98.944 223.088 218.784 0 109.056-72.272 230.592-181.713 230.592h-9.104c-17.664 0-32 14.32-32 32s14.336 32 32 32v-.096c160-4.224 252.24-157.088 252.24-294.496-.032-147.728-115.792-265.743-260.512-281.312zM646.337 775.47c-8.944-9.344-23.407-9.345-32.335-.001l-70.384 77.648V530.973c0-17.664-14.336-32-32-32s-32 14.336-32 32v322.432l-68.112-75.935c-8.944-9.344-23.44-11.344-32.368-2l-8.065 4.416c-8.944 9.376-8.944 24.48 0 33.823l115.504 127.744c.16.16.193.368.336.528l8.096 8.464c4.496 4.689 10.368 7.01 16.288 6.977 5.872.032 11.776-2.288 16.225-6.977l8.095-8.464c.16-.16.24-.335.368-.528L654.417 811.71c8.945-9.344 8.945-20.447 0-29.823z"},"child":[]}]})(props);
};
function SlCloudUpload (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M763.024 259.968C718.4 141.536 622.465 66.527 477.553 66.527c-184.384 0-313.392 136.912-324.479 315.536C64.177 410.495.002 501.183.002 603.903c0 125.744 98.848 231.968 215.823 231.968h92.448c17.664 0 32-14.336 32-32 0-17.68-14.336-32-32-32h-92.448c-82.304 0-152.832-76.912-152.832-167.968 0-80.464 56.416-153.056 127.184-165.216l29.04-5.008-2.576-29.328-.24-.368c0-155.872 102.576-273.44 261.152-273.44 127.104 0 198.513 62.624 231.537 169.44l6.847 22.032 23.056.496c118.88 2.496 223.104 98.945 223.104 218.77 0 109.055-72.273 230.591-181.696 230.591h-73.12c-17.664 0-32 14.336-32 32 0 17.68 14.336 32 32 32l72.88-.095c160-4.224 243.344-157.071 243.344-294.495 0-147.712-115.76-265.744-260.48-281.312zM535.985 514.941c-.176-.192-.241-.352-.354-.512l-8.095-8.464c-4.432-4.688-10.336-7.008-16.24-6.976-5.905-.048-11.777 2.288-16.289 6.975l-8.095 8.464c-.16.16-.193.353-.336.513L371.072 642.685c-8.944 9.344-8.944 24.464 0 33.84l8.064 5.471c8.945 9.344 23.44 6.32 32.368-3.024l68.113-75.935v322.432c0 17.664 14.336 32 32 32s32-14.336 32-32V603.34l70.368 77.631c8.944 9.344 23.408 12.369 32.336 3.025l8.064-5.472c8.945-9.376 8.945-24.496 0-33.84z"},"child":[]}]})(props);
};
function SlCompass (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M733.184 280.272l-313.15 134.64a30.023 30.023 0 0 0-13.151 13.151L263.427 717.28c-5.872 11.537-3.745 25.537 5.311 34.785a30.222 30.222 0 0 0 21.536 9.024c4.432 0 8.944-.976 13.12-3.008L609.12 631.104a29.8 29.8 0 0 0 13.216-12.497l150.88-296.896c6.432-11.6 4.527-26.031-4.656-35.567-9.216-9.536-23.584-11.872-35.376-5.872zM357.857 664.816l87.008-177.681 87.872 109.984zm226.848-105.2l-88.8-111.152 176.784-69.76zM512.001 0c-282.768 0-512 229.232-512 512 0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512 0-282.768-229.216-512-512-512zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01z"},"child":[]}]})(props);
};
function SlControlEnd (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M943.936 0c-17.664 0-31.998 14.338-31.998 32.002v470c-2.88-18.192-13.44-34.465-29.375-44.37L146.851 11.026a64.147 64.147 0 0 0-33.776-9.649A63.765 63.765 0 0 0 81.987 9.44c-20.32 11.28-32.912 32.704-32.912 55.936l-1.008 893.232a63.958 63.958 0 0 0 32.912 55.937 63.933 63.933 0 0 0 31.087 8.064c11.712 0 23.471-3.215 33.775-9.664l736.72-446.608c15.936-9.872 26.495-26.16 29.375-44.352V992c0 17.664 14.336 32 32 32s32-14.336 32-32V32c0-17.664-14.32-32-32-32.001zM112.065 958.61l.992-893.216 735.744 446.592z"},"child":[]}]})(props);
};
function SlControlForward (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M450.08 197.904l505.28 314.097-505.28 314.096V579.121l-384 246.976V197.905l384 246.992v-255.84zm2.656-63.999c-10.72 0-22.736 2.67-32.433 8.062-20.303 11.28-34.223 32.705-34.223 55.937v131.84L87.856 143.552c-10.32-6.4-21.376-9.648-33.12-9.648-10.689 0-15.729 2.671-25.44 8.063C9.006 153.247 2.08 174.671 2.08 197.904v628.192c0 23.248 7.248 44.656 27.568 55.936 9.68 5.376 17.727 8.064 28.432 8.064 11.727 0 20.783-3.216 31.103-9.665l296.896-186.176v131.84c0 23.248 13.92 44.657 34.224 55.937 9.696 5.376 21.056 8.064 31.776 8.064 11.712 0 23.792-3.215 34.112-9.664l505.456-314.096c18.785-11.664 30.288-32.223 30.288-54.336s-11.376-42.671-30.16-54.351l-505.28-314.096a63.906 63.906 0 0 0-33.76-9.649z"},"child":[]}]})(props);
};
function SlControlPause (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M416.272 0H192.064c-17.664 0-32 14.32-32 32v960c0 17.664 14.336 32 32 32h224.208c17.68 0 32-14.336 32-32V32c0-17.68-14.32-32-32-32zm-32 960H224.064V64h160.208v896zM831.937 0H608.881c-17.68 0-32 14.32-32 32v960c0 17.664 14.32 32 32 32h223.056c17.68 0 32-14.336 32-32V32c0-17.68-14.304-32-32-32zm-32 960H640.881V64h159.056v896z"},"child":[]}]})(props);
};
function SlControlPlay (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M144.624 65.392l735.744 446.592-736.736 446.624zm0-64a63.765 63.765 0 0 0-31.088 8.063c-20.32 11.28-32.912 32.705-32.912 55.937l-.992 893.216a63.958 63.958 0 0 0 32.912 55.936 63.937 63.937 0 0 0 31.088 8.065c11.712 0 23.472-3.216 33.775-9.664l736.72-446.624a63.94 63.94 0 0 0 30.257-54.336c0-22.112-11.44-42.672-30.257-54.352L178.4 11.025a64.084 64.084 0 0 0-33.775-9.632z"},"child":[]}]})(props);
};
function SlControlRewind (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M573.92 197.904L68.64 512.001l505.28 314.096V579.121l384 246.976V197.905l-384 246.992v-255.84 8.847zm-2.656-63.999c10.704 0 22.736 2.67 32.416 8.062 20.32 11.28 34.24 32.705 34.24 55.937v131.84l298.224-186.192c10.32-6.4 21.376-9.648 33.12-9.648 10.688 0 15.728 2.671 25.424 8.063 20.32 11.28 27.232 32.704 27.232 55.937v628.192c0 23.248-7.248 44.656-27.568 55.936-9.68 5.376-17.727 8.064-28.432 8.064-11.727 0-20.783-3.216-31.103-9.665L637.921 694.255v131.84c0 23.248-13.92 44.657-34.24 55.937-9.68 5.376-21.04 8.064-31.76 8.064-11.712 0-23.792-3.215-34.112-9.664L32.353 566.336C13.585 554.688 2.08 534.128 2.08 512s11.376-42.671 30.16-54.351l505.264-314.096a63.856 63.856 0 0 1 33.759-9.648z"},"child":[]}]})(props);
};
function SlControlStart (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M974.944 65.392c0-23.232-12.592-44.654-32.912-55.935a63.765 63.765 0 0 0-31.088-8.063 63.96 63.96 0 0 0-33.775 9.648L141.44 457.634c-15.952 9.905-26.512 26.208-29.376 44.4V32.004c0-17.664-14.336-32-32-32s-32 14.336-32 32v960c0 17.664 14.336 32 32 32s32-14.336 32-32V521.939c2.88 18.208 13.44 34.511 29.375 44.384l736.72 446.64a63.881 63.881 0 0 0 33.776 9.664 63.937 63.937 0 0 0 31.088-8.065 63.958 63.958 0 0 0 32.912-55.936zM175.2 511.985L910.944 65.393l1.008 893.216z"},"child":[]}]})(props);
};
function SlCreditCard (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M928.144 176H95.856c-53.024 0-96 42.976-96 96v480c0 53.024 42.976 96 96 96h832.288c53.024 0 96-42.976 96-96V272c0-53.024-42.976-96-96-96zM95.856 240h832.288c17.664 0 32 14.336 32 32v64H63.856v-64c0-17.664 14.351-32 32-32zm832.288 544H95.856c-17.664 0-32-14.336-32-32V464h896.288v288c0 17.664-14.352 32-32 32z"},"child":[]}]})(props);
};
function SlCrop (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M992 800l-128 .002V206.098L983.456 86.802c12.48-12.496 12.48-32.769 0-45.265-12.496-12.496-32.769-12.496-45.265 0L819.583 160.001H224v-128c0-17.68-14.32-32-32-32s-32 14.32-32 32v128H32c-17.68 0-32 14.32-32 32 0 17.664 14.32 32 32 32h128v608c0 2.945.945 5.6 1.681 8.288.32 1.216.256 2.464.72 3.632 3.216 8.065 9.6 14.433 17.664 17.681 1.376.56 2.88.495 4.288.847 2.528.64 4.929 1.551 7.648 1.551h608v128c0 17.68 14.32 32 32 32s32-14.32 32-32V864h128c17.68 0 32-14.32 32-32s-14.32-32-32-32zM755.488 224.002L224 754.786V224.002h531.488zm-486.208 576L800 270.018v529.984z"},"child":[]}]})(props);
};
function SlCup (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M832.56 415.792c-8.336 0-35.202-.16-64.306-.368l.113-63.968c0-35.344-28.657-64-64-64l-640.496-.16c-35.344 0-64 28.656-64 64V832.24c0 106.032 85.967 192 192 192h384.656c106.032 0 191.008-85.968 191.008-192l.064-32.848c29.024.224 58.608.4 64.977.4 105.776 0 191.568-85.04 191.568-191.072-.016-106.048-85.808-192.928-191.584-192.928zM703.533 832.24c0 70.592-56.4 128-127.008 128H191.869c-70.592 0-128-57.408-128-128l-.096-480.944 640.592.192zm129.026-95.519c-6.352 0-35.888-.191-64.863-.4l.448-256.815c29.12.208 56.048.368 64.4.368 73.12 0 128.623 54.544 128.623 127.84S905.68 736.722 832.56 736.722zM575.87 223.762c17.664 0 32-14.336 32-32v-160c0-17.664-14.336-32-32-32s-32 14.336-32 32v160c0 17.68 14.336 32 32 32zm-384 0c17.664 0 32-14.336 32-32v-160c0-17.664-14.336-32-32-32s-32 14.336-32 32v160c0 17.68 14.336 32 32 32zm192 0c17.664 0 32-14.336 32-32v-160c0-17.664-14.336-32-32-32s-32 14.336-32 32v160c0 17.68 14.336 32 32 32z"},"child":[]}]})(props);
};
function SlCursorMove (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M1016.4 496.64l-8.48-8.08c-.16-.16-.335-.224-.528-.367L877.648 369.76c-9.344-8.945-24.448-8.945-33.824 0l-5.488 8.064c-9.344 8.945-6.304 23.408 3.04 32.336l76.464 69.344H546.496V106.16l69.343 76.464c8.945 9.344 23.409 12.384 32.336 3.023l8.065-5.471c8.944-9.376 8.944-24.481 0-33.841L543.072 22.368a31.874 31.874 0 0 0-12.32-13.296l-1.423-1.488C524.897 2.912 518.993.576 513.105.608c-5.904-.032-11.776 2.304-16.288 6.976l-8.096 8.463c-.16.16-.176.369-.336.544L372.881 144.335c-8.927 9.329-8.927 24.449 0 33.825l8.065 5.471c8.928 9.344 23.424 6.32 32.368-3.024l69.152-77.105v375.984H106.162l76.464-69.343c9.344-8.945 12.384-23.409 3.04-32.336l-5.471-8.065c-9.36-8.944-24.497-8.944-33.84 0L22.37 482.926a31.957 31.957 0 0 0-13.28 12.29l-1.489 1.423C2.914 501.087.593 506.992.626 512.88c-.016 5.905 2.288 11.777 6.976 16.288l8.464 8.096c.16.16.368.176.528.336l127.744 115.504c9.344 8.928 24.464 8.928 33.84 0l5.472-8.064c9.344-8.945 6.304-23.44-3.04-32.369l-77.12-69.152h379.008v376.96l-69.153-77.103c-8.944-9.344-23.44-12.369-32.368-3.025l-8.064 5.472c-8.928 9.376-8.928 24.496 0 33.824l115.504 127.744c.16.176.192.368.336.528l8.095 8.48c4.512 4.673 10.384 7.009 16.288 6.976 5.873.033 11.777-2.303 16.225-6.975l8.096-8.48c.16-.16.224-.337.368-.529l118.432-129.744c8.944-9.344 8.944-24.464 0-33.824l-8.065-5.488c-8.944-9.344-23.408-6.304-32.335 3.04l-69.344 76.464V543.502H920.48l-77.105 69.152c-9.343 8.944-12.368 23.44-3.024 32.368l5.472 8.064c9.376 8.928 24.496 8.928 33.824 0l127.744-115.504c.176-.175.368-.19.528-.334l8.48-8.096c4.672-4.496 7.008-10.368 6.976-16.288.032-5.857-2.304-11.777-6.975-16.225z"},"child":[]}]})(props);
};
function SlCursor (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M921.088 103.232L584.832 889.024 465.52 544.512 121.328 440.48zM1004.46.769c-6.096 0-13.52 1.728-22.096 5.36L27.708 411.2c-34.383 14.592-36.56 42.704-4.847 62.464l395.296 123.584 129.36 403.264c9.28 15.184 20.496 22.72 31.263 22.72 11.936 0 23.296-9.152 31.04-27.248l408.272-953.728C1029.148 16.368 1022.86.769 1004.46.769z"},"child":[]}]})(props);
};
function SlDiamond (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M1018.72 295.472L878.848 28.03C870.688 12.43 849.584-.322 832-.322H510.064c-.351-.015-.703-.11-1.054-.127-.288 0-.56.113-.849.128h-316.16c-17.6 0-38.752 12.72-47.024 28.256L5.473 290.223c-8.289 15.536-6.624 39.937 3.631 54.257l480.016 669.152c5.153 7.184 12 10.815 18.832 10.815 6.785 0 13.584-3.536 18.768-10.591L1014.624 349.6c10.384-14.193 12.256-38.544 4.096-54.128zm-76.353-7.843H770.911l68.656-196.608zM575.343 63.677h205.968l-63.888 182.928zm92.895 223.952H370.591L511.263 85.533zm-354.351-30.544L249.71 63.677h198.816zm366.863 94.544L508.718 844.173 345.262 351.629H680.75zM436.926 831.085L92.99 351.629h184.832zm311.616-479.456H933.71l-352.976 480.56zM188.478 82.413l68.096 205.216H79.326z"},"child":[]}]})(props);
};
function SlDirection (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M966.912 298.16l-179.121-192A32.105 32.105 0 0 0 764.367 96h-267.12l-1.008-66c0-16.56-14.336-30-32-30s-30 13.44-30 30l-.975 66H80.496c-17.68 0-32 14.32-32 32v384c0 17.68 14.32 32 32 32h352.336v450c0 16.56 14.336 30 32 30s32-13.44 32-30V544h267.536c8.88 0 17.344-3.68 23.408-10.16l179.12-192c11.472-12.304 11.472-31.376.016-43.68zM750.463 480H112.495V160h637.968l149.28 160z"},"child":[]}]})(props);
};
function SlDirections (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M1017.06 186.064L917.364 74.721a31.964 31.964 0 0 0-23.937-10.752H543.171V30.001c0-16.56-14.336-30-32-30s-32 13.44-32 30V63.97H223.363c-17.68 0-32 14.32-32 32v223.664c0 17.68 14.32 32 32 32h255.808v64.096H130.58a31.963 31.963 0 0 0-23.936 10.752L6.963 539.793c-10.752 12.128-10.752 30.368 0 42.496l99.68 112.288c6.112 6.847 14.784 9.744 23.936 9.744h348.592V994c0 16.56 14.336 30 32 30s32-13.44 32-30V704.32h256.464c17.68 0 32-14.32 32-32V447.713c0-17.68-14.32-32-32-32H543.171v-64.096h350.256a31.963 31.963 0 0 0 23.937-10.752l99.696-112.32c10.736-12.112 10.736-30.352 0-42.48v-.001zM767.647 640.321H144.959l-71.28-79.28 71.28-81.312h622.688v160.592zm111.392-352.688h-623.68V127.969h623.68l71.28 79.344z"},"child":[]}]})(props);
};
function SlDisc (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0zm448 512c0 66.32-14.593 129.263-40.56 185.935L636.222 546.383c3.025-10.976 4.785-22.464 4.785-34.384 0-71.248-57.744-129.008-129.008-129.008-14.624 0-28.624 2.544-41.712 7.025L300.672 117.104C363.664 83.264 435.616 64 512 64c247.024 0 448 200.976 448 448zm-448.001-64.994c35.84 0 65.008 29.151 65.008 65.008s-29.168 64.992-65.008 64.992-64.992-29.168-64.992-65.008 29.152-64.992 64.992-64.992zM246.575 151.373l170.177 273.84c-.752.832-1.536 1.648-2.288 2.513l-283.168-151.52c30.208-48.577 69.392-90.977 115.279-124.833zM64 511.997c0-63.68 13.44-124.256 37.504-179.168l284.368 152.16c-1.857 8.72-2.881 17.728-2.881 27.008 0 71.248 57.744 129.008 129.008 129.008 12.4 0 24.353-1.84 35.696-5.104l170.192 273.792c-61.68 32.048-131.664 50.304-205.888 50.304-247.024 0-448-200.976-448-448zm708.447 364.16L602.943 603.47c.496-.496.96-1.024 1.456-1.536l284.288 152.144a452.058 452.058 0 0 1-116.24 122.08z"},"child":[]}]})(props);
};
function SlDislike (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M415.44.24c290.832 0 293.089 12.066 329.104 39.187 19.104 14.368 55.151 24.335 186.831 32.912 9.568.624 18.64 4.288 24.736 11.68 2.8 3.408 68.592 99.36 68.592 253.023 0 151.44-47.088 220.48-49.103 223.696a31.988 31.988 0 0 1-27.12 15.024c-108.112 0-257.984 138-358.752 378.912-17.424 41.664-21.008 69.055-85.024 69.055-36.4 0-77.2-26.064-97.376-59.504-41.311-68.32-20.336-215.057-.912-293.474-66 .529-185.472 1.44-242.319 1.44-79.072 0-131.393-47.151-133.009-116.096-.512-22.752 2.464-51.824 9.056-66.832C22.752 471.903.288 445.71-.687 411.998c-1.233-43.504 27.279-76.64 45.455-95.664-4.16-12.656-12.512-29.44-11.712-49.505 2.015-49.343 40.095-81.151 63.84-97.743-1.953-13.456-3.489-38.944.832-58.624C114.848 31.838 230.128.238 415.44.238zm498.946 137.01c-114.688-9.488-175.996-22.338-208.332-46.69-25.024-18.832-21.152-26.303-290.608-26.303-82.176 0-242.896 3.424-255.216 59.824-4.912 22.56 18.88 44.752 18.976 44.912 6.496 16.048-.752 34.848-16.592 41.776-.256.127-64.128 23.024-65.6 58.736-.944 22.832 14.72 36.544 15.088 37.103 9.312 14.464 5.903 34.32-8.225 44.16-.16.128-41.568 25.216-40.543 59.44.784 27.152 36.576 46.288 37.664 46.928 8 4.576 13.824 12.496 15.631 21.568 1.808 9.025-.224 18.528-5.824 25.84 0 0-16.272 25.872-15.696 50.112 1.184 51.936 57.023 53.568 69.008 53.568 80.72 0 288.03-.848 288.03-.848 11.184-.032 20.864 5.248 26.864 14.192s6.464 20.065 2.928 30.225c-31.248 90.032-48.704 231.28-19.712 279.536 8.528 14.224 10.496 28.432 42.496 28.432 4.432 0 14.991-3.504 25.999-29.745 106.992-255.808 266.704-403.808 397.521-417.15 11.28-25.728 32.496-79.04 32.496-175.792-.032-98.736-31.312-175.104-46.353-199.824z"},"child":[]}]})(props);
};
function SlDoc (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M560 0H208c-35.344 0-64 28.656-64 64v896c0 35.344 28.656 64 64 64h608c35.344 0 64-28.656 64-64V320.016zm256 346.528V352H528V64h5.504zM208 960V64h256v352h352v544H208z"},"child":[]}]})(props);
};
function SlDocs (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M768 0H416c-35.344 0-64 28.656-64 64h352v256h256v512H736v64h224c35.344 0 64-28.656 64-64V256.016zm0 256V90.496L933.472 256H768zM64 128c-35.344 0-64 28.656-64 64v768c0 35.344 28.656 64 64 64h544c35.344 0 64-28.656 64-64V384.016L416 128H64zm544 832H64V192h288v256h256v512zM416 384V218.496L581.472 384H416z"},"child":[]}]})(props);
};
function SlDrawer (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M1022.98 509.984L905.475 102.895c-3.84-13.872-16.464-23.472-30.848-23.472H139.283c-14.496 0-27.184 9.744-30.944 23.777L.947 489.552c-1.984 7.504-1.009 15.007 1.999 21.536C1.218 516.88.003 522.912.003 529.264v351.312c0 35.343 28.656 64 64 64h896c35.343 0 64-28.657 64-64V529.264c0-1.712-.369-3.329-.496-5.008.832-4.592.816-9.44-.527-14.272zm-859.078-366.56l686.369-.001 93.12 321.84H645.055c-1.44 76.816-55.904 129.681-133.057 129.681s-130.624-52.88-132.064-129.68H74.158zm796.097 737.151H64.001V529.263h263.12c27.936 80.432 95.775 129.68 184.879 129.68s157.936-49.248 185.871-129.68h262.128v351.312z"},"child":[]}]})(props);
};
function SlDrop (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M510.4 1022.704c-193.312 0-350.592-155.12-350.592-345.776 0-222.688 311.632-644.848 324.912-662.72a31.98 31.98 0 0 1 25.473-12.913c11.183-.096 19.567 4.593 25.663 12.56 13.408 17.537 328.336 432.226 328.336 663.058 0 190.672-158.72 345.791-353.792 345.791zm.352-935.008c-74.4 105.664-286.943 422.064-286.943 589.217 0 155.376 128.56 281.776 286.592 281.776 159.776 0 289.776-126.4 289.776-281.776.016-173.36-214.145-485.024-289.425-589.217z"},"child":[]}]})(props);
};
function SlEarphonesAlt (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M1023.84 572.544c.096-21.056-3.217-100.496-5.745-123.216-29.12-260.752-240.752-450-503.184-450-273.344 0-494.815 210.624-509.84 489.904-.32 6.096-2.56 49.344-2.72 75.088l-.08 14.32C.958 584.56.158 590.672.158 596.976v214.656c0 46.88 38.128 85.008 85.008 85.008h86.288c46.88 0 85.023-38.128 85.023-85.008v-214.64c0-46.88-38.16-85.008-85.024-85.008H85.15a85.65 85.65 0 0 0-17.184 1.744c.48-10.383.912-18.576 1.025-21.056C82.159 247.888 276.127 63.328 514.91 63.328c229.28 0 414.128 165.344 439.568 393.12 1.072 9.504 2.448 33.664 3.552 57.92-6.193-1.44-12.577-2.385-19.2-2.385H853.55c-46.88 0-85.008 38.128-85.008 85.008v213.664c0 32.368 18.4 60.256 45.09 74.592l-205.44 80.656v-5.216c0-17.664-14.337-32-32-32h-96c-17.665 0-32 14.336-32 32v32c0 17.664 14.335 32 32 32h96c.272 0 .512-.08.784-.08l57.36-.224L963.89 895.007c4.32-1.792 7.984-4.464 10.992-7.664 28.848-13.616 48.991-42.736 48.991-76.688V596.99c0-5.216-.64-10.288-1.552-15.233.88-2.944 1.504-6 1.52-9.216zm-938.689 3.44h86.29c11.6 0 21.023 9.408 21.023 21.008v214.656c0 11.6-9.44 21.008-21.025 21.008H85.152c-11.6 0-21.007-9.409-21.007-21.008V596.992c.015-11.6 9.423-21.008 21.007-21.008zm747.377 21.008c0-11.6 9.41-21.008 21.009-21.008h85.28c11.6 0 21.023 9.408 21.023 21.008v213.664c0 11.6-9.44 21.008-21.024 21.008h-85.28c-11.6 0-21.008-9.408-21.008-21.008V596.992z"},"child":[]}]})(props);
};
function SlEarphones (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M1023.84 604.56c.096-21.056-3.216-100.497-5.744-123.217-29.12-260.752-240.752-450-503.184-450-273.344 0-494.815 210.624-509.84 489.904-.32 6.096-2.56 49.344-2.72 75.088l-.08 14.32C.96 616.575.16 622.687.16 628.991v278.656c0 46.88 38.128 85.008 85.008 85.008h86.288c46.88 0 85.023-38.128 85.023-85.008v-278.64c0-46.88-38.16-85.008-85.024-85.008h-86.32a85.65 85.65 0 0 0-17.184 1.744c.48-10.383.912-18.591 1.024-21.055C82.16 279.904 276.111 95.344 514.911 95.344c229.28 0 414.128 165.344 439.568 393.12 1.088 9.504 2.464 33.664 3.569 57.92-6.24-1.44-12.609-2.385-19.233-2.385h-85.28c-46.88 0-85.008 38.128-85.008 85.008V906.67c0 46.895 38.128 85.007 85.008 85.007h85.28c46.88 0 85.024-38.127 85.024-85.007V629.007c0-5.216-.64-10.288-1.568-15.216.928-2.944 1.536-6.017 1.569-9.233zm-938.704 3.439h86.288c11.6 0 21.023 9.408 21.023 21.008v278.656c0 11.616-9.44 21.008-21.024 21.008H85.135c-11.6 0-21.008-9.409-21.008-21.008V629.007c.032-11.6 9.44-21.008 21.009-21.008zM959.84 906.655c0 11.6-9.44 21.008-21.023 21.008h-85.28c-11.6 0-21.009-9.408-21.009-21.008V629.007c0-11.6 9.409-21.007 21.008-21.007h85.28c11.6 0 21.024 9.408 21.024 21.007v277.648z"},"child":[]}]})(props);
};
function SlEmotsmile (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M781.264 607.152c-16.256-7.28-35.089.064-42.257 16.192-.656 1.424-66.128 144.208-229.439 146.128-1.008 0-2 .033-3.008.033-153.664 0-219.937-140.368-222.688-146.4-7.311-16-26.191-23.12-42.319-15.872-16.096 7.28-23.248 26.208-15.968 42.335 3.408 7.569 85.376 183.937 280.848 183.937 1.28 0 2.592-.032 3.872-.032 203.872-2.4 283.84-176.656 287.12-184.064 7.248-16.16-.032-35.072-16.16-42.256zM511.999.001c-282.784 0-512 229.216-512 512s229.216 512 512 512 512-229.216 512-512-229.216-512-512-512zm0 960c-247.024 0-448-200.976-448-448s200.976-448 448-448 448 200.976 448 448-200.976 448-448 448zM351.503 479.825c35.264 0 63.84-28.592 63.84-63.824s-28.576-63.824-63.84-63.824c-35.28 0-63.84 28.591-63.84 63.824s28.56 63.824 63.84 63.824zm320 0c35.264 0 63.84-28.592 63.84-63.824s-28.576-63.824-63.84-63.824c-35.28 0-63.84 28.591-63.84 63.824s28.56 63.824 63.84 63.824z"},"child":[]}]})(props);
};
function SlEnergy (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M595.344 64.72h.176-.176zm0 0l-72.207 379.377 261.584.88L428.657 959.28l72.208-417.376-261.568-.912zm.049-63.999c-1.728 0-3.455.063-5.151.19-11.296.913-18.785 4.689-27.664 10.657a64.304 64.304 0 0 0-13.392 11.936 56.688 56.688 0 0 0-3.297 4.288L187.281 502.4c-14.16 19.408-16.24 45.025-5.36 66.433 10.864 21.408 32.832 34.976 56.912 35.152l184.736 1.344-58.08 342.192c-5.52 29.408 10.16 58.72 37.76 70.528a64.19 64.19 0 0 0 25.391 5.216c20.112 0 36.64-9.408 49.041-26.4L836.737 482.56c14.16-19.409 16.225-45.057 5.36-66.433-10.864-21.408-32.832-34.977-56.912-35.152l-184.736-.32 57.456-300.88a62.46 62.46 0 0 0 1.825-15.056c0-34.624-27.569-62.848-62.065-63.968-.767-.032-1.52-.032-2.271-.032z"},"child":[]}]})(props);
};
function SlEnvelopeOpen (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M1023.31 473.296c-1.36-11.312-5.614-21.713-12.095-30.465h.16l-.88-.88c-3.28-4.32-7.12-8.128-11.408-11.504L581.807 27.04c-36.223-36.223-99.504-36.288-135.776 0L28.815 427.295c-9.024 8.4-28.88 31.09-28.88 53.345v479.52c0 35.184 28.816 64 64 64h896c35.183 0 64-28.816 64-64V481.904c.223-2.88-.065-5.76-.625-8.607zM269.794 726.335L63.938 915.902V544.718zm65.775 26.384c2.288-1.52 4.465-3.248 6.37-5.408.367-.416.623-.912.96-1.344l141.167-130c7.248-5.84 15.84-8.912 24.88-8.912 9.184 0 18.367 3.216 24.527 8l383.6 345.104H110.337zm421.889-22.161l202.48-179.696v361.84zm-653.68-287.729L491.279 72.285c6.064-6.032 14.097-9.376 22.625-9.376 8.56 0 16.592 3.344 22.656 9.376l361.376 344.352h-.975l54.896 55.792-242.304 215.04-135.248-121.664c-37.68-29.536-91.775-30.816-131.68 1.376L317.121 682.765 75.33 469.421l26.992-26.592h1.456z"},"child":[]}]})(props);
};
function SlEnvolopeLetter (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M1023.31 473.28c-1.36-11.312-5.614-21.713-12.095-30.465h.16l-.88-.88c-3.28-4.32-7.12-8.128-11.408-11.504L831.935 262.047V158.783c0-17.68-14.32-32-32-32H698.607l-116.8-99.711c-36.223-36.224-99.504-36.289-135.776 0l-116.4 99.711H223.935c-17.68 0-32 14.32-32 32V264.16L28.815 427.28c-17.343 11.472-28.88 31.088-28.88 53.344v479.504c0 35.184 28.817 64 64 64h896c35.184 0 64-28.816 64-64v-478.24c.224-2.88-.064-5.76-.624-8.607zM268.865 725.503L63.937 915.582V544.686zm61.697 29.999a31.634 31.634 0 0 0 11.377-8.224c1.712-1.935 3.056-4.063 4.224-6.255l137.904-127.936c7.248-5.84 15.84-8.913 24.88-8.913 9.183 0 18.367 3.216 24.527 8l383.84 347.936H110.002zm427.777-25.776l201.6-178.896v361.632zm139.599-313.104h-.976l54.896 55.792-119.92 106.432V350.638zM491.283 72.318c6.064-6.032 14.095-9.376 22.623-9.376 8.56 0 16.592 3.344 22.656 9.376l64.624 54.464H426.754zm276.655 118.464V635.63l-57.312 50.88-136.32-123.568c-37.68-29.536-91.775-30.817-131.68 1.376l-126.624 117.44-60.064-53.008V190.782zM103.777 442.813l88.16-88.129V572.3L75.313 469.404l26.992-26.592h1.472z"},"child":[]}]})(props);
};
function SlEnvolope (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M1023.46 232a31.629 31.629 0 0 0-2.48-18.271C1012.917 178.288 987.3 160 944.005 160h-832c-38.08 0-79.105 14-99.28 41.472-1.745 1.328-3.409 2.832-4.912 4.576-6.449 7.44-8.705 17.009-7.264 26.033-.288 2.592-.544 5.2-.544 7.92v512c0 53.024 58.992 112 112 112h832c53.024 0 80-58.976 80-112v-512c0-2.832-.368-5.313-.544-8.001zm-911.459-8l832.001-.001h.432L512.002 568.655 81.314 225.407C91.106 223.599 103.154 224 112 224zm832.001 575.999H112.003c-17.648 0-48-30.336-48-48V293.551l427.04 341.648c6.016 5.2 13.487 7.792 20.959 7.792a32.046 32.046 0 0 0 20.976-7.792l427.024-341.632v458.432c0 17.664 1.664 48-16 48z"},"child":[]}]})(props);
};
function SlEqualizer (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M160.048 387.872V32c0-17.664-14.336-32-32-32s-32 14.336-32 32v355.84C40.72 402.096-.352 452.288-.352 512c0 59.727 41.072 109.903 96.4 124.176V992c0 17.664 14.336 32 32 32s32-14.336 32-32V636.144c55.28-14.304 96.305-64.447 96.305-124.144 0-59.68-41.025-109.84-96.305-124.128zm-31.632 188.16c-.112 0-.24-.03-.368-.03-.144 0-.272.032-.415.048-35.153-.208-63.697-28.848-63.697-64.048 0-35.184 28.56-63.84 63.712-64.033.128 0 .272.033.4.033s.24-.033.368-.033c35.136.224 63.664 28.864 63.664 64.032 0 35.183-28.528 63.807-63.664 64.031zm415.648 3.842l-.001-547.872c0-17.664-14.336-32-32-32s-32 14.336-32 32v547.84c-55.328 14.273-96.4 64.433-96.4 124.16s41.072 109.903 96.4 124.176v163.824c0 17.664 14.336 32 32 32s32-14.336 32-32V828.146c55.264-14.304 96.288-64.447 96.288-124.144-.016-59.664-41.023-109.824-96.287-124.128zm-31.649 188.16c-.128 0-.24-.031-.368-.031-.144 0-.272.032-.415.048-35.153-.208-63.697-28.848-63.697-64.048 0-35.216 28.609-63.872 63.792-64.032.113 0 .225.032.337.032.096 0 .192-.032.288-.032 35.168.192 63.744 28.832 63.744 64.032 0 35.183-28.529 63.807-63.681 64.031zm415.648-572.159l-.001-163.871c0-17.664-14.336-32-32-32-17.68 0-32 14.336-32 32v163.84c-55.328 14.256-96.4 64.432-96.4 124.159s41.072 109.92 96.4 124.176v547.824c0 17.664 14.32 32 32 32 17.664 0 32-14.336 32-32V444.147c55.264-14.304 96.288-64.447 96.288-124.144-.016-59.664-41.023-109.824-96.287-124.128zm-31.649 188.161c-.128 0-.24-.031-.352-.031-.143 0-.287.032-.415.032-35.152-.192-63.712-28.832-63.712-64.032 0-35.184 28.56-63.84 63.696-64.032.143 0 .287.032.415.032s.24-.032.352-.032c35.136.24 63.664 28.864 63.664 64.032.033 35.183-28.496 63.807-63.648 64.031z"},"child":[]}]})(props);
};
function SlEvent (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M676 862c-16 0-28-13-28-29V691c0-16 12-28 28-28h142c16 0 29 12 29 28v142c0 16-13 29-29 29H676zm142-171H676v142h142V691zM960 96c35 0 64 29 64 64v800c0 35-29 64-64 64H64c-35 0-64-29-64-64V160c0-35 29-64 64-64h256V32c0-18 14-32 32-32s32 14 32 32v64h256V32c0-18 14-32 32-32s32 14 32 32v64h256zM64 960h896V160H704v32c0 18-14 32-32 32s-32-14-32-32v-32H384v32c0 18-14 32-32 32s-32-14-32-32v-32H64v800z"},"child":[]}]})(props);
};
function SlExclamation (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M480 674V192c0-18 14-32 32-32s32 14 32 32v482h-64zm0 63h64v60h-64v-60zM0 512C0 229 229 0 512 0s512 229 512 512-229 512-512 512S0 795 0 512zm961 0c0-247-202-448-449-448S64 265 64 512s201 448 448 448 449-201 449-448z"},"child":[]}]})(props);
};
function SlEye (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M515.472 321.408c-106.032 0-192 85.968-192 192 0 106.016 85.968 192 192 192s192-85.968 192-192-85.968-192-192-192zm0 320c-70.576 0-129.473-58.816-129.473-129.393s57.424-128 128-128c70.592 0 128 57.424 128 128s-55.935 129.393-126.527 129.393zm508.208-136.832c-.368-1.616-.207-3.325-.688-4.91-.208-.671-.624-1.055-.864-1.647-.336-.912-.256-1.984-.72-2.864-93.072-213.104-293.663-335.76-507.423-335.76S95.617 281.827 2.497 494.947c-.4.897-.336 1.824-.657 2.849-.223.624-.687.975-.895 1.567-.496 1.616-.304 3.296-.608 4.928-.591 2.88-1.135 5.68-1.135 8.592 0 2.944.544 5.664 1.135 8.591.32 1.6.113 3.344.609 4.88.208.72.672 1.024.895 1.68.336.88.256 1.968.656 2.848 93.136 213.056 295.744 333.712 509.504 333.712 213.776 0 416.336-120.4 509.44-333.505.464-.912.369-1.872.72-2.88.224-.56.655-.976.848-1.6.496-1.568.336-3.28.687-4.912.56-2.864 1.088-5.664 1.088-8.624 0-2.816-.528-5.6-1.104-8.497zM512 800.595c-181.296 0-359.743-95.568-447.423-287.681 86.848-191.472 267.68-289.504 449.424-289.504 181.68 0 358.496 98.144 445.376 289.712C872.561 704.53 693.744 800.595 512 800.595z"},"child":[]}]})(props);
};
function SlEyeglass (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M1025.38 651.792c-.976-13.84-53.008-319.313-61.151-368.226-.785-4.688-1.409-9.68-2.096-14.944-6.288-49.153-18.032-140.624-165.473-140.624-17.68 0-32 14.32-32 32s14.32 32 32 32c91.12 0 95.936 37.408 102 84.784.785 6.064 1.537 11.872 2.434 17.28 3.744 22.528 20.704 112.16 35.343 201.024-37.551-28.624-84.288-45.807-135.12-45.807-81.648 0-154.32 43.952-194.272 109.36-19.215-7.264-51.824-16.336-95.392-16.336-42.945 0-74.513 9.135-94.032 17.088-38.848-65.825-110.304-110.128-192.271-110.128-53.264 0-102.735 18.72-141.84 49.84 14.832-89.985 32.4-182.033 36.208-205.025.912-5.408 1.664-11.215 2.431-17.28 6.065-47.376 10.881-84.784 102.001-84.784 17.68 0 32-14.32 32-32s-14.32-32-32-32c-147.44 0-159.185 91.472-165.473 140.624-.688 5.248-1.312 10.256-2.097 14.944C48.42 332.494-.427 635.95-1.387 649.807c-.224 3.088.144 6.048.753 8.944-.304 4.624-.72 9.215-.72 13.904 0 123.344 103.344 223.344 226.688 223.344s223.344-100 223.344-223.344c0-18.656-2.544-36.672-6.848-53.984 13.12-5.28 36.832-12.335 69.808-12.335 32.176 0 56.464 6.431 70.304 11.328-4.609 17.631-7.329 35.967-7.329 54.992C574.613 796 677.957 896 801.301 896s223.344-100 223.344-223.344c0-3.344-.351-6.608-.495-9.92.976-3.488 1.52-7.137 1.232-10.944zm-800.036 180.19c-88.192 0-162.688-72.976-162.688-159.344s74.496-159.344 162.688-159.344c87.872 0 159.344 71.472 159.344 159.344s-71.472 159.344-159.344 159.344zm575.968 0c-88.192 0-162.689-72.978-162.689-159.346s74.496-159.344 162.688-159.344c76 0 139.632 53.488 155.456 124.784.656 6.528 1.2 12.672 1.616 18.288.193 2.689.912 5.217 1.84 7.665.16 2.88.433 5.712.433 8.624 0 87.857-71.472 159.328-159.344 159.328z"},"child":[]}]})(props);
};
function SlFeed (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M101.872 330.256c-18.128 0-32.769 14.656-32.769 32.769 0 18.095 14.64 32.767 32.768 32.767 303.008 0 525.344 224.368 525.344 527.36 0 18.096 14.656 32.752 32.769 32.752s32.768-14.656 32.768-32.752c0-340.368-250.528-592.896-590.88-592.896zm.287-327.632c-18.112 0-32.77 14.655-32.77 32.768S84.046 68.16 102.16 68.16c470.175 0 852.671 382.496 852.671 852.656 0 18.096 14.656 32.752 32.769 32.752s32.768-14.656 32.768-32.752C1020.352 414.528 608.447 2.624 102.16 2.624zm81.856 656.975c-99.472 0-180.369 81.12-180.369 180.879 0 99.712 80.912 180.912 180.368 180.912 99.456 0 180.4-81.184 180.4-180.911 0-99.76-80.928-180.88-180.399-180.88zm-.001 298.43c-64.608 0-117.168-52.752-117.168-117.568s52.56-117.536 117.168-117.536c64.624 0 117.216 52.72 117.216 117.536S248.638 958.03 184.014 958.03z"},"child":[]}]})(props);
};
function SlFilm (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M800 272.288h64c17.664 0 32-14.336 32-32v-32c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v32c0 17.664 14.336 32 32 32zm0 192h64c17.664 0 32-14.336 32-32v-32c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v32c0 17.664 14.336 32 32 32zm0 192h64c17.664 0 32-14.336 32-32v-32c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v32c0 17.664 14.336 32 32 32zm0 192h64c17.664 0 32-14.336 32-32v-32c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v32c0 17.664 14.336 32 32 32zm-640-576h64c17.664 0 32-14.336 32-32v-32c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v32c0 17.664 14.336 32 32 32zm0 192h64c17.664 0 32-14.336 32-32v-32c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v32c0 17.664 14.336 32 32 32zm0 192h64c17.664 0 32-14.336 32-32v-32c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v32c0 17.664 14.336 32 32 32zm0 192h64c17.664 0 32-14.336 32-32v-32c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v32c0 17.664 14.336 32 32 32zM960 15.904H64c-35.184 0-64 28.816-64 64v864.192c0 35.184 28.816 64 64 64h896c35.184 0 64-28.816 64-64V79.904c0-35.184-28.816-64-64-64zm0 928.193H64V79.905h896v864.192z"},"child":[]}]})(props);
};
function SlFire (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M508.416 1023.28c-241.248 0-412.369-167.28-412.369-397.777 0-122.368 73.376-254.192 76.496-259.712 6.368-11.343 18.88-17.504 31.936-16.063a32.052 32.052 0 0 1 26.88 23.567c.192.752 19.968 74.752 46.064 115.84 17.536 27.649 35.312 47.185 55.312 60.753-13.536-58.656-23.904-146.912-7.024-237.472C372.047 63.84 567.695 4.368 576.08 1.968c10.784-3.088 22.225-.32 30.433 7.151 8.192 7.504 11.936 18.752 9.808 29.665-.32 1.744-32.624 175.776 35.936 324.064 6.223 13.471 14.912 29.12 24.256 44.784 2.656-21.504 6.784-44.368 13.12-66.56 25.152-87.969 90.192-118 92.944-119.217 10.848-4.944 23.504-3.312 32.88 4.032a32.061 32.061 0 0 1 11.68 31.007c-.336 2.16-9.409 62.033 41.536 146.944 46 76.672 59.28 126.368 59.28 221.681 0 230.48-176.432 397.761-419.536 397.761zm-312.721-555.6c-17.568 44.304-35.665 103.246-35.665 157.806 0 193.408 144.192 333.776 348.368 333.776 206 0 355.536-140.368 355.536-333.776 0-83.536-10.32-122.32-50.16-188.752-26.624-44.368-39.777-84.256-46.065-116-6.336 10.256-12.223 22.784-16.527 37.872-19.504 68.193-14.592 147.937-14.527 148.753.944 14.273-7.744 27.473-21.248 32.257s-28.529.064-36.817-11.663c-2.4-3.408-59.312-83.968-84.4-138.24-52.096-112.592-51.216-234.336-45.904-304.464-52.72 30.72-133.664 99.344-159.664 238.912-25.312 135.808 23.872 271.6 24.4 272.943 4.256 11.088 2 23.664-5.808 32.592-7.84 8.88-19.904 12.815-31.536 10.03-3.967-.975-94.032-24.399-152.336-116.286-10.416-16.464-19.76-36.384-27.647-55.76z"},"child":[]}]})(props);
};
function SlFlag (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M680 95.328c-160 0-202.655-96-405.312-96C144-.672 64 98.016 64 98.016v894.656c0 17.665 14.336 32 32 32s32-14.335 32-32V584.8c33.76-21.776 80.336-41.472 138.688-41.472 202.656 0 261.312 96 421.312 96s272-96 272-96v-544s-120 96-280 96zM896.001 510.72c-36.16 23.584-112.784 64.606-208 64.606-62.912 0-105.84-17.263-160.224-39.135-66.272-26.64-141.408-56.864-261.088-56.864-54.688 0-101.072 13.76-138.688 32.16V124.017c24.096-21.92 76.624-60.688 146.688-60.688 94.112 0 147.088 22.848 203.184 47.008 55.872 24.08 113.664 48.992 202.128 48.992 85.248 0 160.128-23.568 216-48.912V510.72z"},"child":[]}]})(props);
};
function SlFolderAlt (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M960.16 208h-480l-96-96h-320c-35.344 0-64 28.656-64 64v160h-.304v64H.16v448c0 35.344 28.656 64 64 64h896c35.344 0 64-28.656 64-64V272c0-35.344-28.656-64-64-64zM64.145 176h290.75l78.624 77.248L453.632 272H960.16v64h-896V176h-.016zm-.001 672V400h896v448h-896z"},"child":[]}]})(props);
};
function SlFolder (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M354.752 176l78.624 77.248L453.488 272H960v576H64V176h290.752zM384 112H64c-35.344 0-64 28.656-64 64v672c0 35.344 28.656 64 64 64h896c35.344 0 64-28.656 64-64V272c0-35.344-28.656-64-64-64H480z"},"child":[]}]})(props);
};
function SlFrame (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M224 112H32c-17.664 0-32 14.336-32 32v192c0 17.664 14.336 32 32 32s32-14.336 32-32V176h160c17.664 0 32-14.336 32-32s-14.336-32-32-32zm768 544c-17.664 0-32 14.336-32 32v160H800c-17.664 0-32 14.336-32 32s14.336 32 32 32h192c17.664 0 32-14.336 32-32V688c0-17.664-14.336-32-32-32zM224 848H64V688c0-17.664-14.336-32-32-32S0 670.336 0 688v192c0 17.664 14.336 32 32 32h192c17.664 0 32-14.336 32-32s-14.336-32-32-32zm768-736H800c-17.664 0-32 14.336-32 32s14.336 32 32 32h160v160c0 17.664 14.336 32 32 32s32-14.336 32-32V144c0-17.664-14.336-32-32-32z"},"child":[]}]})(props);
};
function SlGameController (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M743.216 75.552c-25.6-12.016-49.806-23.328-71.838-34.384C614.914 12.88 563.714-.864 514.914-.864c-98.288 0-166.304 56.704-208.96 99.36L99.106 305.568c-110.688 110.8-128.368 223.6-57.265 365.808 11.025 22.08 22.369 46.336 34.369 72.033 64.704 138.384 131.584 281.487 241.056 281.487 3.072 0 6.112-.096 9.216-.336 112.976-8.848 145.023-154.288 173.312-282.592 4.496-20.32 8.751-39.809 13.12-57.28 7.6-30.209 22.56-48.976 63.551-90.064l5.632-5.664 3.472-3.472 9.12-9.088c41.088-41.088 59.856-56.032 90.096-63.664 17.311-4.351 36.752-8.64 57.024-13.088 128.224-28.303 273.6-60.368 282.4-173.52 8.879-114.833-138.465-183.84-280.993-250.576zm215.25 244.783c-6.224 79.776-184.813 103.324-291.102 129.98-47.008 11.872-75.616 36.752-118.784 79.936-3.008 3.007-6.032 6.015-9.088 9.07-3.024 3.025-6.032 6.097-9.057 9.09-43.168 43.215-68 71.807-79.824 118.88-26.672 106.384-50.191 285.168-129.87 291.44a55.54 55.54 0 0 1-4.322.144c-84.544 0-155.68-192.24-218.447-317.664-63.744-127.504-36.433-210.224 45.36-292.096 15.696-15.727 35.215-35.247 59.135-59.182 24.432-24.464 53.487-53.552 87.919-88 23.904-23.936 43.408-43.424 59.12-59.184 50.8-50.848 101.936-80.64 163.92-80.64 37.808 0 79.632 11.056 127.872 35.248 127.456 63.905 323.888 136.48 317.168 222.978zm-479.678 30.94h64v-64h-64v64zm0-96h64v-64h-64v64zm96 0h64v-64h-64v64zm0 96h64v-64h-64v64zM329.893 543.436l24.336-24.336c12-12 12-31.472 0-43.456-12-12-31.44-12-43.44 0l-24.352 24.352-24.352-24.352c-12-12-31.44-12-43.44 0s-12 31.456 0 43.456l24.351 24.352-24.351 24.351c-12 11.985-12 31.44 0 43.44s31.456 12 43.44 0l24.352-24.335 25.056 25.055c12 12 31.44 12 43.44 0s12-31.471 0-43.471z"},"child":[]}]})(props);
};
function SlGhost (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M511.984-.128c-229.216 0-415.681 199.903-415.681 445.6v546.672c0 13.216 8.16 25.088 20.496 29.84 3.712 1.471 7.632 2.16 11.504 2.16 8.848 0 17.536-3.68 23.712-10.527l120.592-133.12 94.431 130.432a31.918 31.918 0 0 0 25.68 13.215h.224a31.98 31.98 0 0 0 25.664-12.912l94.816-127.344 93.184 127.152a31.993 31.993 0 0 0 25.809 13.088 32.028 32.028 0 0 0 25.808-13.055l95.569-130.288 118 132.624c8.816 9.904 22.944 13.376 35.28 8.624 12.4-4.72 20.624-16.624 20.624-29.905V445.456C927.696 199.776 741.2-.128 511.984-.128zm351.711 908.16l-88.402-99.376c-6.432-7.216-15.808-11.311-25.407-10.687a32.105 32.105 0 0 0-24.32 13.024l-93.12 127.008-93.008-126.912A31.975 31.975 0 0 0 513.758 798h-.127a31.935 31.935 0 0 0-25.664 12.912l-94.689 127.152-92-127.088c-5.664-7.807-14.528-12.655-24.16-13.151-.592-.032-1.151-.065-1.743-.065a31.984 31.984 0 0 0-23.712 10.528l-91.376 100.848v-463.68c0-210.4 157.776-381.601 351.68-381.601 193.937 0 351.713 171.184 351.713 381.6V908.03h.015zM671.997 352.16c-35.28 0-63.84 28.592-63.84 63.808 0 35.248 28.56 63.84 63.84 63.84s63.84-28.592 63.84-63.84c0-35.216-28.56-63.808-63.84-63.808zm-320 0c-35.28 0-63.84 28.592-63.84 63.808 0 35.248 28.576 63.84 63.84 63.84s63.84-28.592 63.84-63.84c0-35.216-28.56-63.808-63.84-63.808z"},"child":[]}]})(props);
};
function SlGlobeAlt (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M929.504 414.416c0-168.784-88.978-321.873-237.97-409.569-15.248-9.008-34.88-3.872-43.808 11.376-8.944 15.216-3.872 34.848 11.376 43.808 129.248 76.032 206.4 208.528 206.4 354.368 0 242.368-175.936 418.288-418.319 418.288-54.192 0-106.784-10.16-156.32-30.16-16.368-6.657-35.056 1.279-41.665 17.662-6.624 16.4 1.28 35.057 17.664 41.665 57.216 23.12 117.872 34.848 180.32 34.848.193 0 .385-.015.578-.015v63.007h-92.928c-18.464 0-33.44 14.304-33.44 31.952s14.976 31.937 33.44 31.937H607.68c18.464 0 33.44-14.304 33.44-31.936 0-17.664-14.976-31.952-33.44-31.952h-96.384v-66.8c245.808-28.559 418.208-220.91 418.208-478.478zm-130.13 2.879c0-194.656-157.744-353.408-352.4-353.408-194.688 0-352.465 158.752-352.465 353.408s157.776 351.44 352.465 351.44c194.656 0 352.4-156.784 352.4-351.44zm-640.88 0c0-159.024 129.408-289.408 288.464-289.408 159.024 0 288.4 130.368 288.4 289.408s-129.376 287.44-288.4 287.44c-159.056 0-288.464-128.4-288.464-287.44z"},"child":[]}]})(props);
};
function SlGlobe (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M1025.02 512c0-272.016-213.663-495.104-482.319-511.023-5.536-.608-11.088-1.009-16.72-1.009-1.664 0-3.328.176-4.992.224-2.992-.048-5.968-.224-8.992-.224C229.117-.032-1.026 229.664-1.026 512s230.144 512.032 513.023 512.032c3.024 0 6-.176 9.008-.24 1.664.064 3.328.24 4.992.24 5.632 0 11.184-.4 16.72-1.009 268.64-15.92 482.304-238.976 482.303-511.023zm-95.451 164.832c-17.632-5.12-61.92-16.24-140.064-25.392 6.464-44.192 10-90.896 10-139.44 0-38.256-2.208-75.343-6.288-111.008 99.008-11.824 142.384-26.72 145.296-27.745l-11.92-33.584c22.24 53.088 34.56 111.296 34.56 172.336 0 58.193-11.28 113.761-31.583 164.833zM285.488 512.001c0-35.808 2.37-70.77 6.705-104.401 51.888 4.08 113.936 7.088 186.863 7.792v222.064c-70.992.688-131.664 3.568-182.688 7.473-7.04-42.193-10.88-86.88-10.88-132.928zM542.945 68.223c78.464 22.736 145.648 131.695 175.744 276.111-48.368 3.856-106.624 6.673-175.744 7.33V68.223zm-63.886.783V351.63c-68.368-.688-126.88-3.473-176.063-7.232C333.7 201.79 401.428 93.646 479.059 69.006zm0 632.223l.001 253.743c-72.4-22.976-136.192-118.575-169.36-247.023 47.76-3.504 104.096-6.063 169.359-6.72zm63.888 254.543l-.001-254.56c65.952.623 122.064 3.28 169.217 6.928-32.608 130.128-96 226.416-169.216 247.632zm-.001-318.32l.001-222.032c73.311-.688 134.991-3.776 186.191-8a844.922 844.922 0 0 1 6.496 104.592c0 46.128-3.712 90.864-10.528 133.12-50.416-4.08-110.8-7.008-182.16-7.68zm371.858-323.52c-9.664 3.008-50.063 14.48-131.023 24.032-18.048-95.952-50.672-177.968-93.12-237.168C788.197 143.18 867.797 219.1 914.805 313.932zM358.82 90.589c-52.208 59.952-94.832 146.161-118.096 248.113-72.48-7.856-115.921-17.089-133.312-21.281 50.72-104.64 141.04-186.752 251.408-226.832zM83.637 377.182c12.32 3.344 58.913 14.941 145.553 24.525a795.86 795.86 0 0 0-7.68 110.305c0 48.273 4.368 94.721 12.24 138.688-74.4 8.033-120.16 17.649-140.688 22.609-19.44-50.096-30.208-104.447-30.208-161.312 0-46.96 7.312-92.256 20.783-134.815zm37.457 355.166c23.264-4.944 64.912-12.464 126.592-18.928 24.288 89.712 63.792 165.616 111.136 219.968-101.12-36.72-185.296-108.752-237.728-201.04zM690.662 923.18c38.224-53.264 68.48-125.024 87.296-208.801 63.408 7.28 103.216 15.792 123.296 20.864-48.016 83.072-121.855 149.393-210.592 187.937z"},"child":[]}]})(props);
};
function SlGraduation (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M990.848 696.304V438.16l16.096-8.496c10.464-5.44 17.055-16.225 17.183-28.032.128-11.777-6.256-22.689-16.592-28.368l-481.44-257.6c-9.631-5.28-21.28-5.249-30.976.095l-478.8 257.92C6.126 379.36-.177 390.143-.113 401.84s6.496 22.4 16.817 27.97l210.384 111.983c-2.64 4.656-4.272 9.968-4.272 15.696v270.784c0 9.12 3.905 17.84 10.72 23.904 6.945 6.16 73.441 60.096 276.753 60.096 202.592 0 270.88-50.976 278-56.784 7.44-6.064 11.744-15.152 11.744-24.784V552.976c0-4.496-.944-8.768-2.608-12.64l129.424-68.369V696.48c-18.976 11.104-31.84 31.472-31.84 55.024 0 35.344 28.656 64 64 64s64-28.656 64-64c0-23.697-13.04-44.145-32.16-55.2zM736.031 812.368c-25.152 12.096-91.712 35.904-225.744 35.904-134.88 0-199.936-25.344-223.472-37.536V573.6l207.808 110.624a31.896 31.896 0 0 0 15.184 3.84 31.675 31.675 0 0 0 14.816-3.664l211.408-111.664v239.632zM510.063 619.81l-411.6-218.561 412.32-220.976 413.6 220.336z"},"child":[]}]})(props);
};
function SlGraph (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M944 224c-44.192 0-79.999 35.824-79.999 80 0 9.072 1.84 17.632 4.607 25.76L673.6 497.68C659.92 486.784 642.848 480 624 480c-21.743 0-41.407 8.736-55.808 22.816l-152.752-76.48C412.465 384.848 378.241 352 336 352c-44.175 0-80 35.824-80 80 0 12.096 2.88 23.44 7.68 33.712L107.936 645.296C99.2 642.032 89.872 640 80 640c-44.176 0-80 35.824-80 80s35.824 80 80 80 80-35.824 80-80c0-10.64-2.176-20.767-5.952-30.048l158.272-181.92C319.856 510.368 327.696 512 336 512c23.28 0 44.047-10.112 58.671-26l149.408 74.912C544.608 604.656 580.127 640 624 640c44.193 0 80-35.824 80-80 0-1.424-.336-2.752-.416-4.16L911.68 377.072C921.584 381.456 932.463 384 944 384c44.193 0 80-35.808 80-80 0-44.176-35.807-80-79.999-80z"},"child":[]}]})(props);
};
function SlGrid (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M960 1024H640c-35.344 0-64-28.656-64-64V640c0-35.344 28.656-64 64-64h320c35.344 0 64 28.656 64 64v320c0 35.344-28.656 64-64 64zm0-384H640v320h320V640zm0-192H640c-35.344 0-64-28.656-64-64V64c0-35.344 28.656-64 64-64h320c35.344 0 64 28.656 64 64v320c0 35.344-28.656 64-64 64zm0-384H640v320h320V64zm-576 960H64c-35.344 0-64-28.656-64-64V640c0-35.344 28.656-64 64-64h320c35.344 0 64 28.656 64 64v320c0 35.344-28.656 64-64 64zm0-384H64v320h320V640zm0-192H64c-35.344 0-64-28.656-64-64V64C0 28.656 28.656 0 64 0h320c35.344 0 64 28.656 64 64v320c0 35.344-28.656 64-64 64zm0-384H64v320h320V64z"},"child":[]}]})(props);
};
function SlHandbag (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M1022.74 942.64l-83.407-503.777c-7.44-65.312-66.977-118.432-132.721-118.432h-70.656v-85.28c0-130.16-92.848-236.033-222.976-236.033-130.096 0-224.943 105.872-224.943 236.032v85.28h-76.672c-65.744 0-125.28 53.12-132.528 117.057l-77.28 504.16c-2.976 26.56 2.224 47.503 15.408 62.288 12.431 13.904 30.527 20.976 53.743 20.976h873.568c32.912 0 51.776-13.216 61.84-24.32 9.216-10.208 19.648-28.144 16.624-57.951zM352.049 235.135c0-94.848 66.127-172.031 160.943-172.031 94.816 0 158.977 77.184 158.977 172.031v85.28h-319.92zm595.119 725.311l-872.498.45c-5.504 0-11.008-2.945-9.712-10.689l77.248-504.096c3.84-33.44 35.504-61.68 69.152-61.68h76.689v72.927c-19.072 11.072-32.048 31.488-32.048 55.137 0 35.344 28.656 64 64 64s64-28.656 64-64c0-23.616-12.928-44-31.952-55.088v-72.992H671.95v72.992c-19.008 11.088-31.952 31.488-31.952 55.088 0 35.344 28.656 64 64 64s64-28.656 64-64c0-23.649-12.976-44.065-32.048-55.153v-72.927h70.656c33.664 0 65.313 28.256 69.408 63.44l83.344 503.28c.4 4.095-2.815 9.31-12.191 9.31z"},"child":[]}]})(props);
};
function SlHeart (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M287.984 114.16c31.376 0 88.094 15.008 180.094 105.616l45.616 44.912 44.928-45.632c63.872-64.896 131.84-105.2 177.376-105.2 61.408 0 109.809 21.008 157.009 68.096 44.464 44.368 68.992 103.36 68.992 166.112.032 62.784-24.448 121.824-69.408 166.672-3.664 3.712-196.992 212.304-358.96 387.104-7.632 7.248-16.352 8.32-20.991 8.32-4.576 0-13.2-1.024-20.8-8.096-39.472-43.905-325.552-362-358.815-395.232C88.497 462.416 64 403.376 64 340.608c.015-62.752 24.511-121.728 69.04-166.144 43.295-43.264 93.984-60.304 154.944-60.304zm-.002-64c-76.528 0-144 22.895-200.176 79.008-117.072 116.768-117.072 306.128 0 422.96 33.424 33.44 357.855 394.337 357.855 394.337 18.48 18.496 42.753 27.68 66.96 27.68 24.225 0 48.4-9.184 66.912-27.68 0 0 354.88-383.024 358.656-386.85 117.04-116.88 117.04-306.24 0-423.007-58.112-58-123.024-86.784-202.208-86.784-75.648 0-160 60.32-223.008 124.32C447.981 110.159 366.237 50.16 287.981 50.16z"},"child":[]}]})(props);
};
function SlHome (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M1016.7 513.36L536.331 10.192a31.924 31.924 0 0 0-23.088-9.84 32.038 32.038 0 0 0-23.088 9.84L7.307 513.344c-12.24 12.752-11.808 32.992.944 45.248 12.752 12.224 32.992 11.872 45.248-.944l43.007-44.832v478.832c0 17.68 14.336 32 32 32h223.552c17.632 0 31.936-14.256 32-31.905l1.008-319.664h254.992v319.568c0 17.68 14.32 32 32 32H895.53c17.68 0 32-14.32 32-32V512.655l42.992 45.04a31.997 31.997 0 0 0 23.09 9.84c7.967 0 15.967-2.944 22.16-8.944 12.736-12.224 13.152-32.48.928-45.232zm-153.165-58.544v504.831H704.063V640.095c0-17.68-14.32-32-32-32h-318.88c-17.632 0-31.936 14.256-32 31.904l-1.008 319.664H160.511V454.815c0-2.64-.416-5.168-1.008-7.632L513.263 78.56l351.424 368.208c-.688 2.592-1.152 5.264-1.152 8.048z"},"child":[]}]})(props);
};
function SlHourglass (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M833.056 64.608h-64.465v215.408c0 104.384-56.656 183.359-178.097 245.199 126.064 63.808 179.104 142.159 179.104 259.071 0 76.128-.336 140-.592 175.12h64.065c17.68 0 32 14.288 32 31.968s-14.32 32-32 32H190.943c-17.68 0-32-14.32-32-32s14.32-31.968 32-31.968h65.935c-.24-35.12-.591-99.008-.591-175.12 0-116.912 52.288-195.248 178.145-259.056C313.2 463.39 257.295 384.415 257.295 280.031V64.607h-66.352c-17.68 0-32-14.304-32-32 0-17.664 14.32-31.984 32-31.984h642.128c17.68 0 32 14.32 32 31.984-.016 17.696-14.32 32-32.016 32zm-512.785 719.68c0 76.288.353 140.224.593 175.12H705.04c.223-34.912.592-98.848.592-175.12 0-89.008-33.12-158.032-193.185-224.4-160.016 66.368-192.176 135.393-192.176 224.4zm384.352-719.68H321.264v215.408c0 61.376 20.64 140.416 191.168 210.528 170.56-70.112 192.191-149.152 192.191-210.528V64.608z"},"child":[]}]})(props);
};
function SlInfo (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M576 736l-32-.001v-286c0-.336-.096-.656-.096-1.008s.096-.655.096-.991c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32s14.336 32 32 32h32v256h-32c-17.664 0-32 14.336-32 32s14.336 32 32 32h128c17.664 0 32-14.336 32-32s-14.336-32-32-32zm-64-384.001c35.344 0 64-28.656 64-64s-28.656-64-64-64-64 28.656-64 64 28.656 64 64 64zm0-352c-282.768 0-512 229.232-512 512 0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512 0-282.768-229.216-512-512-512zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01z"},"child":[]}]})(props);
};
function SlKey (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M655.696 0C496.64 0 367.693 129.154 367.693 288.467c0 71.408 26.032 136.624 68.944 187.008-8.832-.544-17.84 2.432-24.591 9.184L89.662 809.043c-12.481 12.496-12.481 32.768 0 45.249.24.24.512.383.768.624.08.08.128.175.208.255l156.912 159.904c12.48 12.497 32.753 12.497 45.25 0s12.495-32.768 0-45.249L157.326 831.762l82.496-83.007 135.728 138.32c12.48 12.496 32.753 12.496 45.25 0s12.48-32.769 0-45.25L284.943 703.379l172.384-173.472c6.672-6.672 9.664-15.536 9.216-24.273 50.624 44.288 116.672 71.313 189.168 71.313 159.056 0 288-129.152 288-288.48C943.696 129.154 814.769 0 655.696 0zm-.003 512.002c-123.248 0-224-100.272-224-224 0-123.744 100.752-224 224-224s224 100.256 224 224c0 123.728-100.736 224-224 224z"},"child":[]}]})(props);
};
function SlLayers (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M21.84 301.808l475.09 258.72a32.093 32.093 0 0 0 15.312 3.904 31.99 31.99 0 0 0 15.184-3.84l480.096-258.72c10.464-5.631 16.975-16.624 16.815-28.528a32.088 32.088 0 0 0-17.504-28.16L531.713 3.904c-9.055-4.592-19.744-4.624-28.88-.064L22.785 245.12c-10.624 5.343-17.44 16.16-17.632 28.064s6.256 22.944 16.687 28.624zM517.153 68.287l406.159 206.271L512.336 496.03 106.16 274.846zm484.187 412.031l-94.974-48.225-68.56 36.976 80 40.624-410.96 221.456-406.191-221.184 85.311-42.88-68.368-37.248-100.32 50.4c-10.624 5.344-17.44 16.16-17.633 28.065s6.256 22.944 16.688 28.624l475.088 258.72a32.092 32.092 0 0 0 15.312 3.903 31.99 31.99 0 0 0 15.184-3.84l480.096-258.72c10.464-5.631 16.975-16.624 16.815-28.528a31.996 31.996 0 0 0-17.487-28.143zm.01 223.999l-89.966-44.224-68.56 36.976 75.008 36.624-410.976 221.456-406.192-221.184 79.312-35.872-68.368-37.248-94.32 43.408C6.662 709.597-.154 720.413-.346 732.318s6.255 22.944 16.687 28.624l475.088 258.72a32.092 32.092 0 0 0 15.313 3.903 31.99 31.99 0 0 0 15.183-3.84l480.096-258.72c10.464-5.632 16.976-16.624 16.816-28.528a32.002 32.002 0 0 0-17.488-28.16z"},"child":[]}]})(props);
};
function SlLike (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M608.544 1023.744c-290.832 0-293.071-12.062-329.087-39.183-19.104-14.368-55.151-24.32-186.815-32.896-9.552-.624-18.64-4.288-24.735-11.68-2.8-3.408-68.592-99.36-68.592-253.04 0-151.44 47.088-220.465 49.103-223.665a31.965 31.965 0 0 1 27.12-15.04c108.112 0 257.984-138 358.736-378.896C451.698 27.68 455.298.272 519.298.272c36.4 0 77.2 26.064 97.344 59.505 41.328 68.32 20.335 215.057.927 293.473 66-.528 185.472-1.425 242.32-1.425 79.072 0 131.407 47.152 132.991 116.08.529 22.752-2.464 51.808-9.04 66.848 17.408 17.36 39.857 43.536 40.832 77.248 1.216 43.52-27.28 76.655-45.472 95.663 4.175 12.656 12.527 29.44 11.71 49.505-2 49.344-40.095 81.136-63.823 97.727 1.968 13.504 3.504 38.976-.832 58.672-17.12 78.609-132.4 110.177-317.712 110.177zM109.617 886.77c114.688 9.489 175.998 22.336 208.334 46.672 25.024 18.848 21.168 26.32 290.592 26.32 82.176 0 242.896-3.424 255.216-59.84 4.896-22.56-18.895-44.735-18.976-44.911-6.496-16.032.737-34.849 16.577-41.777.255-.128 64.143-23.007 65.6-58.72.96-22.831-14.72-36.543-15.072-37.12-9.328-14.463-5.92-34.303 8.224-44.16.16-.128 41.551-25.215 40.543-59.423-.784-27.168-36.576-46.289-37.664-46.928-8-4.576-13.824-12.496-15.648-21.552-1.792-9.04.224-18.528 5.84-25.872 0 0 16.272-25.856 15.68-50.112-1.168-51.92-57.007-53.552-68.992-53.552-80.72 0-288.03.816-288.03.816-11.184.048-20.864-5.232-26.88-14.176-6-8.945-6.448-20.048-2.928-30.224 31.263-90.032 48.72-231.28 19.727-279.536-8.544-14.224-10.496-28.432-42.496-28.432-4.432 0-14.991 3.504-25.999 29.744-106.928 255.84-266.64 403.824-397.456 417.168-11.28 25.728-32.496 79.04-32.496 175.775 0 98.737 31.28 175.12 46.305 199.84z"},"child":[]}]})(props);
};
function SlLink (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M295.664 732.448c6.256 6.256 14.432 9.376 22.624 9.376s16.368-3.12 22.624-9.376L728.576 341.76c12.496-12.496 12.496-32.752 0-45.248s-32.752-12.496-45.248 0L295.664 687.2c-12.512 12.496-12.512 32.752 0 45.248zm180.208-68.143c10.576 46.624-.834 92.4-36.866 128.432L309.758 917.985c-27.2 27.184-63.36 42.16-101.824 42.16s-74.624-14.976-101.808-42.16c-56.144-56.16-56.144-147.536-.336-203.344l126.256-130.256c27.2-27.184 63.36-42.176 101.824-42.176 13.152 0 25.824 2.352 38.176 5.743L421.998 498c-27.872-13.024-57.952-19.792-88.128-19.792-53.233 0-106.465 20.32-147.073 60.929L60.86 669.073c-81.216 81.216-81.216 212.912 0 294.16 40.608 40.624 93.84 60.912 147.073 60.912s106.465-20.288 147.073-60.912L483.95 838.289c62.128-62.128 75.568-148.72 42.656-224.72zM963.134 60.784C922.51 20.176 869.294-.145 816.077-.145c-53.248 0-106.496 20.32-147.088 60.929L540.061 185.728c-64.4 64.4-77.536 160.465-39.792 238.033l49.664-49.648c-14.704-49.104-3.408-104.336 35.056-142.832l129.248-125.248c27.216-27.184 63.344-42.176 101.84-42.176 38.431 0 74.624 14.992 101.808 42.176 56.128 56.16 56.128 147.536.32 203.344L788.957 438.625c-27.183 27.183-63.376 42.159-101.808 42.159-9.808 0-18.431.992-27.84-.928l-50.975 51.008c25.471 10.592 51.632 13.935 78.815 13.935 53.216 0 106.432-20.303 147.056-60.927L963.15 354.928c81.2-81.216 81.2-212.896-.015-294.144z"},"child":[]}]})(props);
};
function SlList (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M96 448H32c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.664-14.336-32-32-32zm896 32H320c-17.664 0-32 14.336-32 32s14.336 32 32 32h672c17.664 0 32-14.336 32-32s-14.336-32-32-32zM96 704H32c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.664-14.336-32-32-32zm896 32H320c-17.664 0-32 14.336-32 32s14.336 32 32 32h672c17.664 0 32-14.336 32-32s-14.336-32-32-32zM96 192H32c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.664-14.336-32-32-32zm224 96h672c17.664 0 32-14.336 32-32s-14.336-32-32-32H320c-17.664 0-32 14.336-32 32s14.336 32 32 32z"},"child":[]}]})(props);
};
function SlLocationPin (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M515.664-.368C305.76-.368 128 178.4 128 390.176c0 221.76 206.032 448.544 344.624 607.936.528.64 22.929 25.52 50.528 25.52h2.449c27.6 0 49.84-24.88 50.399-25.52 130.064-149.52 320-396.048 320-607.936C896 178.4 757.344-.368 515.664-.368zm12.832 955.552c-1.12 1.12-2.753 2.369-4.193 3.409-1.472-1.008-3.072-2.288-4.255-3.408l-16.737-19.248C371.92 785.2 192 578.785 192 390.176c0-177.008 148.224-326.56 323.664-326.56 218.528 0 316.336 164 316.336 326.56 0 143.184-102.128 333.296-303.504 565.008zm-15.377-761.776c-106.032 0-192 85.968-192 192s85.968 192 192 192 192-85.968 192-192-85.968-192-192-192zm0 320c-70.576 0-129.473-58.816-129.473-129.408 0-70.576 57.424-128 128-128 70.624 0 128 57.424 128 128 .032 70.592-55.903 129.408-126.527 129.408z"},"child":[]}]})(props);
};
function SlLockOpen (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M800 385.104l-456.96.001-16.56-74.273C298.24 205.456 347.296 100.4 459.568 70.32c111.136-29.776 209.088 33.936 237.824 141.12l13.6 53.967c4.576 17.073 22.112 27.2 39.2 22.624 17.072-4.576 27.2-22.112 22.624-39.184L759.2 194.879C721.216 53.039 588.815-30.561 443.008 8.495 296.64 47.71 227.296 187.919 264.672 327.407l12.864 57.696H224c-70.592 0-128 57.408-128 128v384c0 70.592 57.408 128 128 128h576c70.592 0 128-57.408 128-128v-384c0-70.592-57.408-128-128-128zm64 512c0 35.28-28.72 64-64 64H224c-35.28 0-64-28.72-64-64v-384c0-35.28 28.72-64 64-64h576c35.28 0 64 28.72 64 64v384zm-352-320c-35.344 0-64 28.656-64 64 0 23.632 12.96 44.032 32 55.12v104.88c0 17.664 14.336 32 32 32s32-14.336 32-32v-104.88c19.04-11.088 32-31.504 32-55.12 0-35.344-28.656-64-64-64z"},"child":[]}]})(props);
};
function SlLock (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M800 384h-32V261.872C768 115.024 661.744 0 510.816 0 359.28 0 256 117.472 256 261.872V384h-32c-70.592 0-128 57.408-128 128v384c0 70.592 57.408 128 128 128h576c70.592 0 128-57.408 128-128V512c0-70.592-57.408-128-128-128zM320 261.872C320 152.784 394.56 64 510.816 64 625.872 64 704 150.912 704 261.872V384H320V261.872zM864.001 896c0 35.28-28.72 64-64 64h-576c-35.28 0-64-28.72-64-64V512c0-35.28 28.72-64 64-64h576c35.28 0 64 28.72 64 64v384zm-352-320c-35.344 0-64 28.656-64 64 0 23.632 12.96 44.032 32 55.12V800c0 17.664 14.336 32 32 32s32-14.336 32-32V695.12c19.04-11.088 32-31.504 32-55.12 0-35.344-28.656-64-64-64z"},"child":[]}]})(props);
};
function SlLogin (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M532.528 661.408c-12.512 12.496-12.513 32.752-.001 45.248 6.256 6.256 14.432 9.376 22.624 9.376s16.368-3.12 22.624-9.376l189.008-194L577.775 318.64c-12.496-12.496-32.752-12.496-45.248 0-12.512 12.496-12.512 32.752 0 45.248l115.744 115.76H31.839c-17.68 0-32 14.336-32 32s14.32 32 32 32h618.448zM960.159 0h-576c-35.36 0-64.017 28.656-64.017 64v288h64.432V103.024c0-21.376 17.344-38.72 38.72-38.72h496.704c21.408 0 38.72 17.344 38.72 38.72l1.007 818.288c0 21.376-17.311 38.72-38.72 38.72H423.31c-21.376 0-38.72-17.344-38.72-38.72V670.944l-64.432.08V960c0 35.344 28.656 64 64.017 64h576c35.344 0 64-28.656 64-64V64c-.016-35.344-28.672-64-64.016-64z"},"child":[]}]})(props);
};
function SlLogout (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M116.832 543.664H671.28c17.696 0 32-14.336 32-32s-14.304-32-32-32H118.832l115.76-115.76c12.496-12.496 12.496-32.752 0-45.248s-32.752-12.496-45.248 0l-189.008 194 189.008 194c6.256 6.256 14.432 9.376 22.624 9.376s16.368-3.12 22.624-9.376c12.496-12.496 12.496-32.752 0-45.248zM959.664 0H415.663c-35.36 0-64 28.656-64 64v288h64.416V103.024c0-21.376 17.344-38.72 38.72-38.72h464.72c21.391 0 38.72 17.344 38.72 38.72l1.007 818.288c0 21.376-17.328 38.72-38.72 38.72H454.816c-21.376 0-38.72-17.344-38.72-38.72V670.944l-64.416.08V960c0 35.344 28.64 64 64 64h543.984c35.36 0 64.016-28.656 64.016-64V64c-.015-35.344-28.671-64-64.015-64z"},"child":[]}]})(props);
};
function SlLoop (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M960 101.84l-896.002.002c-35.344 0-64 28.656-64 64v576c0 35.36 28.656 64 64 64h160c20.496 0 32-26.32 32-31.984v-.016c0-5.824-10.88-32.416-32-32.416h-120.96c-21.376 0-38.72-17.344-38.72-38.72V206.002c0-21.391 17.328-38.72 38.72-38.72l818.272-1.007c21.376 0 38.72 17.328 38.72 38.72V702.69c0 21.376-17.344 38.72-38.72 38.72H518.142l75.984-68.912c9.344-8.944 12.369-23.408 3.025-32.336l-5.472-8.064c-9.376-8.945-24.496-8.945-33.84 0L428.111 750.53c-.192.16-.368.224-.528.368l-8.48 8.096c-4.672 4.431-7.008 10.335-6.976 16.223-.032 5.904 2.288 11.777 6.977 16.288l8.48 8.096c.16.16.368.192.528.336L555.84 915.44c9.344 8.944 24.464 8.944 33.84 0l5.472-8.065c9.344-8.944 6.32-23.44-3.025-32.368l-77.135-69.168H960c35.343 0 64-28.64 64-64v-576c0-35.344-28.657-64-64-64z"},"child":[]}]})(props);
};
function SlMagicWand (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M1020.51 429.376L917.727 275.698l51.152-178.816c3.184-11.216.064-23.28-8.224-31.504-8.256-8.256-20.256-11.311-31.536-8.031l-178.512 52.128L596.319 5.57c-9.712-6.529-22.16-7.313-32.464-1.937-10.369 5.312-17.025 15.871-17.409 27.503l-5.536 185.936-146.496 114.592c-9.183 7.184-13.712 18.816-11.872 30.32s9.808 21.087 20.816 25.023l137.456 49.28c-.928.736-1.904 1.393-2.768 2.257L7.294 969.297c-12.496 12.496-12.496 32.752 0 45.248 6.256 6.256 14.432 9.376 22.624 9.376 8.192 0 16.368-3.12 22.624-9.376l530.752-530.752c2.065-2.064 3.664-4.4 5.04-6.816l53.792 147.552a32.058 32.058 0 0 0 25.152 20.656c1.631.256 3.28.368 4.912.368A32.044 32.044 0 0 0 697.5 633.12l113.776-147.168 183.904-6.56c11.664-.4 22.16-7.12 27.44-17.535 5.264-10.384 4.448-22.848-2.112-32.48zm-226.461-6.83c-9.504.32-18.368 4.882-24.192 12.401l-87.472 113.104-48.976-134.32c-3.248-8.944-10.32-15.936-19.28-19.152l-134.592-48.256 112.624-88.064c7.504-5.872 11.968-14.752 12.288-24.256l4.256-142.944 118.592 79.872a32.192 32.192 0 0 0 26.849 4.191l137.248-40.095-39.344 137.472a32.18 32.18 0 0 0 4.336 26.848l80.56 118.128z"},"child":[]}]})(props);
};
function SlMagnet (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M960.288 60.176V31.168c0-17.68-14.32-32-32-32H703.664c-17.68 0-32 14.32-32 32v130.656c0 .048.032.096.032.144v397.52c0 96.32-54.336 174.656-150.656 174.656s-168.656-78.336-168.656-174.656V60.176h-.095V31.168c0-17.68-14.32-32-32-32H95.665c-17.68 0-32 14.32-32 32v130.656c0 .656.335 1.2.368 1.84V574.16c0 248.912 198.784 450.656 447.664 450.656S960.353 823.072 960.353 574.16V60.176zm-64 2.992v128.336H736.032V63.168h160.256zm-608 0v128.336H128.032V63.168h160.256zM511.68 960.832c-213.216 0-383.663-173.472-383.663-386.655V255.505h160.336v303.984c0 131.808 100.848 238.655 232.655 238.655S735.68 691.296 735.68 559.489V255.505h160.656v318.672c0 213.184-171.424 386.655-384.656 386.655z"},"child":[]}]})(props);
};
function SlMagnifierAdd (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M1014.62 969.04L731.594 684.273c60.608-72.4 97.089-165.761 97.089-267.713C828.683 186.496 643.179-.001 413.13-.001S-3.413 186.495-3.413 416.543 183.083 833.087 413.13 833.087c105.008 0 200.672-38.96 273.696-103.072l282.528 284.304c12.496 12.496 32.769 12.496 45.249 0 12.512-12.512 12.512-32.768.016-45.28zM412.59 768.001c-193.552 0-352-158.448-352-352s158.448-352 352-352 352 158.448 352 352-158.448 352-352 352zm160-384h-128v-128c0-17.664-14.336-32-32-32s-32 14.336-32 32v128h-128c-17.664 0-32 14.336-32 32s14.336 32 32 32h128v128c0 17.664 14.336 32 32 32s32-14.336 32-32v-128h128c17.664 0 32-14.336 32-32s-14.32-32-32-32z"},"child":[]}]})(props);
};
function SlMagnifierRemove (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M1014.62 969.04L731.594 684.273c60.608-72.4 97.089-165.761 97.089-267.713C828.683 186.496 643.179-.001 413.13-.001S-3.413 186.495-3.413 416.543 183.083 833.087 413.13 833.087c105.008 0 200.672-38.96 273.696-103.072l282.528 284.304c12.496 12.496 32.769 12.496 45.249 0 12.512-12.512 12.512-32.768.016-45.28zM412.59 768.001c-193.552 0-352-158.448-352-352s158.448-352 352-352 352 158.448 352 352-158.448 352-352 352zm160-384h-320c-17.664 0-32 14.336-32 32s14.336 32 32 32h320c17.664 0 32-14.336 32-32s-14.32-32-32-32z"},"child":[]}]})(props);
};
function SlMagnifier (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M1014.64 969.04L703.71 656.207c57.952-69.408 92.88-158.704 92.88-256.208 0-220.912-179.088-400-400-400s-400 179.088-400 400 179.088 400 400 400c100.368 0 192.048-37.056 262.288-98.144l310.496 312.448c12.496 12.497 32.769 12.497 45.265 0 12.48-12.496 12.48-32.752 0-45.263zM396.59 736.527c-185.856 0-336.528-150.672-336.528-336.528S210.734 63.471 396.59 63.471c185.856 0 336.528 150.672 336.528 336.528S582.446 736.527 396.59 736.527z"},"child":[]}]})(props);
};
function SlMap (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M993.184 135.008L672.223 1.939l-319.44 126.432L30.815 2.003c-2.752-.816-5.44-1.12-7.968-1.12C9.712.818 0 10.626 0 25.378v830c0 17.568 13.872 35.872 30.816 40.56l322.336 127.184L672.16 893.618l321.024 126.128c2.752.752 5.44 1.12 7.969 1.12 13.12 0 22.847-9.744 22.847-24.495V175.635c0-17.569-13.872-35.89-30.816-40.625zm-609.185 46.131l256-100.304v761.504l-256 101.184V181.139zm-320-94.448l256 94.577v761.76l-256-104.272V86.692zm896 851.314l-256-96.384V81.797l256 110.384v745.824z"},"child":[]}]})(props);
};
function SlMenu (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M27 193.6c-8.2-8.2-12.2-18.6-12.2-31.2s4-23 12.2-31.2S45.6 119 58.2 119h912.4c12.6 0 23 4 31.2 12.2s12.2 18.6 12.2 31.2-4 23-12.2 31.2-18.6 12.2-31.2 12.2H58.2c-12.6 0-23-4-31.2-12.2zm974.8 285.2c8.2 8.2 12.2 18.6 12.2 31.2s-4 23-12.2 31.2-18.6 12.2-31.2 12.2H58.2c-12.6 0-23-4-31.2-12.2S14.8 522.6 14.8 510s4-23 12.2-31.2 18.6-12.2 31.2-12.2h912.4c12.6 0 23 4 31.2 12.2zm0 347.4c8.2 8.2 12.2 18.6 12.2 31.2s-4 23-12.2 31.2-18.6 12.2-31.2 12.2H58.2c-12.6 0-23-4-31.2-12.2S14.8 870 14.8 857.4s4-23 12.2-31.2S45.6 814 58.2 814h912.4c12.6 0 23 4.2 31.2 12.2z"},"child":[]}]})(props);
};
function SlMicrophone (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M510.88 704h7.6C607.44 704 672 638.4 672 548.032V166.624C672 73.184 604.56 0 518.466 0h-7.584C423.264 0 352 74.752 352 166.624v381.408C352 636.944 420.304 704 510.88 704zM416 166.624C416 110.032 458.56 64 510.88 64h7.6C569.504 64 608 108.128 608 166.624v381.408C608 603.024 572.032 640 518.464 640h-7.584c-55.872 0-94.88-37.808-94.88-91.968zM800 352c-17.68 0-32 14.336-32 32v133.072c0 190.4-67.968 282.929-207.744 282.929H465.12c-182.8 0-209.12-153.84-209.12-282.928V384.001c0-17.664-14.336-32-32-32s-32 14.336-32 32v133.072c0 220.496 91.888 346.928 273.12 346.928H480v96H320c-17.664 0-32 14.336-32 32s14.336 32 32 32h384c17.664 0 32-14.336 32-32s-14.336-32-32-32H544v-96h16.256C684.224 864.001 832 803.809 832 517.072V384c0-17.664-14.32-32-32-32z"},"child":[]}]})(props);
};
function SlMinus (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M512 0c283 0 512 229 512 512s-229 512-512 512S0 795 0 512 229 0 512 0zm0 961c247 0 448-202 448-449S759 64 512 64 64 265 64 512s201 449 448 449zm-35-417H288c-18 0-32-14-32-32s14-32 32-32h448c18 0 32 14 32 32s-14 32-32 32H477z"},"child":[]}]})(props);
};
function SlMouse (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M513.584 0C355.456 0 224.08 128.225 224.08 286.337v451.312c0 158.128 131.376 286.352 289.504 286.352s286.352-128.224 286.352-286.336V286.337C799.936 128.225 671.712.001 513.584.001V0zm222.352 737.665c0 122.592-99.742 222.336-222.351 222.336S288.08 860.257 288.08 737.665V286.337c0-122.592 102.912-222.336 225.504-222.336s222.352 99.744 222.352 222.336v451.328zM512.338 192.001c-17.664 0-32 14.336-32 32v160c0 17.664 14.336 32 32 32s32-14.336 32-32v-160c0-17.664-14.336-32-32-32z"},"child":[]}]})(props);
};
function SlMusicToneAlt (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M991.728 705.408c.016-.56.16-1.071.16-1.63V36.752c.384-3.504.256-7.12-.576-10.752C988.576 11.09 975.583-.222 959.887-.222c-5.888 0-11.344 1.696-16.08 4.48L345.935 159.906c-10.768 2.672-18.752 10.72-22.032 20.672-2.48 4.544-4 9.664-4 15.2v572.544c-30.464-20.384-69.408-32.656-111.872-32.656-97.536 0-176.64 64.608-176.64 144.272 0 79.68 79.103 144.304 176.64 144.304 97.568 0 176.608-64.608 176.608-144.305 0-4.065-.336-8.065-.736-12.049V216.144l544-141.6v533.76c-30.449-20.383-69.409-32.656-111.872-32.656-97.537 0-176.64 64.624-176.64 144.272 0 79.68 79.103 144.304 176.64 144.304 97.568 0 176.608-64.608 176.608-144.305-.016-4.912-.32-9.744-.912-14.511zM208.704 959.952c-66.56 0-112.961-42.191-112.961-79.999 0-37.824 46.384-79.952 112.96-79.952 59.232 0 102.4 33.392 111.185 67.407v.368c0 3.233.624 6.289 1.52 9.216.065.992.225 1.968.225 2.96 0 37.808-46.4 80-112.929 80zm606.991-159.999c-65.968 0-111.953-42.176-111.953-80s45.984-79.952 111.952-79.952c65.952 0 111.937 42.128 111.937 79.952s-45.968 80-111.936 80z"},"child":[]}]})(props);
};
function SlMusicTone (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M852.608 323.296L539.694 10.384c-9.92-9.92-24.672-11.84-36.607-6.016-12.544 4.336-21.6 16.113-21.6 30.128v708.4c-33.92-25.12-78.432-40.528-127.376-40.528-106.064 0-192.112 71.776-192.112 160.288 0 88.544 86.048 160.336 192.112 160.336 106.112 0 192.08-71.776 192.08-160.336 0-3.92-.368-7.76-.704-11.632V106.688l261.872 261.856c12.48 12.496 32.753 12.496 45.249 0s12.496-32.768 0-45.249zm-499.234 635.28c-75.648 0-128.352-50.544-128.352-95.872s52.72-95.824 128.352-95.824c74.032 0 126 48.4 128.128 92.992v5.68c-2.144 44.576-54.096 93.024-128.128 93.024z"},"child":[]}]})(props);
};
function SlMustache (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M792.848 736.72c-101.344 0-158.865-47.629-196.945-79.148-13.472-11.153-25.727-21.905-36.88-31.665-16.912-14.847-38-33.343-45.344-35.903-.223 0-3.712-.16-3.935-.192-1.168.096-4.144.687-4.448.72-5.072 2.064-23.087 17.568-37.568 30-13.136 11.28-28.111 24.16-45.039 37.376l-3.088 2.368c-43.472 33.935-97.584 76.159-193.152 76.159-70.992 0-140.928-32.128-182.576-83.872-27.92-34.689-57.296-95.025-38.672-185.473 2.256-10.944 10.016-19.904 20.432-23.632 10.48-3.776 22.016-1.712 30.608 5.376.624.464 22.576 17.344 59.057 17.344 18.368 0 37.504-4.336 56.832-12.945 33.135-14.752 56.735-56.127 81.71-84.063 34.176-38.16 72.848-81.408 136.689-81.904 44.048 0 83.792 16.288 119.248 48.496 35.311-32.065 74.767-48.257 117.68-48.257 65.103.496 104.592 43.776 139.439 82 25.44 27.872 49.472 69.216 82.608 83.968 19.328 8.592 38.672 12.943 57.488 12.943 37.872 0 61.504-17.311 62.449-18.063 8.767-6.496 20.319-8.193 30.48-4.225 10.143 4 17.679 12.88 19.711 23.664 17.088 89.44-12.96 149.408-41.184 183.968-42.767 52.4-113.903 84.96-185.6 84.96zM510.733 525.875c.992 0 3.683.095 4.627.19.032 0 4.688.336 4.688.369.336.032 3.008.368 3.296.432 23.153 3.28 44.624 22.128 77.216 50.688 10.704 9.408 22.496 19.744 35.472 30.496 34.784 28.816 78.097 64.656 156.816 64.656 53.311 0 105.743-23.632 136.783-61.68 20.4-24.975 31.009-54.72 31.68-88.784-15.024 4.689-33.28 8.192-54.32 8.192-27.664 0-55.568-6.192-82.976-18.368-45.248-20.095-76.304-69.12-103.68-99.152-34.529-37.872-57.473-61.088-92.081-61.376-46.16 0-75.953 29.056-94.416 50.912-6.033 7.12-14.817 11.216-24.097 11.216-9.28 0-18.08-4.128-24.08-11.248-18.529-21.936-48.416-51.12-93.84-51.12-35.088.257-57.408 23.281-90.992 60.85-27.056 30.223-57.696 79.471-103.231 99.68-27.392 12.191-55.104 18.367-82.304 18.367-20.4 0-38.064-3.408-52.624-8.032-.032 34.72 10.111 64.912 30.335 90.032 29.936 37.153 81.04 60.256 133.439 60.256 74 0 114.896-31.935 154.464-62.815l3.088-2.416c16.048-12.529 30.24-24.752 42.688-35.44 28.512-24.497 47.329-40.69 67.649-44.289.015.016 9.695-1.616 16.4-1.616z"},"child":[]}]})(props);
};
function SlNote (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M799.344 960.288h-736v-800h449.6l64.704-62.336-1.664-1.664H63.344c-35.344 0-64 28.656-64 64v800c0 35.344 28.656 64 64 64h736c35.344 0 64-28.656 64-64V491.632l-64 61.088v407.568zM974.224 41.44C945.344 13.76 913.473-.273 879.473-.273c-53.216 0-92.032 34.368-102.592 44.897-14.976 14.784-439.168 438.353-439.168 438.353-3.328 3.391-5.76 7.535-7.008 12.143-11.488 42.448-69.072 230.992-69.648 232.864-2.976 9.664-.32 20.193 6.8 27.217a26.641 26.641 0 0 0 18.913 7.84c2.752 0 5.52-.4 8.239-1.248 1.952-.656 196.496-63.569 228.512-73.12 4.224-1.248 8.048-3.536 11.216-6.624 20.208-19.936 410.112-403.792 441.664-436.384 32.624-33.664 48.847-68.657 48.223-104.097-.591-35.008-17.616-68.704-50.4-100.128zm-43.791 159.679c-17.808 18.368-157.249 156.16-414.449 409.536l-19.68 19.408c-29.488 9.12-100.097 31.808-153.473 49.024 17.184-56.752 37.808-125.312 47.008-157.743C444.8 466.464 808.223 103.6 822.03 89.968c2.689-2.689 27.217-26.257 57.44-26.257 17.153 0 33.681 7.824 50.465 23.92 20.065 19.248 30.4 37.744 30.689 55.024.32 17.792-9.84 37.456-30.191 58.464z"},"child":[]}]})(props);
};
function SlNotebook (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M849.152 0H211.153c-46 0-66.032 34-66.032 66v127.312h-34.928c-17.311 0-31.344 14.032-31.344 31.345 0 17.311 14.033 31.343 31.344 31.343h34.928v128.752h-31.936c-17.312 0-31.344 14.033-31.344 31.344 0 17.313 14.032 31.345 31.343 31.345h31.936v129.44h-32.624c-17.312 0-31.344 14.032-31.344 31.344s14.032 31.344 31.344 31.344h32.624v128.464h-32.624c-17.312 0-31.344 14.032-31.344 31.343s14.032 31.344 31.344 31.344h32.624V960c0 53.025 41.536 64 64.528 64h639.504c53.025 0 96-42.975 96-96V96c0-53.024-42.96-96-96-96zM209.121 960l-.001-129.279h33.344c17.311 0 31.344-14.032 31.344-31.344s-14.033-31.344-31.344-31.344H209.12V639.569h33.344c17.311 0 31.344-14.033 31.344-31.344s-14.033-31.344-31.344-31.344H209.12V447.44h34.032c17.313 0 31.345-14.032 31.345-31.345 0-17.311-14.032-31.344-31.344-31.344h-34.032V256h31.024c17.312 0 31.344-14.032 31.344-31.343 0-17.313-14.032-31.345-31.344-31.345h-31.024V66c0-.752.064-1.376.16-1.936a28.23 28.23 0 0 1 1.872-.064h510v896H209.121zm672.031-31.999c0 17.664-14.336 32-32 32h-64v-896h64c17.664 0 32 14.336 32 32v832z"},"child":[]}]})(props);
};
function SlOptionsVertical (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M388.8 896.4v-27.198c.6-2.2 1.6-4.2 2-6.4 8.8-57.2 56.4-102.4 112.199-106.2 62.4-4.4 115.2 31.199 132.4 89.199 2.2 7.6 3.8 15.6 5.8 23.4v27.2c-.6 1.8-1.6 3.399-1.8 5.399-8.6 52.8-46.6 93-98.6 104.4-4 .8-8 2-12 3h-27.2c-1.8-.6-3.6-1.6-5.4-1.8-52-8.4-91.599-45.4-103.6-96.8-1.2-5-2.6-9.6-3.8-14.2zm252.4-768.797l-.001 27.202c-.6 2.2-1.6 4.2-1.8 6.4-9 57.6-56.8 102.6-113.2 106.2-62.2 4-114.8-32-131.8-90.2-2.2-7.401-3.8-15-5.6-22.401v-27.2c.6-1.8 1.6-3.4 2-5.2 9.6-52 39.8-86 90.2-102.2 6.6-2.2 13.6-3.4 20.4-5.2h27.2c1.8.6 3.6 1.6 5.4 1.8 52.2 8.6 91.6 45.4 103.6 96.8 1.201 4.8 2.401 9.4 3.601 13.999zm-.001 370.801v27.2c-.6 2.2-1.6 4.2-2 6.4-9 57.4-58.6 103.6-114.6 106-63 2.8-116.4-35.2-131.4-93.8-1.6-6.2-3-12.4-4.4-18.6v-27.2c.6-2.2 1.6-4.2 2-6.4 8.8-57.4 58.6-103.601 114.6-106.2 63-3 116.4 35.2 131.4 93.8 1.6 6.4 3 12.6 4.4 18.8z"},"child":[]}]})(props);
};
function SlOptions (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M899.4 638.2h-27.198c-2.2-.6-4.2-1.6-6.4-2-57.2-8.8-102.4-56.4-106.2-112.199-4.401-62.4 31.199-115.2 89.199-132.4 7.6-2.2 15.6-3.8 23.399-5.8h27.2c1.8.6 3.4 1.6 5.4 1.8 52.8 8.6 93 46.6 104.4 98.6.8 4 2 8 3 12v27.2c-.6 1.8-1.6 3.6-1.8 5.4-8.4 52-45.4 91.599-96.801 103.6-5 1.2-9.6 2.6-14.2 3.8zM130.603 385.8l27.202.001c2.2.6 4.2 1.6 6.4 1.8 57.6 9 102.6 56.8 106.2 113.2 4 62.2-32 114.8-90.2 131.8-7.401 2.2-15 3.8-22.401 5.6h-27.2c-1.8-.6-3.4-1.6-5.2-2-52-9.6-86-39.8-102.2-90.2-2.2-6.6-3.4-13.6-5.2-20.4v-27.2c.6-1.8 1.6-3.6 1.8-5.4 8.6-52.2 45.4-91.6 96.8-103.6 4.8-1.201 9.4-2.401 13.999-3.601zm370.801.001h27.2c2.2.6 4.2 1.6 6.4 2 57.4 9 103.6 58.6 106 114.6 2.8 63-35.2 116.4-93.8 131.4-6.2 1.6-12.4 3-18.6 4.4h-27.2c-2.2-.6-4.2-1.6-6.4-2-57.4-8.8-103.601-58.6-106.2-114.6-3-63 35.2-116.4 93.8-131.4 6.4-1.6 12.6-3 18.8-4.4z"},"child":[]}]})(props);
};
function SlOrganization (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M815 576h145c35 0 64 29 64 64v320c0 35-29 64-64 64H640c-35 0-64-29-64-64V640c0-35 29-64 64-64h113v-38H270v38h114c35 0 64 29 64 64v320c0 35-29 64-64 64H64c-35 0-64-29-64-64V640c0-35 29-64 64-64h144v-60c0-22 28-33 53-33h220v-36H343c-35 0-64-29-64-64V63c0-35 29-64 64-64h320c35 0 64 29 64 64v320c0 35-29 64-64 64H545v37c83 0 134-1 217-1 25 0 53 10 53 33v60zm145 64H640v320h320V640zM663 63H343v320h320V63zM384 640H64v320h320V640z"},"child":[]}]})(props);
};
function SlPaperClip (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M172.72 1007.632c-43.408 0-85.085-17.965-118.301-51.213-73.648-73.888-73.648-194.063-.017-267.903L628.674 78.692c89.6-89.744 226.848-81.68 327.008 18.608 44.88 44.96 70.064 109.776 69.12 177.904-.945 67.409-27.28 131.92-72.289 177.008L518.497 914.26c-12.08 12.945-32.336 13.536-45.231 1.393-12.864-12.16-13.488-32.448-1.36-45.345l434.672-462.752c34-34.064 53.504-82.385 54.223-133.249.72-50.895-17.664-98.88-50.368-131.664-61.44-61.568-161.473-93.808-235.841-19.264L100.336 733.203c-49.376 49.503-49.36 129.008-.64 177.855 22.847 22.864 49.967 34 78.847 32.255 28.576-1.744 57.952-16.4 82.72-41.232L718.19 415.745c16.56-16.592 49.84-57.264 15.968-91.216-19.184-19.216-32.656-18.032-37.087-17.664-12.656 1.12-27.44 9.872-42.784 25.264l-343.92 365.776c-12.144 12.912-32.416 13.536-45.233 1.36-12.88-12.128-13.472-32.448-1.36-45.312L608.32 287.489c27.088-27.216 54.784-41.968 82.976-44.496 22-1.953 54.72 2.736 88.096 36.208 49.536 49.631 43.376 122.432-15.28 181.216L307.184 946.72c-36.48 36.608-80.529 57.872-124.721 60.591-3.248.224-6.496.32-9.744.32z"},"child":[]}]})(props);
};
function SlPaperPlane (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M1004.03 0c-6.096 0-13.52 1.73-22.096 5.361L27.278 410.45c-34.368 14.577-36.544 42.689-4.832 62.449l269.76 168.032c31.712 19.744 73.648 62.08 93.184 94.047l161.712 264.768c9.28 15.184 20.496 22.72 31.28 22.72 11.92 0 23.28-9.152 31.025-27.232l408.256-953.744C1028.718 15.617 1022.415 0 1004.03 0zM325.552 583.922L106.896 447.713l733.616-311.248L368.32 616.657c-14.432-12.8-29.088-24.224-42.768-32.735zM572.72 915.265l-130.432-213.52c-7.696-12.609-17.856-26.05-29.185-39.393l474.384-482.384z"},"child":[]}]})(props);
};
function SlPaypal (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M318.753 855.434H103.101c-8.752 0-17.154-3.85-22.756-10.678s-7.877-15.579-6.302-24.33l138.284-752.16c8.227-41.135 42.01-68.441 84.371-68.441H628.58c133.383 0 223.18 85.246 223.18 212.152 0 127.956-88.222 366.89-300.549 366.89H406.1l-58.463 253.637c-3.152 13.477-15.055 22.93-28.883 22.93zm-180.118-58.991l156.66-.002 58.29-253.637c3.15-13.477 15.054-22.93 28.882-22.93h168.74c168.567 0 241.386-203.75 241.386-307.726 0-94.347-62.84-152.986-164.015-152.986H296.697c-8.227 0-22.756 2.626-26.256 20.48zm282.516 227.73H205.496c-8.752 0-16.979-3.85-22.58-10.502s-8.052-15.58-6.477-24.156l27.658-157.538c2.8-16.105 18.028-26.782 34.131-23.982 16.105 2.801 26.783 18.204 23.982 34.133l-21.53 122.88h156.662l55.84-256.088c2.975-13.653 15.053-23.281 28.881-23.281h168.741c168.566 0 241.385-203.75 241.385-307.725 0-67.742-28.532-114.479-84.546-138.81-14.879-6.477-21.88-23.98-15.228-38.858 6.476-15.054 23.98-21.88 38.858-15.405 77.37 33.609 120.08 102.226 120.08 193.072 0 127.956-88.223 366.89-300.549 366.89H505.87l-55.839 256.088c-2.975 13.654-15.053 23.281-28.882 23.281h.002zM459.833 413.1h-58.116c-8.752 0-16.979-3.85-22.756-10.678-5.6-6.652-8.052-15.579-6.477-24.156l38.86-215.653c2.45-14.003 14.704-24.331 29.056-24.331h93.998c35.535 0 63.892 11.378 81.921 32.733 19.606 23.282 26.081 56.365 19.08 98.55-14.177 100.298-66.69 143.534-175.567 143.534zm-22.757-59.165l22.756-.001c87.871 0 108.526-31.508 117.279-93.473 2.8-17.329 4.025-39.56-5.776-51.288-8.227-9.802-24.681-11.727-36.934-11.727h-69.317l-28.007 156.488z"},"child":[]}]})(props);
};
function SlPencil (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M964.256 49.664C929.392 16.256 890.933-.672 849.877-.672c-64.192 0-111.024 41.472-123.841 54.176-18.032 17.856-633.152 633.2-633.152 633.2a33.011 33.011 0 0 0-8.447 14.592C70.565 752.559 1.077 980.016.387 982.304c-3.567 11.648-.384 24.337 8.208 32.928a32.336 32.336 0 0 0 22.831 9.44c3.312 0 6.655-.496 9.919-1.569 2.352-.767 237.136-76.655 275.775-88.19a32.736 32.736 0 0 0 13.536-8.033c24.416-24.128 598.128-591.456 636.208-630.784 39.392-40.592 58.96-82.864 58.208-125.616-.784-42.208-21.248-82.848-60.816-120.816zM715.845 155.84c16.304 3.952 54.753 16.862 94.017 56.479 39.68 40.032 50.416 85.792 52.416 96.208-125.824 125.168-415.456 411.728-529.632 524.672-10.544-24.56-27.584-54.144-54.993-81.76-33.471-33.728-67.536-52.783-93.808-63.503 112.992-113.008 408.08-408.224 532-532.096zM140.39 741.95c17.584 4.672 54.111 18.224 91.344 55.76 28.672 28.912 42.208 60.8 48.288 80.24-44.48 14.304-141.872 47.92-203.76 67.872 18.336-60.336 49.311-154.304 64.128-203.872zm780.031-491.584a1748.764 1748.764 0 0 1-6.065 6.16c-10.113-26.049-27.857-59.52-58.577-90.496-31.391-31.648-63.231-50.32-88.75-61.36 2.175-2.16 3.855-3.857 4.511-4.496 3.664-3.617 36.897-35.376 78.32-35.376 23.84 0 47.248 10.88 69.617 32.32 26.511 25.424 40.175 50.512 40.624 74.592.431 24.576-12.913 51.04-39.68 78.656z"},"child":[]}]})(props);
};
function SlPeople (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M746 835.28L544.529 723.678c74.88-58.912 95.216-174.688 95.216-239.601v-135.12c0-89.472-118.88-189.12-238.288-189.12-119.376 0-241.408 99.664-241.408 189.12v135.12c0 59.024 24.975 178.433 100.624 239.089L54 835.278S0 859.342 0 889.342v81.088c0 29.84 24.223 54.064 54 54.064h692c29.807 0 54.031-24.224 54.031-54.064v-81.087c0-31.808-54.032-54.064-54.032-54.064zm-9.967 125.215H64.002V903.28c4.592-3.343 11.008-7.216 16.064-9.536 1.503-.688 3.007-1.408 4.431-2.224l206.688-112.096c18.848-10.224 31.344-29.184 33.248-50.528s-7.008-42.256-23.712-55.664c-53.664-43.024-76.656-138.32-76.656-189.152V348.96c0-45.968 86.656-125.12 177.408-125.12 92.432 0 174.288 78.065 174.288 125.12v135.12c0 50.128-15.568 145.84-70.784 189.28a64.098 64.098 0 0 0-24.224 55.664 64.104 64.104 0 0 0 33.12 50.849l201.472 111.6c1.777.975 4.033 2.031 5.905 2.848 4.72 2 10.527 5.343 14.783 8.288v57.887zM969.97 675.936L765.505 564.335c74.88-58.912 98.224-174.688 98.224-239.601v-135.12c0-89.472-121.872-190.128-241.28-190.128-77.6 0-156.943 42.192-203.12 96.225 26.337 1.631 55.377 1.664 80.465 9.664 33.711-26.256 76.368-41.872 122.656-41.872 92.431 0 177.278 79.055 177.278 126.128v135.12c0 50.127-18.56 145.84-73.775 189.28a64.098 64.098 0 0 0-24.224 55.664 64.104 64.104 0 0 0 33.12 50.848l204.465 111.6c1.776.976 4.032 2.032 5.904 2.848 4.72 2 10.527 5.344 14.783 8.288v56.912H830.817c19.504 14.72 25.408 35.776 32.977 64h106.192c29.807 0 54.03-24.224 54.03-54.064V730.03c-.015-31.84-54.047-54.096-54.047-54.096z"},"child":[]}]})(props);
};
function SlPhone (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M262.2 37c37.4 51.6 82.002 118.197 133.602 199.598 13 22 11 48.4-5.8 79.4-6.4 13-22.6 42.6-48.4 89.2 28.4 40 71.6 89.2 129.8 147.2s106.602 101.4 145.2 129.8c46.401-27.2 76.201-43.8 89.201-50.399 16.8-9 33-13.6 48.4-13.6 11.6 0 22 2.6 31 7.8 59.4 36.2 126.601 80.8 201.4 133.6 14.2 10.4 22.2 24.601 24.2 42.601 2 18.2-3.599 37.4-16.399 58.2-6.4 9-16.8 22.2-31 39.8-14.201 17.4-35.601 39.4-64.002 65.8s-51.6 39.802-69.8 39.802h-2c-136.6-5.4-305-107.801-504.4-307.201-199.6-199.6-302-367.8-307.2-504.6 0-18 13.2-41.6 39.8-70.8 26.4-29 48.2-50 64.799-63 16.8-12.8 31-23.2 42.6-31 14.2-10.4 30.4-15.4 48.4-15.4 22.2 0 38.8 7.8 50.6 23.2zm-63.998 40.598c-27.2 19.4-52.603 41.198-76.603 64.998-23.8 24-37.8 41.6-41.6 53.2 5.2 120.2 101 273.2 287.6 459.2 186.6 186 340 282.2 460 288.6 10.4-3.8 27.4-18 51.4-42.6s45.6-50.399 64.8-77.399c3.8-5.2 5.2-9.6 3.8-13.6-77.4-54.2-142-97.4-193.8-129.801-5.2 0-11.6 2-19.4 5.8-11.6 6.4-40.6 22.6-87.2 48.4l-33 19.4-33-21.4c-42.6-29.6-94.199-75.6-154.999-137.6-60.6-60.6-105.8-112.4-135.6-155l-23.2-31 19.4-34.799c25.8-46.4 42-75.6 48.4-87.2 3.8-7.8 5.8-14.2 5.8-19.4-46-73.401-88.599-138-127.398-193.6h-2c-5 0-9.6 1.4-13.4 3.8z"},"child":[]}]})(props);
};
function SlPicture (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M960 79.904H64c-35.184 0-64 28.816-64 64v736.192c0 35.184 28.816 64 64 64h896c35.184 0 64-28.816 64-64V143.904c0-35.184-28.816-64-64-64zm0 800.193l-895.999-.001v-188.56l256.848-248.912L585.633 707.12c10.912 13.248 30.336 11.568 44.128 1.12l116.88-105.808 210.8 216.384c.8.8 1.695 1.391 2.56 2.08v59.2zm.001-150.305L771.97 537.376c-11.408-11.248-29.28-12.4-41.937-2.752l-120.56 105.024-264.943-262.08a32.09 32.09 0 0 0-22.688-11.6c-8.816-.32-17.505 2.56-23.969 8.624l-233.872 227.6V143.904h896v585.888zM736.002 400.128c35.28 0 63.84-28.608 63.84-63.84 0-35.217-28.56-63.825-63.84-63.825s-63.84 28.608-63.84 63.824c0 35.233 28.56 63.841 63.84 63.841z"},"child":[]}]})(props);
};
function SlPieChart (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M575.6 93.408c-17.664 0-32.001 14.337-32.001 32.001s14.336 32 32 32c226.448 0 384.4 165.472 384.4 391.903C959.999 775.776 775.775 960 549.327 960c-226.432 0-391.92-163.6-391.92-390.063 0-17.664-14.336-32-32-32s-32 14.336-32 32c0 261.744 194.192 454.064 455.92 454.064s474.672-212.944 474.672-474.688c0-261.712-186.672-455.904-448.399-455.904v-.001zm-95.345 354.849V32.001c0-17.664-14.336-32-32-32C199.007.001-.001 199.009-.001 448.257c0 17.664 14.336 32 32 32h416.256c17.664 0 32-14.336 32-32zm-64-32H65.311C80.767 227.761 227.759 80.769 416.255 65.313v350.944z"},"child":[]}]})(props);
};
function SlPin (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M1014.85 379.664L646.692 9.649c-7.936-7.968-19.376-11.216-30.32-8.496-10.912 2.656-19.6 10.849-22.945 21.568-22.16 71.312-24.72 135.84-7.792 194.688-1.551 1.073-3.04 2.24-4.416 3.617L410.115 392.098c-55.2-25.6-114.544-39.457-173.696-39.457-37.6 0-74.464 5.569-109.567 16.465-10.688 3.344-18.88 12-21.569 22.848a32.01 32.01 0 0 0 8.368 30.288l218.976 220.384-306.16 311.04-26.624 70.128 64.368-24.88 313.36-311.04 221.824 223.264c6.065 6.128 14.289 9.44 22.689 9.44 2.528 0 5.088-.32 7.632-.913a32.064 32.064 0 0 0 22.944-21.6c28.976-93.233 20.48-193.345-20.337-283.121l174.704-174.736c.624-.624 1.056-1.328 1.632-2 26.368 7.536 53.696 11.568 82.048 11.568 35.216 0 72.56-5.055 110.976-17.008a32.005 32.005 0 0 0 21.57-22.847 32.067 32.067 0 0 0-8.401-30.256zM603.153 824.146L200.37 418.739c103.376-12.065 214.848 29.6 295.567 110.319 80.32 80.304 119.504 191.296 107.216 295.088zm-2.926-267.6c-16.832-25.727-36.465-50.176-59.024-72.752-22.464-22.464-47.008-42.256-72.96-59.328L612.37 280.37c14.704 25.568 33.664 50 57.007 73.328 23.857 23.84 49.09 43.136 75.601 58.064zM714.626 308.45c-61.536-61.536-85.247-130.129-72.688-212.881l286.912 288.4c-82.656 11.856-151.6-12.895-214.225-75.519z"},"child":[]}]})(props);
};
function SlPlane (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M934.32 65.904c10.432 0 17.776 1.938 21.6 3.41 4.592 12.224 10.753 56.031-34.528 101.343L690.4 401.633l1.664 28.656c3.504 59.968 10 167.44 15.6 259.567 4.944 82 9.633 159.44 9.936 166.032.16 4.529.225 5.601-3.999 10.689-9.44 11.472-27.056 30.912-41.904 47.024-23.024-62.032-71.408-193.057-98.128-266.4l-34.336-94.368-71.024 71.024-130.608 125.584-18.192 18.16-.56 25.68c-.432 20.496-.336 57.28-.288 89.712.064 22.592.129 43.12-.031 54.432-.288.528 4.368 1.152 3.936 1.904-2.784-4.464-5.776-9.28-8.944-14.288-26.336-42-62.784-100.096-73.904-118.224l-8.128-13.28-13.344-8.065c-48.528-29.311-102.288-63.151-135.088-84.287 1.136-.656 2.063 2.816 2.815 2.415h2.128c10.32 0 27.376.224 46.496.496 25.008.336 53.376.752 75.088.752 8.32 0 15.712-.064 21.664-.192l25.68-.592 18.16-18.16 125.744-129.712 70.784-70.752-93.935-34.56c-70.592-25.967-205.808-76.464-269.056-100.224 16.223-14.944 35.775-32.688 47.183-42.129 3.184-2.624 5.665-3.967 7.376-3.967l2.256.064c7.056.336 94.688 6.064 179.407 11.6 89.936 5.872 191.44 12.496 249.151 16.16l28.848 1.808 231.024-231.04c32.448-32.4 64.32-37.248 80.449-37.248zm.001-63.997c-37.808 0-84.222 14.526-125.678 55.998L598.035 268.497c-118.624-7.504-422.432-27.6-429.968-27.808a100.693 100.693 0 0 0-4.88-.129c-10.256 0-27.968 1.968-48.128 18.624-23.664 19.569-73.008 65.97-73.008 65.97-11.904 11.935-17.936 26.719-16.496 40.623.88 8.4 5.44 23.712 26.064 31.777 12.528 4.912 211.904 79.504 303.969 113.376L229.844 640.642c-5.569.128-12.465.192-20.257.192-38.336 0-97.776-1.248-121.601-1.248-3.152 0-5.68 0-7.473.064-7.248.224-22.256-3.344-61.84 29.744l-2.816 2.624C3.985 683.89 1.201 695.73.945 703.554c-.256 8.064 1.904 19.68 13.568 29.024 7.008 5.664 96.848 63.184 170.527 107.68 17.665 28.817 98.945 158 103.185 165.008 6.193 10.464 16.32 16.432 28.433 16.816h1.008c11.776 0 23.872-5.84 35.712-17.344 33.504-39.184 28.88-55.407 29.023-62.224.528-21.376-.368-111.936.4-147.84l130.592-125.6c33.376 91.68 106.336 289.008 111.216 301.567 8.128 20.624 23.44 25.153 31.84 26 1.376.16 2.785.225 4.16.225 12.625 0 25.712-5.936 36.432-16.655 0 0 46.256-49.088 65.904-72.976 19.68-23.872 18.913-44.256 18.529-53.872-.16-6.656-18.689-308.816-25.569-426.816L966.561 215.89c74.657-74.689 62.785-164.688 35.057-192.368-12.24-12.304-37.024-21.615-67.297-21.616z"},"child":[]}]})(props);
};
function SlPlaylist (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M33.76 63.76h448c17.664 0 32-14.336 32-32s-14.336-32-32-32h-448c-17.664 0-32 14.336-32 32s14.32 32 32 32zm0 192h448c17.664 0 32-14.336 32-32s-14.336-32-32-32h-448c-17.664 0-32 14.336-32 32s14.32 32 32 32zm480 160c0-17.664-14.336-32-32-32h-448c-17.664 0-32 14.336-32 32s14.336 32 32 32h448c17.664 0 32-14.336 32-32zm499.12-91.216L699.968 11.646c-9.904-9.92-24.656-11.84-36.592-6.016-12.544 4.336-21.616 16.113-21.616 30.128v708.4c-33.92-25.135-78.432-40.527-127.376-40.527-106.064 0-192.097 71.776-192.097 160.288 0 88.528 86.032 160.336 192.097 160.336 106.128 0 192.096-71.808 192.096-160.336 0-4.016-.368-7.936-.72-11.871V107.952L967.6 369.808c12.496 12.496 32.769 12.496 45.265 0 12.496-12.496 12.496-32.769.015-45.265zM641.76 867.021c-2.304 44.497-54.191 92.815-128.127 92.815-75.648 0-128.353-50.56-128.353-95.871 0-45.344 52.704-95.84 128.353-95.84 73.936 0 125.823 48.256 128.127 92.784v6.113z"},"child":[]}]})(props);
};
function SlPlus (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01zM736 480H544V288c0-17.664-14.336-32-32-32s-32 14.336-32 32v192H288c-17.664 0-32 14.336-32 32s14.336 32 32 32h192v192c0 17.664 14.336 32 32 32s32-14.336 32-32V544h192c17.664 0 32-14.336 32-32s-14.336-32-32-32z"},"child":[]}]})(props);
};
function SlPower (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M701.552 164.096c-16-7.456-35.025-.59-42.53 15.425-7.519 16-.591 35.04 15.409 42.544 162.336 76 250.496 251.952 214.353 427.872-42.912 208.88-247.664 343.808-456.56 301.023-101.168-20.785-184.208-79.712-241.056-165.936-56.864-86.256-76.736-189.504-55.952-290.672 24.704-120.224 102.624-219.328 213.76-271.904 15.968-7.552 22.8-26.624 15.231-42.609-7.552-15.952-26.592-22.736-42.592-15.232C192.111 225.87 101.327 341.342 72.527 481.47c-24.223 117.936-1.07 238.256 65.185 338.784 66.272 100.48 163.696 169.169 281.632 193.409a450.431 450.431 0 0 0 90.751 9.248c209.456 0 397.648-147.12 441.376-360.112 42.112-205.008-60.655-410.096-249.919-498.704zM512.015 416.001c17.664 0 32-14.336 32-32v-352c0-17.664-14.336-32-32-32s-32 14.336-32 32v352c0 17.664 14.336 32 32 32z"},"child":[]}]})(props);
};
function SlPresent (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M1024 320.496c0-35.344-28.654-64-63.998-64H850.754c28.272-27.888 46.368-64.447 46.368-109.472 0-55.44-31.84-115.664-121.216-115.664-117.6 0-215.84 125.216-262 195.408-46.192-70.176-147.44-195.392-265.024-195.392-89.376 0-121.216 60.224-121.216 115.664 0 45.008 18.592 81.584 47.44 109.472H64.002c-35.344 0-64 28.656-64 64V512.08h64.56v416.56c0 35.344 28.655 64 64 64h767.68c35.343 0 64-28.656 64-64V512.064h63.76V320.496zM775.906 95.376c39.568 0 57.216 16.625 57.216 51.665 0 71.088-79.344 109.439-153.968 109.439H570.818c45.471-67.536 125.504-161.104 205.088-161.104zm-527.025.001c79.6 0 162.655 93.568 208.127 161.088H348.64c-74.624 0-156.976-39.344-156.976-110.432 0-35.024 17.648-50.656 57.217-50.656zm711.12 352.687h-416V320.496h416v127.568zm-896-127.568h416v127.568h-416zm64.56 191.568h351.44v416.56h-351.44zm767.696 416.56H544.001v-416.56h352.256v416.56z"},"child":[]}]})(props);
};
function SlPrinter (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M952.736 254.928H832.017V.48H191.985v254.448H71.265c-39.312 0-71.312 32-71.312 71.344V760.16c0 39.344 32 71.344 71.311 71.344h120.72v192.016h640.032V831.504h120.72c39.313 0 71.313-32 71.313-71.344V326.272c0-39.344-32-71.344-71.313-71.344zM255.985 63.487h512.032v191.44H255.985V63.487zM768.018 959.52H255.986v-352.4h512.032v352.4zM960.05 760.159c0 4.08-3.28 7.344-7.313 7.344h-120.72V543.119H191.985v224.368H71.265c-4.032 0-7.312-3.264-7.312-7.344V326.271c0-4.064 3.28-7.345 7.312-7.345h881.472c4.033 0 7.313 3.28 7.313 7.345zm-128.048-376.72h-32c-17.664 0-32 14.336-32 32s14.336 32 32 32h32c17.664 0 32-14.336 32-32s-14.336-32-32-32z"},"child":[]}]})(props);
};
function SlPuzzle (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M512 1024.16c-20.288 0-39.378-7.87-53.746-22.19L21.742 565.474c-29.536-29.68-29.536-77.952-.065-107.568l159.904-159.872c9.873-9.872 25.025-12.224 37.44-5.743 12.369 6.464 19.12 20.223 16.69 33.967-1.632 9.153-2.369 16.497-2.369 23.12 0 70 56.976 128.145 127.008 128.145 70.096 0 121.28-58.144 121.28-128.144 0-70.096-51.184-127.088-121.28-127.088-6.56 0-13.87.751-23.023 2.368-13.872 2.56-27.504-4.32-33.968-16.689-6.464-12.4-4.128-27.568 5.744-37.44L458.191 21.41c28.88-28.752 78.816-28.688 107.567-.064L674.91 130.562C697.694 59.746 764.19 8.337 842.446 8.337c97.025 0 175.97 78.976 175.97 176.031 0 78.256-51.377 144.752-122.225 167.504l106.032 105.968c29.6 29.68 29.6 77.952.031 107.601l-436.448 436.464c-14.431 14.384-33.52 22.256-53.807 22.256zM174.895 395.218L66.99 503.09c-4.656 4.688-4.656 12.433.063 17.185l436.368 436.384c6.128 6.064 10.945 6.129 17.185-.064l436.352-436.384c4.689-4.72 4.689-12.4-.031-17.151L803.023 349.252c-9.632-9.632-12.128-24.32-6.193-36.56s18.848-19.505 32.528-17.84l4.88.623c2.688.369 5.377.817 8.193.817 61.744 0 111.968-50.193 111.968-111.904 0-61.777-50.224-112.032-111.968-112.032-61.712 0-111.936 50.256-111.936 112.032 0 2.56.4 5.056.752 7.567l.688 5.712a32.003 32.003 0 0 1-18.03 32.288c-12.161 5.808-26.817 3.312-36.401-6.257L520.56 66.674c-6.128-6.064-10.944-6.129-17.185.064l-97.12 97.12c83.28 20.624 139.376 95.968 139.376 185.536 0 105.312-79.92 192.128-185.296 192.128-89.536-.016-164.848-63.088-185.439-146.304z"},"child":[]}]})(props);
};
function SlQuestion (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512 282.784 0 512.017-229.216 512.017-512C1024.017 229.232 794.785 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448.017 200.977 448.017 448S759.025 961.009 512 961.009zm-47.056-160.529h80.512v-81.248h-80.512zm46.112-576.944c-46.88 0-85.503 12.64-115.839 37.889-30.336 25.263-45.088 75.855-44.336 117.775l1.184 2.336h73.44c0-25.008 8.336-60.944 25.008-73.84 16.656-12.88 36.848-19.328 60.56-19.328 27.328 0 48.336 7.424 63.073 22.271 14.72 14.848 22.063 36.08 22.063 63.664 0 23.184-5.44 42.976-16.368 59.376-10.96 16.4-29.328 39.841-55.088 70.322-26.576 23.967-42.992 43.231-49.232 57.807-6.256 14.592-9.504 40.768-9.744 78.512h76.96c0-23.68 1.503-41.136 4.496-52.336 2.975-11.184 11.504-23.823 25.568-37.888 30.224-29.152 54.496-57.664 72.88-85.551 18.336-27.857 27.52-58.593 27.52-92.193 0-46.88-14.176-83.408-42.577-109.568-28.416-26.176-68.272-39.248-119.568-39.248z"},"child":[]}]})(props);
};
function SlRefresh (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M497.408 898.56c-.08-.193-.272-.323-.385-.483l-91.92-143.664c-6.528-10.72-20.688-14.527-31.728-8.512l-8.193 5.04c-11.007 6-10.767 21.537-4.255 32.256l58.927 91.409c-5.024-1.104-10.096-2-15.056-3.296-103.184-26.993-190.495-96.832-239.535-191.6-46.336-89.52-55.04-191.695-24.512-287.743 30.512-96.048 99.775-174.464 189.295-220.784 15.248-7.888 21.2-26.64 13.312-41.856-7.872-15.264-26.64-21.231-41.855-13.327-104.272 53.952-184.4 145.28-219.969 257.152C45.982 485.008 56.11 604.033 110.078 708.29c57.136 110.336 158.832 191.664 279.024 223.136 1.36.352 2.784.56 4.16.911l-81.311 41.233c-11.008 6.032-14.657 19.631-8.128 30.351l3.152 8.176c6.56 10.72 17.84 14.527 28.815 8.512L484.622 944.4c.193-.128.385-.096.578-.224l9.984-5.456c5.52-3.024 9.168-7.969 10.624-13.505 1.52-5.52.815-11.663-2.448-16.991zm416.496-577.747c-57.056-110.304-155.586-191.63-275.762-223.118-8.56-2.24-17.311-3.984-26.048-5.712l79.824-40.48c11.008-6.033 17.568-19.632 11.04-30.369l-3.153-8.16c-6.56-10.736-20.752-14.528-31.727-8.528L519.262 80.654c-.176.112-.384.08-.577.208l-9.967 5.472c-5.537 3.04-9.168 7.967-10.624 13.503-1.52 5.52-.816 11.648 2.464 16.976l5.92 9.712c.096.192.272.305.384.497l91.92 143.648c6.512 10.736 20.688 14.528 31.712 8.513l7.216-5.025c11.008-6 11.727-21.536 5.231-32.24l-59.2-91.856c13.008 2 25.968 4.416 38.624 7.76 103.232 27.04 187.393 96.864 236.4 191.568 46.32 89.519 55.024 191.695 24.48 287.728-30.511 96.047-96.655 174.448-186.174 220.816-15.233 7.887-21.168 26.607-13.28 41.87 5.519 10.64 16.335 16.768 27.599 16.768 4.8 0 9.664-1.12 14.272-3.488 104.272-53.936 181.248-145.279 216.816-257.119 35.536-111.904 25.393-230.929-28.574-335.152z"},"child":[]}]})(props);
};
function SlReload (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M511.28 0C255.472 0 47.36 208.126 47.36 463.934c0 240.448 185.296 441.536 423.568 462.096l-91.856 46.56c-11.344 6.223-18.096 20.223-11.376 31.279l3.248 8.4c6.752 11.056 21.376 14.976 32.687 8.783l153.312-78.496c.193-.128.4-.095.593-.223l10.288-5.632c5.68-3.12 9.44-8.224 10.943-13.903 1.569-5.68.85-12-2.527-17.504l-6.096-10c-.095-.193-.288-.32-.4-.496L475.055 746.83c-6.72-11.056-21.311-14.976-32.687-8.784l-7.44 5.184c-11.344 6.192-12.096 22.192-5.376 33.217l55.872 86.672c-.304-.016-.576-.128-.865-.144-209.28-13.727-373.2-189.039-373.2-399.039C111.36 243.408 290.767 64 511.28 64c220.544 0 400.96 179.408 400.96 399.937 0 126.976-58.32 243.6-160 319.968-14.127 10.624-16.975 30.689-6.367 44.817 10.624 14.16 30.689 16.976 44.817 6.368 117.936-88.592 185.567-223.872 185.567-371.152C976.24 208.129 767.105 0 511.28 0z"},"child":[]}]})(props);
};
function SlRocket (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M209.68 883.264c-20.112 41.807-32.802 69.666-144.689 73.73 3.216-107.968 23.792-119.552 64.992-140.08 17.296-8.624 38.832-19.344 62.113-37.248l-38.96-49.744c-18.4 14.128-35.329 21.568-51.697 29.712C32.8 793.858.45 827.569.45 988.289l.543 32.704 31.456-.704c169.632 0 201.328-38.32 233.104-104.32 6.96-14.464 10.832-24.24 22.56-43.729l-47.456-43.104c-14.224 19.408-23.104 37.872-30.976 54.128zm495.279-694.607c-70.768 0-128.352 57.583-128.352 128.335 0 70.784 57.6 128.353 128.352 128.353s128.336-57.584 128.336-128.352c0-70.752-57.6-128.336-128.336-128.336zm0 192.415c-35.328 0-64.08-28.752-64.08-64.08 0-35.313 28.752-64.08 64.08-64.08s64.08 28.767 64.08 64.08c-.016 35.344-28.752 64.08-64.08 64.08zm318.821-351.76c-.976-15.968-13.63-28.771-29.598-29.955 0 0-179.088-13.056-351.376 51.28-62.944 23.504-114.752 60.737-163.104 117.137-40.32 47.025-80.385 132.032-115.745 202.608-13.664 27.248-26.72 53.313-37.792 73.217H148.15a32.003 32.003 0 0 0-23.936 10.768L6.917 581.503A31.993 31.993 0 0 0 .388 612.51c3.44 10.785 12.32 18.945 23.329 21.44l190.944 43.665c13.007 16.064 34.687 40.097 69.376 78.593l72.335 80.192 38.945 164.72a31.984 31.984 0 0 0 21.231 23.056c3.233 1.024 6.576 1.568 9.904 1.568a31.95 31.95 0 0 0 20.832-7.712l118.56-117.936a31.981 31.981 0 0 0 11.184-24.288v-165.12c15.936-9.904 44.191-25.152 70.783-40.032 72.464-40.496 180.624-90.912 225.472-130.784 63.153-56.128 86.16-97.28 108.752-158.112 53.712-144.688 42.288-344.031 41.744-352.447zM922.001 359.469c-19.712 53.072-37.568 84.83-91.248 132.558-39.664 35.232-148.128 85.824-214.192 122.769-49.312 27.568-78.848 43.664-91.792 54.256a31.949 31.949 0 0 0-11.76 24.784v167.248l-67.52 74.193-28.752-121.6a31.949 31.949 0 0 0-7.393-14.064c-58.847-65.216-147.743-163.808-154.56-171.632a32.017 32.017 0 0 0-17.568-10.848L90.624 583.597l71.904-76H344.56a31.988 31.988 0 0 0 27.264-15.248c14.08-22.928 30.416-55.536 49.344-93.296 32.048-63.952 71.92-148.544 107.12-189.632 41.584-48.528 83.824-79.009 136.896-98.848C783.28 66.445 905.152 61.805 960.864 62.22c1.04 59.008-1.184 195.824-38.863 297.248z"},"child":[]}]})(props);
};
function SlScreenDesktop (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M960 95.808H64c-35.184 0-64 28.8-64 64V704c0 35.184 28.816 63.983 64 63.983h416v96.208H320c-17.664 0-32 14.336-32 32s14.336 32 32 32h384c17.664 0 32-14.336 32-32s-14.336-32-32-32H544v-96.208h416c35.184 0 64-28.8 64-63.983V159.808c0-35.2-28.816-64-64-64zM960 704H64V159.808h896V704z"},"child":[]}]})(props);
};
function SlScreenSmartphone (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M704.144 0H319.856c-53.024 0-96 42.976-96 96v832c0 53.024 42.976 96 96 96h384.288c53.024 0 96-42.976 96-96V96c0-53.024-42.976-96-96-96zm32 928c0 17.664-14.336 32-32 32H319.856c-17.664 0-32-14.336-32-32V96c0-17.664 14.336-32 32-32h384.288c17.664 0 32 14.336 32 32v832zM512.048 800.176c-35.28 0-63.84 28.592-63.84 63.824s28.576 63.841 63.84 63.841c35.28 0 63.84-28.608 63.84-63.84 0-35.233-28.56-63.825-63.84-63.825zm64-704.176h-128c-17.664 0-32 14.336-32 32s14.336 32 32 32h128c17.664 0 32-14.336 32-32s-14.336-32-32-32z"},"child":[]}]})(props);
};
function SlScreenTablet (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M832.144 0H191.856c-53.024 0-96 42.976-96 96v832c0 53.024 42.976 96 96 96h640.288c53.024 0 96-42.976 96-96V96c0-53.024-42.976-96-96-96zm32 928c0 17.664-14.336 32-32 32H191.856c-17.664 0-32-14.336-32-32V96c0-17.664 14.336-32 32-32h640.288c17.664 0 32 14.336 32 32v832zM512.048 800.176c-35.28 0-63.84 28.592-63.84 63.824s28.56 63.841 63.84 63.841c35.264 0 63.84-28.608 63.84-63.84 0-35.233-28.576-63.825-63.84-63.825zm64-704.176h-128c-17.664 0-32 14.336-32 32s14.336 32 32 32h128c17.664 0 32-14.336 32-32s-14.336-32-32-32z"},"child":[]}]})(props);
};
function SlSettings (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M960.496 415.056l-82.129-18.224c-6.4-20.48-14.784-40.08-24.4-58.927l44.431-74.032c16.592-26.512 24.976-65.52 0-90.512l-45.28-45.248c-24.976-24.992-67.151-20.496-92.623-2.832l-72.032 45.887c-18.689-9.696-38.225-18-58.529-24.56l-18.431-83.12C605.999 33.009 579.343 0 543.999 0h-64c-35.344 0-57.008 33.504-64 64l-20.528 82.128c-21.68 6.912-42.496 15.744-62.336 26.208l-73.84-47.024c-25.456-17.664-67.648-22.16-92.624 2.832l-45.264 45.248c-24.992 25.008-16.608 64 0 90.512l46.752 77.92c-8.767 17.664-16.544 35.936-22.544 55.024l-82.112 18.224C33.007 420.56 0 447.216 0 482.56v64c0 35.344 33.504 57.008 64 64l83.152 20.784c5.745 17.632 12.928 34.56 21.056 50.976l-46.8 78c-16.591 26.496-24.975 65.504 0 90.496l45.28 45.248c24.976 25.008 67.152 20.496 92.624 2.847l74-47.152c19.952 10.528 40.88 19.44 62.704 26.337L416.495 960c7.008 30.496 28.656 64 64 64h64c35.344 0 62-33.007 67.504-63.504l18.464-83.343c20.096-6.496 39.376-14.689 57.84-24.257l72.192 46c25.472 17.664 67.664 22.16 92.624-2.848L898.4 850.8c24.976-25.008 16.592-64 0-90.496l-44.463-74.128c8.944-17.568 16.688-35.84 22.912-54.848L960 610.56c30.496-7.008 64-28.656 64-64v-64c0-35.344-32.992-62-63.504-67.504zm-.465 126.992c-2.72 1.952-7.842 4.635-14.338 6.139l-118.656 29.631-11.008 33.632c-4.975 15.153-11.407 30.529-19.119 45.712l-16.064 31.569 62.688 104.528c4 6.4 5.872 12.127 6.432 15.503l-42.096 42.033c-4.064-1.28-8.688-2.945-10.912-4.464l-105.344-67.184-32.752 16.945c-15.776 8.192-31.969 14.976-48.097 20.192l-34.88 11.28-26.368 119.12c-1.216 6.368-4.624 11.504-6.96 13.344h-57.6c-1.951-2.72-4.623-7.84-6.112-14.32L449.39 827.9l-34.095-10.817c-17.569-5.536-35.088-12.912-52.144-21.904l-32.912-17.376-105.36 67.152c-4.304 2.912-8.912 4.56-13.088 4.56l-41.968-40.847c.56-3.311 2.304-8.783 5.792-14.367l65.456-109.056-15.568-31.344c-7.264-14.784-13.024-28.656-17.504-42.4l-10.992-33.664L79.518 548.46c-7.392-1.68-12.736-4.432-15.52-6.4v-59.504c.032.016.08.032.145.032 1.072 0 6.336-3.745 10.72-4.544l120.72-26.737 11.087-35.28c4.512-14.368 10.672-29.344 18.816-45.775l15.568-31.36-64.767-107.92c-4.016-6.432-5.872-12.16-6.432-15.52l42.08-42.065c4.08 1.312 8.672 2.96 10.88 4.48l107.312 68.4 32.88-17.344c16.88-8.895 34.336-16.239 51.904-21.823l34.016-10.832L478.11 79.501c1.697-7.391 4.416-12.735 6.4-15.52H544c-.433.657 3.68 6.24 4.527 10.865l26.88 121.408 34.848 11.264c16.336 5.28 32.752 12.16 48.72 20.448l32.752 17.008 103.152-65.712c4.32-2.945 8.944-4.576 13.088-4.576l42 40.816c-.56 3.328-2.32 8.816-5.808 14.416l-63.344 105.488 16.16 31.616c8.72 17.056 15.376 33.056 20.32 48.928l11.056 35.344L946.64 477.55c7.153 1.328 12.721 5.456 13.905 7.696zM512.43 319.674c-106.272 0-192.736 86.288-192.736 192.32 0 106.016 86.464 192.304 192.736 192.304s192.736-86.288 192.736-192.304c0-106.032-86.464-192.32-192.736-192.32zm-.432 320.32c-70.576 0-128-57.424-128-128 0-70.592 57.424-128 128-128 70.592 0 128 57.408 128 128 0 70.576-57.424 128-128 128z"},"child":[]}]})(props);
};
function SlShareAlt (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M901.84 949.376H69.841v-640h257.6l64.72-62.336-1.664-1.664H69.84c-35.344 0-64 28.656-64 64v640c0 35.344 28.656 64 64 64h832c35.343 0 64-28.656 64-64V448.704l-64 61.088v439.584zm-631.711-256l64.48-.001c44.865-254.496 266.545-448 533.889-448 11.215 0 21.855.096 32.623.176L783.873 362.783c-12.464 12.496-12.464 32.752 0 45.248 6.255 6.256 14.463 9.376 22.656 9.376s16.336-3.12 22.592-9.376l189.024-194L829.12 19.999c-12.464-12.496-32.72-12.496-45.248 0-12.464 12.496-12.464 32.752 0 45.248l116.176 116.16c-10.033-.016-19.968-.048-30.208-.048-303.056 0-553.567 221.952-599.711 512.017z"},"child":[]}]})(props);
};
function SlShare (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M864 704c-52.688 0-99.295 25.585-128.431 64.88l-421.36-214.72c3.664-13.455 5.792-27.535 5.792-42.16 0-18.303-3.216-35.807-8.88-52.175l423.76-205.616C763.97 294.016 810.897 320 864.001 320c88.367 0 160-71.649 160-160 0-88.368-71.633-160-160-160S704 71.633 704 160c0 12.431 1.567 24.464 4.24 36.08L278.4 404.657c-29.281-32.273-71.393-52.656-118.4-52.656C71.631 352 0 423.633 0 512c0 88.351 71.631 160 160 160 50.895 0 96.127-23.824 125.423-60.865l423.104 215.632C705.664 838.736 704 851.152 704 864c0 88.368 71.632 160 160 160s160-71.632 160-160-71.632-160-160-160zm.002-639.999c53.008 0 96 42.992 96 96s-42.992 96-96 96-96-42.992-96-96 42.992-96 96-96zm-704 544c-53.024 0-96-42.992-96-96s42.976-96 96-96c53.008 0 96 42.992 96 96s-42.992 96-96 96zm704 352c-53.008 0-96-42.992-96-96s42.992-96 96-96 96 42.992 96 96-42.992 96-96 96z"},"child":[]}]})(props);
};
function SlShield (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M907.952 144.48a63.997 63.997 0 0 0-43.663-17.217c-1.472 0-2.943.065-4.4.16-.912.065-11.184.689-27.28.689-26.656 0-78.688-1.808-127.969-13.936-63.664-15.631-137.12-88.16-158.496-102.464A63.959 63.959 0 0 0 510.576.93a64.186 64.186 0 0 0-35.536 10.752c-2.592 1.744-79.504 84.032-154.752 102.496C271.04 126.305 218 128.113 191.376 128.113c-16.096 0-26.369-.624-27.376-.689a62.314 62.314 0 0 0-4.225-.16A64.186 64.186 0 0 0 116 144.544c-12.945 12.096-20.32 29.008-20.32 46.72v160.032c0 591.632 387.12 667.808 403.567 670.783a65.614 65.614 0 0 0 11.313 1.008c3.776 0 7.6-.336 11.312-1.008 16.432-2.976 406.4-79.151 406.4-670.783V191.264a63.811 63.811 0 0 0-20.32-46.784zm-43.647 206.816c0 544.912-353.714 607.777-353.714 607.777s-350.88-62.88-350.88-607.776V191.265s12.096.848 31.68.848c33.568 0 90.032-2.464 144.16-15.776C424.175 154.593 510.575 64.93 510.575 64.93s90.256 89.664 178.784 111.408c54.192 13.312 109.68 15.776 143.249 15.776 19.568 0 31.68-.848 31.68-.848s.016 20.352.016 160.031h.001zm-216.706-5.055c-12.496-12.496-32.769-12.496-45.249 0l-90.512 90.512-90.511-90.512c-12.497-12.496-32.769-12.496-45.265 0s-12.496 32.769 0 45.249l90.512 90.512-90.512 90.511c-12.496 12.48-12.496 32.753 0 45.25s32.769 12.496 45.265 0l90.511-90.512 90.512 90.511c12.48 12.497 32.753 12.497 45.249 0s12.496-32.768 0-45.249l-90.512-90.511L647.6 391.49c12.496-12.48 12.496-32.753 0-45.249z"},"child":[]}]})(props);
};
function SlShuffle (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M402.304 505.856l39.264-55.248-134.304-183.28H2.736v64h271.488zm516.479-174.528l-77.536 69.535c-9.344 8.945-12.368 23.44-3.025 32.368l5.472 8.065c9.376 8.944 24.496 8.944 33.824 0l127.744-115.504c.176-.16.384-.193.544-.336l8.464-8.096c4.672-4.496 7.008-10.368 6.976-16.288.032-5.872-2.304-11.776-6.976-16.224l-8.464-8.096c-.16-.16-.336-.225-.544-.368L875.534 157.952c-9.36-8.945-24.464-8.945-33.84 0l-5.471 8.064c-9.36 8.944-6.32 23.408 3.023 32.336l76.048 68.976h-231.76l-409.312 576H2.734v64h304.512l409.328-576zm87.027 521.44c-.16-.16-.337-.226-.545-.37L875.537 733.968c-9.36-8.944-24.464-8.944-33.84 0l-5.471 8.064c-9.36 8.945-6.32 23.409 3.023 32.336l76.336 69.233-199.008-.273L602.145 666.32l-39.28 55.248 120.656 185.76 234.944.288-77.216 69.248c-9.344 8.945-12.368 23.44-3.025 32.368l5.472 8.065c9.376 8.944 24.496 8.944 33.824 0l127.744-115.504c.176-.16.384-.192.544-.336l8.464-8.096c4.672-4.496 7.008-10.368 6.976-16.288.032-5.872-2.304-11.776-6.976-16.224z"},"child":[]}]})(props);
};
function SlSizeActual (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M383.2 346.8l-.673-231.011c-.288-12.928-10.992-20.624-23.92-20.928l-16.416-.015c-12.944-.288-23.184 10.975-22.912 23.887l.896 155.248L53.903 10.253c-12.496-12.496-32.752-12.496-45.248 0s-12.496 32.752 0 45.248l265.12 262.608-151.088.4c-12.928-.287-24.912 8.64-26.88 23.873l.032 16.416c.32 12.944 11.009 23.648 23.92 23.936l229.505-1.007c.256.015.416.11.64.11l11.696.273c6.448.176 12.272-2.352 16.4-6.545 4.208-4.143 5.712-9.95 5.584-16.431l-1.263-11.712c.015-.224.88-.4.88-.623zm262.783 28.765c4.128 4.176 9.952 6.724 16.4 6.548l11.697-.273c.223 0 .383-.08.64-.112l229.503 1.008c12.928-.288 23.617-10.992 23.92-23.937l.032-16.416c-1.967-15.248-13.952-24.16-26.88-23.872l-151.087-.4 265.12-262.608c12.496-12.496 12.496-32.752 0-45.248s-32.752-12.496-45.248 0L703.824 273.967l.88-155.232c.303-12.928-9.953-24.176-22.897-23.888l-16.416.016c-12.96.304-23.648 8-23.92 20.928l-.673 231.008c0 .223.88.383.88.624l-1.264 11.711c-.143 6.497 1.36 12.289 5.569 16.432zM378.016 647.426c-4.144-4.176-9.952-6.705-16.4-6.545l-11.697.288c-.223 0-.383.096-.64.111l-229.52-1.007c-12.927.303-23.616 10.992-23.92 23.92l-.031 16.431c1.967 15.216 13.952 24.16 26.88 23.857l151.247.4L8.655 968.497c-12.496 12.496-12.496 32.752 0 45.248 12.497 12.496 32.752 12.496 45.248 0l266.272-264.576-.896 156.08c-.288 12.944 9.968 24.192 22.912 23.904l16.416-.032c12.944-.32 23.648-8 23.92-20.928l.673-231.008c0-.223-.88-.367-.88-.607l1.264-12.704c.143-6.496-1.36-12.288-5.569-16.448zm372.046 57.47l151.249-.4c12.928.303 24.912-8.641 26.88-23.857l-.032-16.431c-.32-12.945-11.01-23.633-23.921-23.921H674.734c-.256-.016-.416-.112-.64-.112l-13.696-.272c-6.448-.176-12.288 4.352-16.4 8.545-4.209 4.143-5.712 9.935-5.585 16.431l1.264 11.697c0 .24-.88.384-.88.607l.672 231.008c.288 12.928 10.977 20.608 23.921 20.928l17.424.032c12.944.288 23.184-10.976 22.896-23.903l-.88-154.528 267.264 263.024c12.497 12.496 32.752 12.496 45.248 0 12.496-12.496 12.497-32.752 0-45.248z"},"child":[]}]})(props);
};
function SlSizeFullscreen (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M685.904 383.184l275.264-273.572-.896 155.072c-.289 12.928 9.967 24.176 22.912 23.888l16.416-.016c12.944-.304 23.648-8 23.92-20.928l.672-231.008c0-.223-.88-.399-.88-.623l1.264-11.712c.128-6.496-1.391-12.288-5.584-16.431-4.143-4.176-9.951-6.72-16.4-6.544l-11.696.272c-.223 0-.399.08-.64.113L760.77.687c-12.928.288-23.632 10.976-23.92 23.92l-.032 16.417c1.967 15.248 13.952 24.16 26.88 23.872l151.248.4L640.657 337.92c-12.496 12.496-12.496 32.752 0 45.264 12.496 12.48 32.752 12.48 45.247 0zM339.088 640.812L63.825 913.532l.88-154.224c.304-12.944-9.969-24.192-22.897-23.904l-17.423.032c-12.96.32-23.649 8-23.921 20.944l-.672 231.008c0 .224.88.367.88.623l-1.264 11.68c-.144 6.496 1.376 12.32 5.584 16.433 4.128 4.192 9.952 6.72 16.384 6.56l11.712-.288c.223 0 .383-.096.64-.096l230.495 1.008c12.928-.32 23.617-11.009 23.92-23.936l.032-16.432c-1.967-15.216-13.952-24.16-26.88-23.872l-151.247-.4L384.32 686.076c12.496-12.497 12.496-32.752 0-45.248s-32.737-12.512-45.233-.016zm685.122 346.56l-.672-231.01c-.288-12.944-10.992-20.624-23.92-20.944l-16.416-.032c-12.944-.289-23.184 10.975-22.912 23.903l.896 155.072-275.28-273.552c-12.496-12.496-32.752-12.496-45.248 0s-12.496 32.752 0 45.248L914.93 958.649l-151.232.4c-12.928-.288-24.912 8.657-26.88 23.872l.032 16.432c.304 12.944 11.008 23.633 23.92 23.936l229.504-1.007c.24 0 .416.095.64.095l11.696.288c6.448.16 12.272-2.368 16.4-6.56 4.193-4.128 5.696-9.936 5.584-16.432l-1.263-11.68c0-.255.88-.399.88-.622zM110.049 65.321l151.264-.397c12.928.288 24.912-8.64 26.88-23.873l-.032-16.431C287.84 11.677 277.15.972 264.24.7l-230.512.992c-.256-.032-.416-.112-.64-.112l-11.712-.273C14.945 1.132 9.105 3.676 4.992 7.851.784 11.995-.735 17.787-.592 24.283L.672 35.995c0 .223-.88.384-.88.624l.672 231.008c.288 12.928 10.977 20.624 23.921 20.928l17.424.015c12.928.288 23.183-10.96 22.895-23.888l-.88-154.224 275.264 272.72c12.48 12.497 32.753 12.497 45.25 0s12.496-32.768 0-45.264z"},"child":[]}]})(props);
};
function SlSocialBehance (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M376.743 414.841c15.924-9.676 23.987-27.214 23.987-51.806 0-27.213-10.682-45.555-31.848-54.425-17.74-6.046-40.72-9.07-68.133-9.07H148.157v129.612h167.106c24.995 0 45.757-4.838 61.48-14.311zm-16.528-51.806c0 9.272-1.611 15.32-4.635 17.134-9.272 5.643-22.778 8.466-40.517 8.466H188.676v-48.58h112.076c22.375 0 40.516 2.216 53.819 6.45 2.016 1.008 5.643 2.62 5.643 16.529v.001zm14.717 167.709c-13.707-6.249-33.26-9.676-57.852-9.877H148.16v156.02h166.904c24.995 0 44.75-3.428 58.658-10.28 25.6-12.7 38.5-37.291 38.5-72.97.203-30.236-12.295-51.402-37.29-62.892zm-186.256 30.64h128.402c24.592.202 36.283 4.031 41.121 6.249 7.257 3.427 13.707 7.86 13.707 26.002 0 28.825-10.885 34.066-16.126 36.688-3.83 1.814-15.118 6.047-40.718 6.047H188.675v-74.986zm659.553-108.65c-17.94-15.32-40.313-23.182-66.72-23.182-28.624 0-51.402 8.265-67.326 24.794-15.924 16.328-26.003 38.702-29.833 66.52l-.202 1.815h194.52l-.202-1.613c-2.217-30.035-12.296-53.014-30.237-68.334zm-104.617 29.228c3.427-3.427 12.698-12.095 37.895-12.095 15.723 0 28.422 4.032 38.703 12.095h-76.598zm283.008 22.173c-6.047-38.904-19.552-73.777-40.111-103.812-18.949-28.22-42.533-50.394-70.551-66.52V172.946H647.46v162.47c-16.328 9.876-31.244 21.569-45.153 35.477-31.648 31.849-52.41 72.769-62.69 121.952-7.459-10.885-16.329-20.762-26.206-29.43a204.002 204.002 0 0 0 3.427-4.031c23.584-28.422 35.476-65.108 35.476-109.253 0-42.129-11.288-79.219-33.663-110.261-36.485-49.79-96.554-75.792-178.395-77.203H-3.63v651.087h323.326c31.447 0 61.48-2.822 88.895-8.668 30.639-6.45 57.65-18.545 80.428-36.082 20.157-15.118 36.888-33.865 50.192-55.836 5.241-8.265 9.877-16.932 13.707-26.003 13.304 32.454 32.654 59.263 58.456 80.025 49.991 40.315 108.447 60.674 173.757 60.674 79.42 0 142.715-24.995 188.068-74.38 30.035-31.85 47.169-64.907 51.2-98.369l2.62-22.576h2.823l.605-38.299c1.008-37.493-.403-67.931-3.83-90.104h.003zm-584.16-38.301l-3.226 1.611 3.427 1.21c28.825 10.482 50.797 27.213 65.512 49.992 14.715 22.778 22.173 50.796 22.173 83.048 0 33.461-8.466 63.9-25.398 90.71-10.682 17.739-24.188 32.655-40.112 44.75-17.94 13.706-39.71 23.382-64.1 28.421-24.795 5.241-51.805 7.862-80.63 7.862H36.891V203.183H338.65C407.79 204.19 457.377 224.55 486 263.655c17.335 23.988 26.003 53.015 26.003 86.678 0 34.469-8.869 62.487-26.205 83.451-9.877 11.692-24.39 22.375-43.339 32.05zm339.049-165.091c-10.08 0-19.957.403-29.43 1.411h-64.101v-88.693h187.666v88.693h-64.1c-9.878-.806-19.957-1.411-30.036-1.411h.001zm-99.984 293.493c1.814 42.935 16.935 73.374 45.155 90.71 17.134 10.683 37.896 16.126 61.883 16.126 25.6 0 46.564-6.652 62.487-19.754 8.668-7.055 16.329-16.73 22.779-28.824h110.463c-3.427 24.19-16.932 48.983-40.517 73.978-37.493 40.718-90.709 61.279-158.438 61.279-55.836 0-105.827-17.335-148.359-51.805-42.532-34.268-64.102-91.111-64.102-168.517 0-72.567 19.553-129.209 57.852-167.912 32.655-32.857 74.18-52.007 123.565-57.047h55.03c25.6 2.62 49.386 8.668 70.954 18.343 29.228 13.101 53.619 34.065 72.567 62.286 17.134 24.794 28.422 54.224 33.46 87.08 3.025 19.35 4.234 46.967 3.629 82.443h-308.41v1.614h.003zm144.128 55.635c-8.87 7.257-20.964 10.683-37.09 10.683-16.53 0-29.63-3.225-40.314-9.877-5.242-3.225-11.692-8.063-16.933-17.739h107.036c-4.031 7.66-8.266 13.304-12.7 16.932z"},"child":[]}]})(props);
};
function SlSocialDribbble (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M511.984.272C442.128.272 375.52 14.383 314.8 39.839a32.015 32.015 0 0 0-6.145 2.672C127.391 121.328.271 302.064.271 512.016c0 282.16 229.568 511.712 511.712 511.712 282.192 0 511.744-229.568 511.744-511.712C1023.727 229.824 794.175.272 511.983.272zm447.745 511.744c0 3.584-.192 7.12-.272 10.67-49.025-13.007-173.393-37.439-326.801-3.742-13.52-30.896-28.512-62.575-45.28-94.816-1.408-2.704-2.784-5.28-4.176-7.952 164.128-63.344 233.888-148.672 262.768-201.952C916.657 293.44 959.73 397.776 959.73 512.016zM797.537 167.438c-14.912 35.2-69.04 126-244.719 191.888-78.897-144.224-140.225-230.672-174.593-274.64 42.256-13.264 87.184-20.416 133.76-20.416 108.432 0 207.983 38.768 285.552 103.168zM316.05 109.519c27.216 33.28 90.384 117.056 175.104 270.447-200 60.288-362.448 53.04-418.832 47.792 26.816-140.144 119.072-257.312 243.729-318.239h-.001zM64.273 512.014c0-6.896.21-13.745.53-20.577 19.249 1.935 49.153 4.079 88.289 4.079 86.895 0 217.712-10.752 369.008-58.144a2450.562 2450.562 0 0 1 8.544 16.273c14.431 27.776 27.487 55.185 39.407 82.064-27.376 8.609-55.392 19.073-83.872 31.97-182.624 82.703-268.192 200.703-298.673 252.335-76.273-80.32-123.232-188.752-123.232-308zM236.1 864.236c16.24-30.752 90.607-154.082 276.447-238.258 27.968-12.672 55.52-22.784 82.384-30.912 60.736 154.32 81.808 281.568 88.177 330.593-52.752 21.905-110.528 34.065-171.12 34.065-104.016 0-199.792-35.76-275.888-95.488zm507.518 30.798c-9.232-61.6-32.145-177.392-85.969-315.664 148.448-29.552 265.952-.56 295.616 8.08-22.223 130.208-100.735 241.488-209.647 307.584z"},"child":[]}]})(props);
};
function SlSocialDropbox (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M1023.42 224.752a32.048 32.048 0 0 0-14.976-24.914L723.26 21.87c-11.6-7.216-26.431-6.32-37.055 2.289L511.98 165.103 337.789 24.159c-10.592-8.56-25.536-9.535-37.056-2.287L15.549 199.84A32.046 32.046 0 0 0 .572 224.752c-.752 10.224 3.472 20.16 11.312 26.75L177.1 390.32 35.564 501.503c-8.096 6.32-12.624 16.177-12.224 26.417s5.681 19.664 14.225 25.36l130.976 87.312c-6.432 5.84-10.544 14.208-10.544 23.6v128.335c0 11.12 5.776 21.44 15.248 27.28l321.968 182.433c5.12 3.152 10.944 4.72 16.752 4.72s11.632-1.6 16.784-4.751l318.224-182.432a32.013 32.013 0 0 0 15.216-27.248V642c0-2.065-.24-4.08-.608-6.033l124.048-82.688a31.97 31.97 0 0 0 14.224-25.328c.4-10.256-4.095-20.08-12.16-26.416L846.781 390.384l165.312-138.88c7.856-6.592 12.08-16.528 11.328-26.751zM736.673 390.654L511.985 531.438 287.297 390.654 511.985 244.43zM86.801 230.847L315.265 88.255l142.368 115.184-227.344 147.968zm143.12 199.376l225.969 141.6-128.064 98.032-218-145.312zm-7.903 246l89.344 59.567c11.344 7.569 26.32 7.057 37.183-1.215l129.408-99.04v282.8l-255.936-143.68v-98.432zm576.191 98.431L541.953 920.335V632.559l132.656 101.968c5.712 4.4 12.624 6.624 19.504 6.624a31.81 31.81 0 0 0 17.744-5.376l86.336-57.568v96.448h.016zm115.248-250.175L695.426 669.806l-127.44-97.936 226-141.632zM793.666 351.405L566.321 203.437l142.4-115.184 228.464 142.592z"},"child":[]}]})(props);
};
function SlSocialFacebook (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M581.76 80.496c3.808 0 5.999.16 5.999.16h83.568l-.431 96h-83.008c-45.68 0-44.624 39.007-44.624 39.007v152.192h161.632l-22.56 95.872h-139.6v479.776h-95.904l-.064-479.776H319.36l-.256-95.872h127.712V218.671C446.83 88.591 554.864 80.495 581.76 80.495zm89.567.159h.16-.16zm-89.567-64.16c-23.008 0-67.97 3.809-110.562 29.473-40.32 24.256-88.368 73.935-88.368 172.688v85.183h-63.712c-17.008 0-33.312 6.784-45.344 18.817a64.003 64.003 0 0 0-18.655 45.408l.256 95.872c.128 35.248 28.752 63.776 64 63.776h63.408l.064 415.776c0 35.344 28.657 64 64 64h95.905c35.343 0 64-28.656 64-64V527.712h75.6c28.4 0 53.407-18.72 61.407-45.967l22.56-95.873c5.68-19.343 1.903-40.255-10.192-56.368a63.912 63.912 0 0 0-51.217-25.664h-97.632v-63.152l63.632-.032c35.216 0 63.84-28.464 64-63.712l.431-92.752a64.3 64.3 0 0 0 .097-3.536c0-35.344-28.592-64-63.935-64h-81.936c-1.84-.096-4.496-.16-7.807-.161z"},"child":[]}]})(props);
};
function SlSocialFoursqare (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M145 75.8c.8-1.8 1.598-3.799 2.197-5.599 14.4-46.2 45.801-69.8 94.4-69.8 115.2-.2 230.4 0 345.602 0h197.8c14.4 0 28.6 1.2 42.4 5.2 29.2 8.401 46.4 30.201 50 60.201 4.2 34.2-4.2 66.8-11 99.6-30.2 146.6-60.8 293.199-91.2 439.999-3.4 16-7.4 31.8-15 46.399-17.4 33.4-47.4 43.8-82.6 44.001-50.6.2-101.2.2-151.8 0-9.2 0-16.2 2.6-22.2 9.6C467.8 747.2 432 788.8 396 830.6c-50.2 58.4-100 117.2-150.8 175.2-15.6 17.8-37 22-59.8 16.8-21-4.8-33-19.2-38.4-39.401-.6-2-1.4-3.8-2-5.8V75.8zm86.198 848.401c1.4-2.6 2.004-4.202 3.004-5.402 32.2-40.4 64.4-80.6 96.8-121.001 36.6-45.6 73.2-91.2 109.4-137 15.6-19.599 34.199-29.799 60.199-29.2 57.6 1.2 115.399.401 172.999.2 27.8 0 39.4-10 44.999-37.2 8.6-42.599 17.6-85.399 26-127.998 5.6-28.4-8-44.6-36.6-44.6-62.2 0-124.4-1.8-186.4.6-51.8 1.8-77-21-74-74.6 2.2-40.8 21.4-61.6 62.4-61.8h237.2c24.6 0 36.4-9.4 41.4-33.4 9-42.6 17.8-85.2 26.6-128 6.2-30.599-6.8-46.599-37.8-46.599h-508.4c-30.4 0-41.4 11-41.4 41.8v789.2c0 4-1.2 8.6 3.6 15z"},"child":[]}]})(props);
};
function SlSocialGithub (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M158.6 522.6c-11.6 0-22.4-7.402-26-19.002-29.4-91.8-33.6-254 29.4-327.6-14-53.2-6.2-125.2 19.599-163.8 5.4-8 14.2-12.6 24-12.2 73.4 3.201 121.2 33.8 163.2 61.8 59.8-15.599 118-21 187-17.2 17 1 33.8 4.8 48.6 8.2 14 3.2 28.4 6.601 36.8 5.801 7.6-.8 21.2-10 32.2-17.6 10.2-7 21-14.2 32.2-19.2 32-14 60.8-20.4 99.6-21.8 15-.4 27.8 11.199 28.399 26.4s-11.2 27.799-26.4 28.2c-32.2 1.2-53.8 5.8-79.6 17.2-6.6 3-14.8 8.4-23.4 14.4-17 11.6-36.4 24.8-58 26.8-17.4 1.6-35.4-2.4-54.4-7-13.2-3-27-6.2-39.2-7-67.4-3.8-123.4 2-181.4 18.6-7.6 2.2-15.8 1-22.6-3.6l-6.8-4.6C305.198 85.2 270.6 62 220 55.8c-12.6 32.2-14.199 85.6-1.6 117.2 4.401 10.8 1.201 23.399-7.599 30.8-49.4 42-55.6 190.6-26.2 282.8 4.6 14.4-3.4 29.8-17.8 34.4-2.8 1.2-5.6 1.6-8.2 1.6zm207.999 269.998c-2 0-4.002-.2-6.002-.6-14.8-3.2-24-17.8-20.8-32.6l1.8-7.8c8.4-38 16.2-68.6 25.4-91.4-112.2-23.4-194-76.8-232.8-152.4-6.8-13.4-1.6-30 11.801-36.8s30-1.599 36.8 11.802c35 68.2 117.4 114.4 232.2 130.2 11 1.6 20 9.6 22.8 20.199 2.8 10.8-1.2 22.2-10.2 28.8-5.8 5.2-16.4 27-32.6 101.2l-1.8 8c-2.8 12.6-14 21.399-26.6 21.399zm-50.403 200.2c-1.8 0-3.4-.2-5.2-.6-14.8-3-24.6-16.8-21.6-31.6 5-25.4 22.8-36 33.4-42.2 7.2-4.2 9.4-5.8 10.6-8.6 6.2-13.2 4.6-47.4 3.2-74.8-.6-11.6-1.199-23.4-1.399-34.8-63.4 11-132.2 14.4-168.601-45.8-7.2-12-11.8-24.2-16-35.2-4.8-12.4-8.8-23.2-15.4-31.2-9.599-11.6-7.8-28.8 3.8-38.4s28.8-8 38.4 3.8c12.2 15 18.6 31.8 24.2 46.6 3.6 9.6 7 18.6 11.6 26.2 19.6 32.4 62.399 30.4 144.8 13.8 8.6-1.8 17.399.8 23.8 6.6 6.4 6 9.6 14.6 8.6 23.199-2 17.4-.8 40.2.2 62.2 2 38.6 3.8 75-8.4 100.8-8.8 18.6-23 27-32.4 32.4-2.6 1.6-6.6 3.8-7.4 4.8-1.8 13.4-13.2 22.801-26.2 22.801zm397.599-5.2c-9 0-17.6-4.397-23-12.397-2.2-3.6-5.4-5.8-11-9.6-8.8-6.2-20.8-14.6-29.8-32-16.2-31.8-13.6-78-11-126.8 1.599-30 3.198-61-.002-85.4-2.8-20.6-10-29.8-20-42.6-6.4-8.4-13.8-17.801-19.6-30.202-3.8-8.2-3.2-17.6 1.2-25.4 4.6-7.8 12.6-12.8 21.6-13.4 102.6-7.6 183.6-56 222.6-132.6 6.8-13.4 23.2-18.8 36.8-12 13.4 6.8 18.8 23.2 12 36.8-41.6 82.2-121 137.6-221.4 156.6 9 13.2 17.8 30 21.2 55.8 4 29.4 2.2 63 .4 95.4-2 37.6-4.2 80.2 5.201 99 2.4 4.8 5.4 7 12.2 11.8 7.4 5 17.4 12 25.6 24.599s4.601 29.6-7.998 37.8c-4.6 3.2-9.8 4.6-15 4.6zm155.4-470.596c-2.4 0-5.002-.4-7.402-.999-14.6-4.2-23-19.2-18.8-33.8 30.2-106.2 9.6-244.2-43.2-289.2-8.599-7.4-11.8-19.2-8-29.8 12.8-36.6 4.2-91.6-10.399-124.8-6-13.8.2-30 14-36s30 .2 36 14c16.8 38 27.8 97.8 16.8 147.6 65.2 72 78 225.6 47.4 333.2-3.6 12-14.399 19.8-26.399 19.799zm-245.601 507.401c-5 0-10.2-1.4-14.8-4.4-5-3.2-20-12.8-47.8-56-12.6-19.6-21.8-117.2-27.399-290.4-.4-15 11.4-27.799 26.4-28.2s27.8 11.4 28.2 26.4c3.6 113.4 12 242 19.6 264 20.4 31.6 30 38 30.4 38.2 12.6 8.2 16.399 25 8.199 37.8-5 8.2-13.8 12.6-22.8 12.6zm-207.401 0c-9 0-17.8-4.4-23-12.6-8.2-12.6-4.4-29.6 8.2-37.8.4-.2 10-6.6 30.4-38.2 7.6-21.8 15.8-150.6 19.6-264 .4-15 13.2-27 28.2-26.4 15 .4 27 13.2 26.4 28.2-5.6 173.2-14.8 271-27.4 290.4-27.8 43-42.8 52.8-47.8 56-4.4 3-9.6 4.4-14.6 4.4z"},"child":[]}]})(props);
};
function SlSocialGoogle (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M707 360c-70-75-128-87-184-88h-2c-126 0-245 104-245 248 0 151 136 239 244 239h1c60 0 133-11 197-103H472V401l523 2c5 26 14 91 14 125 0 289-194 495-493 495C232 1023 1 797 1 515S232 8 516 8c139 0 288 55 382 180zm-187 93v154h263c-12 65-81 195-263 195-159 0-287-130-287-285 0-156 131-287 287-287 91 0 152 40 185 72l126-119C751 108 646 63 520 63 264 63 56 264 56 517c0 251 208 453 464 453 270 0 445-185 445-442 0-29-2-52-6-75H520z"},"child":[]}]})(props);
};
function SlSocialInstagram (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M511 4c138 0 155 1 209 3 53 2 90 11 123 24 34 13 62 30 90 58s45 56 58 90c13 33 22 70 24 123 2 54 3 71 3 209s-1 155-3 209c-2 53-11 90-24 123-13 34-30 62-58 90s-56 45-90 58c-33 13-70 22-123 24-54 2-71 3-209 3s-155-1-209-3c-53-2-90-11-123-24-34-13-62-30-90-58s-45-56-58-90C18 810 9 773 7 720c-2-54-3-71-3-209s1-155 3-209c2-53 11-90 24-123 13-34 30-62 58-90s56-45 90-58c33-13 70-22 123-24 54-2 71-3 209-3zm0 66c-144 0-161 1-217 3-52 2-81 12-100 19-49 20-82 53-102 102-7 19-17 48-19 100-2 56-3 73-3 217s1 161 3 217c2 52 12 81 19 100 20 49 53 82 102 102 19 7 48 17 100 19 56 2 73 3 217 3s161-1 217-3c52-2 81-12 100-19 49-20 82-53 102-102 7-19 17-48 19-100 2-56 3-73 3-217s-1-161-3-217c-2-52-12-81-19-100-20-49-53-82-102-102-19-7-48-17-100-19-56-2-73-3-217-3zm0 644c112 0 203-91 203-203s-91-203-203-203-203 91-203 203 91 203 203 203zm0-463c144 0 260 116 260 260S655 771 511 771 251 655 251 511s116-260 260-260zm332-10c0 34-28 60-62 60s-60-26-60-60 26-62 60-62 62 28 62 62z"},"child":[]}]})(props);
};
function SlSocialLinkedin (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M997.795 1002.43H789.769c-14.715 0-26.607-11.892-26.607-26.607V640.806c0-114.898-59.263-114.898-78.816-114.898-52.611 0-74.986 41.525-82.243 59.466-3.427 8.064-5.04 21.77-5.04 40.921v349.732c0 14.715-11.892 26.607-26.606 26.607H362.23c-7.055 0-13.909-2.822-18.948-7.86s-7.861-11.895-7.66-18.95c0-5.643 2.822-567.432 0-624.881-.403-7.257 2.217-14.312 7.257-19.553s11.893-8.265 19.35-8.265h208.228c14.714 0 26.607 11.892 26.607 26.607v15.723c35.074-31.244 85.669-57.046 161.058-57.046 166.702 0 266.28 115.3 266.28 308.409v359.005c0 14.715-11.893 26.607-26.607 26.607zm-181.418-53.214l155.012-.004V616.815c0-162.268-77.606-255.193-213.065-255.193-90.507 0-134.45 45.153-162.066 86.476-3.225 10.885-13.506 18.949-25.6 18.949h-1.41c-9.677 0-18.546-5.242-23.181-13.707-3.628-6.653-4.435-14.313-2.016-21.368v-55.835H389.443c1.411 111.068 0 470.477-.403 572.877h154.809V626.09c0-26.809 2.822-46.16 8.869-60.875 23.383-57.852 72.566-92.724 131.427-92.724 83.855 0 132.03 61.28 132.03 168.113v308.611h.204zm-569.246 53.21H38.904c-14.715 0-26.607-11.892-26.607-26.607V349.73c0-14.715 11.892-26.608 26.607-26.608h208.227c14.715 0 26.607 11.893 26.607 26.607V975.82c0 14.715-11.892 26.608-26.607 26.608zM65.513 949.213h155.01V376.336H65.514v572.876zm77.605-658.344l-1.412-.001c-82.041 0-141.707-56.844-141.707-135.055 0-78.009 60.674-134.854 144.529-134.854 82.444 0 141.305 55.231 142.918 134.249 0 78.816-60.674 135.66-144.328 135.66zm1.41-216.492c-54.627 0-91.313 32.857-91.313 81.639 0 47.974 36.284 81.637 88.492 81.637h1.41c54.426 0 91.112-32.857 91.112-81.638-1.008-49.386-36.283-81.638-89.701-81.638z"},"child":[]}]})(props);
};
function SlSocialPintarest (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M886.796 351.459c-3.822-186.292-156.11-321.28-362.52-321.28-22.331 0-45.064 1.61-67.798 4.828C291.11 57.941 164.165 177.038 140.425 331.141c-16.9 109.844 18.508 241.816 135.393 271.591l16.9 4.225 9.858-14.284c3.42-4.829 33.395-49.088 28.566-85.703-2.414-18.306-13.48-29.572-20.118-36.21l-3.219-3.22c-18.306-28.768-25.95-77.452-18.306-118.291 18.508-100.59 102.399-173.617 208.62-181.664 7.445-.604 14.888-.805 22.132-.805 110.045 0 184.48 65.584 189.712 166.978 4.828 97.974-24.544 187.297-76.85 233.166l-3.42 3.018c-12.272 10.864-21.929 19.514-42.047 22.532-5.231.805-10.462 1.207-15.29 1.207-40.237 0-62.165-26.556-62.97-52.71-1.005-29.371 10.663-61.56 23.136-95.76 15.29-42.047 31.183-85.703 25.349-130.768-6.238-46.673-48.686-83.087-96.768-83.087-12.272 0-24.745 2.414-36.816 6.84C336.975 271.39 324.1 385.66 356.087 477.8c-7.644 36.413-17.502 72.424-27.963 110.447-31.183 114.471-63.572 232.965-39.029 371.778l5.432 30.78 28.769-11.87c27.963-11.668 43.051-37.419 55.524-58.744 2.414-4.024 4.828-8.048 7.041-11.87 40.839-64.177 63.773-140.826 81.477-215.262 44.057 33.194 89.122 43.858 153.298 36.817 177.44-19.314 269.58-209.428 266.16-378.418zM406.587 481.223l1.413-7.04-2.615-6.84C378.025 395.12 384.26 307.205 442 285.277c6.237-2.414 12.674-3.621 18.911-3.621 23.538 0 44.259 17.3 47.076 39.43 4.426 32.994-8.852 68.803-22.733 107.027-13.48 37.016-27.562 75.24-26.153 114.47 1.609 49.089 41.845 101.194 113.062 101.194 7.444 0 15.088-.604 22.933-1.81 34.804-5.232 54.116-22.332 67.997-34.805l3.22-2.817c63.37-55.727 99.38-160.54 93.748-273.402-6.84-136.399-115.678-224.918-265.556-213.652-129.358 9.859-231.356 99.182-254.09 222.505-9.858 53.111.401 115.275 25.349 154.506 3.017 4.627 6.437 8.248 9.656 11.467 2.213 2.414 5.834 5.834 6.035 7.444.805 6.84-3.42 20.923-10.662 34.804-72.827-30.982-93.347-128.956-80.874-209.628 20.118-131.973 129.961-234.172 273.402-254.09 20.52-2.816 41.04-4.225 60.956-4.225 177.842 0 309.212 114.471 312.23 272.194 3.017 146.861-73.633 311.426-221.097 327.721-10.058 1.006-19.514 1.609-28.365 1.609-53.514 0-82.281-18.508-116.884-52.91L437.97 596.7l-9.858 44.259c-18.911 84.093-40.839 172.008-84.294 240.409-2.817 4.426-5.634 9.254-8.451 14.284-1.006 1.81-2.012 3.62-3.219 5.23-8.047-107.428 18.508-204.8 44.461-299.554 10.662-39.23 21.928-80.07 29.976-120.104z"},"child":[]}]})(props);
};
function SlSocialReddit (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M664.6 729.8c-9.6-2.6-21.198.8-35.398 10.201l-1.4 1.2c-23 23-64.8 34.6-124.2 34.6s-101.2-11.6-124.2-34.6c-9.6-9.6-29-9.6-38.6 0-10 10-10 28.6.6 39.2C384 816 437.6 832.6 509.8 832.6c75 0 135-18.8 169-52.8 4.8-4.8 7.6-11.8 7.6-19.2 0-6.8-2.4-13.4-6.4-18-4.6-8.4-10.8-11.6-15.4-12.8zM438.2 579.399c0-44.2-37.2-84.4-78.2-84.4s-78.2 40.2-78.2 84.4c0 42.4 35.8 78.2 78.2 78.2s78.2-35.8 78.2-78.2zm221.401-78.2c-42.4 0-78.2 35.8-78.2 78.2s35.8 78.2 78.2 78.2 78.2-35.8 78.2-78.2-35.8-78.2-78.2-78.2zm237-124.8c-25.6 0-55.6 11.6-75.8 28.6-68-43.2-159.8-70-267.2-77.8l50-167 140.2 33.6c4.2 51.8 50.4 95.599 102.801 95.599 55 0 103.2-48.2 103.2-103.2s-48.2-103.2-103.2-103.2c-37.8 0-76 23-92.8 54.6l-166.8-41.8-2.4-.2c-11.4 0-27.2 10-28.2 26.6l-66 204.2c-105.2 1.2-208.601 29.2-292.4 79.4-25-15.6-49.6-23.2-75-23.2-67.2 0-122 54.6-122 122 0 42 20.2 79.4 56.2 99.4V629.4c0 87.2 47 163.2 135.2 220 83 57.4 195.8 89 317.6 89s237.8-31.6 320.8-89c87.2-60.4 138.4-138.6 138.4-220v-26c26-22.8 52.8-63.6 52.8-105.2-.2-67.2-58-121.8-125.401-121.8zm65.4 128.201c0 11.4-6.401 27.6-17.001 39.6-12.6-33.4-36.4-65-74.6-99.4 7.6-3.2 16-5.4 26.4-5.4 38.401-.2 65.201 26.8 65.201 65.2zM905.8 629.399c0 78-59 137.201-107.8 172.801-84.8 52.2-184.399 79.8-288.199 79.8-107.2 0-212.2-29-288-79.6-74.8-49.8-114.2-109.6-114.2-173s39.4-123.2 114.2-173c77-51.2 177-79.6 281.8-79.6 107.2 0 212.2 29 288 79.6 74.6 49.799 114.199 109.6 114.199 173zM150.399 442.4c-32.2 25.6-59.6 59.8-78.8 98.6-7.8-12.599-14-25-14-36.4 0-38.4 26.8-65.2 65.2-65.2 13-.2 21 0 27.6 3zM800.2 186.401c0-26.2 20.4-46.6 46.6-46.6s46.601 20.4 46.601 46.6-20.4 46.6-46.6 46.6c-26.2-.2-46.601-20.6-46.601-46.6z"},"child":[]}]})(props);
};
function SlSocialSkype (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M977.768 574.454a487.62 487.62 0 0 0 4.868-68.74c0-261.78-212.91-474.894-474.894-474.894-21.9 0-44.204 1.622-65.901 4.46C398.852 12.166 350.187 0 301.116 0c-163.84 0-297.061 133.22-297.061 296.858 0 48.26 11.76 95.91 34.268 138.29-3.447 23.32-5.272 47.044-5.272 70.566 0 261.779 212.91 474.894 474.894 474.894 18.452 0 37.107-1.014 55.357-3.244C610.954 1007.779 666.11 1024 723.087 1024c163.84 0 296.858-133.22 296.858-296.858 0-53.936-14.6-106.657-42.176-152.688zm-92.87 314.5c-43.19 43.19-100.777 67.118-162.015 67.118-45.218 0-88.814-13.18-126.326-38.12l-16.83-11.153-20.074 2.636c-17.034 2.23-34.472 3.244-51.708 3.244-54.951 0-108.28-10.747-158.365-32.038-48.463-20.48-92.059-49.883-129.368-87.193S153.5 712.543 133.019 664.08c-21.29-50.085-32.038-103.414-32.038-158.365 0-21.494 1.622-43.19 5.07-64.482l2.838-18.25-8.921-16.222c-18.25-33.457-27.984-71.376-27.984-109.903 0-61.237 23.724-118.622 67.117-162.015 43.19-43.19 100.778-67.118 162.016-67.118 39.135 0 77.866 10.139 111.73 29.198l16.221 9.125 18.452-2.636c19.872-3.042 40.353-4.46 60.427-4.46 54.951 0 108.28 10.747 158.365 32.038 48.463 20.48 92.059 49.882 129.368 87.192s66.712 80.905 87.192 129.368c21.291 50.085 32.038 103.414 32.038 158.365 0 21.088-1.622 42.379-4.867 63.265l-3.042 19.872 10.747 17.236c22.508 36.296 34.471 78.067 34.471 120.853-.203 61.034-24.13 118.622-67.32 161.812v.001zM578.714 461.51L482.6 439.816c-52.316-11.761-78.677-29.808-78.677-54.546 0-17.64 7.3-32.038 21.697-42.989s34.878-16.424 61.035-16.424c30.822 0 55.965 6.489 75.026 19.669 5.678 3.65 17.844 15.613 36.499 35.688 12.166 12.977 25.347 19.669 39.338 19.669 14.397 0 26.97-4.055 37.107-12.166 10.34-8.111 15.411-19.264 15.411-33.256 0-32.241-21.29-60.224-63.873-83.948-40.15-22.508-84.15-33.66-132.006-33.66-55.154 0-100.98 11.76-137.48 35.08-42.582 27.577-63.873 67.32-63.873 119.027 0 70.97 41.163 117 123.488 137.885l129.774 32.848c32.646 8.315 49.07 25.955 49.07 52.519 0 17.844-7.908 32.849-23.724 45.42-17.236 13.992-40.15 21.089-68.537 21.089-33.052 0-59.615-7.908-79.69-23.725-4.665-3.244-17.44-17.641-38.325-43.393-12.976-15.817-27.78-23.725-44-23.725-13.992 0-25.55 4.46-34.675 13.383S292.6 624.538 292.6 638.53c0 31.834 17.034 59.818 51.1 83.947 39.541 28.997 92.87 43.394 159.38 43.394 67.117 0 118.824-15.208 155.323-45.624 34.47-27.983 51.707-65.901 51.707-113.553.608-76.648-43.393-125.11-131.396-145.186z"},"child":[]}]})(props);
};
function SlSocialSoundcloud (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M1021.8 577.8c0 88-71.4 159.399-159.399 159.399h-63.8c-17.6 0-31.8-14.2-31.8-31.8s14.2-31.8 31.8-31.8h63.8c52.8 0 95.6-42.8 95.6-95.6S915.2 482.4 862.4 482.4h-.4c-41.4 0-76.801-26.4-90.001-63.2 0-.2-.4-.4-.4-.8-24.8-69.8-89-121-166-126.6-16.6 1-29.8 14.799-29.8 31.599v381.8c0 17.6-14.2 31.8-31.8 31.8s-31.8-14.2-31.8-31.8v-381.8c0-52.4 42.2-94.801 94.4-95.4 104 6 191.2 74.2 224.8 168.2.2.2.4.4.6.4 4.201 12.8 16.201 22 30.201 22h.4c1.8 0 3.6.2 5.2.2h1c85 3.4 153 73.2 153 159zM416.4 737.199c-17.6 0-31.8-14.201-31.8-31.8v-350.6c0-17.6 14.2-31.8 31.8-31.8s31.8 14.2 31.8 31.8v350.6c0 17.4-14.2 31.8-31.8 31.8zm-127.599-.001c-17.6 0-31.8-14.201-31.8-31.8v-366.6c0-17.6 14.2-31.8 31.8-31.8s31.8 14.2 31.8 31.8v366.4c.2 17.599-14.2 32-31.8 32zm-127.401-.001c-17.6 0-31.8-14.201-31.8-31.8v-255c0-17.6 14.2-31.8 31.8-31.8s31.8 14.2 31.8 31.8v255c0 17.4-14.2 31.8-31.8 31.8zM34 673.396c-17.6 0-31.8-14.2-31.8-31.8v-127.4c0-17.6 14.2-31.8 31.8-31.8s31.8 14.2 31.8 31.8v127.4c0 17.6-14.2 31.8-31.8 31.8zm637.2 0c17.6 0 31.8 14.2 31.8 31.8s-14.2 31.8-31.8 31.8-31.8-14.2-31.8-31.8 14.2-31.8 31.8-31.8z"},"child":[]}]})(props);
};
function SlSocialSpotify (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M417.534 310.746c154.872 4.207 274.084 22.042 384.678 78.14 15.627 8.013 34.46 19.433 40.67 33.859 5.81 13.424 2.404 41.473-7.413 48.484-13.824 10.018-41.673 14.826-56.099 7.413-113.8-58.905-235.013-77.738-360.634-72.729-50.288 2.004-100.777 11.42-150.265 21.037-32.257 6.411-58.904 2.805-68.32-30.454-10.218-35.262 14.826-53.294 44.879-58.904 67.518-12.02 135.839-21.237 172.503-26.847zm23.042 152.672c110.194 6.612 214.176 29.251 309.143 83.347 15.627 8.815 32.056 30.254 33.658 47.084 2.606 30.052-31.855 40.27-67.518 21.236-123.217-65.515-253.646-80.14-389.685-57.1-15.227 2.606-31.255 11.822-45.08 9.017-17.63-3.807-33.458-16.629-50.087-25.445 10.418-15.828 18.232-42.476 31.856-45.882 58.102-14.425 118.208-22.04 177.712-32.257zm-20.435 153.069c115.002 1.803 199.954 19.434 277.891 63.512 20.236 11.42 44.077 26.646 24.443 51.289-7.814 9.817-39.67 11.02-53.695 3.406C568.203 681 461.616 674.387 351.823 688.212c-18.232 2.204-36.465 10.418-53.895 8.615-16.63-1.803-32.257-13.023-48.286-20.034 11.019-13.424 20.236-36.063 33.659-38.868 53.294-11.82 107.99-17.23 136.84-21.438zM1024 512.104c0 141.248-50.089 262.062-150.064 362.036S653.348 1024.203 511.9 1024.203c-141.248 0-262.061-50.088-362.035-150.063S-.198 653.552-.198 512.104c0-141.248 50.088-262.062 150.063-362.036C250.041 50.092 370.653.005 511.901.005s262.062 50.088 362.036 150.063C973.913 250.044 1024 370.856 1024 512.104zm-64.109 0c0-124.018-43.675-229.603-131.027-316.955-87.153-87.354-192.939-131.03-316.957-131.03-123.818 0-229.604 43.677-316.957 131.029S63.921 388.086 63.921 512.104s43.677 230.004 131.029 317.959c87.354 87.955 192.938 132.032 316.956 132.032s229.604-44.077 316.956-132.032c87.354-87.955 131.029-193.941 131.029-317.959z"},"child":[]}]})(props);
};
function SlSocialSteam (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M760 40c54 0 128 30 163 65l30 30c37 39 60 104 64 160v37c-8 116-89 204-183 236-54 19-71 8-87 20L547 735c-9 7-12 8-17 12-14 113-113 176-211 176-71 0-140-33-177-104-13-25-14-34-19-46l-99-40c-8-3-18-9-20-21l-2-12V487c1-21 13-32 29-32 4 0 8 1 13 2 61 25 123 48 183 74l16-7c33-14 52-16 88-16 5-7 12-17 16-23l89-127c7-9 31-43 39-57 6-89 34-135 89-191 43-41 119-70 196-70zM326 552c-34 0-44 4-84 21-5 2-10 3-14 3-12 0-24-7-34-11-49-20-99-40-148-60v189l99 40c25 12 19 34 36 65 28 55 83 80 139 80 76 0 152-47 165-132l2-11c3-19 16-24 33-37l201-147c29-21 53-10 99-26 78-27 146-100 153-197v-32c-3-45-23-97-52-131l-29-29c-35-32-93-53-150-53-30 0-61 6-88 19-85 42-131 110-139 216-6 11-38 57-44 65l-88 126c-15 16-15 39-40 42h-17zm-9 283c-22 0-45-11-58-20-11-8-33-26-37-40 24 6 57 29 94 29 20 0 42-8 64-28 19-18 29-44 29-70-4-64-50-91-104-106 2-3 1-4 6-4h11c73 0 121 57 121 119 0 60-42 120-126 120zm303-530c0-73 59-133 132-133s133 60 133 133-60 132-133 132-132-59-132-132zm44 0c0 49 39 88 88 88s89-39 89-88-40-89-89-89-88 40-88 89z"},"child":[]}]})(props);
};
function SlSocialStumbleupon (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M777.2 900.6c-129.8 0-236.401-105.601-237.401-235.4v-134c0-7.8 4-15 10.6-19.2s14.8-4.8 22-1.4l57.8 27 89.4-26.8c7-2 14.4-.8 20.2 3.6s9.2 11.201 9.2 18.401v134.8c0 15.4 12.6 28 28 28s28-12.6 28-28v-137.4c0-6 2.4-11.8 6.6-16.2 4.201-4.2 10-6.6 16.201-6.6H992c12.6 0 22.8 10.2 22.8 22.8v133.2c-.2 130.8-106.8 237.2-237.6 237.2zM585.398 567.198V665.2c1 104.6 87 189.8 191.8 189.8 105.8 0 191.8-86 191.8-191.8V553h-118.6v114.6c0 40.6-33 73.6-73.6 73.6s-73.8-33-73.8-73.6V563.4l-68.4 20.4c-5.4 1.6-11.2 1.2-16.2-1.2zm-339 333.403c-131 0-237.6-106.4-237.6-237.4v-133c0-12.6 10.2-22.8 22.8-22.8h164.2c12.6 0 22.8 10.2 22.8 22.8v131.4c0 15.4 12.6 28 28 28s28-12.6 28-28v-310c4.6-129.2 108.6-229.8 237-229.8 129 0 233 101.2 237 230.2v68.6c0 10.2-6.6 19-16.4 22l-97.8 29.2c-5.4 1.599-11.2 1.199-16.2-1.202l-65.6-30.6c-8-3.8-13.2-11.8-13.2-20.8v-59c0-15.4-12.6-28-28-28s-28 12.6-28 28l-.2 306.2c-1.4 129.2-107.8 234.2-236.8 234.2zM54.598 553v110.198c0 105.8 86 191.8 191.8 191.8 104.2 0 190-84.8 191.4-189l.2-305.8c0-40.6 33-73.6 73.6-73.6 40.599 0 73.599 33 73.599 73.6v44.4l44.6 20.8 73.2-21.8v-50.8c-3.2-103.6-87.2-185.198-191.2-185.198-103.6 0-187.6 81.2-191.2 184.8v309.2c0 40.6-33 73.6-73.599 73.6s-73.6-33-73.6-73.6V553h-118.8z"},"child":[]}]})(props);
};
function SlSocialTumblr (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M528.016 63.744l-.002 223.871h224.32v95.968H529.006l-.32 278.528c0 51.776 2.688 85.009 8.16 99.745 8.528 23.248 39.568 53.008 97.184 53.008 44.689 0 104.977-13.44 150.16-47.248v149.312c-37.68 17.967-72.72 25.215-103.248 32.464-30.56 7.215-63.663 10.847-99.15 10.847-39.537 0-153.665-1.088-200.497-120.399-8.432-21.471-12.655-52.655-12.655-93.471V383.745H239.792l.624-98.128c42.656 0 170.624-25.905 170.624-221.872zm-.002-64.001L411.038-.259c-35.344 0-64 28.656-64 64 0 146.496-81.632 157.872-106.624 157.872-35.216 0-63.84 28.464-64 63.68l-.624 98.128c-.096 17.024 6.624 33.376 18.624 45.471a64.057 64.057 0 0 0 45.376 18.849h64.848v298.624c0 49.376 5.6 87.632 17.088 116.88 28.847 73.44 97.376 161.009 260.064 161.009 40.288 0 78.591-4.224 113.872-12.56l7.055-1.664c29.872-7.024 68.032-15.776 109.008-35.312a63.979 63.979 0 0 0 36.464-57.777V767.63a63.985 63.985 0 0 0-35.344-57.214c-9.055-4.56-18.88-6.784-28.656-6.784a64.008 64.008 0 0 0-38.337 12.752c-38.095 28.529-86.847 34.496-111.808 34.496-25.6 0-35.119-9.28-37.215-11.744-1.087-5.024-4.127-23.776-4.127-77.008l.223-214.528h159.408c35.344 0 64-28.657 64-64V287.63c0-35.344-28.656-64-64-64h-160.32V63.743c0-35.344-28.656-64-64-64z"},"child":[]}]})(props);
};
function SlSocialTwitter (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M684.4 158.688c52.88 0 100.621 21.636 134.253 56.372 41.84-8.096 81.28-22.848 116.721-43.28-13.712 41.633-42.88 76.56-80.815 98.656 37.12-4.368 72.656-13.904 105.632-28.16-24.72 35.744-55.84 67.216-91.776 92.368.336 7.632.529 15.344.529 23.023 0 235.728-185.008 507.615-523.312 507.615-103.84 0-200.56-29.631-281.903-80.223a377.607 377.607 0 0 0 43.84 2.527c86.16 0 165.503-28.496 228.463-76.4-80.528-1.376-148.496-53.008-171.808-123.84a188.078 188.078 0 0 0 34.624 3.216c16.72 0 33.008-2.16 48.4-6.256-84.128-16.336-147.536-88.448-147.536-174.93v-2.287c24.816 13.376 53.152 21.408 83.344 22.336-49.376-32.033-81.84-86.56-81.84-148.465 0-32.72 9.089-63.376 24.913-89.632C216.817 299.2 352.337 370.24 505.217 377.712c-3.153-13.025-4.784-26.784-4.784-40.624 0-98.544 82.351-178.4 183.967-178.4zm275.789 83.621h.16-.16zM684.397 94.692c-125.664 0-229.773 91.809-245.806 210.433-102.816-20.656-196.32-75.088-263.504-154.944a63.993 63.993 0 0 0-48.977-22.815 66.23 66.23 0 0 0-5.023.192 64.115 64.115 0 0 0-49.776 30.784 237.575 237.575 0 0 0-34.097 122.656c0 28.848 5.183 56.944 15.008 83.216-10.464 11.632-16.496 26.848-16.496 42.912v2.288c0 62.689 24.784 120.864 65.936 164.464-2.368 10.976-1.84 22.464 1.776 33.472 14.193 43.183 40.033 80.4 73.537 108.75-22.497 5.009-45.712 7.537-69.409 7.537-12.528 0-24.72-.688-36.256-2.097-2.56-.32-5.088-.432-7.632-.432-26.88 0-51.28 16.944-60.336 42.784-9.936 28.32 1.089 59.712 26.56 75.568 94.529 58.817 203.712 89.872 315.712 89.872 364.032 0 583.008-284.976 587.264-563.344a429.584 429.584 0 0 0 78.448-85.152 63.392 63.392 0 0 0 12.96-38.496c0-21.776-10.895-41.024-27.487-52.593 7.184-24.624-1.009-51.28-21.009-67.568-11.68-9.504-26-14.336-40.4-14.336a63.75 63.75 0 0 0-31.968 8.56c-21.152 12.193-43.776 21.841-67.6 28.786-43.105-32.432-96.545-50.496-151.425-50.497z"},"child":[]}]})(props);
};
function SlSocialVkontakte (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M3 248c0-38 26-53 58-55l149 1c9 0 17 6 20 15 34 110 76 178 126 255 3 6 8 9 13 9 4 0 8-2 11-7l3-11 1-173c0-25-12-29-40-33-11-2-18-12-18-22 0-2 0-4 1-6 14-43 58-65 120-65l56-1c46 0 88 20 88 79v227c4 3 8 5 13 5 8 0 18-5 26-18 52-73 111-160 119-206 0-2 1-3 2-5 11-22 39-37 51-41 2-1 5-2 9-2h155l10 1c15 0 26 10 31 19 9 14 7 29 8 35v7c-15 91-119 193-163 259-6 8-9 15-9 22 0 6 3 12 8 18l146 184c8 11 12 24 12 35 0 33-31 52-61 55l-17 1H779c-3 0-5 1-8 1-17 0-31-9-41-19-32-39-63-79-94-118-6-8-8-9-14-13-7 29-13 59-20 89l-3 17c-5 18-18 37-42 42l-14 1h-98C272 830 117 584 8 277c-3-8-5-19-5-29zm601 259c-26 0-55-15-55-43V234c0-27-12-37-45-37l-57 2c-32 0-50 5-65 15 23 11 44 26 44 68v176c-3 35-32 58-60 58-19 0-36-11-46-29-45-68-83-132-116-224l-9-26-133-1c-18 0-16 1-16 10 0 6 1 14 2 19l21 56c109 282 246 467 376 467h100c14 0 13-17 16-27l19-88c4-9 7-17 14-24 8-8 17-11 26-11 19 0 37 15 49 29l85 108c7 11 13 13 17 13h165c16 0 30-5 30-15 0-3-1-7-3-10L818 582c-12-15-17-30-17-45 0-16 6-32 16-46 42-63 132-153 153-227l3-13c-1-5-1-9-2-14H814c-10 4-18 10-24 18l-6 19c-23 64-86 152-131 213-15 14-32 20-49 20z"},"child":[]}]})(props);
};
function SlSocialYoutube (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M940.736 189.696C912.992 169.728 835.68 143.2 511.728 143.2c-347.152 0-398.656 30.464-415.185 40.432C8.575 236.479.223 470.447-.544 517.887.512 580.545 10.64 789.008 96.48 840.577c16.497 9.935 67.712 40.223 415.248 40.223 324.16 0 401.376-26.4 429.008-46.288 74.976-53.935 83.6-239.68 83.808-317.439-.192-62.528-6.752-271.872-83.807-327.376zm-37.376 592.88c-11.152 8.032-75.186 34.223-391.634 34.223-305.936 0-370.128-23.744-382.256-31.056-30.88-18.528-63.472-116.88-66.031-268.032 2.528-150.816 35.568-260.912 66.097-279.216 12.16-7.344 76.591-31.28 382.19-31.28 316.192 0 380.4 26.369 391.633 34.433 27.409 19.744 56.752 123.68 57.184 275.632-.432 154.336-29.968 245.712-57.184 265.296zM720.415 486.83L432.481 310.141a32.003 32.003 0 0 0-32.257-.464 32.016 32.016 0 0 0-16.288 27.872v353.44a32.016 32.016 0 0 0 32 32 32.02 32.02 0 0 0 16.527-4.592L720.4 541.645c9.6-5.807 15.472-16.19 15.472-27.407s-5.856-21.632-15.456-27.408zM447.953 634.301V394.204l194 120.032z"},"child":[]}]})(props);
};
function SlSpeech (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M960 63.6H64.001c-35.344 0-64 28.656-64 64v577.504c0 35.344 28.656 64 64 64h127.536v159.312a31.968 31.968 0 0 0 19.632 29.504 31.99 31.99 0 0 0 12.367 2.496 31.931 31.931 0 0 0 22.432-9.184l185.024-182.128H960c35.343 0 64-28.656 64-64V127.6c0-35.343-28.657-64-64-64zm.001 641.488H404.785L255.537 852V705.088H64.001V127.6h896v577.488zm-736-256.08h576c17.664 0 32-14.336 32-32s-14.336-32-32-32h-576c-17.664 0-32 14.336-32 32s14.336 32 32 32zm0-128h576c17.664 0 32-14.336 32-32s-14.336-32-32-32h-576c-17.664 0-32 14.336-32 32s14.336 32 32 32zm0 256h384c17.664 0 32-14.336 32-32s-14.336-32-32-32h-384c-17.664 0-32 14.336-32 32s14.336 32 32 32z"},"child":[]}]})(props);
};
function SlSpeedometer (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M511.984 36.128C230.016 36.128.639 265.536.639 547.504c0 177.152 89.68 339.185 239.903 433.408 14.944 9.472 34.688 4.88 44.097-10.096s4.88-34.72-10.096-44.095c-54.096-33.952-99.04-78.048-133.424-128.88l33.552-19.376c15.311-8.848 20.56-28.4 11.712-43.711-8.88-15.344-28.464-20.56-43.712-11.712l-33.6 19.391c-24.4-50.511-39.297-105.792-43.281-163.424h35.616c17.68 0 32-14.32 32-32s-14.32-32-32-32H65.95c4.24-58.687 19.776-114.304 44.56-164.592l32.16 18.56a31.745 31.745 0 0 0 15.97 4.288c11.055 0 21.807-5.744 27.743-16 8.847-15.312 3.6-34.88-11.712-43.713l-31.84-18.368c32.112-46.832 72.864-87.296 119.984-119.023l18.016 31.2c5.935 10.288 16.687 16 27.743 16 5.44 0 10.944-1.376 15.969-4.288 15.311-8.848 20.56-28.4 11.712-43.712l-17.953-31.072c49.329-23.792 103.68-38.656 160.976-42.816v39.872c0 17.68 14.32 32 32 32s32-14.32 32-32v-40c58.592 4.08 114.128 19.391 164.384 43.95l-17.36 30.049c-8.848 15.311-3.6 34.88 11.712 43.712a31.745 31.745 0 0 0 15.969 4.288c11.055 0 21.807-5.712 27.743-16l17.28-29.936a451.19 451.19 0 0 1 118.88 118.816l-29.968 17.312c-15.311 8.847-20.56 28.4-11.711 43.71 5.935 10.289 16.687 16 27.743 16 5.44 0 10.944-1.375 15.969-4.287l30.127-17.392C938.638 401.839 954 457.39 958.094 516H922.96c-17.68 0-32 14.32-32 32s14.32 32 32 32h35.12c-4.048 56.88-18.592 111.439-42.496 161.312l-31.68-18.288c-15.28-8.848-34.912-3.568-43.712 11.713-8.848 15.311-3.6 34.88 11.712 43.712l31.776 18.351c-35.103 52.24-81.44 97.393-137.359 131.824-15.055 9.28-19.712 29.008-10.464 44.032 6.065 9.808 16.529 15.216 27.28 15.216a31.896 31.896 0 0 0 16.753-4.752c152.464-93.904 243.472-256.784 243.472-435.632 0-281.952-229.408-511.36-511.376-511.36zm236.127 411.6c15.296-8.848 20.544-28.398 11.712-43.71-8.832-15.296-28.416-20.544-43.712-11.696L542.287 492.674c-9.28-5.248-19.856-8.496-31.28-8.496-35.28 0-63.84 28.591-63.84 63.807 0 35.248 28.576 63.84 63.84 63.84 35.28 0 63.84-28.592 63.84-63.84 0-.064-.016-.144-.016-.209z"},"child":[]}]})(props);
};
function SlStar (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M512 77.488l137.472 285.088L962.08 409.04 735.664 634.88l7.616 45.311 45.28 270.16-276.607-148.784L235.36 950.415l45.295-270.224 7.584-45.311L61.904 409.008l312.592-46.464L395.04 320zm-.017-61.936c-28.656 0-54.784 16.176-66.977 41.456l-115.904 240.64-266.704 39.664c-27.391 4.096-50.143 22.8-58.975 48.384-8.817 25.664-2.145 53.904 17.199 73.152l195.408 195.2-45.328 270.656c-4.56 27.28 7.232 54.624 30.368 70.576 12.72 8.737 27.664 13.153 42.624 13.153 12.32 0 24.64-2.992 35.793-8.977l232.496-125.184 232.512 125.184a75.853 75.853 0 0 0 35.776 8.977c14.96 0 29.905-4.416 42.657-13.153 23.103-15.952 34.91-43.295 30.319-70.576l-45.344-270.656 195.504-195.2c19.344-19.248 25.968-47.504 17.152-73.152-8.848-25.616-31.6-44.32-58.976-48.385l-266.656-39.664-115.968-240.64c-12.112-25.311-38.256-41.455-66.976-41.455z"},"child":[]}]})(props);
};
function SlSupport (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M512 0C229.232 0 0 229.232 0 512s229.232 512 512 512 512-229.232 512-512S794.768 0 512 0zm128 82.976c144.224 42.992 257.648 156.8 300.704 301.023H733.136A257.472 257.472 0 0 0 640 290.943zm63.633 429.232c0 105.936-85.792 191.808-191.632 191.808s-191.632-85.872-191.632-191.808 85.808-191.823 191.632-191.823 191.632 85.888 191.632 191.823zM448.001 68.928c20.912-2.992 42.256-4.624 64-4.624 21.727 0 43.088 1.632 64 4.624v195.808c-20.48-5.296-41.856-8.4-64-8.4s-43.504 3.104-64 8.4V68.928zm-64 14.048v207.968c-38.56 22.384-70.72 54.544-93.136 93.056H83.297c43.04-144.224 156.48-258.031 300.704-301.024zM64.305 512.159c0-21.824 1.855-43.169 4.88-64.161h195.392c-5.312 20.512-8.24 41.983-8.24 64.176 0 22.064 2.912 43.425 8.16 63.825H69.137c-2.975-20.88-4.832-42.144-4.832-63.84zM384 941.326C239.664 898.318 126.193 784.35 83.201 639.998h207.472c22.432 38.656 54.655 70.945 93.327 93.393v207.936zm192.001 14.047c-20.912 2.992-42.273 4.624-64 4.624-21.744 0-43.088-1.648-64-4.624V759.597c20.496 5.296 41.856 8.4 64 8.4s43.52-3.104 64-8.4v195.776zm64-14.048V733.39c38.656-22.448 70.897-54.736 93.313-93.392h207.472c-42.993 144.336-156.464 258.32-300.784 301.328zm119.504-365.327c5.248-20.4 8.16-41.76 8.16-63.825 0-22.193-2.928-43.664-8.256-64.176h195.408c3.008 20.992 4.88 42.336 4.88 64.16 0 21.697-1.84 42.977-4.832 63.841h-195.36z"},"child":[]}]})(props);
};
function SlSymbleFemale (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M623.696-.224c-220.912 0-400 179.073-400 400.001 0 98.512 35.68 188.672 94.735 258.368L191.12 786.241 55.855 649.697c-12.48-12.496-32.752-12.496-45.249 0s-12.496 32.752 0 45.248l135.392 136.688L9.646 968.817c-12.496 12.496-12.496 32.784 0 45.248 12.48 12.496 32.753 12.496 45.25 0l136.143-136.992 136.464 137.76c12.497 12.496 32.752 12.496 45.248 0s12.497-32.752 0-45.248L236.143 831.681l127.408-128.192c69.953 59.968 160.77 96.288 260.13 96.288 220.911 0 400-179.088 400-400 .015-220.928-179.073-400-399.985-400zm0 736.545c-185.856 0-336.528-150.688-336.528-336.545S437.84 63.248 623.696 63.248 960.224 213.92 960.224 399.776c.016 185.856-150.656 336.545-336.528 336.545z"},"child":[]}]})(props);
};
function SlSymbolMale (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M1023.3 22.656c.144-6.48-1.378-12.29-5.586-16.433a22.058 22.058 0 0 0-16.4-6.527l-11.696.273c-.223 0-.383.08-.64.112L695.476-.944c-12.928.289-23.616 10.993-23.92 23.92l-.032 16.432c1.967 15.248 13.952 24.16 26.88 23.872l215.215.432-256.144 254.592c-69.488-58.24-159.008-93.36-256.768-93.36-220.928 0-400 179.071-400 400 0 220.911 179.072 400 400 400 220.912 0 400-179.089 400-400 0-100.113-36.864-191.569-97.664-261.713L959.938 107.92l-.944 219.152c-.304 12.928 9.952 24.176 22.897 23.888l16.416-.032c12.96-.304 23.647-8 23.92-20.928l.671-295.008c0-.24-.88-.4-.88-.624zM737.229 624.943c0 185.856-150.672 336.528-336.544 336.528-185.856 0-336.528-150.672-336.528-336.528 0-185.856 150.672-336.528 336.528-336.528 185.872-.016 336.544 150.656 336.544 336.528z"},"child":[]}]})(props);
};
function SlTag (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M1023.98 416.272l-.001-338.367c0-42.944-34.944-77.904-77.872-77.904H600.73c-21.68 0-54.496 0-75.92 21.44L18.875 527.393c-12.16 12.16-18.88 28.304-18.88 45.487 0 17.216 6.689 33.376 18.849 45.537l386.8 386.72C417.756 1017.312 433.916 1024 451.1 1024s33.36-6.689 45.487-18.849l505.952-505.968c21.696-21.648 21.569-52.816 21.441-82.912zm-66.685 37.666L450.878 959.874 64.126 572.658 569.518 67.154c5.088-3.152 23.408-3.152 30.992-3.152l14.4.048 331.2-.048c7.665 0 13.873 6.24 13.873 13.904V416.53c.064 12.176.129 32.544-2.688 37.408zM768.014 128.001c-70.689 0-128 57.311-128 128s57.312 128 128 128 128-57.312 128-128-57.312-128-128-128zm0 192c-35.344 0-64-28.656-64-64s28.656-64 64-64 64 28.656 64 64-28.656 64-64 64z"},"child":[]}]})(props);
};
function SlTarget (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M992 480h-97.44C879.168 293.472 730.512 144.96 544 129.536V32c0-17.664-14.336-32-32-32s-32 14.336-32 32v97.536C293.504 144.96 144.832 293.472 129.424 480H32c-17.664 0-32 14.336-32 32s14.336 32 32 32h97.424C144.832 730.512 293.504 879.04 480 894.464V992c0 17.664 14.336 32 32 32s32-14.336 32-32v-97.536C730.512 879.04 879.168 730.512 894.56 544H992c17.664 0 32-14.336 32-32s-14.336-32-32-32zM480 193.584V480H193.552C208.56 328.8 328.8 208.592 480 193.584zM193.552 544H480v286.416C328.8 815.408 208.56 695.2 193.552 544zM544 830.416V544h286.448C815.44 695.2 695.2 815.408 544 830.416zM544 480V193.584C695.2 208.592 815.44 328.8 830.448 480z"},"child":[]}]})(props);
};
function SlTrash (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M896.8 159.024l-225.277.001V71.761c0-40.528-33.008-72.496-73.536-72.496H426.003c-40.528 0-73.52 31.968-73.52 72.496v87.264h-225.28c-17.665 0-32 14.336-32 32s14.335 32 32 32h44.015l74.24 739.92c3.104 34.624 32.608 61.776 67.136 61.776h398.8c34.528 0 64-27.152 67.088-61.472l74.303-740.24h44.016c17.68 0 32-14.336 32-32s-14.32-31.985-32-31.985zM416.482 71.762c0-5.232 4.271-9.505 9.52-9.505h171.984c5.248 0 9.536 4.273 9.536 9.505v87.264h-191.04zm298.288 885.44c-.16 1.777-2.256 3.536-3.376 3.536h-398.8c-1.12 0-3.232-1.744-3.425-3.84l-73.632-733.856H788.45z"},"child":[]}]})(props);
};
function SlTrophy (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M735.808 927.872H285.872c-17.68 0-32 14.32-32 32s14.32 32 32 32h449.936c17.68 0 32-14.32 32-32s-14.304-32-32-32zm281.502-806.24c-3.024-14.88-16.16-25.568-31.343-25.568H829.343V64.128c0-17.68-14.32-32-32-32H221.807c-17.68 0-32 14.32-32 32v31.936H38.031c-15.183 0-28.32 10.688-31.344 25.568-.944 4.624-22.4 116.752 39.904 193.152 35.84 43.92 90.607 66.928 162.495 68.976C250.078 504.912 353.15 594.624 477.278 608v222.912H381.5c-17.68 0-32 14.32-32 32s14.32 32 32 32H640.19c17.68 0 32-14.32 32-32s-14.32-32-32-32h-98.912v-222.88c124.336-13.12 227.632-102.8 268.736-224.08 74.336-1.088 130.736-24.24 167.393-69.168 62.304-76.416 40.848-188.528 39.904-193.152zM96.401 274.56c-28.336-34.496-31.184-85.41-29.744-114.497H189.81v108.032c0 17.296 1.6 34.16 3.936 50.769-43.68-4.08-76.447-18.832-97.344-44.304zm668.944-6.465c0 153.088-114.721 277.663-255.713 277.663-141.056 0-255.808-124.56-255.808-277.663V96.127H765.36v171.968h-.015zm162.255 6.463c-21.68 26.432-56.032 41.488-102.272 44.864 2.384-16.784 4.016-33.84 4.016-51.328V160.062h128c1.44 29.12-1.408 80-29.744 114.496z"},"child":[]}]})(props);
};
function SlUmbrella (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M1024.32 509.584c0 17.664-14.29 31.984-31.97 31.984H543.47V865.76c0 87.153-70.912 158.08-158.096 158.08s-158.11-70.927-158.11-158.08c0-17.664 14.32-31.984 31.984-31.984s31.984 14.32 31.984 31.984c0 51.905 42.224 94.128 94.16 94.128 51.92 0 94.16-42.223 94.16-94.128V541.568H31.662C14 541.568-.32 527.233-.32 509.584c0-247.296 180.912-404.112 479.856-414.48V32.128c0-17.664 14.32-31.967 31.984-31.967 17.68 0 31.968 14.32 31.968 31.968v62.976c299.008 10.352 480.832 167.184 480.833 414.479zm-65.17-31.968c-15.776-200.528-178.896-319.119-447.648-319.119S80.606 277.089 64.847 477.601h894.304v.016z"},"child":[]}]})(props);
};
function SlUserFemale (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M960.032 802.688L681.535 670.624c37.152-18.624 182.256-24.528 194.256-57.28 0 0-57.344-88.016-71.344-202.336-5.44-44.368-14.752-102.592-24-184.592C765.44 93.408 653.567 0 512.257 0h-.513C370.432 0 258.56 93.408 243.568 226.4c-9.248 82-18.56 140.224-24 184.592-14 114.336-71.344 202.336-71.344 202.336 12 32.752 157.088 38.656 194.256 57.28L63.968 802.688S0 825.152 0 878.16v84.528C0 998.064 28.624 1024 63.968 1024h896.064c35.343 0 63.967-25.936 63.967-61.312V878.16c0-53.008-63.967-75.472-63.967-75.472zM63.999 960v-81.84c0-3.408 12.096-11.6 21.936-15.344 2.127-.752 3.44-1.344 5.44-2.32L369.87 728.432c22.128-10.464 36.32-32.687 36.593-57.151.256-24.464-13.44-46.976-35.313-57.936-21.68-10.88-50.336-16.256-95.248-24.032-10.656-1.872-25.216-4.496-39.344-7.312 18.32-41.105 38.56-98.593 46.529-163.633 1.968-16.193 4.496-34.416 7.312-54.592 4.848-34.336 10.848-77.872 16.752-130.224 11.168-98.865 95.28-169.553 204.592-169.553h.512c109.312 0 193.439 70.688 204.592 169.568 5.904 52.336 11.904 95.887 16.752 130.224 2.816 20.176 5.345 38.4 7.312 54.592 7.968 65.024 28.224 122.513 46.528 163.633-14.128 2.816-28.688 5.44-39.344 7.312-44.912 7.776-73.568 13.152-95.248 24.032-21.872 10.976-35.568 33.472-35.313 57.936.289 24.464 14.464 46.687 36.592 57.151l278.496 132.064c2 .976 3.312 1.568 5.44 2.32 9.84 3.744 20.496 11.936 21.936 15.344l.032 81.824H64z"},"child":[]}]})(props);
};
function SlUserFollow (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M64.064 894.688c0-25.44 19.091-33.405 26.723-36.94l281.04-132.625c20.144-9.248 34.048-28.32 36.752-50.32 2.72-22-6.16-43.84-23.456-57.712-66.48-53.376-97.456-170.688-97.456-233.185V224.002c0-66.864 116.4-159.856 224.128-159.856 108.672 0 223.92 91.536 223.92 159.856v159.92c0 61.552-25.6 179.312-94.256 233.359a63.99 63.99 0 0 0-23.968 57.809c2.624 22.16 16.592 41.312 36.848 50.623l95.92 45.504 15.808-63.872-85.008-39.776c88.656-69.776 118.656-206.832 118.656-283.648V224C799.715 118.08 653.09.146 511.795.146 370.483.146 223.665 118.082 223.665 224v159.92c0 69.872 31.888 211.248 121.393 283.088L64.018 799.633S.066 828.129.066 863.6v96.032c0 35.344 28.64 63.968 63.95 63.968h703.92v-64l-703.871.032v-64.944zm927.875-62.813h-96v-96c0-17.68-14.336-32-32-32s-32 14.32-32 32v96h-96c-17.664 0-32 14.32-32 32 0 17.664 14.336 32 32 32h96v96c0 17.664 14.336 32 32 32s32-14.336 32-32v-96h96c17.664 0 32-14.336 32-32 0-17.68-14.32-32-32-32z"},"child":[]}]})(props);
};
function SlUserFollowing (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M63.504 959.76l.002-64.942c0-25.44 19.103-33.424 26.72-36.944l281.04-132.624c20.143-9.248 34.047-28.32 36.752-50.32 2.72-22-6.16-43.84-23.457-57.712-66.48-53.376-97.456-170.704-97.456-233.185v-159.92c0-66.864 116.4-159.856 224.128-159.856 108.672 0 223.936 91.536 223.936 159.856v159.92c0 61.552-25.6 179.312-94.256 233.376a63.99 63.99 0 0 0-23.967 57.808c2.624 22.16 16.591 41.313 36.847 50.624l162.24 77.248 38.144-54.064-173.664-81.344c88.656-69.776 118.656-206.849 118.656-283.665v-159.92C799.169 118.176 652.545.241 511.233.241S223.105 118.177 223.105 224.096v159.92c0 69.872 31.888 211.248 121.392 283.088L63.457 799.76S-.495 828.256-.495 863.728v96.032c0 35.344 28.64 63.968 63.951 63.968h639.712l-52-63.984zm948.706-236.253c-13.904-10.912-34.032-8.432-44.912 5.473L830.45 937.684l-85.056-85.073c-12.496-12.496-32.768-12.496-45.264 0s-12.496 32.752 0 45.248l113.136 113.136c12.496 12.496 32.752 12.496 45.248 0 3.04-3.024 5.312-6.544 6.88-10.288l152.304-232.304c10.88-13.904 8.432-34.016-5.488-44.896z"},"child":[]}]})(props);
};
function SlUserUnfollow (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M799.12 383.856l.001-159.92C799.121 118.016 652.513.081 511.217.081c-141.312 0-288.128 117.936-288.128 223.855v159.92c0 69.872 31.888 211.232 121.392 283.072l-281.04 132.64S-.511 828.064-.511 863.536v96.032c0 35.344 28.64 63.968 63.951 63.968h607.936v-64l-607.888.032v-64.944c0-25.44 19.104-33.425 26.72-36.945l281.04-132.624c20.143-9.248 34.048-28.335 36.752-50.335 2.72-22-6.16-43.825-23.456-57.697-66.48-53.376-97.456-170.688-97.456-233.199v-159.92c0-66.864 116.4-159.856 224.128-159.856 108.688 0 223.904 91.536 223.904 159.856v159.92c0 61.552-25.6 179.328-94.224 233.36a63.793 63.793 0 0 0-23.968 57.792c2.592 22.16 16.56 41.313 36.848 50.624l18.112 8.352 28.065-51.792-19.489-14.72c88.657-69.727 118.656-206.768 118.656-283.584zm125.505 494.945l90.496-90.512c12.496-12.464 12.496-32.752 0-45.248-12.48-12.48-32.753-12.48-45.233 0l-90.512 90.528-90.496-90.528c-12.496-12.48-32.769-12.48-45.25 0-12.495 12.496-12.495 32.784 0 45.248l90.497 90.512-90.496 90.496c-12.496 12.48-12.496 32.768 0 45.264 12.48 12.464 32.753 12.464 45.249 0l90.496-90.511 90.512 90.511c12.48 12.464 32.753 12.464 45.233 0 12.496-12.496 12.496-32.784 0-45.264z"},"child":[]}]})(props);
};
function SlUser (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M511.728 64c108.672 0 223.92 91.534 223.92 159.854v159.92c0 61.552-25.6 179.312-94.256 233.376a63.99 63.99 0 0 0-23.968 57.809c2.624 22.16 16.592 41.312 36.848 50.625l278.496 132.064c2.176.992 26.688 5.104 26.688 39.344l.032 62.464L64 959.504V894.56c0-25.44 19.088-33.425 26.72-36.945l281.023-132.624c20.16-9.248 34.065-28.32 36.769-50.32 2.72-22-6.16-43.84-23.456-57.712-66.48-53.376-97.456-170.704-97.456-233.185v-159.92C287.615 157.007 404.016 64 511.728 64zm0-64.002c-141.312 0-288.127 117.938-288.127 223.857v159.92c0 69.872 31.888 211.248 121.392 283.088l-281.04 132.64S.001 827.999.001 863.471v96.032c0 35.344 28.64 63.968 63.951 63.968h895.552c35.344 0 63.968-28.624 63.968-63.968v-96.032c0-37.6-63.968-63.968-63.968-63.968L681.008 667.439c88.656-69.776 118.656-206.849 118.656-283.665v-159.92c0-105.92-146.64-223.855-287.936-223.855z"},"child":[]}]})(props);
};
function SlVector (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M992 672h-32.273v-1.616c0-161.92-86.528-303.808-215.663-382.384H904.88c11.087 19.04 31.503 32 55.12 32 35.343 0 64-28.656 64-64s-28.657-64-64-64c-23.632 0-44.033 12.96-55.12 32H608v-32c0-17.664-14.336-32-32-32H448c-17.665 0-32 14.336-32 32v32H119.12C108.032 204.96 87.63 192 64 192c-35.344 0-64 28.656-64 64s28.656 64 64 64c23.631 0 44.032-12.96 55.12-32h160.8C150.784 366.592 64.273 508.464 64.273 670.384V672H32c-17.664 0-32 14.336-32 32v128c0 17.664 14.336 32 32 32h128c17.664 0 32-14.336 32-32V704c0-17.664-14.336-32-32-32h-31.727v-1.616c0-178.448 122.464-328.672 287.728-371.392V320c0 17.664 14.335 32 32 32h128c17.664 0 32-14.336 32-32v-21.008c165.264 42.736 287.728 192.96 287.728 371.392V672H864c-17.664 0-32 14.336-32 32v128c0 17.664 14.336 32 32 32h128c17.664 0 32-14.336 32-32V704c0-17.664-14.336-32-32-32zM128 800H64v-64h64v64zm416-512h-64v-64h64v64zm416 512h-64v-64h64v64z"},"child":[]}]})(props);
};
function SlVolume1 (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M654.768 65.904c-10.432-5.552-23.088-4.928-32.912 1.696L300.768 319.712l-106.624.08c-54.512 0-98.88 38.657-98.88 86.4l1.712 211.137c0 47.536 44.352 86.224 98.863 86.224l106.592.065L621.823 956.37a31.977 31.977 0 0 0 17.905 5.472c5.152 0 10.32-1.249 15.008-3.745a31.951 31.951 0 0 0 17.008-28.256V94.16a32.088 32.088 0 0 0-16.976-28.257zm-47.04 803.728L330.129 645.106a31.97 31.97 0 0 0-17.889-5.473l-116.384-.064c-20.544 0-34.88-11.712-34.88-22.464l-1.712-211.152c0-10.48 14.336-22.16 34.896-22.16l116.4-.08a32.017 32.017 0 0 0 17.855-5.457l279.312-224v715.376zm182.097-521.998c-17.712-2.928-33.937 8.864-36.849 26.305-2.912 17.424 8.88 33.92 26.289 36.832 50.32 8.4 85.472 52.304 85.472 106.753 0 51.84-36.368 96.687-86.496 106.688-17.344 3.44-28.592 20.288-25.12 37.632 3.024 15.215 16.368 25.744 31.344 25.744 2.064 0 4.192-.193 6.288-.624 79.968-15.905 138-87.185 138-169.44-.016-85.025-58.447-156.465-138.928-169.89z"},"child":[]}]})(props);
};
function SlVolume2 (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M574.496 65.904c-10.432-5.552-23.087-4.928-32.911 1.696L220.497 319.712l-106.624.08c-54.512 0-98.88 38.657-98.88 86.4l1.712 211.137c0 47.536 44.352 86.224 98.863 86.224l106.592.065L541.552 956.37a31.977 31.977 0 0 0 17.905 5.472c5.152 0 10.32-1.249 15.008-3.745a31.951 31.951 0 0 0 17.008-28.256V94.16a32.026 32.026 0 0 0-16.977-28.257zm-47.023 803.728L249.874 645.106a31.97 31.97 0 0 0-17.889-5.473l-116.384-.064c-20.544 0-34.88-11.712-34.88-22.464L79.01 405.953c0-10.48 14.336-22.16 34.896-22.16l116.4-.08a32.017 32.017 0 0 0 17.855-5.457l279.312-224v715.376zm320.993-352.126c0-85.008-58.433-156.433-138.913-169.873-17.712-2.928-33.935 8.864-36.848 26.305-2.912 17.424 8.88 33.92 26.288 36.832 50.32 8.4 85.473 52.304 85.473 106.753 0 51.84-36.368 96.687-86.496 106.688-17.344 3.44-28.592 20.288-25.12 37.631 3.024 15.216 16.368 25.745 31.344 25.745 2.064 0 4.192-.193 6.288-.624 79.952-15.936 137.984-87.216 137.984-169.456zm-42.465-293.601c-16.528-6.16-35.01 2.241-41.153 18.8-6.193 16.56 2.223 34.992 18.783 41.168 96.528 36.015 161.376 129.903 161.376 233.63 0 103.777-64.848 197.842-161.312 234.002-16.56 6.223-24.944 24.655-18.751 41.183 4.816 12.88 17.009 20.785 29.969 20.785a31.97 31.97 0 0 0 11.215-2.033c121.344-45.504 202.88-163.632 202.88-293.936s-81.6-248.288-203.007-293.599z"},"child":[]}]})(props);
};
function SlVolumeOff (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M575.536 65.904c-10.432-5.552-23.087-4.928-32.911 1.696L221.52 319.712l-106.624.08c-54.512 0-98.88 38.657-98.88 86.4l1.712 211.137c0 47.536 44.352 86.224 98.863 86.224l106.592.065L542.576 956.37a31.977 31.977 0 0 0 17.905 5.472c5.152 0 10.32-1.249 15.008-3.745a31.951 31.951 0 0 0 17.008-28.256V94.16a32.044 32.044 0 0 0-16.96-28.257zm-47.039 803.728l-277.6-224.526a31.97 31.97 0 0 0-17.889-5.473l-116.384-.064c-20.544 0-34.88-11.712-34.88-22.464l-1.727-211.152c0-10.48 14.336-22.16 34.895-22.16l116.4-.08a32.017 32.017 0 0 0 17.856-5.457l279.328-224v715.376zm365.505-357.118l104.593-105.84c12.496-12.496 12.496-32.752 0-45.248-12.464-12.496-32.752-12.496-45.248 0L849.011 466.994 744.675 361.426c-12.464-12.496-32.752-12.496-45.248 0s-12.496 32.752 0 45.248l104.592 105.84-103.6 104.816c-12.464 12.48-12.496 32.753 0 45.249s32.784 12.496 45.28 0l103.312-104.544 103.312 104.544c12.496 12.496 32.752 12.496 45.248 0s12.496-32.769 0-45.249z"},"child":[]}]})(props);
};
function SlWallet (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M1023.65 290.48c.464-23.664-5.904-78.848-77.84-98.064L223.394 47.794c-52.944 0-96 43.055-96 96v128.704l-32-.08c-52.752.223-95.632 43.15-95.632 95.967v511.808c0 52.945 43.056 96 96 96h832.464c52.945 0 96-43.055 96-96zM191.393 143.793c0-16.72 12.88-30.463 29.216-31.871l706 142.88c.256.128-5.248 17.935-30.88 17.6H191.393zM960.24 880.21c0 17.664-14.336 32-32 32H95.76c-17.664 0-32-14.336-32-32V368.386c0-17.664 14.336-32 32-32h800.064c31.408 0 64.4-10.704 64.4-31.888V880.21h.016zM191.824 560.498c-35.344 0-64 28.656-64 64s28.656 64 64 64 64-28.656 64-64-28.656-64-64-64z"},"child":[]}]})(props);
};
function SlWrench (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M1006.37 215.936c-10.784-4.976-23.582-3.088-32.558 4.848L812.5 365.68 666.868 216.272 811.06 49.744c7.84-9.056 9.745-21.536 4.865-32.512S800.26-.463 788.405-.463h-8.69c-89.12 0-242.976 7.664-311.663 77.343l-13.857 13.76c-73.28 74.768-86.288 197.376-47.68 290.576L37.236 758.112c-49.791 50.48-49.791 132.32 0 182.816l45.073 45.697c24.895 25.232 57.535 37.856 90.175 37.856 32.624 0 65.263-12.624 90.143-37.856l374.72-377.728c35.44 19.152 84 31.664 124.784 31.664 65.376 0 127.344-26.369 174.527-74.256l13.664-13.84c74.609-75.648 73.456-237.297 73.792-308.417.033-12.096-6.927-23.088-17.743-28.112zM905.666 509.008l-11.873 13.871c-35.744 36.273-82.496 53.648-131.664 53.648-24.32 0-57.088-4.576-79.216-13.792-20-8.303-38.576-20.288-55.2-35.423L217.537 940.928c-12.032 12.223-28.032 18.943-45.057 18.943s-33.04-6.72-45.088-18.943l-45.055-45.68c-24.865-25.216-24.865-66.224-.017-91.44l400.784-408.863c-13.44-19.569-22.593-40.897-28.049-62.977h-.015c-15.424-62.384-6.432-148.607 42.016-198.048L510.848 120c41.552-42.16 149.456-54.624 209.2-58.304l-117.36 135.536c-10.496 12.128-9.967 30.4 1.216 41.872L789.44 429.44c11.248 11.584 29.44 12.256 41.553 1.52L961.6 313.328c-3.888 63.36-16.192 155.376-55.935 195.68z"},"child":[]}]})(props);
};


/***/ }),

/***/ "./node_modules/react-toastify/dist/react-toastify.esm.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/react-toastify/dist/react-toastify.esm.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bounce: () => (/* binding */ H),
/* harmony export */   Flip: () => (/* binding */ Y),
/* harmony export */   Icons: () => (/* binding */ z),
/* harmony export */   Slide: () => (/* binding */ F),
/* harmony export */   ToastContainer: () => (/* binding */ Q),
/* harmony export */   Zoom: () => (/* binding */ X),
/* harmony export */   collapseToast: () => (/* binding */ f),
/* harmony export */   cssTransition: () => (/* binding */ g),
/* harmony export */   toast: () => (/* binding */ B),
/* harmony export */   useToast: () => (/* binding */ N),
/* harmony export */   useToastContainer: () => (/* binding */ L)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
'use client';
const c=e=>"number"==typeof e&&!isNaN(e),d=e=>"string"==typeof e,u=e=>"function"==typeof e,p=e=>d(e)||u(e)?e:null,m=e=>(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(e)||d(e)||u(e)||c(e);function f(e,t,n){void 0===n&&(n=300);const{scrollHeight:o,style:s}=e;requestAnimationFrame(()=>{s.minHeight="initial",s.height=o+"px",s.transition=`all ${n}ms`,requestAnimationFrame(()=>{s.height="0",s.padding="0",s.margin="0",setTimeout(t,n)})})}function g(t){let{enter:a,exit:r,appendPosition:i=!1,collapse:l=!0,collapseDuration:c=300}=t;return function(t){let{children:d,position:u,preventExitTransition:p,done:m,nodeRef:g,isIn:y,playToast:v}=t;const h=i?`${a}--${u}`:a,T=i?`${r}--${u}`:r,E=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(()=>{const e=g.current,t=h.split(" "),n=o=>{o.target===g.current&&(v(),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===E.current&&"animationcancel"!==o.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)},[]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{const e=g.current,t=()=>{e.removeEventListener("animationend",t),l?f(e,m,c):m()};y||(p?t():(E.current=1,e.className+=` ${T}`,e.addEventListener("animationend",t)))},[y]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,d)}}function y(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const v=new Map;let h=[];const T=new Set,E=e=>T.forEach(t=>t(e)),b=()=>v.size>0;function I(e,t){var n;if(t)return!(null==(n=v.get(t))||!n.isToastActive(e));let o=!1;return v.forEach(t=>{t.isToastActive(e)&&(o=!0)}),o}function _(e,t){m(e)&&(b()||h.push({content:e,options:t}),v.forEach(n=>{n.buildToast(e,t)}))}function C(e,t){v.forEach(n=>{null!=t&&null!=t&&t.containerId?(null==t?void 0:t.containerId)===n.id&&n.toggle(e,null==t?void 0:t.id):n.toggle(e,null==t?void 0:t.id)})}function L(e){const{subscribe:o,getSnapshot:s,setProps:i}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(function(e){const n=e.containerId||1;return{subscribe(o){const s=function(e,n,o){let s=1,r=0,i=[],l=[],f=[],g=n;const v=new Map,h=new Set,T=()=>{f=Array.from(v.values()),h.forEach(e=>e())},E=e=>{l=null==e?[]:l.filter(t=>t!==e),T()},b=e=>{const{toastId:n,onOpen:s,updateId:a,children:r}=e.props,i=null==a;e.staleId&&v.delete(e.staleId),v.set(n,e),l=[...l,e.props.toastId].filter(t=>t!==e.staleId),T(),o(y(e,i?"added":"updated")),i&&u(s)&&s((0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(r)&&r.props)};return{id:e,props:g,observe:e=>(h.add(e),()=>h.delete(e)),toggle:(e,t)=>{v.forEach(n=>{null!=t&&t!==n.props.toastId||u(n.toggle)&&n.toggle(e)})},removeToast:E,toasts:v,clearQueue:()=>{r-=i.length,i=[]},buildToast:(n,l)=>{if((t=>{let{containerId:n,toastId:o,updateId:s}=t;const a=n?n!==e:1!==e,r=v.has(o)&&null==s;return a||r})(l))return;const{toastId:f,updateId:h,data:I,staleId:_,delay:C}=l,L=()=>{E(f)},N=null==h;N&&r++;const $={...g,style:g.toastStyle,key:s++,...Object.fromEntries(Object.entries(l).filter(e=>{let[t,n]=e;return null!=n})),toastId:f,updateId:h,data:I,closeToast:L,isIn:!1,className:p(l.className||g.toastClassName),bodyClassName:p(l.bodyClassName||g.bodyClassName),progressClassName:p(l.progressClassName||g.progressClassName),autoClose:!l.isLoading&&(w=l.autoClose,k=g.autoClose,!1===w||c(w)&&w>0?w:k),deleteToast(){const e=v.get(f),{onClose:n,children:s}=e.props;u(n)&&n((0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(s)&&s.props),o(y(e,"removed")),v.delete(f),r--,r<0&&(r=0),i.length>0?b(i.shift()):T()}};var w,k;$.closeButton=g.closeButton,!1===l.closeButton||m(l.closeButton)?$.closeButton=l.closeButton:!0===l.closeButton&&($.closeButton=!m(g.closeButton)||g.closeButton);let P=n;(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(n)&&!d(n.type)?P=(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(n,{closeToast:L,toastProps:$,data:I}):u(n)&&(P=n({closeToast:L,toastProps:$,data:I}));const M={content:P,props:$,staleId:_};g.limit&&g.limit>0&&r>g.limit&&N?i.push(M):c(C)?setTimeout(()=>{b(M)},C):b(M)},setProps(e){g=e},setToggle:(e,t)=>{v.get(e).toggle=t},isToastActive:e=>l.some(t=>t===e),getSnapshot:()=>g.newestOnTop?f.reverse():f}}(n,e,E);v.set(n,s);const r=s.observe(o);return h.forEach(e=>_(e.content,e.options)),h=[],()=>{r(),v.delete(n)}},setProps(e){var t;null==(t=v.get(n))||t.setProps(e)},getSnapshot(){var e;return null==(e=v.get(n))?void 0:e.getSnapshot()}}}(e)).current;i(e);const l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useSyncExternalStore)(o,s,s);return{getToastToRender:function(e){if(!l)return[];const t=new Map;return l.forEach(e=>{const{position:n}=e.props;t.has(n)||t.set(n,[]),t.get(n).push(e)}),Array.from(t,t=>e(t[0],t[1]))},isToastActive:I,count:null==l?void 0:l.length}}function N(e){const[t,o]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[a,r]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:d,pauseOnHover:u,closeToast:p,onClick:m,closeOnClick:f}=e;var g,y;function h(){o(!0)}function T(){o(!1)}function E(n){const o=l.current;c.canDrag&&o&&(c.didMove=!0,t&&T(),c.delta="x"===e.draggableDirection?n.clientX-c.start:n.clientY-c.start,c.start!==n.clientX&&(c.canCloseOnClick=!1),o.style.transform=`translate3d(${"x"===e.draggableDirection?`${c.delta}px, var(--y)`:`0, calc(${c.delta}px + var(--y))`},0)`,o.style.opacity=""+(1-Math.abs(c.delta/c.removalDistance)))}function b(){document.removeEventListener("pointermove",E),document.removeEventListener("pointerup",b);const t=l.current;if(c.canDrag&&c.didMove&&t){if(c.canDrag=!1,Math.abs(c.delta)>c.removalDistance)return r(!0),e.closeToast(),void e.collapseAll();t.style.transition="transform 0.2s, opacity 0.2s",t.style.removeProperty("transform"),t.style.removeProperty("opacity")}}null==(y=v.get((g={id:e.toastId,containerId:e.containerId,fn:o}).containerId||1))||y.setToggle(g.id,g.fn),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(e.pauseOnFocusLoss)return document.hasFocus()||T(),window.addEventListener("focus",h),window.addEventListener("blur",T),()=>{window.removeEventListener("focus",h),window.removeEventListener("blur",T)}},[e.pauseOnFocusLoss]);const I={onPointerDown:function(t){if(!0===e.draggable||e.draggable===t.pointerType){c.didMove=!1,document.addEventListener("pointermove",E),document.addEventListener("pointerup",b);const n=l.current;c.canCloseOnClick=!0,c.canDrag=!0,n.style.transition="none","x"===e.draggableDirection?(c.start=t.clientX,c.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(c.start=t.clientY,c.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent)/100)}},onPointerUp:function(t){const{top:n,bottom:o,left:s,right:a}=l.current.getBoundingClientRect();"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&t.clientX>=s&&t.clientX<=a&&t.clientY>=n&&t.clientY<=o?T():h()}};return d&&u&&(I.onMouseEnter=T,e.stacked||(I.onMouseLeave=h)),f&&(I.onClick=e=>{m&&m(e),c.canCloseOnClick&&p()}),{playToast:h,pauseToast:T,isRunning:t,preventExitTransition:a,toastRef:l,eventHandlers:I}}function $(t){let{delay:n,isRunning:o,closeToast:s,type:a="default",hide:r,className:i,style:c,controlledProgress:d,progress:p,rtl:m,isIn:f,theme:g}=t;const y=r||d&&0===p,v={...c,animationDuration:`${n}ms`,animationPlayState:o?"running":"paused"};d&&(v.transform=`scaleX(${p})`);const h=(0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${g}`,`Toastify__progress-bar--${a}`,{"Toastify__progress-bar--rtl":m}),T=u(i)?i({rtl:m,type:a,defaultClassName:h}):(0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(h,i),E={[d&&p>=1?"onTransitionEnd":"onAnimationEnd"]:d&&p<1?null:()=>{f&&s()}};return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":y},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${g} Toastify__progress-bar--${a}`}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{role:"progressbar","aria-hidden":y?"true":"false","aria-label":"notification timer",className:T,style:v,...E}))}let w=1;const k=()=>""+w++;function P(e){return e&&(d(e.toastId)||c(e.toastId))?e.toastId:k()}function M(e,t){return _(e,t),t.toastId}function x(e,t){return{...t,type:t&&t.type||e,toastId:P(t)}}function A(e){return(t,n)=>M(t,x(e,n))}function B(e,t){return M(e,x("default",t))}B.loading=(e,t)=>M(e,x("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),B.promise=function(e,t,n){let o,{pending:s,error:a,success:r}=t;s&&(o=d(s)?B.loading(s,n):B.loading(s.render,{...n,...s}));const i={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(e,t,s)=>{if(null==t)return void B.dismiss(o);const a={type:e,...i,...n,data:s},r=d(t)?{render:t}:t;return o?B.update(o,{...a,...r}):B(r.render,{...a,...r}),s},c=u(e)?e():e;return c.then(e=>l("success",r,e)).catch(e=>l("error",a,e)),c},B.success=A("success"),B.info=A("info"),B.error=A("error"),B.warning=A("warning"),B.warn=B.warning,B.dark=(e,t)=>M(e,x("default",{theme:"dark",...t})),B.dismiss=function(e){!function(e){var t;if(b()){if(null==e||d(t=e)||c(t))v.forEach(t=>{t.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){const t=v.get(e.containerId);t?t.removeToast(e.id):v.forEach(t=>{t.removeToast(e.id)})}}else h=h.filter(t=>null!=e&&t.options.toastId!==e)}(e)},B.clearWaitingQueue=function(e){void 0===e&&(e={}),v.forEach(t=>{!t.props.limit||e.containerId&&t.id!==e.containerId||t.clearQueue()})},B.isActive=I,B.update=function(e,t){void 0===t&&(t={});const n=((e,t)=>{var n;let{containerId:o}=t;return null==(n=v.get(o||1))?void 0:n.toasts.get(e)})(e,t);if(n){const{props:o,content:s}=n,a={delay:100,...o,...t,toastId:t.toastId||e,updateId:k()};a.toastId!==e&&(a.staleId=e);const r=a.render||s;delete a.render,M(r,a)}},B.done=e=>{B.update(e,{progress:1})},B.onChange=function(e){return T.add(e),()=>{T.delete(e)}},B.play=e=>C(!0,e),B.pause=e=>C(!1,e);const O="undefined"!=typeof window?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect,D=t=>{let{theme:n,type:o,isLoading:s,...a}=t;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===n?"currentColor":`var(--toastify-icon-color-${o})`,...a})},z={info:function(t){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(D,{...t},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(D,{...t},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(D,{...t},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(D,{...t},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"Toastify__spinner"})}},R=n=>{const{isRunning:o,preventExitTransition:s,toastRef:r,eventHandlers:i,playToast:c}=N(n),{closeButton:d,children:p,autoClose:m,onClick:f,type:g,hideProgressBar:y,closeToast:v,transition:h,position:T,className:E,style:b,bodyClassName:I,bodyStyle:_,progressClassName:C,progressStyle:L,updateId:w,role:k,progress:P,rtl:M,toastId:x,deleteToast:A,isIn:B,isLoading:O,closeOnClick:D,theme:R}=n,S=(0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])("Toastify__toast",`Toastify__toast-theme--${R}`,`Toastify__toast--${g}`,{"Toastify__toast--rtl":M},{"Toastify__toast--close-on-click":D}),H=u(E)?E({rtl:M,position:T,type:g,defaultClassName:S}):(0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(S,E),F=function(e){let{theme:n,type:o,isLoading:s,icon:r}=e,i=null;const l={theme:n,type:o};return!1===r||(u(r)?i=r({...l,isLoading:s}):(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(r)?i=(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(r,l):s?i=z.spinner():(e=>e in z)(o)&&(i=z[o](l))),i}(n),X=!!P||!m,Y={closeToast:v,type:g,theme:R};let q=null;return!1===d||(q=u(d)?d(Y):(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(d)?(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(d,Y):function(t){let{closeToast:n,theme:o,ariaLabel:s="close"}=t;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{className:`Toastify__close-button Toastify__close-button--${o}`,type:"button",onClick:e=>{e.stopPropagation(),n(e)},"aria-label":s},react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(Y)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(h,{isIn:B,done:A,position:T,preventExitTransition:s,nodeRef:r,playToast:c},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{id:x,onClick:f,"data-in":B,className:H,...i,style:b,ref:r},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{...B&&{role:k},className:u(I)?I({type:g}):(0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])("Toastify__toast-body",I),style:_},null!=F&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!O})},F),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,p)),q,react__WEBPACK_IMPORTED_MODULE_0__.createElement($,{...w&&!X?{key:`pb-${w}`}:{},rtl:M,theme:R,delay:m,isRunning:o,isIn:B,closeToast:v,hide:y,type:g,style:L,className:C,controlledProgress:X,progress:P||0})))},S=function(e,t){return void 0===t&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},H=g(S("bounce",!0)),F=g(S("slide",!0)),X=g(S("zoom")),Y=g(S("flip")),q={position:"top-right",transition:H,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};function Q(t){let o={...q,...t};const s=t.stacked,[a,r]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0),c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),{getToastToRender:d,isToastActive:m,count:f}=L(o),{className:g,style:y,rtl:v,containerId:h}=o;function T(e){const t=(0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])("Toastify__toast-container",`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":v});return u(g)?g({position:e,rtl:v,defaultClassName:t}):(0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(t,p(g))}function E(){s&&(r(!0),B.play())}return O(()=>{if(s){var e;const t=c.current.querySelectorAll('[data-in="true"]'),n=12,s=null==(e=o.position)?void 0:e.includes("top");let r=0,i=0;Array.from(t).reverse().forEach((e,t)=>{const o=e;o.classList.add("Toastify__toast--stacked"),t>0&&(o.dataset.collapsed=`${a}`),o.dataset.pos||(o.dataset.pos=s?"top":"bot");const l=r*(a?.2:1)+(a?0:n*t);o.style.setProperty("--y",`${s?l:-1*l}px`),o.style.setProperty("--g",`${n}`),o.style.setProperty("--s",""+(1-(a?i:0))),r+=o.offsetHeight,i+=.025})}},[a,f,s]),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{ref:c,className:"Toastify",id:h,onMouseEnter:()=>{s&&(r(!1),B.pause())},onMouseLeave:E},d((t,n)=>{const o=n.length?{...y}:{...y,pointerEvents:"none"};return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:T(t),style:o,key:`container-${t}`},n.map(t=>{let{content:n,props:o}=t;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(R,{...o,stacked:s,collapseAll:E,isIn:m(o.toastId,o.containerId),style:o.style,key:`toast-${o.key}`},n)}))}))}
//# sourceMappingURL=react-toastify.esm.mjs.map


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./src/scripts/view.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ContactForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ContactForm */ "./src/components/ContactForm.js");





/**
 * Uses ReactDOM to replace dummy element from render.php into the
 * ContactForm component.
 */

const divsUnloaded = document.querySelectorAll(".ps-form-unloaded");
divsUnloaded.forEach(div => {
  const data = JSON.parse(div.querySelector("pre").innerText);
  const root = react_dom__WEBPACK_IMPORTED_MODULE_1___default().createRoot(div);
  root.render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_ContactForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ...data
  }));
  div.classList.remove("ps-form-unloaded");
});
})();

/******/ })()
;
//# sourceMappingURL=view.js.map