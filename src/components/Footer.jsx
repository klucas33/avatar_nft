import React from "react";
import styled from "styled-components";
import "../styles/footer.css";

const Container = styled.div`
  height: 400px;
  background-color: black;
  color: white;
  position: relative;
  &::after {
    content: "";
    width: 99.6%;
    position: absolute;
    border: 1px solid white;
    bottom: 80px;
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
      <div className="bear">
        <div>
          <p>&copy;&nbsp; ONE_Pick All Right Reserved</p>
          <p>ONE_Pick 이용약관</p>
          <p>개인정보방침</p>
          <p>파트너십 문의</p>
        </div>
        <div className="row" onClick={goTop}>
          <span>🔺</span>
        </div>
      </div>
    </Container>
  );
}
