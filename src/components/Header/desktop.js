import React from "react";
import { NavItem, DesktopList, ListItem } from "./styled";

const Desktop = () => (
    <DesktopList>
      <ListItem>
        <NavItem
          hoverColor="#d90754"
          to="/about"
          exact
          activeClassName="active"
        >
          About
        </NavItem>
      </ListItem>
      <ListItem>
        <NavItem hoverColor="#d90467" to="/work" activeClassName="active">
          Work
        </NavItem>
      </ListItem>
      <ListItem>
        <NavItem hoverColor="#f28322" to="/" activeClassName="active">
          Isabel Cortes
        </NavItem>
      </ListItem>
      <ListItem>
        <NavItem hoverColor="#f27127" to="/contact" activeClassName="active">
          Contact
        </NavItem>
      </ListItem>
      <ListItem>
        <NavItem hoverColor="#f2594b" to="/cv" activeClassName="active">
          CV
        </NavItem>
      </ListItem>
    </DesktopList>
);

export default Desktop;
