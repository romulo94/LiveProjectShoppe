import styled from "@emotion/styled";

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem 1.6rem;
  height: calc(100vh - 9.4rem);
  position: absolute;
  background-color: #fff;
  z-index: 100;

  button {
    text-align: left;
    padding: 1.2rem 0;
  }

  @media only screen and (min-width: 1024px) {
    display: none;
  }
`;

export const WrapperSeparator = styled.div`
  display: flex;
  align-items: center;
  height: 5rem;
`;
