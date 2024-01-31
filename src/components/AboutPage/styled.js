import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 42px;
`;

export const Text = styled.div`
  padding: 24px;
  border: 2px solid black;
  border-radius: 16px;
  max-width: 100%;
  color: black;

  @media (min-width: 900px) {
    /* Styles for screens with a minimum width of 768px */
    max-width: 600px;
  }
`;

export const MiddleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 32px;

  //   @media (min-width: 768px) {
  //     /* Styles for screens with a minimum width of 768px */
  //     flex-direction: column;
  //   }

  @media (min-width: 600px) {
    flex-direction: row;
    /* Styles for screens with a minimum width of 1024px */
  }
`;

export const ImgWrapper = styled.div`
  max-width: 400px;
  display: none;
  gap: 24px;
  flex-direction: column;

  @media (min-width: 900px) {
    /* Styles for screens with a minimum width of 768px */
    display: flex;
  }
`;

export const ImgWrapper2 = styled(ImgWrapper)`
  display: none;

  @media (min-width: 1400px) {
    /* Styles for screens with a minimum width of 768px */
    display: flex;
  }
`;

export const Img = styled.img`
  border-radius: 16px;
  width: 100%;
  height: fit-content;
  filter: grayscale(100%);

  &:hover {
    filter: grayscale(0);
  }
`;
