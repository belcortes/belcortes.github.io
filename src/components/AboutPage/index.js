import React from "react";
import Header from "../Header";
import * as S from "./styled";
import venice from "./images/bel-venice.jpg";
import flowers from "./images/bel-flowers.jpg";
import kayak from "./images/bel_kayak.jpg";

const AboutPage = () => (
  <S.Wrapper>
    <S.MiddleDiv>
      <S.ImgWrapper><S.Img src={venice} /></S.ImgWrapper>
      <S.Text>
        <h1>I'm Isabel Cortes</h1>
        <h3>UI Engineer</h3>
        <p>
          I'm a software engineer based in San Francisco since 2014. With a
          passion for crafting elegant and functional user interfaces, I
          specialize in front-end and UI development. I'm particularly interested in data
          visualizations and anything web interactive, with a huge focus on accessibility.
        </p>
        <p>
          I've contributed to the success of Okta (and previously Auth0) for the
          past four and a half years, leading various projects and adapting to
          different teams. My day to day consisted on working closely with designers and marketers to create pixel perfect components and pages.
          In a previous life I worked at a data visualization
          agency (Stamen) and before that at a gov tech startup (Appallicious)
          where we worked hard to create applications aimed at post natural
          disaster recovery.
        </p>
        <p>
          Beyond the world of code, you'll find me indulging in my love for
          movies, going on climbing and hiking adventures,
          hosting dinner parties, cherishing moments with my little
          one, cooking something new, and exploring the world through
          travel.
        </p>
      </S.Text>
      <S.ImgWrapper2>
        <S.Img src={flowers} />
        <S.Img src={kayak} />
      </S.ImgWrapper2>
    </S.MiddleDiv>
  </S.Wrapper>
);

export default AboutPage;
