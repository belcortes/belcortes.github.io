import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: row;
  // width: 100%;
  margin-top: auto;
  padding: 0 30px;
  position: absolute;
  bottom: 0;
  height: 30px;
  align-items: center;
  font-size: 10px;
  position: sticky;
  background: #e9f1df;
  //   color: white;
  margin-top: -30px;
  justify-content: space-between;
`;

export const List = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style-type: none;
  gap: 16px;
  position: relative;
`;

export const ListItem = styled.li`
  text-decoration: underline;
  font-weight: bold;

  &:nth-of-type(1) {
    a {
      color: #d90754;
    }
  }

  &:nth-of-type(2) {
    a {
      color: #f2594b;
    }
  }
`;

export const Svg = styled.svg`
  width: 20px;
  height: 20px;

  &:hover {
    path {
      fill: #36b1bf;
    }
  }
`;

export const Link = styled.a`
  display: inline-block;
`;
