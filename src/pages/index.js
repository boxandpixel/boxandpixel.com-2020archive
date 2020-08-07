import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Hero from "../components/hero"
import Intro from "../components/intro"
import Box from "../components/box"
import Footer from "../components/footer"
import { graphql } from "gatsby"

export default function Home({ data }) {
  console.log(data)
  return (
    <Layout>

      <Header />
      <Hero heroText="A calculated approach to modern web development." />
      <Intro introText="Box &amp; Pixel is a website development consultancy, with a problem-first approach to building usable experiences." />
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Box>
            <h3>{node.frontmatter.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: node.html }} />
          </Box>
        </div>
      ))}
      <Footer siteTitle="{BOX &amp; PIXEL}" />
    </Layout>
  )
}

export const query = graphql`
  query {
    markdownRemark {
      id
    }
    allMarkdownRemark(
      sort: {
        fields: [frontmatter___order]
        order: ASC
      }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          html
          id
        }
      }
    }
  }
`