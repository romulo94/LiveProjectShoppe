import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: #efefef;
  border-radius: 8px;
  height: 6rem;
  padding: 5px;
  column-gap: 5px;
  margin-bottom: 2.4rem;

  @media only screen and (min-width: 1024px) {
    margin-bottom: 6.4rem;
  }
`;

export const SwitchButton = styled.button<{ isActiveSwitchButton: boolean }>`
  width: 50%;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  border-radius: 8px;
  cursor: pointer;
  ${({ isActiveSwitchButton }) => css`
    background-color: ${isActiveSwitchButton ? "#fff" : "#efefef"};
    box-shadow: ${isActiveSwitchButton
      ? "1px 1px 4px rgba(0, 0, 0, 0.1)"
      : "none"};
    border: 2px solid ${isActiveSwitchButton ? "#fff" : "#efefef"};
  `}

  &:focus {
    border: 2px solid #000;
  }
`;
