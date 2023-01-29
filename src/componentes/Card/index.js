import React from "react";
import './style.css'

const Card = (props) => {
  return (
    <div className="card-box">
      {/* Colocar Cards aqui || Serão 3 cards de experiencias de trabalho*/}

      <span className="infospan">{props.Data}</span>
      <h4>{props.Cargo}</h4>
      <span>{props.Empresa}</span>
      <p>
        {props.Descricao}        
      </p>
    </div>
  );
};

export default Card;
