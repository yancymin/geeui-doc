import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components';
import { color, fontColor, ease } from '../styles/globalStyle';
import CatalogIcon from "../assets/catalog.svg";

const Catalog = styled.div`
    opacity: 0;
    position: fixed;

    &>div {
        position: absolute;
        margin-left: 760px;
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
    display: flex;
    flex-direction:column;

    &>div{
            padding-left: 8px;
        }


    div {
        display: flex;
        align-items: center;
        position: relative;
        height: 28px;
        white-space: nowrap;
        transition: all 0.25s ease;
    }

    a {
        position: relative;
        color: var(--black2);
        font-weight: 200;
        font-size: 13px;
        line-height: 13px;
        white-space: nowrap;
        margin: 7px 0;

        &:hover {
            text-decoration: none !important;
            color: var(--blue1);
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
        <Catalog id="catalog">
            <div>
                <span>
                    目录
             </span>
                <CatalogWrap>
                    {headingValue.map((heading, index) => (
                        (heading.depth === 2) ?
                            <a key={index} href={'#' + heading.value.replace(decodeURIComponent('%20'), '-')}>
                                {heading.value}
                            </a> : ((heading.depth === 3) ? <div><a key={index + 1} href={'#' + heading.value.replace(decodeURIComponent('%20'), '-')}>
                                {heading.value}
                            </a> </div> : (heading.depth === 4) ? <div><a key={index + 2} href={'#' + heading.value.replace(decodeURIComponent('%20'), '-')}>
                                {heading.value}
                            </a> </div> : null)
                    ))}
                </CatalogWrap>
            </div>
        </Catalog>
    )
}
