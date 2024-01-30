import React from "react";
import "./About.scss";
import LOGO_PIMENTEL from "../../Img/LOGO_PIMENTEL.png";

function About() {
  return (
    <div className="container-About">
      <div className="content-About">
        <div className="content-About-Inf">
          <h1>
            TÁ DIFÍCIL CONQUISTAR <br />
            <span>O CORPO DOS SEUS SONHOS?</span>
          </h1>
          <p>
            Para quem não me conhece, meu nome é Andre Matheus, mais conhecido
            como Pimentel.{" "}
            <strong>
              Sou graduado em Educação Física e atualmente estou cursando
              pós-graduação em Nutrição Esportiva e Treinamento Físico.
            </strong>{" "}
            Após extensa pesquisa em busca do que realmente traz resultados nos
            treinos, desenvolvi um método exclusivo que foi testado e
            comprovado. Agora, este método estará em suas mãos.
            <br />
            <br />
            <strong>
              O meu objetivo é ajudar você a treinar com resultados e motivação.
            </strong>{" "}
            Todas as planilhas que prescrevo são atualizadas a cada 5 semanas, e
            ofereço um
            <strong> suporte direto COMIGO, 7 dias por semana.</strong>
            <br /> <br />
            <strong> Mude agora para uma vida mais saudável e ativa. </strong>
          </p>

          <a href="">QUERO MUDAR DE VIDA!</a>
        </div>

        <div className="content-About-Logo">
          <img src={LOGO_PIMENTEL} alt="Logo" />
        </div>
      </div>
    </div>
  );
}

export default About;
