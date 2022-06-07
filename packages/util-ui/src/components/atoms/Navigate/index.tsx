import React from "react";
import { navigateToUrl } from "single-spa";
import { Container } from "./styles";
import { NavigateProps } from "./types";

export const Navigate: React.FC<NavigateProps> = ({
  path,
  children,
}: NavigateProps) => {
  function redirect(e: React.MouseEvent<HTMLButtonElement>) {
    navigateToUrl(e.currentTarget.name);
  }

  return (
    <Container
      name={path}
      onClick={redirect}
      aria-label={`Go to Page ${children}`}
    >
      {children}
    </Container>
  );
};
