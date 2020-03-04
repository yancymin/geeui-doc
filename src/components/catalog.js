import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components';
import { color, fontColor, ease } from '../styles/globalStyle';
import CatalogIcon from "../assets/catalog.svg";

const Catalog = styled.div`
    position: fixed;
    top: 168px;

    &>div {
        position: absolute;
        margin-left: 410px;
    }

    span {
        display: flex;
        align-items: center;
        color: var(--black2);
        font-weight: 400;
        font-size: 14px;
        line-height: 14px;
        margin-bottom: 14px;
        white-space: nowrap;

        &::before {
            content: '';
            display: block;
            width: 18px;
            height: 18px;
            background: url(${CatalogIcon});
            margin-right: 4px;
        }
    }
`
const CatalogWrap = styled.div`
    max-width: 200px;

    div {
        height: 32px;
        white-space: nowrap;
    }

    a {
        color: var(--black2);
        font-weight: 200;
        font-size: 14px;
        line-height: 14px;
        white-space: nowrap;

        &:hover {
            text-decoration: underline;
            color: var(--blue1);
        }

        &:last-child, &:nth-of-type(2) {
            padding-left: 8px;
        }
    }
`

export default props => {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
              }
              headings {
                value
                depth
              }
            }
          }
        }
      }
    `)

    const headingValue = []
    data.allMarkdownRemark.edges.map(({ node }) => {
        if (props.pageName === node.frontmatter.title) {
            node.headings.map((headingNode) => {
                headingValue.push(headingNode)
                return headingValue
            })
        }
    })

    return (
        <Catalog>
            <div>
                <span>
                    目录
             </span>
                <CatalogWrap>
                    {headingValue.map((heading, index) => (
                        <div key={index}>
                            <a href={'#' + heading.value.replace(decodeURIComponent('%20'),'-')}>
                                {(heading.depth === 2) ? heading.value : ''}
                            </a>
                            <a href={'#' + heading.value.replace(decodeURIComponent('%20'),'-')}>
                                {(heading.depth === 3) ? heading.value : ''}
                            </a>
                            <a href={'#' + heading.value.replace(decodeURIComponent('%20'),'-')}>
                                {(heading.depth === 4) ? heading.value : ''}
                            </a>
                        </div>
                    ))}
                </CatalogWrap>
            </div>
        </Catalog>
    )
}