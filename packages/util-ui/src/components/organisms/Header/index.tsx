import { Container, Wrapper, GroupMenu } from "./styles";
import { Navigate, Logo, Separator, Icon } from "../../atoms";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  PersonOutlineOutlined,
} from "@mui/icons-material";

export const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo />
        <GroupMenu>
          <Navigate path="/" children="Home" />
          <Navigate path="/shop" children="Shop" />
          <Navigate path="/our_story" children="Our Story" />

          <Separator dark maxHeight="1.7rem" />

          <Icon cursorPointer>
            <SearchOutlined fontSize="large" />
          </Icon>
          <Icon cursorPointer>
            <ShoppingCartOutlined fontSize="large" />
          </Icon>
          <Icon cursorPointer>
            <PersonOutlineOutlined fontSize="large" />
          </Icon>
        </GroupMenu>
      </Wrapper>
    </Container>
  );
};
