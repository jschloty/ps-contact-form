import React from 'react'
import ReactDOM from 'react-dom/client'
import ContactForm from '../components/ContactForm';


/**
 * Uses ReactDOM to replace dummy element from render.php into the
 * ContactForm component.
 */

const divsUnloaded = document.querySelectorAll(".ps-form-unloaded");

divsUnloaded.forEach(div => {
    const data = JSON.parse(div.querySelector("pre").innerText);
    const root = ReactDOM.createRoot(div);
    root.render(<ContactForm {...data}/>);
    div.classList.remove("ps-form-unloaded");
})