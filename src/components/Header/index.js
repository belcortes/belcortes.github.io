import React from "react";
import { Nav, NavItem, List, ListItem } from "./styled";
import Desktop from './desktop';
import Mobile from './mobile';

const Header = () => (
  <Nav>
	<Desktop />
	<Mobile />
  </Nav>
);

export default Header;
