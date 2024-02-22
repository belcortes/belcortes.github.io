import React, { useRef } from "react";
import * as S from "./styled";
import auth0 from "./videos/auth0.webm";
import oktane from "./videos/oktane.webm";
import moodify from "./images/moodify.png";
import stamen from "./videos/stamen.webm";
import swimdo from "./images/swimdo.png";
import okta from "./videos/o-homepage.webm";
import herexyz from "./images/herexyz.png";
import mdrc1 from "./images/mdrc1.png";
import ciam from "./videos/ciam-reco.webm";
import devdays from "./videos/devdays.webm";
import mdrc from "./videos/mdrc.webm";

const WorkPage = () => {
  const videoRefs = useRef({});

  const handleHover = (index) => () => {
    const videoRef = videoRefs.current[index];
    if (videoRef) {
      videoRef.style.filter = 'grayscale(0)'
      videoRef.play();
    }
  };

  const handleMouseLeave = (index) => {
    const videoRef = videoRefs.current[index];
    if (videoRef) {
      videoRef.style.filter = 'grayscale(1)'
      videoRef.pause();
    }
  };

  return (
    <div>
      <S.PageTitle>Some things I've worked on</S.PageTitle>
      <S.BoxContainer>
        <S.Box onMouseEnter={handleHover(0)} onMouseLeave={() => handleMouseLeave(0)}>
          <S.Title>auth0.com</S.Title>
          <S.Video controls={false} loop muted ref={(el) => (videoRefs.current[0] = el)}>
            <source src={auth0} type="video/webm" />
            <source src="./images/ciam-reco.mov" type="video/mp4" />
          </S.Video>
        </S.Box>
        <S.Box onMouseEnter={handleHover(1)} onMouseLeave={() => handleMouseLeave(1)}>
          <S.Title>okta.com</S.Title>
          <S.Video controls={false} loop muted ref={(el) => (videoRefs.current[1] = el)}>
            <source src={okta} type="video/webm" />
            <source src="./images/ciam-reco.mov" type="video/mp4" />
          </S.Video>
        </S.Box>
        <S.Box onMouseEnter={handleHover(2)} onMouseLeave={() => handleMouseLeave(2)} >
          <S.Title>CIAM.io</S.Title>
          <S.Video controls={false} loop muted ref={(el) => (videoRefs.current[2] = el)}>
            <source src={ciam} type="video/webm" />
            <source src="./images/ciam-reco.mov" type="video/mp4" />
          </S.Video>
        </S.Box>
        <S.Box onMouseEnter={handleHover(3)} onMouseLeave={() => handleMouseLeave(3)} >
          <S.Title>developerday.com</S.Title>
          <S.Video controls={false} loop muted ref={(el) => (videoRefs.current[3] = el)}>
            <source src={devdays} type="video/webm" />
            <source src="./images/ciam-reco.mov" type="video/mp4" />
          </S.Video>
        </S.Box>
        <S.Box onMouseEnter={handleHover(4)} onMouseLeave={() => handleMouseLeave(4)} >
          <S.Title>Oktane (okta.com/oktane)</S.Title>
          <S.Video controls={false} loop muted ref={(el) => (videoRefs.current[4] = el)}>
            <source src={oktane} type="video/webm" />
            <source src="./images/ciam-reco.mov" type="video/mp4" />
          </S.Video>
        </S.Box>
        <S.Box onMouseEnter={handleHover(5)} onMouseLeave={() => handleMouseLeave(5)} >
          <S.Title>stamen.com</S.Title>
          <S.Video controls={false} loop muted ref={(el) => (videoRefs.current[5] = el)}>
            <source src={stamen} type="video/webm" />
            <source src="./images/ciam-reco.mov" type="video/mp4" />
          </S.Video>
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
        <S.Box onMouseEnter={handleHover(6)} onMouseLeave={() => handleMouseLeave(6)} >
          <S.Title>MDRC Chicago Community Networks</S.Title>
          <S.Video controls={false} loop muted ref={(el) => (videoRefs.current[6] = el)}>
            <source src={mdrc} type="video/webm" />
            <source src="./images/ciam-reco.mov" type="video/mp4" />
          </S.Video>
        </S.Box>
      </S.BoxContainer>
    </div>
  );
};

export default WorkPage;
