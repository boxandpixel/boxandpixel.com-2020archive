import React from 'react'
import boxStyles from "./box.module.css"

export default function Box({ children }) {
    return (
        <section className={boxStyles.boxContainer}>
            <div className={boxStyles.boxContent}>
                {children}
            </div>
        </section>
    )
}