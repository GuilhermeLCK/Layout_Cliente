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
        Veja nossas <span>Modalidades</span>
      </h1>
      <div className="content-Modalities-sections">
        <div className="content-Modalities-section jiu">
          <h2> JIU JITSU</h2>
        </div>
        <div className="content-Modalities-section karate">
          <h2> KARATÊ</h2>
        </div>
        <div className="content-Modalities-section boxe">
          <h2>BOXE</h2>
        </div>
        <div className="content-Modalities-section tay">
          <h2> MUAY THAI</h2>
        </div>
      </div>
    </div>
  );
}

export default Modalities;
