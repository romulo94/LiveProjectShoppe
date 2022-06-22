import styled from "@emotion/styled";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 124.8rem;
  row-gap: 1.6rem;

  @media only screen and (min-width: 1024px) {
    row-gap: 6.4rem;
  }
`;
