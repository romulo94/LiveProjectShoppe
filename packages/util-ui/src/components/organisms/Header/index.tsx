import { useState } from "react";
import { navigateToUrl } from "single-spa";
import { Navigate, SearchBar } from "../../molecules";
import { Logo, Separator, Icon } from "../../atoms";
import { MenuMobile } from "../MenuMobile";
import {
  Container,
  Wrapper,
  GroupMenu,
  WrapperMobile,
  WrapperDesktop,
  ContentHeader,
  WrapperSearchBar,
} from "./styles";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  PersonOutlineOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@mui/icons-material";

export const Header = () => {
  const [isOpenMenuMobile, setIsOpenMenuMobile] = useState(false);
  const [isShowSearchBar, setIsShowSearchBar] = useState(false);

  const handleShowMenuMobile = () => {
    setIsOpenMenuMobile((prevState) => !prevState);
  };

  const handleShowSearchBar = () => {
    setIsShowSearchBar((prevState) => !prevState);
  };

  const renderIconMenuMobile = isOpenMenuMobile ? (
    <CloseOutlined fontSize="large" />
  ) : (
    <MenuOutlined fontSize="large" />
  );

  return (
    <ContentHeader>
      <Container>
        <Wrapper>
          <Logo />
          <GroupMenu>
            <WrapperDesktop>
              <Navigate path="/" children="Home" />
              <Navigate path="/shop" children="Shop" />
              <Navigate path="/our_story" children="Our Story" />

              <Separator dark={true} maxHeight="1.7rem" />

              <Icon
                onClick={handleShowSearchBar}
                children={<SearchOutlined fontSize="large" />}
              />
              <Icon children={<ShoppingCartOutlined fontSize="large" />} />
              <Icon
                onClick={() => navigateToUrl("account")}
                children={<PersonOutlineOutlined fontSize="large" />}
              />
            </WrapperDesktop>

            <WrapperMobile>
              <Icon children={<ShoppingCartOutlined fontSize="large" />} />
              <Icon
                onClick={handleShowMenuMobile}
                children={renderIconMenuMobile}
              />
            </WrapperMobile>
          </GroupMenu>
        </Wrapper>
      </Container>

      <WrapperSearchBar isShowSearchBar={isShowSearchBar}>
        <SearchBar />
      </WrapperSearchBar>

      {isOpenMenuMobile && <MenuMobile />}
    </ContentHeader>
  );
};
