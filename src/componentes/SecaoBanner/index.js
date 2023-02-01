import React from "react";
import './style.css';

const Banner = (props) => {
    return (
        <section className="sct-banner">
          <div id="banner" className={props.temaAtual ? "tema-escuro" : "tema-claro"}>
            {/* imagem no background */}
          </div>
          <div className="titulo-pagina">
            <p>BRANDING / UI / UX / TECNOLOGIA</p>
            <h2>Agência de Branding</h2>
            <span>e design digital</span>
          </div>
        </section>
    )
}

export default Banner;