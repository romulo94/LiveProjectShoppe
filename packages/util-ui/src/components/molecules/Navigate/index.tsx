import { Container } from "./styles";
import React from "react";
import { navigateToUrl } from "single-spa";
import { NavigateProps } from "./types";

export const Navigate = ({ path, children, icon }: NavigateProps) => {
  const redirect = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigateToUrl(e.currentTarget.name);
  };

  return (
    <Container
      name={path}
      onClick={redirect}
      aria-label={`Go to Page ${children}`}
    >
      {icon}
      {children}
    </Container>
  );
};
