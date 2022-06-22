import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  width: 100%;
  border-radius: 1.6rem;
  min-height: 30rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    min-height: 30rem;
    object-fit: cover;
    object-position: right center;
  }

  @media only screen and (min-width: 1024px) {
    min-height: auto;
  }
`;
