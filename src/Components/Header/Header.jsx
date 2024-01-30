import React, { useState, useEffect } from "react";
import "./Header.scss";
import Logo from "../../Img/Logo.svg";

import b1 from "../../Img/treino.jpg";

import b2 from "../../Img/treino1.png";
function Header() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [b1, b2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((current) =>
        current === images.length - 1 ? 0 : current + 1
      );
    }, 3000); // Troca de imagem a cada 3 segundos (3000 milissegundos)

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="container-Header">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className={`banner-image ${index === currentImage ? "active" : ""}`}
        />
      ))}

      <h2>
        DESAFIE SEUS <br />
        <span>LIMITES</span>
      </h2>
      <a href="#Planos">QUERO COMEÇAR AGORA</a>
    </div>
  );
}

export default Header;
