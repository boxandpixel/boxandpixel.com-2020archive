import React from 'react'
import formStyles from './form.module.css'

export default function Form() {
    return (
        <section className={formStyles.formContainer}>
            <form name="contact" action="/thank-you/" netlify>
                <fieldset>
                    <label for="name">Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Name*"
                    />
                </fieldset>

                <fieldset>
                    <label for="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email*"
                    />
                </fieldset>

                <fieldset>
                    <label for="company">Company</label>
                    <input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Company"
                    />
                </fieldset>

                <fieldset>
                    <label for="message">Message</label>
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