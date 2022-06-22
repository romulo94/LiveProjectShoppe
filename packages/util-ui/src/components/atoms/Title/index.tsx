import { TitleProps } from "./types";
import { Content } from "./styles";

export const Title = ({ children, as, ...props }: TitleProps) => {
  return (
    <Content as={as || "h1"} {...props}>
      {children}
    </Content>
  );
};
