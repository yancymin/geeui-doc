import React from "react"
import { Link } from "gatsby"
// import { rhythm } from "../utils/typography"
import styled from 'styled-components';
import { color, fontColor } from '../styles/globalStyle';
import logoPath from '../assets/logo.png';

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
    border-bottom: 1px solid ${color.gray5};

    img {
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

export default () => {
    return (
        <Container>
            <Logo>
                <img alt='logo' src={logoPath} >
                </img>
                <Tag>
                    V 1.0
                 </Tag>
            </Logo>
        </Container>
    )
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`