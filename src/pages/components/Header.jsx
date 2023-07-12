import React, { useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import HeaderDropdown from "./HeaderDropdown";

import logo from "../img/logo.png";
import headerbutton from "../img/headerbutton.svg";

const Header = () => {
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState(false);
  const dropDownHandler = () => {
    setIsShow((props) => !props);
  };

  return (
    <HeaderSection>
      <div className="logo">
        <img src={logo} alt="Logo" onClick={() => navigate("/")} />
        <h1 onClick={() => navigate("/")}>COZ Shopping</h1>
      </div>
      <button onClick={dropDownHandler}>
        <img src={headerbutton} alt="헤더 드롭다운 버튼" />
      </button>
      {isShow ? <HeaderDropdown /> : ""}
    </HeaderSection>
  );
};

const HeaderSection = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 5rem;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.1);

  .logo {
    display: flex;
    margin-left: 4rem;
    height: 1.875rem;

    img {
      cursor: pointer;
    }

    h1 {
      width: 14.375rem;
      margin-left: 5rem;
      font-size: 2rem;
      line-height: 1.75rem;
      letter-spacing: 0em;
      cursor: pointer;
    }
  }
  button {
    width: 1.875rem;
    height: 1.5625rem;
    margin-right: 4.5rem;
    background: #ffffff;
    cursor: pointer;
  }
`;

export default Header;
