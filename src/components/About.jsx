import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  background-color: black;
`;

export default function About() {
  return (
    <Container id="5">
      <article>
        <h1>MORE THAN JUST A FRIEND</h1>
        <p>나만의 다람쥐를 꾸며본다!</p>
      </article>
    </Container>
  );
}
