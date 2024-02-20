import React from "react";
import * as S from "./styled";

const scale = (rating) => (
  <S.Scale rating={rating}>
    {[...Array(5)].map((_, index) => (
      <S.ScaleDiv key={index} index={index} rating={rating} />
    ))}
  </S.Scale>
);

const CVPage = () => (
  <S.Wrapper>
    <S.PageTitle>
      <span>CV</span>
      <a href="https://drive.google.com/file/d/1CPcVA9Z5KgtfzpkEE0h3UtDdzlZVfman/view?usp=sharing" target="__blank">
        <S.Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM216 232V334.1l31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31V232c0-13.3 10.7-24 24-24s24 10.7 24 24z" />
        </S.Svg>
      </a>
    </S.PageTitle>
    <S.Table>
      <S.Caption>Work Experience</S.Caption>

      <S.TableBody>
        <S.Row>
          <S.Cell>2021 - Present</S.Cell>
          <S.Cell>Okta - Senior UI Engineer</S.Cell>
          <S.Cell>San Francisco, CA</S.Cell>
        </S.Row>
        <S.Row>
          <S.Cell>2019 - 2021</S.Cell>
          <S.Cell>Auth0(Okta) - UI Engineer</S.Cell>
          <S.Cell>San Francisco, CA</S.Cell>
        </S.Row>
        <S.Row>
          <S.Cell>2018 - 2019</S.Cell>
          <S.Cell>Stamen - Web developer</S.Cell>
          <S.Cell>San Francisco, CA</S.Cell>
        </S.Row>
        <S.Row>
          <S.Cell>2014 - 2018</S.Cell>
          <S.Cell>Appallicous - Software Engineer</S.Cell>
          <S.Cell>San Francisco, CA</S.Cell>
        </S.Row>
        <S.Row>
          <S.Cell>2013 - 2014</S.Cell>
          <S.Cell>Incube - Junior Developer</S.Cell>
          <S.Cell>Sao Paulo, Brazil</S.Cell>
        </S.Row>
      </S.TableBody>
    </S.Table>

    <S.Table>
      <S.Caption>Skills</S.Caption>

      <S.TableBody>
        <S.Row>
          <S.Cell>Languages</S.Cell>
          <S.Cell>Javascript</S.Cell>
          <S.Cell>{scale(5)}</S.Cell>
        </S.Row>

        <S.Row>
          <S.Cell></S.Cell>
          <S.Cell>HTML/CSS</S.Cell>
          <S.Cell>{scale(5)}</S.Cell>
        </S.Row>

        <S.Row>
          <S.Cell>Tools/Frameworks</S.Cell>
          <S.Cell>React</S.Cell>
          <S.Cell>{scale(5)}</S.Cell>
        </S.Row>

        <S.Row>
          <S.Cell></S.Cell>
          <S.Cell>Next.js</S.Cell>
          <S.Cell>{scale(4)}</S.Cell>
        </S.Row>

        <S.Row>
          <S.Cell></S.Cell>
          <S.Cell>d3.js</S.Cell>
          <S.Cell>{scale(4)}</S.Cell>
        </S.Row>

        <S.Row>
          <S.Cell></S.Cell>
          <S.Cell>Node</S.Cell>
          <S.Cell>{scale(5)}</S.Cell>
        </S.Row>

        <S.Row>
          <S.Cell></S.Cell>
          <S.Cell>Contentful</S.Cell>
          <S.Cell>{scale(5)}</S.Cell>
        </S.Row>

        <S.Row>
          <S.Cell></S.Cell>
          <S.Cell>Drupal</S.Cell>
          <S.Cell>{scale(3)}</S.Cell>
        </S.Row>

        <S.Row>
          <S.Cell></S.Cell>
          <S.Cell>Heroku</S.Cell>
          <S.Cell>{scale(5)}</S.Cell>
        </S.Row>

        <S.Row>
          <S.Cell></S.Cell>
          <S.Cell>Netlify</S.Cell>
          <S.Cell>{scale(4)}</S.Cell>
        </S.Row>

        <S.Row>
          <S.Cell></S.Cell>
          <S.Cell>Figma</S.Cell>
          <S.Cell>{scale(3)}</S.Cell>
        </S.Row>
      </S.TableBody>
    </S.Table>

    <S.Table>
      <S.Caption>Education</S.Caption>

      <S.TableBody>
        <S.Row>
          <S.Cell>March 2018 - April 2018</S.Cell>
          <S.Cell>
            General Assembly - Software Engineer Career Accelerator
          </S.Cell>
          <S.Cell>San Francisco, CA</S.Cell>
        </S.Row>
        <S.Row>
          <S.Cell>May 2013 - August 2013</S.Cell>
          <S.Cell>General Assembly - Web development immersive</S.Cell>
          <S.Cell>New York, NY</S.Cell>
        </S.Row>
        <S.Row>
          <S.Cell>August 2008 - May 2012</S.Cell>
          <S.Cell>Fordham University - BA in Mathematics</S.Cell>
          <S.Cell>New York, NY</S.Cell>
        </S.Row>
      </S.TableBody>
    </S.Table>
  </S.Wrapper>
);

export default CVPage;
