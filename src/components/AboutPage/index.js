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
          specialize in front-end development, where I create beautiful designs
          and take on challenging projects. I'm particularly interested in data
          visualizations and anything web interactive, with a huge focus on accessibility.
        </p>
        <p>
          I've contributed to the success of Okta (and previously Auth0) for the
          past four years, leading various projects and seamlessly adapting to
          different teams. In a previous life I worked at a data visualization
          agency (Stamen) and before that at a gov tech startup (Appallicious)
          where we worked hard to create applications aimed at post natural
          disaster recovery.
        </p>
        <p>
          Beyond the world of code, you'll find me indulging in my love for
          movies, conquering new heights through climbing and hiking adventures,
          hosting memorable dinner parties, cherishing moments with my little
          one, whipping up culinary delights, and exploring the world through
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
