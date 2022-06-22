import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 50rem;
  margin: 0 auto;
  row-gap: 2.4rem;

  @media only screen and (min-width: 1024px) {
    row-gap: 6.4rem;
  }
`;
