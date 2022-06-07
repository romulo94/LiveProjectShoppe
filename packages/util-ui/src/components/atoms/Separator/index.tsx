import React from "react";

import { Content } from "./styles";
import { SeparatorProps } from "./types";

export const Separator: React.FC<SeparatorProps> = (props: SeparatorProps) => (
  <Content {...props} />
);
