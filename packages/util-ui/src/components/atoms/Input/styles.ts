import styled from "@emotion/styled";

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .MuiInputLabel-root,
  .MuiInputLabel-root::placeholder {
    font-size: 1.6rem;
  }

  .MuiInputLabel-root {
    line-height: 5.2rem;
  }

  label.Mui-focused {
    color: #000;
  }

  .MuiInputLabel-root {
    color: #707070;
  }

  .MuiInputBase-root::after {
    border-bottom: 2px solid #000;
  }

  .MuiFormHelperText-root {
    font-size: 1.4rem;
    color: red;
  }

  input {
    height: 5.2rem;
    font-size: 1.6rem;
  }
`;
