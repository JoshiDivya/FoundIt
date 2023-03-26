import React from "react";
import {Link} from "react-router-dom";
import { AppBar, CssBaseline, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Search from "./Search";

const useStyle = makeStyles(() => ({
  navlinks: {
    marginLeft: "10px",
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "20px",
    marginLeft: "10px",
    "&:hover": {
      color: "gray",
      borderBottom: "1px solid white",
    },
  },
}));



export default function Header() {
  return (
    <div className="section-header"> 
    <Search/>
    </div>
  );
}
