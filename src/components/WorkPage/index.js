import React from "react";
import * as S from "./styled";
import auth0 from "./images/auth0.png";
import oktane from "./images/oktane.png";
import moodify from "./images/moodify.png";
import stamen from "./images/stamen.png";
import swimdo from "./images/swimdo.png";
import okta from "./images/okta.png";
import herexyz from "./images/herexyz.png";
import mdrc1 from "./images/mdrc1.png";
import sfkids from "./images/sfkids.png";

const WorkPage = () => (
  <div>
    <S.PageTitle>Some things I've worked on</S.PageTitle>
    <S.BoxContainer>
      <S.Box>
        <S.Title>auth0.com</S.Title>
        <S.Img src={auth0} />
      </S.Box>
      <S.Box>
        <S.Title>okta.com</S.Title>
        <S.Img src={okta} />
      </S.Box>
      <S.Box>
        <S.Title>Oktane</S.Title>
        <S.Img src={oktane} />
      </S.Box>
      <S.Box>
        <S.Title>stamen.com</S.Title>
        <S.Img src={stamen} />
      </S.Box>
      <S.Box>
        <S.Title>swimdo.org</S.Title>
        <S.Img src={swimdo} />
      </S.Box>
      <S.Box>
        <S.Title>Here XYZ</S.Title>
        <S.Img src={herexyz} />
      </S.Box>
      <S.Box>
        <S.Title>Moodify</S.Title>
        <S.Img src={moodify} />
      </S.Box>
      <S.Box>
        <S.Title>MDRC</S.Title>
        <S.Img src={mdrc1} />
      </S.Box>
      <S.Box>
        <S.Title>SF Kids</S.Title>
        <S.Img src={sfkids} />
      </S.Box>
    </S.BoxContainer>
  </div>
);

export default WorkPage;
