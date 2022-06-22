import { Button as CustomButton } from "@mui/material";
import { Container } from "./styles";

export const Button = ({ children }) => {
  return (
    <Container>
      <CustomButton variant="contained">{children}</CustomButton>
    </Container>
  );
};
