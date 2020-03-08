import React, { useEffect } from 'react'
import { Link, graphql, useStaticQuery, StaticQuery } from "gatsby"
import { css } from "@emotion/core"
import styled from 'styled-components';
import { color, fontColor } from '../styles/globalStyle';
import logoLight from '../assets/logo.svg';
import logoDark from '../assets/logo2.svg';
import arrowDown from '../assets/arrow_down.svg';
import allToggledIcon from '../assets/all-toggled.svg';
import { router } from './routerData.js'

const Container = styled.div`
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 240px;
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
            width:0;
            height:16px;
            background-color: transparent;
            visibility: hidden;
        }
        ::-webkit-scrollbar-thumb
        {
            visibility: hidden;
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
    max-width: 240px;
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
    margin-bottom: 120px;

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
             transform: rotate(0deg);
         }
     }

     .activeBg {
         background-color: var(--gray7);
         border-bottom-color: var(--gray5)
     }
`

const List = styled.div`
    display: flex;
    flex-direction: column;
    border-top: 1px solid var(--gray5);
    border-bottom: 1px solid transparent;
    transition: all 1s ease;
    overflow: hidden;
    padding-bottom: 8px;
    margin-top: -1px;
    transition: all 0.2s ease;

    &:last-child{
        border-color: transparent;
        a {
            width: 100%;
            padding: 0 12px 0 24px;
            font-weight: 400;
            font-size: 14px;
            line-height: 14px;
            color: var(--black1);
        }
    }


    .active {
        color: var(--blue1) !important;
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
        /* width: 240px; */
        width: 100%;
        min-height: 36px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 12px 0 40px;
        font-weight: 200;
        font-size: 13px;
        line-height: 13px;
        margin: 0;
        color: var(--black2);
        text-decoration: none;
        transition: all 0.25s ease;

        &:last-child {
            font-size: 14px;
            line-height: 14px;
            min-height: 44px;
        }

        &:hover {
            background-color: var(--gray2);
            color: var(--black1);
        }

      
    }
`

const Title = styled.h4`
    display: block; 
    width: 240px;
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
        transform: rotate(180deg);
    }
`

