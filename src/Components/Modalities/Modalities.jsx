import React from "react";
import "./Modalities.scss";

import Jiu from "../../Img/jiu.png";

import Box from "../../Img/box.png";

import Karate from "../../Img/karate.png";

import Muai from "../../Img/muai.png";

function Modalities() {
  return (
    <div className="container-Modalities">
      <h1>
        Conheça nossas opções de <span>Treino</span>
      </h1>
      <div className="content-Modalities-sections">
        <div className="content-Modalities-section musculacao">
          <h2>MUSCULAÇÃO </h2>
        </div>
        <div className="content-Modalities-section funcional">
          <h2> TREINAMENTO FUNCIONAL</h2>
        </div>
        <div className="content-Modalities-section emagrecimento">
          <h2>TREINAMENTO PARA EMAGRECIMENTO</h2>
        </div>
        <div className="content-Modalities-section mobilidade">
          <h2> FLEXIBILIDADE E MOBILIDADE </h2>
        </div>
      </div>
    </div>
  );
}

export default Modalities;
