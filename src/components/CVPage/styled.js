import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

export const PageTitle = styled.h1`
  margin: 80px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 900px) {
    margin: 40px 0;
  }
`;

export const Svg = styled.svg`
  width: 24px;

  &:hover {
    path {
      fill: #f2594b;
    }
  }
`;

export const Table = styled.table`
  width: 100%;
  margin-bottom: 32px;
  border-radius: 16px;
  border-spacing: 0;
  border: 2px solid black;

  &:last-of-type {
    margin-bottom: 0;
  }

  @media (max-width: 600px) {
    max-width: fit-content;
    overflow-x: scroll;
    display: block;
  }
`;

export const Caption = styled.caption`
  text-align: left;
  font-size: 24px;
  margin-bottom: 10px;

  @media (max-width: 900px) {
    padding: 16px 0 0 16px;
  }
`;

const getColorForIndex = (index) => {
  const colors = ["#d90754", "#d90467", "#f28322", "#f27127", "#f2594b"];
  return colors[index % colors.length];
};

export const Row = styled.tr`
  &:hover {
    &:nth-child(5n + 1) {
      background-color: ${() => getColorForIndex(0)};
      color: #e9f1df;
    }

    &:nth-child(5n + 2) {
      background-color: ${() => getColorForIndex(1)};
      color: #e9f1df;
    }

    &:nth-child(5n + 3) {
      background-color: ${() => getColorForIndex(2)};
      color: #e9f1df;
    }

    &:nth-child(5n + 4) {
      background-color: ${() => getColorForIndex(3)};
      color: #e9f1df;
    }

    &:nth-child(5n + 5) {
      background-color: ${() => getColorForIndex(4)};
      color: #e9f1df;
    }

    &:first-of-type {
      td:first-of-type {
        border-radius: 14px 0 0 0;
      }
      td:last-of-type {
        border-radius: 0 14px 0 0;
      }
    }

    &:last-of-type {
      td:first-of-type {
        border-radius: 0 0 0 14px;
      }
      td:last-of-type {
        border-radius: 0 0 14px 0;
      }
    }

    @media (max-width: 600px) {
      &:first-of-type {
        td:first-of-type {
          border-radius: 0;
        }
        td:last-of-type {
          border-radius: 0;
        }
      }
    }
  }
`;

export const Cell = styled.td`
  padding: 16px;
  width: 33.33%;
`;

export const TableBody = styled.tbody`
  @media (max-width: 900px) {
    /* Styles for screens with a minimum width of 768px */
    // max-width: 600px;
    // width: 100%;
    // overflowX: scroll;
  }
`;

export const Scale = styled.div`
  display: flex;
`;

export const ScaleDiv = styled.div`
  flex: 1;
  width: 20px;
  height: 20px;
  margin: 1px;
  border: 1px solid black;
  background-color: ${({ index, rating }) =>
    index < rating ? "black" : "transparent"};

  ${Row}:hover & {
    border: 1px solid #e9f1df;
    background-color: ${({ index, rating }) =>
      index < rating ? "#e9f1df" : "inherit"};
  }
`;
