import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { IconProps } from "./types";

export const Wrapper = styled.span<IconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.2rem solid transparent;
  background-color: #fff;
  border-radius: 0.4rem;
  padding: 0.2rem;
  cursor: pointer;
  min-height: 2.5rem;
  min-width: 2.5rem;

  &:focus {
    border: 0.2rem solid #000;
  }

  ${({ staticIcon }) => css`
    ${staticIcon &&
    css`
      cursor: auto;
    `}
  `}
`;
