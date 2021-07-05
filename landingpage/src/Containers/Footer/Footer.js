import React from "react";

import Link from "../../Components/Link/Link";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-links">
          <div className="company">
            <p>Company</p>
            <ul>
              <li>
                <Link>Contact</Link>
              </li>
              <li>
                <Link>Security</Link>
              </li>
            </ul>
          </div>
          <div className="legal">
            <p>Legal</p>
            <ul>
              <li>
                <Link>Terms of Service</Link>
              </li>
              <li>
                <Link>Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="docs">
            <p>Docs</p>
            <ul>
              <li>
                <Link>Getting Started</Link>
              </li>
              <li>
                <Link>ML Alerting</Link>
              </li>
              <li>
                <Link>Slack Alerts</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-copyright">
          <p>
            &copy; 2020 Orbiter (InGoodCompany Inc). All Rights Reserved. San
            Francisco, CA
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
