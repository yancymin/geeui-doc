import React from "react"
import styled from 'styled-components';
import arrowLeft from '../assets/arrow_left.svg';
import { Link, graphql, useStaticQuery } from "gatsby"
import { color, fontColor, ease } from '../styles/globalStyle';

const ArticleRelative = styled.div`
    width: 100%;
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
            border-color: ${color.blue1};
            background-color: ${color.gray1};
            div{
                color: ${color.blue1};
                &::before, &::after {
                   filter: hue-rotate(376deg) brightness(1.4) saturate(16) contrast(1);
                }
            }
        }
    }

    span {
        font-size: 12px;
        line-height: 12px;
        color: ${fontColor.black2};
        font-weight: 300;
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
    border: 1px solid ${color.gray6};
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
    border: 1px solid ${color.gray6};
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
    font-weight: 300;
    font-size: 18px;
    line-height: 18px;
    color: ${fontColor.black1};
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

    return (
        <ArticleRelative >
            <Left to={decodeURIComponent(props.node)}>
                <span>
                    上一篇
                </span>
                <ArticleNav>
                    {decodeURIComponent(props.node)}
                </ArticleNav>
            </Left>
            <Right to='/'>
                <span>
                    上一篇
                </span>
                <ArticleNav>
                    {decodeURIComponent(props.node)}
                </ArticleNav>
            </Right >
        </ArticleRelative >
    )
}