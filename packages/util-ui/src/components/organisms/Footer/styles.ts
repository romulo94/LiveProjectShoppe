import styled from "@emotion/styled";

export const Container = styled.footer`
  background-color: #fff;
  display: flex;
  width: 100%;
  padding: 1.6rem 1.6rem 2.4rem 1.6rem;

  @media only screen and (min-width: 1024px) {
    padding: 4.8rem 4.8rem 7rem 4.8rem;
  }
`;

export const Content = styled.div`
  display: flex;
  max-width: 124.8rem;
  margin: 0 auto;
  width: 100%;
  border-top: 0.1rem solid #d8d8d8;
  padding-top: 4rem;
  padding-bottom: 3rem;
  flex-direction: column;
  row-gap: 3.2rem;

  @media only screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3.2rem;
  width: auto;
  flex: 1 1 auto;
  justify-content: space-between;

  @media only screen and (min-width: 1024px) {
    row-gap: 5rem;
  }
`;

export const WrapperLink = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 0;
  column-gap: 4rem;

  @media only screen and (min-width: 1024px) {
    row-gap: 4rem;
  }

  button {
    color: #707070;
    padding-left: 0;
    padding-right: 0;
  }
`;

export const Paragraph = styled.p`
  a {
    color: #707070;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const WrapperSocialLinks = styled.div`
  display: flex;
  column-gap: 3.2rem;
  width: 100%;
  justify-content: left;

  button {
    width: 3.2rem;
    height: 3.2rem;

    img {
      transition: 0.2s linear;
    }

    &:hover {
      img {
        filter: brightness(0);
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    justify-content: right;
  }
`;

export const WrapperNewsletter = styled.div`
  display: flex;
  width: 100%;
  justify-content: left;

  @media only screen and (min-width: 1024px) {
    justify-content: right;
  }

  div {
    max-width: 39.6rem;
  }
`;
