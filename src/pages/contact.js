import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Hero from "../components/hero"
import Form from "../components/form"
import Footer from "../components/footer"

export default function Contact() {
    return (
        <Layout>
            <Header />
            <Hero heroText="Need an audit, an estimate, or a consultation? 
Look no further." />
            <Form />
            <Footer />
        </Layout>
    )
}
