import React from "react";
import "./style.css";
import * as Si from "react-icons/si";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <a href="https://github.com/S-Nuttapong">
        <Si.SiGithub />
        <br />
        {currentYear}
      </a>
    </footer>
  );
};
