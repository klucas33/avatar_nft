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
  height: 80px;
  width: 95%;
  margin: 0 auto;
  border-top: 3px solid white;
`;

const TEXT = styled.p`
  font-size: 15px;
  cursor: pointer;
  text-align: left;
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
      <div className="bear">
        <Line>
          <TEXT>&copy;&nbsp; ONE_Pick All Right Reserved</TEXT>
          <TEXT>ONE_Pick 이용약관</TEXT>
          <TEXT>파트너십 문의</TEXT>
        </Line>
        <div className="row" onClick={goTop}>
          <span>🔺</span>
        </div>
      </div>
    </Container>
  );
}
