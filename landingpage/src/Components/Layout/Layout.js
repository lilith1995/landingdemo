import React from "react";

import "./Layout.scss";

const Layout = ({ children }) => {
  return <main className="app-layout">{children}</main>;
};

export default Layout;
