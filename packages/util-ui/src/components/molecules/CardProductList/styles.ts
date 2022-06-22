import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  row-gap: 1.6rem;

  @media only screen and (min-width: 1024px) {
    row-gap: 3.9rem;
  }
`;

export const WrapperProducts = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(27rem, 1fr));
  width: 100%;
  gap: 2.4rem;

  @media only screen and (min-width: 1024px) {
    row-gap: 8.6rem;
    column-gap: 5.7rem;
  }
`;

export const WrapperHeaderSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

export const ViewAll = styled.p`
  color: #a18a68;
  cursor: pointer;
  font-size: 1.6rem;
  padding: 0.3rem 1rem;
  border-radius: 0.4rem;
  border: 0.2rem solid transparent;

  &:focus {
    border: 0.2rem solid #000;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 2rem;
  }
`;
