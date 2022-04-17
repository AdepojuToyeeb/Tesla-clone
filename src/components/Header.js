import React from "react";
import styled from "styled-components";
import logo from "../logo.svg";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  return (
    <nav className="header-container">
      <a>
        <img src={logo} alt="logo" />
      </a>
      <div className="header-menu">
        <a href="#">Model s</a>

        <a href="#">Model 3</a>

        <a href="#">Model x</a>

        <a href="#">Model y</a>

        <a href="#">Solar roof</a>

        <a href="#">Solar panel</a>
      </div>
      <div className="right-menu">
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <CustomMenu />
      </div>
      <BurgerNav>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
        <li>
          <a href="#">Test Drive</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
        <li>
          <a href="#">Semi</a>
        </li>
        <li>
          <a href="#">Charging</a>
        </li>
        <li>
          <a href="#">Powerwall</a>
        </li>
        <li>
          <a href="#">Commercial Energy</a>
        </li>
        <li>
          <a href="#">Utilities</a>
        </li>
        <li>
          <a href="#">Find us</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
        <li>
          <a href="#">Investor relations</a>
        </li>
        <li>
          <a href="#">United States. English</a>
        </li>
      </BurgerNav>
    </nav>
  );
}

export default Header;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;

`