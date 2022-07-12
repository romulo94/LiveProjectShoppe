import { SearchOutlined } from "@mui/icons-material";
import { InputBase } from "@mui/material";
import { Icon } from "components/atoms";
import { Search, Wrapper } from "./styles";

export const SearchBar = () => {
  return (
    <Search>
      <Wrapper>
        <Icon className="icon">
          <SearchOutlined fontSize="large" />
        </Icon>
        <InputBase
          className="InputBase"
          placeholder="Search"
          inputProps={{ "aria-label": "search" }}
        />
      </Wrapper>
    </Search>
  );
};
