import React from "react";
import { useGetProductQuery } from "../redux/rtkQuery";
import styled from "styled-components";
import Product from "./Product";
import Spinner from "../asset/spinner2.gif";

const Home = () => {
  const { data = [], isLoading } = useGetProductQuery();

  return (
    <Main>
      <Loading>
        {isLoading ? <img src={Spinner} alt="Loading ..." /> : ""}
      </Loading>
      {data.map((item) => {
        return <Product key={item.id} product={item} />;
      })}
    </Main>
  );
};

export default Home;

const Loading = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Main = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
