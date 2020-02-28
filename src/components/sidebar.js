import React from 'react'
import { Link, graphql, useStaticQuery } from "gatsby"
import { css } from "@emotion/core"
import styled from 'styled-components';
import { color, fontColor } from '../styles/globalStyle';
import logoPath from '../assets/logo.png';
import arrowDown from '../assets/arrow_down.svg';

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 244px;
    height: 100vh;
    display: inline-flex;  
    flex-direction: column;
    background-color: ${color.gray1};
    box-shadow: 1px 0px 0px ${color.gray5};
    min-height: 44px;
    overflow-y: scroll;
    overflow-x: hidden;

    ::-webkit-scrollbar , ::-webkit-scrollbar-thumb{
        visibility: hidden;
        width:0;
        height:4px;
        background-color:unset;
    }

    &:hover {
        ::-webkit-scrollbar
        {
            width:4px;
            height:16px;
            background-color: transparent;
            visibility: visible;
        }
        ::-webkit-scrollbar-thumb
        {
            visibility: visible;
            border-radius:0;
            background-color: ${color.gray5};
        }
    }

`
const Logo = styled.div`
    position: fixed;
    z-index: 100;
    background-color: ${color.gray1};
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 244px;
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
    position: absolute;
    top: 100px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    transition: all 0.25s ease;

    .close {
         display: block;
         /* background-color: transparent; */
         border-color: transparent;
         height: 44px;

         a {
             /* position: absolute; */
             opacity: 0;
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
    /* background-color: ${color.gray2}; */
    border-top: 1px solid ${color.gray5};
    /* border-bottom: 1px solid ${color.gray5}; */
    transition: all 1s ease;
    overflow: hidden;


    .active {
        color: ${color.blue1};
        font-weight: 500;

        p {
            color: ${color.blue1};
            font-weight: 500;
        }

        &:before {
            position: absolute;
            left: 0;
            content: '';
            display: block;
            width: 4px;
            height: 24px;
            background-color: ${color.blue1};
            border-radius: 0 3px 3px 0;
        }

        &:hover {
            color: ${color.blue1};
            font-weight: 500;
        }
    }

    a {
        position: relative;
        display: block; 
        width: 240px;
        min-height: 44px;
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
        transition: all 0.25s ease;


        &:hover {
            background-color: ${color.gray5};
            color: ${fontColor.black1};
        }
    }
`

const Title = styled.h4`
    display: block; 
    width: 244px;
    min-height: 44px;
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

    const navIndex = ['开始', '基本', '组件', '模式', '数据可视化', '帮助']
    const list1 = []
    const list2 = []
    const list3 = []
    const list4 = []
    const list5 = []
    const list6 = []
    const lists = [list1, list2, list3, list4, list5, list6]

    data.allMarkdownRemark.edges.map(({ node }, index) => {
        function pushList(list, navIndex) {
            if (node.fields.slug.includes(navIndex)) {
                list.push(node.fields.slug)
                return list
            }
        }
        navIndex.forEach((item, index) => {
            pushList(lists[index], navIndex[index])
        })
    })

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
                            {navIndex[0]}
                        </p>
                        <i>
                        </i>
                    </Title>
                    {list1.map((item, index) => {
                        let text = item.replace('/' + navIndex[0] + '/', '').replace('/', '')
                        return (<Link key={index} activeClassName="active" to={item} >{text}</Link>)
                    })}
                </List>
                <List className={`${isToggled ? ' close' : ''}`} onClick={() => setToggled(!isToggled)} >
                    <Title>
                        <p>
                            {navIndex[1]}
                        </p>
                        <i>
                        </i>
                    </Title>
                    {list2.map((item, index) => {
                        let text = item.replace('/' + navIndex[1] + '/', '').replace('/', '')
                        return (<Link key={index} activeClassName="active" to={item} >{text}</Link>)
                    })}
                </List>
                <List className={`${isToggled ? ' close' : ''}`} onClick={() => setToggled(!isToggled)} >
                    <Title>
                        <p>
                            {navIndex[2]}
                        </p>
                        <i>
                        </i>
                    </Title>
                    {list3.map((item, index) => {
                        let text = item.replace('/' + navIndex[2] + '/', '').replace('/', '')
                        return (<Link key={index} activeClassName="active" to={item} >{text}</Link>)
                    })}
                </List>
                <List  >
                    <Title>
                        <p>
                            {navIndex[3]}
                        </p>
                        <i>
                        </i>
                    </Title>
                    {list4.map((item, index) => {
                        let text = item.replace('/' + navIndex[3] + '/', '').replace('/', '')
                        return (<Link key={index} activeClassName="active" to={item} >{text}</Link>)
                    })}
                </List>
                <List  >
                    <Title>
                        <p>
                            {navIndex[4]}
                        </p>
                        <i>
                        </i>
                    </Title>
                    {list5.map((item, index) => {
                        let text = item.replace('/' + navIndex[4] + '/', '').replace('/', '')
                        return (<Link key={index} activeClassName="active" to={item} >{text}</Link>)
                    })}
                </List>
                <List css={css`
                        background-color: transparent !important;
                     `} >
                    <Link activeClassName="active" to='/帮助' css={css`
                        padding: 0 !important;
                     `} >
                        <Title>
                            <p>
                                {navIndex[5]}
                            </p>
                        </Title>
                    </Link>
                </List>
            </Nav>
        </Container >
    )
}


