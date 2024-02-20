import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  top: 0;
  padding: 0 30px;
  position: sticky;
  z-index: 10;
`;

export const MobileList = styled.ul`
    display: flex;
    padding: 0;
    margin: 0;
    justify-content: center;
    width: 100%;
    position: relative;
    // height: ${({isMenuOpen}) => isMenuOpen ? 'calc(100vh - 30px)' : '100%'};
    background: #e9f1df;

    @media (min-width: 850px) {
        display: none;
    }
`

export const BurgerIcon = styled.span`
    width: 20px;
    display: flex;
    height: 2px;
    background: black;
    border-radius: 2px;
    transition: all 0.2s ease-in-out;
    margin-top: 12px;

    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 20px;
      height: 2px;
      background: black;
      border-radius: 2px;
      transition: all 0.2s ease-in-out;
    }

    &::before {
      transform: translateY(-7px);
    }

    &::after {
      transform: translateY(7px);
    }

    ${({ isMenuOpen }) =>
    isMenuOpen &&
    css`
      transform: translateX(-16px);
      background: transparent;
      box-shadow: none;

      &::before {
        transform: rotate(45deg) translate(12px, -12px);
      }
  
      &::after {
        transform: rotate(-45deg) translate(12px, 12px);
      }
    `}
`;

export const BurgerIconWrapper = styled.button`
    appearance: none;
    border: 0;
    background: transparent;
    height: 24px;
    margin: 0;
    padding: 0;
    position: relative;
    display: flex;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
`

export const SubMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    position: absolute;
    top: 52px;
    row-gap: 30px;
    width: calc(100% - 4px);
    margin: 0 20px;
    border: 2px solid black;
    padding: 20px 0;
    border-radius: 0 0 16px 16px;
    border-top: 0;
    background: #E9F1DF;

    @media (min-width: 600px) {
        top: 82px;
    }

`

export const SubMenuItem = styled.a`
    margin: 0 16px;
    // border: 2px solid black;
    border-radius: 16px;
    padding: 20px;
    text-align: center;
    text-decoration: none;
    color: white;

    &:nth-of-type(1) {
      background: #d90467;
    }
    &:nth-of-type(2) {
      background: #f28322;
    }
    &:nth-of-type(3) {
      background: #f27127;
    }
    &:nth-of-type(4) {
      background: #f2594b;
    }

    @media (min-width: 600px) {
      margin: 0 20px;
  }
`

export const DesktopList = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  width: 100%;
  display: none;

  @media (min-width: 850px) {
    display: flex;
  }
`;

export const ListItem = styled.li`
  flex: 1;
  border: 2px solid black;
  overflow: hidden;
  border-right: none;
  display: flex;
  align-items: center;

  &:first-of-type {
    // border-bottom-left-radius: 16px;
    border-bottom-left-radius: ${({ isMenuOpen }) => isMenuOpen ? 0 : '16px'};
    border-bottom: ${({ isMenuOpen }) => isMenuOpen ? 'none' : '2px solid black'};
  }

  &:last-of-type {
    // border-bottom-right-radius: 16px;
    border-bottom-right-radius: ${({ isMenuOpen }) => isMenuOpen ? 0 : '16px'};
    border-right: 2px solid black;
  }
`;

export const NavItem = styled(NavLink)`
  width: 100%;
  height: 50px;
  font-family: "Jost", sans-serif;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  text-decoration: none;
  box-sizing: border-box;
  background: #e9f1df;

  &.active,
  &:hover {
    background-color: ${(props) => props.hoverColor || "transparent"};
    color: #e9f1df;
    border: none;
  }

  &.active {
    cursor: default;
  }

  @media (min-width: 600px) {
    height: 80px;
  }
`;
