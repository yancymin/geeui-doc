import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Catalog from "../components/catalog"
import ArticleRelative from "../components/articleRelative"
import styled from 'styled-components';
import { Location } from '@reach/router'

const Content = styled.div`
    width: 100%;
    max-width: 700px;

    hr {
        &:nth-of-type(1) {
            & + h2 {
                margin-top: 0 !important;
            }
        }
    }
`
const Heading1 = styled.div`
        width: calc(100vw - 240px);
        z-index: 0;
        position: relative;
        top: 0;
        left: -80px;
        padding: 100px 80px 64px 80px;
        text-align: left;
        margin: 0;
        border-bottom: 1px solid var(--gray5);
        margin-bottom:  64px;

        p {
            max-width: 700px;
            margin-bottom: 0;
        }
`

export default ({ data }) => {
    const post = data.markdownRemark

    const nodeSrc = data.allMarkdownRemark.edges.map((nodeItem) => (
        nodeItem.node.fields.slug
    ))



    return (
        <Layout>
            <Catalog pageName={post.frontmatter.title} />
            <Heading1 id="articleHeading"><h1>{post.frontmatter.title}</h1><p>{post.frontmatter.des}</p></Heading1>
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
        des
      }
    }
  }
`
