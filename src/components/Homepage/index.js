import React, { useState } from "react";
import Footer from "../Footer";
import AnimatedCircle from "./AnimatedCircle";
import * as S from "./styled";

const colors = ["red", "blue", "green", "yellow", "orange", "purple"]; 

const Homepage = () => {
//     const [boxColors, setBoxColors] = useState(colors);

//   const handleClick = (index) => {
//     // Get a random color from the array, excluding the current color of the clicked box
//     const newColor = colors.filter((color) => color !== boxColors[index]);
//     const randomColor = newColor[Math.floor(Math.random() * newColor.length)];

//     // Update the color of the clicked box
//     setBoxColors((prevColors) => {
//       const updatedColors = [...prevColors];
//       updatedColors[index] = randomColor;
//       return updatedColors;
//     });
//   };
//   console.log(boxColors[5])
  return (
    <S.Wrapper>
      <S.Main>
        <S.Box1 id="box-1"></S.Box1>
        <S.Box2 id="box-2" ></S.Box2>
        <S.Box3 id="box-3" to="/cv">CV</S.Box3>
        <S.Box4 id="box-4" ></S.Box4>
        <S.Box5 id="box-5"to="/about">About</S.Box5>
        <S.Box6>Isabel Cortes</S.Box6>
        <S.Box7 id="box-7" to="/work">Work</S.Box7>
        <S.Box8 id="box-8" ></S.Box8>
        <S.Box9 id="box-9" to="/contact">Contact</S.Box9>
        <S.Box10 id="box-10" ></S.Box10>
        <S.Box11 id="box-11" ></S.Box11>
        {/* <AnimatedCircle /> */}
      </S.Main>
      <Footer />
    </S.Wrapper>
  );
};

export default Homepage;
