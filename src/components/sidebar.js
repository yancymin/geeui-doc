import React, { useEffect } from 'react'
import { Link, graphql, useStaticQuery, StaticQuery } from "gatsby"
import { css } from "@emotion/core"
import styled from 'styled-components';
import { color, fontColor } from '../styles/globalStyle';
import logoLight from '../assets/logo.svg';
import logoDark from '../assets/logo2.svg';
import arrowDown from '../assets/arrow_down.svg';
import { router } from './routerData.js'

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 244px;
    height: 100vh;
    display: inline-flex;  
    flex-direction: column;
    background-color: var(--gray1);
    box-shadow: 1px 0px 0px var(--gray5);
    min-height: 44px;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: all 0.2s ease;

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
            background-color: var(--gray5);
        }
    }

`
const Logo = styled.div`
    position: fixed;
    z-index: 100;
    background-color: var(--gray1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 244px;
    height: 100px;
    padding: 36px 24px;
    box-shadow: 0 1px 0px var(--gray5);
    transition: all 0.2s ease;


    img,a {
        height: 28px;
    }
`

const Tag = styled.span`
    height: fit-content;
    padding: 2px 6px;
    background-color: var(--gray5);
    font-size: 10px;
    font-weight: 600;
    border-radius: 3px;
    color: var(--black2);
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
         border-color: transparent;
         height: 44px;

         a {
             opacity: 0;
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
    border-top: 1px solid var(--gray5);
    transition: all 1s ease;
    overflow: hidden;
    padding-bottom: 16px;


    .active {
        color: var(--blue1);
        font-weight: 400;

        p {
            color: var(--blue1);
            font-weight: 400;
        }

        &:before {
            position: absolute;
            left: 0;
            content: '';
            display: block;
            width: 4px;
            height: 24px;
            background-color: var(--blue1);
            border-radius: 0 3px 3px 0;
        }

        &:hover {
            color: var(--blue1);
            font-weight: 400;
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
        font-weight: 200;
        font-size: 14px;
        line-height: 14px;
        margin: 0;
        color: var(--black2);
        text-decoration: none;
        transition: all 0.25s ease;


        &:hover {
            background-color: var(--gray2);
            color: var(--black1);
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
            background-color: var(--gray2);
            color: var(--black1);
        }
    p {
        font-weight: 400;
        font-size: 14px;
        line-height: 14px;
        margin: 0;
        color: var(--black1);
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

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.handleNav = this.handleNav.bind(this);
        this.state = {
            isDark: false,
            isToggled1: false,
            isToggled2: false,
            isToggled3: false,
            isToggled4: false,
        }
    }

    componentDidMount() {
        (localStorage.getItem('darkMode') === 'true') ? this.setState({ isDark: true }) : this.setState({ isDark: false })
        const input = document.getElementsByTagName('input')[0];
        input.addEventListener('click', () => {
            this.setState({ isDark: !this.state.isDark });
        })
    }

    handleNav() {
        return null
    }

    render() {
        // const data = this.props.data
        // const navIndex = ['开始', '基本', '组件', '模式', '数据可视化', '帮助']
        // const list1 = []
        // const list2 = []
        // const list3 = []
        // const list4 = []
        // const list5 = []
        // const list6 = []
        // const lists = [list1, list2, list3, list4, list5, list6]

        // data.allMarkdownRemark.edges.map(({ node }, index) => {
        //     function pushList(list, navIndex) {
        //         if (node.fields.slug.includes(navIndex)) {
        //             list.push(node.fields.slug)
        //             return list
        //         }
        //     }
        //     navIndex.forEach((item, index) => {
        //         pushList(lists[index], navIndex[index])
        //     })
        // })


        return (
            <Container>
                <Logo>
                    <Link to='/'>
                        <img alt='logo' src={this.state.isDark ? logoDark : logoLight}>
                        </img>
                    </Link>
                    <Tag>
                        V 1.0
                     </Tag>
                </Logo>

                < Nav >
                    <List >
                        <Title>
                            <p>
                                开始
                            </p>
                            <i>
                            </i>
                        </Title>
                        {router.开始.map((item, index) => {
                            return (<Link key={index} activeClassName="active" to={'/' + '开始' + '/' + item} >{item}</Link>)
                        })}
                    </List>
                    <List >
                        <Title>
                            <p>
                                基本
                            </p>
                            <i>
                            </i>
                        </Title>
                        {router.基本.map((item, index) => {
                            return (<Link key={index} activeClassName="active" to={'/' + '基本' + '/' + item} >{item}</Link>)
                        })}
                    </List>
                    <List >
                        <Title>
                            <p>
                                组件
                            </p>
                            <i>
                            </i>
                        </Title>
                        {router.组件.map((item, index) => {
                            return (<Link key={index} activeClassName="active" to={'/' + '组件' + '/' + item} >{item}</Link>)
                        })}
                    </List>
                    <List >
                        <Title>
                            <p>
                                模式
                            </p>
                            <i>
                            </i>
                        </Title>
                        {router.模式.map((item, index) => {
                            return (<Link key={index} activeClassName="active" to={'/' + '模式' + '/' + item} >{item}</Link>)
                        })}
                    </List>
                    <List >
                        <Title>
                            <p>
                                数据可视化
                            </p>
                            <i>
                            </i>
                        </Title>
                        {router.数据可视化.map((item, index) => {
                            return (<Link key={index} activeClassName="active" to={'/' + '数据可视化' + '/' + item} >{item}</Link>)
                        })}
                    </List>
                    <List >
                        <Link activeClassName="active" to={'/' + '帮助'} >帮助</Link>
                    </List>
                    {/* <List className={this.state.isToggled2 ? ' close' : ''} onClick={() => this.setState({ isToggled2: !this.state.isToggled2 })} >
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
                    <List className={this.state.isToggled3 ? ' close' : ''} onClick={() => this.setState({ isToggled3: !this.state.isToggled3 })}>
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
                    </List> */}
                </Nav>
            </Container >
        )
    }
}

// export default Sidebar


export default props => (
    <StaticQuery
        query={graphql`
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
      `}
        render={data => <Sidebar data={data} {...props} />}
    />
)
