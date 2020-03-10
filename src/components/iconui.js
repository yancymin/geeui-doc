import React from "react"
import styled from 'styled-components';
import gdesign from '../assets/gdesign.svg';
import darkModeSrc from '../assets/dark_mode.svg';
import dribbble from '../assets/dribbble.svg';
import { color, fontColor, ease } from '../styles/globalStyle';
import "../styles/dark.css";
import useDarkMode from 'use-dark-mode';
import Search from "../components/search/index"

const searchIndices = [
    { name: `Pages`, title: `Pages`, hitComp: `PageHit` }
]

const Icon = styled.a`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    border-radius: 36px;
    background-color: var(--gray3);
    margin-left: 16px;
    border: 2px solid transparent;
    transition: ${ease.easeOutQuart(`0.2s`)};

    
    &:hover {
        transform: scale(1.1);
        border-color: var(--gray6);
        span {
            visibility: visible;
            transform: perspective(80px) rotateX(0) scaleY(1);
        }
    }

    &:active {
        transform: scale(0.8);
        transition: ${ease.easeOutBack(`0.1s`)};
    }

    span {
        white-space: nowrap;
        visibility: hidden;
        position: absolute;
        bottom: -30px;
        padding: 3px 6px;
        background-color: var(--black1);
        color: var(--gray6);
        border-radius: 3px;
        font-size: 10px;
        transition: ${ease.easeOutBack(`0.16s`)};
        transition-delay: 0.08s;
        transform: perspective(80px) rotateX(-20deg) scaleY(0.95);
        transform-origin: top;
    }
`

const IconWrap = styled.div`
    z-index: 999;
    position: fixed;
    top: 24px;
    right: 40px;
    display: flex;
    

    @media screen and (max-width: 414px) {
        opacity: 0;
        visibility: hidden;
    }

    .toggle-control {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 36px;
        height: 36px;
        border-radius: 36px;
        background-color: var(--gray3);
        margin-left: 16px;
        border: 2px solid transparent;
        transition: ${ease.easeOutQuart(`0.2s`)};
        background-image: url(${darkModeSrc}) ;
        background-repeat: no-repeat;
        background-size: 20px 20px;
        background-position: center;
        cursor: pointer;

        &:hover {
        border-color: var(--gray6);
        transform: scale(1.1);

            &::after {
                visibility: visible;
                transform: perspective(80px) rotateX(0) scaleY(1);
            }
        }
                
        &:focus {
            outline: -webkit-focus-ring-color auto 5px;
        }

        &:active {
            transform: scale(0.8);
            transition: ${ease.easeOutBack(`0.1s`)};
        }

        &::after {
            content: 'Dark mode';
            display: block;
            white-space: nowrap;
            visibility: hidden;
            position: absolute;
            bottom: -30px;
            padding: 3px 6px;
            background-color: var(--black1);
            color: var(--gray6);
            border-radius: 3px;
            font-size: 10px;
            transition: ${ease.easeOutBack(`0.16s`)};
            transition-delay: 0.08s;
            transform: perspective(80px) rotateX(-20deg) scaleY(0.95);
            transform-origin: top;
        }

        input {
            cursor: pointer;
            position: absolute;
            opacity: 0;
            width: 36px;
            height: 36px;
        }
    }
`

const Iconui = props => (
    <Icon href={props.href} target='_blank'>
        <img src={props.iconsrc} alt={props.alt} />
        <span>
            {props.tips}
        </span>
    </Icon>
)

const Toggle = ({ checked, onChange }) => (
    <button className="toggle-control">
        <input
            className="dmcheck"
            type="checkbox"
            checked={checked}
            onChange={onChange}
            id="dmcheck"
        />
    </button>
);


export default () => {
    const darkMode = useDarkMode(false);

    return (
        <IconWrap>
            <Search collapse indices={searchIndices} />
            <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
            <Iconui href='https://dribbble.com/geetest' iconsrc={dribbble} alt='dribbble' tips='团队 Dribbble' />
            <Iconui href='https://geetest.design' iconsrc={gdesign} alt='gdesign' tips='极验用户体验设计中心' />
        </IconWrap>
    )
}

