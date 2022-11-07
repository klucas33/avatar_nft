import React from "react";
import styled from "styled-components";
import "../styles/community.css";

const Container = styled.div`
  height: 100vh;
  background-color: black;
`;

export default function Community() {
  return (
    <Container id="4">
      <article>
        <h1>THINK AND MOVE BEYOND</h1>
        <p>본인만의 개성을 널리 알릴 수 있는 기회!</p>
      </article>
    </Container>
  );
}
