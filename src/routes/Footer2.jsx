import React from "react";
import styled from "styled-components";
import "../styles/footer.css";

const Container = styled.div`
  height: 400px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  position: relative;
`;

const Line = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 80px;
  width: 90%;
  margin: 0 auto;
  border-top: 3px solid white;
`;

const TEXT = styled.p`
  font-size: 15px;
  cursor: pointer;
  text-align: left;
`;

const Up = styled.div`
  position: absolute;
  right: 80px;
  bottom: 20px;
  border: 1px solid white;
  border-radius: 100%;
  font-size: 30px;
  cursor: pointer;
`;

export default function Footer2() {
  const goTop = () => {
    return window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Container>
      <div className="bear">
        <Line>
          <TEXT>&copy;&nbsp; ONE_Pick All Right Reserved</TEXT>
          <TEXT>이용약관</TEXT>
          <TEXT>파트너십 문의</TEXT>
          <TEXT>문의</TEXT>
        </Line>
        <Up onClick={goTop}>
          <span>🔺</span>
        </Up>
      </div>
    </Container>
  );
}
