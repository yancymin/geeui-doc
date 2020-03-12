import React, { Component } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import Hero from "../assets/index_hero.svg"
import Card1 from "../assets/index_card1.svg"
import Card2 from "../assets/index_card2.svg"
import Card3 from "../assets/index_card3.svg"
import Card4 from "../assets/index_card4.svg"
import { router } from "../components/routerData"
import button from "./组件/button-1.jpg"
import selectionControls from "./组件/selection-controls-1.jpg"
import textField from "./组件/text-field-1.jpg"
import tab from "./组件/tab-1.jpg"
import lists from "./组件/lists-1.jpg"
import card from "./组件/card-1.jpg"
import modal from "./组件/modal-1.jpg"
import pillBadges from "./组件/pill-badges-1.jpg"
import tooltips from "./组件/tooltips-1.jpg"
import timePicker from "./组件/time-picker-1.jpg"
import datePicker from "./组件/date-picker-1.jpg"
import localSelector from "./组件/local-selector-1.jpg"
import StepTooltips from "./组件/step's-tooltips-1.jpg"
import dataTable from "./组件/data-table-1.jpg"
import breadcrumb from "./组件/breadcrumb-1.jpg"
import upload from "./组件/upload-1.jpg"
import message from "./组件/message-1.jpg"
import alert from "./组件/alert-1.jpg"


// export const query = graphql`
//   {
//     allFile(filter: {internal: {mediaType: {glob: "image/jpeg"}}, relativeDirectory: {glob: "组件"}}) {
//       edges {
//         node {
//           base
//           relativeDirectory
//         }
//       }
//     }
//   }
// `

const files = [button, selectionControls, textField, tab, lists, card, modal, pillBadges, tooltips, timePicker, datePicker, localSelector, StepTooltips, dataTable, breadcrumb, upload, message, alert];


const Heading = styled.header`
  padding: 100px 80px 64px 80px;
  background-color: #292F3A;
  width: calc(100vw - 240px);
  z-index: 0;
  position: relative;
  top: 0;
  left: -80px;
  overflow: hidden;


  @media screen and (max-width: 414px) {
      width: 100vw;
      left: -24px;
      padding: 120px 24px 64px 24px;

      img {
        right: -40% !important;
        bottom: -25%;
        min-width: 600px;
        top: unset !important;
      }
    }

  h1 {
    color: white;
  }

  p {
    max-width: 700px;
    margin-top: 24px;
    color: rgba(255, 255, 255, 0.7);
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 140px;
    height: 40px;
    background: #59dac1;
    border-radius: 3px;
    font-size: 14px;
    font-weight: 400;
    color: #292f3a;
    margin-top: 40px;
    transition: all 0.25s ease;

    &:hover {
      color: #292f3a;
      background-color: white;
      text-decoration: none;
    }
  }
  img {
        z-index: -1;
        position: absolute;
        right: -56px;
        top: -52px;
        width: 698px;
    }
`

const Start = styled.section`
    padding: 80px 0;
    border-bottom: 1px solid var(--gray5);

    h2 {
      margin: 0 0 16px 0;
    }
`
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Components = styled.div`
  padding: 80px 0;

  h2 {
      margin: 0 0 24px 0;
    }

    p {
      margin-bottom: 40px;
    }
`

