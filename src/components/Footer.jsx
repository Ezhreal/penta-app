/* eslint-disable no-unused-vars */
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  const ano = new Date().getFullYear(); // Obtém o ano atual
  const iconeCopyright = "\u00A9"; // Símbolo de copyright (©)
  const penta = "Penta";

  return (
    <footer className="footer">
      <div className="container mx-auto flex justify-between items-center">
        <div className="copyright">
          {iconeCopyright} {penta} {ano}
        </div>
        <div className="social-icons">
          <a href="URL_DO_LINKEDIN" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="URL_DO_INSTAGRAM" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
