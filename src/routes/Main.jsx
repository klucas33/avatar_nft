import React from "react";
import "../styles/main.css";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";

const Container = styled.main`
  position: relative;
`;

const Box = styled.div`
  width: 900px;
  height: 600px;
  background-color: yellow;
  margin-top: 20px;
`;

const Loading = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  color: yellow;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
`;

export default function Main() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
      } catch (e) {
        // handle error case anyway you want
      }
      setIsLoading(false);
    })();
  }, []);

  return (
    <>
      {isLoading ? (
        <Container id="2">
          <Loading>Loading ...</Loading>
        </Container>
      ) : (
        <main id="2">
          <article>
            <h1>Shop Parts</h1>
            <p>나만의 다람쥐를 꾸며본다!</p>
            <Box />
          </article>
        </main>
      )}
    </>
  );
}
