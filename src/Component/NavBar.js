import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartLogo from "../asset/cart.png";

const NavBar = () => {
  const cart = useSelector((state) => state.cartReducer);

  return (
    <Nav>
      <Logo>
        <Link to="/">Doidde Store</Link>
      </Logo>
      <Cart>
        <SubCart>
          <Link to="/cart">
            <img src={CartLogo} alt="" />
          </Link>
          <span>{cart.length}</span>
        </SubCart>
      </Cart>
    </Nav>
  );
};

export default NavBar;

const Nav = styled.div`
  align-items: center;
  background-color: yellow;
  border-bottom: 1px solid white;
  color: #040303;
  display: flex;
  height: 60px;
  justify-content: space-between;

  a {
    text-decoration: none;
  }
`;

const Logo = styled.div`
  font-size: 25px;
  margin-left: 30px;
`;

const Cart = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  mrgin-right: 20px;
  position: relative;

  img {
    height: 60px;
    width: 60px;
  }

  span {
    border-radius: 50%;
    position: absolute;
    right: 45px;
    color: #4e944f;
    top: 9px;
  }

  a {
    text-decoration: none;
  }
`;

const SubCart = styled.div`
  margin-left: 20px;
`;
