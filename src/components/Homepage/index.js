import React, { useState } from "react";
import Footer from "../Footer";
import AnimatedCircle from "./AnimatedCircle";
import * as S from "./styled";

const Homepage = () => {
    const [colors, setColors] = useState(['#d90754', '#d90467', '#f28322', '#4ad9d9', '#f2594b', "#f27127", "#ff8000", "#ff4d6f", "#ffbf00", "#36b1bf"]);
  
    const colorChange = (index) => {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * colors.length);
      } while (randomIndex === index);
      
      const newColors = [...colors];
      
      const temp = newColors[index];
      newColors[index] = newColors[randomIndex];
      newColors[randomIndex] = temp;
      
      setColors(newColors);
    };

  return (
    <S.Wrapper>
      <S.Main>
        <S.Box1 id="box-1" onClick={() => colorChange(0)} style={{background: colors[0]}}></S.Box1>
      <S.Box2 id="box-2" onClick={() => colorChange(1)} style={{background: colors[1]}}></S.Box2>
      <S.Box3 id="box-3" to="/cv" style={{background: colors[2]}}>CV</S.Box3>
      <S.Box4 id="box-4" onClick={() => colorChange(3)} style={{background: colors[3]}}></S.Box4>
      <S.Box5 id="box-5" to="/about" style={{background: colors[4]}}>About</S.Box5>
      <S.Box6>Isabel Cortes</S.Box6>
      <S.Box7 id="box-7" to="/work" style={{background: colors[5]}}>Work</S.Box7>
      <S.Box8 id="box-8" onClick={() => colorChange(7)} style={{background: colors[6]}}></S.Box8>
      <S.Box9 id="box-9" to="/contact" style={{background: colors[7]}}>Contact</S.Box9>
      <S.Box10 id="box-10" onClick={() => colorChange(8)} style={{background: colors[8]}}></S.Box10>
      <S.Box11 id="box-11" onClick={() => colorChange(9)} style={{background: colors[9]}}></S.Box11>
        {/* <AnimatedCircle /> */}
      </S.Main>
      <Footer />
    </S.Wrapper>
  );
};

export default Homepage;
