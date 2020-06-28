import React from "react";
// Components
import Footer from "./Footer";
import Navbar from "./Navbar";
import 'static/styles/main.scss';

export default function Container(props) {
  return (
    <React.Fragment>
      <Navbar />
      {props.children}
      <Footer />
    </React.Fragment>
  );
}
