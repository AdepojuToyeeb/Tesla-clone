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
      <a href="https://www.tesla.com/">
        <img src={logo} alt="logo" />
      </a>
      <div className="header-menu">
        {cars &&
          cars.map((car, index) => (
            <a key={index} href="https://www.tesla.com/">
              {car}
            </a>
          ))}

        <a href="https://www.tesla.com/">Solar roof</a>

        <a href="https://www.tesla.com/">Solar panel</a>
      </div>
      <div className="right-menu">
        <a href="https://www.tesla.com/">Shop</a>
        <a href="https://www.tesla.com/">Account</a>
        <CustomMenu onClick={() => setMenuOpen(true)} />
      </div>
      <BurgerNav show={menuOpen}>
        <CloseWrapper>
          <CustomClose onClick={() => setMenuOpen(false)} />
        </CloseWrapper>
        <div className="links">
          <li>
            <a href="https://www.tesla.com/">Existing Inventory</a>
          </li>
          <li>
            <a href="https://www.tesla.com/">Used Inventory</a>
          </li>
          <li>
            <a href="https://www.tesla.com/">Trade-in</a>
          </li>
          <li>
            <a href="https://www.tesla.com/">Test Drive</a>
          </li>
          <li>
            <a href="https://www.tesla.com/">Cybertruck</a>
          </li>
          <li>
            <a href="https://www.tesla.com/">Roadster</a>
          </li>
          <li>
            <a href="https://www.tesla.com/">Semi</a>
          </li>
          <li>
            <a href="https://www.tesla.com/">Charging</a>
          </li>
          <li>
            <a href="https://www.tesla.com/">Powerwall</a>
          </li>
          <li>
            <a href="https://www.tesla.com/">Commercial Energy</a>
          </li>
          <li>
            <a href="https://www.tesla.com/">Utilities</a>
          </li>
          <li>
            <a href="https://www.tesla.com/">Find us</a>
          </li>
          <li>
            <a href="https://www.tesla.com/">Support</a>
          </li>
          <li>
            <a href="https://www.tesla.com/">Investor relations</a>
          </li>
          <li>
            <a href="https://www.tesla.com/">United States. English</a>
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
