import { ArrowForwardOutlined } from "@mui/icons-material";
import { InputBase } from "@mui/material";
import { NewsletterProps } from "./types";
import { Icon } from "../../atoms";
import { Search, Wrapper } from "./styles";

export const Newsletter = ({ placeholder }: NewsletterProps) => {
  return (
    <Search>
      <Wrapper>
        <InputBase
          className="InputBase"
          placeholder={placeholder}
          inputProps={{ "aria-label": placeholder }}
        />
        <Icon className="icon">
          <ArrowForwardOutlined fontSize="large" />
        </Icon>
      </Wrapper>
    </Search>
  );
};
