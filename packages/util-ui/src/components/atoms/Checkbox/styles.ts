import styled from "@emotion/styled";

export const Container = styled.span`
  display: flex;
  width: 100%;

  .MuiSvgIcon-root {
    font-size: 2rem;
  }

  input {
    &:checked + svg {
      color: #000;
    }
  }

  .MuiTypography-root {
    font-size: 1.6rem;
  }
`;
