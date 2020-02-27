import React, { useState } from 'react'
import { Link, graphql, useStaticQuery } from "gatsby"
// import { rhythm } from "../utils/typography"
import styled from 'styled-components';
import { color, fontColor } from '../styles/globalStyle';
import logoPath from '../assets/logo.png';
import arrowDown from '../assets/arrow_down.svg';

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 240px;
    height: 100vh;
    display: inline-flex;  
    flex-direction: column;
    background-color: ${color.gray1};
    box-shadow: 1px 0px 0px ${color.gray5};
`
const Logo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;
    padding: 36px 24px;
    box-shadow: 0 1px 0px ${color.gray5};

    img,a {
        height: 28px;
    }
`

const Tag = styled.span`
    height: fit-content;
    padding: 2px 6px;
    background-color: ${color.gray5};
    font-size: 10px;
    font-weight: 600;
    border-radius: 3px;
`
const Nav = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: all 0.25s ease;

    .close {
         display: block;
         background-color: transparent;
         border-color: transparent;
         height: 44px;

         a {
             /* position: absolute; */
             /* opacity: 0; */
             /* display: none; */
         }

         h4 {
           
         }

         i{
             transform: rotate(180deg);
         }
     }
`

const List = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${color.gray2};
    border-top: 1px solid ${color.gray5};
    border-bottom: 1px solid ${color.gray5};
    transition: all 1s ease;

    .active {
        color: red;
    }

    a {
        position: relative;
        display: block; 
        width: 240px;
        height: 44px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 12px 0 40px;
        font-weight: 300;
        font-size: 14px;
        line-height: 14px;
        margin: 0;
        color: ${fontColor.black2};
        text-decoration: none;

        &:hover {
            background-color: ${color.gray5};
            color: ${fontColor.black1};
        }
    }
`

const Title = styled.h4`
    display: block; 
    width: 240px;
    height: 44px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12px 0 24px;
    margin: 0;
    transition: all 0.25s ease;
        &:hover {
            background-color: ${color.gray5};
            color: ${fontColor.black1};
        }
    p {
        font-weight: 500;
        font-size: 14px;
        line-height: 14px;
        margin: 0;
        color: ${fontColor.black1};
    }
    i {
        display: block;
        width: 20px;
        height: 20px;
        background: url('${arrowDown}') no-repeat center;
        background-size: cover;
        transition: all 0.15s ease;
    }
`

export default () => {
    const [isToggled, setToggled] = React.useState(false)
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
              }
              fields {
                slug
              }
            }
          }
        }
      }
  `)

    console.log(data)

    const list1 = []
    data.allMarkdownRemark.edges.map(({ node }, index) => {
        if (node.fields.slug.includes('开始')) {
            list1.push(node.fields.slug)
        }
    })
    console.log(list1)
    return (
        <Container>
            <Logo>
                <Link to='/'>
                    <img alt='logo' src={logoPath} >
                    </img>
                </Link>
                <Tag>
                    V 1.0
                 </Tag>
            </Logo>

            < Nav >
                <List className={`${isToggled ? ' close' : ''}`} onClick={() => setToggled(!isToggled)} >
                    <Title>
                        <p>
                            开始
                        </p>
                        <i>
                        </i>
                    </Title>
                    {/* {data.allMarkdownRemark.edges.map(({ node }, index) => {
                        if (node.fields.slug.includes('开始')) {
                            <Link key={index} activeClassName="active" to={node.fields.slug} >{node.frontmatter.title}</Link>
                        }
                    })} */}
                </List>
            </Nav>
        </Container >
    )
}


