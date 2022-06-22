import { FormControlLabel, Checkbox as CheckboxContent } from "@mui/material";
import { Container } from "./styles";

export const Checkbox = ({ label, ...props }) => {
  return (
    <Container>
      <FormControlLabel
        label={label}
        control={<CheckboxContent defaultChecked />}
        {...props}
      />
    </Container>
  );
};
