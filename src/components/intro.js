import React from 'react'
import introStyles from './intro.module.css'

export default function Intro(props) {
    return (
        <section className={introStyles.introContainer}>
            <section className={introStyles.introContent}>
                <p>{props.introText}</p>
            </section>
        </section>
    )
}

