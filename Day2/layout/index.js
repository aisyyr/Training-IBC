import React from "react";
import Header from "../layout/header/header.js";
import Footer from "../layout/footer/footer.js";

function index(props) {
  const { children } = props;

  return (
    <div>
      <Header />
      <main className="mt-4">{children}</main>
      <Footer />
    </div>
  );
}

export default index;
