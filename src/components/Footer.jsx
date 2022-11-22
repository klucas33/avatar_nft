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
          <p>&copy;&nbsp; ONE_Pick All Right Reserved</p>
          <p>ONE_Pick 이용약관</p>
          <p>개인정보방침</p>
          <p>파트너십 문의</p>
        </Line>
        <div className="row" onClick={goTop}>
          <span>🔺</span>
        </div>
      </div>
    </Container>
  );
}
