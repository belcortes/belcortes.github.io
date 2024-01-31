import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.main`
  background: #e9f1df;
`;

export const Main = styled.div`
  gap: 10px;
  padding: 30px;
  height: calc(100vh - 60px);
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: 1fr;
  // background: #E9F1DF;

  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
  }
`;

const Box = styled.div`
  color: #E9F1DF;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: auto / span 3;
  font-size: 32px;
  text-decoration: none;
  border-radius: 16px;
`;

const LinkBox = styled(Link)`
  color: #E9F1DF;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  text-decoration: none;
  flex: 1;
  border-radius: 16px;

  &:hover {
    background: none;
    border: 2px solid black;
    color: black;
  }
`;

export const Box1 = styled(Box)`
  background-color: #d90754;

  @media (max-width: 992px) {
    display: none;
  }
`;
export const Box2 = styled(Box)`
  background-color: #d90467;

  @media (max-width: 992px) {
    display: none;
  }
`;
export const Box3 = styled(LinkBox)`
  background-color: #f28322;
  grid-column: auto / span 3;
`;
export const Box4 = styled(Box)`
background-color: #4ad9d9;
  @media (max-width: 992px) {
    display: none;
  }
`;
export const Box5 = styled(LinkBox)`
  background-color: #f2594b;
  grid-column: auto / span 4;
`;
export const Box6 = styled(Box)`
  background-color: #e9f1df;
//   font-family: "Bungee Shade", serif;
  font-size: 42px;
  grid-column: auto / span 4;
  /* text-shadow: 0 0 3px #FF0000, 0 0 5px #0000FF; */
  flex: 1;
  color: #333333;
`;
export const Box7 = styled(LinkBox)`
  
  background-color: #f27127;
  grid-column: auto / span 4;
`;
export const Box8 = styled(Box)`
  background-color: #ff8000;

  @media (max-width: 992px) {
    display: none;
  }
`;
export const Box9 = styled(LinkBox)`
  background-color: #ff4d6f;
//   color: #333333;
  grid-column: auto / span 3;
`;
export const Box10 = styled(Box)`
  background-color: #ffbf00;
  color: #ffffff;

  @media (max-width: 992px) {
    display: none;
  }
`;
export const Box11 = styled(Box)`
  background-color: #36b1bf;
  color: #cccccc;

  @media (max-width: 992px) {
    display: none;
  }
`;
