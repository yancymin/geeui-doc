import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import { Link } from "gatsby"


const GlobalStyle = createGlobalStyle`
body {
  background: #59dac1 !important;
  font-family: courier;
  display: flex;
  justify-content: center;
}
`

const Container = styled.div`
  margin: 10% 3%;
  max-width: 600px;
  background: white;
  border: 2px solid black;
  box-shadow: 10px 10px 0 rgba(0, 0, 0, 0.2);
    .right {
  float: right;
}
.left {
  float: left;
}
div {
  box-sizing: border-box;
}
  .top-bar {
  border-bottom: 2px solid black;
  padding: 3px;
}
  .top-bar:before,
  .top-bar:after {
  content: " ";
  display: table;
}
  .top-bar:after {
  clear: both;
}
  .top-bar .square {
  border: 2px solid black;
  width: 20px;
  height: 20px;
}
  .top-bar .square.left {
  margin-right: 3px;
}
  .top-bar .square.right {
  margin-left: 3px;
}
  .top-bar .title-bar {
  width: calc(100% - 46px);
  float: left;
  position: relative;
}
  .top-bar .title-bar .title {
  position: absolute;
  background: white;
  left: 0;
  width: 200px;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  display: inline-block;
  text-align: center;
}
  .top-bar .title-bar .lines {
  background: black;
  height: 2px;
  margin-top: 2px;
}
  .top-bar .title-bar .lines:first-child {
  margin-top: 1px;
}
  .contents {
  padding: 24px;
  line-height: 1.4;
}
  .contents:before,
  .contents:after {
  content: " ";
  display: table;
}
  .contents:after {
  clear: both;
}
a {
  border: 2px solid black;
  background: transparent;
  display: block;
  padding: 8px 16px;
  font-weight: bold;
  font-size: 18px;
  font-family: 'courier new';
  margin-top: 32px;
  width: fit-content;
  color: black;

  &:hover {
      background-color: black;
      color: white;
  }
}

h1 {
    font-size: 32px;
    margin-bottom: 20px;
}

hr {
    display: block;
    background-color: black;
    margin: 30px 0;
}
`

export default () => {
    return (

        <Container className="os-screen">
            <GlobalStyle />
            <div className="top-bar">
                <div className="square left"></div>
                <div className="title-bar">
                    <div className="title">404 ERROR | GEE-UI</div>
                    <div className="lines"></div>
                    <div className="lines"></div>
                    <div className="lines"></div>
                    <div className="lines"></div>
                    <div className="lines"></div>
                </div>
                <div className="square right"></div>
            </div>
            <div className="contents">
                <h1>
                    🔌 页面没有找到
                </h1>
                很抱歉，找不到您要查找的页面。点击下方按钮回到主页。<hr />
                Oops sorry, the page you are looking for cannot be found. Click the button below to return to the homepage
          <Link to='/'>Click Me</Link>
            </div>
            <div className="bot-bar"></div>
        </Container>
    )
}