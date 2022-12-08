import React from "react";
import styled from "styled-components";
import "../styles/community.css";

const Container = styled.div`
  background-color: black;
  height: 100vh;
`;

export default function AvatarCustom() {
  return (
    <Container id="3">
      <article>
        <h1>ONLY ONE ORIGINAL</h1>
        <p>내가 만든 캐릭터가 나만의 NFT 프로필로 설정할 수 있다!</p>
      </article>
    </Container>
  );
}
