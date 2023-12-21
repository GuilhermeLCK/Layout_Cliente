import React from "react";

import "./Footer.scss";

import Face from "../../Img/face.svg";
import Yt from "../../Img/yt.svg";
import Insta from "../../Img/insta.svg";
import Linkedin from "../../Img/linkedin.svg";
import Logo from "../../Img/LogoSemFundo.png";

function Footer() {
  return (
    <div className="container-Footer">
      <div className="section-meio-Footer">
        <div className="section-contato"></div>
        <div className="section-localizacao">
          <p>Rua G, 22 - Jardim das Flores, São Paulo - SP, 01234-567</p>

          <p>Siga-nos nas redes sociais</p>
          <div className="section-localizacao-link">
            <a href="#" target="_blank">
              <img src={Face} alt="Logo" />
            </a>
            <a href="#" target="_blank">
              <img src={Yt} alt="Logo" />
            </a>
            <a href="#" target="_blank">
              <img src={Insta} alt="Logo" />
            </a>
            <a href="#" target="_blank">
              <img src={Linkedin} alt="Logo" />
            </a>
          </div>
        </div>
      </div>
      <h3>&copy; Todos os direitos reservados</h3>
    </div>
  );
}

export default Footer;
