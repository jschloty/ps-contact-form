import React, { useState } from 'react';
import { SlArrowLeft } from "react-icons/sl";
import { checkInput } from '../scripts/form-validation'
const ADMIN_URL = window.location.protocol + "//" + window.location.host + "/wp-admin/admin-post.php";

async function formSubmit(data) {
    let submission;

    try {
        submission = await fetch(ADMIN_URL, { method: "POST", body: data});
        if (!submission.ok) {
            throw new Error(`HTTP error: ${submission.status}`);
        }
    } catch (e) {
        console.error(e);
    }
}

function ContactForm (props) {
    let [page, setPage] = useState(1);
    
    let currentInputs = props.inputs.map(input => {
        return input.page == page ? (
        <li key={input.name + "_field"}>
            <label htmlFor={input.id}>{input.label}</label>
            <input type={input.type} id={input.id} name={input.name} required={input.required}/>
            <span className="error"></span>
        </li>
        ) : null;
    })

    let CurrentButtons = () => {
        return page == 1 ? (<><button id="pg1_button" type="submit">Get a quote</button><p>Existing customer? <a>Click here</a> to contact us.</p></>) 
            : page == 2 ? (<><p>No thanks.<br /><a href="google.com"><SlArrowLeft /> Return to home</a></p><button id="pg2_button" type="submit">Sign me up!</button></>)
            : (<p>placeholder</p>);
    }

    let CurrentPage = () => {
        return (<ul id={"page" + page} className="page" page={page}>
            {page == 6 ? (<p>Unfortunately, you reside outside of our active service area.</p>) : currentInputs}
            {(page == 1 && props.message) ? 
            <li key="contact_message_field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" max-length="250" placeholder="Enter message..."></textarea>
                <span className="error"></span>
            </li> : null}
            <CurrentButtons />
        </ul>)
    }
    
   async function checkValidity(e) {
        e.preventDefault();
        const data = new FormData(e.currentTarget);

        if (page == 5) {return;}
        if (page == 2) {setPage(page++); return;}
        
        // const formData = new FormData(e.target);

        const inputList = document.querySelectorAll("form#ps-contact-form input");
        let inputs = Array.from(inputList);
        inputs.pop();
        if (page == 1) {inputs.push(document.querySelector("form#ps-contact-form textarea"));}
        console.log(inputs);

        for (const input of inputs) {
            if (input.id === "hidden") {return;}
            let error = input.nextSibling;
            let validity = await checkInput(input, e);

            console.log(input.id + " " + validity.isValid);
            if (!validity.isValid) {
                error.textContent = validity.error;
                error.className = "error active";
                return;
            }

            if(!!validity.location) {
                data.append('location', validity.location);
                if (validity.location === "invalid") {
                    setPage(6);
                    break;
                }
            }

            error.textContent = "";
            error.className = "error";
        }

        formSubmit(data);
        setPage(page+1);
        console.log(page);
        return;
    }

    return (
        <form noValidate id="ps-contact-form" onSubmit={checkValidity}>
            <CurrentPage />
            <input id="hidden" type="hidden" name="action" value="contact_form" />
        </form>
    )
}

export default ContactForm;