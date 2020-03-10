import React from "react"
import styled, { css } from "styled-components"
import { Search } from "@styled-icons/fa-solid/Search"
import { Algolia } from "@styled-icons/fa-brands/Algolia"

export const Root = styled.div`
  position: relative;
  display: grid;
  grid-gap: 1em;
`

export const SearchIcon = styled(Search)`
  width: 18px;
  pointer-events: none;
`

const focus = css`
  border-color: var(--gray5);
  background: white;
  color: ${props => props.theme.darkBlue};
  cursor: text;
  width: 200px;
  + ${SearchIcon} {
    color: var(--gray4);
    margin: 0.2em;
  }
`

const collapse = css`
  width: 0;
  border-color: transparent;
  cursor: pointer;
  color: ${props => props.theme.lightBlue};
  + ${SearchIcon} {
    color: var(--gray4);
    position: relative;
    left: 2px;
  }
  ${props => props.focus && focus}
  margin-left: ${props => (props.focus ? `-11.6em` : `-1em`)};
  padding-left: ${props => (props.focus ? `1.6em` : `1em`)};
  ::placeholder {
    color: ${props => props.theme.gray};
  }
`

const expand = css`
  background: ${props => props.theme.veryLightGray};
  width: 6em;
  margin-left: -1.6em;
  padding-left: 1.6em;
  + ${SearchIcon} {
    margin: 0.3em;
  }
`

export const Input = styled.input`
  height: 36px;
  border-radius: 36px;
  outline: none;
  border: 2px solid #333;
  font-size: 1em;
  background: transparent;
  transition: all 0.12s ease;
  border-radius: ${props => props.theme.smallBorderRadius};
  /* {highlight-next-line}; */
  ${props => (props.collapse ? collapse : expand)}
`

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 36px;
  background: var(--gray3);
`

export const HitsWrapper = styled.div`
  box-shadow: 0px 2px 4px #CCD0D9;
  border-radius: 3px;
  display: ${props => (props.show ? `grid` : `none`)};
  max-height: 80vh;
  overflow: scroll;
  z-index: 2;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  right: 0;
  top: calc(100% + 0.5em);
  width: 80vw;
  max-width: 30em;
  padding: 0.7em 1em 0.4em;
  background: white;
  border-radius: ${props => props.theme.smallBorderRadius};
  > * + * {
    padding-top: 1em !important;
    border-top: 2px solid ${props => props.theme.darkGray};
  }
  li + li {
    margin-top: 0.7em;
    padding-top: 0.7em;
    border-top: 1px solid ${props => props.theme.lightGray};
  }
  * {
    margin-top: 0;
    padding: 0;
  }
  ul {
    list-style: none;
  }
  mark {
    color: ${props => props.theme.lightBlue};
    background: #59dac1;
  }
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.3em;
    h3 {
      color: white;
      background: ${props => props.theme.gray};
      padding: 0.1em 0.4em;
      border-radius: ${props => props.theme.smallBorderRadius};
    }
  }
  h3 {
    margin: 0 0 0.5em;
  }
  h4 {
    margin-bottom: 0.3em;
  }
`

export const PoweredBy = () => (
  <span css="font-size: 0.6em; text-align: end; padding: 0;">
    Powered by{` `}
    <a href="https://algolia.com">
      <Algolia size="1em" /> Algolia
    </a>
  </span>
)