import React from "react";
import About from "./About";
import AvatarCustom from "./AvatarCustom";
import Community from "./Community";
import Footer2 from "./Footer2";
import Header from "./Header";
import Main from "./Main";

export default function RenderPage() {
  return (
    <>
      <Header />
      <Main />
      <AvatarCustom />
      <Community />
      <About />
      <Footer2 />
    </>
  );
}
