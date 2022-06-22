import { Wrapper } from "./styles";
import { IconProps } from "./types";

export const Icon = ({ children, staticIcon, ...props }: IconProps) => {
  return (
    <Wrapper
      as={staticIcon ? "span" : "button"}
      staticIcon={staticIcon}
      {...props}
    >
      {children}
    </Wrapper>
  );
};
