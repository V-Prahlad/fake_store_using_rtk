import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const NavBar = () => {
  const cart = useSelector((state) => state.cartReducer);
  console.log(cart.length);
  return (
    <Nav>
      <Logo>Doidde Store</Logo>
      <Cart> {cart.length}</Cart>
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
`;

const Logo = styled.div`
  font-size: 25px;
  margin-left: 30px;
`;

const Cart = styled.div`
  font-size: 20px;
  margin-right: 20px;
`;
