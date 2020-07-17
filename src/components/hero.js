import React from 'react'
import heroStyles from './hero.module.css'

export default function Hero(props) {
    return (
        <section className={heroStyles.heroContainer}>
            <h2>{props.heroText}</h2>
        </section>
    )
}