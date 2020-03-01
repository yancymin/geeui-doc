import React from "react"
import styled from 'styled-components';
import gdesign from '../assets/gdesign.svg';
import darkMode from '../assets/dark_mode.svg';
import dribbble from '../assets/dribbble.svg';
import { color, fontColor, ease } from '../styles/globalStyle';

const Icon = styled.a`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    border-radius: 36px;
    background-color: ${color.gray3};
    margin-left: 16px;
    border: 2px solid transparent;
    transition: ${ease.easeOutQuart(`0.2s`)};

    &:hover {
        border-color: ${color.gray6};
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
        background-color: ${fontColor.black1};
        color: ${color.gray6};
        border-radius: 3px;
        font-size: 10px;
        transition: ${ease.easeOutBack(`0.16s`)};
        transition-delay: 0.08s;
        transform: perspective(80px) rotateX(-20deg) scaleY(0.95);
        transform-origin: top;
    }
`

const IconWrap = styled.div`
    position: absolute;
    top: 24px;
    right: 40px;
    display: flex;
`

const Iconui = props => (
    <Icon href={props.href} target='_blank' onClick={props.onclick}>
        <img src={props.iconsrc} alt={props.alt} />
        <span>
            {props.tips}
        </span>
    </Icon>
)




export default () => {
    const DarkMode = () => {
        console.log('dd')
    }


    return (
        <IconWrap>
            <Iconui onclick={DarkMode} iconsrc={darkMode} alt='dark mode' tips='Dark mode' />
            <Iconui href='https://dribbble.com/geetest' iconsrc={dribbble} alt='dribbble' tips='团队 Dribbble' />
            <Iconui href='https://geetest.design' iconsrc={gdesign} alt='gdesign' tips='极验用户体验设计中心' />
        </IconWrap>
    )
}

