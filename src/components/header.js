import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import headerStyles from "./header.module.css"

export default function Header() {
    const data = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                title
              }
            }
          }
        `
    )
    return (
        <header className={headerStyles.siteHeader}>
            <h1 className={headerStyles.siteTitle}><Link to="/">{data.site.siteMetadata.title}</Link></h1>
            <ul className={headerStyles.siteNav}>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </header>
    )
}
