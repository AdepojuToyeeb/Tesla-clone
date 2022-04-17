import React, { useState } from "react";
import styled from "styled-components";
import logo from "../logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <nav className="header-container">
      <a>
        <img src={logo} alt="logo" />
      </a>
      <div className="header-menu">
        {cars && cars.map((car, index) => <a key={index} href="#">{car}</a>)}

        <a href="#">Solar roof</a>

        <a href="#">Solar panel</a>
      </div>
      <div className="right-menu">
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <CustomMenu onClick={() => setMenuOpen(true)} />
      </div>
      <BurgerNav show={menuOpen}>
        <CloseWrapper>
          <CustomClose onClick={() => setMenuOpen(false)} />
        </CloseWrapper>
        <div className="links">
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
        </div>
      </BurgerNav>
    </nav>
  );
}

export default Header;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  padding-top: 20px;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style-type: none;
  padding: 10px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 20px;
  padding-right: 12px;
`;
