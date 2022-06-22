import { Container } from "./styles";
//@ts-ignore
import { Title, Form } from "@shoppe/util-ui";

export default function Root() {
  return (
    <Container>
      <Title children="My account" center={true} />
      <Form />
    </Container>
  );
}
