import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Hero from "../components/hero"
import Footer from "../components/footer"

export default function thankYou() {
    return (
        <Layout>
            <Header />
            <Hero heroText="Thanks for your message. We'll be in touch soon." />
            <Footer />
        </Layout>
    )
}
