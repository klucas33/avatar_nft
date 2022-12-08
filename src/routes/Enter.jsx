import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import MainBg from "../assets/image/main_bg.png";
import { Link } from "react-router-dom";

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
  left: 500px;
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
  background-color: #bfc500;
  border-radius: 8px;
  color: #000;
  font-size: 20px;
  width: 80%;
  height: 100px;
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
            <EnterButton>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="./home"
              >
                Enter
              </Link>
            </EnterButton>
          </Content>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
