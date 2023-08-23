import React from "react";
import "./style.css";
import { Navbar } from "react-bootstrap";
import { BsFillAirplaneFill } from "react-icons/bs";
 import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import {  IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Header = () => {
  return (
    <div className="header">
      <Navbar expand="lg" className="header_content">
        <Navbar.Brand href="/">
          <div className="logo">
            <BsFillAirplaneFill className="icon_logo" />
            <div className="title_logo">Dashboard</div>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav btn-registration" />
        <Navbar.Collapse id="basic-navbar-nav" className="btn-registration">
           <Badge style={{margin:"0 .8rem"}} color="secondary" badgeContent={5}>
            <MailIcon style={{ color: "#ffff" }} />
          </Badge>
          <IconButton style={{margin:"0 .8rem"}} aria-label="cart">
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartIcon style={{ color: "#ffff" }} />
            </Badge>
          </IconButton>
          <AccountCircleIcon style={{ color: "#ffff",fontSize:32 }}  />
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
