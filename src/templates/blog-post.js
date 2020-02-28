import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Catalog from "../components/catalog"
import styled from 'styled-components';

const Content = styled.div`
    width: 100%;
`
const Heading1 = styled.h1`
        width: 100%;
        text-align: left;
        margin: 0;
`

export default ({ data }) => {
    const post = data.markdownRemark
    return (
        <Layout>
            <Catalog pageName={post.frontmatter.title} />
            <Heading1>{post.frontmatter.title}</Heading1>
            <Content dangerouslySetInnerHTML={{ __html: post.html }} />
        </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`