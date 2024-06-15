import React, { useState } from 'react';
import { SlArrowLeft } from "react-icons/sl";
const ADMIN_URL = window.location.protocol + "//" + window.location.host + "/wp-admin/admin-post.php";

async function formSubmit(e) {
    const data = new FormData(e.currentTarget);
    console.log(...data.entries());
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
    console.log("rendered");
    
    let currentInputs = props.inputs.map(input => {
        console.log(input.page == page);
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
            {currentInputs}
            {(page == 1 && props.message) ? 
            <li key="contact_message_field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Enter message..."></textarea>
                <span className="error"></span>
            </li> : null}
            <CurrentButtons />
        </ul>)
    }
    
    function checkValidity(e) {
        e.preventDefault();

        if (page == 5) {return;}
        if (page == 2) {setPage(page++); return;}
        
        // const formData = new FormData(e.target);

        const inputList = document.querySelectorAll("form#ps-contact-form input");
        let inputs = Array.from(inputList);
        inputs.pop();
        if (page == 1) {inputs.push(document.querySelector("form#ps-contact-form textarea"));}
        console.log(inputs);
        
        inputs.forEach((input, i) => {
            if (input.id === "hidden") {return;}
            let error = input.nextSibling;
            console.log(error);
            let isValid = true;
    
            if (!isValid) {
                error.textContent = input.error.message;
                error.className = "error active";
                return;
            }
            
            error.textContent = "";
            error.className = "error";
        })
    
        formSubmit(e);
        setPage(page+1);
        console.log(page);
        return;
    }

    return (
        <form id="ps-contact-form" onSubmit={checkValidity}>
            <CurrentPage />
            <input id="hidden" type="hidden" name="action" value="contact_form" />
        </form>
    )
}

export default ContactForm;