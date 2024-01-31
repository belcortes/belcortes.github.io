import React, { useState } from "react";
import {
  NavItem,
  MobileList,
  ListItem,
  SubMenu,
  BurgerIconWrapper,
  SubMenuItem,
  BurgerIcon,
} from "./styled";

const Desktop = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <MobileList isMenuOpen={isMenuOpen}>
      <ListItem isMenuOpen={isMenuOpen}>
        <NavItem hoverColor="#f28322" to="/" activeClassName="active">
          Isabel Cortes
        </NavItem>
      </ListItem>
      <ListItem isMenuOpen={isMenuOpen}>
        <NavItem>
          <BurgerIconWrapper onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <BurgerIcon isMenuOpen={isMenuOpen} />
          </BurgerIconWrapper>
        </NavItem>
      </ListItem>
      {isMenuOpen && (
        <SubMenu>
          <SubMenuItem href="/work">Work</SubMenuItem>
          <SubMenuItem href="/about">About</SubMenuItem>
          <SubMenuItem href="/cv">CV</SubMenuItem>
          <SubMenuItem href="/contact">Contact</SubMenuItem>
        </SubMenu>
      )}
    </MobileList>
  );
};

export default Desktop;
