import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Catalog from "../components/catalog"
import ArticleRelative from "../components/articleRelative"
import styled from 'styled-components';
import { Location } from '@reach/router'

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

    // console.log(data.allMarkdownRemark)

    const nodeSrc = data.allMarkdownRemark.edges.map((nodeItem) => (
        nodeItem.node.fields.slug
    ))



    return (
        <Layout>
            <Catalog pageName={post.frontmatter.title} />
            <Heading1>{post.frontmatter.title}</Heading1>
            <Content dangerouslySetInnerHTML={{ __html: post.html }} />
            <Location>
                {({ location }) => {
                    return <ArticleRelative node={location.pathname} />
                }}
            </Location>

        </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    allMarkdownRemark {
        edges {
            next {
                fields {
                    slug
                }
            }
            previous {
                fields {
                    slug
                }
            }
            node {
                fields {
                    slug
                }
            }
        }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
