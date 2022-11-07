import Header from "./components/Header";
import Main from "./components/Main";
import AvatarCustom from "./components/AvatarCustom";
import Community from "./components/Community";
import About from "./components/About";
import GlobalStyle from "./GlobalStyle";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <AvatarCustom />
      <Community />
      <About />
      <Footer />
    </>
  );
}

export default App;
