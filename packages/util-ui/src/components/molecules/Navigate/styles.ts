import styled from "@emotion/styled";

export const Container = styled.button`
  display: flex;
  align-items: center;
  background-color: #fff;
  position: relative;
  cursor: pointer;
  font-size: 1.6rem;
  border-radius: 0.4rem;
  padding: 0.5rem 1rem;
  border: 0.2rem solid transparent;

  &:hover {
    transition: color 0.1s linear;
    color: #a18a68;
  }

  &:focus {
    border: 0.2rem solid #000;
  }

  svg {
    margin-right: 1rem;
  }
`;