const Expend = styled.button`
        z-index: 999;
        position: fixed;
        bottom: 0;
        left: 0;
        display: block; 
        /* width: 240px; */
        width: 240px;
        height: 44px;
        display: flex;
        justify-content:flex-start;
        align-items: center;
        padding: 0 12px 0 20px;
        font-weight: 200;
        font-size: 12px;
        line-height: 12px;
        margin: 0;
        color: var(--black2);
        text-decoration: none;
        transition: all 0.25s ease;
        background-color: var(--gray1);
        border-color: transparent;
        border-top: 1px solid var(--gray5);

        img {
            margin-right: 4px;
        }


        &:hover {
            background-color: var(--gray3);
            color: var(--black1);
        }
`

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        // this.handleNav = this.handleNav.bind(this);
        // this.handleClose = this.handleClose.bind(this);
        this.state = {
            isDark: false,
            isToggled1: true,
            isToggled2: true,
            isToggled3: true,
            isToggled4: true,
            isToggled5: true,
            allToggled: false,
        }
    }

    componentDidMount() {
        (localStorage.getItem('darkMode') === 'true') ? this.setState({ isDark: true }) : this.setState({ isDark: false })
        const input = document.getElementsByTagName('input')[0];
        input.addEventListener('click', () => {
            this.setState({ isDark: !this.state.isDark });
        });

        /********catalog*********/

        if (window.location.pathname == '/') {
            return null
        } else {
            let catalog = document.querySelector('#catalog');
            let articleHeading = document.querySelector('#articleHeading');
            const headerOffset = articleHeading.offsetTop + articleHeading.offsetHeight;
            catalog.style.top = headerOffset + 70 + 'px';

            window.addEventListener('scroll', (e) => {
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                if (scrollTop > headerOffset) {
                    catalog.style.transition = 'all 0.4s ease';
                    // catalog.style.top = '120px';
                    catalog.style.opacity = '1';
                } else {
                    catalog.style.opacity = '0';
                    catalog.style.transition = 'none';
                    catalog.style.top = ((headerOffset + 70) - scrollTop) + 'px'
                }
            })
        }

        /********sidebar active*********/


        const h4a = document.querySelector('#sidebar').querySelectorAll('h4');

        h4a.forEach(item => {
            item.addEventListener('click', () => {
                item.parentNode.classList.add('activeBg')
            })

            item.parentNode.querySelectorAll('a').forEach(item => {
                if (item.className === 'active') {
                    item.parentNode.classList.remove('close')
                    item.parentNode.classList.add('activeBg')
                }
            })
        })

    }


    render() {

        const allToggled = () => {
            if (!this.state.allToggled) {
                this.setState({ isToggled1: false });
                this.setState({ isToggled2: false });
                this.setState({ isToggled3: false });
                this.setState({ isToggled4: false });
                this.setState({ isToggled5: false });
                this.setState({ allToggled: true })
            } else {
                this.setState({ isToggled1: true });
                this.setState({ isToggled2: true });
                this.setState({ isToggled3: true });
                this.setState({ isToggled4: true });
                this.setState({ isToggled5: true });
                this.setState({ allToggled: false })
            }
        }

        const handleClose1 = () => {
            this.setState({ isToggled1: !this.state.isToggled1 });
            let stringSwith = () => {
                if (this.state.isToggled1) {
                    return '1'
                } else {
                    return '0'
                }
            }
            localStorage.setItem('isToggled1', stringSwith());
            console.log(localStorage.getItem('isToggled1'))
        }
        const handleClose2 = () => {
            this.setState({ isToggled2: !this.state.isToggled2 });
            let stringSwith = () => {
                if (this.state.isToggled2) {
                    return '1'
                } else {
                    return '0'
                }
            }
            localStorage.setItem('isToggled2', stringSwith());
            console.log(localStorage.getItem('isToggled2'))
        }
        const handleClose3 = () => {
            this.setState({ isToggled3: !this.state.isToggled3 });
            let stringSwith = () => {
                if (this.state.isToggled3) {
                    return '1'
                } else {
                    return '0'
                }
            }
            localStorage.setItem('isToggled3', stringSwith());
            console.log(localStorage.getItem('isToggled3'))
        }
        const handleClose4 = () => {
            this.setState({ isToggled4: !this.state.isToggled4 });
            let stringSwith = () => {
                if (this.state.isToggled4) {
                    return '1'
                } else {
                    return '0'
                }
            }
            localStorage.setItem('isToggled4', stringSwith());
            console.log(localStorage.getItem('isToggled4'))
        }
        const handleClose5 = () => {
            this.setState({ isToggled5: !this.state.isToggled5 });
            let stringSwith = () => {
                if (this.state.isToggled5) {
                    return '1'
                } else {
                    return '0'
                }
            }
            localStorage.setItem('isToggled5', stringSwith());
            console.log(localStorage.getItem('isToggled5'))
        }



        return (
            <Container >
                <Logo>
                    <Link to='/'>
                        <img alt='logo' src={this.state.isDark ? logoDark : logoLight}>
                        </img>
                    </Link>
                    <Tag>
                        V 1.0
                     </Tag>
                </Logo>

                < Nav id='sidebar'>
                    <List className={(this.state.isToggled1) ? 'close' : ''}>
                        <Title onClick={() => handleClose1()}>
                            <p>
                                开始
                            </p>
                            <i>
                            </i>
                        </Title>
                        {router.开始.map((item, index) => {
                            return (<Link key={index} activeClassName="active" to={'/开始/' + item} >{item}</Link>)
                        })}
                    </List>
                    <List className={(this.state.isToggled2) ? 'close' : null}>
                        <Title onClick={() => handleClose2()}>
                            <p>
                                基本
                            </p>
                            <i>
                            </i>
                        </Title>
                        {router.基本.map((item, index) => {
                            return (<Link key={index} activeClassName="active" to={'/基本/' + item} >{item}</Link>)
                        })}
                    </List>
                    <List className={(this.state.isToggled3) ? 'close' : null}>
                        <Title onClick={() => handleClose3()}>
                            <p>
                                组件
                            </p>
                            <i>
                            </i>
                        </Title>
                        {router.组件.map((item, index) => {
                            return (<Link key={index} activeClassName="active" to={'/组件/' + item} >{item}</Link>)
                        })}
                    </List>
                    <List className={(this.state.isToggled4) ? 'close' : null}>
                        <Title onClick={() => handleClose4()}>
                            <p>
                                模式
                            </p>
                            <i>
                            </i>
                        </Title>
                        {router.模式.map((item, index) => {
                            return (<Link key={index} activeClassName="active" to={'/模式/' + item} >{item}</Link>)
                        })}
                    </List>
                    <List className={(this.state.isToggled5) ? 'close' : null}>
                        <Title onClick={() => handleClose5()}>
                            <p>
                                数据可视化
                            </p>
                            <i>
                            </i>
                        </Title>
                        {router.数据可视化.map((item, index) => {
                            return (<Link key={index} activeClassName="active" to={'/数据可视化/' + item} >{item}</Link>)
                        })}
                    </List>
                    <List >
                        <Link activeClassName="active" to={'/帮助'} >帮助</Link>
                    </List>
                </Nav>
                <Expend onClick={() =>
                    allToggled()
                } >
                    <img src={allToggledIcon} /> {this.state.allToggled ? '收起全部' : '展开全部'}
                </Expend>
            </Container >
        )
    }
}



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
