import * as React from "react"
import ContactForm from "../components/ContactForm";
import SEO from '../components/SEO';
import './index.css'


const ContactPage = () => {
    return (
    <main>
        <SEO
            title="Contact Page"
        />
        <h1>Contact Page</h1>
        <ContactForm/>
    </main>
)
}

export default ContactPage