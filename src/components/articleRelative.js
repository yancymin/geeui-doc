import React from "react"
import styled from 'styled-components';
import arrowLeft from '../assets/arrow_left.svg';
import { Link, graphql, useStaticQuery } from "gatsby"
import { color, fontColor, ease } from '../styles/globalStyle';
import { router2 } from './routerData.js'

const ArticleRelative = styled.div`
    width: 100%;
    max-width: 700px;
    display: flex;
    justify-content: space-between;
    margin: 48px 0 80px 0;

    div{
        transition: ${ease.normal};
    }

    a {
        text-decoration: none !important;
        transition: ${ease.normal};
        &:hover {
            border-color: var(--blue2);
            background-color: var(--gray1);
            div{
                color: var(--blue1);
                &::before, &::after {
                   filter: hue-rotate(376deg) brightness(1.4) saturate(16) contrast(1);
                }
            }
        }
    }

    span {
        font-size: 12px;
        line-height: 12px;
        color: var(--black2);
        font-weight: 200;
        margin-bottom: 16px;
    }

    @media screen and (max-width: 900px){
        flex-direction: column;
        a {
            width: 100%;
            margin-bottom: 8px;
        }
    }
`
const Left = styled(Link)`
    display: flex;
    flex-direction: column;
    width: calc( 50% - 8px);
    padding: 16px;
    border: 1px solid var(--gray6);
    border-radius: 4px;

    span {
        padding-left: 26px;
    }

    &>div {
        &::before {
            position: relative;
            top: 2px;
            content: '';
            display: inline-block;
            width: 18px;
            height: 18px;
            background: url(${arrowLeft}) no-repeat center;
            background-size: cover;
            margin-right: 8px;
         }
    }
`
const Right = styled(Link)`
    display: flex;
    flex-direction: column;
    width: calc( 50% - 8px);
    padding: 16px;
    text-align: right;
    border: 1px solid var(--gray6);
    border-radius: 4px;

    span {
        padding-right: 26px;
    }

    &>div {
        &::after {
            position: relative;
            top: 2px;
            content: '';
            display: inline-block;
            width: 18px;
            height: 18px;
            background: url(${arrowLeft}) no-repeat center;
            background-size: cover;
            margin-left: 8px;
            transform: rotate(180deg);
         }
    }
`
const ArticleNav = styled.div`
    font-weight: 200;
    font-size: 18px;
    line-height: 18px;
    color: var(--black1);
`
export default props => {
    const data = useStaticQuery(graphql`
    query {
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
      }      
    `)

    const navIndex = ['开始', '基本', '组件', '模式', '数据可视化', '帮助']

    const title = () => {
        const newTitle = props.node.replace(/^\//g, '').replace(/\/$/g, '').replace('/', ' ');
        return decodeURIComponent(newTitle)
    }

    let up, down;

    // let current = title().replace(/\S+\s+/, '')
    let current = '/' + title().replace(' ', '/')
    up = router2[router2.indexOf(current) - 1]
    down = router2[router2.indexOf(current) + 1]

    const LeftCom = () => (
        current.includes('关于 GEE-UI') ? null : <Left to={(current === '/帮助') ? router2[router2.length - 2] : up} >
            <span>
                上一篇
        </span>
            {(current === '/帮助') ? <ArticleNav>{router2[router2.length - 2].replace('/', '').replace('/', ' - ')}</ArticleNav> : <ArticleNav>{up.replace('/', '').replace('/', ' - ')}</ArticleNav>}
        </Left >
    )
    const RightCom = () => (
        current.includes('帮助') ? null : <Right to={down}>
            <span>
                下一篇
</span>
            <ArticleNav>
                {down.replace('/', '').replace('/', ' - ')}
            </ArticleNav>
        </Right >
    )

    return (
        <ArticleRelative >
            <LeftCom />
            {(current == '/帮助') ? null : <RightCom />}
        </ArticleRelative >
    )
}