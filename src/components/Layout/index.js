import React from "react";
import Header from "../Header";
import Footer from "../Footer";
// import * as S from './styled'

const Layout = ({ children }) => (
  <>
    <Header />
    <main style={{ flex: "1 1 auto", display: "flex", padding: "0 30px 60px", fontFamily: 'Helvetica, sans serif' }}>
      {children}
    </main>
    <Footer />
  </>
);

export default Layout;
