import { Title, CardProduct } from "../../atoms";
import {
  Container,
  WrapperHeaderSection,
  WrapperProducts,
  ViewAll,
} from "./styles";
import { listProducts } from "./mock";

export const CardProductList = () => {
  return (
    <Container>
      <WrapperHeaderSection>
        <Title children="Shop The Latest" />
        <ViewAll tabIndex={0}>View All</ViewAll>
      </WrapperHeaderSection>

      <WrapperProducts>
        {listProducts?.map(({ id, name, image, price }) => (
          <CardProduct
            key={id}
            id={id}
            name={name}
            image={image}
            price={price}
          />
        ))}
      </WrapperProducts>
    </Container>
  );
};
