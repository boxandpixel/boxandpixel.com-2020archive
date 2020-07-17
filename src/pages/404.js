import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Header from '../components/header'
import Hero from '../components/hero'
import Footer from '../components/footer'


export default function notFound() {
    return (
        <Layout>
            <Header />
            <Hero heroText="Page Not Found" />
            <Footer />
        </Layout>
    )
}