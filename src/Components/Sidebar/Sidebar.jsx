import React from "react";
import "./style.css";
import { BsFillAirplaneFill } from "react-icons/bs";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { Divider } from "@mui/material";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Nav } from "react-bootstrap";

const Sidebar = () => {
  const { pathname } = useLocation();

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="sidebar">
      <div className="sidebar_item">
        <BsFillAirplaneFill className="icon" />
             <NavLink
              exact
              activeClassName={"now"}
              className={pathname === "/" ? "Link now" : "Link"}
              to="/"
              >
              <div className="item_tite" >
              Dashboard
          </div>
            </NavLink>
       </div>
      <div className="sidebar_item">
        <BsFillAirplaneFill className="icon" />
        <div className="item_tite space">
          <div>Users</div>
          <div onClick={handleClick}>
            {open ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
          </div>
        </div>
      </div>

      {open ? null : (
        <div className="sidebar_inside">
          <div className="sidebar_item">
            <BsFillAirplaneFill className="icon sidebar_insidef" />
            <div className="item_tite sidebar_insidef">Products</div>
          </div>
          <div className="sidebar_item">
            <BsFillAirplaneFill className="icon sidebar_insidef" />
            <div className="item_tite sidebar_insidef">Products</div>
          </div>
        </div>
      )}
      <div className="sidebar_item">
        <BsFillAirplaneFill className="icon" />
        <div className="item_tite">Products</div>
      </div>

      <div className="sidebar_item">
        <BsFillAirplaneFill className="icon" />
        <div className="item_tite">ChatBot</div>
      </div>
      <Divider component="div" />

      <div className="sidebar_item">
        <BsFillAirplaneFill className="icon" />
        <div className="item_tite">Tables</div>
      </div>

      <div className="sidebar_item">
        <BsFillAirplaneFill className="icon" />
        <div className="item_tite">Seeting</div>
      </div>
    </div>
  );
};

export default Sidebar;
