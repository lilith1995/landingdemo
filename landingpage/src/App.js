import React from "react";

import Header from "./Containers/Header/Header";
import UnderHeader from "./Components/UnderHeader/UnderHeader"
import Layout from "./Components/Layout/Layout";
import Sections from "./Containers/Sections/Sections";
import UpperFooter from "./Components/UpperFooter/UpperFooter";
import Footer from "./Containers/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <UnderHeader />
      <Layout>
        <Sections />
      </Layout>
      <UpperFooter />
      <Footer />
    </div>
  );
}

export default App;
