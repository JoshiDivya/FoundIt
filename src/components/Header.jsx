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
  const classes = useStyle();
  return (
    <div> 
      <AppBar sx={{background:'transparent'}}  position="static">
        <CssBaseline />
        <Toolbar>
          <Typography sx={{color:'black', fontStyle:'Bold', textShadow:'2px 2px 4px #000000'}} variant="h4" className={classes.logo}>
            FoundIt
          </Typography>
            <div className={classes.navlinks}>
              <Link to="/" className={classes.link}>
                Home
              </Link>
              <Link to="/about" className={classes.link}>
                About
              </Link>
              <Link to="/contact" className={classes.link}>
                Contact
              </Link>
              <Link to="/faq" className={classes.link}>
                FAQ
              </Link>
            </div>
         
        </Toolbar>
      </AppBar>
    </div>
  );
}
