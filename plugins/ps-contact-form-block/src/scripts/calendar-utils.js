// import React from 'react';
import { ADMIN_URL } from "../components/ContactForm";

export async function getCalendarInfo(needsLocation = false, locationName) {
    if (needsLocation && !locationName) {
        throw new Error("Location name must be supplied.");
    }

    let request_url = ADMIN_URL + '?action=calendar_info';
    request_url += needsLocation ? '&location_name=' + locationName : '';
    console.log(request_url);

    const response = await fetch(request_url, { method: "GET" });
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
export async function appointmentSubmit(data, time, calendarInfo) {
    data.append("calendarId", calendarInfo.id);
    data.append("locationId", calendarInfo.locationId);
    data.append("startTime", time.getTime());
    data.append("endTime", time.getTime() + (calendarInfo.slotDuration*60*1000));

    console.log("action: " + data.get("action"));
    const response = await fetch(ADMIN_URL, { method: "POST", body: data });
    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
    }
    console.log(await response.text());
    return await response.json();
}