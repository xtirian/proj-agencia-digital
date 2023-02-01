import React from "react";
import "./style.css";

const Rodape = (props) => {
  return (
    <footer className={props.temaAtual ? "tema-escuro" : "tema-claro"}>
      <div className="limitar-secao rodape-container">
        <img src="/assets/logoM.png" alt="logo" className="foot-logo" />
        <p>
          Ajudamos a criar uma personalidade digital construindo sua marca no
          ambiente online utilizando estratégias, ferramentas e tecnologias
          personalizadas.
        </p>
        <div className="redes-sociais-grid">
          <img src="/assets/facebook.png" alt="fb-logo" className="social" />
          <img src="/assets/twitter.png" alt="tt-logo" className="social" />
          <img
            src="/assets/linkedin.png"
            alt="linkedin-logo"
            className="social"
          />
          <img
            src="/assets/dribble.png"
            alt="dribble-logo"
            className="social"
          />
          <img src="/assets/behance.png" alt="be-logo" className="social" />
          <img
            src="/assets/google-plus.png"
            alt="gplus-logo"
            className="social"
          />
        </div>
        <p className="copyright">
          Copyright 2023 © <span className="copy-autor">xTirian</span>
        </p>
      </div>
    </footer>
  );
};

export default Rodape;
