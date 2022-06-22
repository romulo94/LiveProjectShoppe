import { ButtonHTMLAttributes } from "react";

export type SwitchProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isActiveSwitchButton: boolean;
};
