import React from "react";
import styled from "styled-components";
import "../styles/footer.css";
import { Link as LinkToPage } from "react-router-dom";

const Container = styled.div`
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  border-top: 3px solid white;
`;

const Line = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

const TEXT = styled.p`
  font-size: 15px;
  cursor: pointer;
  text-align: left;
  width: 20%;
`;

const IconTo = styled.div`
  width: max-content;
  display: flex;
  height: 100%;
`;

const Icon = styled.i`
  width: max-content;
  color: white;
  display: inline-block;
  font: normal normal normal 14px/1 ForkAwesome;
  font-size: 19px;
  margin-left: 20px;
  transition: 0.5s;
  &:hover {
    color: blue;
  }
`;

export default function Footer() {
  const goTop = () => {
    return window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Container>
      <Line>
        <TEXT>&copy;&nbsp; All Right Reserved</TEXT>
        <TEXT>이용약관</TEXT>
        <TEXT>파트너십 문의</TEXT>
        <TEXT>문의</TEXT>
      </Line>
      {/* <div className="row" onClick={goTop}>
          <span>🔺</span>
        </div> */}
      <IconTo>
        <a href="https://twitter.com/OfficialOnePick">
          <Icon className="fa fa-twitter" aria-hidden="true"></Icon>
        </a>
        <a href="https://discord.gg/AfcThxtea7">
          <Icon className="fa fa-discord-alt" aria-hidden="true"></Icon>
        </a>
      </IconTo>
    </Container>
  );
}
