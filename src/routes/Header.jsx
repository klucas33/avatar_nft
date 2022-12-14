import "../styles/header.css";
import { Link } from "react-scroll/modules";
import { Link as LinkToPage } from "react-router-dom";
import styled from "styled-components";

const IconTo = styled.div`
  width: max-content;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Icon = styled.i`
  width: max-content;
  color: white;
  display: inline-block;
  font: normal normal normal 14px/1 ForkAwesome;
  font-size: 19px;
  margin-left: 20px;
  transition: 0.5s;
  &:hover {
    color: blue;
  }
`;

function Header() {
  return (
    <header id="1">
      <nav>
        <div className="box">
          <LinkToPage to="/">
            <h1 className="apple">ONE_Pick</h1>
          </LinkToPage>
          <ul>
            <Link to="1" smooth="true" duration={500}>
              <li>🏠 HOME</li>
            </Link>
            <Link to="2" smooth="true" duration={600}>
              <li>🛍️ SHOP</li>
            </Link>
            <Link to="3" smooth="true" duration={600}>
              <li>🐿️ CHARACTER CRAFTING</li>
            </Link>
            <Link to="4" smooth="true" duration={600}>
              <li>🧑‍🤝‍🧑 COMMUNITY</li>
            </Link>
            <Link to="5" smooth="true" duration={600}>
              <li>ℹ️ ABOUT</li>
            </Link>
          </ul>
          <IconTo>
            <a href="https://twitter.com/OfficialOnePick">
              <Icon className="fa fa-twitter" aria-hidden="true"></Icon>
            </a>
            <a href="https://discord.gg/AfcThxtea7">
              <Icon className="fa fa-discord-alt" aria-hidden="true"></Icon>
            </a>
          </IconTo>
        </div>
      </nav>
    </header>
  );
}

export default Header;
