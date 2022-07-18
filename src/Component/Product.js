import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { add } from "../redux/cartSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleSave = (product) => {
    dispatch(add(product));
  };

  return (
    <Main>
      <div>
        <img src={product.images[0]} alt="" />
      </div>
      <Title>{product.title}</Title>
      <Price>₹ {product.price} Only</Price>
      <button onClick={() => handleSave(product)}>Add to Cart</button>
    </Main>
  );
};

export default Product;

const Main = styled.div`
  background-color: #f0f78f;
  border-radius: 5px;
  border: 1px solid #9d9d54;
  display: flex;
  flex-direction: column;
  height: 267px;
  margin: 10px auto;
  padding: 8px 20px;
  width: 268px;

  img {
    border-radius: 5px;
    height: 114px;
    margin-left: 46px;
    width: 136px;
    &:hover {
      width: 140px;
      height: 114.5px;
    }
  }

  button {
    background: #4e944f;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 16px;
    padding: 9px 10px;
    position: relative;
    top: 17px;
    &:hover {
      background: #446a46;
    }
  }
`;

const Title = styled.div`
  display: flex;
  font-size: 18px;
  justify-content: center;
  margin: 9px 0px 13px 0px;
`;

const Price = styled.div`
  display: flex;
  font-size: 22px;
  justify-content: center;
  margin-left: 25px;
`;
