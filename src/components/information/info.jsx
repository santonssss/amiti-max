import "./info.css";
import * as React from "react";
import ametpng from "../../img/amet.png";
import { NavLink, Route, Routes } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function Info() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="info">
      <header>
        <div className="container">
          <div className="navbar">
            <div className="logo">AmitiMax</div>
            <ul className="menus">
              <div className="btn">
                <Button
                  id="demo-positioned-button"
                  aria-controls={open ? "demo-positioned-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <img src={ametpng} alt="" className="amet-png" />
                </Button>
                <Menu
                  id="demo-positioned-menu"
                  aria-labelledby="demo-positioned-button"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                >
                  <div className="links">
                    <li className="link">
                      <NavLink to={"achievement"} className="achiev">
                        Достижение
                      </NavLink>
                    </li>
                    <li className="link">
                      <NavLink to={"about"}>Информация</NavLink>
                    </li>
                    <li className="link">
                      <NavLink to={"creation"}>Творчество</NavLink>
                    </li>
                    <li className="link">
                      <NavLink to={"fans"}>Фанаты</NavLink>
                    </li>
                  </div>
                </Menu>
              </div>
              <li>
                <NavLink to={"achievement"} className="achiev">
                  Достижение
                </NavLink>
              </li>
              <li>
                <NavLink to={"about"}>Информация</NavLink>
              </li>
              <li>
                <NavLink to={"creation"}>Творчество</NavLink>
              </li>
              <li>
                <NavLink to={"fans"}>Фанаты</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}
