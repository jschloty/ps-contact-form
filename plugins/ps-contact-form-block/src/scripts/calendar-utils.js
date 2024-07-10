// import React from 'react';
import { ADMIN_URL } from "../components/ContactForm";

export async function getCalendarInfo(needsLocation = false, locationName) {
    if (needsLocation && !locationName) {
        throw new Error("Location name must be supplied.");
    }
    
    const request_url = ADMIN_URL + '?action=calendar_info' + needsLocation ? '&' + locationName : '';
    
    const response = await fetch(request_url, { method: "GET" });
    const calendarInfo = await response.json();

    return calendarInfo;
}

// export async function appointmentSubmit() {

// }