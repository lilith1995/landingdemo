import React from "react";

import Link from "../../Components/Link/Link";
import FormUp from "../../Components/Form/FormUp/FormUp";
import "./Header.scss";

import logo from "../../Assets/orbiter_final_logo_colored.svg";
import headerBackground from "../../Assets/jumbotron_robot.png";

const Header = () => {
  return (
    <header>
      <div className="navbar">
        <nav>
          <a href="#">
            <img src={logo} alt="page-logo" />
          </a>
          <div className="navbar-right-links">
            <Link>Docs</Link>
            <Link>Login</Link>
          </div>
        </nav>
      </div>
      <div className="header-section">
        <div className="header-left-text">
          <div className="header-text">
            <h1>Imagine if your metrics monitored themselves</h1>
            <p>
              Never miss an issue that is impacting your revenue or customer
              experience ever again.
            </p>
          </div>
          <FormUp />
        </div>
        <div className="header-right-image">
          <img src={headerBackground} alt="header-background" />
        </div>
      </div>
    </header>
  );
};

export default Header;
