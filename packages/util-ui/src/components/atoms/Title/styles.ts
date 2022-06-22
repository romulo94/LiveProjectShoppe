import styled from "@emotion/styled";

export const Content = styled.h1<{ center?: boolean }>`
  font-weight: 500;
  text-align: ${({ center }) => (center ? "center" : "left")};
`;
