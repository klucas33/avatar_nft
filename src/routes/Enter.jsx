import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import MainBg from "../assets/image/main_bg.png";
import { Link } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../lib/connectors";

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Box = styled.div`
  height: 80vh;
  margin-top: 100px;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
`;

const BGImage = styled.img`
  width: 80%;
  height: 80%;
`;

const Title = styled.h1`
  color: white;
  font-size: 80px;
  position: absolute;
  top: -7%;
  left: 36%;
  margin: 0px;
  cursor: none;
`;

const Box1 = styled.div`
  width: 320px;
  height: 120px;
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  position: absolute;
  bottom: 31%;
  left: 10%;
`;

const CotentInfo = styled.h1`
  display: flex;
  width: 100%;
  height: 80%;
  margin: 20px 0 0 0;
  align-items: flex-start;
  justify-content: left;
`;

const EnterButton = styled.div`
  height: 60px;
  background-color: #bfc500;
  width: 100%;
  border-radius: 8px;
  color: #000;
  font-size: 20px;
  margin-bottom: 20px;
  transition: 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: white;
  }
`;

export default function Enter() {
  const { active, activate, deactivate } = useWeb3React();

  const connectWallet = async () => {
    try {
      await activate(injected, (error) => {
        // 크롬 익스텐션 없을 경우 오류 핸들링
        if (!active) throw new Error("Metamask 익스텐션을 설치해주세요");
      });
    } catch (err) {
      alert(err);
      window.open("https://metamask.io/download.html");
    }
  };

  return (
    <>
      <Container>
        <Box>
          <BGImage src={MainBg} />
          <Title>ONE_Pick</Title>
          <Box1>
            <CotentInfo>
              Welcome to <br />
              ONE_Pick
            </CotentInfo>
            <Link
              style={{
                color: "black",
                width: "100%",
              }}
              to="./home"
            >
              <EnterButton onClick={connectWallet}>Enter</EnterButton>
            </Link>
          </Box1>
        </Box>
      </Container>
      <Footer />
    </>
  );
}

// async await 비동기 시스템 적용
