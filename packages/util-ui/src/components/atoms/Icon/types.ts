import { ReactNode } from "react";

export type IconProps = {
  children: ReactNode;
  staticIcon?: boolean;
  className?: string;
  onClick?: () => void;
};
