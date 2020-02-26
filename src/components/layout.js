import React from "react"
import Sidebar from "./sidebar"
import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-between;
`
const Article = styled.article`
    width: calc( 100vw - 240px );
    display: flex;
    justify-content: center;
    padding-top: 100px;
    margin-left: 240px;
`
const ArticleWrap = styled.div`
    width: 100%;
    max-width: 700px;
    margin: 0 20px
`

export default ({ children }) => (
  <Container>
    <Sidebar>
    </Sidebar>
    <Article>
      <ArticleWrap>
        {children}
      </ArticleWrap>
    </Article>
  </Container>
)