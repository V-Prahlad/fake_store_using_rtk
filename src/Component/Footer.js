import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Fstyle>
      <div>© Prahlad</div>
    </Fstyle>
  );
};

export default Footer;

const Fstyle = styled.div`
  align-items: center;
  background-color: yellow;
  color: red;
  display: flex;
  height: 50px;
  justify-content: center;
  width: 100vw;
`;
