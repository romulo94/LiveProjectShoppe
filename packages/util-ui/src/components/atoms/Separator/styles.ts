import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { SeparatorProps } from "./types";

export const Content = styled.span<SeparatorProps>`
  ${({ dark, maxWidth, maxHeight }) => css`
    background-color: ${dark ? "#000" : "#d8d8d8"};
    width: ${maxWidth ? "100%" : "0.1rem"};
    height: ${maxHeight ? "100%" : "0.1rem"};
    max-width: ${maxWidth || "inherit"};
    max-height: ${maxHeight || "inherit"};
  `};
`;
