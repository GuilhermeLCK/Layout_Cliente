import React from "react";
import "./About.scss";
import Logo from "../../Img/LogoEX.png";

function About() {
  return (
    <div className="container-About">
      <div className="content-About">
        <div className="content-About-Inf">
          <h1>
            Conheça a <span>GLC Tech</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            dolor ipsum sint, deleniti quibusdam ex quam laboriosam cumque nobis
            reiciendis repellendus fugit nam at odit sit dicta a porro atque!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, itaque
            rem voluptatem necessitatibus facilis ad iusto minima fugit
            voluptates nam error et vero voluptatum ex impedit sed quisquam
            inventore fuga.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            dolore, consequuntur tempore architecto itaque facilis. Voluptas
            error, necessitatibus blanditiis nisi id tenetur delectus autem
            quaerat illum facilis, accusantium doloribus quae.
          </p>

          <a href="">FAÇA-NOS UMA VISITA</a>
        </div>

        <div className="content-About-Logo">
          <img src={Logo} alt="Logo" />
        </div>
      </div>
    </div>
  );
}

export default About;
