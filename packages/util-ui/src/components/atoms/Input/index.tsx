import { FormHelperText, TextField } from "@mui/material";
import { FormWrapper } from "./styles";

export const Input = ({ ariaDescribedby, error, ...props }): JSX.Element => {
  return (
    <FormWrapper>
      <TextField {...props} />
      {error && (
        <FormHelperText id={ariaDescribedby}>Invalid padding!</FormHelperText>
      )}
    </FormWrapper>
  );
};
