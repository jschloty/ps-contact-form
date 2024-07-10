import { ADMIN_URL } from "../components/ContactForm";

/** Checks the validity of all accepted input types. If input is ZIP code, returns
 * user location: RVA, VAB, FL, or invalid.
 * 
 * @param input: HTMLInputElement || HTMLTextAreaElement
 * @param e: submit Event
 * @returns object {isValid: bool, error: string || null, location: string || null}
 */
export function checkInput(input, e) {
    if (!input.id || !input.name) {
        return {isValid: false, error: "Invalid input object"};
    }

    let validity = {isValid: false};
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
            
            return fetch(ADMIN_URL + "?action=zip_request", { method: "GET" })
            .then((data) => data.json())
            .then((zips) => {
                return zips.rva.includes(userZip) ? {isValid: true, location: 'RVA'}
                    : zips.vab.includes(userZip) ? {isValid: true, location: 'VAB'}
                    : zips.fl.includes(userZip) ? {isValid: true, location: 'FL'}
                    : {isValid: true, location: 'invalid'};
            })
            .catch((error) => {console.error(`Could not retrieve valid ZIPs: ${error.message}`)});
        } else {
            validity.isValid = !input.validity.valueMissing;
            validity.error = input.validity.valueMissing ? "This field is required." : "";
            return validity;
        }
    } else if (input.type === "tel") {
        validity.isValid = !input.validity.valueMissing;
        validity.error = input.validity.valueMissing ? "This field is required.": "";
        return validity;
    } else if (input.type === "email") {
        validity.isValid = !input.validity.valueMissing && !input.validity.typeMismatch;
        validity.error = input.validity.valueMissing ? "This field is required." : input.validity.typeMismatch ? "Not a valid email address." : "";
        return validity;
    }
}

export function checkAppointment(input, e) {

}