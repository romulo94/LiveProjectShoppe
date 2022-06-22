import { useState } from "react";
import { Container, WrapperForm } from "./styles";
import { Switch, Input, Button, Checkbox } from "../../atoms";

export const Form = () => {
  const [isActiveSwitchButton, setIsActiveSwitchButton] = useState(true);

  const handleActiveSwitchButton = () => {
    setIsActiveSwitchButton((prevState) => !prevState);
  };

  return (
    <Container>
      <Switch
        isActiveSwitchButton={isActiveSwitchButton}
        onClick={handleActiveSwitchButton}
      />

      <WrapperForm>
        {!isActiveSwitchButton && (
          <Input
            id="name"
            size="medium"
            label="Name"
            variant="standard"
            ariaDescribedby="nameError"
            error=""
          />
        )}
        <Input
          id="email"
          size="medium"
          label="Email"
          variant="standard"
          ariaDescribedby="emailError"
          error=""
        />
        <Input
          id="password"
          size="medium"
          type="password"
          label="Password"
          variant="standard"
          ariaDescribedby="passwordError"
          error=""
        />
        {!isActiveSwitchButton && (
          <Input
            id="repeatPassword"
            size="medium"
            type="password"
            label="Repeat your password"
            variant="standard"
            ariaDescribedby="repeatPasswordError"
            error=""
          />
        )}

        {isActiveSwitchButton && <Checkbox label="Remember me" />}

        {isActiveSwitchButton ? (
          <Button children="SIGN IN" />
        ) : (
          <Button children="REGISTER" />
        )}
      </WrapperForm>
    </Container>
  );
};
