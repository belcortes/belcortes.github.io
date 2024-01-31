import React from "react";
import Footer from "../Footer";
import AnimatedCircle from "./AnimatedCircle";
import * as S from "./styled";

const Homepage = () => (
  <S.Wrapper>
    <S.Main>
      <S.Box1></S.Box1>
      <S.Box2></S.Box2>
      <S.Box3 to="/cv">CV</S.Box3>
      <S.Box4></S.Box4>
      <S.Box5 to="/about">About</S.Box5>
      <S.Box6>Isabel Cortes</S.Box6>
      <S.Box7 to="/work">Work</S.Box7>
      <S.Box8></S.Box8>
      <S.Box9 to="/contact">Contact</S.Box9>
      <S.Box10></S.Box10>
      <S.Box11></S.Box11>
      {/* <AnimatedCircle /> */}
    </S.Main>
    <Footer />
  </S.Wrapper>
);

export default Homepage;
