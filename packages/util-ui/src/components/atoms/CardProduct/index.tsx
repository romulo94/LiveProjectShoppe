import {
  Container,
  TitleCard,
  Price,
  WrapperImage,
  ButtonAddToCart,
} from "./styles";
import { CardProductProps } from "./types";

export const CardProduct = ({ id, name, image, price }: CardProductProps) => {
  return (
    <Container>
      <WrapperImage>
        <img
          src={require(`../../../assets/images/products/listHome/${image}`)}
          alt="gold jewelry"
        />

        <ButtonAddToCart>Add to Cart</ButtonAddToCart>
      </WrapperImage>
      <TitleCard>{name}</TitleCard>
      <Price>{price}</Price>
    </Container>
  );
};
