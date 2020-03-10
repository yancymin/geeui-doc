import React from "react"
import styled from 'styled-components';
import menu from '../assets/menu.svg';
import { Link } from "gatsby"
import logoLight from '../assets/logo.svg';
import logoDark from '../assets/logo2.svg';

const MobileHeader = styled.header`
        visibility: hidden;
        z-index: 999;
        position: fixed;
        top: 0;
        right: 0;
        width: 100vw;
        height: 64px;
        display: flex;
        align-items: center;
        background-color: var(--gray1);
        border-bottom: 1px solid var(--gray5);
        padding: 0 24px;
        transition: all 0.2s ease;

        
        @media screen and (max-width: 414px) {
           visibility: visible;
        }
        
        a {
            height: 34px;
            img {
                margin-right: 16px;
            }
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


const MenuBtn = styled.button`
    visibility: hidden;
    z-index: 100;
    position: fixed;
    bottom: 16px;
    right: 16px;
    width: 48px;
    height: 48px;
    border-radius: 48px;
    border: none;
    background-color: #59dac1;
    transition: all 0.2s ease;

    @media screen and (max-width: 414px) {
           visibility: visible;
        }

    img {
        transition: all 0.2s ease;
    }
`

export default () => {
    const [isToggled, setToggled] = React.useState(true)

    const handleMenu = e => {
        setToggled(!isToggled)
        e.preventDefault();
        const sideBar = document.querySelector('#sideBar');
        const mobileHeader = document.querySelector('#mobileHeader');
        const menuButton = document.querySelector('#menuBtn');
        if (isToggled === true) {
            setToggled(!isToggled)
            sideBar.classList.add('sideBarOpen')
            mobileHeader.classList.add('mobileHeaderDis')
            menuButton.classList.add('menuActive')
        } else {
            sideBar.classList.remove('sideBarOpen')
            mobileHeader.classList.remove('mobileHeaderDis')
            menuButton.classList.remove('menuActive')
        }
    }

    return (
        <div>
            <MobileHeader id='mobileHeader'>
                <Link to='/'>
                    <img src={logoLight} alt='logo' />
                </Link>
                <Tag>
                    V 1.0
                </Tag>
            </MobileHeader>
            <MenuBtn onClick={handleMenu} id='menuBtn'>
                <img src={menu} alt='menu' />
            </MenuBtn>
        </div>
    )
}