import React from "react";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  background-color: black;
`;

const Span = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Title = styled.h1`
  width: 100%;
`;

const Content = styled.p`
  margin-left: 20px;
  font-size: 20px;
`;

const LinkTo = styled.div`
  margin-top: 20px;
  width: 100px;
  background-color: tomato;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  cursor: pointer;
`;

export default function About() {
  const [state, setState] = useState(false);

  const togglePopup = () => {
    setState(!state);
  };
  return <Container id="5"></Container>;
}
