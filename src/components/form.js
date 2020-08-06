import React from 'react'
import formStyles from './form.module.css'
// import { useForm } from 'react-hook-form'



export default function Form() {

    // const { register, handleSubmit, errors } = useForm();

    // const onSubmit = (data, e) => {
    //     console.log(data);

    //     fetch("/contact ", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //     })
    //         .catch(error => console.log("There are errors"));

    //     e.preventDefault();
    // };

    // For form tag: onSubmit={handleSubmit(onSubmit)}

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
                        // aria-invalid={errors.name ? "true" : "false"}
                        placeholder="Name*"
                    // ref={register({ required: true })}
                    />
                    {/* {errors.name && errors.name.type === "required" && (
                        <span className={formStyles.inputRequired}>Please enter your name</span>
                    )} */}
                </fieldset>

                <fieldset>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        // aria-invalid={errors.email ? "true" : "false"}
                        placeholder="Email*"
                    // ref={register({
                    //     required: true,
                    //     pattern: {
                    //         value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    //     }
                    // })}
                    />
                    {/* {errors.email && errors.email.type === "required" && (
                        <span className={formStyles.inputRequired}>Please enter your email</span>
                    )}

                    {errors.email && errors.email.type === "pattern" && (
                        <span className={formStyles.inputRequired}>Please enter a valid email address</span>
                    )} */}
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
                        // aria-invalid={errors.message ? "true" : "false"}
                        placeholder="How can we help you?*"
                    // ref={register({ required: true })}
                    />
                    {/* {errors.message && errors.message.type === "required" && (
                        <span className={formStyles.inputRequired}>Please enter your message</span>
                    )} */}
                </fieldset>
                <button type="submit">Send Message</button>
            </form>
        </section>
    )
}