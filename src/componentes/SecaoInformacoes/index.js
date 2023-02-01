import React from "react";
import Card from "../Card";
import "./style.css";

const Informacoes = (props) => {
  
  return (
    <section id="informacoes" className={props.temaAtual ? "tema-escuro" : "tema-claro"}>
      <div className="experiencia limitar-secao">
        <h3>Experiências De Trabalho</h3>
        <p className="exp-texto">
          Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de
          Sites e Marketing Digital, nos empenhamos diariamente para entregar
          resultados que tragam impacto aos nossos clientes.
        </p>
        <div className="grid-experiencia">
          <Card 
          temaAtual = {props.temaAtual}
          Data="JUNHO 2012 - 2016"
          Cargo="Web Designer"
          Empresa="Pied Piper StartUp."
          Descricao="Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"
          />
          <Card
          temaAtual = {props.temaAtual}
          Data="AGOSTO 2016 - 2019"
          Cargo="Product Designer"
          Empresa="E Corp."
          Descricao="Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra"
          />
          <Card 
          temaAtual = {props.temaAtual}
          Data="FEVEREIRO 2019 - 2021"
          Cargo="Digital Consulting"
          Empresa="Arasaka Inc."
          Descricao="Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução"
          />
        </div>
      </div>
    </section>
  );
};

export default Informacoes;
