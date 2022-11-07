import "../styles/header.css";
import { Link } from "react-scroll/modules";

function Header() {
  return (
    <header id="1">
      <nav>
        <h1 className="apple">ONE_Pick</h1>
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
      </nav>
    </header>
  );
}

export default Header;
