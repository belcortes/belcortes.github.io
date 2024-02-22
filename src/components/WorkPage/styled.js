import styled from "styled-components";

export const PageTitle = styled.h1`
  margin: 50px 0;

  @media (min-width: 500px) {
    margin: 80px 0;
  }
`;

export const BoxContainer = styled.div`
  display: grid;
  gap: 50px;
  grid-template-columns: 1fr;

  @media (min-width: 500px) {
    gap: 50px;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 850px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 50px 100px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  filter: grayscale(1);
  object-fit: cover;
  max-height: 260px;
`;

export const Video = styled.video`
  width: 100%;
  filter: grayscale(1);
`;

export const Title = styled.h2`
  bottom: 0;
  background: #e9f1df;
  padding: 8px 20px;
  margin: 0;
  font-weight: 300;
  color: black;
`;

const getColorForIndex = (index) => {
  const colors = ["#d90754", "#d90467", "#f28322", "#f27127", "#f2594b"];
  return colors[index % colors.length];
};

export const Box = styled.div`
  border-radius: 16px;
  border: 2px solid black;
  height: 282px;
  overflow: hidden;

  &:hover {
    ${Img} {
      filter: grayscale(0);
    }

    &:nth-of-type(5n + 1) {
      ${Title} {
        background: ${() => getColorForIndex(1)};
        color: #e9f1df;
      }
    }

    &:nth-of-type(5n + 2) {
      ${Title} {
        background: ${() => getColorForIndex(2)};
        color: #e9f1df;
      }
    }

    &:nth-of-type(5n + 3) {
      ${Title} {
        background: ${() => getColorForIndex(3)};
        color: #e9f1df;
      }
    }

    &:nth-of-type(5n + 4) {
      ${Title} {
        background: ${() => getColorForIndex(4)};
        color: #e9f1df;
      }
    }

    &:nth-of-type(5n + 5) {
      ${Title} {
        background: ${() => getColorForIndex(5)};
        color: #e9f1df;
      }
    }
  }
`;

export const List = styled.ul`
  position: absolute;
  bottom: 0;
  list-style-type: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  padding: 5px 10px;
  background: #ff4d6f;
  border-radius: 5px;
`;
