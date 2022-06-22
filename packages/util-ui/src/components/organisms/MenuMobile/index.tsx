import { LogoutOutlined, PersonOutlineOutlined } from "@mui/icons-material";
import { Navigate } from "../../molecules";
import { Separator } from "../../atoms";
import { Menu, WrapperSeparator } from "./styles";

export const MenuMobile = () => {
  return (
    <Menu>
      <Navigate path="/" children="Home" />
      <Navigate path="/shop" children="Shop" />
      <Navigate path="/our_story" children="Our Story" />

      <WrapperSeparator>
        <Separator maxWidth="100%" />
      </WrapperSeparator>

      <Navigate
        path="/account"
        children="My Account"
        icon={<PersonOutlineOutlined fontSize="large" />}
      />
      <Navigate
        path="/logout"
        children="Logout"
        icon={<LogoutOutlined fontSize="large" />}
      />
    </Menu>
  );
};
