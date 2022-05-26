import React from "react";
import { navigateToUrl } from "single-spa";

interface IPropsNavigate {
  path: string;
  children?: React.ReactNode;
}

export const Navigate: React.FC<IPropsNavigate> = ({
  path,
  children,
}: IPropsNavigate) => {
  function redirect(e: React.MouseEvent<HTMLButtonElement>) {
    const originPath = window.location.pathname;
    navigateToUrl(e.currentTarget.name);
    // analytics
    console.log(
      `Saindo da rota '${originPath}' para a rota '${e.currentTarget.name}'!!!`
    );
  }
  return (
    <button name={path} onClick={redirect}>
      {children}
    </button>
  );
};
