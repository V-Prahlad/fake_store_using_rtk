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
  height: 50px;
  background-color: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  color: Black;
`;
