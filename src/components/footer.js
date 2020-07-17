import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import footerStyles from './footer.module.css'

export default function Footer() {
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
        <footer className={footerStyles.siteFooter}>
            <span>&copy; {new Date().getFullYear()} {data.site.siteMetadata.title}</span>
        </footer>
    )
}