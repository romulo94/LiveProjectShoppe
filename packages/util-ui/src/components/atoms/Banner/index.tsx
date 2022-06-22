import { BannerProps } from "./types";
import { Container } from "./styles";

export const Banner = ({ children }: BannerProps) => {
  return <Container>{children}</Container>;
};
