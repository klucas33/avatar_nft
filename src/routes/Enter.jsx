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
  height: 100vh;
  margin-top: 100px;
  width: 100%;
  position: relative;
`;

const BGImage = styled.img`
  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  color: white;
  font-size: 80px;
  position: absolute;
  top: -12%;
  left: 410px;
`;

const Content = styled.article`
  width: 400px;
  height: 200px;
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  position: absolute;
  font-weight: 100;
  bottom: 0;
  left: 0%;
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
  height: 70px;
  background-color: #bfc500;
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
  const { connector, chainId, account, active, activate, deactivate } =
    useWeb3React();

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
          <Content>
            <CotentInfo>
              Welcome to <br />
              ONE_Pick
            </CotentInfo>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                width: "80%",
              }}
              to="./home"
            >
              <EnterButton onClick={connectWallet}>Enter</EnterButton>
            </Link>
          </Content>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
