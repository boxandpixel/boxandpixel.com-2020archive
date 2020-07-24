import React from 'react'
import formStyles from './form.module.css'

export default function Form() {
    return (
        <section className={formStyles.formContainer}>
            <form name="contact" action="/thank-you/" netlify="true" netlify-honeypot="bot-field" method="post">
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" name="contact" />
                <fieldset>
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Name*"
                    />
                </fieldset>

                <fieldset>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email*"
                    />
                </fieldset>

                <fieldset>
                    <label htmlFor="company">Company</label>
                    <input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Company"
                    />
                </fieldset>

                <fieldset>
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="How can we help you?*"
                    />
                </fieldset>
                <button type="submit">Send Message</button>
            </form>
        </section>
    )
}