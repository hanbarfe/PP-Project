import React from "react";
import "./index.css";

const Botao = props => {
  return (
    <button href="#" className="myButton" onClick={props.content}>{props.children}</button>
  );
};

export default Botao;