export default ({ data }) => {
  return (
    <Layout>
      <Heading>
        <h1>
          GEE-UI Design System
        </h1>
        <p>
          GEE-UI 是极验（Geetest）内部的产品后台设计系统，包含可复用的 Web UI 组件、视觉样式和设计准则。旨在帮助开发工程师、设计师和产品设计师一起构建并维护极验产品后台，为我们的用户创造始终如一的友好体验。
        </p>
        <Link to='/开始/关于 Gee-UI'>
          开始浏览
        </Link>
        <img src={Hero} />
      </Heading>
      <Start className='cards'>
        <h2>
          快速开始
        </h2>
        <Cards>
          <Card imgSrc={Card1} h3='关于' des='GEE-UI 原则和团队成员' link='/开始/关于 Gee-UI' />
          <Card imgSrc={Card2} h3='基本' des='全局风格样式的基础规范' link='/基本/颜色' />
          <Card imgSrc={Card3} h3='组件' des='Web UI 组件库' link='/组件/按钮 Button' />
          <Card imgSrc={Card4} h3='帮助' des='GEE-UI 的问答和反馈' link='/帮助' />
        </Cards>
      </Start>
      <Components>
        <h2>
          组件
        </h2>
        <p>
          GEE-UI 覆盖多种组件类型，可以使用模块化组件构建一个完整的布局。
        </p>
        <ComponentWrap>
          {router.组件.map((item, index) => (
            <ComponentItem key={index} name={item} imgSrc={files[index]} link={'/组件/' + item} />
          ))}
        </ComponentWrap>
      </Components>
    </Layout>
  )
}


const Card = props => (
  <CardWarp>
    <Link to={props.link}>
      <img src={props.imgSrc} />
      <div>
        <h3>
          {props.h3}
        </h3>
        <p>
          {props.des}
        </p>
      </div>
    </Link>
  </CardWarp>
)

const CardWarp = styled.div`
    width: 200px;
    background: var(--bg);
    box-shadow:  0 0 0 1px var(--gray5);
    border-radius: 4px;
    margin-top: 16px;
    margin-right: 16px;
    transition: all 0.2s ease;
    overflow: hidden;

    
    @media screen and (max-width: 414px) {
        width: 100%;
        margin-right: 0;

        img {
          min-width: 101% !important;
          left: -1px;
        }
    }


    img {
      min-width: 202px;
      position: relative;
      top: -2px;
    }

    &:hover {
      background-color: var(--gray1);
      box-shadow:  0 0 0 1px var(--blue2);

      h3 {
        color: var(--blue1);
      }

      p {
        color: var(--black1);
      }
    }

    a {
      &:hover {
        text-decoration: none;
      }
    }

    & a>div {
    padding: 24px 20px 32px 20px;
    }

    h3 {
      font-size: 24px;
      line-height: 24px;
      font-weight: 200;
      margin: 0;
      transition: all 0.2s ease;
    }

    p {
      font-size: 14px;
      line-height: 14px;
      margin: 16px 0 0 0;
      transition: all 0.2s ease;
    }
`

const ComponentItem = props => (
  <ComponentCard to={props.link}>
    <div>
      <img src={props.imgSrc}>
      </img>
    </div>
    <span>
      {props.name}
    </span>
  </ComponentCard>
)

const ComponentCard = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(46% / 2);
  border-radius: 4px;
  box-shadow: inset 0 0 0 1px transparent;
  background-color: var(--bg);
  cursor: pointer;
  margin: 16px 8px;
  transition: all 0.15s ease;

   &>div {
     display: flex;
     justify-content: center;
     align-items: center;
     width: 100%;
     height: 160px;
     overflow: hidden;
     background: #FFFFFF;
    border: 1px solid var(--gray5);
    border-radius: 4px;
    transition: all 0.25s ease;

    img {
      min-width: 140%;
    }
   }

   span {
     color: var(--black2);
     font-weight: 200;
     font-size: 14px;
     line-height: 14px;
     transition: all 0.25s ease;
     margin: 16px 0;
   }

   &:hover {
    text-decoration: none !important;
    box-shadow: inset 0 0 0 1px var(--blue2);
    background-color: var(--gray1);

    &>div {
      border-color: var(--blue2);
      border-radius: 4px 4px 0 0;
    }

    span {
      color: var(--blue1);
    }
   }
`
const ComponentWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 868px;
  margin-left: -8px;

  @media screen and (max-width: 900px){
    flex-direction: column;

    &>a {
      width: 100% !important;
    }
  }
  @media screen and (max-width: 1200px){
    /* flex-direction: column; */

    &>a {
      width: calc(94% / 2);
    }
  }

`