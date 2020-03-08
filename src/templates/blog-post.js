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
        padding: 100px 80px 60px 80px;
        text-align: left;
        margin: 0;
        border-bottom: 1px solid var(--gray5);
        margin-bottom:  64px;

        p { 
            max-width: 700px;
            margin-bottom: 0;
        }
`

const Tags = styled.div`
    display: flex;
    margin-top: 32px;
    max-width: 700px;
    flex-wrap: wrap;
`
const Tag = styled.a`
    display: flex;
    align-items: center;
    /* height: 30px; */
    font-size: 14px;
    /* line-height: 13px; */
    padding: 3px 12px;
    background-color: var(--gray7);
    color: var(--black2);  
    margin-right: 12px;
    border-radius: 29px;
    transition: all 0.25s ease;
    margin-top: 16px;
   
   &:hover {
    text-decoration: none !important;
    color: var(--gray1) !important;  
    background-color: var(--black1);
   }
`

export default ({ data }) => {
    const post = data.markdownRemark

    const nodeSrc = data.allMarkdownRemark.edges.map((nodeItem) => (
        nodeItem.node.fields.slug
    ))

    const headingValue = []
    data.allMarkdownRemark.edges.map(({ node }) => {
        if (post.frontmatter.title === node.frontmatter.title) {
            node.headings.map((headingNode) => {
                headingValue.push(headingNode)
                return headingValue
            })
        }
    })



    return (
        <Layout>
            <Catalog pageName={post.frontmatter.title} />
            <Heading1 id="articleHeading">
                <h1>{post.frontmatter.title}</h1>
                <p>{post.frontmatter.des}</p>
                <Tags >
                    {headingValue.map((heading, index) => (
                        (heading.depth === 2) ?
                            <Tag key={index} href={'#' + heading.value.replace(decodeURIComponent('%20'), '-')}>
                                {heading.value}
                            </Tag> : null
                    ))}
                </Tags>
            </Heading1>
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
                frontmatter {
                    title
                  }
                fields {
                    slug
                }
                headings {
                    value
                    depth
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
