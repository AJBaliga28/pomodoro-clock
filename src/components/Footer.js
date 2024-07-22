import React from "react";
import "../styles/Footer.css";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <hr />
      <p>
        Developed with <FaHeart /> by{" "}
        <>
          <a href="https://www.github.com/ajbaliga28">A.J.Baliga</a>
        </>
        .
      </p>
    </footer>
  );
};

export default Footer;
