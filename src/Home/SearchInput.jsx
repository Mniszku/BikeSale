import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 20,
  backgroundColor: "white",
  marginTop: 80,
  width: "2vw",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "10vw",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "2vw",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#000000",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),

    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "2vw",
    [theme.breakpoints.up("sm")]: {
      width: "12vw",
      "&:focus": {
        width: "20vw",
      },
    },
  },
}));

const SearchInput = () => {
  return (
    <>
      <Search>
        <SearchIconWrapper>
          <SearchIcon
            style={{
              width: "1.2vw",
              height: "1.2vw",
              marginTop: "0.2vw",
            }}
          />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Szukaj…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
    </>
  );
};

export default SearchInput;
