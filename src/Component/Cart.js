import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { remove } from "../redux/cartSlice";

const Cart = () => {
  const dipatch = useDispatch();
  const data = useSelector((state) => state.cartReducer);

  const handleDelete = (product) => {
    dipatch(remove(product));
  };

  return (
    <MainParent>
      {data.map((product) => {
        return (
          <Parent key={product.id}>
            <Main>
              <div>
                <img src={product?.images[0]} alt='' />
              </div>
              <Title>{product?.title}</Title>
              <Price>₹ {product?.price} Only</Price>
              <button onClick={() => handleDelete(product.id)}>
                Remove Item
              </button>
            </Main>
          </Parent>
        );
      })}
    </MainParent>
  );
};

export default Cart;
const MainParent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  // margin-top: 55px;
`;
const Parent = styled.div`
  margin: 55px auto 10px auto;
`;

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
